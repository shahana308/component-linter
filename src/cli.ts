#!/usr/bin/env node
import { Command } from "commander";
import { Project } from "ts-morph";
import path from "path";
import fs from "fs";
import { getAllTsxFiles } from "./utils/getAllTsxFiles";
import { rules } from "./rules";

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
      rules.forEach((ruleFn) => {
        const issues = ruleFn(sourceFile, file);
        if (issues.length) {
          console.log(`\n🚨 Issues in ${file}`);
          issues.forEach((i: string) => console.log(" -", i));
        }
      });
    });

    console.log("\n✅ Linting complete.");
  });

program.parse();
