---
lastUpdated: "03/26/2020"
title: "smpp_get_message_id_from_pdu"
description: "smpp get message id from pdu Retrieve the Message ID from the PDU string smpp get message id from pdu pdu SMPP PDU pdu Configuration Change This feature is available starting from Momentum 3 2 Retrieve the Message ID from the PDU pdu The SMPP PDU For a definition of..."
---

<a name="apis.smpp_get_message_id_from_pdu"></a> 
## Name

smpp_get_message_id_from_pdu — Retrieve the Message ID from the PDU

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_get_message_id_from_pdu** (` | <var class="pdparam">pdu</var>`)`; |   |

`SMPP_PDU * <var class="pdparam">pdu</var>`;<a name="idp61372272"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Retrieve the Message ID from the PDU.

**<a name="idp61375152"></a> Parameters**

<dl class="variablelist">

<dt>pdu</dt>

<dd>

The SMPP_PDU. For a definition of this struct see [“SMPP_PDU”](/momentum/3/3-api/structs-smpp-pdu).

</dd>

</dl>

**<a name="idp61378464"></a> Return Values**

The messageID string.

**<a name="idp61379376"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61380480"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)