import { CommandError, FeatureNotImplementedError } from "../errors.js";
import type { Command } from "../router.js";

function getBotId(subcommand: string | undefined): string {
    if (!subcommand) {
        throw new CommandError("Usage: topgg votes <bot-id>", 2);
    }

    return subcommand;
}

export const votesCommand: Command = {
    name: "votes",
    description: "Fetch recent votes for a bot",
    usage: "topgg votes <bot-id>",
    run: ({ args }) => {
        const botId = getBotId(args.subcommand);

        throw new FeatureNotImplementedError(`votes for bot '${botId}'`);
    },
};
