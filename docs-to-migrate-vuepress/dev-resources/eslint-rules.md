ESLINT Rules
============

ESLintESLint
User guide
Developer guide
Blog
Demo
About
Search
Search the docs...
Rules
Rules in ESLint are grouped by category to help you understand their purpose.

No rules are enabled by default. The "extends": "eslint:recommended" property in a configuration file enables rules that report common problems, which have a check mark  below.

The --fix option on the command line automatically fixes problems (currently mostly whitespace) reported by rules which have a wrench  below.

Possible Errors
These rules relate to possible syntax or logic errors in JavaScript code:

for-direction

enforce “for” loop update clause moving the counter in the right direction.

getter-return

enforce return statements in getters

no-async-promise-executor

disallow using an async function as a Promise executor

no-await-in-loop

disallow await inside of loops

no-compare-neg-zero

disallow comparing against -0

no-cond-assign

disallow assignment operators in conditional expressions

no-console

disallow the use of console

no-constant-condition

disallow constant expressions in conditions

no-control-regex

disallow control characters in regular expressions

no-debugger

disallow the use of debugger

no-dupe-args

disallow duplicate arguments in function definitions

no-dupe-keys

disallow duplicate keys in object literals

no-duplicate-case

disallow duplicate case labels

no-empty

disallow empty block statements

no-empty-character-class

disallow empty character classes in regular expressions

no-ex-assign

disallow reassigning exceptions in catch clauses

no-extra-boolean-cast

disallow unnecessary boolean casts

no-extra-parens

disallow unnecessary parentheses

no-extra-semi

disallow unnecessary semicolons

no-func-assign

disallow reassigning function declarations

no-import-assign

disallow assigning to imported bindings

no-inner-declarations

disallow variable or function declarations in nested blocks

no-invalid-regexp

disallow invalid regular expression strings in RegExp constructors

no-irregular-whitespace

disallow irregular whitespace

no-misleading-character-class

disallow characters which are made with multiple code points in character class syntax

no-obj-calls

disallow calling global object properties as functions

no-prototype-builtins

disallow calling some Object.prototype methods directly on objects

no-regex-spaces

disallow multiple spaces in regular expressions

no-sparse-arrays

disallow sparse arrays

no-template-curly-in-string

disallow template literal placeholder syntax in regular strings

no-unexpected-multiline

disallow confusing multiline expressions

no-unreachable

disallow unreachable code after return, throw, continue, and break statements

no-unsafe-finally

disallow control flow statements in finally blocks

no-unsafe-negation

disallow negating the left operand of relational operators

require-atomic-updates

disallow assignments that can lead to race conditions due to usage of await or yield

use-isnan

require calls to isNaN() when checking for NaN

valid-typeof

enforce comparing typeof expressions against valid strings

Best Practices
These rules relate to better ways of doing things to help you avoid problems:

accessor-pairs

enforce getter and setter pairs in objects and classes

array-callback-return

enforce return statements in callbacks of array methods

block-scoped-var

enforce the use of variables within the scope they are defined

class-methods-use-this

enforce that class methods utilize this

complexity

enforce a maximum cyclomatic complexity allowed in a program

consistent-return

require return statements to either always or never specify values

curly

enforce consistent brace style for all control statements

default-case

require default cases in switch statements

default-param-last

enforce default parameters to be last

dot-location

enforce consistent newlines before and after dots

dot-notation

enforce dot notation whenever possible

eqeqeq

require the use of === and !==

guard-for-in

require for-in loops to include an if statement

max-classes-per-file

enforce a maximum number of classes per file

no-alert

disallow the use of alert, confirm, and prompt

no-caller

disallow the use of arguments.caller or arguments.callee

no-case-declarations

disallow lexical declarations in case clauses

no-div-regex

disallow division operators explicitly at the beginning of regular expressions

no-else-return

disallow else blocks after return statements in if statements

no-empty-function

disallow empty functions

no-empty-pattern

disallow empty destructuring patterns

no-eq-null

disallow null comparisons without type-checking operators

no-eval

disallow the use of eval()

no-extend-native

disallow extending native types

no-extra-bind

disallow unnecessary calls to .bind()

no-extra-label

disallow unnecessary labels

no-fallthrough

disallow fallthrough of case statements

no-floating-decimal

