---
lastUpdated: "03/26/2020"
title: "ec_adaptive_remove_suspension"
description: "ec adaptive remove suspension function to remove one suspension from backstore int ec adaptive remove suspension spaths prefd nodename bdr err buf buf len const char spaths int prefd const char nodename ec adaptive bdr bdr char err buf size t buf len This reference page was automatically generated from..."
---

<a name="apis.ec_adaptive_remove_suspension"></a> 
## Name

ec_adaptive_remove_suspension — function to remove one suspension from backstore

## Synopsis

`#include "modules/generic/adaptive_replicate.h"`

| `int **ec_adaptive_remove_suspension** (` | <var class="pdparam">spaths</var>, |   |
|   | <var class="pdparam">prefd</var>, |   |
|   | <var class="pdparam">nodename</var>, |   |
|   | <var class="pdparam">bdr</var>, |   |
|   | <var class="pdparam">err_buf</var>, |   |
|   | <var class="pdparam">buf_len</var>`)`; |   |

`const char ** <var class="pdparam">spaths</var>`;
`int * <var class="pdparam">prefd</var>`;
`const char * <var class="pdparam">nodename</var>`;
`ec_adaptive_bdr * <var class="pdparam">bdr</var>`;
`char * <var class="pdparam">err_buf</var>`;
`size_t <var class="pdparam">buf_len</var>`;<a name="idp46719280"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

function to remove one suspension from backstore.

**<a name="idp46721712"></a> Parameters**

<dl class="variablelist">

<dt>spaths</dt>

<dd>

- backstore server paths

</dd>

<dt>prefd</dt>

<dd>

- the prefd server index

</dd>

<dt>nodename</dt>

<dd>

- the node name

</dd>

<dt>bdr</dt>

<dd>

- binding/domain record

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

**<a name="idp46732720"></a> Return Values**

1 - successful; 0 - failure

**Configuration Change. ** This feature is available starting from Momentum 3.3.