---
lastUpdated: "03/26/2020"
title: "dns_get_domain"
description: "dns get domain Retrieve information about the specified domain domain record dns get domain domain const char domain Retrieve the domain record struct from a domain name domain The domain name as a string This function returns a pointer to a domain record struct For documentation of this data structure..."
---

<a name="apis.dns_get_domain"></a> 
## Name

dns_get_domain — Retrieve information about the specified domain

## Synopsis

`#include "dns_ds.h"`

| `domain_record ***dns_get_domain** (` | <var class="pdparam">domain</var>`)`; |   |

`const char * <var class="pdparam">domain</var>`;<a name="idp50595760"></a> 
## Description

Retrieve the domain record struct from a domain name.

**<a name="idp50596992"></a> Parameters**

<dl class="variablelist">

<dt>domain</dt>

<dd>

The domain name as a string.

</dd>

</dl>

**<a name="idp50599728"></a> Return Values**

This function returns a pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record).

**<a name="idp50601296"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.