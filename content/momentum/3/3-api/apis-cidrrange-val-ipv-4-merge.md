---
lastUpdated: "03/26/2020"
title: "cidrrange_val_ipv4_merge"
description: "cidrrange val ipv 4 merge Inserts a node merging adjacent nodes with the same value void cidrrange val ipv 4 merge root ip mask data cidrrange val ipv 4 root struct in addr ip u int 32 t mask ec blobject data This reference page was automatically generated from functions..."
---

<a name="apis.cidrrange_val_ipv4_merge"></a> 
## Name

cidrrange_val_ipv4_merge — Inserts a node, merging adjacent nodes with the same value

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `void **cidrrange_val_ipv4_merge** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">data</var>`)`; |   |

`cidrrange_val_ipv4 * <var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;
`u_int32_t <var class="pdparam">mask</var>`;
`ec_blobject * <var class="pdparam">data</var>`;<a name="idp48414288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Inserts a node, merging adjacent nodes with the same value.

Inserts a node in the range. If the newly inserted value is directly adjacent to other nodes that have the same value, then the adjacent nodes will be merged to form a single range, reducing the overall memory footprint of the range.

**<a name="idp48417856"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

the root of the range

</dd>

<dt>ip</dt>

<dd>

the ip of the node

</dd>

<dt>mask</dt>

<dd>

the mask of the node

</dd>

<dt>data</dt>

<dd>

the value of the node

</dd>

</dl>