import fs from "fs";
import path from "path";

export function getAllTsxFiles(dir: string): string[] {
  let results: string[] = [];

  const list = fs.readdirSync(dir);
  list.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);

    if (
      stat &&
      stat.isDirectory() &&
      !file.startsWith("__tests__") &&
      !file.startsWith("__mocks__")
    ) {
      results = results.concat(getAllTsxFiles(fullPath));
    } else if (file.endsWith(".tsx") && !file.includes(".test")) {
      results.push(fullPath);
    }
  });

  return results;
}
