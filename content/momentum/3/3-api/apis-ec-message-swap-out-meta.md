---
lastUpdated: "03/26/2020"
title: "ec_message_swap_out_meta"
description: "ec message swap out meta Write message meta data to disk int ec message swap out meta mess force ec message mess int force Write message meta data to disk mess A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec message..."
---

<a name="apis.ec_message_swap_out_meta"></a> 
## Name

ec_message_swap_out_meta — Write message meta data to disk

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_swap_out_meta** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">force</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`int <var class="pdparam">force</var>`;<a name="idp57238224"></a> 
## Description

Write message meta data to disk.

**<a name="idp57239440"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>force</dt>

<dd>

An integer indicating whether or not to force (`1`) the swap out.

</dd>

</dl>

**<a name="idp57245136"></a> Return Values**

Returns one of EC_MSG_SWAP_RESULT_ERR, EC_MSG_SWAP_RESULT_COMPLETE or EC_MSG_SWAP_RESULT_PARTIAL.

*   `EC_MSG_SWAP_RESULT_ERR (0)` on error.

*   `EC_MSG_SWAP_RESULT_COMPLETE (1)` on success.

*   `EC_MSG_SWAP_RESULT_PARTIAL (2) if the swap out was incomplete.`

**<a name="idp57250704"></a> Threading**

It is legal to call this function in any thread. However, as this may block the caller, it should not be called from the Scheduler Thread.

### Note

This function may induce IO or otherwise block the caller. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.