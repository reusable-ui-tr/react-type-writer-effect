export namespace ObjectNs {
  export type Unknown = Record<string, unknown>;
  export type Any = Record<string, any>;
  export type AnyWithId = Record<string, any> & {
    id: number | string;
  };
  export type String = Record<string, string>;
  export type Number = Record<string, number>;
  export type Empty = {};
}
