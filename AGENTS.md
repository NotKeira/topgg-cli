# AI Assistant Contribution Guide

This file defines contribution standards for any AI assistant used in this repository.

## Principle

AI assistance is optional and secondary to human judgement. Maintainers own design decisions, correctness, and final approval.

## Mandatory Standards

- Use British English in documentation and user-facing copy.
- Keep writing natural, concise, and repository-specific.
- Avoid generic, over-produced, or repetitive AI-style wording.

## Release and Branching Policy

- Development branch: `dev`.
- Production branch: `main`.
- Promotion to `main` is done via pull request.
- Never commit directly to `main` or `dev`. Always use a feature branch named `feat/branch-name`.
- One commit per change — do not batch unrelated work.
- Focus on one task at a time before moving on.
- `VERSION` controls release intent and must use one of:
  - `x.y.z`
  - `x.y.z-rc.n`
- Versions with other suffixes (for example `x.y.z-nightly`, `1.2.4-ui`) are not release-eligible.

## Automation Policy

- Keep CI/workflows split by responsibility.
- Use clear names and maintainable logic.
- Apply least-privilege permissions in GitHub Actions.
- Do not introduce large catch-all workflows for unrelated checks.

## Security and Governance

- Never commit secrets.
- Keep security contact as `security@keirahopkins.co.uk`.
- Keep governance documents accurate and in sync with repository behaviour.

## Repository Baseline

During scaffold stage, preserve:

- `rust/.gitkeep`
- `typescript/.gitkeep`

And maintain root governance files:

- `README.md`
- `CHANGELOG.md`
- `CONTRIBUTING.md`
- `SECURITY.md`
- `CODE_OF_CONDUCT.md`
- `CODEOWNERS`
- `LICENSE`
- `VERSION`
