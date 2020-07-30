import router from "./router";

export default () => {
  return {
    composeRoutes: router(),
  };
};
