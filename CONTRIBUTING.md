# Contributing to NoRec.US

NoRec.US is built around a simple idea: **people should be able to inspect the evidence behind surveillance systems operating around them.**

You do not need to be a developer, journalist, attorney, GIS specialist, or experienced FOIA requester to help. People who know their communities, find records, verify claims, improve maps, write clearly, or make the site work better are all useful contributors.

The priority is accurate public information. Beautification comes second.

## Ways to contribute

Research contributions include FOIA/public-records responses, policies, contracts, invoices, procurement records, grants, meeting materials, audits, surveillance locations, local agency research, corrections, and newer records that supersede existing research.

NoRec.US covers surveillance broadly: cameras, ALPR, facial recognition, drones/UAS, biometrics, body/in-car video, real-time intelligence systems, gunshot detection, analytics, traffic enforcement, evidence platforms, and related infrastructure.

Technical contributions are welcome too: Astro/web development, accessibility, responsive design, performance, jurisdiction GIS/data tooling, importers, documentation, and research workflows.

Small contributions matter. Fix one typo. Verify one citation. Research one municipality. Submit one FOIA response. Improve one component.

## Research standard

The most important rule is:

> **Say what the evidence establishes, not what you think probably happened.**

Prefer primary sources: statutes, agency policies, contracts, invoices, procurement records, audits, official reports, meeting packets, court records, and public-records responses.

Credible secondary reporting is useful, especially for identifying research leads, but consequential claims should move toward primary documentation whenever possible.

### Capability is not deployment

Vendor documentation can establish what a product is capable of doing. It generally cannot establish that a specific agency purchased, enabled, configured, or used every available feature.

```text
GOOD: Vendor documentation says the platform supports feature X.
GOOD: The agency contract lists feature X.
BAD:  The vendor supports feature X, therefore this agency uses it.
```

### Unknown is a valid result

Missing evidence is neither reassurance nor proof of deployment.

If the available record does not establish an answer, use `UNKNOWN` or the project's unresearched state. Do not describe an unresearched jurisdiction as surveillance-free.

### Attribute the correct organization

Physical location and ownership are different facts. Preserve the operator/owner separately from where equipment is located whenever possible.

County, municipal, state, federal, and private systems should not be collapsed into one inventory merely because they occupy the same geography.

### Preserve lifecycle

Installed, active, planned, ordered, returned, decommissioned, and historical equipment are different states.

Do not add returned equipment to an active count. Do not turn a proposal into an installed deployment.

## Evidence labels

| Label | Meaning |
| --- | --- |
| **DOCUMENTED** | Direct primary-source support. |
| **SECONDARY-SOURCE CONFIRMED** | Credible secondary support; primary record not yet in the published source set. |
| **UNKNOWN** | Available evidence does not establish the answer. |
| **UNDER INVESTIGATION** | A specific unresolved question is actively researchable. |
| **HISTORICALLY DOCUMENTED** | Evidence establishes a past state, not necessarily the current one. |

When uncertain, make the narrower claim and attach the source.

## Public-record contributions

If possible, include the issuing agency, request/case number, request and production dates, a short description of what the record establishes, original file format, source URL when applicable, and whether the record contains redactions.

Do not modify the evidentiary copy merely to make it prettier. If a transcription, OCR copy, excerpt, or other derivative is useful, keep it separate from the original.

Important archived records may receive SHA-256 hashes so later copies can be compared with the version used by NoRec.US.

Third-party and government records remain attributable to their original creators. Committing a copy under `public/archive/` does not make it MIT-licensed NoRec.US material.


## Corrections

Corrections are contributions.

If NoRec.US misreads a record, uses obsolete information, attributes equipment to the wrong agency, counts planned equipment as installed, misses a cancellation/return, uses an incorrect location, or omits context that materially changes a claim, submit the better evidence.

There is no penalty for making a claim less dramatic. Accuracy wins.

## Development

```bash
git clone https://github.com/yung-megafone/NoRec-US.git
cd NoRec-US
npm install
npm run dev
```

Before submitting code, run:

```bash
npm run build
```

The public site is static and builds into `dist/`.

Please preserve the privacy-first architecture: avoid unnecessary third-party requests, analytics/tracking dependencies, and gratuitous client-side JavaScript; prefer locally bundled assets and release-pinned/local datasets where practical; and keep public pages usable when outside services fail.

### Jurisdiction routes

Illinois research follows:

```text
/illinois/counties/<county>/
/illinois/counties/<county>/cities/<municipality>/
```

Do not use ZIP codes as jurisdiction identifiers.

Municipalities crossing county lines should not intentionally maintain conflicting factual dossiers. Prefer a canonical dossier with appropriate aliases/redirects where the relationship is clear.

## Pull requests

A useful PR explains what changed, why it changed, which sources support factual changes, whether an existing claim was corrected/superseded, and whether `npm run build` succeeds for code changes.

Keep unrelated changes separate when practical. Large redesigns or architecture changes are worth discussing first so contributors do not spend hours building something incompatible with the project.

## Issues

Issues are welcome for factual corrections, missing/broken sources, research leads, accessibility problems, broken routes, mobile/layout problems, map/data issues, feature proposals, and documentation improvements.

A research lead does not need to arrive fully solved. Clearly label uncertainty and provide enough information for someone else to investigate.

## Conduct

Research surveillance systems without harassing people.

Do not use NoRec.US contributions to publish private personal information, encourage threats, target private individuals, or turn unverified accusations into profiles. Public agencies, companies, contracts, technologies, policies, and official conduct can be scrutinized aggressively while maintaining a factual record.

Disagreement is fine. Evidence decides what the project publishes.

## Licensing contributions and third-party material

By contributing original code or original project content that you have the right to license, you agree that it may be distributed under the repository's MIT License unless explicitly agreed otherwise.

**Do not submit third-party material on the assumption that the MIT License will cover it.** Government records, vendor documents, map datasets, photographs, trademarks, logos, and other external material may be public domain, separately licensed, copyrighted, or subject to attribution requirements.

When adding third-party material:

1. preserve its source and attribution;
2. record the applicable license/terms when known;
3. add or update `THIRD_PARTY_NOTICES.md` when appropriate;
4. do not remove existing notices;
5. do not represent third-party material as NoRec.US-owned.

If you are unsure whether the repository can redistribute a particular file, link to the authoritative source or open an issue before committing it.

## Questions

If you are unsure whether something belongs, open an issue.

You do not need a perfect contribution. You need a contribution that makes the public record a little clearer.
