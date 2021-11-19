---
lastUpdated: "03/26/2020"
title: "run_command"
description: "run command deprecated use run command 2 int run command cc response command construct cc string response This API is deprecated use run command 2 instead It is legal to call this function in the Scheduler thread..."
---

<a name="apis.run_command"></a> 
## Name

run_command — deprecated, use run_command2

## Synopsis

`#include "control.h"`

| `int **run_command** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;<a name="idp49377840"></a> 
## Description

### Note

This API is deprecated; use [run_command2](/momentum/3/3-api/apis-run-command-2) instead.

**<a name="idp49380064"></a> Threading**

It is legal to call this function in the `Scheduler` thread.