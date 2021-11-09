---
lastUpdated: "03/26/2020"
title: "scpt_parse_params"
description: "scpt parse params Parse scriptlet function parameters void scpt parse params thr fmt scpt thread thr const char fmt Configuration Change This feature is available as of version 3 2 Parse scriptlet function parameters thr script thread fmt A format string that specifies the types of the arguments The variable..."
---

<a name="apis.scpt_parse_params"></a> 
## Name

scpt_parse_params — Parse scriptlet function parameters

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void **scpt_parse_params** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">fmt</var>`;
`<var class="pdparam">...</var>`;<a name="idp59170144"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

Parse scriptlet function parameters.

**<a name="idp59173024"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

script thread

</dd>

<dt>fmt</dt>

<dd>

A format string that specifies the types of the arguments.

</dd>

<dt>...</dt>

<dd>

The variable argument.

</dd>

</dl>

The format string can use the following placeholders:

*   `?` – The next placeholder is optional. If the argument is not present, then the corresponding variadic arguments will be skipped over unmodified, allowing you to initialize them to some default value.

*   `s` – A string parameter. Corresponds to the address of a const char * and the address of an int to receive the string and its length.

*   `i` – An integer parameter. Corresponds to the address of an integer to receive its value.

*   `d` – A double parameter. Corresponds to the address of a double to receive its value.

*   `o` – An object. Corresponds to a string representation of the type and a pointer to pointer to the type of the object.

*   `O` – An object plus a reference. Corresponds to a string representation of the type, a pointer to pointer to the type of the object, and a pointer to an integer to hold a reference to the object. This reference must be released by the caller at an appropriate time.

*   `c` – A closure. Corresponds to the address of an integer that holds the pinned reference. Use [scpt_push_ref](/momentum/3/3-api/apis-scpt-push-ref) to pass this back to Lua. Use [scpt_unpin_ref](/momentum/3/3-api/apis-scpt-unpin-ref) to allow it to be garbage collected.

*   `t` – A table. Corresponds to the address of an integer that holds the "acceptable index" of the table on the stack. The index will be set to `-1` if the parameter was marked as optional, it is present, and it is not a table.

*   `T` – A table. Corresponds to the address of an integer that holds the pinned reference. Use [scpt_push_ref](/momentum/3/3-api/apis-scpt-push-ref) to pass this back to Lua. Use [scpt_unpin_ref](/momentum/3/3-api/apis-scpt-unpin-ref) to allow it to be garbage collected.

*   `@O` – an object plus a reference. Corresponds to a string representation of the type, a pointer to pointer to the type of the object, and a pointer to a pointer to hold a reference to the object. This reference must be released by the caller at an appropriate time using lua_delrefobj().

*   `@c` – a closure. Corresponds to the address of a pointer that holds the pinned reference. Use lua_pushobjref() to pass this back to lua. Use lua_delrefobj() to allow it to be garbage collected.

*   `@T` – A table. Corresponds to the address of a pointer that holds the pinned reference. Use lua_pushobjref() to pass this back to lua. Use lua_delrefobj() to allow it to be garbage collected.

An error is raised if the parameters do not match the format string.

**<a name="idp59202016"></a> Return Value**

This function returns the previously set pointer value.

**<a name="idp59202960"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59204512"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")