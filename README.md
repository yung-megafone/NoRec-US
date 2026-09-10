<p align="center">
  <img src="./public/brand/norec-wordmark-transparent.png" alt="NoRec.US — Surveillance, documented." width="560">
</p>

<p align="center">
  <strong>Government surveillance, documented from the source.</strong>
</p>

<p align="center">
  <a href="https://norec.us">Website</a> ·
  <a href="https://t.me/NoRec_US">Telegram</a> ·
  <a href="./CONTRIBUTING.md">Contributing</a> ·
  <a href="./LICENSE">License</a>
</p>

# NoRec.US

**NoRec.US** is an open-source research and public-information project documenting government surveillance systems using statutes, contracts, policies, procurement records, public reports, public-records responses, and other verifiable evidence.

The project began with automated license-plate reader research in northern Illinois and has expanded to cover facial recognition, drones, body-worn and in-car video, biometric systems, real-time intelligence platforms, evidence systems, vehicle/property fingerprinting, and related surveillance infrastructure.

NoRec.US is privacy-focused, but its research standard is evidence first. A system can have legitimate uses and still deserve scrutiny. A privacy concern does not become a fact merely because it is plausible. **When the record stops, the claim stops with it.**

## What NoRec.US does

NoRec.US connects three kinds of research:

- **Technologies** — what surveillance systems can do and the legal or operational framework around them.
- **Providers** — vendor relationships and published product capabilities, kept separate from verified local deployment.
- **Jurisdictions** — what the available record establishes about counties, municipalities, agencies, and statewide systems.

Research currently includes automatic license-plate readers (ALPRs), facial recognition and Illinois credential photographs, drones/UAS, fingerprints and biometric identification, body-worn and in-car video, evidence-management systems, and related surveillance infrastructure.

## Evidence standard

NoRec.US separates established facts from unanswered questions.

| Status | Meaning |
| --- | --- |
| **DOCUMENTED** | Directly supported by a primary source such as a statute, contract, agency record, policy, procurement record, audit, or public-records response. |
| **SECONDARY-SOURCE CONFIRMED** | Supported by reputable records-based reporting or a secondary database, but the underlying primary record is not yet part of the published source set. |
| **UNKNOWN** | The available evidence does not establish an answer. |
| **UNDER INVESTIGATION** | A specific unresolved question is being researched through identifiable records, agencies, or public-records requests. |
| **HISTORICALLY DOCUMENTED** | Supported for a past deployment or relationship but not represented as current. |

Vendor documentation describes **product capability**. It does not prove that a particular agency purchased, enabled, or used every available feature.

## Illinois coverage

NoRec.US is currently focused on Illinois. Research is organized geographically as:

```text
Illinois → County → Municipality
```

The Illinois browser contains all 102 counties, with researched counties and municipalities progressively receiving source-backed dossiers. A jurisdiction may exist in the directory before anyone has completed research on it.

**UNRESEARCHED means not yet reviewed. It does not mean surveillance-free.**

Municipalities that cross county lines are represented without intentionally maintaining conflicting copies of the same factual dossier. County-owned, municipal, state, and federal systems should likewise remain distinguishable even when equipment is physically located in the same county.

Maps use government boundary data and are rendered as privacy-friendly vector geography without commercial map tiles or third-party tracking scripts.

## Public records and source preservation

Primary sources are central to the project. Jurisdiction pages can link directly to agency records, FOIA/public-records portals, policies, contracts, meeting materials, audits, and other supporting evidence.

Where practical, important public records are also preserved under [`public/archive/`](./public/archive/). Archived copies may include SHA-256 hashes so the copy used for research can later be compared with another version.

A locally archived government record remains attributable to the issuing agency. Archiving it does not make it NoRec.US intellectual property.

An empty public-records section means NoRec.US has not archived a relevant release there yet. It does **not** establish that responsive records do not exist.

## Research principles

1. **Primary sources first.** Prefer statutes, contracts, policies, audits, public reports, procurement records, meeting packets, and public-records responses.
2. **Do not turn capability into deployment.** A vendor product page proves what a product can do, not what an agency actually enabled.
3. **Attribute the correct agency.** A camera physically located in a county is not automatically county-owned.
4. **Separate installed, planned, returned, and historical equipment.** These are not interchangeable inventory counts.
5. **Preserve uncertainty.** “Unknown” is a legitimate research result.
6. **Distinguish current from historical.** Old records are date-scoped rather than silently presented as current.
7. **Correct the record.** Better evidence should change the page.
8. **Acknowledge legitimate uses.** Public-safety value and privacy risk can both be real.
9. **Publish the receipts.** Readers should be able to inspect the evidence behind consequential claims.

## Privacy by design

The public site is deliberately simple:

- static Astro output;
- no advertising;
- no intentional behavioral analytics or tracking pixels;
- no social-media embeds;
- no third-party fonts;
- minimal client-side JavaScript;
- locally bundled site assets where practical;
- human-readable citations and direct source links.

Ordinary hosting, DNS, CDN, and security infrastructure may still process connection metadata necessary to deliver and protect the site. See the site's Privacy Notice for the fuller explanation.

## Contributing

NoRec.US is a community research project. You do not need to be a professional developer, journalist, or surveillance researcher to contribute.

Useful contributions include public records and FOIA responses, stronger sourcing, corrections, local research, records preservation, accessibility improvements, responsive/web development, documentation, and investigation of agencies, policies, contracts, technologies, and vendors.

For factual additions, provide the strongest source available and clearly distinguish **what the record shows** from **what you infer from it**.

See [`CONTRIBUTING.md`](./CONTRIBUTING.md) for the full contribution guide.

Pull requests, issues, forks, mirrors, and independent verification are welcome.

## Running the site locally

NoRec.US is built with **Astro 5, TypeScript, and plain CSS** and outputs a static site. Node.js and npm are required for local development.

```bash
git clone https://github.com/yung-megafone/NoRec-US.git
cd NoRec-US
npm install
npm run dev
```

Create a production build with:

```bash
npm run build
```

The generated static site is written to `dist/`.

To preview that build locally:

```bash
npm run preview
```

No database or application server is required.

## Repository structure

```text
.
├── public/
│   ├── archive/          Preserved public records
│   ├── brand/            Locally bundled branding assets
│   ├── documents/        Public documents
│   └── images/           Site graphics
├── src/
│   ├── components/       Reusable site and evidence components
│   ├── data/             Sources, jurisdictions, and research data
│   ├── layouts/          Shared Astro layouts
│   ├── pages/            Public routes
│   └── styles/           Global styles
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Corrections

If NoRec.US overstates a record, attributes a system to the wrong agency, relies on an obsolete source, or misses relevant context, please open an issue or provide the corrective record.

The goal is not to preserve the strongest claim. **The goal is to leave the public record clearer than we found it.**

## Reuse and mirroring

Forking, mirroring, republishing, and adapting NoRec.US original material is encouraged. The static architecture is intentional: the project should remain easy to preserve and difficult to make dependent on a single platform.

Please preserve source attribution and distinguish NoRec.US original material from third-party records and assets.

## License

NoRec.US original code and original project content are released under the [MIT License](./LICENSE), unless otherwise noted.

Third-party material is not relicensed merely because it appears in this repository. This includes archived government/vendor records, trademarks, brand marks, and design assets. See [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) for attribution and licensing notes.

## Design attribution

NoRec.US began with design inspiration from the **black_white** template by HTML5webtemplates.co.uk. The site has since developed into its own Astro-based interface, but the original inspiration remains credited.

---

<p align="center">
  <strong>NoRec.US · Surveillance, documented.</strong>
</p>
