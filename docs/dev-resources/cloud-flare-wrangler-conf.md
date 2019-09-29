Wrangler Configure
==================


Configure

To publish Cloudflare Workers projects and serve them from our global cloud network, create a Cloudflare account and setup a registered domain or a Workers.dev subdomain on Cloudflare.

Finding Your Cloudflare API Keys

Wrangler and other tools use the following credentials to manage uploading and publishing your Worker scripts to your Cloudflare domain:

Account ID

Zone ID (Note You do not need your Zone ID for deploying Workers on a Workers.dev subdomain)
Global API Key
Email address
Account ID and Zone ID
Registered Domains

For domains that you have registered on Cloudflare, you need both IDs:

Log in to your Cloudflare account and select the desired domain.
Select the Overview tab on the navigation bar.
Scroll to the API section and select Click to copy to copy your Account ID.
Copy your Zone ID.
Workers.dev

For workers.dev domains, you will just need the Account ID:

Log in to your Cloudflare account and select Workers.
Scroll to the API section and select Click to copy to copy your Account ID.
Global API Key
Click Get API Key below the API section to jump to your Profile page.
Scroll to API Keys, and click View to copy your Global API Key *.
* IMPORTANT: Treat your Global API Key like a password! It should not be stored in version control or in your code, use environment variables if possible.

Setup
Set up your default credentials on your local machine via the config subcommand. You should only need to do this once. Running wrangler config will prompt you interactively for your email and API key:

$ wrangler config
Enter email:
foo@bar.com
Enter api key:
123456abcdef
To configure your project, complete the wrangler.toml file at the root of the generated project. This file contains the information wrangler needs to connect to the Cloudflare Workers API, and publish your code.

The name field in this config file, which will map to your script’s deploy name (e.g. my-worker.mysubdomain.workers.dev).

Fill in the account_id field with the value found in your dashboard and type with the type of your project.

# wrangler.toml

# The name of your Workers application
name = "my-worker"

# Your Cloudflare account ID
account_id = "$yourAccountId"

# The kind of application you're deploying to Cloudflare
type = "webpack"

# Publish to workers.dev by default
workers_dev = true
Publish Your Project