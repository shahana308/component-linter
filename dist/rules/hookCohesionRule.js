"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkHookCohesionRule = checkHookCohesionRule;
const ts_morph_1 = require("ts-morph");
function checkHookCohesionRule(sourceFile) {
    const issues = [];
    const hooks = sourceFile
        .getDescendantsOfKind(ts_morph_1.ts.SyntaxKind.CallExpression)
        .filter((expr) => {
        const name = expr.getExpression().getText();
        return ["useState", "useEffect", "useMemo", "useCallback"].includes(name);
    });
    if (hooks.length > 5) {
        issues.push(`Component uses ${hooks.length} React hooks. Consider breaking into smaller parts.`);
    }
    return issues;
}
