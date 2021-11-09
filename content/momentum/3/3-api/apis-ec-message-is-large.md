---
lastUpdated: "03/26/2020"
title: "ec_message_is_large"
description: "ec message is large Indicates if a message is large int ec message is large msg ec message msg Indicates whether or not a message is large which is configurable and determined by the value of the large message threshold option If a message is large we do not keep..."
---

<a name="apis.ec_message_is_large"></a> 
## Name

ec_message_is_large — Indicates if a message is large

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_is_large** (` | <var class="pdparam">msg</var>`)`; |   |

`ec_message * <var class="pdparam">msg</var>`;<a name="idp56010496"></a> 
## Description

Indicates whether or not a message is "large", which is configurable and determined by the value of the [large_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-large-message-threshold) option. If a message is large, we do *not* keep its entire body in memory.

**<a name="idp56013088"></a> Parameters**

<dl class="variablelist">

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

</dl>

**<a name="idp56016432"></a> Return Values**

Returns 1 if the message is large, 0 otherwise.

**<a name="idp56017376"></a> Threading**

It is legal to call this function in any thread.