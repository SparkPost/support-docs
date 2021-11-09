---
lastUpdated: "03/26/2020"
title: "pre_mailq_message_requeue"
description: "pre mailq message requeue Invoked immediately prior to a message requeue action caused by a delivery failure void core pre mailq message requeue closure msg now void closure ec message msg struct timeval now Functions registered at this hook will be invoked immediately prior to a message requeue action caused..."
---

<a name="hooks.core.pre_mailq_message_requeue"></a> 
## Name

pre_mailq_message_requeue — Invoked immediately prior to a message requeue action caused by a delivery failure.

## Synopsis

`#include "hooks/core/pre_mailq_message_requeue.h"`

| `void **core_pre_mailq_message_requeue** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp29674096"></a> 
## Description

Functions registered at this hook will be invoked immediately prior to a message requeue action caused by a delivery failure.

**<a name="idp29675408"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An ec_message. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>now</dt>

<dd>

The current scheduler time.

</dd>

</dl>

**<a name="idp29682336"></a> Return Values**

This hook returns `void`.

**<a name="idp29683696"></a> Threading**

This hook will be called in the `Scheduler` thread.

<a name="idp29685216"></a> 
## See Also

[msg_dispose](/momentum/3/3-api/hooks-generic-delivery-msg-dispose)