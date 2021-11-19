---
lastUpdated: "03/26/2020"
title: "time_series_clear"
description: "time series clear Remove a bucket specified by bucket number in a monitor and return the removed bucket void time series clear ts series id bucket number time series ts int series id unsigned short bucket number This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.time_series_clear"></a> 
## Name

time_series_clear — Remove a bucket (specified by bucket number) in a monitor and return the removed bucket

## Synopsis

`#include "misc/time_series.h"`

| `void * **time_series_clear** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>, |   |
|   | <var class="pdparam">bucket_number</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;
`unsigned short <var class="pdparam">bucket_number</var>`;<a name="idp63592464"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Remove a bucket (specified by bucket number) in a monitor and return the removed bucket.

Caller should free the momory of the returned bucket.

**<a name="idp63595888"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>series_id</dt>

<dd>

- the sequence number of the monitor.

</dd>

<dt>bucket_number</dt>

<dd>

- the bucket to remove. 0 corresponds to current bucket.

</dd>

</dl>

**<a name="idp63602624"></a> Return Values**

the bucket or NULL if not found.