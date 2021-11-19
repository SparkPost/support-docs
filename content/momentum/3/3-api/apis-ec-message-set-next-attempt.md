---
lastUpdated: "03/26/2020"
title: "ec_message_set_next_attempt"
description: "ec message set next attempt Determines and sets the next attempt time for the message int ec message set next attempt mess now ec message mess struct timeval now Determines and sets the next attempt time for the message mess A pointer to an ec message struct For documentation of..."
---

<a name="apis.ec_message_set_next_attempt"></a> 
## Name

ec_message_set_next_attempt — Determines and sets the next attempt time for the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_set_next_attempt** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">now</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`struct timeval * <var class="pdparam">now</var>`;<a name="idp57117408"></a> 
## Description

Determines and sets the next attempt time for the message.

**<a name="idp57118640"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct.

</dd>

</dl>

**<a name="idp57123824"></a> Return Values**

This function returns 1 on success. It will return 0 if the message has expired (see [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration)) or exceeded the max number of retries (see [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries)). It will also return 0 if the [never_retry](/momentum/3/3-reference/3-reference-conf-ref-never-retry) option was set to true.

**<a name="idp57127264"></a> Threading**

It is legal to call this function in any thread.