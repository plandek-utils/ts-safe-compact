import { safeCompact, safeIsTruthy } from "..";

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
    expect(safeIsTruthy(NaN)).toBeFalsy();
  });
});

describe("safeCompact([])", () => {
  it("removes falsey values with the exception of 0. Removes also NaN", () => {
    const given = [1, 0, NaN, Infinity, 1, null, 2, [], "", undefined, -1];
    const expected = [1, 0, Infinity, 1, 2, [], -1];
    expect(safeCompact(given)).toEqual(expected);
  });

  it("safeCompact(null) => []", () => {
    expect(safeCompact(null)).toEqual([]);
  });

  it("safeCompact(undefined) => []", () => {
    expect(safeCompact(undefined)).toEqual([]);
  });
});
