import uuid from "uuid";
import {AddSmsToDatabase} from "../../core/contracts";
import {executeQuery, getQueryBuilder} from "./repositories";

export const addSmsToDatabase: AddSmsToDatabase = async (params) => {
  const queryBuilder = getQueryBuilder("sms");
  const id = uuid.v4();
  const insertParams = {...params, id};

  const insertQuery = queryBuilder.insert(insertParams);

  await executeQuery(insertQuery);
  return insertParams;
};
