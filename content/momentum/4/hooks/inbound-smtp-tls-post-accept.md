---
lastUpdated: "10/05/2021"
title: "core_inbound_smtp_tls_post_accept"
description: "allows the customer to modify the message state after the tls handshake."
---

<a name="core_inbound_smtp_tls_post_accept"></a> 
## Name

core_inbound_smtp_tls_post_accept — This hook is invoked after the tls handshake during the ESMTP conversation.

## Synopsis

```
local core = require("msys.core");
local mod = {};

function mod:core_inbound_smtp_tls_post_accept(mc, event, eventtype, vclosure, now)
  mc.ctx.code = 420;
  mc.ctx.disconnect = 1;
  mc.ctx:set(core.VCTX_CONN, '_tls_note', '421 4.7.0 TLS Negotiation failed.');
end
```

<a name="idp7749872"></a> 
## Description

This hook is only valid for Momentum 4.4.0 or higher. It is invoked after the tls handshake. It allows the user to augment the built-in TLS accept
handshake for inbound SMTP sessions.
If `mc.ctx.code` is set to anything other than 220, and `mc.ctx.disconnect` is set to 1, the message will be rejected and the SMTP connection will terminate. You may set a rejection message with `mc.ctx:set(core.VCTX_CONN, '_tls_note', _message_');` Default rejection message is `421 4.7.0 TLS Negotiation failed.` 


**<a name="idp4353216"></a> Parameters**

<dl class="variablelist">

<dt>mc</dt>

<dd>

message_construct

</dd>

<dt>event</dt>

<dd>

Event

</dd>

<dt>eventtype</dt>

<dd>

eventtype

</dd>

<dt>vclosure</dt>

<dd>

vclosure

</dd>

<dt>now</dt>

<dd>

now

</dd>

</dl>

**<a name="idp7214768"></a> Return Values**

This hook returns void.


<a name="idp6943328"></a> 
