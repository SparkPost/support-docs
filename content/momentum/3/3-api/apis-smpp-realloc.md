---
lastUpdated: "03/26/2020"
title: "smpp_realloc"
description: "smpp realloc Free message mem and realloc new memtype smpp memory void smpp realloc mem size void mem unsigned int size Configuration Change This feature is available starting from Momentum 3 2 Free the memory associated with mem and realloc new memtype smpp memory specifying the size mem The buffer..."
---

<a name="apis.smpp_realloc"></a> 
## Name

smpp_realloc — Free message (*mem), and realloc new memtype_smpp memory

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void * **smpp_realloc** (` | <var class="pdparam">mem</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`void * <var class="pdparam">mem</var>`;
`unsigned int <var class="pdparam">size</var>`;<a name="idp61524000"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Free the memory associated with `mem` and realloc new memtype_smpp memory specifying the size.

**<a name="idp61527360"></a> Parameters**

<dl class="variablelist">

<dt>mem</dt>

<dd>

The buffer to be reallocated.

</dd>

<dt>size</dt>

<dd>

The new memory size.

</dd>

</dl>

**<a name="idp61531920"></a> Return Values**

On success this function returns a pointer to the allocated memory; on failure NULL is returned.

**<a name="idp61532912"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61534016"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) , [smpp_malloc](/momentum/3/3-api/apis-smpp-malloc) and [*Memory Functions*](/momentum/3/3-api/3-api-memory)