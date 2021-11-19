---
lastUpdated: "03/26/2020"
title: "strnstrn"
description: "strnstrn Find a binary substring within a binary string const char strnstrn needle needle len haystack haystack len const char needle int needle len const char haystack int haystack len Find a binary substring within a binary string Search for needle in haystack NUL characters in the strings are ignored..."
---

<a name="apis.strnstrn"></a> 
## Name

strnstrn — Find a binary substring within a binary string

## Synopsis

`#include "util.h"`

| `const char * **strnstrn** (` | <var class="pdparam">needle</var>, |   |
|   | <var class="pdparam">needle_len</var>, |   |
|   | <var class="pdparam">haystack</var>, |   |
|   | <var class="pdparam">haystack_len</var>`)`; |   |

`const char * <var class="pdparam">needle</var>`;
`int <var class="pdparam">needle_len</var>`;
`const char * <var class="pdparam">haystack</var>`;
`int <var class="pdparam">haystack_len</var>`;<a name="idp63252016"></a> 
## Description

Find a binary substring within a binary string.

Search for needle in haystack. `NUL` characters in the strings are ignored; only the lengths are respected.

**<a name="idp63254224"></a> Parameters**

<dl class="variablelist">

<dt>needle</dt>

<dd>

The string to find.

</dd>

<dt>needle_len</dt>

<dd>

The length of the needle.

</dd>

<dt>haystack</dt>

<dd>

The string to search.

</dd>

<dt>haystack_len</dt>

<dd>

The length of the haystack.

</dd>

</dl>

**<a name="idp63262480"></a> Return Values**

Returns a pointer to the first instance of needle found in haystack.

**<a name="idp63263440"></a> Threading**

It is legal to call this function in the `Scheduler` thread.