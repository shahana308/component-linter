"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const namingRule_1 = require("./namingRule");
const lengthRule_1 = require("./lengthRule");
exports.rules = [namingRule_1.checkNamingRules, lengthRule_1.checkLengthRule];
