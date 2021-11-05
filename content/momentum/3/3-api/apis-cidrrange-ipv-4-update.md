---
lastUpdated: "03/26/2020"
title: "cidrrange_ipv4_update"
description: "cidrrange ipv 4 update Inserts a node void cidrrange ipv 4 update root ip mask orientation cidrrange ipv 4 root struct in addr ip u int 32 t mask u int 32 t orientation This reference page was automatically generated from functions found in the header files in the development..."
---

<a name="apis.cidrrange_ipv4_update"></a> 
## Name

cidrrange_ipv4_update — Inserts a node

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `void **cidrrange_ipv4_update** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>, |   |
|   | <var class="pdparam">mask</var>, |   |
|   | <var class="pdparam">orientation</var>`)`; |   |

`cidrrange_ipv4 * <var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;
`u_int32_t <var class="pdparam">mask</var>`;
`u_int32_t <var class="pdparam">orientation</var>`;<a name="idp48355488"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Inserts a node.

Inserts a node in the range.

**<a name="idp48358816"></a> Parameters**

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

<dt>orientation</dt>

<dd>

CIDRRANGE_NEGATIVE or CIDRRANGE_POSITIVE

</dd>

</dl>