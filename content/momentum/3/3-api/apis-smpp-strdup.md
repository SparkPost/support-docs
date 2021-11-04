---
lastUpdated: "03/26/2020"
title: "smpp_strdup"
description: "smpp strdup Duplicate a string char smpp strdup c const char c Configuration Change This feature is available starting from Momentum 3 2 Duplicate a string Use smpp free to free the returned buffer c The character string to duplicate This function returns a pointer to the duplicated string It..."
---

<a name="apis.smpp_strdup"></a> 
## Name

smpp_strdup — Duplicate a string

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `char * **smpp_strdup** (` | <var class="pdparam">c</var>`)`; |   |

`const char * <var class="pdparam">c</var>`;<a name="idp61545280"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Duplicate a string. Use [smpp_free](/momentum/3/3-api/apis-smpp-free) to free the returned buffer.

**<a name="idp61548896"></a> Parameters**

<dl class="variablelist">

<dt>c</dt>

<dd>

The character string to duplicate.

</dd>

</dl>

**<a name="idp61551920"></a> Return Values**

This function returns a pointer to the duplicated string.

**<a name="idp61552864"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61553968"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [*Memory Functions*](/momentum/3/3-api/3-api-memory)