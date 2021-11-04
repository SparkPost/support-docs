---
lastUpdated: "03/26/2020"
title: "ec_fc_purge"
description: "ec fc purge Quickly purge all items from the cache unsigned int ec fc purge cache ec fc t cache This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.ec_fc_purge"></a> 
## Name

ec_fc_purge — Quickly purge all items from the cache

## Synopsis

`#include "ec_fc.h"`

| `unsigned int **ec_fc_purge** (` | <var class="pdparam">cache</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;<a name="idp52237520"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Quickly purge all items from the cache.

**<a name="idp52240384"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to purge all entries from

</dd>

</dl>

**<a name="idp52243120"></a> Return Values**

Returns number of purged entries.