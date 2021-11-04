---
lastUpdated: "03/26/2020"
title: "time_series_has_data"
description: "time series has data Returns true if at least one monitor of a time series contains data int time series has data ts time series ts This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.time_series_has_data"></a> 
## Name

time_series_has_data — Returns true if at least one monitor of a time series contains data

## Synopsis

`#include "misc/time_series.h"`

| `int **time_series_has_data** (` | <var class="pdparam">ts</var>`)`; |   |

`time_series * <var class="pdparam">ts</var>`;<a name="idp63750160"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Returns true if at least one monitor of a time series contains data.

**<a name="idp63753056"></a> Parameters**

<dl class="variablelist">

<dt>ts</dt>

<dd>

- the time series.

</dd>

</dl>

**<a name="idp63755776"></a> Return Values**

none-zero if at least one monitor of a time series contains data.