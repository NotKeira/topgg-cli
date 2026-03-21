import { aboutCommand } from "./commands/about.js";
import { pingCommand } from "./commands/ping.js";
import { searchCommand } from "./commands/search.js";
import { statsCommand } from "./commands/stats.js";
import { votesCommand } from "./commands/votes.js";
import { register } from "./router.js";

export function registerDefaultCommands(): void {
    register(aboutCommand);
    register(pingCommand);
    register(searchCommand);
    register(statsCommand);
    register(votesCommand);
}
