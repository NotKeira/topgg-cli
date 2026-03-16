# Rust Roadmap

Implementation plan for the Rust layer of topgg-cli. See the root `ROADMAP.md` for the full project overview.

---

## Setup

- [ ] Initialise `Cargo.toml` with package metadata and binary target
- [ ] Set up workspace if needed for shared crates
- [ ] Add `clippy` and `rustfmt` with project-standard config
- [ ] Configure `cargo test` baseline

## API Client

- [ ] HTTP client using `reqwest` (async, with `tokio`)
- [ ] Token auth via config file or environment variable
- [ ] Typed structs for bot, vote, and stats responses (via `serde`)

## CLI Framework

- [ ] Set up `clap` with derive macros for command definitions
- [ ] Global `--token` and `--format` flags
- [ ] Structured error handling with `thiserror` or `anyhow`

## Commands

- [ ] `stats <bot_id>` — fetch and display bot statistics
- [ ] `votes <bot_id>` — list recent voters
- [ ] `search <query>` — search for bots or servers
- [ ] `post stats <bot_id>` — post server/shard count to top.gg
- [ ] `webhook set` / `webhook clear` — manage webhook config

## Output

- [ ] Default human-readable table output (`comfy-table` or similar)
- [ ] `--format json` for scripting
- [ ] `--format plain` for minimal output

## Testing

- [ ] Unit tests for API client and response parsing
- [ ] Integration tests with mocked HTTP responses (`mockito`)
- [ ] CLI command tests via `assert_cmd`

## Distribution

- [ ] Build optimised release binary
- [ ] crates.io publish flow tied to VERSION
- [ ] Pre-built binaries attached to GitHub Releases
