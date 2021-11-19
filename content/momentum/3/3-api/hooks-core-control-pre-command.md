---
lastUpdated: "03/26/2020"
title: "control_pre_command"
description: "control pre command This hook point occurs prior to the execution of a console command int core control pre command closure cc response void closure command construct cc string response Given the command console parameter hooks registered here can perform tasks prior to the built in console commands or even..."
---

<a name="hooks.core.control_pre_command"></a> 
## Name

control_pre_command — This hook point occurs prior to the execution of a console command

## Synopsis

`#include "hooks/core/control_pre_command.h"`

| `int **core_control_pre_command** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">cc</var>, |   |
|   | <var class="pdparam">response</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`command_construct * <var class="pdparam">cc</var>`;
`string * <var class="pdparam">response</var>`;<a name="idp46186992"></a> 
## Description

Given the command console parameter, hooks registered here can perform tasks prior to the built-in console commands, or even bypass the built-in commands completely. For a complete list of the console commands see [Console Commands](/momentum/3/3-reference/console-commands-summary-table).

**<a name="idp46189088"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>cc</dt>

<dd>

For a description of this data type see [command_construct](/momentum/3/3-api/structs-command-construct).

</dd>

<dt>response</dt>

<dd>

This option provides output handed back to the console client. For a description of this data type see [string](/momentum/3/3-api/structs-string). This parameter is optional.

</dd>

</dl>

**<a name="idp45984640"></a> Return Values**

Return `1` to skip the default command behavior; any additional pre_command hooks will also be skipped. Return `0` to allow the default command behavior (and any other pre_command hooks) to continue.

**<a name="idp45986960"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp45988480"></a> 
## See Also

[control_shutdown_ex](/momentum/3/3-api/hooks-core-control-shutdown-ex)