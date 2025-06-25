import { SourceFile, ts } from "ts-morph";

export function checkLengthRule(sourceFile: SourceFile): string[] {
  const issues: string[] = [];

  const defaultExport = sourceFile
    .getDefaultExportSymbol()
    ?.getDeclarations()[0];

  let exportName = "";
  if (
    defaultExport &&
    defaultExport.isKind(ts.SyntaxKind.FunctionDeclaration)
  ) {
    exportName = defaultExport.getName() || "";
  }

  if (!exportName) return issues;

  // component too long
  const lineCount =
    sourceFile.getEndLineNumber() - sourceFile.getStartLineNumber();
  if (lineCount > 200) {
    issues.push(
      `Component "${exportName}" is too long (${lineCount} lines). Consider splitting it.`
    );
  }

  // large JSX block in return
  const returnStatement = sourceFile.getDescendantsOfKind(
    ts.SyntaxKind.ReturnStatement
  )[0];
  if (returnStatement) {
    const jsx = returnStatement.getExpression();
    if (jsx) {
      const jsxLines = jsx.getEndLineNumber() - jsx.getStartLineNumber();
      if (jsxLines > 50) {
        issues.push(
          `JSX block in "${exportName}" is too large (${jsxLines} lines). Consider breaking it down.`
        );
      }
    }
  }

  return issues;
}
