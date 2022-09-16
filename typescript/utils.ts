export type CnakeToCamelCase<T extends string> = string extends T
  ? string
  : T extends `${infer Start}_${infer Letter}${infer Rest}`
  ? `${Start}${Uppercase<Letter>}${CnakeToCamelCase<Rest>}`
  : T extends `${infer Str}`
  ? `${Str}`
  : "";

export type ExtractArray<T extends string[]> = string[] extends T
  ? string[]
  : T extends [infer First, ...infer Rest]
  ? Rest extends [string, ...string[]]
    ? [First, ...ExtractArray<Rest>]
    : [First]
  : [];
