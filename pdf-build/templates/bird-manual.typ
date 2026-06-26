// ============================================================================
// Bird / Momentum branded Pandoc -> Typst template.
//
// This is Pandoc's default Typst template (pandoc -D typst) with ONE change:
// the built-in `conf` import is replaced by the inline, Bird-branded `conf`
// defined below. Keeping the surrounding template byte-for-byte identical to
// Pandoc's default means all of Pandoc's body-rendering machinery (tables,
// term lists, syntax highlighting, figures, bibliography) keeps working across
// Pandoc upgrades -- only the cosmetic `conf` is ours.
//
// To re-sync after a Pandoc upgrade: run `pandoc -D typst`, diff against this
// file, and re-apply the two marked edits (the `#let conf` block, and the
// extra title-page arguments in the `#show: doc => conf(...)` call).
//
// Brand tokens (colors, fonts, logo) live at the top of `conf` and are marked
// `TODO`. Confirm the official Bird values before the first customer release.
// ============================================================================

#let horizontalrule = line(start: (25%,0%), end: (75%,0%))

#show terms.item: it => block(breakable: false)[
  #text(weight: "bold")[#it.term]
  #block(inset: (left: 1.5em, top: -0.4em))[#it.description]
]

#set table(
  inset: 6pt,
  stroke: none
)

#show figure.where(
  kind: table
): set figure.caption(position: $if(table-caption-position)$$table-caption-position$$else$top$endif$)

#show figure.where(
  kind: image
): set figure.caption(position: $if(figure-caption-position)$$figure-caption-position$$else$bottom$endif$)

$if(highlighting-definitions)$
// syntax highlighting functions from skylighting:
$highlighting-definitions$

