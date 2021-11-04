---
lastUpdated: "03/26/2020"
title: "cli_conn"
description: "cli conn Establish an ec console control connection int cli conn endpoint outname const char endpoint char outname This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may..."
---

<a name="apis.cli_conn"></a> 
## Name

cli_conn — Establish an ec_console control connection

## Synopsis

`#include "control.h"`

| `int **cli_conn** (` | <var class="pdparam">endpoint</var>, |   |
|   | <var class="pdparam">outname</var>`)`; |   |

`const char * <var class="pdparam">endpoint</var>`;
`char * <var class="pdparam">outname</var>`;<a name="idp49173200"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Establish an ec_console control connection.

**<a name="idp49176064"></a> Parameters**

<dl class="variablelist">

<dt>endpoint</dt>

<dd>

the control endpoint to connect to

</dd>

<dt>outname</dt>

<dd>

a buffer that receives the canonical endpoint name

</dd>

</dl>

Connects to an ec_console endpoint. outname may be NULL. If not, it must be at least MAXPATHLEN bytes

**<a name="idp49181232"></a> Return Values**

returns a file descriptor that can be passed to [send_command](/momentum/3/3-api/apis-send-command) and [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command).

**<a name="idp49183312"></a> See Also**

[send_command](/momentum/3/3-api/apis-send-command), [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command).