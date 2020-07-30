import composeApi from "./api";
import * as application from "./application";
import * as infrastructure from "./infrastructure";

export const container = {
  infrastructure,
  application,
};

export default () => {
  const api = composeApi();

  return {
    ...infrastructure,
    ...application,
    ...api,
    startServer: api.server,
  };
};
