---
lastUpdated: "03/26/2020"
title: "mailq_insert_active"
description: "mailq insert active int core mailq insert active closure mq msg void closure mail queue mq ec message msg When a message is attempted it is removed from the delayed queue and inserted into the active queue for a given domain This is done by invoking this hook The default..."
---

<a name="hooks.core.mailq_insert_active"></a> 
## Name

mailq_insert_active

## Synopsis

`#include "hooks/core/mailq_insert_active.h"`

| `int **core_mailq_insert_active** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mq</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`mail_queue * <var class="pdparam">mq</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp35976160"></a> 
## Description

When a message is attempted it is removed from the delayed queue and inserted into the active queue for a given domain. This is done by invoking this hook. The default hook behavior will find the appropriate active queue within *`mq`* for the *`msg`* based on the message binding and then insert it. If this action is subverted by a new callee, then 0 should be returned to avoid a terminal error within Momentum.

**<a name="idp35978640"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>mq</dt>

<dd>

A mail queue. For documentation of this data structure see [“mail_queue”](/momentum/3/3-api/structs-mail-queue)

</dd>

<dt>msg</dt>

<dd>

An ec_message. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp36629744"></a> Return Values**

Returning 0 will cause subsequent hooks to not be called.

**<a name="idp36630688"></a> Threading**

nn This hook will be called in the `Scheduler` thread.