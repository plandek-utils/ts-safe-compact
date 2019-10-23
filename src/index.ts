import { filter, List } from "lodash";

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
 * from the given list, it removes nulls, undefined, false and empty string (all falsy values except for 0)
 * @param list
 */
export function safeCompact<T>(
  list: List<T | null | undefined | false | ""> | null | undefined
): T[] {
  return filter(list, safeIsTruthy);
}

export default { safeCompact, safeIsTruthy };
