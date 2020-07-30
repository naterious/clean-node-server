import Knex from "knex";

import {config} from "../../config";
import {IKnexTypeCastField, KnexType} from "./interfaces";
import {IKnexTypeCastNext} from "./types";

export const knexInstance = Knex({
  client: "mysql",
  connection: {
    host: config.mysql.host,
    user: config.mysql.user,
    password: config.mysql.password,
    database: config.mysql.database,
    timezone: config.mysql.timezone,
    multipleStatements: true,
    typeCast: (field: IKnexTypeCastField, next: IKnexTypeCastNext) => {
      if (field.type === KnexType.TINY && field.length === 1) {
        const value = field.string();
        return value ? value === "1" : null;
      } else if (field.type === KnexType.TIMESTAMP) {
        const date = new Date(field.string());
        const msInUTCFormat = Date.UTC(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          date.getHours(),
          date.getMinutes(),
          date.getSeconds(),
          date.getMilliseconds(),
        );

        return new Date(msInUTCFormat).toISOString();
      } else {
        return next();
      }
    },
  },
  pool: {
    min: 0,
    max: config.mysql.connectionLimit,
  },
});
