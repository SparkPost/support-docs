---
lastUpdated: "03/26/2020"
title: "cidr_ipv4_count2"
description: "cidr ipv 4 count 2 Similar to cidr ipv 4 count but takes ec sockaddr mask or string representation cidr u int 32 t cidr ipv 4 count 2 root addr bit len cidr cidrnode ipv 4 root ec sockaddr addr u int 32 t bit len const char cidr..."
---

<a name="apis.cidr_ipv4_count2"></a> 
## Name

cidr_ipv4_count2 — Similar to cidr_ipv4_count but takes ec_sockaddr/mask or string representation cidr

## Synopsis

`#include "cidrtree/cidrtree.h"`

| `u_int32_t **cidr_ipv4_count2** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">addr</var>, |   |
|   | <var class="pdparam">bit_len</var>, |   |
|   | <var class="pdparam">cidr</var>`)`; |   |

`cidrnode_ipv4 * <var class="pdparam">root</var>`;
`ec_sockaddr * <var class="pdparam">addr</var>`;
`u_int32_t <var class="pdparam">bit_len</var>`;
`const char * <var class="pdparam">cidr</var>`;<a name="idp48184864"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Similar to cidr_ipv4_count but takes ec_sockaddr/mask or string representation cidr.

If addr is given, it will take precedence over cidr. This function is mainly for Lua scripting.

**<a name="idp48188320"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

-- cidr tree

</dd>

<dt>addr</dt>

<dd>

-- Address

</dd>

<dt>bit_len</dt>

<dd>

-- should be from 0 to 32.

</dd>

<dt>cidr</dt>

<dd>

-- takes the form of "IP/[0-9]+".

</dd>

</dl>

**<a name="idp48196848"></a> Return Values**

connection count.