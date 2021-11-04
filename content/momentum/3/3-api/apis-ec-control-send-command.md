---
lastUpdated: "03/26/2020"
title: "ec_control_send_command"
description: "ec control send command Send a command over an ec console control connection int ec control send command fd command closure consumer int fd const char command void closure int void closure char buf int len consumer This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.ec_control_send_command"></a> 
## Name

ec_control_send_command — Send a command over an ec_console control connection

## Synopsis

`#include "control.h"`

| `int **ec_control_send_command** (` | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">command</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">consumer</var>`)`; |   |

`int <var class="pdparam">fd</var>`;
`const char * <var class="pdparam">command</var>`;
`void * <var class="pdparam">closure</var>`;
`int(*)(void *closure, char *buf, int len) <var class="pdparam">consumer</var>`;<a name="idp49310048"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Send a command over an ec_console control connection.

**<a name="idp49312880"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

a connection established via [cli_conn](/momentum/3/3-api/apis-cli-conn)

</dd>

<dt>command</dt>

<dd>

the command string to run

</dd>

<dt>closure</dt>

<dd>

a closure to be passed to consumer

</dd>

<dt>consumer</dt>

<dd>

a callback function to handle the result

</dd>

</dl>

CONSUMER is a callback to handle the results; CLOSURE is passed as the first argument to it. CONSUMER is called with the following values of BUF and LEN in the following situations:

BUF = NULL; LEN = positive. This indicates the total length of the control response to come.

BUF = NULL; LEN = negative. -LEN is equal the an errno encountered while reading the response.

BUF != NULL; LEN = 0\. Indicates an EOF while reading the response.

BUF != LEN; LEN > 0\. Indicates that LEN bytes are available in BUF.

CONSUMER should return 1 to continue the operation, or 0 if it wants to stop the read.

**<a name="idp49325008"></a> Return Values**

If an error occurs during the write, or during the read of the response header, CONSUMER is not called and [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command) returns 0. Otherwise, [ec_control_send_command](/momentum/3/3-api/apis-ec-control-send-command) returns 1.

**<a name="idp49327184"></a> See Also**

[send_command](/momentum/3/3-api/apis-send-command), [cli_conn](/momentum/3/3-api/apis-cli-conn)