import {Router} from "express";

import {errorCatcher} from "@internal/core-library";

import * as http from "../http";

import {SetupRoutes} from "./types";

export default (): SetupRoutes => () => {
  const router = Router();

  router.post("/sms", errorCatcher(http.sendSmsMethod));

  return [{router}];
};