disallow leading or trailing decimal points in numeric literals

no-global-assign

disallow assignments to native objects or read-only global variables

no-implicit-coercion

disallow shorthand type conversions

no-implicit-globals

disallow variable and function declarations in the global scope

no-implied-eval

disallow the use of eval()-like methods

no-invalid-this

disallow this keywords outside of classes or class-like objects

no-iterator

disallow the use of the __iterator__ property

no-labels

disallow labeled statements

no-lone-blocks

disallow unnecessary nested blocks

no-loop-func

disallow function declarations that contain unsafe references inside loop statements

no-magic-numbers

disallow magic numbers

no-multi-spaces

disallow multiple spaces

no-multi-str

disallow multiline strings

no-new

disallow new operators outside of assignments or comparisons

no-new-func

disallow new operators with the Function object

no-new-wrappers

disallow new operators with the String, Number, and Boolean objects

no-octal

disallow octal literals

no-octal-escape

disallow octal escape sequences in string literals

no-param-reassign

disallow reassigning function parameters

no-proto

disallow the use of the __proto__ property

no-redeclare

disallow variable redeclaration

no-restricted-properties

disallow certain properties on certain objects

no-return-assign

disallow assignment operators in return statements

no-return-await

disallow unnecessary return await

no-script-url

disallow javascript: urls

no-self-assign

disallow assignments where both sides are exactly the same

no-self-compare

disallow comparisons where both sides are exactly the same

no-sequences

disallow comma operators

no-throw-literal

disallow throwing literals as exceptions

no-unmodified-loop-condition

disallow unmodified loop conditions

no-unused-expressions

disallow unused expressions

no-unused-labels

disallow unused labels

no-useless-call

disallow unnecessary calls to .call() and .apply()

no-useless-catch

disallow unnecessary catch clauses

no-useless-concat

disallow unnecessary concatenation of literals or template literals

no-useless-escape

disallow unnecessary escape characters

no-useless-return

disallow redundant return statements

no-void

disallow void operators

no-warning-comments

disallow specified warning terms in comments

no-with

disallow with statements

prefer-named-capture-group

enforce using named capture group in regular expression

prefer-promise-reject-errors

require using Error objects as Promise rejection reasons

prefer-regex-literals

disallow use of the RegExp constructor in favor of regular expression literals

radix

enforce the consistent use of the radix argument when using parseInt()

require-await

disallow async functions which have no await expression

require-unicode-regexp

enforce the use of u flag on RegExp

vars-on-top

require var declarations be placed at the top of their containing scope

wrap-iife

require parentheses around immediate function invocations

yoda

require or disallow “Yoda” conditions

Strict Mode
These rules relate to strict mode directives:

strict

require or disallow strict mode directives

Variables
These rules relate to variable declarations:

init-declarations

require or disallow initialization in variable declarations

no-delete-var

disallow deleting variables

no-label-var

disallow labels that share a name with a variable

no-restricted-globals

disallow specified global variables

no-shadow

disallow variable declarations from shadowing variables declared in the outer scope

no-shadow-restricted-names

disallow identifiers from shadowing restricted names

no-undef

disallow the use of undeclared variables unless mentioned in /*global */ comments

no-undef-init

disallow initializing variables to undefined

no-undefined

disallow the use of undefined as an identifier

no-unused-vars

disallow unused variables

no-use-before-define

disallow the use of variables before they are defined

Node.js and CommonJS
These rules relate to code running in Node.js, or in browsers with CommonJS:

callback-return

require return statements after callbacks

global-require

require require() calls to be placed at top-level module scope

handle-callback-err

require error handling in callbacks

no-buffer-constructor

disallow use of the Buffer() constructor

no-mixed-requires

disallow require calls to be mixed with regular variable declarations

no-new-require

disallow new operators with calls to require

no-path-concat

disallow string concatenation with __dirname and __filename

no-process-env

disallow the use of process.env

no-process-exit

disallow the use of process.exit()

no-restricted-modules

disallow specified modules when loaded by require

no-sync

disallow synchronous methods

Stylistic Issues
These rules relate to style guidelines, and are therefore quite subjective:

array-bracket-newline

enforce linebreaks after opening and before closing array brackets

array-bracket-spacing

enforce consistent spacing inside array brackets

