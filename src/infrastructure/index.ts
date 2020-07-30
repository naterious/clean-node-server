import * as config from "./config";
import * as database from "./database";
import * as factories from "./factories";
import * as logger from "./logger";
import * as sms from "./sms";

export default () => {
  return {
    ...sms,
    ...database,
    ...factories,
    ...config,
    ...logger,
  };
};
