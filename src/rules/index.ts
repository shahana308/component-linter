import { checkNamingRules } from "./namingRule";
import { checkLengthRule } from "./lengthRule";
import { checkHookCohesionRule } from "./hookCohesionRule";
import { checkInlineStyleRule } from "./styleRule";

export const rules = [
  checkNamingRules,
  checkLengthRule,
  checkHookCohesionRule,
  checkInlineStyleRule,
];
