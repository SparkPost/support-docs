---
lastUpdated: "03/26/2020"
title: "sl_previous"
description: "sl previous move iter backward a node return new node's datum void sl previous sl iter Skiplist sl skiplistnode iter This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum..."
---

<a name="apis.sl_previous"></a> 
## Name

sl_previous — move iter backward a node, return new node's datum

## Synopsis

`#include "skiplist.h"`

| `void * **sl_previous** (` | <var class="pdparam">sl</var>, |   |
|   | <var class="pdparam">iter</var>`)`; |   |

`Skiplist * <var class="pdparam">sl</var>`;
`skiplistnode ** <var class="pdparam">iter</var>`;<a name="idp61068736"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

move iter backward a node, return new node's datum

**<a name="idp61071616"></a> Parameters**

<dl class="variablelist">

<dt>sl</dt>

<dd>

the skiplist

</dd>

<dt>iter</dt>

<dd>

the list iterator

</dd>

</dl>