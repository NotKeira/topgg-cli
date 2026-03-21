import { FeatureNotImplementedError, UsageError } from "../errors.js";
import type { Command } from "../router.js";

function getQuery(subcommand: string | undefined, positional: string[]): string {
    const parts = [subcommand, ...positional].filter((value): value is string => {
        return typeof value === "string" && value.length > 0;
    });

    if (parts.length === 0) {
        throw new UsageError("topgg search <query>");
    }

    return parts.join(" ");
}

export const searchCommand: Command = {
    name: "search",
    description: "Search top.gg for bots or servers",
    usage: "topgg search <query>",
    run: ({ args }) => {
        const query = getQuery(args.subcommand, args.positional);

        throw new FeatureNotImplementedError(`search query '${query}'`);
    },
};
