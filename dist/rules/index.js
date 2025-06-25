"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rules = void 0;
const namingRule_1 = require("./namingRule");
const lengthRule_1 = require("./lengthRule");
const hookCohesionRule_1 = require("./hookCohesionRule");
const styleRule_1 = require("./styleRule");
exports.rules = [
    namingRule_1.checkNamingRules,
    lengthRule_1.checkLengthRule,
    hookCohesionRule_1.checkHookCohesionRule,
    styleRule_1.checkInlineStyleRule,
];
