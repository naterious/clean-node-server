import composeApi from "./api";
import composeApplication from "./application";
import composeInfrastructure from "./infrastructure";

const infrastructure = composeInfrastructure();
const application = composeApplication();

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
