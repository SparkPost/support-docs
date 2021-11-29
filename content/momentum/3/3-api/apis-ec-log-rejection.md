---
lastUpdated: "03/26/2020"
title: "ec_log_rejection"
description: "ec log rejection Records the fact that Momentum rejected an incoming message deprecated void ec log rejection now ac ctx phase format struct timeval now accept construct ac validate context ctx int phase const char format Records the fact that Momentum rejected an incoming message Use ec log rejection 2..."
---

<a name="apis.ec_log_rejection"></a> 
## Name

ec_log_rejection — Records the fact that Momentum rejected an incoming message (deprecated)

## Synopsis

`#include "log.h"`

| `void **ec_log_rejection** (` | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | `)`; |   |

`struct timeval * <var class="pdparam">now</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">phase</var>`;
`const char * <var class="pdparam">format</var>`;
`...`;<a name="idp54238432"></a> 
## Description

Records the fact that Momentum rejected an incoming message.

**<a name="idp54239680"></a> Deprecated**

Use [ec_log_rejection2](/momentum/3/3-api/apis-ec-log-rejection-2) instead.