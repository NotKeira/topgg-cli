# topgg-cli

A clean scaffold for the topgg-cli project.

The repository is independently owned by Keira Hopkins and developed with authorisation from top.gg.

## Goals

- Keep all user-facing content in British English.
- Ship accurate top.gg API integrations.
- Maintain strong test coverage as code lands.
- Hold a high security and governance baseline.
- Use practical automation for release promotion and policy checks.

## Project Layout

- `typescript/`: Placeholder for the TypeScript implementation.
- `rust/`: Placeholder for the Rust implementation.

## Status

This is the initial baseline commit.
Application code will be introduced incrementally in follow-up commits.

## Release Flow

- Development work lands on the dev branch.
- Releases are promoted from dev to main through an automated pull request.
- VERSION is the source of truth for release intent.
- Allowed VERSION formats are x.y.z and x.y.z-rc.n.
- Other suffix formats such as x.y.z-nightly or 1.2.4-ui are intentionally ignored.

## Automation

- Release promotion is handled in a dedicated workflow.
- Project standards checks are handled in a separate workflow.
- Version format checks are handled in a separate workflow.

## Security

Please read [SECURITY.md](SECURITY.md) before reporting vulnerabilities.

## Licence

This project is licensed under the MIT Licence. See [LICENSE](LICENSE) for details.
