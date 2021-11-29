---
lastUpdated: "03/26/2020"
title: "ec_message_blobject_store"
description: "ec message blobject store Tag a message with a blobject void ec message blobject store msg key obj ec message msg const char key ec blobject obj Tag a message with a blobject using a key The object reference will be held in memory for the entire lifetime of the..."
---

<a name="apis.ec_message_blobject_store"></a> 
## Name

ec_message_blobject_store — Tag a message with a blobject

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_blobject_store** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">obj</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">key</var>`;
`ec_blobject * <var class="pdparam">obj</var>`;<a name="idp47855584"></a> 
## Description

Tag a message with a blobject using a key. The object reference will be held in memory for the entire lifetime of the message, but will not survive a restart of the server. This facility allows referencing arbitrary context alongside the message, but should be used sparingly to avoid excessive memory usage; there is no way to discard the objects and reinstate them if we decide to trim back resource usage for a given message.

**<a name="idp47857232"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

The message to tag. A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>key</dt>

<dd>

Identifies the string used to tag the message.

</dd>

<dt>obj</dt>

<dd>

The object to store. A pointer to an ec_blobject struct. For documentation of this data structure see [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject). The message will take a reference on the object while it is stored in the hash. If an object is already present with the same key, its reference will be deleted and the new object will replace it.

</dd>

</dl>

**<a name="idp47865168"></a> Return Values**

This function returns void.

**<a name="idp47866080"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47867184"></a> 
## See Also

[ec_message_blobject_get](/momentum/3/3-api/apis-ec-message-blobject-get) and [ec_message_blobject_remove](/momentum/3/3-api/apis-ec-message-blobject-remove).