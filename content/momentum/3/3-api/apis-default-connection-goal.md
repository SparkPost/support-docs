---
lastUpdated: "03/26/2020"
title: "__default_connection_goal"
description: "default connection goal default connection goal is the internally used connection goal determination function void default connection goal dr binding slot sl goal domain record dr ec binding slot binding slot Skiplist sl int goal This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.__default_connection_goal"></a> 
## Name

__default_connection_goal — __default_connection_goal is the internally used connection goal determination function

## Synopsis

`#include "mail_queue.h"`

| `void **__default_connection_goal** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">goal</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`Skiplist * <var class="pdparam">sl</var>`;
`int * <var class="pdparam">goal</var>`;<a name="idp48943920"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

__default_connection_goal is the internally used connection goal determination function.

It is called if no connection_goal hook is registered. This is provided as an export if you would like to create a hook that uses this default as a part of a larger, smarter calculation.