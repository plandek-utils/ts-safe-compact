// NOTE: we are missing in the type definitions NaN, which is a falsy value that we remove but there is no type for it (it's just `number`)
export type FalsyValues = 0 | null | undefined | false | "";
export type SafeFalsyValues = Exclude<FalsyValues, 0>;

export interface ArrayLike<T> {
  readonly length: number;
  readonly [n: number]: T;
}
export type List<T> = ArrayLike<T> | Iterable<T>;

/**
 * returns true if the value is truthy or if it is 0
 * @param v
 */
export function safeIsTruthy<T>(v: T): v is Exclude<T, SafeFalsyValues> {
  return !!v || v === 0;
}

/**
 * return true if the value is not `null` nor `undefined`
 * @param v
 */
export function isNotNone<T>(v: T | null | undefined): v is T {
  return v !== null && v !== undefined;
}

/**
 * from the given list, it removes nulls, undefined, false and empty string (all falsy values except for 0)
 * @param list
 */
export function safeCompact<T>(list: List<T | null | undefined | false | ""> | null | undefined): T[] {
  return filter<T, null | undefined | false | "">(list ?? [], safeIsTruthy);
}

/**
 * returns the list removing all `null` and `undefined`
 * @param list
 */
export function filterNones<T>(list: List<T | null | undefined> | null | undefined): T[] {
  return filter<T, null | undefined>(list ?? [], isNotNone);
}

/**
 * returns an array with the elements of the given list that satisfy the predicate
 * @param list
 * @param predicate
 * @returns
 */
export function filter<TGood, TBad>(list: List<TGood | TBad>, predicate: (x: TGood | TBad) => x is TGood): TGood[] {
  if (Array.isArray(list)) {
    return list.filter(predicate);
  }

  return Array.from(list).filter(predicate);
}

export default { safeCompact, safeIsTruthy, filterNones, isNotNone, filter };
