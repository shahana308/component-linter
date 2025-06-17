"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkNamingRules = checkNamingRules;
const path_1 = __importDefault(require("path"));
const ts_morph_1 = require("ts-morph");
function isPascalCase(name) {
    return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}
function checkNamingRules(sourceFile, filePath) {
    const issues = [];
    const fileName = path_1.default.basename(filePath, path_1.default.extname(filePath));
    const defaultExport = sourceFile
        .getDefaultExportSymbol()
        ?.getDeclarations()[0];
    let exportName = "";
    if (defaultExport &&
        defaultExport.isKind(ts_morph_1.ts.SyntaxKind.FunctionDeclaration)) {
        exportName = defaultExport.getName() || "";
    }
    if (!exportName) {
        issues.push(`No named default export found in ${filePath}`);
        return issues;
    }
    if (!isPascalCase(exportName)) {
        issues.push(`Component name "${exportName}" is not PascalCase.`);
    }
    if (exportName !== fileName) {
        issues.push(`Filename "${fileName}" does not match component name "${exportName}".`);
    }
    return issues;
}
