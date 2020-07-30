import path from "path";
import createGraph from "./cg";

import start from "@internal/core-library";

export const main = () => {
  const cg = createGraph();

  return start({
    appRoot: path.join(__dirname, "../."),
    cg,
  });
};

main();
