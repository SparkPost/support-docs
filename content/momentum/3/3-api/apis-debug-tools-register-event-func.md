---
lastUpdated: "03/26/2020"
title: "debug_tools_register_event_func"
description: "debug tools register event func Register an event function for debugging void debug tools register event func fptr name type dumper Event Func fptr const char name const char type debug tools event dumper dumper Register an event function for debugging The following macro may be helpful define insert func..."
---

<a name="apis.debug_tools_register_event_func"></a> 
## Name

debug_tools_register_event_func — Register an event function for debugging

## Synopsis

`#include "debug_tools.h"`

| `void **debug_tools_register_event_func** (` | <var class="pdparam">fptr</var>, |   |
|   | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">type</var>, |   |
|   | <var class="pdparam">dumper</var>`)`; |   |

`EventFunc <var class="pdparam">fptr</var>`;
`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">type</var>`;
`debug_tools_event_dumper <var class="pdparam">dumper</var>`;<a name="idp49783696"></a> 
## Description

Register an event function for debugging.

The following macro may be helpful:

`#define insert_func_details(a,b,c,d) debug_tools_register_event_func((EventFunc)a, b, c, d)`

A sample call:

`debug_tools_register_event_func(log_heartbeat, "log_hearbeat", "ec_logger", NULL);`

**<a name="idp49787808"></a> Parameters**

<dl class="variablelist">

<dt>fptr</dt>

<dd>

An `EventFunc` function pointer. The following typedef applies to this data type:

`typedef int (*EventFunc) (struct _Event * event, int eventtype, void *closure, struct timeval * now);`

</dd>

<dt>name</dt>

<dd>

Name of the event function.

</dd>

<dt>type</dt>

<dd>

A type, such as a module name.

</dd>

<dt>dumper</dt>

<dd>

A function pointer. The following typedef applies to this data type:

`typedef void (*debug_tools_event_dumper)(string *output, Event *e);`

</dd>

</dl>

**<a name="idp49798576"></a> Return Values**

This function returns `void`.

**<a name="idp49799936"></a> Threading**

It is *only* legal to call this function in the `Scheduler` thread.