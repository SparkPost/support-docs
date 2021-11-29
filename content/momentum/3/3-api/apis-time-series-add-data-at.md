---
lastUpdated: "03/26/2020"
title: "time_series_add_data_at"
description: "time series add data at Add data to all monitors in a time series void time series add data at ts data whence time series ts void data time t whence This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.time_series_add_data_at"></a> 
## Name

time_series_add_data_at — Add data to all monitors in a time series

## Synopsis

`#include "misc/time_series.h"`

| `void **time_series_add_data_at** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">whence</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`void * <var class="pdparam">data</var>`;
`time_t <var class="pdparam">whence</var>`;<a name="idp63571072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add data to all monitors in a time series.

The data will be added to the bucket corresponding to a given time stamp.

**<a name="idp63574464"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>data</dt>

<dd>

- the data to be added.

</dd>

<dt>whence</dt>

<dd>

- the time stamp when data should be added. If 0 or in a future time, then current time is to used. If too old to be within a monitor windows, the request will be skiped for that monitor.

</dd>

</dl>

**<a name="idp63581344"></a> Return Values**

void.