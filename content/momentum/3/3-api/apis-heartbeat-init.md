---
lastUpdated: "03/26/2020"
title: "heartbeat_init"
description: "heartbeat init establish the heartbeat segment with the gimli monitor int heartbeat init void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change in behavior when..."
---

<a name="apis.heartbeat_init"></a> 
## Name

heartbeat_init — establish the heartbeat segment with the gimli monitor

## Synopsis

`#include "heartbeat.h"`

| `int **heartbeat_init** (` | `)`; |   |

`void`;<a name="idp49879072"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

establish the heartbeat segment with the gimli monitor.

When called initially, sets up the heartbeat segment with the gimli monitor. This sets the watchdog ticking.

When called subsequent times, will re-establish signal handlers with the gimli library such that faults will be trapped correctly. This second call is typically placed immediately prior to the eventloop, and is needed to reset signal handlers after embedded libraries (such as java) may have altered them.