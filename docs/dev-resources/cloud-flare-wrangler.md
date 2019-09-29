Cloudflare wrangler CLI ref
=======

[Reference document link](https://github.com/cloudflare/wrangler#installation);

# Environments

Environments is a feature that allows you to deploy the same project to multiple places under multiple names. These environments are utilized with the `--env` or `-e` flag on `wrangler build`, `wrangler preview`, and `wrangler publish`.

## Concepts

"top level configuration" refers to the configuration values you specify at the top of your `wrangler.toml`
"environment configuration" refers to the configuration values you specify under an `[env.name]` in your `wrangler.toml`

Here is an example `wrangler.toml` to illustrate

```toml
# top level configruation
type = "webpack"
name = "my-worker-dev"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "dev.example.com/*"
workers_dev = false

# environment configuration
[env.staging]
name = "my-worker-staging"
route = "staging.example.com/*"

# environment configuration
[env.production]
name = "my-worker"
route = "example.com/*"
```

## Usage

The most common use case for environments is deploying to a staging subdomain before your production environment. `wrangler publish` will look at your top level configuration, and you can specify other environments beneath it. Each of these environments will inherit the values from the top level configuration if they are not specified, with the following caveats.

* `type` will always be inherited from the top-level configuration; you cannot specify different types for different environments.
* Fields that can be inherited from the top level are `account_id`, `zone_id`, `workers_dev`, and `webpack_config`. `kv_namespaces` and `route` must be defined for each environment and will not be inherited.
* `name` is inherited. If left out of the environment configuration, a Worker project named `my-worker` with an environment `[env.dev]` would become `my-worker-dev`.

### Examples

#### Top level configuration

##### Routes

This `wrangler.toml` has no environments defined and will publish `my-worker` to `example.com/*`

```toml
type = "webpack"
name = "my-worker"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*"
workers_dev = false # this field specifies that the worker should not be deployed to workers.dev
```

```console
$ wrangler publish
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to example.com/*
```

##### workers.dev

This `wrangler.toml` has no environments defined and will publish `my-worker` to `my-worker.<your-subdomain>.workers.dev`

```toml
type = "webpack"
name = "my-worker"
account_id = "12345678901234567890"
workers_dev = true # this field specifies that the worker should be deployed to workers.dev
```

```console
$ wrangler publish
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker.<your-subdomain>.workers.dev
```

#### Introducing Environments

This `wrangler.toml` adds two environments to the base case.

```toml
type = "webpack"
name = "my-worker-dev"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "dev.example.com/*"
workers_dev = false

[env.staging]
name = "my-worker-staging"
route = "staging.example.com/*"

[env.production]
name = "my-worker"
route = "example.com/*"
```

In order to use environments with this configuration, you can pass the name of the environment via the `--env` flag.

With this configuration, Wrangler will behave in the following manner:

```console
$ wrangler publish
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to dev.example.com/*
```

```console
$ wrangler publish --env staging
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to staging.example.com/*
```

```console
$ wrangler publish --env production
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to example.com/*
```

#### Staging Environment with workers.dev

In order to deploy your code to workers.dev, you must include `workers_dev = true` in the desired environment. Your `wrangler.toml` may look like this:

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*"
workers_dev = false

[env.staging]
workers_dev = true
```

With this configuration, Wrangler will behave in the following manner:

```console
$ wrangler publish
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to example.com/*
```

```console
$ wrangler publish --env staging
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker-staging.<your-subdomain>.workers.dev
```

#### workers.dev as a first class target

If you only want to deploy to workers.dev you can configure Wrangler like so:

```toml
name = "my-worker-dev"
type = "webpack"
account_id = "12345678901234567890"
workers_dev = true

[env.production]
name = "my-worker"

[env.staging]
name = "my-worker-staging"
```

With this configuration, Wrangler will behave in the following manner:

```console
$ wrangler publish
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker-dev.<your-subdomain>.workers.dev
```

```console
$ wrangler publish --env staging
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker-staging.<your-subdomain>.workers.dev
```

```console
$ wrangler publish --env production
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker.<your-subdomain>.workers.dev
```

### Custom webpack configurations

You can specify different webpack configurations for different environments.

```toml
name = "my-worker-dev"
type = "webpack"
account_id = "12345678901234567890"
workers_dev = true
webpack_config = "webpack.dev.js"

[env.production]
name = "my-worker"
webpack_config = "webpack.config.js"

[env.staging]
name = "my-worker-staging"
```

Your default `wrangler build`, `wrangler preview`, and `wrangler publish` commands will all build with `webpack.dev.js`, as will `wrangler build -e staging`, `wrangler preview -e staging`, and `wrangler publish -e staging`. `wrangler build -e production`, `wrangler preview -e production`, and `wrangler publish -e production` would all use your `webpack.config.js` file.

### KV Namespaces with environments

You can specify different kv namespaces for different environments.

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
workers_dev = true
kv-namespaces = [
    { binding = "KV", id = "06779da6940b431db6e566b4846d64db" }
]

[env.production]
kv-namespaces = [
    { binding = "KV", id = "bd46d6484b665e6bd134b0496ad97760" }
]
```

## Invalid configurations

### Multiple types

You cannot specify a type for each environment, type must be specified at the top level of your `wrangler.toml`.

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*"
workers_dev = true

[env.staging]
type = "rust"
```

Wrangler will not error with this configuration, it will build with the `webpack` type.

### Same name for multiple environments

You cannot specify multiple environments with the same name. If this were allowed, publishing each environment would overwrite your previously deployed worker, and the behavior would not be clear.

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*"
workers_dev = false

[env.staging]
name = "my-worker"
workers_dev = true
```

```console
$ wrangler publish
Error: ⚠️  Each name in your `wrangler.toml` must be unique, this name is duplicated: my-worker
```

```console
$ wrangler publish --env staging
Error: ⚠️  Each name in your `wrangler.toml` must be unique, this name is duplicated: my-worker
```

### Ambiguous top level configuration

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*
```

You will be warned if `workers_dev` is left out of the top level configuration because if it is not specified, it is unclear what the behavior of `wrangler publish` should be. See [the section on backwards compatibility](#Backwards-compatibility) for more information.

```console
$ wrangler publish
⚠️  Please specify the workers_dev boolean in the top level of your wrangler.toml.
⚠️  If you do not add workers_dev, this command may act unexpectedly in v1.5.0. Please see https://github.com/cloudflare/wrangler/blob/master/docs/content/environments.md for more information.
✨  Built successfully, built project size is 517 bytes.
✨  Successfully published your script.
✨  Success! Your worker was successfully published. You can view it at https://my-worker.<your-subdomain>.workers.dev
```

### Defining workers_dev and route

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
route = "example.com/*"
workers_dev = true

[env.staging]
workers_dev = true
route = "staging.example.com/*"
```

Wrangler will fail to publish to an environment where `route` is defined alongside `workers_dev = true`.

```console
$ wrangler publish
Error: ⚠️  Your environment should only include `workers_dev` or `route`. If you are trying to publish to workers.dev, remove `route` from your wrangler.toml, if you are trying to publish to your own domain, remove `workers_dev`.
```

```console
$ wrangler publish --env staging
Error: ⚠️  Your environment should only include `workers_dev` or `route`. If you are trying to publish to workers.dev, remove `route` from your wrangler.toml, if you are trying to publish to your own domain, remove `workers_dev`.
```

## Backwards compatibility

Legacy `wrangler.toml` files will still work as expected during the initial rollout of this feature, however you will notice warnings when your configuration is ambigious. One of the goals of environments is to make it more obvious when you are deploying to a traditional worker with routes, and when you are deploying to a subdomain on workers.dev.

**⚠️ Please note that this behavior will not be supported past v1.5.0!! ⚠️**

A `wrangler.toml` before this release looks like this:

```toml
name = "my-worker"
type = "webpack"
account_id = "12345678901234567890"
zone_id = "09876543210987654321"
private = false
route = "example.com/*
```

With this configuration, Wrangler will behave in the following manner:

```console
$ wrangler publish
⚠️  The `private` field is deprecated; please use `workers_dev` to toggle between publishing to your workers.dev subdomain and your own domain.
⚠️  Please specify the workers_dev boolean in the top level of your wrangler.toml.
⚠️  If you do not add workers_dev, this command may act unexpectedly in v1.5.0. Please see https://github.com/cloudflare/wrangler/blob/master/docs/content/environments.md for more information.
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to https://my-worker.<your-subdomain>.workers.dev
```

```console
$ wrangler publish --release
⚠️  --release will be deprecated.
⚠️  The `private` field is deprecated; please use `workers_dev` to toggle between publishing to your workers.dev subdomain and your own domain.
⚠️  Please specify the workers_dev boolean in the top level of your wrangler.toml.
⚠️  If you do not add workers_dev, this command may act unexpectedly in v1.5.0. Please see https://github.com/cloudflare/wrangler/blob/master/docs/content/environments.md for more information.
✨  Built successfully, built project size is 523 bytes.
✨  Successfully published your script to example.com/*
```

This backwards compatibility is the reason that a warning is thrown if `workers_dev` is not specified at the top of `wrangler.toml`.

It is important to note that both of these commands will issue a deprecation warning. To remove these warnings, you can configure Wrangler with the `workers_dev` boolean to separate deploys to workers.dev from deploys to workers routes.

# 🗂️ `kv`

## Overview

The `kv` subcommand allows you to store application data in the Cloudflare network to be accessed from Workers, using
[Workers KV](https://www.cloudflare.com/products/workers-kv/).
KV operations are scoped to your account, so in order to use any of these commands, you need to:

* have a Wrangler project set up with your `account_id` configured in the `wrangler.toml`
* call commands from within a Wrangler project directory.

## Getting Started

To use Workers KV with your Worker, the first thing you must do is create a KV namespace. This is done with
the `kv:namespace` subcommand.

The `kv:namespace` subcommand takes as a new binding name as an argument. It will create a Worker KV namespace
whose title is a concatenation of your Worker's name (from `wrangler.toml`) and the binding name you provide:

```console
$ wrangler kv:namespace create "MY_KV"
🌀  Creating namespace with title "worker-MY_KV"
✨  Success: WorkersKvNamespace {
    id: "e29b263ab50e42ce9b637fa8370175e8",
    title: "worker-MY_KV",
}
✨  Add the following to your wrangler.toml:
kv-namespaces = [
         { binding = "MY_KV", id = "e29b263ab50e42ce9b637fa8370175e8" }
]
```

Make sure to add the `kv-namespaces` output above to your `wrangler.toml`. You can now
access it from a Worker with code like:

```js
let value = await MY_KV.get("my-key");
```

The full KV API for Workers can be found [here](https://developers.cloudflare.com/workers/reference/storage/).

To put a value to your KV namespace via Wrangler, use the `kv:key put` subcommand.

```console
$ wrangler kv:key put --binding=MY_KV "key" "value"
✨  Success
```

You can also specify which namespace to put your key-value pair into using `--namespace-id` instead of `--binding`:

```console
$ wrangler kv:key put --namespace-id=e29b263ab50e42ce9b637fa8370175e8 "key" "value"
✨  Success
```

Additionally, KV namespaces can be used with [environments]()! This is useful for when you have code that refers to
a KV binding like `MY_KV`, and you want to be able to have these bindings point to different namespaces (like
one for staging and one for production). So, if you have a `wrangler.toml` with two environments:

```toml
[env.staging]
kv-namespaces = [
         { binding = "MY_KV", id = "e29b263ab50e42ce9b637fa8370175e8" }
]

[env.production]
kv-namespaces = [
         { binding = "MY_KV", id = "a825455ce00f4f7282403da85269f8ea" }
]
```

To insert a value into a specific KV namespace, you can use
```console
$ wrangler kv:key put --env=staging --binding=MY_MV "key" "value"
✨  Success
```

Since `--namespace-id` is always unique (unlike binding names), you don't need to pass environment variables for them (they will be unused).

There are way more helpful Wrangler subcommands for interacting with Workers KV, like ones for bulk uploads and deletes--check them out below!

## Concepts

Most `kv` commands require you to specify a namespace. A namespace can be specified in two ways:

1. With a `--binding`:
    ```sh
    wrangler kv:key get --binding=MY_KV "my key"
    ```
1. With a `--namespace_id`:
    ```sh
    wrangler kv:key get --namespace-id=06779da6940b431db6e566b4846d64db "my key"
    ```

Most `kv` subcommands also allow you to specify an environment with the optional `--env` flag. This allows you to publish workers running the same code but with different namespaces. For example, you could use separate staging and production namespaces for KV data in your `wrangler.toml`:

```toml
type = "webpack"
name = "my-worker"
account_id = "<account id here>"
route = "staging.example.com/*"
workers_dev = false

kv-namespaces = [
    { binding = "MY_KV", id = "06779da6940b431db6e566b4846d64db" }
]

[env.production]
route = "example.com/*"
kv-namespaces = [
    { binding = "MY_KV", id = "07bc1f3d1f2a4fd8a45a7e026e2681c6" }
]
```

With the wrangler.toml above, you can specify `--env production` when you want to perform a KV action on the namespace `MY_KV` under `env.production`. For example, with the wrangler.toml above, you can get a value out of a production KV instance with:

```console
wrangler kv:key get --binding "MY_KV" --env=production "my key"
```

To learn more about environments, check out the [environments documentation]().

## `kv:namespace`

### `create`

Creates a new namespace.

Takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:namespace create "MY_KV"
🌀  Creating namespace with title "worker-MY_KV"
✨  Success: WorkersKvNamespace {
    id: "e29b263ab50e42ce9b637fa8370175e8",
    title: "worker-MY_KV",
}
✨  Add the following to your wrangler.toml:
kv-namespaces = [
         { binding = "MY_KV", id = "e29b263ab50e42ce9b637fa8370175e8" }
]
```

### `list`

Outputs a list of all KV namespaces associated with your account id.

#### Usage
The example below uses the `jq` command line tool to pretty-print output.

```console
$ wrangler kv:namespace list | jq '.'
[
    {
        "id": "06779da6940b431db6e566b4846d64db",
        "title": "TEST_NAMESPACE"
    },
    {
        "id": "32ac1b3c2ed34ed3b397268817dea9ea",
        "title": "STATIC_CONTENT"
    }
]
```

### `delete`

Deletes a given namespace.

Requires `--binding` or `--namespace-id` argument.

Takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:namespace delete --binding=MY_KV
Are you sure you want to delete namespace f7b02e7fc70443149ac906dd81ec1791? [y/n]
yes
🌀  Deleting namespace f7b02e7fc70443149ac906dd81ec1791
✨  Success
```

## `kv:key`

### `put`

Writes a single key/value pair to the given namespace.

Requires `--binding` or `--namespace-id` argument.

Optional params include:

1. `--env`: The [environment]() argument.
1. `--ttl`: Number of seconds for which the entries should be visible before they expire. At least 60. Takes precedence over 'expiration' option.
1. `--expiration`: Number of seconds since the UNIX epoch, indicating when the key-value pair should expire.
1. `--path`: Read value from the file at a given path. *This is good for security-sensitive operations, like uploading keys to KV; uploading from a file prevents a key value from being saved in areas like your terminal history.*

#### Usage

```console
$ wrangler kv:key put --binding=MY_KV "key" "value" --ttl=10000
✨  Success
```

```console
$ wrangler kv:key put --binding=MY_KV "key" value.txt --path
✨  Success
```

### `list`

Outputs a list of all keys in a given namespace.

Requires `--binding` or `--namespace-id` argument.

Optional params include:

1. `--env`: The [environment]() argument.
1. `--prefix`: A prefix to filter listed keys.

#### Usage

The example below uses the `jq` command line tool to pretty-print output.

```console
$ wrangler kv:key list --binding=MY_KV --prefix="public" | jq '.'
[
    {
        "name": "public_key"
    },
    {
        "name": "public_key_with_expiration",
        "expiration": "2019-09-10T23:18:58Z"
    }
]
```

### `get`

Reads a single value by key from the given namespace.

Requires `--binding` or `--namespace-id` argument.

Takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:key get --binding=MY_KV "key"
value
```

### `delete`

Removes a single key value pair from the given namespace.

Requires `--binding` or `--namespace-id` argument.

Takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:key delete --binding=MY_KV "key"
Are you sure you want to delete key "key"? [y/n]
yes
🌀  Deleting key "key"
✨  Success
```

## `kv:bulk`

### `put`

Requires `--binding` or `--namespace-id` argument.

Writes a file full of key/value pairs to the given namespace. Takes as an argument a JSON file with a list of key-value pairs to upload (see JSON spec above). An example of JSON input:

```json
[
    {
        "key": "test_key",
        "value": "test_value",
        "expiration_ttl": 3600
    }
]
```

The schema below is the full schema for key-value entries uploaded via the bulk API:

| **Name**                       | **Description**                                              | Optional |
| ------------------------------ | ------------------------------------------------------------ | -------- |
| `key`<br />(String)            | A key's name. The name may be at most 512 bytes. All printable, non-whitespace characters are valid. | no       |
| `value`<br />(String)          | A UTF-8 encoded string to be stored, up to 2 MB in length.   | no       |
| `expiration`<br />(Number)     | The time, measured in number of seconds since the UNIX epoch, at which the key should expire. | yes      |
| `expiration_ttl`<br />(Number) | The number of seconds for which the key should be visible before it expires. At least 60. | yes      |
| `base64`<br />(Boolean)        | Whether or not the server should base64 decode the value before storing it. Useful for writing values that wouldn't otherwise be valid JSON strings, such as images. Defaults to `false` | yes      |

If both `expiration` and `expiration_ttl` are specified for a given key, the API will prefer `expiration_ttl`.

The `put` command also takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:bulk put --binding=MY_KV allthethingsupload.json
✨  Success
```

### `delete`

Requires `--binding` or `--namespace-id` argument.

Deletes all specified keys within a given namespace.
Takes as an argument a JSON file with a list of key-value pairs to delete (see JSON spec above). An example of JSON input:

```json
[
    {
        "key": "test_key",
        "value": "test_value",
        "expiration_ttl": 3600
    }
]
```

The `delete` command also takes an optional `--env` [environment]() argument.

#### Usage

```console
$ wrangler kv:bulk delete --binding=MY_KV allthethingsdelete.json
Are you sure you want to delete all keys in allthethingsdelete.json? [y/n]
yes
✨  Success
```

# 🦄 Webpack

Out of the box, Wrangler allows you to develop modern ES6 applications with support for modules. This is because of the 🧙‍♂️ magic of [webpack](https://webpack.js.org/). This document describes how Wrangler uses webpack to build your Workers, and how you can bring your own configuration.

**IMPORTANT: In order for Wrangler to use webpack to bundle your worker scripts, you must set `type = "webpack"` in your `wrangler.toml`, no other types will build your script with webpack.**

If you're here because you're seeing warnings about specifying `webpack_config`, click [here](#backwards-compatibility)

## Sensible Defaults

This is the default webpack configuration that Wrangler uses to build your worker:

```js
module.exports = {
  "target": "webworker",
  "entry": "./index.js" // inferred from "main" in package.json
};
```

Our default configuration sets `target` to `webworker`. From the [webpack docs](https://webpack.js.org/concepts/targets/):

> Because JavaScript can be written for both server and browser, webpack offers multiple deployment targets that you can set in your webpack configuration.

Cloudflare Workers are built to match the [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API), so we set our `target` to `webworker`.

The `entry` field is taken directly from the `main` field in your `package.json`. To read more about the webpack `entry` property, click [here](https://webpack.js.org/concepts/entry-points/).

## Bring your own configuration

You can tell Wrangler to use a custom webpack configuration file by setting `webpack_config` in your `wrangler.toml`. You'll want to make sure that `target` is always `webworker`.

### Example

`webpack.config.js`

```js
module.exports = {
  "target": "webworker",
  "entry": "./index.js",
  "mode": "production"
}
```

`wrangler.toml`

```toml
type = "webpack"
name = "my-worker"
account_id = "12345678901234567890"
workers_dev = true
webpack_config = "webpack.config.js"
```

### Example with multiple environments

`wrangler.toml`

```toml
type = "webpack"
name = "my-worker-dev"
account_id = "12345678901234567890"
workers_dev = true
webpack_config = "webpack.development.js"

[env.staging]
name = "my-worker-staging"
webpack_config = "webpack.production.js"

[env.production]
name = "my-worker-production"
webpack_config = "webpack.production.js"
```

`webpack.development.js`

```js
module.exports = {
  "target": "webworker",
  "entry": "./index.js",
  "mode": "development"
}
```

`webpack.production.js`

```js
module.exports = {
  "target": "webworker",
  "entry": "./index.js",
  "mode": "production"
}
```

## Backwards Compatibility

If you are using a version of Wrangler before 1.6.0, worker projects will simply use any `webpack.config.js` that is in the root of your project. This is not always obvious, so we plan to require that you specify `webpack_config` in your `wrangler.toml` if you would like to use it. If you're seeing this warning and would like to use your `webpack.config.js`, simply add `webpack_config = "webpack.config.js"` to your wrangler.toml.

If you are using Workers Sites and want to specify your own webpack configuration, you will always need to specify this. By default, Wrangler will not assume the `webpack.config.js` at the root of your project is meant to be used for building your Worker.