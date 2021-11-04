---
lastUpdated: "03/26/2020"
title: "ec_message_assign_domain"
description: "ec message assign domain Modify the domain record of an ec message void ec message assign domain mess dr ec message mess domain record dr Modify the domain record of an ec message This will increment the reference count on the domain record passed in You MUST use ec message..."
---

<a name="apis.ec_message_assign_domain"></a> 
## Name

ec_message_assign_domain — Modify the domain record of an ec_message

## Synopsis

`#include "ec_message.h"`

| `void **ec_message_assign_domain** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">dr</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`domain_record * <var class="pdparam">dr</var>`;<a name="idp55211056"></a> 
## Description

Modify the domain record of an ec_message. This will increment the reference count on the domain_record passed in.

### Note

You MUST use [ec_message_assign_domain](/momentum/3/3-api/apis-ec-message-assign-domain) or [ec_message_assign_domain_by_name](/momentum/3/3-api/apis-ec-message-assign-domain-by-name) to change the domain of an ec_message or you will skew the binding/domain stats.

**<a name="idp55214496"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>dr</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record)

</dd>

</dl>

**<a name="idp55220304"></a> Return Values**

This function returns void.

**<a name="idp55221216"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp55222752"></a> 
## See Also

[ec_message_get_routing_domain](/momentum/3/3-api/apis-ec-message-get-routing-domain) [ec_message_assign_domain_by_name](/momentum/3/3-api/apis-ec-message-assign-domain-by-name)