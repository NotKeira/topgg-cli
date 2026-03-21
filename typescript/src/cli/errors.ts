export class CommandError extends Error {
    public readonly code: number;
    public readonly hint?: string;

    constructor(message: string, code = 1, hint?: string) {
        super(message);
        this.name = "CommandError";
        this.code = code;
        this.hint = hint;
    }
}

export class UsageError extends CommandError {
    constructor(usage: string, hint?: string) {
        super(`Invalid command usage.`, 2, hint ?? `Run '${usage} --help' for usage details.`);
        this.name = "UsageError";
    }
}

export class FeatureNotImplementedError extends CommandError {
    constructor(feature: string) {
        super(`${feature} is not implemented yet.`, 3, "This command is scaffolded and will be implemented in a later milestone.");
        this.name = "FeatureNotImplementedError";
    }
}
