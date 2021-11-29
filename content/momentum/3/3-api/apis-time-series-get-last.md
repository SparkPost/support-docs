---
lastUpdated: "03/26/2020"
title: "time_series_get_last"
description: "time series get last Remove the bucket before the current one void time series get last ts series id time series ts int series id This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.time_series_get_last"></a> 
## Name

time_series_get_last — Remove the bucket before the current one

## Synopsis

`#include "misc/time_series.h"`

| `void * **time_series_get_last** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;<a name="idp63733296"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Remove the bucket before the current one.

**<a name="idp63736160"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>series_id</dt>

<dd>

- the sequence number of the monitor.

</dd>

</dl>

**<a name="idp63740736"></a> Return Values**

the bucket before current one.