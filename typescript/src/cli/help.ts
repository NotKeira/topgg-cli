import { createRequire } from "module";
import { all } from "./router.js";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json") as { version: string };

export function printHelp(): void {
    const commands = all();

    console.log(`topgg-cli v${pkg.version}`);
    console.log(`A command-line interface for the top.gg API.\n`);
    console.log("Usage:");
    console.log("  topgg <command> [subcommand] [flags]\n");

    if (commands.length > 0) {
        console.log("Commands:");
        for (const cmd of commands) {
            const aliases = cmd.aliases && cmd.aliases.length > 0 ? ` (aliases: ${cmd.aliases.join(", ")})` : "";
            const usage = cmd.usage ? `  ${cmd.usage}` : "";
            console.log(`  ${cmd.name.padEnd(16)}${cmd.description}${aliases}${usage}`);
        }
        console.log("");
    }

    console.log("Flags:");
    console.log("  --help, -h    Show help for a command");
    console.log("  --version     Show the current version");
}

export function printVersion(): void {
    console.log(pkg.version);
}
