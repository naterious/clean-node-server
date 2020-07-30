import path from "path";

import {loadConfig} from "@internal/core-library";

const appRoot = path.join(__dirname, "../../../.");

const configDir = path.join(appRoot, "config");

export const config = loadConfig(configDir) as any;
