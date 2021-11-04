---
lastUpdated: "03/26/2020"
title: "smpp_get_vals_from_dr"
description: "smpp get vals from dr Extract delivery receipt from the SMS text EC Dict smpp get vals from dr pdu SMPP PDU pdu Configuration Change This feature is available starting from Momentum 3 2 Extract the delivery receipt from the SMS text based on appendix B of the 3 4..."
---

<a name="apis.smpp_get_vals_from_dr"></a> 
## Name

smpp_get_vals_from_dr — Extract delivery receipt from the SMS text

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `ECDict **smpp_get_vals_from_dr** (` | <var class="pdparam">pdu</var>`)`; |   |

`SMPP_PDU * <var class="pdparam">pdu</var>`;<a name="idp61428400"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Extract the delivery receipt from the SMS text based on appendix B of the 3.4 specification.

**<a name="idp61431344"></a> Parameters**

<dl class="variablelist">

<dt>pdu</dt>

<dd>

The [SMPP_PDU](/momentum/3/3-api/structs-smpp-pdu).

</dd>

</dl>

**<a name="idp61434752"></a> Return Values**

This function returns an ECDict holding the delivery receipt fields in (key, value) pairs. An ECDict is a typedef of an [ec_hash_table](/momentum/3/3-api/structs-ec-hash-table).

**<a name="idp61436496"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61437600"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)