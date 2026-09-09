<p align="center">
  <img src="./public/brand/norec-wordmark-transparent.png" alt="NoRec.US — Surveillance, documented." width="560">
</p>

<p align="center">
  <strong>Government surveillance, documented from the source.</strong>
</p>

<p align="center">
  <a href="https://norec.us">norec.us</a> ·
  <a href="https://t.me/NoRec_US">Telegram</a> ·
  <a href="#contributing">Contributing</a> ·
  <a href="./LICENSE">License</a>
</p>

# NoRec.US

**NoRec.US** is an open-source research and public-information project documenting government surveillance systems with statutes, contracts, policies, procurement records, public reports, FOIA responses, and other verifiable evidence.

The project began with automated license-plate reader research in northern Illinois and has expanded into facial recognition, vehicle/property fingerprinting, drones, body and in-car video, biometric systems, real-time intelligence platforms, evidence systems, and related surveillance infrastructure.

NoRec.US is explicitly privacy-focused, but the research standard is evidence first. A useful surveillance system can still deserve scrutiny. A privacy concern does not become a fact merely because it is plausible. When the record stops, the claim stops with it.

## Evidence standard

NoRec.US separates established facts from unanswered questions.

| State | Meaning |
| --- | --- |
| **DOCUMENTED** | Directly supported by a primary source such as a statute, contract, agency record, policy, procurement record, audit, or FOIA response. |
| **SECONDARY-SOURCE CONFIRMED** | Supported by reputable records-based reporting or a secondary database, but the underlying primary record is not yet part of the published source set. |
| **UNKNOWN** | The available evidence does not establish an answer. |
| **UNDER INVESTIGATION** | A specific unresolved question is being researched through identifiable records, agencies, or public-records requests. |
| **HISTORICALLY DOCUMENTED** | Supported for a past deployment or relationship but not represented as current. |

Vendor documentation is used to describe **product capability**, not to prove that a particular agency purchased, enabled, or used every available feature.

## What is documented

The site currently organizes research around three connected views:

**Technologies** explain what a system does and the legal or operational framework around it.

**Providers** document vendor relationships and published product capabilities while keeping vendor claims separate from verified local deployment.

**Jurisdictions** show what can actually be established about a county, municipality, agency, or statewide system from the available record.

Current provider dossiers include Flock Safety, Motorola Solutions, Axon, Axon Fusus, IDEMIA, and SoundThinking.

Current technology coverage includes automated license-plate readers, facial recognition and Illinois credential photographs, drones/UAS, vehicle/property fingerprinting, human fingerprints/ABIS, body and in-car video, evidence-management systems, and related surveillance infrastructure.

## Illinois coverage

NoRec.US is designed to scale county by county across Illinois. Published northern-Illinois county dossiers currently include:

| County | Local coverage | NoRec route |
| --- | --- | --- |
| Winnebago | Winnebago County Sheriff · Rockford Police | `/county/61101/` |
| Boone | Boone County Sheriff · Belvidere Police | `/county/61008/` |
| DeKalb | DeKalb Police · DeKalb County Sheriff | `/county/60178/` |
| Kane | Kane County Sheriff · municipal systems | `/county/60134/` |
| McHenry | McHenry County Sheriff · Huntley Police | `/county/60098/` |

The numeric county routes use the **ZIP code of the county seat as a short NoRec identifier**. They do not imply that a single ZIP code represents the geographic boundaries of the county.