array-element-newline

enforce line breaks after each array element

block-spacing

disallow or enforce spaces inside of blocks after opening block and before closing block

brace-style

enforce consistent brace style for blocks

camelcase

enforce camelcase naming convention

capitalized-comments

enforce or disallow capitalization of the first letter of a comment

comma-dangle

require or disallow trailing commas

comma-spacing

enforce consistent spacing before and after commas

comma-style

enforce consistent comma style

computed-property-spacing

enforce consistent spacing inside computed property brackets

consistent-this

enforce consistent naming when capturing the current execution context

eol-last

require or disallow newline at the end of files

func-call-spacing

require or disallow spacing between function identifiers and their invocations

func-name-matching

require function names to match the name of the variable or property to which they are assigned

func-names

require or disallow named function expressions

func-style

enforce the consistent use of either function declarations or expressions

function-call-argument-newline

enforce line breaks between arguments of a function call

function-paren-newline

enforce consistent line breaks inside function parentheses

id-blacklist

disallow specified identifiers

id-length

enforce minimum and maximum identifier lengths

id-match

require identifiers to match a specified regular expression

implicit-arrow-linebreak

enforce the location of arrow function bodies

indent

enforce consistent indentation

jsx-quotes

enforce the consistent use of either double or single quotes in JSX attributes

key-spacing

enforce consistent spacing between keys and values in object literal properties

keyword-spacing

enforce consistent spacing before and after keywords

line-comment-position

enforce position of line comments

linebreak-style

enforce consistent linebreak style

lines-around-comment

require empty lines around comments

lines-between-class-members

require or disallow an empty line between class members

max-depth

enforce a maximum depth that blocks can be nested

max-len

enforce a maximum line length

max-lines

enforce a maximum number of lines per file

max-lines-per-function

enforce a maximum number of line of code in a function

max-nested-callbacks

enforce a maximum depth that callbacks can be nested

max-params

enforce a maximum number of parameters in function definitions

max-statements

enforce a maximum number of statements allowed in function blocks

max-statements-per-line

enforce a maximum number of statements allowed per line

multiline-comment-style

enforce a particular style for multiline comments

multiline-ternary

enforce newlines between operands of ternary expressions

new-cap

require constructor names to begin with a capital letter

new-parens

enforce or disallow parentheses when invoking a constructor with no arguments

newline-per-chained-call

require a newline after each call in a method chain

no-array-constructor

disallow Array constructors

no-bitwise

disallow bitwise operators

no-continue

disallow continue statements

no-inline-comments

disallow inline comments after code

no-lonely-if

disallow if statements as the only statement in else blocks

no-mixed-operators

disallow mixed binary operators

no-mixed-spaces-and-tabs

disallow mixed spaces and tabs for indentation

no-multi-assign

disallow use of chained assignment expressions

no-multiple-empty-lines

disallow multiple empty lines

no-negated-condition

disallow negated conditions

no-nested-ternary

disallow nested ternary expressions

no-new-object

disallow Object constructors

no-plusplus

disallow the unary operators ++ and --

no-restricted-syntax

disallow specified syntax

no-tabs

disallow all tabs

no-ternary

disallow ternary operators

no-trailing-spaces

disallow trailing whitespace at the end of lines

no-underscore-dangle

disallow dangling underscores in identifiers

no-unneeded-ternary

disallow ternary operators when simpler alternatives exist

no-whitespace-before-property

disallow whitespace before properties

nonblock-statement-body-position

enforce the location of single-line statements

object-curly-newline

enforce consistent line breaks inside braces

object-curly-spacing

enforce consistent spacing inside braces

object-property-newline

enforce placing object properties on separate lines

one-var

enforce variables to be declared either together or separately in functions

one-var-declaration-per-line

require or disallow newlines around variable declarations

operator-assignment

require or disallow assignment operator shorthand where possible

operator-linebreak

enforce consistent linebreak style for operators

padded-blocks

require or disallow padding within blocks

padding-line-between-statements

require or disallow padding lines between statements

prefer-object-spread

disallow using Object.assign with an object literal as the first argument and prefer the use of object spread instead.

quote-props

require quotes around object literal property names

quotes

enforce the consistent use of either backticks, double, or single quotes

semi

require or disallow semicolons instead of ASI

semi-spacing

