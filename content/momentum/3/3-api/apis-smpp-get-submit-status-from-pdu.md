---
lastUpdated: "03/26/2020"
title: "smpp_get_submit_status_from_pdu"
description: "smpp get submit status from pdu Retrieve the status code from submit response PDU u int 64 t smpp get submit status from pdu pdu SMPP PDU pdu Configuration Change This feature is available starting from Momentum 3 2 Retrieve the status code from submit response PDU pdu The SMPP..."
---

<a name="apis.smpp_get_submit_status_from_pdu"></a> 
## Name

smpp_get_submit_status_from_pdu — Retrieve the status code from submit response PDU

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `u_int64_t **smpp_get_submit_status_from_pdu** (` | <var class="pdparam">pdu</var>`)`; |   |

`SMPP_PDU * <var class="pdparam">pdu</var>`;<a name="idp61409856"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Retrieve the status code from submit response PDU.

**<a name="idp61412752"></a> Parameters**

<dl class="variablelist">

<dt>pdu</dt>

<dd>

The [SMPP_PDU](/momentum/3/3-api/structs-smpp-pdu).

</dd>

</dl>

**<a name="idp61416160"></a> Return Values**

This function returns the submit status.

**<a name="idp61417088"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61418192"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)