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

## Geographic coverage

NoRec.US is currently **Illinois-focused**. The public information architecture follows a state → county → municipality hierarchy and uses full state names in routes so additional states can be added later without restructuring the project.

```text
/illinois/
/illinois/counties/boone/
/illinois/counties/boone/cities/belvidere/
```

The Illinois browser contains all 102 counties. A county or municipality may have a page before surveillance research has been contributed. **UNRESEARCHED means unknown / not yet reviewed; it does not mean surveillance-free.**

Current researched county coverage includes Boone, Winnebago, Ogle, Lee, Kendall, DeKalb, Kane, and McHenry, with municipal dossiers separated from county-level findings where the evidence belongs to a city or village. Municipality scaffolding is being expanded county by county. Boone, Winnebago, Ogle, Lee, and Kendall now have county-level municipality directories; later batches continue through Illinois.

ZIP codes are **not** jurisdiction identifiers in the current data model. Earlier NoRec builds used county-seat ZIP codes in routes such as `/county/61008/`; those routes are legacy aliases/redirects only and must not be used for new content.

### Counties and municipalities

Municipal records are organized beneath counties for contributor-friendly navigation:

```text
src/
├── data/
│   └── illinois/
│       └── counties/
└── pages/
    └── illinois/
        └── counties/
            └── boone/
                ├── index.astro
                └── cities/
                    ├── belvidere/
                    ├── caledonia/
                    ├── capron/
                    ├── cherry-valley/
                    ├── loves-park/
                    ├── poplar-grove/
                    └── timberlane/
```

Some Illinois municipalities cross county lines. Those relationships must be represented explicitly rather than treating a county boundary as a city boundary or maintaining conflicting copies of the same research. County maps may show the portion of a cross-county municipality that intersects the selected county.

### County maps

County pages are being upgraded with privacy-friendly vector jurisdiction maps using government boundary data. Municipal polygons should be clickable and lead to the appropriate municipality dossier. The maps do not require commercial map tiles or third-party tracking scripts.

Structured jurisdiction metadata lives under `src/data/illinois/`. Shared types in `jurisdiction.ts` distinguish research status, government form, and surveillance-finding status; county-specific data files enumerate municipalities and reusable findings rather than forcing factual content to live only inside Astro templates.

### Coverage states

Geographic coverage and surveillance findings are separate concepts. A jurisdiction's research state describes **how much NoRec has reviewed**, while technology findings describe **what the evidence establishes**. In particular, lack of contributed records must never be rendered as evidence that a jurisdiction does not use surveillance technology.

## Source library and archive

The source library assigns durable IDs to important records so claims can point back to the same evidence across pages.

Where practical, NoRec.US also preserves local copies of public records in `public/archive/`. Archived records may include SHA-256 hashes so a later copy can be compared against the version used for the research.

Primary-source material remains attributable to its issuing agency or original publisher. Archiving a government record does not make it NoRec.US intellectual property.

### Jurisdiction public records / FOIA releases

County and municipality dossiers should include a **Public Records / FOIA Releases** section when relevant records are available. Prefer the issuing agency's official URL and, where practical, preserve a NoRec-hosted archival copy in `public/archive/`. Local copies should retain attribution to the issuing agency and may include a hash for integrity checking.

An empty records section means NoRec has not archived a responsive release for that jurisdiction yet. It does **not** establish that responsive records do not exist.

For mapped systems such as ALPRs, distinguish different kinds of verification. An agency release may establish **ownership, inventory, or planned deployment** even when NoRec has not physically verified every installation against the released coordinates. County inventories must not be silently rolled into municipal statistics, and vice versa.

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
│   ├── data/             Structured sources, investigations, jurisdictions, and surveillance data
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


### County batch status

The Illinois rollout is being expanded county-by-county. Boone, Winnebago, Ogle, Lee, and Kendall now contain municipality scaffolding and GIS-ready county drill-downs. Published surveillance findings remain evidence-driven: some county or municipal pages contain documented systems, while other municipality pages remain explicit research placeholders.

Winnebago primary-source mirrors supplied to NoRec are stored under `public/archive/winnebago/` with a `MANIFEST.sha256`. Public-record cards should link both the authoritative government URL and the local `/archive/...` copy when both are available. Local mirrors are archival copies, not substitutes for checking the current official source.


### Lee County batch

Lee County now includes a complete municipal scaffold, GIS-ready county map, official FOIA/public-record links, documented Sheriff Flock LPR procurement/use, and the Sheriff UAS policy. Dixon has a separate municipal dossier so county-owned systems are not counted as city-owned equipment. Cross-county entries (Rochelle and the Village of Lee) are linked without duplicating canonical municipal research.


### Kendall County batch

Kendall County includes a 15-municipality/municipal-portion directory, a GIS-driven county map, regional KenCom/Flock research, Sheriff UAS-policy references, and structured municipal dossiers for Oswego, Plano, and Yorkville. Cross-county municipalities remain explicitly marked so geographic presence is not confused with county ownership.


### DuPage County batch

DuPage is scaffolded with 39 municipal portions. Primary-record dossiers currently include Wheaton, Naperville, and Elmhurst; remaining municipalities are explicitly unresearched stubs pending records. County-campus license-plate readers are kept separate from municipal and Sheriff inventories.


### McHenry County audit/infill

McHenry County is scaffolded from the current county yearbook with 30 municipal entries/portions. Huntley, Crystal Lake, and Woodstock currently have documented municipal surveillance findings. Huntley historical inventory figures are explicitly date-scoped rather than presented as verified 2026 counts. County Sheriff findings remain separate from municipal statistics.


### Lake County batch

Lake County is scaffolded from the County's current Cities, Townships & Villages directory with all 52 incorporated cities/villages represented. Primary-record dossiers currently include Antioch, Gurnee, Lake Zurich, Libertyville, Mundelein, Vernon Hills, and Waukegan. County Sheriff drone policy is kept at the county level. Historical contract/install counts are date-scoped rather than silently treated as current inventory.


### Kane County batch

Kane County is scaffolded from the County's current communities directory with all 30 municipalities/municipal portions represented. County Sheriff findings include a documented 23-camera Flock grant deployment baseline and Getac body-worn/in-car video records. St. Charles and Elgin have primary-record municipal findings. Huntley redirects to the existing McHenry-canonical dossier to avoid maintaining two factual copies of the same cross-county municipality.


### Will County batch

Will County is scaffolded with 36 incorporated municipal entries/portions. Initial primary-record research is organized for Joliet, Plainfield, and Romeoville, with county Sheriff findings kept separate. Aurora and Naperville use cross-county canonical redirects rather than duplicated municipal datasets. Unresearched municipalities explicitly remain unknown rather than being labeled surveillance-free.
