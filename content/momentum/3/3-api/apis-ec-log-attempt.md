---
lastUpdated: "03/26/2020"
title: "ec_log_attempt"
description: "ec log attempt Records an attempt to deliver a message void ec log attempt mess dr now note ec message mess domain record dr struct timeval now const string note Records an attempt to deliver a message mess A pointer to an ec message struct For documentation of this data..."
---

<a name="apis.ec_log_attempt"></a> 
## Name

ec_log_attempt — Records an attempt to deliver a message

## Synopsis

`#include "log.h"`

| `void **ec_log_attempt** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">note</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const string * <var class="pdparam">note</var>`;<a name="idp54134160"></a> 
## Description

Records an attempt to deliver a message.

**<a name="idp54135376"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>dr</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record).

</dd>

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

**Configuration Change. ** Prior to version 3.0, NULL was not allowed.

</dd>

<dt>note</dt>

<dd>

Typical use is to pass `NULL` to this parameter, in which case the string to log is pulled from the message construct. You may override this by passing your own Delivery Status Notification (DSN) to use for logging the delivery attempt.

</dd>

</dl>

**<a name="idp54147232"></a> Return Values**

This function returns void.

**<a name="idp54148144"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54149248"></a> 
## See Also

[ec_log_permanent_failure](/momentum/3/3-api/apis-ec-log-permanent-failure)