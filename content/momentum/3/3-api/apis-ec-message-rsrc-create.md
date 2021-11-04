---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_create"
description: "ec message rsrc create This creates an empty container for a resource identified with name int ec message rsrc create message name ec message message const char name This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.ec_message_rsrc_create"></a> 
## Name

ec_message_rsrc_create — This creates an empty container for a resource identified with name

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_rsrc_create** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">name</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`const char * <var class="pdparam">name</var>`;<a name="idp56788096"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

This creates an empty container for a resource identified with name.

The resource container will be created with state EC_MESSAGE_RSRC_SWAPPED.

**<a name="idp56791520"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

the message which the resource is associated with

</dd>

<dt>name</dt>

<dd>

the name of the resource to be created

</dd>

</dl>