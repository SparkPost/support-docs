---
lastUpdated: "03/26/2020"
title: "esmtp_message_factory_state"
description: "esmtp message factory state Determine the state of a message const char esmtp message factory state state int state Determine the state of a message state The integer representation of the message state On success the return value will be one of the following On failure unknown is returned It..."
---

<a name="apis.esmtp_message_factory_state"></a> 
## Name

esmtp_message_factory_state — Determine the state of a message

## Synopsis

`#include "esmtp_factory.h"`

| `(const char *) **esmtp_message_factory_state** (` | <var class="pdparam">state</var>`)`; |   |

`int <var class="pdparam">state</var>`;<a name="idp61732736"></a> 
## Description

Determine the state of a message.

**<a name="idp61733952"></a> Parameters**

<dl class="variablelist">

<dt>state</dt>

<dd>

The integer representation of the message state.

</dd>

</dl>

**<a name="idp61737168"></a> Return Values**

On success the return value will be one of the following:

```
const char *esmtp_states[] = {
  "just connected",              /* 0 */
  "sending banner",              /* 1 */
  "awaiting ehlo/helo",          /* 2 */
  "sending ehlo/helo response",  /* 3 */
  "awaiting mailfrom",           /* 4 */
  "sending mailfrom response",   /* 5 */
  "awaiting rcptto",             /* 6 */
  "sending rcptto response",     /* 7 */
  "data phase",                  /* 8 */
  "reading body",                /* 9 */
  "sending body response",       /* 10 */
  "async body handler",          /* 11 */
  "async body response",         /* 12 */
  "relaying denied",             /* 13 */
  "extension 1",                 /* 14 */
  "extension 2",                 /* 15 */
  "extension 3",                 /* 16 */
  "extension 4",                 /* 17 */
  "concurrency limit",           /* 18 */
  "rcptto list response",        /* 19 */
  "rcptto list final response",  /* 20 */
  "esmtp setup phase"            /* 21 */
};
```

On failure, `unknown` is returned.

**<a name="idp61740656"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp61742512"></a> 
## See Also

[“message_construct”](/momentum/3/3-api/structs-message-construct)