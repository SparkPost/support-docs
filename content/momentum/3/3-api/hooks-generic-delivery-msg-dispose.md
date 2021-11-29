---
lastUpdated: "03/26/2020"
title: "msg_dispose"
description: "msg dispose Called immediately prior to disposing of an ec message int msg dispose closure msg void closure ec message msg Configuration Change This hook point is available as of Momentum version 3 5 5 When a message fails this hook is typically used to reroute messages to another channel..."
---

<a name="hooks.generic_delivery.msg_dispose"></a> 
## Name

msg_dispose — Called immediately prior to disposing of an ec_message

## Synopsis

```
#include "ec_message.h"
#include "io_wrapper_int.h"
```

| `int **msg_dispose** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp29798144"></a> 
## Description

**Configuration Change. ** This hook point is available as of Momentum version 3.5.5.

### Note

When a message fails, this hook is typically used to reroute messages to another channel. For example, you can use this hook point to convert an Apple or Google push notification to an SSMP message. This hook is accessible from Lua via the `generic_delivery_msg_dispose` callout.

This hook is called right before an ec_message is finally disposed as delivered successfully or failed, either permanently or temporarily. The context variable `VCTX_KEY_DLV_RESPONSE_STATUS` holds the protocol status code that indicates a message's status. The context variable `VCTX_KEY_DLV_RESPONSE_STATUS_DETAIL` holds the detailed string description of the status code.

Use [ec_message_context_get](/momentum/3/3-api/apis-ec-message-context-get) to determine the value of context variables. These values will differ depending upon the protocol. Use [ec_message_get_delivery_method](/momentum/3/3-api/apis-ec-message-get-delivery-method) to determine how a message was sent.

**<a name="idp29805520"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

The closure function.

</dd>

<dt>msg</dt>

<dd>

The message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

</dl>

**<a name="idp29810608"></a> Return Values**

Currently the return value has no significance.

**<a name="idp29811552"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp29813072"></a> 
## See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [pre_mailq_message_requeue](/momentum/3/3-api/hooks-core-pre-mailq-message-requeue)