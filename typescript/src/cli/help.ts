import { createRequire } from "module";
import { all } from "./router.js";
import { formatField, style } from "./output.js";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json") as { version: string };

export function printHelp(): void {
    const commands = all();

    console.log(`${style.heading("topgg-cli")} ${style.ok(`v${pkg.version}`)}`);
    console.log(`A command-line interface for the top.gg API.`);
    console.log("");
    console.log(style.heading("Usage"));
    console.log(`  topgg <command> [subcommand] [flags]`);
    console.log("");

    if (commands.length > 0) {
        console.log(style.heading("Commands"));
        for (const cmd of commands) {
            const aliases = cmd.aliases && cmd.aliases.length > 0 ? ` [aliases: ${cmd.aliases.join(", ")}]` : "";
            console.log(`  ${cmd.name.padEnd(12)}${cmd.description}${aliases}`);

            if (cmd.usage) {
                console.log(`    ${formatField("usage", cmd.usage)}`);
            }
        }
        console.log("");
    }

    console.log(style.heading("Global Flags"));
    console.log(`  ${formatField("--help, -h", "Show help for a command")}`);
    console.log(`  ${formatField("--version", "Show the current version")}`);
}

export function printVersion(): void {
    console.log(pkg.version);
}
