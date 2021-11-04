---
lastUpdated: "03/26/2020"
title: "run_command2"
description: "run command 2 Execute the console command referenced by a command construct int run command 2 cc response session command construct cc string response Event session Execute the console command referenced by a command construct For a list of the available commands see Console Commands cc The command that you..."
---

<a name="apis.run_command2"></a> 
## Name

run_command2 — Execute the console command referenced by a command_construct

## Synopsis

`#include "control.h"`

| `int **run_command2** (` | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">session</var>`)`; |   |

`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;
`Event * <var class="pdparam">session</var>`;<a name="idp49391296"></a> 
## Description

Execute the console command referenced by a command_construct. For a list of the available commands see [Console Commands](/momentum/3/3-reference/console-commands-summary-table).

**<a name="idp49393376"></a> Parameters**

<dl class="variablelist">

<dt>cc</dt>

<dd>

The command that you wish to execute. For a definition of this data type see [command_construct](/momentum/3/3-api/structs-command-construct).

</dd>

<dt>response</dt>

<dd>

The command response.

</dd>

<dt>session</dt>

<dd>

The session. For a description of this data type see [event](/momentum/3/3-api/structs-event).

</dd>

</dl>

**<a name="idp49401328"></a> Return Values**

Upon success this command returns `EC_RUN_COMMAND_COMPLETED`; upon failure, `EC_RUN_COMMAND_FAILED`. If session is not NULL, and some portion of the command execution needs to run asynchronously, then this function will return `EC_RUN_COMMAND_AGAIN`.

The complete list of return values is as follows:

```
#define EC_RUN_COMMAND_COMPLETED 0
#define EC_RUN_COMMAND_AGAIN     1
#define EC_RUN_COMMAND_FAILED    2
#define EC_RUN_COMMAND_NOT_AUTHZ 3
#define EC_RUN_COMMAND_NOT_AUTHN 4
#define EC_RUN_COMMAND_CONTINUE  5
#define EC_RUN_COMMAND_ASYNC     6
```
**<a name="idp49405184"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp49406720"></a> 
## See Also

[run_command](/momentum/3/3-api/apis-run-command)