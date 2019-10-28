import { filter, isNull, isUndefined, List } from "lodash";

// NOTE: we are missing in the type definitions NaN, which is a falsy value that we remove but there is no type for it (it's just `number`)
export type FalsyValues = 0 | null | undefined | false | "";
export type SafeFalsyValues = Exclude<FalsyValues, 0>;

/**
 * returns true if the value is truthy or if it is 0
 * @param v
 */
export function safeIsTruthy(v: any): v is Exclude<any, SafeFalsyValues> {
  return !!v || v === 0;
}

/**
 * return true if the value is not `null` nor `undefined`
 * @param v
 */
export function isNotNone<T>(v: T | null | undefined): v is T {
  return !isUndefined(v) && !isNull(v);
}

/**
 * from the given list, it removes nulls, undefined, false and empty string (all falsy values except for 0)
 * @param list
 */
export function safeCompact<T>(
  list: List<T | null | undefined | false | ""> | null | undefined
): T[] {
  return filter(list, safeIsTruthy);
}

/**
 * returns the list removing all `null` and `undefined`
 * @param list
 */
export function filterNones<T>(
  list: List<T | null | undefined> | null | undefined
): T[] {
  return filter(list, isNotNone);
}

export default { safeCompact, safeIsTruthy, filterNones, isNotNone };
