---
lastUpdated: "03/26/2020"
title: "cidr_ipv4_delete"
description: "cidr ipv 4 delete Decrements the count for an IP address from a CIDR tree void cidr ipv 4 delete root ip cidrnode ipv 4 root struct in addr ip Decrements the count for an IP address from a CIDR tree If the count is decremented to zero then we..."
---

<a name="apis.cidr_ipv4_delete"></a> 
## Name

cidr_ipv4_delete — Decrements the count for an IP address from a CIDR tree

## Synopsis

`#include "cidrtree/cidrtree.h"`

| `void **cidr_ipv4_delete** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>`)`; |   |

`cidrnode_ipv4 *<var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;<a name="idp48206960"></a> 
## Description

Decrements the count for an IP address from a CIDR tree. If the count is decremented to zero, then we delete the IP address.

**<a name="idp48208272"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

The CIDR tree.

</dd>

<dt>ip</dt>

<dd>

The IP address to remove from the tree.

</dd>

</dl>

**<a name="idp48212832"></a> Return Values**

This function returns void.

**<a name="idp48213744"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48214848"></a> 
## See Also

[cidrrange_val_ipv4_new](/momentum/3/3-api/apis-cidrrange-val-ipv-4-new), [cidrrange_val_ipv4_free](/momentum/3/3-api/apis-cidrrange-val-ipv-4-free), [cidrrange_val_ipv4_query](/momentum/3/3-api/apis-cidrrange-val-ipv-4-query), and [cidrrange_val_ipv4_update](/momentum/3/3-api/apis-cidrrange-val-ipv-4-update).