import uuid from "uuid";
import {container} from "../../cg";
import {SendSmsService} from "../../core/contracts";

export const sendSmsService: SendSmsService = async (data) => {
  await container.infrastructure.sendSms(data);

  try {
    await container.infrastructure.customerService.getBaseAccount(uuid.v4())
  } catch (e) {
    container.infrastructure.logger.error("caught an error", e)
  }

  return container.infrastructure.addSmsToDatabase(data);
};
