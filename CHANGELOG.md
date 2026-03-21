# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project follows Semantic Versioning.

## [Unreleased]

### Added

- Bare-minimum TypeScript and Rust project initialisation (`typescript/` and `rust/`).
- TypeScript custom CLI runtime with argument parsing, command routing, central execution, and typed command errors.
- TypeScript core command set scaffolding: `about`, `ping`, `stats`, `votes`, and `search`.
- Command alias support and duplicate-safe command registration.

### Changed

- VERSION flow aligned to release-candidate-first development (`x.y.z-rc.n` on active development milestones).
- Branching policy updated to `feat/branch-name` for all feature work.
- Repository and TypeScript roadmap files updated to track real milestone progress.

- Refined project documentation to use a clearer, more maintainable house style.
- Split automation into focused workflows for release promotion, version guard, and project standards.
- Improved workflow naming and readability for long-term maintenance.

## [0.1.0] - 2026-03-15

### Added

- Initial repository scaffold.
- Core public project documentation.
- MIT licence and governance files.
