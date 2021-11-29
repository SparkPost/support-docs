---
lastUpdated: "03/26/2020"
title: "rfc2822_date_header"
description: "rfc 2822 date header rfc 2822 conformance rfc 2822 date header ignore rfc 2822 date header pedantic rfc 2822 date header ifneeded RFC 2822 requires that a Date header be present in all email messages This requirement can often pose problems with incompatible mail user agents that neglect to present..."
---

<a name="conf.ref.rfc2822_date_header"></a> 
## Name

rfc2822_date_header — rfc2822 conformance

## Synopsis

`rfc2822_date_header = "ignore"`
`rfc2822_date_header = "pedantic"`
`rfc2822_date_header = "ifneeded"`

<a name="idp26062736"></a> 
## Description

RFC 2822 requires that a Date header be present in all email messages. This requirement can often pose problems with incompatible mail user agents that neglect to present messages with Date fields.

The default, "ifneeded," behavior is to add a Date header if one is not present upon receiving the message.

If you would prefer to reject messages that do not contain a Date header, the "pedantic" option can be used.

If you would prefer to accept messages without Date headers and have Momentum attempt delivery of those messages without adding a Date header, a value of "ignore" may be specified.

<a name="idp26066496"></a> 
## Scope

`rfc2822_date_header` is valid in the global and the pathway scopes.

<a name="idp26068768"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length), [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope)