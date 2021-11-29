---
lastUpdated: "03/26/2020"
title: "mail_queue_delay_domain"
description: "mail queue delay domain Add the specified domain record to the delayed queue void mail queue delay domain dr note domain record dr char note Add the specified domain record to the delayed queue dr The domain record For a description of this struct see Section 68 14 domain record..."
---

<a name="apis.mail_queue_delay_domain"></a> 
## Name

mail_queue_delay_domain — Add the specified domain record to the delayed queue

## Synopsis

`#include "mail_queue.h"`

| `void **mail_queue_delay_domain** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">note</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`char * <var class="pdparam">note</var>`;<a name="idp54553984"></a> 
## Description

Add the specified domain record to the delayed queue.

**<a name="idp54555216"></a> Parameters**

<dl class="variablelist">

<dt>dr</dt>

<dd>

The domain record. For a description of this struct see [“domain_record”](/momentum/3/3-api/structs-domain-record).

</dd>

<dt>note</dt>

<dd>

The reason associated with the delay, for example, `"451 4.4.1 [internal] manually delayed domain"`.

</dd>

</dl>

**<a name="idp54560896"></a> Return Values**

This function returns void.

**<a name="idp54561808"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="idp54563664"></a> 
## See Also

You can obtain a domain_record using [dns_get_domain](/momentum/3/3-api/apis-dns-get-domain).