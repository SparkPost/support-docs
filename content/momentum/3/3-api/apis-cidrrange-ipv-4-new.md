---
lastUpdated: "03/26/2020"
title: "cidrrange_ipv4_new"
description: "cidrrange ipv 4 new Create a new ipv 4 cidrrange cidrrange ipv 4 cidrrange ipv 4 new orientation int orientation This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.cidrrange_ipv4_new"></a> 
## Name

cidrrange_ipv4_new — Create a new ipv4 cidrrange

## Synopsis

`#include "cidrtree/cidrrange.h"`

| `cidrrange_ipv4 * **cidrrange_ipv4_new** (` | <var class="pdparam">orientation</var>`)`; |   |

`int <var class="pdparam">orientation</var>`;<a name="idp48320176"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create a new ipv4 cidrrange.

**<a name="idp48323040"></a> Parameters**

<dl class="variablelist">

<dt>orientation</dt>

<dd>

the default orientation, CIDRRANGE_NEGATIVE or CIDRRANGE_POSITIVE, returned when no node matches a query

</dd>

</dl>

**<a name="idp48325872"></a> Return Values**

a new cidrrange_ipv4 object.