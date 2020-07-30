import composeServer from "./server";

export default () => {
  return {
    server: composeServer(),
  };
};
