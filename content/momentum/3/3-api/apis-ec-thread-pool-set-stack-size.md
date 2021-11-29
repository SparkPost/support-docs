---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_set_stack_size"
description: "ec thread pool set stack size set the stack size for an existing thread pool int ec thread pool set stack size jobclass size int jobclass size t size This reference page was automatically generated from functions found in the header files in the development branch The function described here..."
---

<a name="apis.ec_thread_pool_set_stack_size"></a> 
## Name

ec_thread_pool_set_stack_size — set the stack size for an existing thread pool

## Synopsis

`#include "ec_thread_pool.h"`

| `int **ec_thread_pool_set_stack_size** (` | <var class="pdparam">jobclass</var>, |   |
|   | <var class="pdparam">size</var>`)`; |   |

`int <var class="pdparam">jobclass</var>`;
`size_t <var class="pdparam">size</var>`;<a name="idp63403760"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set the stack size for an existing thread pool.

The stack size will take effect for threads that are spawned after this call; it is not possible to change the stack size of existing threads.

**<a name="idp63407232"></a> Parameters**

<dl class="variablelist">

<dt>jobclass</dt>

<dd>

the thread pool id

</dd>

<dt>size</dt>

<dd>

the stack size to use, in bytes.

</dd>

</dl>

**<a name="idp63411824"></a> Return Values**

returns 0 on failure and 1 on success.