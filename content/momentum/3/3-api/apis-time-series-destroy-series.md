---
lastUpdated: "03/26/2020"
title: "time_series_destroy_series"
description: "time series destroy series Destroy a monitor identified by a sequence number void time series destroy series ts series id time series ts int series id This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.time_series_destroy_series"></a> 
## Name

time_series_destroy_series — Destroy a monitor identified by a sequence number

## Synopsis

`#include "misc/time_series.h"`

| `void **time_series_destroy_series** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">series_id</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`int <var class="pdparam">series_id</var>`;<a name="idp63672000"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Destroy a monitor identified by a sequence number.

The first monitor added will have a seq = 0, and so on.

**<a name="idp63675376"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- time series.

</dd>

<dt>series_id</dt>

<dd>

- the sequence number of the monitor to be destroyed.

</dd>

</dl>

**<a name="idp63680240"></a> Return Values**

none.