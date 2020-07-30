import {errorsFactory} from "@internal/errors-library";
import {ExternalRequestApi} from "@internal/request-library";
import {logger} from "../../logger";
import {cacher} from "./cache";

export const externalRequestApi = new ExternalRequestApi({
  logger,
  cacher,
  errorsFactory,
});
