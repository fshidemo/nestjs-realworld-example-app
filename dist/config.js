"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
exports.SECRET = 'secret-key';
exports.envConfig = dotenv_1.config({ path: '.env' }).parsed;
exports.config = exports.envConfig;
//# sourceMappingURL=config.js.map