---
lastUpdated: "03/26/2020"
title: "cidrrange_val_ipv4_new"
description: "cidrrange val ipv 4 new Create a new list of I Pv 4 CIDR blocks cidrrange val ipv 4 cidrrange val ipv 4 new default value ec blobject default value Create a new list of I Pv 4 CIDR blocks default value The address of an Section 68 17 ec..."
---

<a name="apis.cidrrange_val_ipv4_new"></a> 
## Name

cidrrange_val_ipv4_new — Create a new list of IPv4 CIDR blocks

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `cidrrange_val_ipv4 * **cidrrange_val_ipv4_new** (` | <var class="pdparam">default_value</var>`)`; |   |

`ec_blobject * <var class="pdparam">default_value</var>`;<a name="idp48434304"></a> 
## Description

Create a new list of IPv4 CIDR blocks.

**<a name="idp48435520"></a> Parameters**

<dl class="variablelist">

<dt>default_value</dt>

<dd>

The address of an [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject). This is the `ec_blobject` returned when no ranges match a query.

</dd>

</dl>

**<a name="idp48439312"></a> Return Values**

Returns the address of a newly allocated `cidrrange_val_ipv4` list. The caller is responsible for invoking [cidrrange_val_ipv4_free](/momentum/3/3-api/apis-cidrrange-val-ipv-4-free) to release the allocated resources.

The following typedef applies to this data type:

`typedef Skiplist cidrrange_val_ipv4;`

**<a name="idp48442752"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48443856"></a> 
## See Also

[cidr_ipv4_delete](/momentum/3/3-api/apis-cidr-ipv-4-delete), [cidrrange_val_ipv4_free](/momentum/3/3-api/apis-cidrrange-val-ipv-4-free), [cidrrange_val_ipv4_query](/momentum/3/3-api/apis-cidrrange-val-ipv-4-query), and [cidrrange_val_ipv4_update](/momentum/3/3-api/apis-cidrrange-val-ipv-4-update).