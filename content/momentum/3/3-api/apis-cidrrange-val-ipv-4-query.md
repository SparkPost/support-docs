---
lastUpdated: "03/26/2020"
title: "cidrrange_val_ipv4_query"
description: "cidrrange val ipv 4 query Retrieves the value associated with an IP address in a list of CIDR blocks ec blobject cidrrange val ipv 4 query root ip const cidrrange val ipv 4 root struct in addr ip Retrieves the value associated with an IP address in a list of..."
---

<a name="apis.cidrrange_val_ipv4_query"></a> 
## Name

cidrrange_val_ipv4_query — Retrieves the value associated with an IP address in a list of CIDR blocks

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `ec_blobject * **cidrrange_val_ipv4_query** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>`)`; |   |

`const cidrrange_val_ipv4 * <var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;<a name="idp48456384"></a> 
## Description

Retrieves the value associated with an IP address in a list of CIDR blocks. Given an IPv4 address, this function determines the most specific range that encompasses it, and returns the value associated with that range. If no range matches, the `default_value` that was passed to [cidrrange_val_ipv4_new](/momentum/3/3-api/apis-cidrrange-val-ipv-4-new) will be returned.

**<a name="idp48458880"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

The root of the CIDR block list.

</dd>

<dt>ip</dt>

<dd>

The IP address to query in the CIDR block list.

</dd>

</dl>

**<a name="idp48463472"></a> Return Values**

The orientation for the supplied IP. The caller is responsible for calling [ec_blobject_delref](/momentum/3/3-api/apis-ec-blobject-delref) on the returned value when it is no longer required.

**<a name="idp48465056"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48466160"></a> 
## See Also

[cidr_ipv4_delete](/momentum/3/3-api/apis-cidr-ipv-4-delete), [cidrrange_val_ipv4_new](/momentum/3/3-api/apis-cidrrange-val-ipv-4-new), [cidrrange_val_ipv4_free](/momentum/3/3-api/apis-cidrrange-val-ipv-4-free), and [cidrrange_val_ipv4_update](/momentum/3/3-api/apis-cidrrange-val-ipv-4-update).