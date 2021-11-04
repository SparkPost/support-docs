---
lastUpdated: "03/26/2020"
title: "smpp_async_fail_ec_message"
description: "smpp async fail ec message Fail an asynchronous SMPP message void smpp async fail ec message m force async ec message m int force async This function is like smpp fail ec message but you need to use ec message set code to set the error and you must also..."
---

<a name="apis.smpp_async_fail_ec_message"></a> 
## Name

smpp_async_fail_ec_message — Fail an asynchronous SMPP message

## Synopsis

`#include "modules/mobility/smpp/smpp_esme.h"`

| `void **smpp_async_fail_ec_message** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">force_async</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`int <var class="pdparam">force_async</var>`;<a name="idp61180400"></a> 
## Description

This function is like [smpp_fail_ec_message](/momentum/3/3-api/apis-smpp-fail-ec-message), but you need to use [ec_message_set_code](/momentum/3/3-api/apis-ec-message-set-code) to set the error and you must also set the delivered field to `EM_FAILED` or `EM_FAILED_QUIET` before calling it.

**<a name="idp61183744"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

The message to fail.

</dd>

<dt>force_async</dt>

<dd>

This parameter must be set to `0` in contexts where failing the message is time-sensitive. For example, where we never want to attempt to send the message again because it was already rejected by the peer. In other cases and in bulk failure scenarios, it can be set to `1`.

</dd>

</dl>

**<a name="idp61189488"></a> Return Values**

This function returns void.

**<a name="idp61190400"></a> Threading**

It is legal to call this function in any thread.

When an async job is created, it is possible to create a race condition if the caller thread and the async thread both accessing the same resource.

<a name="idp61192112"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)