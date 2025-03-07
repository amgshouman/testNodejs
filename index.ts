#!/usr/bin/env node
import { Command } from "commander";
import * as shell from "shelljs";
import * as chalk from "chalk";
import * as figlet from "figlet";

async function bootstrap() {
  console.log(chalk.blue(figlet.textSync("cli")));
  const program = new Command();

  program
    .command("generate <schemaName>")
    .description("Generate a new NestJS project with predefined structure")
    .requiredOption("-n, --name <projectName>", "Enter project name")
    .action((schemaName, options) => {
      console.log(`🚀  Creating ${schemaName}...`);
      if (options.name) {
        console.log(`🚀  Creating ${options.name}...`);
      }
    });
  program.parse(process.argv);
}

bootstrap();
