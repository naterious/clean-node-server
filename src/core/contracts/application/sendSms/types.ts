import {ISendSmsInput} from "./interfaces";

export type SendSmsService = (data: ISendSmsInput) => Promise<any>;
