---
lastUpdated: "03/26/2020"
title: "strnchrn"
description: "strnchrn Searches a string for the first occurence of any of a set of characters char strnchrn str nstr chars nchars const char str int nstr const char chars int nchars Searches a string for the first occurence of any of a set of characters Searches nstr chars starting at..."
---

<a name="apis.strnchrn"></a> 
## Name

strnchrn — Searches a string for the first occurence of any of a set of characters

## Synopsis

`#include "util.h"`

| `char * **strnchrn** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">nstr</var>, |   |
|   | <var class="pdparam">chars</var>, |   |
|   | <var class="pdparam">nchars</var>`)`; |   |

`const char * <var class="pdparam">str</var>`;
`int <var class="pdparam">nstr</var>`;
`const char * <var class="pdparam">chars</var>`;
`int <var class="pdparam">nchars</var>`;<a name="idp63224352"></a> 
## Description

Searches a string for the first occurence of any of a set of characters

Searches `nstr` chars starting at str for any of the `nchars` characters that are in `chars`. It **will** go past a *NUL* character in *str*.

**<a name="idp63229072"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

The string to search.

</dd>

<dt>nstr</dt>

<dd>

The number of characters to search.

</dd>

<dt>chars</dt>

<dd>

The characters to search for.

</dd>

<dt>nchars</dt>

<dd>

The number of characters in *chars*.

</dd>

</dl>

**<a name="idp63237776"></a> Return Values**

Returns a pointer to the first matching character or NULL if there is no match.

**<a name="idp63238752"></a> Threading**

It is legal to call this function in any thread.

<a name="idp63239856"></a> 
## See Also

[string_init_type](/momentum/3/3-api/apis-string-init-type)