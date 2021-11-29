---
lastUpdated: "03/26/2020"
title: "time_series_add_data"
description: "time series add data Add data to all monitors in a time series void time series add data ts data time series ts void data This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.time_series_add_data"></a> 
## Name

time_series_add_data — Add data to all monitors in a time series

## Synopsis

`#include "misc/time_series.h"`

| `void **time_series_add_data** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp63551712"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add data to all monitors in a time series.

The data will be added to the current bucket (i.e the bucket of now).

**<a name="idp63555088"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>data</dt>

<dd>

- the data to be added.

</dd>

</dl>

**<a name="idp63559936"></a> Return Values**

void.