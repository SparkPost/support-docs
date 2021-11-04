---
lastUpdated: "03/26/2020"
title: "smpp_data_coding_name"
description: "smpp data coding name Retrieve the data coding name from the PDU char smpp data coding name pdu SMPP PDU pdu Configuration Change This feature is available starting from Momentum 3 2 Retrieve the data coding name from the PDU pdu For information about this data structure see SMPP PDU..."
---

<a name="apis.smpp_data_coding_name"></a> 
## Name

smpp_data_coding_name — Retrieve the data coding name from the PDU

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `char * **smpp_data_coding_name** (` | <var class="pdparam">pdu</var>`)`; |   |

`SMPP_PDU * <var class="pdparam">pdu</var>`;<a name="idp61224576"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Retrieve the data coding name from the PDU.

**<a name="idp61227456"></a> Parameters**

<dl class="variablelist">

<dt>pdu</dt>

<dd>

For information about this data structure see [SMPP_PDU](/momentum/3/3-api/structs-smpp-pdu).

</dd>

</dl>

**<a name="idp61230912"></a> Return Values**

The data coding string.

**<a name="idp61231824"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61232928"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp) and [smpp_sms_data_coding](/momentum/mobile/mobile-reference/mobility-conf-smpp-sms-data-coding)