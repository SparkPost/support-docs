---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_set_max_retention"
description: "ec spool ctx set max retention set the maximum retention time for a spool context void ec spool ctx set max retention ctx retention ec spool ctx ctx int retention This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_spool_ctx_set_max_retention"></a> 
## Name

ec_spool_ctx_set_max_retention — set the maximum retention time for a spool context

## Synopsis

`#include "spool.h"`

| `void **ec_spool_ctx_set_max_retention** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">retention</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">retention</var>`;<a name="idp62439952"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set the maximum retention time for a spool context.

This is used as a hint for managing spool windows. Retention is measured in seconds; if left unspecified, the global message_expiration parameter will be used.