---
lastUpdated: "03/26/2020"
title: "cidrrange_ipv4_query"
description: "cidrrange ipv 4 query Query the orientation stored for an IP int cidrrange ipv 4 query root ip const cidrrange ipv 4 root struct in addr ip This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.cidrrange_ipv4_query"></a> 
## Name

cidrrange_ipv4_query — Query the orientation stored for an IP

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `int **cidrrange_ipv4_query** (` | <var class="pdparam">root</var>, |   |
|   | <var class="pdparam">ip</var>`)`; |   |

`const cidrrange_ipv4 * <var class="pdparam">root</var>`;
`struct in_addr <var class="pdparam">ip</var>`;<a name="idp48335904"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Query the orientation stored for an IP.

Given an IPv4 address, determines the most specific range that encompasses it, and returns the orientation of that range. If no range matches, the default orientation specified at creation time will be returned.

**<a name="idp48339440"></a> Parameters**

<dl class="variablelist">

<dt>root</dt>

<dd>

the root of the range

</dd>

<dt>ip</dt>

<dd>

the address to query

</dd>

</dl>

**<a name="idp48344000"></a> Return Values**

the orientation for the supplied IP