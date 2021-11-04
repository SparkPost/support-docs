---
lastUpdated: "03/26/2020"
title: "smpp_free"
description: "smpp free Free memory of the memtype smpp type void smpp free x void x Configuration Change This feature is available starting from Momentum 3 2 Free memory of the memtype smpp type Use this function with memory allocated using smpp malloc x The buffer that will be released This..."
---

<a name="apis.smpp_free"></a> 
## Name

smpp_free — Free memory of the memtype_smpp type

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `void **smpp_free** (` | <var class="pdparam">x</var>`)`; |   |

`void * <var class="pdparam">x</var>`;<a name="idp61334704"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Free memory of the memtype_smpp type. Use this function with memory allocated using [smpp_malloc](/momentum/3/3-api/apis-smpp-malloc).

**<a name="idp61338192"></a> Parameters**

<dl class="variablelist">

<dt>x</dt>

<dd>

The buffer that will be released.

</dd>

</dl>

**<a name="idp61340928"></a> Return Values**

This function returns void.

**<a name="idp61341840"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61342944"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [*Memory Functions*](/momentum/3/3-api/3-api-memory)