# Brand assets for PDF generation

## Logos

Four Bird lockups, referenced from
[`../templates/metadata.yaml`](../templates/metadata.yaml):

| File | Lockup | Colors | Used for |
| --- | --- | --- | --- |
| `bird-logo-stacked.svg` | stacked | black-on-white | (light cover, if used) |
| `bird-logo-stacked-dark.svg` | stacked | white-on-black | **cover page** (dark) |
| `bird-logo-horizontal.svg` | horizontal | black-on-white | official full-clear-space asset |
| `bird-logo-horizontal-header.svg` | horizontal | black, transparent | **running header** — viewBox cropped to content so it's legible when sized small |
| `bird-logo-horizontal-dark.svg` | horizontal | white-on-black | dark header, if ever used |

SVG is used for crisp print at any size. To change which variant a placement
uses, edit `logo` / `header-logo` in `metadata.yaml`.

## Fonts

`fonts/` holds **Poppins** (TTF, OFL — license in `fonts/OFL.txt`), vendored so
builds are reproducible without a system font install. The `Makefile` exposes
this directory to Typst via `TYPST_FONT_PATHS`. To use a different brand cut of
Poppins (extra weights, variable font, etc.), drop the TTFs here and remove the
duplicates to avoid family clashes.
