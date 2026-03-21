# TypeScript Roadmap

Implementation plan for the TypeScript layer of topgg-cli. See the root `ROADMAP.md` for the full project overview.

---

## Setup

- [x] Initialise `package.json` with name, version, and bin entry
- [x] Configure `tsconfig.json` (strict, ESM output)
- [ ] Add `eslint` and `prettier` with project-standard config
- [ ] Set up `vitest` for testing

## API Client

- [ ] HTTP client wrapper around the top.gg API
- [ ] Token auth via config file or environment variable
- [ ] Typed response models for bots, votes, stats

## CLI Framework

- [x] Set up custom CLI runtime (arg parser, router, executor)
- [x] Register default commands through a central registry
- [ ] Global `--token` and `--format` flags
- [x] Error handling with command-specific exit codes and messages

## Commands

- [x] `about` — show CLI and runtime metadata
- [x] `ping` — runtime health check command
- [x] `stats <botId>` — command scaffold with validation and placeholder
- [x] `votes <botId>` — command scaffold with validation and placeholder
- [x] `search <query>` — command scaffold with validation and placeholder
- [ ] `stats <botId>` — fetch and display bot statistics (API-backed)
- [ ] `votes <botId>` — list recent voters (API-backed)
- [ ] `search <query>` — search for bots or servers (API-backed)
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

- [x] Build to `dist/` with source maps
- [ ] npm publish flow tied to VERSION
- [ ] `npx topgg-cli` works out of the box
