---
lastUpdated: "03/26/2020"
title: "ec_internal_inject2"
description: "ec internal inject 2 Enqueues an internally generated message void ec internal inject 2 mess now flags ec message mess struct timeval now int flags Enqueues an internally generated message Ensures that the message is correctly swapped and has a proper binding assignment mess A pointer to an ec message..."
---

<a name="apis.ec_internal_inject2"></a> 
## Name

ec_internal_inject2 — Enqueues an internally generated message

## Synopsis

`#include "soft_bounce.h"`

| `void **ec_internal_inject2** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp47958304"></a> 
## Description

Enqueues an internally generated message. Ensures that the message is correctly swapped and has a proper binding assignment.

**<a name="idp47959616"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>now</dt>

<dd>

A pointer to a `timeval struct`.

</dd>

<dt>flags</dt>

<dd>

An `int` parameter which is passed one or more of the following flags:

*   If flags includes EC_INJECT_SIGN then it will call out to message signing hooks.

*   If flags includes EC_INJECT_LOG then it will log a reception.

</dd>

</dl>

**<a name="idp47970000"></a> Return Values**

This function returns `void`.

**<a name="idp47971360"></a> Threading**

It is legal to call this function in any thread.