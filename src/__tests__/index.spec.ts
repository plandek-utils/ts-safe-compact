import { describe, expect, it } from "vitest";

import { filterNones, isNotNone, safeCompact, safeIsTruthy } from "..";

describe("isNotNone()", () => {
  it("isNotNone(null) => false", () => {
    expect(isNotNone(null)).toBeFalsy();
  });

  it("isNotNone(undefined) => false", () => {
    expect(isNotNone(undefined)).toBeFalsy();
  });

  it("isNotNone([]) => true", () => {
    expect(isNotNone([])).toBeTruthy();
  });

  it("isNotNone(false) => true", () => {
    expect(isNotNone(false)).toBeTruthy();
  });

  it("isNotNone(0) => true", () => {
    expect(isNotNone(0)).toBeTruthy();
  });

  it('isNotNone("") => true', () => {
    expect(isNotNone("")).toBeTruthy();
  });

  it('isNotNone("aaa") => true', () => {
    expect(isNotNone("aaa")).toBeTruthy();
  });
});

describe("safeIsTruthy()", () => {
  it("safeIsTruthy(1) => true", () => {
    expect(safeIsTruthy(1)).toBeTruthy();
  });
  it("safeIsTruthy(0) => true", () => {
    expect(safeIsTruthy(0)).toBeTruthy();
  });
  it('safeIsTruthy("") => false', () => {
    expect(safeIsTruthy("")).toBeFalsy();
  });
  it("safeIsTruthy(null) => false", () => {
    expect(safeIsTruthy(null)).toBeFalsy();
  });
  it("safeIsTruthy(undefined) => false", () => {
    expect(safeIsTruthy(undefined)).toBeFalsy();
  });
  it("safeIsTruthy(NaN) => false", () => {
    expect(safeIsTruthy(Number.NaN)).toBeFalsy();
  });
});

describe("safeCompact([])", () => {
  it("removes falsey values with the exception of 0. Removes also NaN", () => {
    const given = [1, 0, Number.NaN, Number.POSITIVE_INFINITY, 1, null, 2, [], "", false, undefined, -1];
    const expected = [1, 0, Number.POSITIVE_INFINITY, 1, 2, [], -1];
    expect(safeCompact(given)).toEqual(expected);
  });

  it("works with Set", () => {
    const given = new Set([1, 0, Number.NaN, Number.POSITIVE_INFINITY, null, 2, [], "", false, undefined, -1]);
    const expected = [1, 0, Number.POSITIVE_INFINITY, 2, [], -1];
    expect(safeCompact(given)).toEqual(expected);
  });

  it("safeCompact(null) => []", () => {
    expect(safeCompact(null)).toEqual([]);
  });

  it("safeCompact(undefined) => []", () => {
    expect(safeCompact(undefined)).toEqual([]);
  });
});

describe("filterNones([])", () => {
  it("removes `null` and `undefined` values with the exception of 0. Removes also NaN", () => {
    const given = [0, Number.NaN, Number.POSITIVE_INFINITY, 1, null, 2, [], "", false, undefined, -1];
    const expected = [0, Number.NaN, Number.POSITIVE_INFINITY, 1, 2, [], "", false, -1];
    expect(filterNones(given)).toEqual(expected);
  });

  it("filterNones(null) => []", () => {
    expect(filterNones(null)).toEqual([]);
  });

  it("filterNones(undefined) => []", () => {
    expect(filterNones(undefined)).toEqual([]);
  });
});
