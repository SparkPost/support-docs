---
lastUpdated: "03/26/2020"
title: "allow_null_envelope_sender"
description: "allow null envelope sender allow the null envelope sender in e mail addresses allow null envelope sender true This directive instructs Momentum to respect or reject null envelope senders Null envelope senders MAIL FROM are used by systems to send Delivery Status Notifications DS Ns and Message Disposition Notifications MD..."
---

<a name="conf.ref.allow_null_envelope_sender"></a> 
## Name

allow_null_envelope_sender — allow the null envelope sender in e-mail addresses

## Synopsis

`allow_null_envelope_sender = true`

<a name="idp23415312"></a> 
## Description

This directive instructs Momentum to respect (or reject) null envelope senders. Null envelope senders (`MAIL FROM:<>`) are used by systems to send Delivery Status Notifications (DSNs) and Message Disposition Notifications (MDNs). These are messages about a previous message, and are used for non-delivery reports, among other things. Note that RFC 1123 requires null sender support, and that if you disable this feature, your senders will never receive any bounce notification when their messages are undeliverable.

<a name="idp23418064"></a> 
## Scope

allow_null_envelope_sender is valid in the global, listener, listen, peer, pathway_group, and pathway scopes.

<a name="idp23419968"></a> 
## See Also

[allow_ip_literal](/momentum/4/config/ref-allow-ip-literal)