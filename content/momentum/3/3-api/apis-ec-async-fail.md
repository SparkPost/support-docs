---
lastUpdated: "03/26/2020"
title: "ec_async_fail"
description: "ec async fail Fails a message and removes it from the system void ec async fail vm force async ec message vm int force async Fails a message and removes it from the system Removes the message from the spool logs a permanent failure and frees the message After calling..."
---

<a name="apis.ec_async_fail"></a> 
## Name

ec_async_fail — Fails a message and removes it from the system

## Synopsis

`#include "sp_unlink.h"`

| `void **ec_async_fail** (` | <var class="pdparam">vm</var>, |   |
|   | <var class="pdparam">force_async</var>`)`; |   |

`ec_message * <var class="pdparam">vm</var>`;
`int <var class="pdparam">force_async</var>`;<a name="idp55163856"></a> 
## Description

Fails a message and removes it from the system.

Removes the message from the spool, logs a permanent failure and frees the message. After calling this function, you should assume that the message has been freed and should not be touched.

**<a name="idp55165728"></a> Parameters**

<dl class="variablelist">

<dt>vm</dt>

<dd>

A pointer to an ec_message struct (the source message). For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp55169104"></a> Return Values**

This function returns `void`.

**<a name="idp55170464"></a> Threading**

It is legal to call this function in the `Scheduler` thread.