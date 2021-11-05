---
lastUpdated: "03/26/2020"
title: "ob_get_current_message"
description: "ob get current message Utility function to return the current ec message ec message ob get current message connh connection handle connh Configuration Change This function is available as of Momentum version 3 5 5 A utility function to return the ec message that is currently being processed connh A..."
---

<a name="apis.ob_get_current_message"></a> 
## Name

ob_get_current_message — Utility function to return the current ec_message

## Synopsis

`#include "modules/delivery/delivery.h"`

| `ec_message* **ob_get_current_message** (` | <var class="pdparam">connh</var>`)`; |   |

`connection_handle * <var class="pdparam">connh</var>`;<a name="idp57358848"></a> 
## Description

**Configuration Change. ** This function is available as of Momentum version 3.5.5.

A utility function to return the ec_message that is currently being processed.

**<a name="idp57361792"></a> Parameters**

<dl class="variablelist">

<dt>connh</dt>

<dd>

A connection_handle. For a description of this struct see [“connection_handle”](/momentum/3/3-api/structs-connection-handle).

</dd>

</dl>

**<a name="idp57365136"></a> Return Values**

This function returns an [ec_message](/momentum/3/3-api/structs-ec-message).

**<a name="idp57366768"></a> Threading**

It is legal to call this function in any thread.

<a name="idp57367872"></a> 
## See Also

[msg_dispose](/momentum/3/3-api/hooks-generic-delivery-msg-dispose) and [Momentum for Mobile Push Notifications](/momentum/3/3-push)