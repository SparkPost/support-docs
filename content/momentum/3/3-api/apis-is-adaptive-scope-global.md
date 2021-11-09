---
lastUpdated: "03/26/2020"
title: "is_adaptive_scope_global"
description: "is adaptive scope global check if a binding domain pair's adaptive scope is global or not int is adaptive scope global bname domain const char bname const char domain This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.is_adaptive_scope_global"></a> 
## Name

is_adaptive_scope_global — check if a binding/domain pair's adaptive scope is global or not

## Synopsis

`#include "modules/generic/adaptive.h"`

| `int **is_adaptive_scope_global** (` | <var class="pdparam">bname</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`const char * <var class="pdparam">bname</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp46891600"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

check if a binding/domain pair's adaptive scope is global or not

**<a name="idp46894496"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

name

</dd>

<dt>domain</dt>

<dd>

name

</dd>

</dl>

**<a name="idp46899040"></a> Return Values**

1 -- the scope is global; 0 -- the scope is local.