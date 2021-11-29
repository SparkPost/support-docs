---
lastUpdated: "03/26/2020"
title: "ec_log_rejection2"
description: "ec log rejection 2 Records rejection of an incoming message void ec log rejection 2 now ac ctx msg phase format struct timeval now accept construct ac validate context ctx ec message msg int phase const char format Configuration Change This feature is available starting from Momentum 3 5 Records..."
---

<a name="apis.ec_log_rejection2"></a> 
## Name

ec_log_rejection2 — Records rejection of an incoming message

## Synopsis

`#include "log.h"`

| `void **ec_log_rejection2** (` | <var class="pdparam">now</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">format</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`struct timeval * <var class="pdparam">now</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`int <var class="pdparam">phase</var>`;
`const char * <var class="pdparam">format</var>`;
`<var class="pdparam">...</var>`;<a name="idp54253872"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.5.

Records rejection of an incoming message.

**<a name="idp54256752"></a> Parameters**

<dl class="variablelist">

<dt>now</dt>

<dd>

A pointer to a timeval struct, which may be NULL.

</dd>

<dt>ac</dt>

<dd>

An accept construct. For a description of this data type see [“accept_construct”](/momentum/3/3-api/structs-accept-construct).

</dd>

<dt>dr</dt>

<dd>

A domain record. For a description of this data type see [“domain_record”](/momentum/3/3-api/structs-domain-record).

</dd>

<dt>msg</dt>

<dd>

An ec_message. For a description of this data type see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>phase</dt>

<dd>

This parameter corresponds to the message state. it must be one of the following constants:

```
#define MC_STATE_START 0
#define MC_STATE_START_RESPONSE 1
#define MC_STATE_EHLO 2
#define MC_STATE_EHLO_RESPONSE 3
#define MC_STATE_MAILFROM 4
#define MC_STATE_MAILFROM_RESPONSE 5
#define MC_STATE_RCPTTO 6
#define MC_STATE_RCPTTO_RESPONSE 7
#define MC_STATE_DATA 8
#define MC_STATE_BODY 9
#define MC_STATE_BODY_RESPONSE 10
#define MC_STATE_ASYNC_BODY_RESPONSE 11
#define MC_STATE_OK 12 /* preparing to send OK after data */
#define MC_STATE_RELAYING_DENIED 13
#define MC_STATE_EXTENSION_1 14
#define MC_STATE_EXTENSION_2 15
#define MC_STATE_EXTENSION_3 16
#define MC_STATE_EXTENSION_4 17
#define MC_STATE_CONCURRENCY_LIMIT 18
#define MC_STATE_RCPTTO_LIST_RESPONSE 19
#define MC_STATE_RCPTTO_LIST_FINAL_RESPONSE 20
#define MC_STATE_SETUP 21
#define MC_STATE_MCMT_FIXUP 22
#define MC_STATE_COUNT 23
```
</dd>

<dt>format</dt>

<dd>

The format string.

</dd>

<dt>...</dt>

<dd>

The variable argument.

</dd>

</dl>

**<a name="idp54273856"></a> Return Values**

This function returns void.

**<a name="idp54274768"></a> Threading**

It is legal to call this function in any thread.

<a name="idp54275872"></a> 
## See Also

For more information on log formats see [ec_logger – Momentum-Style Logging](/momentum/3/3-reference/3-reference-modules-ec-logger) and [Log Formats](/momentum/3/3-reference/3-reference-log-formats).