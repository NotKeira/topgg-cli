import type { ParsedArgs } from "./args.js";
import { CommandError } from "./errors.js";
import { printHelp } from "./help.js";
import { printCommandHelp } from "./output.js";
import { resolve } from "./router.js";

function isHelpFlag(value: string | boolean | undefined): boolean {
    return value === true;
}

export async function executeCommand(args: ParsedArgs): Promise<void> {
    if (!args.command) {
        printHelp();
        return;
    }

    const command = resolve(args.command);

    if (!command) {
        throw new CommandError(
            `Unknown command '${args.command}'.`,
            2,
            "Run 'topgg --help' to see available commands.",
        );
    }

    if (isHelpFlag(args.flags.help) || isHelpFlag(args.flags.h)) {
        printCommandHelp(command);
        return;
    }

    await command.run({
        args,
        stdout: console.log,
        stderr: console.error,
    });
}
