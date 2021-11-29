---
lastUpdated: "03/26/2020"
title: "smtp_error_classify_len"
description: "smtp error classify len Classify the response code given in response to an SMTP command int smtp error classify len response len domain mid const char response int len const char domain message id mid Classify the response code given in response to an SMTP command response The buffer to..."
---

<a name="apis.smtp_error_classify_len"></a> 
## Name

smtp_error_classify_len — Classify the response code given in response to an SMTP command

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `int **smtp_error_classify_len** (` | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">len</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">mid</var>`)`; |   |

`const char * <var class="pdparam">response</var>`;
`int <var class="pdparam">len</var>`;
`const char * <var class="pdparam">domain</var>`;
`message_id * <var class="pdparam">mid</var>`;<a name="idp61928496"></a> 
## Description

Classify the response code given in response to an SMTP command.

**<a name="idp61929744"></a> Parameters**

<dl class="variablelist">

<dt>response</dt>

<dd>

The buffer to parse, must be `NUL` terminated even though there is a len parameter.

</dd>

<dt>len</dt>

<dd>

The length of the buffer to parse.

</dd>

<dt>domain</dt>

<dd>

The domain the message is being sent to (for improved accuracy).

</dd>

<dt>mid</dt>

<dd>

Unused and may be NULL.

</dd>

</dl>

**<a name="idp61938544"></a> Return Values**

The SMTP classification id.

**<a name="idp61939456"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61941008"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) , [smtp_error_classify](/momentum/3/3-api/apis-smtp-error-classify) and [smtp_client_args_add](/momentum/3/3-api/apis-smtp-client-args-add)