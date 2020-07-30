import {CustomerServiceClient} from "@internal/customer-service-client";

import {config} from "../../config";
import {requestApi} from "../libraries";

export const customerService = new CustomerServiceClient({
  config: config.customerService,
  requestApi,
});
