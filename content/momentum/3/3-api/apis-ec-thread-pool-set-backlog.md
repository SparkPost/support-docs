---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_set_backlog"
description: "ec thread pool set backlog set the maximum backlog for an existing thread pool int ec thread pool set backlog jobclass backlog int jobclass size t backlog This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.ec_thread_pool_set_backlog"></a> 
## Name

ec_thread_pool_set_backlog — set the maximum backlog for an existing thread pool

## Synopsis

`#include "ec_thread_pool.h"`

| `int **ec_thread_pool_set_backlog** (` | <var class="pdparam">jobclass</var>, |   |
|   | <var class="pdparam">backlog</var>`)`; |   |

`int <var class="pdparam">jobclass</var>`;
`size_t <var class="pdparam">backlog</var>`;<a name="idp63385632"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

set the maximum backlog for an existing thread pool.

Can only be called before the pool has spun up its threads.

**<a name="idp63389008"></a> Parameters**

<dl class="variablelist">

<dt>jobclass</dt>

<dd>

the thread pool id

</dd>

<dt>backlog</dt>

<dd>

the backlog size to use, in jobs.

</dd>

</dl>

**<a name="idp63393600"></a> Return Values**

returns 0 on failure and 1 on success.