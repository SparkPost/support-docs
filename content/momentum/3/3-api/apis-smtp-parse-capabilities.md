---
lastUpdated: "03/26/2020"
title: "smtp_parse_capabilities"
description: "smtp parse capabilities Parse the remote capabilities from the EHLO response void smtp parse capabilities dc conn delivery construct dc connection conn Parse the remote capabilities from the EHLO response This is primarly a helper for clients who want to write modify their own SMTP client state machine dc The..."
---

<a name="apis.smtp_parse_capabilities"></a> 
## Name

smtp_parse_capabilities — Parse the remote capabilities from the EHLO response

## Synopsis

`#include "smtp.h"`

| `void **smtp_parse_capabilities** (` | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">conn</var>`)`; |   |

`delivery_construct * <var class="pdparam">dc</var>`;
`connection * <var class="pdparam">conn</var>`;<a name="idp62087584"></a> 
## Description

Parse the remote capabilities from the EHLO response.

This is primarly a helper for clients who want to write/modify their own SMTP client state machine.

**<a name="idp62089360"></a> Parameters**

<dl class="variablelist">

<dt>dc</dt>

<dd>

The delivery construct for the current session. For a description of this data type see [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>conn</dt>

<dd>

The current connection. For a description of this data type see [“connection”](/momentum/3/3-api/structs-connection).

</dd>

</dl>

**<a name="idp62095184"></a> Threading**

It is legal to call this function in any thread.

<a name="idp62096736"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp)