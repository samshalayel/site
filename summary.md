# JSON Files Summary — samshalayel/site

> Generated: 2026-04-29

## Overview

This repository contains **45 JSON files** representing structured design artifacts for a product development methodology called **Seesaw**. Files follow a stage-based workflow: PD → S0 → S1 → S2, where each stage captures a specific layer of product definition before any technical implementation begins.

---

## JSON Schema Types

### 1. React Flow Diagram Format (nodes + edges)
Most files use this format — structured graph diagrams for visualization in a React Flow canvas.

Node types found:

| Node Type | Purpose |
|-----------|---------|
| group | Container/grouping box for a stage |
| pd-summary-node | Problem Discovery: Summary |
| pd-actors-node | Problem Discovery: Actors |
| pd-goals-node | Problem Discovery: Goals |
| pd-pain-points-node | Problem Discovery: Pain Points |
| pd-constraints-node | Problem Discovery: Constraints |
| pd-scope-node | Problem Discovery: Scope |
| pd-signals-node | Problem Discovery: Signals |
| gate-problem | PD Lock Gate (human approval required) |
| stage-0 | Stage 0 indicator node |
| stage-1 | Stage 1 indicator node |
| actors-node | S1: Actors |
| entities-node | S1: Entities |
| modules-node | S1: Modules |
| boundaries-node | S1: Boundaries |
| interactions-node | S1: Interactions |
| gate-shape | Shape Gate (S1 completion checkpoint) |
| next-stage | Pointer to next stage |

### 2. Flat Schema Format (schema_version key)
Used in some PRO002 files. Keys: schema_version, language, summary, actors, goals, pain_points, constraints, scope_in, scope_out, signals, unknowns, clarifying_questions, source_text, trace.

---

## Stage Definitions

| Stage | Name | AI% | Human% | Output |
|-------|------|-----|--------|--------|
| PD | Problem Discovery | 0% | 100% | Validated problem statement |
| S0 | Problem / Technical Lock | 5% | 95% | Confirmed problem, locked scope, no solutions |
| S1 | Product Shape | 5% | 95% | Actors, entities, modules, boundaries |
| S2 | Experience Map | TBD | TBD | User journey mapping |

Gate Rules: No stage advances without human approval. S0 explicitly forbids: solutions, API, UI, DB Schema, Architecture, CRUD, or Code.

---

## Projects

### PRO001 — Clinic Appointment Management System
Arabic: نظام إدارة مواعيد العيادة

Problem: Clinics manage appointments manually via phone/messages, causing scheduling conflicts, forgotten bookings, and unclear availability.

Actors: Patients, Reception Staff, Doctor, Clinic Manager, Technical Support

Status: S1 Complete — Ready for S2 (Experience Mapping)

| Stage | Status |
|-------|--------|
| PD | Complete |
| S0 | Complete |
| S1 | Complete |
| S2 | Next |

Key Entities: Appointment, Patient, Doctor, Clinic, Booking

Modules: Booking, Scheduling, Patient Management, Notifications, Reports

Out of Scope: Patient medical records, financial details, diagnoses, digital payments

Files (14):

| File | Stage | Date | Size |
|------|-------|------|------|
| PRO001_PD_v0.0_2026-04-28T21-18-22Z.json | PD v0.0 | 2026-04-28 | 6,986 B |
| PRO001_S0_v0.0_2026-04-28T21-18-22Z.json | S0 v0.0 | 2026-04-28 | 6,393 B |
| PRO001_S1_v0.0_2026-04-29T07-29-18Z.json | S1 v0.0 | 2026-04-29 | 8,485 B |
| pro001-pd-28042026.json | PD draft | 2026-04-28 | 5,448 B |
| pro001-S0.json | S0 draft | — | 5,355 B |
| pro001_pd_2026-04-26T20-26-46Z.json | PD draft | 2026-04-26 | 1,634 B |
| pro001_pd_2026-04-26T20-50-00Z.json | PD draft | 2026-04-26 | 2,004 B |
| pro001_pd_2026-04-28T16-29-45Z.json | PD draft | 2026-04-28 | 893 B |
| pro001_pd_2026-04-28T16-47-31Z.json | PD draft | 2026-04-28 | 2,051 B |
| pro001_pd_2026-04-28T17-09-54Z.json | PD draft | 2026-04-28 | 6,910 B |
| pro001_s0_2026-04-26T20-27-54Z.json | S0 draft | 2026-04-26 | 3,672 B |
| pro001_s0_2026-04-26T20-55-00Z.json | S0 draft | 2026-04-26 | 3,889 B |
| pro001_s0_2026-04-28T16-47-31Z.json | S0 draft | 2026-04-28 | 1,457 B |
| pro001_s0_2026-04-28T17-09-54Z.json | S0 draft | 2026-04-28 | 5,811 B |

---

### PRO002 — School Management System
Arabic: نظام مدرسي متكامل

Problem: Comprehensive school management covering students, teachers, classes, subjects, exams, homework, attendance tracking, and administrative tasks (fees, enrollment).

Actors: Students (طلبة), Teachers (مدرسون), Homeroom Teachers (مربي فصل), School Administration (إدارة المدرسة)

