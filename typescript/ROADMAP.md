# TypeScript Roadmap

Implementation plan for the TypeScript layer of topgg-cli. See the root `ROADMAP.md` for the full project overview.

---

## Setup

- [ ] Initialise `package.json` with name, version, and bin entry
- [ ] Configure `tsconfig.json` (strict, ESM output)
- [ ] Add `eslint` and `prettier` with project-standard config
- [ ] Set up `vitest` for testing

## API Client

- [ ] HTTP client wrapper around the top.gg API
- [ ] Token auth via config file or environment variable
- [ ] Typed response models for bots, votes, stats

## CLI Framework

- [ ] Set up `commander` (or equivalent) as the CLI driver
- [ ] Global `--token` and `--format` flags
- [ ] Error handling and user-friendly messages

## Commands

- [ ] `stats <botId>` — fetch and display bot statistics
- [ ] `votes <botId>` — list recent voters
- [ ] `search <query>` — search for bots or servers
- [ ] `post stats <botId>` — post server/shard count to top.gg
- [ ] `webhook set` / `webhook clear` — manage webhook config

## Output

- [ ] Default human-readable table output
- [ ] `--format json` for scripting
- [ ] `--format plain` for minimal output

## Testing

- [ ] Unit tests for API client
- [ ] Integration tests against top.gg sandbox or mocked responses
- [ ] CLI command tests

## Distribution

- [ ] Build to `dist/` with source maps
- [ ] npm publish flow tied to VERSION
- [ ] `npx topgg-cli` works out of the box
