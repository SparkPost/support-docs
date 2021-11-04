---
lastUpdated: "03/26/2020"
title: "time_series_get"
description: "time series get Return specified bucket of a monitor void time series get ts series id bucket number time series ts int series id unsigned short bucket number This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.time_series_get"></a> 
## Name

time_series_get — Return specified bucket of a monitor

## Synopsis

`#include "misc/time_series.h"`

| `void * **time_series_get** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>, |   |
|   | <var class="pdparam">bucket_number</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;
`unsigned short <var class="pdparam">bucket_number</var>`;<a name="idp63691296"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return specified bucket of a monitor.

**<a name="idp63694160"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- time series.

</dd>

<dt>series_id</dt>

<dd>

- monitor sequence.

</dd>

<dt>bucket_number</dt>

<dd>

-the bucket number to return. 0 corresponds to current bucket.

</dd>

</dl>

**<a name="idp63700592"></a> Return Values**

bucket or NULL if not found.