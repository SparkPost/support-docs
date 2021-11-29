---
lastUpdated: "03/26/2020"
title: "ec_log_delivery"
description: "ec log delivery Record Momentum deliveries void ec log delivery message domain now notestr ec message message domain record domain struct timeval now const string notestr This function records Momentum deliveries message A pointer to an ec message struct For documentation of this data structure see Section 68 38 ec..."
---

<a name="apis.ec_log_delivery"></a> 
## Name

ec_log_delivery — Record Momentum deliveries

## Synopsis

`#include "log.h"`

| `void **ec_log_delivery** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">notestr</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`domain_record * <var class="pdparam">domain</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const string * <var class="pdparam">notestr</var>`;<a name="idp54161744"></a> 
## Description

This function records Momentum deliveries.

**<a name="idp54162960"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>domain</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record).

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

</dd>

<dt>notestr</dt>

<dd>

Typical use is to pass `NULL` to this parameter, in which case the string to log is pulled from the message construct. You may override this by passing your own Delivery Status Notification (DSN) to use for logging the delivery attempt.

</dd>

</dl>

**<a name="idp54173168"></a> Return Values**

This function returns void.

**<a name="idp54174080"></a> Threading**

It is legal to call this function in any thread.