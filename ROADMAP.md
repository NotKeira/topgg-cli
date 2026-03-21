# Roadmap

This is the high-level plan for topgg-cli. It covers both the TypeScript and Rust implementations. Language-specific detail lives in `typescript/ROADMAP.md` and `rust/ROADMAP.md`.

Progress is tracked here as the project moves forward. Items are not time-boxed — they ship when they're ready and done properly.
Checked items represent work already implemented and verified in the repository.

---

## Phase 1 — Scaffold

- [x] Repository structure and governance files
- [x] VERSION file and release automation
- [x] CI: version guard, project standards, release promotion
- [x] Branching and contribution policy
- [x] TypeScript project initialisation
- [x] Rust project initialisation

## Phase 2 — Core

- [x] TypeScript CLI runtime (arg parser, command router, executor, command errors)
- [x] TypeScript command baseline (`about`, `ping`) implemented and working
- [x] TypeScript command scaffolds with validation (`stats`, `votes`, `search`)
- [ ] top.gg API client (shared logic defined, implemented per language)
- [ ] Authentication — token-based, stored securely in config
- [ ] `stats` command — fetch and display bot statistics
- [ ] `votes` command — check recent votes for a bot
- [ ] `search` command — search bots or servers on top.gg

## Phase 3 — Extended Commands

- [ ] `post` command — post bot stats (server count, shard count)
- [ ] `webhook` — manage webhook configuration
- [ ] Output formatting — plain text, JSON, and table modes

## Phase 4 — Distribution

- [ ] TypeScript: publish to npm
- [ ] Rust: publish to crates.io
- [ ] GitHub Releases tied to VERSION promotion
- [ ] Installation docs in README

## Phase 5 — Polish

- [ ] Shell completion (bash, zsh, fish)
- [ ] Comprehensive test coverage
- [ ] End-to-end usage examples in docs
- [ ] 1.0.0 stable release
