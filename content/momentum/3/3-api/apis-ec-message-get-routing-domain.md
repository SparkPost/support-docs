---
lastUpdated: "03/26/2020"
title: "ec_message_get_routing_domain"
description: "ec message get routing domain Get the routing domain of the message int ec message get routing domain message domain dlen ec message message char domain int dlen Get the routing domain of a message message A pointer to an ec message struct For documentation of this data structure see..."
---

<a name="apis.ec_message_get_routing_domain"></a> 
## Name

ec_message_get_routing_domain — Get the routing domain of the message

## Synopsis

`#include "ec_message.h"`

| `int **ec_message_get_routing_domain** (` | <var class="pdparam">message</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">dlen</var>`)`; |   |

`ec_message * <var class="pdparam">message</var>`;
`char * <var class="pdparam">domain</var>`;
`int <var class="pdparam">dlen</var>`;<a name="idp55969536"></a> 
## Description

Get the routing domain of a message.

**<a name="idp55970752"></a> Parameters**

<dl class="variablelist">

<dt>message</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>domain</dt>

<dd>

A char pointer referring to the domain string. The domain string must be at least of length MAXDOMAINNAME.

</dd>

<dt>dlen</dt>

<dd>

An integer value indicating the length of the domain string, which should be at least MAXDOMAINNAME length.

</dd>

</dl>

**<a name="idp55977984"></a> Return Values**

This function returns a 1 if the call successfully determined the routing domain. It returns a zero (0) if the routing domain could not be identified.

**<a name="idp55979040"></a> Threading**

It is legal to call this function in any thread.

<a name="idp55980144"></a> 
## See Also

[ec_message_get_routing_domain2](/momentum/3/3-api/apis-ec-message-get-routing-domain-2).