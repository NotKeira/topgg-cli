import type { Command } from "../router.js";

export const pingCommand: Command = {
    name: "ping",
    description: "Check that the CLI is alive",
    usage: "topgg ping",
    aliases: ["health"],
    run: ({ stdout }) => {
        stdout("pong");
    },
};
