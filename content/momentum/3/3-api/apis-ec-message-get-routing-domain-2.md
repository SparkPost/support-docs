---
lastUpdated: "03/26/2020"
title: "ec_message_get_routing_domain2"
description: "ec message get routing domain 2 Get the routing domain of the message int ec message get routing domain 2 message domain ec message message string domain Get the routing domain of a message message A pointer to an ec message struct For documentation of this data structure see Section..."
---

<a name="apis.ec_message_get_routing_domain2"></a> 
## Name

ec_message_get_routing_domain2 — Get the routing domain of the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_get_routing_domain2** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`string * <var class="pdparam">domain</var>`;<a name="idp55991104"></a> 
## Description

Get the routing domain of a message.

**<a name="idp55992320"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>domain</dt>

<dd>

An ec_string structure pointer (string *) which has the length already encoded. For documentation of this data structure see [“string”](/momentum/3/3-api/structs-string).

</dd>

</dl>

**<a name="idp55998192"></a> Return Values**

This function returns a 1 if the call successfully determined the routing domain. It returns a zero (0) if the routing domain could not be identified.

**<a name="idp55999248"></a> Threading**

It is legal to call this function in any thread.

<a name="idp56000352"></a> 
## See Also

[ec_message_get_routing_domain](/momentum/3/3-api/apis-ec-message-get-routing-domain).