$endif$
// ---- BIRD EDIT 1/2: inline branded `conf` (replaces pandoc's import) --------
#let conf(
  title: none,
  subtitle: none,
  version: none,
  authors: (),
  keywords: (),
  date: none,
  copyright: none,
  confidential: none,
  logo: none,
  header-logo: none,
  lang: "en",
  region: "US",
  abstract-title: none,
  abstract: none,
  thanks: none,
  margin: (x: 2.5cm, y: 2.5cm),
  paper: "a4",
  font: ("Poppins",),
  fontsize: 10pt,
  mathfont: none,
  codefont: ("DejaVu Sans Mono",),
  linestretch: 1.2,
  sectionnumbering: none,
  pagenumbering: "1",
  linkcolor: none,
  citecolor: none,
  filecolor: none,
  cols: 1,
  doc,
) = {
  // ---- Brand tokens (from the Bird logo SVGs) ------------------------------
  let brand-color  = rgb("#0a0a0a")  // near-black: headings / titles
  let accent-color = rgb("#0057ff")  // Bird blue: links / sub-headings
  let dark-color   = rgb("#0a0a0a")  // cover background (matches dark logo bg)

  set document(
    title: if title != none { title } else { "" },
    author: authors.map(a => if type(a) == dictionary { a.name } else { a }),
  )
  set text(font: font, size: fontsize, lang: lang, region: region)
  set par(leading: 0.65em * linestretch, justify: true)
  set heading(numbering: sectionnumbering)

  // Heading styles. Each level-1 (main) section starts on a new page; the
  // weak break is skipped when the page is already empty, so no blank pages.
  show heading.where(level: 1): it => {
    pagebreak(weak: true)
    block(below: 0.8em)[
      #set text(fill: brand-color, weight: "bold", size: 1.5em)
      #it
    ]
  }
  show heading.where(level: 2): set text(fill: accent-color, weight: "bold")

  // Links + monospace code
  show link: set text(fill: accent-color)
  show raw: set text(font: codefont)
  show raw.where(block: true): it => block(
    fill: luma(245), inset: 8pt, radius: 3pt, width: 100%, breakable: true,
  )[#it]

  // Notes/callouts: Markdown blockquotes become a branded box -- light blue
  // tint, brand-blue left accent bar, blue label (the leading **Note:**), and
  // italic body to set them apart from the running text.
  show quote.where(block: true): it => block(
    width: 100%,
    fill: rgb("#eef3ff"),
    inset: (x: 12pt, y: 9pt),
    radius: 3pt,
    stroke: (left: 3pt + accent-color),
  )[
    #set text(style: "italic")
    #show strong: set text(fill: accent-color, style: "normal")
    #it.body
  ]

  // Let tables (which Pandoc wraps in a figure) break across pages instead of
  // overflowing when they are taller than one page.
  show figure: set block(breakable: true)

  // Wide tables: if a table's natural (unwrapped) width exceeds the portrait
  // text area, place it on its own landscape page; content flows back to
  // portrait afterwards. Narrower tables stay inline.
  let margin-x = if type(margin) == dictionary and "x" in margin { margin.x } else { 2.5cm }
  let portrait-text-width = 21cm - 2 * margin-x  // assumes A4 width (21cm)
  show figure.where(kind: table): it => context {
    if measure(it).width > portrait-text-width {
      page(flipped: true, it)
    } else {
      it
    }
  }

  // ---- Cover page: full-bleed dark, reversed-out logo ----------------------
  // Provide the dark (white-on-black) stacked lockup as `logo` so it blends
  // into the dark background.
  page(
    paper: paper,
    margin: margin,
    fill: dark-color,
    header: none, footer: none, numbering: none,
  )[
    #set align(center)
    #set text(fill: white)
    #v(1fr)
    #if logo != none [ #image(logo, width: 6cm) #v(1.5cm) ]
    #if subtitle != none [
      // Product name is the subject of the manual -> headline.
      #text(size: 40pt, weight: "bold", tracking: 0.5pt)[#subtitle]
      #v(0.45cm)
      #text(size: 19pt, fill: accent-color.lighten(35%))[#title]
    ] else [
      #text(size: 30pt, weight: "bold")[#title]
    ]
    #if version != none [ #v(0.35cm) #text(size: 13pt, fill: luma(210))[Version #version] ]
    #v(1fr)
    #if date != none [ #text(size: 11pt, fill: luma(210))[#date] #linebreak() ]
    #if confidential != none [ #text(size: 9pt, fill: luma(160))[#confidential] #linebreak() ]
    #if copyright != none [ #text(size: 9pt, fill: luma(160))[#copyright] ]
  ]

  // ---- Body pages: running header + footer, page numbers reset to 1 --------
  // Header carries the small horizontal Bird lockup (if provided), else text.
  set page(
    paper: paper,
    margin: margin,
    numbering: pagenumbering,
    header: context {
      set text(size: 8pt, fill: luma(130))
      let info = {
        if title != none [ #title ]
        if title != none and version != none [ #h(0.5em)·#h(0.5em) ]
        if version != none [ #version ]
      }
      // Logo (left) and title·version (right) share one row, bottom-aligned.
      if header-logo != none {
        grid(
          columns: (auto, 1fr),
          align: (left + bottom, right + bottom),
          image(header-logo, height: 1.8em),
          info,
        )
      } else {
        align(right, info)
      }
      v(0.15em)
      line(length: 100%, stroke: 0.5pt + luma(210))
    },
    footer: context {
      set text(size: 8pt, fill: luma(130))
      if confidential != none [ #confidential ]
      h(1fr)
      counter(page).display(pagenumbering)
    },
  )
  counter(page).update(1)

  if abstract != none {
    block(inset: (x: 1.5em), above: 1em, below: 1.5em)[
      #if abstract-title != none [ #text(weight: "bold")[#abstract-title] #linebreak() ]
      #abstract
    ]
  }

  set par(first-line-indent: 0pt)
  if cols > 1 { columns(cols, doc) } else { doc }
}
// ---- end BIRD EDIT 1/2 ------------------------------------------------------

$if(smart)$
$else$
#set smartquote(enabled: false)

$endif$
$for(header-includes)$
$header-includes$

$endfor$
#show: doc => conf(
$if(title)$
  title: [$title$],
$endif$
$if(subtitle)$
  subtitle: [$subtitle$],
$endif$
$-- ---- BIRD EDIT 2/2: extra title-page arguments ----
$if(version)$
  version: [$version$],
$endif$
$if(copyright)$
  copyright: [$copyright$],
$endif$
$if(confidential)$
  confidential: [$confidential$],
$endif$
$if(logo)$
  logo: "$logo$",
$endif$
$if(header-logo)$
  header-logo: "$header-logo$",
$endif$
$-- ---- end BIRD EDIT 2/2 ----
$if(author)$
  authors: (
$for(author)$
$if(author.name)$
    ( name: [$author.name$],
      affiliation: [$author.affiliation$],
      email: [$author.email$] ),
$else$
    ( name: [$author$],
      affiliation: "",
      email: "" ),
$endif$
$endfor$
    ),
$endif$
$if(keywords)$
  keywords: ($for(keywords)$$keywords$$sep$,$endfor$),
$endif$
$if(date)$
  date: [$date$],
$endif$
$if(lang)$
  lang: "$lang$",
$endif$
$if(region)$
  region: "$region$",
$endif$
$if(abstract-title)$
  abstract-title: [$abstract-title$],
$endif$
$if(abstract)$
  abstract: [$abstract$],
$endif$
$if(thanks)$
  thanks: [$thanks$],
$endif$
$if(margin)$
  margin: ($for(margin/pairs)$$margin.key$: $margin.value$,$endfor$),
$endif$
$if(papersize)$
  paper: "$papersize$",
$endif$
$if(mainfont)$
  font: ("$mainfont$",),
$endif$
$if(fontsize)$
  fontsize: $fontsize$,
$endif$
$if(mathfont)$
  mathfont: ($for(mathfont)$"$mathfont$",$endfor$),
$endif$
$if(codefont)$
  codefont: ($for(codefont)$"$codefont$",$endfor$),
$endif$
$if(linestretch)$
  linestretch: $linestretch$,
$endif$
$if(section-numbering)$
  sectionnumbering: "$section-numbering$",
$endif$
  pagenumbering: $if(page-numbering)$"$page-numbering$"$else$"1"$endif$,
$if(linkcolor)$
  linkcolor: [$linkcolor$],
$endif$
$if(citecolor)$
  citecolor: [$citecolor$],
$endif$
$if(filecolor)$
  filecolor: [$filecolor$],
$endif$
  cols: $if(columns)$$columns$$else$1$endif$,
  doc,
)

$for(include-before)$
$include-before$

$endfor$
$if(toc)$
#outline(
  title: $if(toc-title)$[$toc-title$]$else$auto$endif$,
  depth: $toc-depth$
);
$endif$

$body$

$if(citations)$
$for(nocite-ids)$
#cite(label("${it}"), form: none)
$endfor$
$if(csl)$

#set bibliography(style: "$csl$")
$elseif(bibliographystyle)$

#set bibliography(style: "$bibliographystyle$")
$endif$
$if(bibliography)$

#bibliography(($for(bibliography)$"$bibliography$"$sep$,$endfor$)$if(full-bibliography)$, full: true$endif$)
$endif$
$endif$
$for(include-after)$

$include-after$
$endfor$
