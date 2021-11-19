---
lastUpdated: "03/26/2020"
title: "smpp_malloc"
description: "smpp malloc Allocate memory of memtype smpp type void smpp malloc size unsigned int size Configuration Change This feature is available starting from Momentum 3 2 Allocate memory of memtype smpp type Memory allocated using this function should be freed using smpp free size The number of bytes of requested..."
---

<a name="apis.smpp_malloc"></a> 
## Name

smpp_malloc — Allocate memory of memtype_smpp type

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void * **smpp_malloc** (` | <var class="pdparam">size</var>`)`; |   |

`unsigned int <var class="pdparam">size</var>`;<a name="idp61464992"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Allocate memory of memtype_smpp type. Memory allocated using this function should be freed using [smpp_free](/momentum/3/3-api/apis-smpp-free).

**<a name="idp61468496"></a> Parameters**

<dl class="variablelist">

<dt>size</dt>

<dd>

The number of bytes of requested memory.

</dd>

</dl>

**<a name="idp61471248"></a> Return Values**

On success htis function returns a pointer to the allocated memory; on failure, NULL is returned.

**<a name="idp61472240"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61473344"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)