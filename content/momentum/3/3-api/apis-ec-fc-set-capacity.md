---
lastUpdated: "03/26/2020"
title: "ec_fc_set_capacity"
description: "ec fc set capacity Sets a new capacity for a given cache int ec fc set capacity cache expire ec fc t cache unsigned int expire This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_fc_set_capacity"></a> 
## Name

ec_fc_set_capacity — Sets a new capacity for a given cache

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_set_capacity** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">expire</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`unsigned int <var class="pdparam">expire</var>`;<a name="idp52288192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets a new capacity for a given cache.

Capacity is rounded up to a power of two.

**<a name="idp52291536"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to update

</dd>

<dt>expire</dt>

<dd>

new capacity

</dd>

</dl>

**<a name="idp52296080"></a> Return Values**

Returns 0 on success, non-zero on failure.