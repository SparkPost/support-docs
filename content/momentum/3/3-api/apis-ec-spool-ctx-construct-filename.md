---
lastUpdated: "03/26/2020"
title: "ec_spool_ctx_construct_filename"
description: "ec spool ctx construct filename Create a file name for the specified message int ec spool ctx construct filename ctx id filename ec spool ctx ctx message id id char filename Create a file name for the specified message ctx The spool context id The id of the message filename..."
---

<a name="apis.ec_spool_ctx_construct_filename"></a> 
## Name

ec_spool_ctx_construct_filename — Create a file name for the specified message

## Synopsis

`#include "spool.h"`

| `int **ec_spool_ctx_construct_filename** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">id</var>, |   |
|   | <var class="pdparam">filename</var>`)`; |   |

`ec_spool_ctx * <var class="pdparam">ctx</var>`;
`message_id * <var class="pdparam">id</var>`;
`char * <var class="pdparam">filename</var>`;<a name="idp62262160"></a> 
## Description

Create a file name for the specified message.

**<a name="idp62263392"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The spool context.

</dd>

<dt>id</dt>

<dd>

The id of the message.

</dd>

<dt>filename</dt>

<dd>

The file name. This buffer must already be allocated by the user and must be at least `MAXPATHLEN` bytes.

</dd>

</dl>

**<a name="idp62270304"></a> Return Values**

This function returns the length of the file name.

**<a name="idp62271248"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62272352"></a> 
## See Also

[“ec_spool_ctx”](/momentum/3/3-api/structs-ec-spool-ctx)