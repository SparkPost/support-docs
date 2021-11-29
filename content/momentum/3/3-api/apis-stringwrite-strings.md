---
lastUpdated: "03/26/2020"
title: "stringwrite_strings"
description: "stringwrite strings write 1 or more NUL terminated C strings to the provided string INLINE ssize t stringwrite strings str nstr string str int nstr This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.stringwrite_strings"></a> 
## Name

stringwrite_strings — write 1 or more NUL-terminated C-strings to the provided string

## Synopsis

`#include "misc/ec_string.h"`

| `INLINE ssize_t **stringwrite_strings** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">nstr</var>, |   |
|   | `)`; |   |

`string * <var class="pdparam">str</var>`;
`int <var class="pdparam">nstr</var>`;
`...`;<a name="idp63140352"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

write 1 or more NUL-terminated C-strings to the provided string.

This is tuned to avoid strlen; STR is updated as the input strings are walked, and the function falls back to stringwrite2 in the case where it would overflow the existing string buffer memory.

**<a name="idp63143904"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

the string to append to

</dd>

<dt>nstr</dt>

<dd>

the number of C-strings that follow

</dd>

</dl>

The rest of the parameters are NSTR NUL-terminated C-strings. A given C-string may be NUL; it will simply be skipped.