# Image redactor upstream provenance

NoRec.US's image redactor is adapted from **creativar/blurrr**.

- Upstream repository: https://github.com/creativar/blurrr
- Upstream branch reviewed: `main`
- Upstream commit: `e5f636a14cdc98de107a81ff31b8569decf8d396`
- Upstream license declaration: ISC
- Upstream application stack at that revision: React/Vite/Canvas API, with optional browser face detection and Tesseract-based email detection.

NoRec's integrated version intentionally diverges from upstream in these areas:

- No analytics or image-save telemetry.
- No automatic detector runs on image load.
- Detector choices reset to OFF on every page load.
- Detection produces reviewable suggestions before edits are applied.
- No third-party model/CDN fallback.
- NoRec styling/navigation and a common lazy detector registry.

The integrated copy can be updated from a separately maintained NoRec fork in the future; keep this file updated when rebasing or importing upstream changes.
