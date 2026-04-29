# Repository Structure

## samshalayel/site

```
site/
├── reports/                          # Archived report snapshots
│   ├── PD_2025-01-14T10-30-00Z.json
│   ├── PD_2025-01-16T10-30-00Z.json
│   ├── PD_2025-01-17T10-30-00Z.json
│   ├── PD_2026-03-28T17-53-00Z.json
│   ├── S0_2025-01-16T10-35-00Z.json
│   └── S0_2026-03-28T18-01-00Z.json
│
├── seesaw/                           # Seesaw workflow templates
│   └── {runId}/
│       └── S1.workflow.json
│
│   ── Legacy / unversioned ──
├── 20260323.json
├── 222.json
├── pro001-S0.json
│
│   ── Standalone PD snapshots ──
├── PD_2025-01-09T12-00-00Z.json
├── PD_2025-01-15T12-00-00Z.json
├── PD_2026-04-08T21-10-44Z.json
├── PD_2026-04-21T13-20-14Z.json
├── PD_2026-04-21T16-14-31Z.json
├── PD_2026-04-22T13-21-02Z.json
├── PD_2026-04-24T19-15-47Z.json
├── PD_2026-04-24T21-20-34Z.json
│
│   ── Standalone S0 snapshots ──
├── S0_2025-01-15T12-05-00Z.json
├── S0_2026-04-08T21-15-32Z.json
├── S0_2026-04-21T16-16-21Z.json
├── S0_2026-04-22T13-20-00Z.json
├── S0_2026-04-24T19-16-59Z.json
├── S0_2026-04-24T20-22-32Z.json
│
│   ── Project 001 (PRO001) ──
├── PRO001_PD_v0.0_2026-04-28T21-18-22Z.json
├── PRO001_S0_v0.0_2026-04-28T21-18-22Z.json
├── PRO001_S1_v0.0_2026-04-29T07-29-18Z.json
│
│   ── Project 002 (PRO002) ──
├── PRO002_PD_v0.0_2026-01-21T12-30-00Z.json
├── PRO002_S0_v0.0_2026-01-21T12-35-00Z.json
├── PRO002_S1_v0.0_2026-04-08T19-47-16Z.json
├── PRO002_S1_v0.1_2026-04-08.json
│
│   ── Project 003 (PRO003) ──
├── PRO003_S0_v0.0_2026-04-08T21-23-50Z.json
├── PRO003_s1_2026-04-08T21-34-54Z.json
├── PRO003_s2_2026-04-08T21-45-08Z.json
│
│   ── Misc ──
├── hello.py
├── files-list.md
└── README.md
```

## File Naming Conventions

| Pattern | Meaning |
|---------|---------|
| `PD_<timestamp>.json` | Project Description snapshot at a point in time |
| `S0_<timestamp>.json` | Stage 0 snapshot at a point in time |
| `PRO<NNN>_PD_v<major>.<minor>_<timestamp>.json` | Versioned Project Description for a named project |
| `PRO<NNN>_S<stage>_v<major>.<minor>_<timestamp>.json` | Versioned Stage file for a named project |

## Folders

| Folder | Purpose |
|--------|---------|
| `reports/` | Archived historical report snapshots (PD and S0) |
| `seesaw/` | Seesaw workflow definitions, keyed by run ID |
