---
lastUpdated: "03/26/2020"
title: "time_series_init_series"
description: "time series init series Add a monitor to the series int time series init series ts base interval num intervals time series ts time t base interval unsigned short num intervals This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.time_series_init_series"></a> 
## Name

time_series_init_series — Add a monitor to the series

## Synopsis

`#include "misc/time_series.h"`

| `int **time_series_init_series** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">base_interval</var>, |   |
|   | <var class="pdparam">num_intervals</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`time_t <var class="pdparam">base_interval</var>`;
`unsigned short <var class="pdparam">num_intervals</var>`;<a name="idp63805232"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add a monitor to the series.

**<a name="idp63808096"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>base_interval</dt>

<dd>

- the size of the monitor's interval.

</dd>

<dt>num_intervals</dt>

<dd>

- the number of the intervals.

</dd>

</dl>

**<a name="idp63814512"></a> Return Values**

total count of monitors.