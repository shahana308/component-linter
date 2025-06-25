import { SourceFile, ts } from "ts-morph";

export function checkInlineStyleRule(sourceFile: SourceFile): string[] {
  const issues: string[] = [];

  const jsxAttributes = sourceFile.getDescendantsOfKind(
    ts.SyntaxKind.JsxAttribute
  );
  const inlineStyleAttrs = jsxAttributes.filter(
    (attr) => attr.getNameNode().getText() === "style"
  );

  inlineStyleAttrs.forEach((attr) => {
    const line = attr.getStartLineNumber();
    issues.push(
      `Inline style detected at line ${line}. Avoid using style={{ ... }} directly in JSX.`
    );
  });

  return issues;
}
