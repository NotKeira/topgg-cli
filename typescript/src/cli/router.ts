import type { ParsedArgs } from "./args.js";

export interface Command {
    name: string;
    description: string;
    usage?: string;
    run: (args: ParsedArgs) => void | Promise<void>;
}

const registry = new Map<string, Command>();

export function register(command: Command): void {
    registry.set(command.name, command);
}

export function resolve(name: string): Command | undefined {
    return registry.get(name);
}

export function all(): Command[] {
    return Array.from(registry.values());
}
