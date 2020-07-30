import {RequestApi} from "@internal/request-library";
import {externalRequestApi} from "./externalRequestApi";

export const requestApi = new RequestApi({externalRequestApi});
