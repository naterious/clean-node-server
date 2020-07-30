import {logger} from "../../logger";
import {ExecuteUpdate} from "./types";

export const executeUpdate: ExecuteUpdate = async (query) => {
  logger.info("Executing update query", {query: query.toString()});

  const updateResult = await query;
  return updateResult === 1;
};
