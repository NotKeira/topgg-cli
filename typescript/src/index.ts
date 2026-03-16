import { parseArgs } from "./cli/args.js";
import { resolve } from "./cli/router.js";
import { printHelp, printVersion } from "./cli/help.js";

async function main(): Promise<void> {
    const args = parseArgs(process.argv);

    if (args.flags["version"]) {
        printVersion();
        return;
    }

    if (!args.command || args.flags["help"] || args.flags["h"]) {
        printHelp();
        return;
    }

    const command = resolve(args.command);

    if (!command) {
        console.error(`Unknown command: ${args.command}`);
        console.error(`Run 'topgg --help' to see available commands.`);
        process.exit(1);
    }

    await command.run(args);
}

main().catch((err) => {
    console.error(err instanceof Error ? err.message : String(err));
    process.exit(1);
});

