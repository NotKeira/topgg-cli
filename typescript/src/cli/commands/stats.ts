import { CommandError, FeatureNotImplementedError } from "../errors.js";
import type { Command } from "../router.js";

function getBotId(subcommand: string | undefined): string {
    if (!subcommand) {
        throw new CommandError("Usage: topgg stats <bot-id>", 2);
    }

    return subcommand;
}

export const statsCommand: Command = {
    name: "stats",
    description: "Fetch bot statistics from top.gg",
    usage: "topgg stats <bot-id>",
    run: ({ args }) => {
        const botId = getBotId(args.subcommand);

        throw new FeatureNotImplementedError(`stats for bot '${botId}'`);
    },
};