enforce consistent spacing before and after semicolons

semi-style

enforce location of semicolons

sort-keys

require object keys to be sorted

sort-vars

require variables within the same declaration block to be sorted

space-before-blocks

enforce consistent spacing before blocks

space-before-function-paren

enforce consistent spacing before function definition opening parenthesis

space-in-parens

enforce consistent spacing inside parentheses

space-infix-ops

require spacing around infix operators

space-unary-ops

enforce consistent spacing before or after unary operators

spaced-comment

enforce consistent spacing after the // or /* in a comment

switch-colon-spacing

enforce spacing around colons of switch statements

template-tag-spacing

require or disallow spacing between template tags and their literals

unicode-bom

require or disallow Unicode byte order mark (BOM)

wrap-regex

require parenthesis around regex literals

ECMAScript 6
These rules relate to ES6, also known as ES2015:

arrow-body-style

require braces around arrow function bodies

arrow-parens

require parentheses around arrow function arguments

arrow-spacing

enforce consistent spacing before and after the arrow in arrow functions

constructor-super

require super() calls in constructors

generator-star-spacing

enforce consistent spacing around * operators in generator functions

no-class-assign

disallow reassigning class members

no-confusing-arrow

disallow arrow functions where they could be confused with comparisons

no-const-assign

disallow reassigning const variables

no-dupe-class-members

disallow duplicate class members

no-duplicate-imports

disallow duplicate module imports

no-new-symbol

disallow new operators with the Symbol object

no-restricted-imports

disallow specified modules when loaded by import

no-this-before-super

disallow this/super before calling super() in constructors

no-useless-computed-key

disallow unnecessary computed property keys in object literals

no-useless-constructor

disallow unnecessary constructors

no-useless-rename

disallow renaming import, export, and destructured assignments to the same name

no-var

require let or const instead of var

object-shorthand

require or disallow method and property shorthand syntax for object literals

prefer-arrow-callback

require using arrow functions for callbacks

prefer-const

require const declarations for variables that are never reassigned after declared

prefer-destructuring

require destructuring from arrays and/or objects

prefer-numeric-literals

disallow parseInt() and Number.parseInt() in favor of binary, octal, and hexadecimal literals

prefer-rest-params

require rest parameters instead of arguments

prefer-spread

require spread operators instead of .apply()

prefer-template

require template literals instead of string concatenation

require-yield

require generator functions to contain yield

rest-spread-spacing

enforce spacing between rest and spread operators and their expressions

sort-imports

enforce sorted import declarations within modules

symbol-description

require symbol descriptions

template-curly-spacing

require or disallow spacing around embedded expressions of template strings

yield-star-spacing

require or disallow spacing around the * in yield* expressions

Deprecated
These rules have been deprecated in accordance with the deprecation policy, and replaced by newer rules:

Deprecated rule	Replaced by
indent-legacy

indent

lines-around-directive

padding-line-between-statements

newline-after-var

padding-line-between-statements

newline-before-return

padding-line-between-statements

no-catch-shadow

no-shadow

no-native-reassign

no-global-assign

no-negated-in-lhs

no-unsafe-negation

no-spaced-func

func-call-spacing

prefer-reflect

(no replacement)

require-jsdoc

(no replacement)

valid-jsdoc

(no replacement)

Removed
These rules from older versions of ESLint (before the deprecation policy existed) have been replaced by newer rules:

Removed rule	Replaced by
generator-star

generator-star-spacing

global-strict

strict

no-arrow-condition

no-confusing-arrowno-constant-condition

no-comma-dangle

comma-dangle

no-empty-class

no-empty-character-class

no-empty-label

no-labels

no-extra-strict

strict

no-reserved-keys

quote-props

no-space-before-semi

semi-spacing

no-wrap-func

no-extra-parens

space-after-function-name

space-before-function-paren

space-after-keywords

keyword-spacing

space-before-function-parentheses

space-before-function-paren

space-before-keywords

keyword-spacing

space-in-brackets

object-curly-spacingarray-bracket-spacing

space-return-throw-case

keyword-spacing

space-unary-word-ops

space-unary-ops

spaced-line-comment

spaced-comment

Edit this page Mailing List GitHub Twitter Chat Room Copyright JS Foundation and other contributors, https://js.foundation/