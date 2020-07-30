import {AddSmsToDatabase} from "./database";
import {SendSms} from "./sms";

export interface IScopedDependencies {
  sendSms: SendSms;
  addSmsToDatabase: AddSmsToDatabase;
}
