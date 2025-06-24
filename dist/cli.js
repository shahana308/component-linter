#!/usr/bin/env node
"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const ts_morph_1 = require("ts-morph");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const namingRule_1 = require("./rules/namingRule");
const getAllTsxFiles_1 = require("./utils/getAllTsxFiles");
const rules_1 = require("./rules");
const program = new commander_1.Command();
program
  .name("component-linter")
  .description("CLI to lint React/TypeScript components.")
  .version("0.1.0");
program
  .command("lint")
  .argument("<input>", "Path to a .tsx file or a directory")
  .action((inputPath) => {
    const fullPath = path_1.default.resolve(inputPath);
    if (!fs_1.default.existsSync(fullPath)) {
      console.error(`Path not found: ${fullPath}`);
      process.exit(1);
    }
    const project = new ts_morph_1.Project();
    const files = fs_1.default.statSync(fullPath).isDirectory()
      ? (0, getAllTsxFiles_1.getAllTsxFiles)(fullPath)
      : [fullPath];
    files.forEach((file) => {
      const sourceFile = project.addSourceFileAtPath(file);
      rules.forEach((ruleFn) => {
        const issues = ruleFn(sourceFile, file);
        if (issues.length) {
          console.log(`\n🚨 Issues in ${file}`);
          issues.forEach((i) => console.log(" -", i));
        }
      });
    });
    console.log("\n✅ Linting complete.");
  });
program.parse();
