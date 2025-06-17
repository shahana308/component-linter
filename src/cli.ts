#!/usr/bin/env node
import { Command } from "commander";
import { Project } from "ts-morph";
import path from "path";
import fs from "fs";
import { checkNamingRules } from "./rules/namingRule";
import { getAllTsxFiles } from "./utils/getAllTsxFiles";

const program = new Command();

program
  .name("component-linter")
  .description("CLI to lint React/TypeScript components.")
  .version("0.1.0");

program
  .command("lint")
  .argument("<input>", "Path to a .tsx file or a directory")
  .action((inputPath) => {
    const fullPath = path.resolve(inputPath);

    if (!fs.existsSync(fullPath)) {
      console.error(`Path not found: ${fullPath}`);
      process.exit(1);
    }

    const project = new Project();

    const files = fs.statSync(fullPath).isDirectory()
      ? getAllTsxFiles(fullPath)
      : [fullPath];

    files.forEach((file: any) => {
      const sourceFile = project.addSourceFileAtPath(file);
      const issues = checkNamingRules(sourceFile, file);

      if (issues.length > 0) {
        console.log(`\nIssues in ${file}`);
        issues.forEach((i) => console.log(" -", i));
      }
    });

    console.log("\n✅ Linting complete.");
  });

program.parse();
