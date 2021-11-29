---
lastUpdated: "03/26/2020"
title: "ec_debug_printf"
description: "ec debug printf Write debug information given a debug level int ec debug printf level mask s int level int mask const char s Write debug information given a debug level level The debug level mask A mask s The debug string to write This may contain format specifiers The..."
---

<a name="apis.ec_debug_printf"></a> 
## Name

ec_debug_printf — Write debug information given a debug level

## Synopsis

`#include "ec_growbuf.h"`

| `int **ec_debug_printf** (` | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`int <var class="pdparam">level</var>`;
`int <var class="pdparam">mask</var>`;
`const char * <var class="pdparam">s</var>`;
`<var class="pdparam">...</var>`;<a name="idp49812176"></a> 
## Description

Write debug information given a debug level.

**<a name="idp49813408"></a> Parameters**

<dl class="variablelist">

<dt>level</dt>

<dd>

The debug level.

</dd>

<dt>mask</dt>

<dd>

A mask.

</dd>

<dt>s</dt>

<dd>

The debug string to write. This may contain format specifiers.

</dd>

<dt>...</dt>

<dd>

The variable argument list, whose number should match the number of specifiers in `s`.

</dd>

</dl>

**<a name="idp49822176"></a> Return Values**

This function returns `1`.

**<a name="idp49823536"></a> Threading**

It is legal to call this function in any thread.