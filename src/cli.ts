import { Command } from "commander";

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
    console.log(`(placeholder) Linting file: ${file}`);
  });

program.parse();
