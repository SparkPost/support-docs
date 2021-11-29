---
lastUpdated: "03/26/2020"
title: "ec_message_blobject_get"
description: "ec message blobject get Retrieve a blobject tag ec blobject ec message blobject get msg key ec message msg const char key Retrieve a blobject tag using the key If the object is found it adds a reference to it and returns the ec blobject address to the caller The..."
---

<a name="apis.ec_message_blobject_get"></a> 
## Name

ec_message_blobject_get — Retrieve a blobject tag

## Synopsis

`#include "ec_message.h"`

| `ec_blobject * **ec_message_blobject_get** (` | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp47814208"></a> 
## Description

Retrieve a blobject tag using the key. If the object is found, it adds a reference to it and returns the ec_blobject address to the caller. The caller is responsible for delrefing it when done.

**<a name="idp47815600"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>key</dt>

<dd>

Identifies the blobject to retrieve.

</dd>

</dl>

**<a name="idp47820784"></a> Return Values**

A pointer to an ec_blobject struct. For documentation of this data structure see [“ec_blobject”](/momentum/3/3-api/structs-ec-blobject) Returns the address of the blobject if found, or NULL otherwise. If an object is returned, you own a reference to it and must delete the reference when you are finished using it.

**<a name="idp47822512"></a> Threading**

It is legal to call this function in any thread.

<a name="idp47823616"></a> 
## See Also

[ec_message_blobject_store](/momentum/3/3-api/apis-ec-message-blobject-store) and [ec_message_blobject_remove](/momentum/3/3-api/apis-ec-message-blobject-remove).