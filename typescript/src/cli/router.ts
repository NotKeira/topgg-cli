import type { ParsedArgs } from "./args.js";

export interface CommandContext {
    args: ParsedArgs;
    stdout: (message: string) => void;
    stderr: (message: string) => void;
}

export interface Command {
    name: string;
    description: string;
    usage?: string;
    aliases?: string[];
    run: (ctx: CommandContext) => void | Promise<void>;
}

const registry = new Map<string, Command>();

export function register(command: Command): void {
    if (registry.has(command.name)) {
        throw new Error(`Command already registered: ${command.name}`);
    }

    registry.set(command.name, command);

    if (!command.aliases || command.aliases.length === 0) {
        return;
    }

    for (const alias of command.aliases) {
        if (registry.has(alias)) {
            throw new Error(`Alias already registered: ${alias}`);
        }

        registry.set(alias, command);
    }
}

export function resolve(name: string): Command | undefined {
    return registry.get(name);
}

export function all(): Command[] {
    return Array.from(new Set(registry.values())).sort((a, b) => {
        return a.name.localeCompare(b.name);
    });
}
