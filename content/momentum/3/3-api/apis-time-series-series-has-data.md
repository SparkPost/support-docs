---
lastUpdated: "03/26/2020"
title: "time_series_series_has_data"
description: "time series series has data Returns true if a given monitor in a time series contains data int time series series has data ts series id time series ts int series id This reference page was automatically generated from functions found in the header files in the development branch The..."
---

<a name="apis.time_series_series_has_data"></a> 
## Name

time_series_series_has_data — Returns true if a given monitor in a time series contains data

## Synopsis

`#include "misc/time_series.h"`

| `int **time_series_series_has_data** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;<a name="idp63839728"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns true if a given monitor in a time series contains data.

**<a name="idp63842624"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>series_id</dt>

<dd>

- sequence number of a monitor.

</dd>

</dl>

**<a name="idp63847184"></a> Return Values**

none-zero if the monitor contains data.