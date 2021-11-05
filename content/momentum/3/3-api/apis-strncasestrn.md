---
lastUpdated: "03/26/2020"
title: "strncasestrn"
description: "strncasestrn Find a binary substring within a binary string case insensitive const char strncasestrn needle needle len haystack haystack len const char needle int needle len const char haystack int haystack len This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.strncasestrn"></a> 
## Name

strncasestrn — Find a binary substring within a binary string, case insensitive

## Synopsis

`#include "util.h"`

| `const char * **strncasestrn** (` | <var class="pdparam">needle</var>, |   |
|   | <var class="pdparam">needle_len</var>, |   |
|   | <var class="pdparam">haystack</var>, |   |
|   | <var class="pdparam">haystack_len</var>`)`; |   |

`const char * <var class="pdparam">needle</var>`;
`int <var class="pdparam">needle_len</var>`;
`const char * <var class="pdparam">haystack</var>`;
`int <var class="pdparam">haystack_len</var>`;<a name="idp63201232"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Find a binary substring within a binary string, case insensitive.

Search for needle in haystack using a case insensitive comparison. NUL characters in the strings are ignored; only the lengths are respected.

**<a name="idp63204720"></a> Parameters**

<dl class="variablelist">

<dt>needle</dt>

<dd>

the string to find

</dd>

<dt>needle_len</dt>

<dd>

the length of the needle

</dd>

<dt>haystack</dt>

<dd>

the string to search

</dd>

<dt>haystack_len</dt>

<dd>

the length of the haystack

</dd>

</dl>

**<a name="idp63212976"></a> Return Values**

Returns a pointer to the first instance of needle found in haystack.