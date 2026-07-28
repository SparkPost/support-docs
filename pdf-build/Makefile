# Generate branded PDF manuals from the Markdown sources that also power the
# online "Online manuals" section (content/momentum/manuals/).
#
# Single source of truth: each manual is ONE Markdown file, rendered both
# online (by the Next.js site) and as a PDF (by Pandoc + Typst, here).
#
# Requirements (not npm packages — install once per machine / CI image):
#   brew install pandoc typst        # macOS
#   (Linux: install pandoc >= 3.x and the typst CLI)
#
# Usage (run from this directory):
#   make            # build a PDF for every manual
#   make list       # show what would be built
#   make build/Momentum_5.3_Installation.pdf   # build one manual
#   make clean      # remove generated PDFs

PANDOC      ?= pandoc
SRC_DIR     := ../content/momentum/manuals
# PDF-only manuals: Markdown sources here get a PDF like any other manual but
# are NOT rendered online (the site only serves pages under content/).
PRIV_DIR    := private
TEMPLATE    := templates/bird-manual.typ
SHARED_META := templates/metadata.yaml
BUILD_DIR   := build
FONT_DIR    := assets/fonts

# Make the vendored Poppins font visible to the Typst PDF engine, so builds are
# reproducible without any system font install.
export TYPST_FONT_PATHS := $(FONT_DIR)

# Every top-level Markdown file is a manual, except the section landing page.
SOURCES      := $(filter-out $(SRC_DIR)/index.md,$(wildcard $(SRC_DIR)/*.md))
PRIV_SOURCES := $(wildcard $(PRIV_DIR)/*.md)

# ---------------------------------------------------------------------------
# PDF naming: Momentum_<version>_<Suffix>.pdf
#
# The 5.3 manuals were originally produced from DOCX exports named
# Momentum_5.3_<Suffix>.docx, and the customer-facing PDFs must keep following
# that pattern. From 5.4 on there are no DOCX sources anymore — the PDFs are
# generated straight from edits to the .md files — so this table is the
# durable record of each manual's historical name suffix. The <version> part
# is read from each manual's own `version:` frontmatter, so bumping the
# version in the .md automatically renames the PDF for the next release.
#
# When adding a new manual, add its slug -> suffix entry here; a slug with no
# entry (or no version) falls back to <slug>.pdf.
PDF_SUFFIX_installation-manual              := Installation
PDF_SUFFIX_upgrade-manual                   := Upgrade
PDF_SUFFIX_enabling-apis-message-generation := Enabling_TransAPI-MsgGen
PDF_SUFFIX_enabling-webhooks                := Enabling_Webhooks
PDF_SUFFIX_upgrading-webhooks               := Upgrading_Webhooks
PDF_SUFFIX_release-notes                    := Release_Notes
PDF_SUFFIX_rocky9-installation-manual       := Rocky9_Installation

# $(call md_version,<file>): the version: "X.Y" value from the frontmatter.
md_version = $(shell sed -n 's/^version:[[:space:]]*"\([^"]*\)".*/\1/p' $(1) | head -1)
# $(call pdf_name,<slug>,<version>): the PDF basename (no extension).
pdf_name   = $(if $(and $(PDF_SUFFIX_$(1)),$(2)),Momentum_$(2)_$(PDF_SUFFIX_$(1)),$(1))
# $(call pdf_for,<file>): full PDF path for a manual source file.
pdf_for    = $(BUILD_DIR)/$(call pdf_name,$(basename $(notdir $(1))),$(call md_version,$(1))).pdf
# ---------------------------------------------------------------------------

PDFS := $(foreach src,$(SOURCES) $(PRIV_SOURCES),$(call pdf_for,$(src)))

# Shared inputs every PDF depends on. Listing the logos, fonts, and the Makefile
# itself means `make` rebuilds when any of them change -- no manual `clean`.
ASSETS  := $(wildcard assets/*.svg) $(wildcard $(FONT_DIR)/*.ttf)
DEPS    := $(TEMPLATE) $(SHARED_META) $(ASSETS) $(MAKEFILE_LIST)

.PHONY: all list clean
all: $(PDFS)

# Intermediate Typst file for the manual being built (named after the .md
# slug, not the PDF, so it stays predictable). Expanded per-recipe via $<.
TYP = $(basename $(notdir $<)).typ

# Two-step build: Pandoc -> Typst source, then compile with the typst CLI.
# The intermediate .typ is emitted here in pdf-build/ (not build/) so the
# template's relative `assets/...` logo paths resolve. It is removed after.
#
# `-tex_math_dollars`: disable $...$ math parsing so literal shell/config vars
# like $NGINX_ROOT or $PATH in prose and tables are never treated as math.
# Canned recipe shared by every manual rule generated below.
define BUILD_PDF
$(PANDOC) "$<" \
  --from=markdown-tex_math_dollars \
  --to=typst \
  --template=$(TEMPLATE) \
  --metadata-file=$(SHARED_META) \
  --toc --toc-depth=3 \
  --resource-path=".:$(dir $<)" \
  --output="$(TYP)"
@# Pandoc gives tables fixed percentage column widths (always full-width);
@# rewrite them to auto so the template can detect a table's natural width
@# and rotate genuinely wide ones onto their own landscape page.
@# Use a temp file + mv (not `sed -i`, whose syntax differs on BSD vs GNU).
sed -E '/^[[:space:]]*columns: \(/ s/[0-9.]+%/auto/g' "$(TYP)" > "$(TYP).cols" && mv "$(TYP).cols" "$(TYP)"
typst compile --font-path "$(FONT_DIR)" "$(TYP)" "$@"
@rm -f "$(TYP)"
@echo "Built $@"
endef

# The PDF basename is unrelated to the .md basename, so a pattern rule cannot
# express the mapping — generate one explicit rule per manual instead.
define MANUAL_RULE
$(call pdf_for,$(1)): $(1) $(DEPS) | $(BUILD_DIR)
	$$(BUILD_PDF)
endef
$(foreach src,$(SOURCES) $(PRIV_SOURCES),$(eval $(call MANUAL_RULE,$(src))))

$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

list:
	@echo "Sources:"; for s in $(SOURCES) $(PRIV_SOURCES); do echo "  $$s"; done
	@echo "PDFs:";    for p in $(PDFS);    do echo "  $$p"; done

clean:
	rm -f $(BUILD_DIR)/*.pdf
