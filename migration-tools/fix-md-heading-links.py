#!/usr/bin/env python3
import argparse, sys, re

# this is a heuristic based on what we see in output files - not definitive
def markdown_title_name(t):
    # Strip leading and trailing spaces, use lowercase
    title = t.lower().strip()
    # change non-alphanumeric to dash -, unless we already have a dash
    for i in range(0, len(title)):
        if not title[i].isalnum():
            title = title[0:i] + '-' + title[i+1:]
    # replace any repeated dashes
    while '--' in title:
        title = title.replace('--', '-')
    # remove any leading & trailing dashes
    title = title.strip('-')
    return title


class markup_doc:
    def __init__(self, f):
        self.text = f.readlines() # Store as separate lines, for ease of processing
        self.labels = {}

    def scan_labels(self):
        for i in range(0, len(self.text)):
            line = self.text[i]
            find_anchor = r'(<a.*>.*</a>)'
            # re.I= case-insensitive search
            anchor = re.search(find_anchor, line, flags=re.I)
            if anchor:
                # Assume at most one anchor per line. Keep the content before and after.
                before = line[0:anchor.start()]
                after = line[anchor.end():]
                find_name = r'name=\"(.*)\"'
                name = re.search(find_name, anchor[0])
                if name:
                    self.labels[name[1]] = markdown_title_name(after)
                    # Remove the anchor from the markdown text. Trim any double space that's left
                    if before.endswith(' ') and after.startswith(' '):
                        after = after.lstrip()
                    self.text[i] = before + after
        return

    def replace_labels(self):
        for i in range(0, len(self.text)):
            line = self.text[i]
            for k,v in self.labels.items():
                # Find intra-document link references such as (#ref)
                find_link_ref = r'\#(' + k + ')'
                doc_link = re.search(find_link_ref, line, flags=re.I)
                if doc_link:
                    before = line[0:doc_link.start()]
                    after = line[doc_link.end():]
                    self.text[i] = before + '#' + v + after
        return

    def as_text(self):
        return ''.join(self.text)

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description='Find and replace <a name="xyz"> type links with inter document heading links')
    parser.add_argument('file', type=str, nargs='?', default=None, help='filename to read. If file is absent, reads from the standard input (acts as a filter).')
    args = parser.parse_args()

    if args.file:
        with open(args.file) as f:
            d = markup_doc(f)
    else:
        d = markup_doc(sys.stdin)
    d.scan_labels()
    d.replace_labels()
    print(d.as_text())
