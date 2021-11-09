---
lastUpdated: "03/26/2020"
title: "ec_interpolate_calc_deps"
description: "ec interpolate calc deps Determine the requirements for a macro expansion int ec interpolate calc deps input default namespace flags reqs typednames const char input const char default namespace int flags int reqs EC Dict typednames This reference page was automatically generated from functions found in the header files in..."
---

<a name="apis.ec_interpolate_calc_deps"></a> 
## Name

ec_interpolate_calc_deps — Determine the requirements for a macro expansion

## Synopsis

`#include "misc/expand_string.h"`

| `int **ec_interpolate_calc_deps** (` | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">default_namespace</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">reqs</var>, |   |
|   | <var class="pdparam">typednames</var>`)`; |   |

`const char * <var class="pdparam">input</var>`;
`const char * <var class="pdparam">default_namespace</var>`;
`int <var class="pdparam">flags</var>`;
`int * <var class="pdparam">reqs</var>`;
`ECDict <var class="pdparam">typednames</var>`;<a name="idp53354480"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Determine the requirements for a macro expansion.

This function evaluates a string expansion and builds up a list of requirements or dependencies for the set of macros used in the string.

This is useful in situations where you are queuing jobs and need to copy or marshal the required pieces that would otherwise be discarded by a code path outside of your control.

**<a name="idp53358592"></a> Parameters**

<dl class="variablelist">

<dt>input</dt>

<dd>

the string to be expanded

</dd>

<dt>default_namespace</dt>

<dd>

the allowed namespaces

</dd>

<dt>flags</dt>

<dd>

flags to control the interpolation style

</dd>

<dt>reqs</dt>

<dd>

populated with a bitfield of general requirements

</dd>

<dt>typednames</dt>

<dd>

if not NULL, will be populated with the type names that were requested from the bag in the interpolation context.

</dd>

</dl>