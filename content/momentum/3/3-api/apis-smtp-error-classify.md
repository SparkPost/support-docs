---
lastUpdated: "03/26/2020"
title: "smtp_error_classify"
description: "smtp error classify Classify the response code given in response to an SMTP command int smtp error classify response domain mid const char response const char domain message id mid Classify the response code given in response to an SMTP command This is identical to calling smtp error classify len..."
---

<a name="apis.smtp_error_classify"></a> 
## Name

smtp_error_classify — Classify the response code given in response to an SMTP command

## Synopsis

`#include "misc/smtp_error_classify.h"`

| `int **smtp_error_classify** (` | <var class="pdparam">response</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">mid</var>`)`; |   |

`const char * <var class="pdparam">response</var>`;
`const char * <var class="pdparam">domain</var>`;
`message_id * <var class="pdparam">mid</var>`;<a name="idp61904128"></a> 
## Description

Classify the response code given in response to an SMTP command.

This is identical to calling [smtp_error_classify_len](/momentum/3/3-api/apis-smtp-error-classify-len).

**<a name="idp61906432"></a> Parameters**

<dl class="variablelist">

<dt>response</dt>

<dd>

The buffer to parse.

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

**<a name="idp61912880"></a> Return Values**

This function returns the smtp classification id.

**<a name="idp61913824"></a> Threading**

It is legal to call this function in any thread.

<a name="idp61914928"></a> 
## See Also

[*SMTP-related Functions*](/momentum/3/3-api/smtp) , [smtp_error_classify_len](/momentum/3/3-api/apis-smtp-error-classify-len) and [smtp_client_args_add](/momentum/3/3-api/apis-smtp-client-args-add)