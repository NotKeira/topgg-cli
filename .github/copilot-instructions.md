# topgg-cli Copilot Instructions

These instructions apply to all Copilot-assisted contributions in this repository.

## Scope and Intent

- Human maintainers own technical decisions and final review.
- Treat AI output as draft material that must be checked before merge.
- Keep edits small, reviewable, and anchored to the current repository state.

## Writing and Documentation Standards

- Use British English in all user-facing text and documentation.
- Prefer natural, direct writing over generic template phrasing.
- Keep markdown practical and specific to this repository.
- Avoid boilerplate sections that do not reflect actual project behaviour.

## Versioning and Release Rules

- `VERSION` is the release source of truth.
- Allowed values:
  - Stable: `x.y.z`
  - Release candidate: `x.y.z-rc.n`
- Disallowed values include custom suffixes such as `-nightly`, `-ui`, or any non-`rc` suffix.
- Promotion flow is `dev` to `main` through pull requests.

## Workflow and CI Expectations

- Do not collapse unrelated checks into one large workflow.
- Prefer focused workflows by concern (for example release promotion, version guard, project standards).
- Use clear, maintainable workflow names and job names.
- Keep workflow permissions minimal (least privilege).

## Security Requirements

- Never commit secrets, keys, tokens, or credentials.
- Follow least-privilege principles in workflow permissions and automation.
- Security contact must remain: `security@keirahopkins.co.uk`.
- Keep `SECURITY.md` accurate whenever security process changes.

## Repository Structure Expectations

- Keep `rust/` and `typescript/` present in the scaffold phase with `.gitkeep`.
- Keep governance files present and maintained:
  - `README.md`
  - `CHANGELOG.md`
  - `CONTRIBUTING.md`
  - `SECURITY.md`
  - `CODE_OF_CONDUCT.md`
  - `CODEOWNERS`
  - `LICENSE`
  - `VERSION`

## Branching and Commit Rules

- Never commit directly to `main` or `dev`.
- Always work on a branch named `dev/branch-name`.
- One commit per change. Do not bundle unrelated work into a single commit.
- Focus on one task at a time before moving to the next.

## Contribution Quality Bar

- Changes should read as intentionally human-maintained, not auto-generated.
- Prefer clarity over cleverness.
- Do not rename files or workflows gratuitously.
- Update docs whenever behaviour, policy, or automation changes.
