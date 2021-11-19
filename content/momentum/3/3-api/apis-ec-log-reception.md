---
lastUpdated: "03/26/2020"
title: "ec_log_reception"
description: "ec log reception Log a message reception void ec log reception ac em now notestr accept construct ac ec message em struct timeval now const string notestr This function logs a message reception ac The accept construct For documentation of this data structure see Section 68 2 accept construct em..."
---

<a name="apis.ec_log_reception"></a> 
## Name

ec_log_reception — Log a message reception

## Synopsis

`#include "log.h"`

| `void **ec_log_reception** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">em</var>, |   |
|   | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">notestr</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`ec_message * <var class="pdparam">em</var>`;
`struct timeval * <var class="pdparam">now</var>`;
`const string * <var class="pdparam">notestr</var>`;<a name="idp54213360"></a> 
## Description

This function logs a message reception.

**<a name="idp54214576"></a> Parameters**

<dl class="variablelist">

<dt>ac</dt>

<dd>

The accept construct. For documentation of this data structure see [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

</dd>

<dt>em</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

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

**<a name="idp54224752"></a> Return Values**

This function returns void.

**<a name="idp54225664"></a> Threading**

It is legal to call this function in any thread.