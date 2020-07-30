// import fetch from "node-fetch";
// import * as r from "ramda";

// import * as errors from "@internal/errors-library";

import {SendSms} from "../../core/contracts";

export const sendSms: SendSms = async (data) => {
  return Promise.resolve("yes");

  // Need to actually send an sms here?

  // try {
  //   const res = await fetch(`${config.host}/sms`, {
  //     body: JSON.stringify(data),
  //     method: "POST",
  //   });
  //   return r.ifElse(r.not, () => Promise.reject(res.text()), () => res.json())(res.ok);
  // }
  // catch (err) {
  //   return await Promise.reject(new errors.BaseError(err.message, err));
  // }
};
