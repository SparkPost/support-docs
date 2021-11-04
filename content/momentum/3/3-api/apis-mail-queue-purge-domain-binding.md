---
lastUpdated: "03/26/2020"
title: "mail_queue_purge_domain_binding"
description: "mail queue purge domain binding Fail all messages for a binding domain with a given status code int mail queue purge domain binding dr binding slot note quiet domain record dr ec binding slot binding slot char note int quiet Fail all messages for a binding domain with a given..."
---

<a name="apis.mail_queue_purge_domain_binding"></a> 
## Name

mail_queue_purge_domain_binding — Fail all messages for a binding/domain with a given status code

## Synopsis

`#include "mail_queue.h"`

| `int **mail_queue_purge_domain_binding** (` | <var class="pdparam">dr</var>, |   |
|   | <var class="pdparam">binding_slot</var>, |   |
|   | <var class="pdparam">note</var>, |   |
|   | <var class="pdparam">quiet</var>`)`; |   |

`domain_record * <var class="pdparam">dr</var>`;
`ec_binding_slot <var class="pdparam">binding_slot</var>`;
`char * <var class="pdparam">note</var>`;
`int <var class="pdparam">quiet</var>`;<a name="idp54595136"></a> 
## Description

Fail all messages for a binding/domain with a given delivery status notification (DSN).

**<a name="idp54596416"></a> Parameters**

<dl class="variablelist">

<dt>dr</dt>

<dd>

A pointer to a domain_record struct. For documentation of this data structure see [“domain_record”](/momentum/3/3-api/structs-domain-record).

</dd>

<dt>binding_slot</dt>

<dd>

The binding slot.

</dd>

<dt>note</dt>

<dd>

A string containing the DSN to use when purging the messages. If NULL, then the default string used is "554 5.4.4 [internal] Domain Lookup Failed".

</dd>

<dt>quiet</dt>

<dd>

An integer. Typically, EM_FAILED or EM_FAILED_QUIET.

</dd>

</dl>

**<a name="idp54605456"></a> Return Values**

This function returns the number of messages failed for the binding/domain.

**<a name="idp54606432"></a> Threading**

It is only legal to call this function in the `Scheduler` thread.

<a name="idp54607984"></a> 
## See Also

[__get_global_mail_queue](/momentum/3/3-api/apis-get-global-mail-queue), [mail_queue_active_queue_for_binding](/momentum/3/3-api/apis-mail-queue-active-queue-for-binding), [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size), and [mail_queue_size](/momentum/3/3-api/apis-mail-queue-size).