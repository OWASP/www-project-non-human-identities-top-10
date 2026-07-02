# Open-Source Detection Resources

The NHI Top 10 describes what can go wrong. This page indexes free, open-source tooling that helps organizations *assess* their own exposure to those risks.

Listing here is not an endorsement. It is a vendor-neutral, community-maintained index. Tools are added by pull request and must meet the inclusion criteria below. The same criteria apply to every entry, including the first.

## Inclusion Criteria

A tool may be listed if it:

1. Is open source under an OSI-approved license.
2. Is read-only by default where technically feasible, or clearly documents any write or remediation actions.
3. Maps to at least one NHI Top 10 risk, stated explicitly in its entry.
4. Documents how it handles collected metadata — where it is stored, and whether anything leaves the user's environment.

## Entry Format

Each tool is one row with these fields:

| Field | Description |
|---|---|
| Tool | Name and repository link |
| NHI risk ID(s) | The NHI Top 10 risks the tool's checks map to |
| Identity types | e.g. GitHub App, PAT, OAuth app, service account, cloud workload identity, CI/CD token |
| Environment(s) | e.g. GitHub, Entra ID, Google Workspace, AWS, Kubernetes |
| Access | Permissions required; read-only (yes/no) |
| Evidence produced | What it surfaces (e.g. stale owner, unused credential, excessive scope, missing rotation) |
| Blind spots / false positives | Known limitations |
| Metadata handling | Where collected data is stored and whether it leaves the environment |
| License & maintenance | License; whether actively maintained |

## Tools

Add tools below via pull request, one row per tool, in the format above. Each entry must meet the inclusion criteria.

| Tool | NHI risk ID(s) | Identity types | Environment(s) | Access | Evidence produced | Blind spots / false positives | Metadata handling | License & maintenance |
|---|---|---|---|---|---|---|---|---|
| *Tool name + repo* | *NHI1, NHI5* | *GitHub App, PAT* | *GitHub* | *read-only* | *stale / over-scoped credentials* | *…* | *local; no telemetry* | *MIT; active* |
| [gh-iga](https://github.com/abhishek20c/gh-iga) | NHI1, NHI3, NHI5, NHI7 | GitHub Apps, SSH deploy keys, Actions secrets, Actions `GITHUB_TOKEN` (plus webhook integrations as a third-party surface) | GitHub | `repo` + `read:org` + `admin:org`; read-only (single PAT) | Over-permissioned & org-wide apps, suspended apps; read-write & stale deploy keys; unrotated Actions secrets; webhooks with no secret / insecure transport; read-write `GITHUB_TOKEN` default; Actions able to approve PRs | Repos where the token lacks admin are silently skipped (their keys/secrets/webhooks/workflow settings won't appear); GitHub App inventory is org-only; staleness thresholds are heuristic (deploy keys 90d, secrets 365d by default) | All local; no telemetry; secret values never read | MIT; actively maintained |
