---
lastUpdated: "03/26/2020"
title: "smpp_config_fetch_using_connection"
description: "smpp config fetch using connection Fetch the specified SMPP configuration option ec config value smpp config fetch using connection option slot conn int option slot smpp conn conn Configuration Change This feature is available starting from Momentum 3 2 Fetch the specified configuration option value using the smpp conn option..."
---

<a name="apis.smpp_config_fetch_using_connection"></a> 
## Name

smpp_config_fetch_using_connection — Fetch the specified SMPP configuration option

## Synopsis

`#include "modules/mobility/smpp/smpp_util.h"`

| `ec_config_value * **smpp_config_fetch_using_connection** (` | <var class="pdparam">option_slot</var>, |   |
|   | <var class="pdparam">conn</var>`)`; |   |

`int <var class="pdparam">option_slot</var>`;
`smpp_conn * <var class="pdparam">conn</var>`;<a name="idp61203152"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.2.

Fetch the specified configuration option value using the [smpp_conn](/momentum/3/3-api/structs-smpp-conn).

**<a name="idp61206768"></a> Parameters**

<dl class="variablelist">

<dt>option_slot</dt>

<dd>

The configuration option slot number.

</dd>

<dt>conn</dt>

<dd>

A pointer to the SMPP connection.

</dd>

</dl>

**<a name="idp61211376"></a> Return Values**

This function returns an [ec_config_value](/momentum/3/3-api/structs-ec-config-value).

**<a name="idp61213008"></a> Threading**

This function should be called in the scheduler thread. Since SMPP does not support multiple event loops, the master scheduler should handle the connection.

<a name="idp61214224"></a> 
## See Also

[*SMPP Functions*](/momentum/3/3-api/smpp)