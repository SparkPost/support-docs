---
lastUpdated: "03/26/2020"
title: "rfc2822_messageid_header"
description: "rfc 2822 messageid header rfc 2822 conformance RFC 2822 Message ID Header ignore RFC 2822 Message ID Header ifneeded If a message is missing the Message ID header and Message ID Header is set to ifneeded Momentum will generate a suitable header and insert it into the message This option..."
---

<a name="conf.ref.rfc2822_messageid_header"></a> 
## Name

rfc2822_messageid_header — rfc2822 conformance

## Synopsis

`RFC2822_MessageID_Header = "ignore"`
`RFC2822_MessageID_Header = "ifneeded"`

<a name="idp11418736"></a> 
## Description

If a message is missing the `Message-ID:` header and `MessageID_Header` is set to `ifneeded`, Momentum will generate a suitable header and insert it into the message.

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `1`. This is the integer constant value of the default, `ifneeded`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

<a name="idp11425024"></a> 
## Scope

RFC2822_MessageID_Header is valid in the global and the pathway scopes.

<a name="idp11426704"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)