---
lastUpdated: "03/26/2020"
title: "send_command"
description: "send command Send a command over an ec console control connection char send command fd input max len int fd char input int max len Use ec control send command instead Send a command over an ec console control connection fd A connection established via cli conn input A command..."
---

<a name="apis.send_command"></a> 
## Name

send_command — Send a command over an ec_console control connection

## Synopsis

`#include "control.h"`

| `char * **send_command** (` | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">max_len</var>`)`; |   |

`int <var class="pdparam">fd</var>`;
`char * <var class="pdparam">input</var>`;
`int <var class="pdparam">max_len</var>`;<a name="idp49418336"></a> 
## Description

### Deprecated

Use [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command) instead.

Send a command over an ec_console control connection.

**<a name="idp49421488"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

A connection established via [cli_conn](/momentum/3/3-api/apis-cli-conn).

</dd>

<dt>input</dt>

<dd>

A command string allocated via malloc(3C).

</dd>

<dt>max_len</dt>

<dd>

A hint as to the maximal size of a response.

</dd>

</dl>

Input MUST be a pointer allocated via malloc(3C); send_command will free(3C) that pointer.

**<a name="idp49429024"></a> See Also**

[ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command)