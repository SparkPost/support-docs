---
lastUpdated: "03/26/2020"
title: "ec_adaptive_get_stats_period"
description: "ec adaptive get stats period Return the adaptive stats period which is the retention period for adaptive stats int ec adaptive get stats period void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in..."
---

<a name="apis.ec_adaptive_get_stats_period"></a> 
## Name

ec_adaptive_get_stats_period — Return the adaptive_stats_period which is the retention period for adaptive stats

## Synopsis

`#include "modules/generic/adaptive.h"`

| `int **ec_adaptive_get_stats_period** (` | `)`; |   |

`void`;<a name="idp46654720"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return the adaptive_stats_period which is the retention period for adaptive stats.

**<a name="idp46657520"></a> Return Values**

retention period in seconds

**Configuration Change. ** This feature is available starting from Momentum 3.3.