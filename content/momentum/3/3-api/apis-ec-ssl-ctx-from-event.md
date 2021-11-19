---
lastUpdated: "03/26/2020"
title: "ec_ssl_ctx_from_event"
description: "ec ssl ctx from event Get an SSL context from an event ec ssl ctx ec ssl ctx from event e Event e Get an SSL context from an event e The Event On success this function returns an ec ssl ctx struct on failure NULL is returned It is..."
---

<a name="apis.ec_ssl_ctx_from_event"></a> 
## Name

ec_ssl_ctx_from_event — Get an SSL context from an event

## Synopsis

`#include "ec_ssl.h"`

| `ec_ssl_ctx * **ec_ssl_ctx_from_event** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp62711728"></a> 
## Description

Get an SSL context from an event.

**<a name="idp62712944"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The Event.

</dd>

</dl>

**<a name="idp62715648"></a> Return Values**

On success this function returns an ec_ssl_ctx struct; on failure, `NULL` is returned.

**<a name="idp62717056"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp62718912"></a> 
## See Also

[“ec_ssl_ctx”](/momentum/3/3-api/structs-ec-ssl-ctx) and [“Event”](/momentum/3/3-api/structs-event)