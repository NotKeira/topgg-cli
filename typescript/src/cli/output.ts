import type { Command } from "./router.js";

const FIELD_WIDTH = 18;

function isForcedOn(): boolean {
    const value = process.env.FORCE_COLOR;

    if (value === undefined) {
        return false;
    }

    return value !== "0";
}

function isForcedOff(): boolean {
    return process.env.NO_COLOR !== undefined || process.env.TERM === "dumb";
}

function supportsAnsi(): boolean {
    if (isForcedOn()) {
        return true;
    }

    if (isForcedOff()) {
        return false;
    }

    return Boolean(process.stdout.isTTY || process.stderr.isTTY);
}

const ANSI_ENABLED = supportsAnsi();

function colour(code: string, text: string): string {
    if (!ANSI_ENABLED) {
        return text;
    }

    return `\u001b[${code}m${text}\u001b[0m`;
}

export const style = {
    heading(text: string): string {
        return colour("1", text);
    },
    muted(text: string): string {
        return colour("2", text);
    },
    ok(text: string): string {
        return colour("32", text);
    },
    warn(text: string): string {
        return colour("33", text);
    },
    err(text: string): string {
        return colour("31", text);
    },
};

export function formatField(label: string, value: string): string {
    return `${style.muted(label.padEnd(FIELD_WIDTH))}${value}`;
}

export function printError(
    stderr: (message: string) => void,
    message: string,
    hint?: string,
): void {
    stderr(`${style.err("Error")}: ${message}`);

    if (hint) {
        stderr(`${style.warn("Hint")}: ${hint}`);
    }
}

export function printCommandHelp(command: Command): void {
    console.log(`${style.heading(command.name)} - ${command.description}`);

    if (command.aliases && command.aliases.length > 0) {
        console.log(formatField("Aliases", command.aliases.join(", ")));
    }

    if (command.usage) {
        console.log(formatField("Usage", command.usage));
    }
}
