import Knex from "knex";

export type GetQueryBuilder = (entity: string) => Knex.QueryBuilder;

export type IKnexTypeCastNext = () => void;

export type ExecuteQuery = <T>(query: Knex.QueryBuilder) => Promise<T>;

export type ExecuteUpdate = (query: Knex.QueryBuilder) => Promise<boolean>;
