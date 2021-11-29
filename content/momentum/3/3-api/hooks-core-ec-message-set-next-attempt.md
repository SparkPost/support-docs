---
lastUpdated: "03/26/2020"
title: "ec_message_set_next_attempt"
description: "ec message set next attempt Allows modules to set the next attempt time of a message int core ec message set next attempt closure msg now rv void closure ec message msg struct timeval now int rv Allows modules to set the next attempt time of a message closure A..."
---

<a name="hooks.core.ec_message_set_next_attempt"></a> 
## Name

ec_message_set_next_attempt — Allows modules to set the next attempt time of a message

## Synopsis

`#include "hooks/core/ec_message_set_next_attempt.h"`

| `int **core_ec_message_set_next_attempt** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int * <var class="pdparam">rv</var>`;<a name="idp46351904"></a> 
## Description

Allows modules to set the next attempt time of a message.

**<a name="idp46353136"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An `ec_message` struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>now</dt>

<dd>

A `timeval` struct.

</dd>

<dt>rv</dt>

<dd>

A pointer to an `int`. If the provider function sets the expiration time, then set `*rv` to `1` indicating success or `0` indicating failure.

</dd>

</dl>

**<a name="idp28196192"></a> Return Values**

If you set the expiration time, then your provider function should return `1`. Otherwise, return `0` (and you will get the default behavior).

**<a name="idp28198096"></a> Threading**

This hook will be called in the `Scheduler` thread.