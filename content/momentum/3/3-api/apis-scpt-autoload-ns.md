---
lastUpdated: "03/26/2020"
title: "scpt_autoload_ns"
description: "scpt autoload ns Wire up autoload items just in time int scpt autoload ns thr name space scpt thread thr const char name space Wire up autoload items just in time Call this from an index function to perform just in time registration of global constants and other registered items..."
---

<a name="apis.scpt_autoload_ns"></a> 
## Name

scpt_autoload_ns — Wire up autoload items, just in time

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_autoload_ns** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">name_space</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">name_space</var>`;<a name="idp58984224"></a> 
## Description

Wire up autoload items, just in time.

Call this from an __index function to perform just-in-time registration of global constants and other registered items.

This reduces the initial set up time for a scriptlet VM, at the cost of an extra couple of hash lookups the first time each of these constants is accessed.

**<a name="idp58986624"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The Lua VM state. For more information see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>name_space</dt>

<dd>

The name space.

</dd>

</dl>

**<a name="idp58991744"></a> Return Value**

This function returns `1` if any work is performed; Otherwise it returns `0`.

**<a name="idp58993584"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58995136"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")