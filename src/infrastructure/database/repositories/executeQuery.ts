import {logger} from "../../logger";
import {ExecuteQuery} from "./types";

export const executeQuery: ExecuteQuery = async (query) => {
  logger.info("Executing query", {query: query.toString()});
  return await query;
};
