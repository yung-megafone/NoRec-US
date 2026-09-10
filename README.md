<p align="center">
  <img src="./public/brand/norec-wordmark-transparent.png" alt="NoRec.US — Surveillance, documented." width="560">
</p>

<p align="center"><strong>See what watches you.</strong></p>

<p align="center">
  <a href="https://norec.us">Website</a> ·
  <a href="https://t.me/NoRec_US">Telegram</a> ·
  <a href="./CONTRIBUTING.md">Contribute</a> ·
  <a href="./LICENSE">License</a>
</p>

# NoRec.US

**NoRec.US is an open-source surveillance-awareness and public-records project focused on Illinois.**

Surveillance information is often scattered across contracts, policies, meeting packets, public-records responses, maps, vendor documents, and agency websites. NoRec.US brings that evidence together so people can see what technology is being used, who operates it, what the rules say, and where the information came from.

The project began with automated license-plate reader research in northern Illinois and has expanded to cameras, facial recognition, drones, biometric systems, body-worn and in-car video, real-time intelligence platforms, evidence systems, gunshot detection, and other surveillance infrastructure.

NoRec.US is privacy-focused, but evidence comes first. **When the record stops, the claim stops with it.**

## Explore NoRec.US


### Illinois jurisdictions

Research is organized geographically:

```text
Illinois → County → Municipality
```

The Illinois directory contains all 102 counties. Researched jurisdictions progressively receive source-backed dossiers covering agencies, technologies, policies, contracts, public records, and known deployments.

**UNRESEARCHED means not yet reviewed. It does not mean surveillance-free.**

Physical location and ownership are also kept separate whenever the evidence permits it. A device located in a county is not automatically county-owned.

### Technologies and providers

Technology pages explain surveillance systems and their capabilities. Provider pages document vendors and published product capabilities.

Vendor documentation showing that a product *can* perform a function does not establish that a particular agency purchased, enabled, or used that function.

### Public records

Primary records are the backbone of NoRec.US. Research can link directly to FOIA responses, contracts, policies, audits, procurement records, meeting materials, statutes, and agency reports.

Where practical, important records are preserved under [`public/archive/`](./public/archive/) so the evidence used by the project does not disappear when an agency redesigns a website.

Archived third-party records remain attributable to their original source. Archiving a document does not make it NoRec.US intellectual property.

## How to read the research

NoRec.US deliberately distinguishes what is established from what remains uncertain.

| Label | Meaning |
| --- | --- |
| **DOCUMENTED** | Directly supported by a primary record. |
| **SECONDARY-SOURCE CONFIRMED** | Supported by credible records-based reporting or another secondary source, but the primary record is not yet in the published source set. |
| **UNKNOWN** | The available evidence does not establish an answer. |
| **UNDER INVESTIGATION** | A specific unresolved question is being researched. |
| **HISTORICALLY DOCUMENTED** | Evidence establishes a past deployment or relationship, not necessarily a current one. |

Installed, planned, returned, decommissioned, and historical equipment are not interchangeable. Better evidence should change the project rather than being forced to fit an earlier conclusion.

## Why this exists

Surveillance infrastructure is easier to understand and debate when people can inspect the underlying record themselves.

NoRec.US exists to make that record easier to find, preserve, verify, correct, and understand. It is not intended to be a database of rumors, and documenting privacy risk does not require pretending that a technology can never have a legitimate use.

The basic standard is simple:

- prefer primary sources;
- do not turn capability into claimed deployment;
- attribute systems to the correct organization;
- preserve uncertainty;
- distinguish current from historical information;
- correct the record when better evidence appears;
- publish the receipts behind consequential claims.

## Privacy by design

A surveillance-awareness site should not needlessly surveil its own visitors.

NoRec.US uses a deliberately simple static architecture with no advertising, no intentional behavioral analytics or tracking pixels, no social-media embeds, no third-party fonts, minimal client-side JavaScript, and locally hosted assets where practical.

Ordinary hosting, DNS, CDN, and security infrastructure may still process connection metadata necessary to deliver and protect the site. See the site's Privacy Notice for details.

## Help build it

NoRec.US welcomes researchers, journalists, developers, designers, GIS contributors, privacy advocates, public-records requesters, and people who simply know their own communities.

You do **not** need to write code. Useful contributions include FOIA responses, local research, corrections, stronger sources, archived records, accessibility improvements, documentation, design, and web development.

Small contributions count. Verify one citation. Research one town. Fix one typo. Submit one record.

See **[`CONTRIBUTING.md`](./CONTRIBUTING.md)** for research standards, map/data guidance, development workflow, and pull-request expectations.

## Corrections

If NoRec.US overstates a record, attributes equipment to the wrong organization, relies on obsolete information, or misses context that materially changes a claim, please open an issue or submit the corrective evidence.

**The goal is not to preserve the strongest claim. The goal is to leave the public record clearer than we found it.**

## For developers

NoRec.US uses **Astro 5, TypeScript, and plain CSS** and builds to a static site.

```bash
git clone https://github.com/yung-megafone/NoRec-US.git
cd NoRec-US
npm install
npm run dev
```

Production build:

```bash
npm run build
```

The generated site is written to `dist/`. No database or application server is required for the public site.

Developer conventions and contribution workflow live in [`CONTRIBUTING.md`](./CONTRIBUTING.md).

## Reuse and preservation

Forking, mirroring, republishing, and adapting **NoRec.US original material** is encouraged under the applicable license. The static architecture is intentional: the project should remain easy to preserve and difficult to make dependent on one platform.

Third-party records, datasets, trademarks, logos, photographs, vendor material, and other externally sourced works retain their own copyright, license, public-domain status, or other applicable terms.

## License

NoRec.US original code and original project content are released under the [MIT License](./LICENSE), unless otherwise noted.

The MIT License applies only to material for which NoRec.US has the right to grant that license. **It does not relicense third-party material merely because that material is stored, quoted, transformed, or displayed in this repository.**

See [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) for third-party attribution and dataset notices.

## Design attribution

NoRec.US began with design inspiration from the **black_white** template by HTML5webtemplates.co.uk. The site has since developed into its own Astro-based interface, but the original inspiration remains credited.

---

<p align="center"><strong>NoRec.US · Surveillance, documented.</strong></p>