Status: S1 reached (two versions exist)

Files (4):

| File | Stage | Date | Size |
|------|-------|------|------|
| PRO002_PD_v0.0_2026-01-21T12-30-00Z.json | PD v0.0 | 2026-01-21 | 2,460 B |
| PRO002_S0_v0.0_2026-01-21T12-35-00Z.json | S0 v0.0 | 2026-01-21 | 5,227 B |
| PRO002_S1_v0.0_2026-04-08T19-47-16Z.json | S1 v0.0 | 2026-04-08 | 4,629 B |
| PRO002_S1_v0.1_2026-04-08.json | S1 v0.1 | 2026-04-08 | 5,632 B |

---

### PRO003 — Support Ticket Management System
Arabic: نظام إدارة تذاكر الدعم الفني

Problem: Legacy support ticket system with critical issues — inaccurate dashboard numbers, disorganized categorizations, tickets closed without requester approval, serial numbers not recorded for devices, frequent server errors, and poor stability.

Impact Areas: Report accuracy, closure governance, asset tracking, system stability, user satisfaction

Risk Level: Very High

Status: S2 reached (most advanced project)

Files (3):

| File | Stage | Date | Size |
|------|-------|------|------|
| PRO003_S0_v0.0_2026-04-08T21-23-50Z.json | S0 v0.0 | 2026-04-08 | 6,127 B |
| PRO003_s1_2026-04-08T21-34-54Z.json | S1 | 2026-04-08 | 5,112 B |
| PRO003_s2_2026-04-08T21-45-08Z.json | S2 | 2026-04-08 | 4,660 B |

---

## Standalone PD Files (8)

Problem Discovery snapshots without a project prefix:

| File | Date | Size |
|------|------|------|
| PD_2025-01-09T12-00-00Z.json | 2025-01-09 | 1,769 B |
| PD_2025-01-15T12-00-00Z.json | 2025-01-15 | 2,923 B |
| PD_2026-04-08T21-10-44Z.json | 2026-04-08 | 3,777 B |
| PD_2026-04-21T13-20-14Z.json | 2026-04-21 | 1,978 B |
| PD_2026-04-21T16-14-31Z.json | 2026-04-21 | 1,039 B |
| PD_2026-04-22T13-21-02Z.json | 2026-04-22 | 1,414 B |
| PD_2026-04-24T19-15-47Z.json | 2026-04-24 | 1,598 B |
| PD_2026-04-24T21-20-34Z.json | 2026-04-24 | 927 B |

---

## Standalone S0 Files (6)

Stage 0 snapshots without project prefix:

| File | Date | Size |
|------|------|------|
| S0_2025-01-15T12-05-00Z.json | 2025-01-15 | 5,730 B |
| S0_2026-04-08T21-15-32Z.json | 2026-04-08 | 6,127 B |
| S0_2026-04-21T16-16-21Z.json | 2026-04-21 | 4,053 B |
| S0_2026-04-22T13-20-00Z.json | 2026-04-22 | 4,301 B |
| S0_2026-04-24T19-16-59Z.json | 2026-04-24 | 5,560 B |
| S0_2026-04-24T20-22-32Z.json | 2026-04-24 | 595 B |

---

## Reference / Template Files (10)

| File | Description | Size |
|------|-------------|------|
| stable.json | Main stable schema (S0 stage template) | 9,413 B |
| stable2026.json | Identical to stable.json | 9,413 B |
| stable20260323.json | Stable schema dated 2026-03-23 | 9,513 B |
| stable-v5555555.json | Versioned stable schema | 9,392 B |
| stable12000.json | Stable schema variant | 6,993 B |
| 20260323.json | Schema snapshot | 9,392 B |
| 222.json | Identical SHA to 20260323.json | 9,392 B |
| vvvv.json | Draft/test schema | 7,154 B |
| problem-discovery.json | Generic PD template (clinic) | 4,469 B |
| العيادة-تسجيل-المواعيد-pd.json | Clinic PD (Arabic filename) | 2,292 B |

---

## File Count Summary

| Category | Count |
|----------|-------|
| PRO001 files | 14 |
| PRO002 files | 4 |
| PRO003 files | 3 |
| Standalone PD files | 8 |
| Standalone S0 files | 6 |
| Reference/template files | 10 |
| Total JSON files | 45 |

---

## Key Observations

1. PRO001 is most active — 14 files with the most recent commit on 2026-04-29 (today), progressing through PD, S0, and S1 for a clinic appointment booking system.

2. Two JSON schema formats exist — React Flow diagram format (nodes/edges) for canvas visualization, and a flat key-value format (schema_version) for structured data.

3. Strict human-gate methodology — Every stage transition requires human approval. Stage 0 explicitly forbids solutions, API, UI, DB Schema, Architecture, CRUD, or Code.

4. Arabic-first content — All project descriptions, problem statements, and domain content are written in Arabic.

5. Timestamp-based versioning — Files use timestamps like 2026-04-28T21-18-22Z with semantic versions (v0.0) for official releases and raw timestamps for drafts.

6. Multiple duplicate files — Several files share identical SHA hashes: stable.json = stable2026.json; 20260323.json = 222.json = stable-v5555555.json.
