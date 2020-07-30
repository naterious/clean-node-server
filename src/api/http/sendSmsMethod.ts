import {SendSmsSchema} from "@internal/sms-service-client";

import {container} from "../../cg";
import {HttpMethod} from "./types";

export const sendSmsMethod: HttpMethod = async (req, res) => {
  await SendSmsSchema.validate(req.body);
  const result = await container.application.sendSmsService(req.body);

  return res.status(200).send(result);
};
