---
lastUpdated: "03/26/2020"
title: "ec_message_blobject_remove"
description: "ec message blobject remove Remove a blobject tag int ec message blobject remove msg key ec message msg const char key Remove a blobject tag If the object is found in the hash delete the reference to it msg A pointer to an ec message struct For documentation of this..."
---

<a name="apis.ec_message_blobject_remove"></a> 
## Name

ec_message_blobject_remove — Remove a blobject tag

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_blobject_remove** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp47834928"></a> 
## Description

Remove a blobject tag. If the object is found in the hash, delete the reference to it.

**<a name="idp47836208"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>key</dt>

<dd>

Identifies the blobject to remove.

</dd>

</dl>

**<a name="idp47841392"></a> Return Values**

Returns 1 if the object was found and removed, or 0 otherwise.

**<a name="idp47842352"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47843456"></a> 
## See Also

[ec_message_blobject_get](/momentum/3/3-api/apis-ec-message-blobject-get) and [ec_message_blobject_store](/momentum/3/3-api/apis-ec-message-blobject-store).