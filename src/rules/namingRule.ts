import { SourceFile } from "ts-morph";
import path from "path";

function isPascalCase(name: string): boolean {
  return /^[A-Z][a-zA-Z0-9]*$/.test(name);
}

export function checkNamingRules(
  sourceFile: SourceFile,
  filePath: string
): string[] {
  const issues: string[] = [];

  const fileName = path.basename(filePath, path.extname(filePath));
  const exportSymbol = sourceFile.getDefaultExportSymbol();
  const exportName = exportSymbol?.getName();

  if (!exportName) {
    issues.push(` o default export found in ${filePath}`);
    return issues;
  }

  if (!isPascalCase(exportName)) {
    issues.push(`Component name "${exportName}" is not PascalCase.`);
  }

  if (exportName !== fileName) {
    issues.push(
      `Filename "${fileName}" does not match component name "${exportName}".`
    );
  }

  return issues;
}
