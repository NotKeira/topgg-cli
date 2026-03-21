import { createRequire } from "module";
import { formatField } from "../output.js";
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
        stdout(`${pkg.name} ${pkg.version}`);
        stdout(pkg.description);
        stdout("");
        stdout(formatField("runtime", `Node.js ${process.version}`));
        stdout(formatField("platform", process.platform));
    },
};
