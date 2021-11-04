---
lastUpdated: "03/26/2020"
title: "ec_shutdown_ex"
description: "ec is shutting down Initiates a shutdown of the ecelerity process void ec shutdown ex die ret file lineno int die int ret const char file int lineno Initiates a shutdown of the ecelerity process die Passing a non zero integer value for die indicates that this function was invoked..."
---

<a name="apis.ec_shutdown_ex"></a> 
## Name

ec_is_shutting_down — Initiates a shutdown of the ecelerity process

## Synopsis

`#include "control.h"`

| `void **ec_shutdown_ex** (` | <var class="pdparam">die</var>, |   |
|   | <var class="pdparam">ret</var>, |   |
|   | <var class="pdparam">file</var>, |   |
|   | <var class="pdparam">lineno</var>`)`; |   |

`int <var class="pdparam">die</var>`;
`int <var class="pdparam">ret</var>`;
`const char * <var class="pdparam">file</var>`;
`int <var class="pdparam">lineno</var>`;<a name="idp49354192"></a> 
## Description

Initiates a shutdown of the ecelerity process.

**<a name="idp49355424"></a> Parameters**

<dl class="variablelist">

<dt>die</dt>

<dd>

Passing a non-zero integer value for `die` indicates that this function was invoked from a signal handler.

</dd>

<dt>ret</dt>

<dd>

The value that will be passed to the system `exit()` function.

</dd>

<dt>file</dt>

<dd>

The filename that invoked the call.

</dd>

<dt>lineno</dt>

<dd>

The line number of the file that invoked the call.

</dd>

</dl>

**<a name="idp49364688"></a> Return Values**

This function returns void.

**<a name="idp49365600"></a> Threading**

This function may only be called in the `Scheduler` thread.

<a name="idp49367136"></a> 
## See Also

[ec_is_shutting_down](/momentum/3/3-api/apis-ec-is-shutting-down).