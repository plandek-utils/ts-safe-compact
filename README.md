# `@plandek-utils/safe-compact`

[![npm version](https://badge.fury.io/js/%40plandek-utils%2Fsafe-compact.svg)](https://badge.fury.io/js/%40plandek-utils%2Fsafe-compact)
[![Build Status](https://travis-ci.org/plandek-utils/ts-safe-compact.svg?branch=master)](https://travis-ci.org/plandek-utils/ts-safe-compact)
[![Maintainability](https://api.codeclimate.com/v1/badges/05e2125551579a9abbcc/maintainability)](https://codeclimate.com/github/plandek-utils/ts-safe-compact/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/05e2125551579a9abbcc/test_coverage)](https://codeclimate.com/github/plandek-utils/ts-safe-compact/test_coverage)

[TypeDoc generated docs in here](https://plandek-utils.github.io/ts-safe-compact)

[Github repo here](https://github.com/plandek-utils/ts-safe-compact)

utils similar to `compact`, to remove certain "falsy" values.

## Installation

`yarn add @plandek-utils/safe-compact` or `npm install @plandek-utils/safe-compact`.

## Usage

### `safeCompact`

returns a list with the ["safe truthy" elements](#safeIsTruthy) of the given list

```typescript
import { safeCompact } from "@plandek-utils/safe-compact";

safeCompact(null) // => []
safeCompact(undefined) // => []
safeCompact([1, 0, NaN, Infinity, 1, null, 2, [], "", undefined, -1])
  // => [1, 0, Infinity, 1, 2, [], -1]
```

### `filterNones`

returns a list with the `null` and `undefined` elements removed

```typescript
import { filterNones } from "@plandek-utils/safe-compact";

filterNones(null) // => []
filterNones(undefined) // => []
filterNones([0, NaN, Infinity, 1, null, 2, [], "", false, undefined, -1])
  // => [0, NaN, Infinity, 1, 2, [], "", false, -1]
```

### `isNotNone`

returns true if the value is not `null` nor `undefined`

```typescript
import { isNotNone } from "@plandek-utils/safe-compact";

isNotNone(null) // => false
isNotNone(undefined) // => false
isNotNone([]) // => true
isNotNone(false) // => true
isNotNone(0) // => true
isNotNone("") // => true
isNotNone("aaa") // => true
```

### `safeIsTruthy`

returns true if the value is truthy or if it is 0.

```typescript
import { safeIsTruthy } from "@plandek-utils/safe-compact";

safeIsTruthy(1) // => true
safeIsTruthy(0) // => true
safeIsTruthy("") // => false
safeIsTruthy(null) // => false
safeIsTruthy(undefined) // => false
safeIsTruthy(NaN) // => false
```

## Development, Commits, versioning and publishing

<details><summary>See documentation for development</summary>
<p>

See [The Typescript-Starter docs](https://github.com/bitjson/typescript-starter#bump-version-update-changelog-commit--tag-release).

### Commits and CHANGELOG

For commits, you should use [`commitizen`](https://github.com/commitizen/cz-cli)

```sh
yarn global add commitizen

#commit your changes:
git cz
```

As typescript-starter docs state:

This project is tooled for [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) to make managing releases easier. See the [standard-version](https://github.com/conventional-changelog/standard-version) documentation for more information on the workflow, or [`CHANGELOG.md`](CHANGELOG.md) for an example.

```sh
# bump package.json version, update CHANGELOG.md, git tag the release
yarn run version
```

You may find a tool like [**`wip`**](https://github.com/bitjson/wip) helpful for managing work in progress before you're ready to create a meaningful commit.

### Creating the first version

Once you are ready to create the first version, run the following (note that `reset` is destructive and will remove all files not in the git repo from the directory).

```sh
# Reset the repo to the latest commit and build everything
yarn run reset && yarn run test && yarn run doc:html

# Then version it with standard-version options. e.g.:
# don't bump package.json version
yarn run version -- --first-release

# Other popular options include:

# PGP sign it:
# $ yarn run version -- --sign

# alpha release:
# $ yarn run version -- --prerelease alpha
```

And after that, remember to [publish the docs](#publish-the-docs).

And finally push the new tags to github and publish the package to npm.

```sh
# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
yarn publish --access public
```

### Publish the Docs

```sh
yarn run doc:html && yarn run doc:publish
```

This will generate the docs and publish them in github pages.

### Generate a version

There is a single yarn command for preparing a new release. See [One-step publish preparation script in TypeScript-Starter](https://github.com/bitjson/typescript-starter#one-step-publish-preparation-script)

```sh
# Prepare a standard release
yarn prepare-release

# Push to git
git push --follow-tags origin master

# Publish to NPM (allowing public access, required if the package name is namespaced like `@somewhere/some-lib`)
yarn publish --access public
```

</p>
</details>
