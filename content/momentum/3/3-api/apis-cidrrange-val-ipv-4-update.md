---
lastUpdated: "03/26/2020"
title: "cidrrange_val_ipv4_update"
description: "cidrrange val ipv 4 update Updates the value for an IP address in a list of CIDR blocks void cidrrange val ipv 4 update root ip mask data cidrrange val ipv 4 root struct in addr ip u int 32 t mask ec blobject data Updates the value for an..."
---

<a name="apis.cidrrange_val_ipv4_update"></a> 
## Name

cidrrange_val_ipv4_update — Updates the value for an IP address in a list of CIDR blocks

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `void **cidrrange_val_ipv4_update** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`cidrrange_val_ipv4 * <var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;
`u_int32_t <var class="pdparam">mask</var>`;
`ec_blobject * <var class="pdparam">data</var>`;<a name="idp48480176"></a> 
## Description

Updates the value for an IP address in a list of CIDR blocks or inserts the IP address into the list.

**<a name="idp48481456"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

The root of the CIDR block list.

</dd>

<dt>ip</dt>

<dd>

The IP of the node to insert.

</dd>

<dt>mask</dt>

<dd>

The IP mask.

</dd>

<dt>data</dt>

<dd>

The associated data.

</dd>

</dl>

**<a name="idp48489696"></a> Return Values**

This function returns `void`.

**<a name="idp48491056"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48492160"></a> 
## See Also

[cidr_ipv4_delete](/momentum/3/3-api/apis-cidr-ipv-4-delete), [cidrrange_val_ipv4_new](/momentum/3/3-api/apis-cidrrange-val-ipv-4-new), [cidrrange_val_ipv4_free](/momentum/3/3-api/apis-cidrrange-val-ipv-4-free), and [cidrrange_val_ipv4_query](/momentum/3/3-api/apis-cidrrange-val-ipv-4-query).