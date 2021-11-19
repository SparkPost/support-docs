---
lastUpdated: "03/26/2020"
title: "suffix_tree_stringprint_next"
description: "suffix tree stringprint next print suffixes in the tree to a string one at a time int suffix tree stringprint next r t iter string r ec suffix tree t void iter This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.suffix_tree_stringprint_next"></a> 
## Name

suffix_tree_stringprint_next — print suffixes in the tree to a string, one at a time

## Synopsis

`#include "misc/suffix_tree.h"`

| `int **suffix_tree_stringprint_next** (` | <var class="pdparam">r</var>, |   |
|   | <var class="pdparam">t</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`string * <var class="pdparam">r</var>`;
`ec_suffix_tree * <var class="pdparam">t</var>`;
`void ** <var class="pdparam">iter</var>`;<a name="idp63274784"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

print suffixes in the tree to a string, one at a time

```
void *iter = NULL;
 string r;
 STRING_INIT(r, 80);
 while (suffix_tree_stringprint_next(&r, t, &iter)) {
   // do stuff
   r.len = 0;
 }
```
**<a name="idp63278960"></a> Return Values**

1 if a suffix was printed, 0 if there were no more suffixes