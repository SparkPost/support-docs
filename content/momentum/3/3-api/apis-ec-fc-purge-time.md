---
lastUpdated: "03/26/2020"
title: "ec_fc_purge_time"
description: "ec fc purge time Purge the cache's LRU and expired entries relative to tv tv sec unsigned int ec fc purge time cache tv ec fc t cache struct timeval tv This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_fc_purge_time"></a> 
## Name

ec_fc_purge_time — Purge the cache's LRU and expired entries (relative to tv->tv_sec)

## Synopsis

`#include "ec_fc.h"`

| `unsigned int **ec_fc_purge_time** (` | <var class="pdparam">cache</var>, |   |
|   | <var class="pdparam">tv</var>`)`; |   |

`ec_fc_t * <var class="pdparam">cache</var>`;
`struct timeval * <var class="pdparam">tv</var>`;<a name="idp52270720"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Purge the cache's LRU and expired entries (relative to tv->tv_sec).

**<a name="idp52273616"></a> Parameters**

<dl class="variablelist">

<dt>cache</dt>

<dd>

cache to operate on

</dd>

<dt>tv</dt>

<dd>

time at which point an entry can be considered expired

</dd>

</dl>

**<a name="idp52278208"></a> Return Values**

Returns number of purged entries.