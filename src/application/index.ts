import * as sendSmsService from "./sendSms";

export default () => {
  return {
    ...sendSmsService,
  };
};
