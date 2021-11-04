---
lastUpdated: "03/26/2020"
title: "allow_ip_literal"
description: "allow ip literal allow IP addresses in email addresses allow ip literal true This directive instructs Momentum to respect or reject IP addresses in e mail addresses If this option is set to false email addresses such as jimsmith 192 168 0 1 will not deliver successfully as the DNS..."
---

<a name="conf.ref.allow_ip_literal"></a> 
## Name

allow_ip_literal — allow IP addresses in email addresses

## Synopsis

`allow_ip_literal = true`

<a name="idp23398736"></a> 
## Description

This directive instructs Momentum to respect (or reject) IP addresses in e-mail addresses. If this option is set to `false`, email addresses such as jimsmith@[192.168.0.1] will not deliver successfully as the DNS system will not allow 192.168.0.1 to resolve to an email address. If this option is set to `true`, the DNS system will resolve any domain in IPv4 form to the email address that it represents and messages addressed to that "domain" will be attempted normally.

The default value for this option is `true`.

This option is checked at reception time, rather than at delivery time. Once accepted and spooled, messages with a literal IP domain will never be subject to the `allow_ip_literal` check.

<a name="idp23403808"></a> 
## Scope

allow_ip_literal is valid in the global, listener, listen, peer, pathway, and pathway_group scopes.

<a name="idp23405696"></a> 
## See Also

[allow_null_envelope_sender](/momentum/4/config/ref-allow-null-envelope-sender)