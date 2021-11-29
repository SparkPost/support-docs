---
lastUpdated: "03/26/2020"
title: "ec_control_get_command_construct"
description: "ec control get command construct gets the command construct for the currently dispatched session command construct ec control get command construct void This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_control_get_command_construct"></a> 
## Name

ec_control_get_command_construct — gets the command_construct for the currently dispatched session

## Synopsis

`#include "control.h"`

| `command_construct * **ec_control_get_command_construct** (` | `)`; |   |

`void`;<a name="idp49205712"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

gets the command_construct for the currently dispatched session.

You might want to call this if you are implementing a module that is AAA aware. This API will be obsoleted in a future release.

This is only safe to call from the scheduler thread during a module control callback.

### Note

This feature is evolving, which means that it may change in future releases.