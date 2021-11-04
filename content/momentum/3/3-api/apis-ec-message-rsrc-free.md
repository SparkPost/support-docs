---
lastUpdated: "03/26/2020"
title: "ec_message_rsrc_free"
description: "ec message rsrc free Allows the underlying operating system to reclaim memory and objects associated with the given resource void ec message rsrc free resource ec message resource t resource This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.ec_message_rsrc_free"></a> 
## Name

ec_message_rsrc_free — Allows the underlying operating system to reclaim memory and objects associated with the given resource

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_rsrc_free** (` | <var class="pdparam">resource</var>`)`; |   |

`ec_message_resource_t * <var class="pdparam">resource</var>`;<a name="idp56842288"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Allows the underlying operating system to reclaim memory and objects associated with the given resource.

This is a blocking operation. This is used for faster resource destruction in the underlying spool subsystem. The state of the resource store in relation to the in-memory state of the resource is undefined.

**<a name="idp56845904"></a> Parameters**

<dl class="variablelist">

<dt>resource</dt>

<dd>

the resource to destruct

</dd>

</dl>