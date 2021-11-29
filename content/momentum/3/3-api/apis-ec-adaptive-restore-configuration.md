---
lastUpdated: "03/26/2020"
title: "ec_adaptive_restore_configuration"
description: "ec adaptive restore configuration function to refresh parameters from backstore int ec adaptive restore configuration spaths prefd is global nodename ids err buf buf len const char spaths int prefd int is global const char nodename char ids char err buf size t buf len This reference page was automatically..."
---

<a name="apis.ec_adaptive_restore_configuration"></a> 
## Name

ec_adaptive_restore_configuration — function to refresh parameters from backstore

## Synopsis

`#include "modules/generic/adaptive_replicate.h"`

| `int **ec_adaptive_restore_configuration** (` | <var class="pdparam">spaths</var>, |   |
|   | <var class="pdparam">prefd</var>, |   |
|   | <var class="pdparam">is_global</var>, |   |
|   | <var class="pdparam">nodename</var>, |   |
|   | <var class="pdparam">ids</var>, |   |
|   | <var class="pdparam">err_buf</var>, |   |
|   | <var class="pdparam">buf_len</var>`)`; |   |

`const char ** <var class="pdparam">spaths</var>`;
`int * <var class="pdparam">prefd</var>`;
`int <var class="pdparam">is_global</var>`;
`const char * <var class="pdparam">nodename</var>`;
`char * <var class="pdparam">ids</var>`;
`char * <var class="pdparam">err_buf</var>`;
`size_t <var class="pdparam">buf_len</var>`;<a name="idp46748192"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

function to refresh parameters from backstore.

**<a name="idp46751072"></a> Parameters**

<dl class="variablelist">

<dt>spaths</dt>

<dd>

- backstore server paths

</dd>

<dt>prefd</dt>

<dd>

- the prefd server index - indicate if the entrys are global - the local nodename

</dd>

<dt>ids</dt>

<dd>

- the IDs of the entry to be restored. Space separated list

</dd>

<dt>err_buf</dt>

<dd>

- if provided, error message will be written to it.

</dd>

<dt>err_len</dt>

<dd>

- the size of error buffer.

</dd>

</dl>

**<a name="idp46761280"></a> Return Values**

1 - successful; 0 - failure

**Configuration Change. ** This feature is available starting from Momentum 3.3.