---
lastUpdated: "03/26/2020"
title: "sp_make_swap_out_job"
description: "sp make swap out job Create and return a job that will manage swap out processing ec async job sp make swap out job ac ctx mess samfunc info accept construct ac validate context ctx ec message mess sp async swapout samfunc samfunc void info This reference page was automatically..."
---

<a name="apis.sp_make_swap_out_job"></a> 
## Name

sp_make_swap_out_job — Create and return a job that will manage swap out processing

## Synopsis

`#include "sp_async.h"`

| `ec_async_job * **sp_make_swap_out_job** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">samfunc</var>, |   |
|   | <var class="pdparam">info</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`ec_message * <var class="pdparam">mess</var>`;
`sp_async_swapout_samfunc <var class="pdparam">samfunc</var>`;
`void * <var class="pdparam">info</var>`;<a name="idp52001968"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Create and return a job that will manage swap out processing.

Allocates and fills out a job that will perform internal swap out processing, and that will call back to the supplied samfunc to expand the recipient list to multiple messages.

The returned job is set to run in the SWAPOUT pool and has no completion options set. The job will be automatically freed on completion.

The intended use is for the caller to update the completion options, for example, to arrange for resumption of some other processing.

**<a name="idp52006688"></a> Parameters**

<dl class="variablelist">

<dt>ac</dt>

<dd>

the accept construct for the session

</dd>

<dt>ctx</dt>

<dd>

the validate_context for the session

</dd>

<dt>mess</dt>

<dd>

the message (may be NULL)

</dd>

<dt>samfunc</dt>

<dd>

an optional function to use to expand batched recipients

</dd>

<dt>info</dt>

<dd>

a parameter that will be passed to the samfunc

</dd>

</dl>

**<a name="idp52016832"></a> Return Values**

an ec_async_job or NULL if insufficient memory was available.