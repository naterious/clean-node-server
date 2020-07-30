import {IMessageDetails} from "./interfaces";

export type AddSmsToDatabase = (params: IMessageDetails) => Promise<IMessageDetails>;
