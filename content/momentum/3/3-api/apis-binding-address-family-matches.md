---
lastUpdated: "03/26/2020"
title: "binding_address_family_matches"
description: "binding address family matches Validate that the binding in question matches the address family provided int binding address family matches binding slot family ec binding slot binding slot u int 8 t family This reference page was automatically generated from functions found in the header files in the development branch..."
---

<a name="apis.binding_address_family_matches"></a> 
## Name

binding_address_family_matches — Validate that the binding in question matches the address family provided

## Synopsis

`#include "binding.h"`

| `int **binding_address_family_matches** (` | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">family</var>`)`; |   |

`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`u_int8_t <var class="pdparam">family</var>`;<a name="idp63859184"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Validate that the binding in question matches the address family provided.

**<a name="idp63862096"></a> Parameters**

<dl class="variablelist">

<dt>binding_slot</dt>

<dd>

binding to validate

</dd>

<dt>family</dt>

<dd>

Address family that needs to be matched

</dd>

</dl>

**<a name="idp63866688"></a> Return Values**

Returns 1 if the address family provided is valid for the binding in question. For a binding that has no specific bind address, this will always return 1.