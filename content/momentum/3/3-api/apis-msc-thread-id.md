---
lastUpdated: "03/26/2020"
title: "msc_thread_id"
description: "msc thread id Generate a thread id according the following format msg id in spool name format node name suffix void msc thread id mid suffix thread id thread id len message id mid const char suffix char thread id int thread id len This reference page was automatically generated..."
---

<a name="apis.msc_thread_id"></a> 
## Name

msc_thread_id — Generate a thread_id according the following format: [msg_id in spool name format]::[node name]:[suffix]

## Synopsis

`#include "modules/logging/ec_msc_logger.h"`

| `void **msc_thread_id** (` | <var class="pdparam">mid</var>, |   |
|   | <var class="pdparam">suffix</var>, |   |
|   | <var class="pdparam">thread_id</var>, |   |
|   | <var class="pdparam">thread_id_len</var>`)`; |   |

`message_id <var class="pdparam">mid</var>`;
`const char * <var class="pdparam">suffix</var>`;
`char * <var class="pdparam">thread_id</var>`;
`int <var class="pdparam">thread_id_len</var>`;<a name="idp57648656"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Generate a thread_id according the following format: [msg_id in spool name format]::[node name]:[suffix].

[node name] will get its value from cluster configuration if available. In a none-cluster setting, it will use ENV("EC_NODE_NAME") if available otherwise use "default".

**<a name="idp57652224"></a> Parameters**

<dl class="variablelist">

<dt>mid</dt>

<dd>

- message id

</dd>

<dt>suffix</dt>

<dd>

- the suffix to be appended to thread_id.

</dd>

<dt>thread_id</dt>

<dd>

- char buffer to hold the generated thread_id.

</dd>

<dt>thread_id_len</dt>

<dd>

- the buffer size of thread_id.

</dd>

</dl>

**Configuration Change. ** This feature is available as of version 3.2.