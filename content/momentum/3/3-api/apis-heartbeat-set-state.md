---
lastUpdated: "03/26/2020"
title: "heartbeat_set_state"
description: "heartbeat set state Changes the heartbeat state void heartbeat set state state enum heartbeat state state This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in..."
---

<a name="apis.heartbeat_set_state"></a> 
## Name

heartbeat_set_state — Changes the heartbeat state

## Synopsis

`#include "heartbeat.h"`

| `void **heartbeat_set_state** (` | <var class="pdparam">state</var>`)`; |   |

`enum heartbeat_state <var class="pdparam">state</var>`;<a name="idp49891696"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Changes the heartbeat state.

Different states may have different timeout intervals.