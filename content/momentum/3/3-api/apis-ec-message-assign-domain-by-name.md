---
lastUpdated: "03/26/2020"
title: "ec_message_assign_domain_by_name"
description: "ec message assign domain by name Assign the domain field of an ec message based on the domain name string passed in as an argument domain record ec message assign domain by name mess domain name ec message mess const char domain name Modify the domain field of an ec..."
---

<a name="apis.ec_message_assign_domain_by_name"></a> 
## Name

ec_message_assign_domain_by_name — Assign the domain field of an ec_message based on the domain name string passed in as an argument

## Synopsis

`#include "ec_message.h"`

| `domain_record * **ec_message_assign_domain_by_name** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">domain_name</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`const char * <var class="pdparam">domain_name</var>`;<a name="idp55234368"></a> 
## Description

Modify the domain field of an ec_message based on the domain name string passed in as an argument.

### Note

You MUST use [ec_message_assign_domain](/momentum/3/3-api/apis-ec-message-assign-domain) or [ec_message_assign_domain_by_name](/momentum/3/3-api/apis-ec-message-assign-domain-by-name) to change the domain of an ec_message or you will skew the binding/domain stats.

**<a name="idp55237792"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>domain_name</dt>

<dd>

A constant string (pointer to const char).

</dd>

</dl>

**<a name="idp55243008"></a> Return Values**

This function returns a pointer to a domain_record. This is the address of a domain_record in the list of currently used domains. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record)

**<a name="idp55244656"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp55246192"></a> 
## See Also

[ec_message_get_routing_domain](/momentum/3/3-api/apis-ec-message-get-routing-domain) [ec_message_assign_domain](/momentum/3/3-api/apis-ec-message-assign-domain)