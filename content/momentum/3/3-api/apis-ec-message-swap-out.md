---
lastUpdated: "03/26/2020"
title: "ec_message_swap_out"
description: "ec message swap out cause a message to be written to disk int ec message swap out mess refs flags ec message mess ec message refs int flags This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_message_swap_out"></a> 
## Name

ec_message_swap_out — cause a message to be written to disk

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_swap_out** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">refs</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`ec_message * <var class="pdparam">refs</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp57214464"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

cause a message to be written to disk.

If flags includes EC_MSG_SWAP_OUT_DROP_BODY, then the resources used to reference the message contents will be released after the message has been saved to disk.

If refs is not NULL, then it is assumed to be a message that shares the same content as mess; the underlying IO system may then employ optimizations for storing the message, such as filesystem hard linking.

**<a name="idp57218624"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

the message

</dd>

<dt>refs</dt>

<dd>

referenced message, may be NULL

</dd>

<dt>flags</dt>

<dd>

EC_MSG_SWAP_OUT_XXX

</dd>

</dl>

**<a name="idp57225024"></a> Return Values**

Returns EC_MSG_SWAP_RESULT_ERR (0) on error, EC_MSG_SWAP_RESULT_COMPLETE (1) on success.

### Note

This function may induce IO or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.

**<a name="idp57227696"></a> See Also**

[ec_message_swap_out_meta](/momentum/3/3-api/apis-ec-message-swap-out-meta)