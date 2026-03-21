export class CommandError extends Error {
    public readonly code: number;

    constructor(message: string, code = 1) {
        super(message);
        this.name = "CommandError";
        this.code = code;
    }
}
