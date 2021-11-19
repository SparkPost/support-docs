---
lastUpdated: "03/26/2020"
title: "debug_tools_init"
description: "debug tools init initializes the debug tools layer void debug tools init argv 0 char argv 0 This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of Momentum and may change..."
---

<a name="apis.debug_tools_init"></a> 
## Name

debug_tools_init — initializes the debug_tools layer

## Synopsis

`#include "debug_tools.h"`

| `void **debug_tools_init** (` | <var class="pdparam">argv0</var>`)`; |   |

`char * <var class="pdparam">argv0</var>`;<a name="idp49766320"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

initializes the debug_tools layer.

Registers crash handlers such that a trace file will be generated in the event of a fault.

**<a name="idp49769728"></a> Parameters**

<dl class="variablelist">

<dt>argv0</dt>

<dd>

the executable name

</dd>

</dl>

Note that the executable name is unused start with Momentum 3.5.0