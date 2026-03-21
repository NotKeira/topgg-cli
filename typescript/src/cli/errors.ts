export class CommandError extends Error {
    public readonly code: number;

    constructor(message: string, code = 1) {
        super(message);
        this.name = "CommandError";
        this.code = code;
    }
}

export class FeatureNotImplementedError extends CommandError {
    constructor(feature: string) {
        super(`${feature} is not implemented yet.`, 3);
        this.name = "FeatureNotImplementedError";
    }
}
