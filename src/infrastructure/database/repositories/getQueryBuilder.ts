import {knexInstance} from "./getInstance";
import {GetQueryBuilder} from "./types";

export const getQueryBuilder: GetQueryBuilder = (entity) => {
  return knexInstance(entity);
};
