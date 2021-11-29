---
lastUpdated: "03/26/2020"
title: "sp_sync_close"
description: "sp sync close Close the specified file descriptor and optionally dispatch the callback int sp sync close fd wants shutdown int fd int wants shutdown Close the specified file descriptor and optionally dispatch the callback fd The file descriptor wants shutdown Set this option to 0 or 1 depending upon..."
---

<a name="apis.sp_sync_close"></a> 
## Name

sp_sync_close — Close the specified file descriptor, and optionally dispatch the callback

## Synopsis

`#include "sp_async.h"`

| `int **sp_sync_close** (` | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">wants_shutdown</var>`)`; |   |

`int <var class="pdparam">fd</var>`;
`int <var class="pdparam">wants_shutdown</var>`;<a name="idp52026896"></a> 
## Description

Close the specified file descriptor, and optionally dispatch the callback.

**<a name="idp52028160"></a> Parameters**

<dl class="variablelist">

<dt>fd</dt>

<dd>

The file descriptor.

</dd>

<dt>wants_shutdown</dt>

<dd>

Set this option to `0` or `1` depending upon whether you need to execute a callback function.

</dd>

</dl>

**<a name="idp52033664"></a> Return Value**

This function returns an int but this value does not seem to be used.

**<a name="idp52034624"></a> Threading**

It is legal to call this function in any thread.