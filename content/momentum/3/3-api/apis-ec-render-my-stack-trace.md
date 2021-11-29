---
lastUpdated: "03/26/2020"
title: "ec_render_my_stack_trace"
description: "ec render my stack trace render a stack backtrace to a string void ec render my stack trace r start end string r int start int end This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_render_my_stack_trace"></a> 
## Name

ec_render_my_stack_trace — render a stack backtrace to a string

## Synopsis

`#include "debug_tools.h"`

| `void **ec_render_my_stack_trace** (` | <var class="pdparam">r</var>, |   |
|   | <var class="pdparam">start</var>, |   |
|   | <var class="pdparam">end</var>`)`; |   |

`string * <var class="pdparam">r</var>`;
`int <var class="pdparam">start</var>`;
`int <var class="pdparam">end</var>`;<a name="idp49861056"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

render a stack backtrace to a string

Renders a stack backtrace starting at frame start and going until frame end. Frame 0 is the caller's frame (i.e. the rendering function is skipped).

**<a name="idp49864528"></a> Parameters**

<dl class="variablelist">

<dt>string</dt>

<dd>

string to render to

</dd>

<dt>start</dt>

<dd>

start rendering this number of frames past our caller

</dd>

<dt>end</dt>

<dd>

stop rendering this number of frames past our caller

</dd>

</dl>