---
lastUpdated: "03/26/2020"
title: "swap_out_multi"
description: "swap out multi Swap out multiple messages int swap out multi head sp async message head Swap out multiple messages head A pointer to an sp async message struct For documentation of this data structure see Section 68 84 sp async message This function returns 1 for success and 0..."
---

<a name="apis.swap_out_multi"></a> 
## Name

swap_out_multi — Swap out multiple messages

## Synopsis

`#include "spool.h"`

| `int **swap_out_multi** (` | <var class="pdparam">head</var>`)`; |   |

`sp_async_message * <var class="pdparam">head</var>`;<a name="idp62693888"></a> 
## Description

Swap out multiple messages.

**<a name="idp62695088"></a> Parameters**

<dl class="variablelist">

<dt>head</dt>

<dd>

A pointer to an sp_async_message struct. For documentation of this data structure see [“sp_async_message”](/momentum/3/3-api/structs-sp-async-message)

</dd>

</dl>

**<a name="idp62698480"></a> Return Values**

This function returns `1` for success and `0` on failure.

**<a name="idp62700288"></a> Threading**

It is legal to call this function in any thread.