---
lastUpdated: "03/26/2020"
title: "rfc2822_messageid_header"
description: "rfc 2822 messageid header rfc 2822 conformance rfc 2822 messageid header ignore rfc 2822 messageid header ifneeded If a message is missing the Message ID header and Message ID Header is set to ifneeded Momentum will generate a suitable header and insert it into the message rfc 2822 messageid header..."
---

<a name="conf.ref.rfc2822_messageid_header"></a> 
## Name

rfc2822_messageid_header — rfc2822 conformance

## Synopsis

`rfc2822_messageid_header = "ignore"`
`rfc2822_messageid_header = "ifneeded"`

<a name="idp26173440"></a> 
## Description

If a message is missing the `Message-ID:` header and `MessageID_Header` is set to `ifneeded`, Momentum will generate a suitable header and insert it into the message.

<a name="idp26176656"></a> 
## Scope

`rfc2822_messageid_header` is valid in the global and the pathway scopes.

<a name="idp26178960"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers), [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope)