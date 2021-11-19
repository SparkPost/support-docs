---
lastUpdated: "03/26/2020"
title: "stringwrite2"
description: "stringwrite 2 Convert a character array to an ec string ssize t stringwrite 2 str iobuf iolen string str const char iobuf size t iolen Convert a character array to an ec string str An ec string type iobuf The character array iolen The length of iobuf On success this..."
---

<a name="apis.stringwrite2"></a> 
## Name

stringwrite2 — Convert a character array to an ec_string

## Synopsis

`#include "misc/ec_string.h"`

| `ssize_t **stringwrite2** (` | <var class="pdparam">str</var>, |   |
|   | <var class="pdparam">iobuf</var>, |   |
|   | <var class="pdparam">iolen</var>`)`; |   |

`string * <var class="pdparam">str</var>`;
`const char * <var class="pdparam">iobuf</var>`;
`size_t <var class="pdparam">iolen</var>`;<a name="idp62999264"></a> 
## Description

Convert a character array to an ec_string.

**<a name="idp63000480"></a> Parameters**

<dl class="variablelist">

<dt>str</dt>

<dd>

An ec_string type.

</dd>

<dt>iobuf</dt>

<dd>

The character array.

</dd>

<dt>iolen</dt>

<dd>

The length of iobuf.

</dd>

</dl>

**<a name="idp63006880"></a> Return Values**

On success this function returns the size of the buffer written; on failure it returns `-1`.

**<a name="idp63008304"></a> Threading**

It is legal to call this function in any thread.

<a name="idp63009408"></a> 
## See Also

[“string”](/momentum/3/3-api/structs-string)