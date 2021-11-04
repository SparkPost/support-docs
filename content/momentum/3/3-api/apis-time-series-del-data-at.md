---
lastUpdated: "03/26/2020"
title: "time_series_del_data_at"
description: "time series del data at Delete data from all monitors in a time series void time series del data at ts data whence time series ts void data time t whence This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.time_series_del_data_at"></a> 
## Name

time_series_del_data_at — Delete data from all monitors in a time series

## Synopsis

`#include "misc/time_series.h"`

| `void **time_series_del_data_at** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">data</var>, |   |
|   | <var class="pdparam">whence</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`void * <var class="pdparam">data</var>`;
`time_t <var class="pdparam">whence</var>`;<a name="idp63634400"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Delete data from all monitors in a time series.

The data will be deleted from the bucket corresponding to a given time stamp.

**<a name="idp63637808"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>data</dt>

<dd>

- the data to be deleted.

</dd>

<dt>whence</dt>

<dd>

- the time stamp when data should be deleted. If 0 or in a future time, then current time is to used. If too old to be within a monitor windows, the request will be skiped for that monitor.

</dd>

</dl>

**<a name="idp63644704"></a> Return Values**

void.

**Configuration Change. ** This feature is available starting from Momentum 3.1.