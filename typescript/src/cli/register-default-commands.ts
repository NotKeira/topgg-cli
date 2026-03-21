import { pingCommand } from "./commands/ping.js";
import { register } from "./router.js";

export function registerDefaultCommands(): void {
    register(pingCommand);
}
