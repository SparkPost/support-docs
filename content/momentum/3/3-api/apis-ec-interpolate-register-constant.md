---
lastUpdated: "03/26/2020"
title: "ec_interpolate_register_constant"
description: "ec interpolate register constant Register a macro that expands to a constant string void ec interpolate register constant macro expansion const char macro const char expansion This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist..."
---

<a name="apis.ec_interpolate_register_constant"></a> 
## Name

ec_interpolate_register_constant — Register a macro that expands to a constant string

## Synopsis

`#include "misc/expand_string.h"`

| `void **ec_interpolate_register_constant** (` | <var class="pdparam">macro</var>, |   |
|   | <var class="pdparam">expansion</var>`)`; |   |

`const char * <var class="pdparam">macro</var>`;
`const char * <var class="pdparam">expansion</var>`;<a name="idp53407280"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Register a macro that expands to a constant string.

**<a name="idp53410160"></a> Parameters**

<dl class="variablelist">

<dt>macro</dt>

<dd>

the string to match

</dd>

<dt>expansion</dt>

<dd>

the text that will be substituted for macro

</dd>

</dl>

macro is treated as a literal string; if it is found in the input string then it will be replaced by the expansion string.

macro is an identifier like: "foo" which will means that a %{foo} in an input string will match and be expanded to expansion.