---
lastUpdated: "03/26/2020"
title: "smpp_fail_ec_message"
description: "smpp fail ec message Fail an SMPP message void smpp fail ec message conn m error smpp conn conn ec message m const char error Fail an SMPP message with the specified error conn The smpp conn m The message to fail error The error code will be set to..."
---

<a name="apis.smpp_fail_ec_message"></a> 
## Name

smpp_fail_ec_message — Fail an SMPP message

## Synopsis

`#include "modules/mobility/smpp/smpp_esme.h"`

| `void **smpp_fail_ec_message** (` | <var class="pdparam">conn</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">error</var>`)`; |   |

`smpp_conn * <var class="pdparam">conn</var>`;
`ec_message * <var class="pdparam">m</var>`;
`const char * <var class="pdparam">error</var>`;<a name="idp61312528"></a> 
## Description

Fail an SMPP message with the specified error.

**<a name="idp61313760"></a> Parameters**

<dl class="variablelist">

<dt>conn</dt>

<dd>

The [smpp_conn](/momentum/3/3-api/structs-smpp-conn).

</dd>

<dt>m</dt>

<dd>

The message to fail.

</dd>

<dt>error</dt>

<dd>

The error code will be set to `550`. This parameter determines the error string that will be associated with the message. See [ec_message_set_code](/momentum/3/3-api/apis-ec-message-set-code).

</dd>

</dl>

**<a name="idp61321984"></a> Return Values**

This function returns void.

**<a name="idp61322896"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61324000"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [smpp_async_fail_ec_message](/momentum/3/3-api/apis-smpp-async-fail-ec-message)