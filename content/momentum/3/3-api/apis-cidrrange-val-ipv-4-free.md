---
lastUpdated: "03/26/2020"
title: "cidrrange_val_ipv4_free"
description: "cidrrange val ipv 4 free Free the resources allocated for a list of CIDR blocks void cidrrange val ipv 4 free node cidrrange val ipv 4 node Free the resources allocated for a list of CIDR blocks node The address of the cidrrange val ipv 4 list for which you..."
---

<a name="apis.cidrrange_val_ipv4_free"></a> 
## Name

cidrrange_val_ipv4_free — Free the resources allocated for a list of CIDR blocks

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `void **cidrrange_val_ipv4_free** (` | <var class="pdparam">node</var>`)`; |   |

`cidrrange_val_ipv4 * <var class="pdparam">node</var>`;<a name="idp48391824"></a> 
## Description

Free the resources allocated for a list of CIDR blocks.

**<a name="idp48393056"></a> Parameters**

<dl class="variablelist">

<dt>node</dt>

<dd>

The address of the `cidrrange_val_ipv4` list for which you want to free resources.

The following typedef applies to this data type:

`typedef Skiplist cidrrange_val_ipv4;`

</dd>

</dl>

**<a name="idp48397696"></a> Return Values**

This function returns `void`.

**<a name="idp48399056"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48400160"></a> 
## See Also

[cidr_ipv4_delete](/momentum/3/3-api/apis-cidr-ipv-4-delete), [cidrrange_val_ipv4_new](/momentum/3/3-api/apis-cidrrange-val-ipv-4-new), [cidrrange_val_ipv4_query](/momentum/3/3-api/apis-cidrrange-val-ipv-4-query), and [cidrrange_val_ipv4_update](/momentum/3/3-api/apis-cidrrange-val-ipv-4-update).