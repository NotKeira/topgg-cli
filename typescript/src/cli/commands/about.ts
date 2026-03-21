import { createRequire } from "module";
import type { Command } from "../router.js";

const require = createRequire(import.meta.url);
const pkg = require("../../../package.json") as {
    name: string;
    version: string;
    description: string;
};

export const aboutCommand: Command = {
    name: "about",
    description: "Show CLI metadata and runtime information",
    usage: "topgg about",
    run: ({ stdout }) => {
        stdout(`${pkg.name} v${pkg.version}`);
        stdout(pkg.description);
        stdout(`Node.js ${process.version}`);
        stdout(`Platform ${process.platform}`);
    },
};
