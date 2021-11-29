---
lastUpdated: "03/26/2020"
title: "ec_message_enqueue"
description: "ec message enqueue This hook is called whenever a message is passed to the ec message enqueue API int core ec message enqueue closure msg now void closure ec message msg struct timeval now This hook is called whenever a message is passed to the ec message enqueue API closure..."
---

<a name="hooks.core.ec_message_enqueue"></a> 
## Name

ec_message_enqueue — This hook is called whenever a message is passed to the `ec_message_enqueue` API

## Synopsis

`#include "hooks/core/ec_message_enqueue.h"`

| `int **core_ec_message_enqueue** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp38188384"></a> 
## Description

This hook is called whenever a message is passed to the `ec_message_enqueue` API.

**<a name="idp44606752"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An `ec_message`. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>now</dt>

<dd>

A `timeval` struct.

</dd>

</dl>

**<a name="idp44614544"></a> Return Values**

If you return `EC_MESSAGE_ENQUEUE_HOOK_CONT`, then the next hook in the chain is called. If `EC_MESSAGE_ENQUEUE_HOOK_CONT` is the return value of the last hook in the chain, then the default [ec_message_enqueue](/momentum/3/3-api/apis-ec-message-enqueue) action will be taken.

If you return `EC_MESSAGE_ENQUEUE_HOOK_OK`, then subsequent hooks and the default core behavior are skipped, and [ec_message_enqueue](/momentum/3/3-api/apis-ec-message-enqueue) will return and indicate success to its caller. By returning this value, the hook is taking ownership of the message and it has responsibility for cleaning up or otherwise dealing with the message.

If you return `EC_MESSAGE_ENQUEUE_HOOK_ERR`, then subsequent hooks and the default core behavior are skipped, and [ec_message_enqueue](/momentum/3/3-api/apis-ec-message-enqueue) will return and indicate failure to its caller. By returning this value, the hook is taking ownership of the message and it has responsibility for cleaning up or otherwise dealing with the message.

**<a name="idp44620256"></a> Threading**

This hook will be called in the `Scheduler` thread.