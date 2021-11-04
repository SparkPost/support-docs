---
lastUpdated: "03/26/2020"
title: "time_series_del_data"
description: "time series del data Delete data from all monitors in a time series void time series del data ts data time series ts void data This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.time_series_del_data"></a> 
## Name

time_series_del_data — Delete data from all monitors in a time series

## Synopsis

`#include "misc/time_series.h"`

| `void **time_series_del_data** (` | <var class="pdparam">ts</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;
`void * <var class="pdparam">data</var>`;<a name="idp63613056"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Delete data from all monitors in a time series.

The data will be deleted from the current bucket (i.e the bucket of now).

**<a name="idp63616464"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

<dt>data</dt>

<dd>

- the data to be deleted.

</dd>

</dl>

**<a name="idp63621312"></a> Return Values**

void.

**Configuration Change. ** This feature is available starting from Momentum 3.1.