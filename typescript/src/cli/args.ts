export interface ParsedArgs {
    command: string | undefined;
    subcommand: string | undefined;
    flags: Record<string, string | boolean>;
    positional: string[];
}

export function parseArgs(argv: string[]): ParsedArgs {
    const args = argv.slice(2); // drop node + script path
    const flags: Record<string, string | boolean> = {};
    const positional: string[] = [];

    let i = 0;
    while (i < args.length) {
        const arg = args[i];

        if (arg.startsWith("--")) {
            const key = arg.slice(2);
            const next = args[i + 1];

            if (next !== undefined && !next.startsWith("-")) {
                flags[key] = next;
                i += 2;
            } else {
                flags[key] = true;
                i += 1;
            }
        } else if (arg.startsWith("-")) {
            const key = arg.slice(1);
            flags[key] = true;
            i += 1;
        } else {
            positional.push(arg);
            i += 1;
        }
    }

    const [command, subcommand] = positional;

    return {
        command,
        subcommand,
        flags,
        positional: positional.slice(2),
    };
}
