import { parseArgs } from "./cli/args.js";
import { printHelp, printVersion } from "./cli/help.js";
import { registerDefaultCommands } from "./cli/register-default-commands.js";
import { executeCommand } from "./cli/execute.js";
import { CommandError } from "./cli/errors.js";
import { printError } from "./cli/output.js";

async function main(): Promise<void> {
    registerDefaultCommands();

    const args = parseArgs(process.argv);

    if (args.flags["version"]) {
        printVersion();
        return;
    }

    if (!args.command) {
        printHelp();
        return;
    }

    await executeCommand(args);
}

main().catch((err) => {
    if (err instanceof CommandError) {
        printError(console.error, err.message, err.hint);
        process.exit(err.code);
    }

    printError(console.error, err instanceof Error ? err.message : String(err));
    process.exit(1);
});

