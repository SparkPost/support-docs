---
lastUpdated: "03/26/2020"
title: "ec_log_permanent_failure"
description: "ec log permanent failure Records a permanent failure disposition of a message void ec log permanent failure mess dr now note ec message mess domain record dr struct timeval now const string note Records a permanent failure disposition of a message mess A pointer to an ec message struct For..."
---

<a name="apis.ec_log_permanent_failure"></a> 
## Name

ec_log_permanent_failure — Records a permanent failure disposition of a message

## Synopsis

`#include "log.h"`

| `void **ec_log_permanent_failure** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">note</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`domain_record * <var class="pdparam">dr</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const string * <var class="pdparam">note</var>`;<a name="idp54185536"></a> 
## Description

Records a permanent failure disposition of a message.

**<a name="idp54186768"></a> Parameters**

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

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

<dt>note</dt>

<dd>

Typical use is to pass `NULL` to this parameter, in which case the string is pulled from the message construct. You may override this by passing `string` a DSN to use for logging the permanent failure.

</dd>

</dl>

**<a name="idp54199024"></a> Return Values**

This function returns void.

**<a name="idp54199936"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54201040"></a> 
## See Also

[ec_log_attempt](/momentum/3/3-api/apis-ec-log-attempt)