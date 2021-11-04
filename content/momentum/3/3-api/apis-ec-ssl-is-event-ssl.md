---
lastUpdated: "03/26/2020"
title: "ec_ssl_is_event_ssl"
description: "ec ssl is event ssl Determine whether an event is SSL related void ec ssl is event ssl e Event e Determine whether an event is SSL related e An Event This function returns 1 if the event is SSL related and 0 if it is not It is legal..."
---

<a name="apis.ec_ssl_is_event_ssl"></a> 
## Name

ec_ssl_is_event_ssl — Determine whether an event is SSL-related

## Synopsis

`#include "ec_ssl.h"`

| `void **ec_ssl_is_event_ssl** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp62729616"></a> 
## Description

Determine whether an event is SSL-related.

**<a name="idp62730832"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

An Event.

</dd>

</dl>

**<a name="idp62733536"></a> Return Values**

This function returns `1` if the event is SSL-related and `0` if it is not.

**<a name="idp62735360"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62736896"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [events](/momentum/3/3-api/arch-primary-apis#arch.event)