---
lastUpdated: "03/26/2020"
title: "ec_log_transient_failure"
description: "ec log transient failure Record a transient delivery failure void ec log transient failure message domain now notestr ec message message domain record domain struct timeval now const string notestr Records the fact that Momentum was temporarily unable to delivery a message message A pointer to an ec message struct..."
---

<a name="apis.ec_log_transient_failure"></a> 
## Name

ec_log_transient_failure — Record a transient delivery failure

## Synopsis

`#include "log.h"`

| `void **ec_log_transient_failure** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">notestr</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`domain_record * <var class="pdparam">domain</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const string * <var class="pdparam">notestr</var>`;<a name="idp54289328"></a> 
## Description

Records the fact that Momentum was temporarily unable to delivery a message.

**<a name="idp54290592"></a> Parameters**

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

**Configuration Change. ** Prior to version 3.0, NULL was not an allowed value.

</dd>

<dt>notestr</dt>

<dd>

Typical use is to pass `NULL` to this parameter, in which case the string is pulled from the message construct. You may override this by passing `string` a DSN to use for logging the permanent failure.

</dd>

</dl>

**<a name="idp54302864"></a> Return Values**

This function returns void.

**<a name="idp54303776"></a> Threading**

It is legal to call this function in any thread.