---
lastUpdated: "03/26/2020"
title: "time_series_get_current_alpha"
description: "time series get current alpha When getting the counts from current bucket of a monitor the raw value does not reflect the truth since the value from current bucket is only partial value float time series get current alpha ts series id time series ts int series id This reference..."
---

<a name="apis.time_series_get_current_alpha"></a> 
## Name

time_series_get_current_alpha — When getting the counts from current bucket of a monitor, the raw value does not reflect the truth since the value from current bucket is only partial value

## Synopsis

`#include "misc/time_series.h"`

| `float **time_series_get_current_alpha** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;<a name="idp63710912"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

When getting the counts from current bucket of a monitor, the raw value does not reflect the truth since the value from current bucket is only partial value.

To illustrate the problem, look at the following:

buckets: 0 1 ... number-of-interval-1 |----|----|...|----| ^ now here, now (the moment when counts are used) is still in the middle of the current bucket (interval). The value from current interval will not reflect the actual when "now" is at the end of current bucket. Therefore, to guess the "true value" for current bucket, we can use the weighted value of previous bucket. The guessed value of current interval is computed as follow:

(value of current bucket) + (1 - alpha) * (value of previous bucket).

This function returns the alpha. You can consider alpha as the percentage of time passed since the beginning of current interval.

NOTE: this function should be used together with [time_series_get](/momentum/3/3-api/apis-time-series-get) and called immediately after [time_series_get](/momentum/3/3-api/apis-time-series-get).

**<a name="idp63718032"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>series_id</dt>

<dd>

- sequence number of the monitor.

</dd>

</dl>

**<a name="idp63722896"></a> Return Values**

alpha.