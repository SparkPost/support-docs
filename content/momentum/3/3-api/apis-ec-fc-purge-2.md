---
lastUpdated: "03/26/2020"
title: "ec_fc_purge2"
description: "ec fc purge 2 Quickly purge all items from the cache unsigned int ec fc purge 2 cache reset key index ec fc t cache int reset key index This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_fc_purge2"></a> 
## Name

ec_fc_purge2 — Quickly purge all items from the cache

## Synopsis

`#include "ec_fc.h"`

| `unsigned int **ec_fc_purge2** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">reset_key_index</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`int <var class="pdparam">reset_key_index</var>`;<a name="idp52253152"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Quickly purge all items from the cache.

**<a name="idp52256016"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to purge all entries from

</dd>

<dt>reset_key_index</dt>

<dd>

whether to reset the key index or just destroy it

</dd>

</dl>

**<a name="idp52260624"></a> Return Values**

Returns number of purged entries.