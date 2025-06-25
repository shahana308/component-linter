import { SourceFile, ts } from "ts-morph";

export function checkHookCohesionRule(sourceFile: SourceFile): string[] {
  const issues: string[] = [];

  const hooks = sourceFile
    .getDescendantsOfKind(ts.SyntaxKind.CallExpression)
    .filter((expr) => {
      const name = expr.getExpression().getText();
      return ["useState", "useEffect", "useMemo", "useCallback"].includes(name);
    });

  if (hooks.length > 5) {
    issues.push(
      `Component uses ${hooks.length} React hooks. Consider breaking into smaller parts.`
    );
  }

  return issues;
}
