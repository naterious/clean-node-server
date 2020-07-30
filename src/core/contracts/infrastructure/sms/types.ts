import {ISendSmsDetails} from "./interfaces";

export type SendSms = (data: ISendSmsDetails) => Promise<any>;