The statewide browser lives at [`/surveillance/map/`](https://norec.us/surveillance/map/). A county without a published dossier is a coverage gap, not evidence that surveillance technology is absent there.

## Source library and archive

The source library assigns durable IDs to important records so claims can point back to the same evidence across pages.

Where practical, NoRec.US also preserves local copies of public records in `public/archive/`. Archived records may include SHA-256 hashes so a later copy can be compared against the version used for the research.

Primary-source material remains attributable to its issuing agency or original publisher. Archiving a government record does not make it NoRec.US intellectual property.

## Privacy by design

The public site is intentionally simple.

- Static Astro output
- No advertising
- No invasive analytics
- No tracking pixels
- No social-media embeds
- No third-party fonts
- No unnecessary external JavaScript
- Minimal client-side scripting
- Same-origin Content Security Policy
- Mobile-first, accessible layouts
- Human-readable citations and source links

GitHub and Telegram icons used on the site are bundled locally rather than loaded from third-party CDNs.

## Tech stack

- [Astro 5](https://astro.build/)
- TypeScript
- Plain CSS
- Static HTML output
- Apache/cPanel-compatible deployment

No database or application server is required for the current site.

## Local development

Requires Node.js and npm.

```bash
git clone https://github.com/yung-megafone/NoRec-US.git
cd NoRec-US
npm install
npm run dev
```

Astro will print the local development URL in the terminal.

Create a production build with:

```bash
npm run build
```

The deployable site is written to:

```text
dist/
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

NoRec.US builds as a static site. For a normal cPanel/Apache host, upload the **contents of `dist/`** to the site's document root.

`public/.htaccess` is copied into the build and provides the production Apache configuration used by NoRec.US, including canonical HTTPS redirects, custom error pages, security/privacy headers, a same-origin CSP, compression, cache rules, and protection against directory indexing.

A hidden `/tests/` route is included for deployment smoke tests and is intentionally excluded from navigation and the sitemap.

If a release has been copied over an older checkout rather than extracted into a clean directory, Windows users can remove obsolete project files with:

```powershell
.\tools\clean-stale.ps1
```

## Repository structure

```text
.
├── public/
│   ├── archive/          Preserved public records
│   ├── brand/            NoRec.US and locally bundled social assets
│   ├── documents/        Static public documents
│   ├── images/           Site graphics
│   ├── js/               Small same-origin client scripts
│   ├── .htaccess         Apache production configuration
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── components/       Reusable evidence and interface components
│   ├── data/             Structured sources, investigations, and surveillance data
│   ├── layouts/          Shared Astro layouts
│   ├── pages/            File-based public routes
│   └── styles/           Global styles
├── tools/                Maintenance helpers
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## Research principles

NoRec.US aims to be useful to privacy advocates, journalists, researchers, residents, public officials, and anyone else trying to understand a surveillance system without having to start from a press release or a rumor.

A few rules guide the project:

1. **Primary sources first.** Prefer statutes, contracts, policies, audits, public reports, procurement records, meeting packets, and FOIA responses.
2. **Do not turn capability into deployment.** A vendor product page proves what a product can do, not what an Illinois agency has enabled.
3. **Attribute the correct agency.** A camera physically located in a county is not automatically owned by the county sheriff.
4. **Preserve uncertainty.** “Unknown” is a legitimate research result.
5. **Distinguish current from historical.** Past deployments are not silently presented as active systems.
6. **Correct the record.** If better evidence contradicts a page, the page should change.
7. **Acknowledge legitimate uses.** Public-safety value and privacy risk can both be real.
8. **Publish the receipts.** Readers should be able to inspect the evidence behind consequential claims.

## Contributing

NoRec.US is intentionally open to outside help. You do not need to be a professional developer or surveillance researcher.

Useful contributions include:

- primary-source records and FOIA responses;
- corrections or stronger sourcing for existing claims;
- local knowledge that can be turned into a records-based investigation;
- research into Illinois agencies, contracts, policies, and vendors;
- accessibility, responsive-design, and web-development improvements;
- preservation and organization of public records;
- documentation and source normalization.

For factual additions, include the strongest source you have and clearly distinguish what the record **shows** from what you **infer** from it.

GitHub: **https://github.com/yung-megafone/NoRec-US**

Telegram: **https://t.me/NoRec_US**

Pull requests, issues, forks, mirrors, and independent verification are welcome.

## Corrections

If NoRec.US overstates a record, attributes a system to the wrong agency, relies on an obsolete source, or misses relevant context, please open an issue or provide the corrective record.

The goal is not to win an argument by preserving a stronger claim. The goal is to leave the public record clearer than we found it.

## Reuse and mirroring

Forking, mirroring, republishing, and adapting NoRec.US original material is encouraged. A static architecture is intentional: the project should remain easy to preserve and difficult to make dependent on a single platform.

Please preserve source attribution and distinguish NoRec.US original material from third-party documents and design assets.

## License

NoRec.US original code and original project content are released under the [MIT License](./LICENSE), unless otherwise noted.

Third-party material is **not** relicensed merely because it appears in this repository. This includes archived government/vendor documents, trademarks, brand marks, and the site's original template lineage. See [`THIRD_PARTY_NOTICES.md`](./THIRD_PARTY_NOTICES.md) for attribution and licensing notes.

## Design attribution

The site design is adapted from the **black_white** template by [HTML5webtemplates.co.uk](https://www.html5webtemplates.co.uk/). Its attribution is preserved in the public site footer.

The template has been substantially adapted for Astro, evidence-oriented content, responsive layouts, accessibility, strict content-security policy, county/jurisdiction browsing, and NoRec.US branding.

---

<p align="center">
  <strong>NoRec.US · Surveillance, documented.</strong>
</p>
