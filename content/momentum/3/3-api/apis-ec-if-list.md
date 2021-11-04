---
lastUpdated: "03/26/2020"
title: "ec_if_list"
description: "ec if list Retrieve a list of interfaces int ec if list ifp family flags ec interface ifp int family int flags This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.ec_if_list"></a> 
## Name

ec_if_list — Retrieve a list of interfaces

## Synopsis

`#include "license/ife.h"`

| `int **ec_if_list** (` | <var class="pdparam">ifp</var>, |   |
|   | <var class="pdparam">family</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_interface ** <var class="pdparam">ifp</var>`;
`int <var class="pdparam">family</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp57475200"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Retrieve a list of interfaces.

**<a name="idp57478064"></a> Parameters**

<dl class="variablelist">

<dt>ifp</dt>

<dd>

the interface list

</dd>

<dt>family</dt>

<dd>

address family

</dd>

<dt>flags</dt>

<dd>

EC_IFL_XXX flags

</dd>

</dl>