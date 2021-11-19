---
lastUpdated: "03/26/2020"
title: "ec_spool_in2"
description: "ec spool in 2 spool in message meta data from disk int ec spool in 2 id msg message id id ec message msg This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally..."
---

<a name="apis.ec_spool_in2"></a> 
## Name

ec_spool_in2 — spool in message meta data from disk

## Synopsis

`#include "spool.h"`

| `int **ec_spool_in2** (` | <var class="pdparam">id</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`message_id * <var class="pdparam">id</var>`;
`ec_message ** <var class="pdparam">msg</var>`;<a name="idp62535344"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

spool in message meta data from disk.

Performs initial spool-in of the message identified by id. Populates msg with the message and returns IO_DONE on success. returns one of IO_FAIL or IO_TRANS_FAIL on failure.