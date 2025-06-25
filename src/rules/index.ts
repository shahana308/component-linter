import { checkNamingRules } from "./namingRule";
import { checkLengthRule } from "./lengthRule";
import { checkHookCohesionRule } from "./hookCohesionRule";

export const rules = [checkNamingRules, checkLengthRule, checkHookCohesionRule];
