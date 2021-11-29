---
lastUpdated: "03/26/2020"
title: "time_series_init"
description: "time series init Function to allocate and initialize a time series data structure time series time series init add data alloc bucket free bucket void void void add data void alloc bucket void void free bucket Function to allocate and initialize a time series data structure Use time series init..."
---

<a name="apis.time_series_init"></a> 
## Name

time_series_init — Function to allocate and initialize a time series data structure

## Synopsis

`#include "misc/time_series.h"`

| `time_series * **time_series_init** (` | <var class="pdparam">add_data</var>, |   |
|   | <var class="pdparam">alloc_bucket</var>, |   |
|   | <var class="pdparam">free_bucket</var>`)`; |   |

`void(*)(void *, void *) <var class="pdparam">add_data</var>`;
`void *(*)() <var class="pdparam">alloc_bucket</var>`;
`void(*)(void *) <var class="pdparam">free_bucket</var>`;<a name="idp63766672"></a> 
## Description

Function to allocate and initialize a time series data structure.

### Note

**<a name="idp63768208"></a> Deprecated**

Use [time_series_init2](/momentum/3/3-api/apis-time-series-init-2) instead.

**<a name="idp63769824"></a> Return Values**

Instance of a time series.