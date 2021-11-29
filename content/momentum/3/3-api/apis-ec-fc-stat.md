---
lastUpdated: "03/26/2020"
title: "ec_fc_stat"
description: "ec fc stat Return statistics for given cache void ec fc stat cache st ec fc t cache struct ec fc stat st This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available..."
---

<a name="apis.ec_fc_stat"></a> 
## Name

ec_fc_stat — Return statistics for given cache

## Synopsis

`#include "ec_fc.h"`

| `void **ec_fc_stat** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">st</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`struct ec_fc_stat * <var class="pdparam">st</var>`;<a name="idp52323472"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return statistics for given cache.

Developer must guarantee operation will not occur during an ec_fc_destroy or ec_fc_delref.

**<a name="idp52326880"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>st</dt>

<dd>

cache statistics structure to store results in

</dd>

</dl>