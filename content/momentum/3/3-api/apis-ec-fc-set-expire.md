---
lastUpdated: "03/26/2020"
title: "ec_fc_set_expire"
description: "ec fc set expire Sets a new expiration time for a given cache int ec fc set expire cache expire ec fc t cache unsigned int expire This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_fc_set_expire"></a> 
## Name

ec_fc_set_expire — Sets a new expiration time for a given cache

## Synopsis

`#include "ec_fc.h"`

| `int **ec_fc_set_expire** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">expire</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`unsigned int <var class="pdparam">expire</var>`;<a name="idp52306080"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Sets a new expiration time for a given cache.

**<a name="idp52308960"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to update

</dd>

<dt>expire</dt>

<dd>

new expiration time

</dd>

</dl>

**<a name="idp52313520"></a> Return Values**

Returns 0 on success, non-zero on failure.