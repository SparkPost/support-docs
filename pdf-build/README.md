# Momentum manual PDF generation

Branded PDF editions of the on-premises Momentum manuals (installation,
upgrade, release notes, …), generated from the **same Markdown** that powers
the online [Online Manuals](../content/momentum/manuals/) section.

```
content/momentum/manuals/*.md   ──► online pages (Next.js site)
              │
              └────────────────────► PDF  (Pandoc + Typst, this directory)
```

One manual = one Markdown file = one online page = one PDF. There is a single
source of truth; the PDF is a build artifact.

## Toolchain

Pandoc (≥ 3.x) and the Typst CLI. These are not npm packages — install once per
machine / CI image:

```sh
brew install pandoc typst        # macOS
# Linux: install pandoc >= 3.x and the `typst` CLI from your package manager
```

## Building

```sh
cd pdf-build
make            # build every manual into build/
make list       # show what would be built
make build/installation-manual.pdf   # build a single manual
make clean      # remove generated PDFs
```

Generated PDFs land in `build/` (git-ignored).

The build is incremental: `make` rebuilds a manual when its `.md` changes, and
rebuilds **all** manuals when a shared input changes (the template,
`metadata.yaml`, a logo/font in `assets/`, or this `Makefile`). You only need
`make clean` to force a rebuild of unchanged content — e.g. after upgrading
`pandoc` or `typst`.

## Layout

| Path | Purpose |
| --- | --- |
| `../content/momentum/manuals/*.md` | Manual sources (also served online) |
| `templates/bird-manual.typ` | Pandoc→Typst template with the Bird-branded cover, header/footer, and styling |
| `templates/metadata.yaml` | Brand/layout defaults shared by every manual |
| `assets/` | Logo and (optional) brand fonts |
| `build/` | Generated PDFs (artifacts) |

### Metadata

Brand-wide settings (copyright, confidential notice, paper size, logo) live in
`templates/metadata.yaml`. Per-manual values come from each Markdown file's YAML
frontmatter and override the shared defaults:

```yaml
---
# Used by the website:
title: "Installation Manual"
description: "…"
lastUpdated: "06/05/2026"
# Used by the PDF cover page (ignored by the website):
subtitle: "Momentum"
version: "5.2.1"
date: "June 2026"
---
```

## Adding a manual (conversion workflow)

1. Convert the source (prefer **DOCX** over PDF — it keeps headings, lists,
   tables, and images) with `pandoc`, clean it up, and save it as
   `content/momentum/manuals/<name>.md` with the frontmatter above. Put
   extracted images in `content/momentum/manuals/images/` and reference them as
   `images/<file>` (so they work both online and in the PDF).
   - **Numbered headings**: number headings hierarchically in the text itself
     (`# 1. Introduction`, `## 2.1. …`, `### 2.3.1. …`) so the numbers show
     identically online and in the PDF.
   - **Code blocks**: don't reproduce the source's box colors. Use standard
     fenced blocks tagged by language (` ```bash `, ` ```c `, ` ```python `, …)
     for code/commands, and a plain fenced block (no language) for config-file
     contents and console output — let the renderer handle highlighting.
   - **Notes**: a standalone Markdown blockquote (`> **Note:** …`) becomes a
     branded callout box.
   - **Tables**: a table whose natural width exceeds the portrait text area is
     automatically placed on its own **landscape** page; narrower tables stay
     inline in portrait. For this to work a wide table must be **top-level** —
     not nested inside a list item or blockquote (Typst cannot start a new page
     inside a container, and the build will error). If a wide table belongs
     under a step, lift it out to its own paragraph.
2. Add the page to the menu: a sub-item under the **Online manuals** node in
   `content/momentum/navigation.yml`, and a link in
   `content/momentum/manuals/index.md`.
3. `make build/<name>.pdf` and review the output.

## Branding

- **Font**: Poppins, vendored under `assets/fonts/` (OFL) and exposed to Typst
  via `TYPST_FONT_PATHS` in the `Makefile` — reproducible with no system font
  install. Code spans use Typst's bundled DejaVu Sans Mono.
- **Colors** (in `templates/bird-manual.typ`): near-black `#0a0a0a` for
  headings/cover, Bird blue `#0057ff` for links and sub-headings — taken from
  the brand logo SVGs.
- **Cover**: full-bleed dark with the white-on-black stacked logo reversed out.
  Body pages are white with the black horizontal logo in the running header.
- **Logos** in `assets/`: `bird-logo-stacked{,-dark}.svg` and
  `bird-logo-horizontal{,-dark}.svg` (light = black-on-white, dark =
  white-on-black). `metadata.yaml` selects which variant each placement uses.
