---
lastUpdated: "03/26/2020"
title: "smpp_get_deliver_mo_msg"
description: "smpp get deliver mo msg Retrieve the text message in received MO request string smpp get deliver mo msg p SMPP PDU p Configuration Change This feature is available starting from Momentum 3 2 Retrieve the text message in a received MO request p The SMPP PDU struct For a..."
---

<a name="apis.smpp_get_deliver_mo_msg"></a> 
## Name

smpp_get_deliver_mo_msg — Retrieve the text message in received MO request

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `string * **smpp_get_deliver_mo_msg** (` | <var class="pdparam">p</var>`)`; |   |

`SMPP_PDU * <var class="pdparam">p</var>`;<a name="idp61353712"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Retrieve the text message in a received MO request.

**<a name="idp61356608"></a> Parameters**

<dl class="variablelist">

<dt>p</dt>

<dd>

The SMPP_PDU struct. For a definition of this struct see [“SMPP_PDU”](/momentum/3/3-api/structs-smpp-pdu).

</dd>

</dl>

**<a name="idp61359920"></a> Return Values**

This function returns the text message string (data_sm.message_payload field).

**<a name="idp61360896"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61362000"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)