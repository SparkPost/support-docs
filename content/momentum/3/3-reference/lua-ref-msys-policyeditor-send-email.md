---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.send_email"
description: "msys policyeditor send email Sends a simple email message msys policyeditor send email ctx vars params Configuration Change This function is deprecated Use a combination of msg build and msg inject to send a message For more information see msg build and msg inject Sends a simple email message Builds..."
---

<a name="lua.ref.msys.policyeditor.send_email"></a> 
## Name

msys.policyeditor.send_email — Sends a simple email message

<a name="idp24984496"></a> 
## Synopsis

`msys.policyeditor.send_email(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use a combination of `msg:build()` and `msg:inject()` to send a message. For more information see [msg:build](/momentum/3/3-reference/3-reference-lua-ref-msg-build) and [msg:inject](/momentum/3/3-reference/3-reference-lua-ref-msg-inject).

<a name="idp24990800"></a> 
## Description

Sends a simple email message. Builds out a simple, non-MIME, RFC2822 email message based on the supplied sender, recipient, subject and body content. The from and to must be simple RFC2821 email addresses, that is, addresses of the form user@domain with no friendly names or other surrounding punctuation.

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for params are:

*   `from` the envelope sender and "From" header for the generated email

*   `to` the envelope recipient and "To" header for the generated email

*   `subject` the subject line for the generated email

*   `body` the body of the message

*   `throttle` if non-zero, limits sending to one message every "throttle" seconds

<a name="idp25001728"></a> 
## See Also

[“Automated Alerting Configuration”](/momentum/3/3-reference/web-3-automated-alerting)