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
#   make build/installation-manual.pdf   # build one manual
#   make clean      # remove generated PDFs

PANDOC      ?= pandoc
SRC_DIR     := ../content/momentum/manuals
TEMPLATE    := templates/bird-manual.typ
SHARED_META := templates/metadata.yaml
BUILD_DIR   := build
FONT_DIR    := assets/fonts

# Make the vendored Poppins font visible to the Typst PDF engine, so builds are
# reproducible without any system font install.
export TYPST_FONT_PATHS := $(FONT_DIR)

# Every top-level Markdown file is a manual, except the section landing page.
SOURCES := $(filter-out $(SRC_DIR)/index.md,$(wildcard $(SRC_DIR)/*.md))
PDFS    := $(patsubst $(SRC_DIR)/%.md,$(BUILD_DIR)/%.pdf,$(SOURCES))

.PHONY: all list clean
all: $(PDFS)

$(BUILD_DIR)/%.pdf: $(SRC_DIR)/%.md $(TEMPLATE) $(SHARED_META) | $(BUILD_DIR)
	$(PANDOC) "$<" \
	  --from=markdown \
	  --pdf-engine=typst \
	  --template=$(TEMPLATE) \
	  --metadata-file=$(SHARED_META) \
	  --toc --toc-depth=3 \
	  --resource-path=".:$(SRC_DIR)" \
	  --output="$@"
	@echo "Built $@"

$(BUILD_DIR):
	@mkdir -p $(BUILD_DIR)

list:
	@echo "Sources:"; for s in $(SOURCES); do echo "  $$s"; done
	@echo "PDFs:";    for p in $(PDFS);    do echo "  $$p"; done

clean:
	rm -f $(BUILD_DIR)/*.pdf
