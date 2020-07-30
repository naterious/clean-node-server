export enum KnexType {
  STRING = "STRING",
  DATETIME = "DATETIME",
  TIMESTAMP = "TIMESTAMP",
  TINY = "TINY",
}

export interface IKnexTypeCastField {
  db: string;
  length: number;
  name: string;
  table: string;
  type: KnexType;
  string: () => string;
  buffer: () => Buffer;
}
