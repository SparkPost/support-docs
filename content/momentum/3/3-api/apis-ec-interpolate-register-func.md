---
lastUpdated: "03/26/2020"
title: "ec_interpolate_register_func"
description: "ec interpolate register func Register a macro expansion function void ec interpolate register func macro closure func flags const char macro void closure ec interpolator func func int flags Register a macro expansion function The macro string will be matched using a literal string comparison unless the macro string contains..."
---

<a name="apis.ec_interpolate_register_func"></a> 
## Name

ec_interpolate_register_func — Register a macro expansion function

## Synopsis

`#include "misc/expand_string.h"`

| `void **ec_interpolate_register_func** (` | <var class="pdparam">macro</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">func</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`const char * <var class="pdparam">macro</var>`;
`void * <var class="pdparam">closure</var>`;
`ec_interpolator_func <var class="pdparam">func</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp53426416"></a> 
## Description

Register a macro expansion function. The macro string will be matched using a literal string comparison, unless the macro string contains the character ‘`*`’ which will match any sequence of 1 or more characters terminated by the character that follows it.

Consequently, "foo" will be a literal string match, but "foo:*" will match "%{foo:bar}" and "%{foo:baz}" but not "%{foo:}".

**<a name="idp53428880"></a> Parameters**

<dl class="variablelist">

<dt>macro</dt>

<dd>

The macro to be matched.

</dd>

<dt>closure</dt>

<dd>

A pointer to the closure function. This parameter can be `NULL`.

</dd>

<dt>func</dt>

<dd>

The function to perform the expansion.

</dd>

<dt>flags</dt>

<dd>

Indicate function capabilities. This is typically `0`.

</dd>

</dl>

If a macro is registered as a recursive macro, then it will be called again on its own output continually for as long as the output matches its own macro definition. The number of times that this happens is limited by the expansion infrastructure to a reasonable number to avoid infinitely recursing.

**<a name="idp53438880"></a> Return Value**

This function returns void.

**<a name="idp53439792"></a> Threading**

It is legal to call this function in the `Scheduler` thread.