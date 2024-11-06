# `@plandek-utils/safe-compact`

[![npm version](https://badge.fury.io/js/%40plandek-utils%2Fsafe-compact.svg)](https://badge.fury.io/js/%40plandek-utils%2Fsafe-compact)
![Github Actions](https://github.com/plandek-utils/ts-safe-compact/actions/workflows/ci-master.yml/badge.svg)
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
