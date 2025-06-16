import { Command } from "commander";
import { Project } from "ts-morph";
import path from "path";
import fs from "fs";
import { checkNamingRules } from "./rules/namingRule";

const program = new Command();

program
  .name("component-linter")
  .description(
    "CLI to lint React/TypeScript components for naming, cohesion, and reusability."
  )
  .version("0.1.0");

program
  .command("lint")
  .argument("<file>", "Path to a .tsx file")
  .action((file) => {
    const fullPath = path.resolve(file);

    if (!fs.existsSync(fullPath)) {
      console.error(`File not found: ${fullPath}`);
      process.exit(1);
    }

    const project = new Project();
    const sourceFile = project.addSourceFileAtPath(fullPath);
    const namingIssues = checkNamingRules(sourceFile, fullPath);

    if (namingIssues.length === 0) {
      console.log("No naming issues found.");
    } else {
      console.log("Naming issues:");
      namingIssues.forEach((issue) => console.log(" -", issue));
    }
  });

program.parse();
