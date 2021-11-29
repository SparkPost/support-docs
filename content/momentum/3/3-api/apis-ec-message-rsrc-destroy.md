---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_destroy"
description: "ec message rsrc destroy Removes the resource with the given name from the message in memory resource list and then passes the resource to ec message rsrc free void ec message rsrc destroy message name ec message message const char name This reference page was automatically generated from functions found..."
---

<a name="apis.ec_message_rsrc_destroy"></a> 
## Name

ec_message_rsrc_destroy — Removes the resource with the given name from the message in-memory resource list and then passes the resource to ec_message_rsrc_free

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_rsrc_destroy** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp56805488"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Removes the resource with the given name from the message in-memory resource list and then passes the resource to ec_message_rsrc_free.

If name is NULL then all resources are destroyed. The state of the store in relation to the in-memory state of the resource is undefined.

**<a name="idp56809008"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message the resource is associated with

</dd>

<dt>name</dt>

<dd>

the name of the resource to destroy

</dd>

</dl>