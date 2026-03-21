import { CommandError } from "../errors.js";
import type { Command } from "../router.js";

const TOP_GG_API_URL = "https://top.gg/api";
const DEFAULT_MULTI_TRIP_COUNT = 5;
const MIN_MULTI_TRIP_COUNT = 2;
const MAX_MULTI_TRIP_COUNT = 10;

function toMilliseconds(value: number): string {
    return `${value.toFixed(2)} ms`;
}

async function measureTripMs(): Promise<number> {
    const start = performance.now();

    const response = await fetch(TOP_GG_API_URL, {
        method: "GET",
        redirect: "follow",
        signal: AbortSignal.timeout(10_000),
    });

    // We only need request/response latency, not the full payload.
    await response.body?.cancel();

    return performance.now() - start;
}

function resolveMultiTripCount(raw: string | boolean | undefined): number {
    if (raw === undefined || raw === true) {
        return DEFAULT_MULTI_TRIP_COUNT;
    }

    if (raw === false) {
        return DEFAULT_MULTI_TRIP_COUNT;
    }

    const count = Number.parseInt(raw, 10);

    if (!Number.isFinite(count)) {
        throw new CommandError("--count must be a number.", 2);
    }

    if (count < MIN_MULTI_TRIP_COUNT || count > MAX_MULTI_TRIP_COUNT) {
        throw new CommandError(
            `--count must be between ${MIN_MULTI_TRIP_COUNT} and ${MAX_MULTI_TRIP_COUNT}.`,
            2,
        );
    }

    return count;
}

export const pingCommand: Command = {
    name: "ping",
    description: "Measure latency to the top.gg API",
    usage: "topgg ping [--count <2-10>]",
    aliases: ["health"],
    run: async ({ args, stdout, stderr }) => {
        const multiTripCount = resolveMultiTripCount(args.flags.count);

        stdout(`Pinging ${TOP_GG_API_URL}...`);

        try {
            const coldRttMs = await measureTripMs();

            let totalTripMs = 0;
            for (let i = 0; i < multiTripCount; i += 1) {
                totalTripMs += await measureTripMs();
            }

            // Prime the connection once, then measure a warm round trip.
            await measureTripMs();
            const warmRttMs = await measureTripMs();

            const averageMultiTripMs = totalTripMs / multiTripCount;

            stdout(`cold RTT: ${toMilliseconds(coldRttMs)}`);
            stdout(`average RTT (${multiTripCount} samples): ${toMilliseconds(averageMultiTripMs)}`);
            stdout(`warm RTT: ${toMilliseconds(warmRttMs)}`);
        } catch (error) {
            const detail = error instanceof Error ? error.message : String(error);
            stderr(`Ping failed: ${detail}`);
            throw new CommandError("Unable to reach the top.gg API.", 4);
        }
    },
};
