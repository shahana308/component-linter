"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkInlineStyleRule = checkInlineStyleRule;
const ts_morph_1 = require("ts-morph");
function checkInlineStyleRule(sourceFile) {
    const issues = [];
    const jsxAttributes = sourceFile.getDescendantsOfKind(ts_morph_1.ts.SyntaxKind.JsxAttribute);
    const inlineStyleAttrs = jsxAttributes.filter((attr) => attr.getNameNode().getText() === "style");
    inlineStyleAttrs.forEach((attr) => {
        const line = attr.getStartLineNumber();
        issues.push(`Inline style detected at line ${line}. Avoid using style={{ ... }} directly in JSX.`);
    });
    return issues;
}
