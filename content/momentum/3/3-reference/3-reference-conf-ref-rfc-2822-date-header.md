---
lastUpdated: "03/26/2020"
title: "rfc2822_date_header"
description: "rfc 2822 date header rfc 2822 conformance RFC 2822 Date Header ignore RFC 2822 Date Header pedantic RFC 2822 Date Header ifneeded This option is available as of version 3 0 and replaces the version 2 2 option of the same name declared in the RFC 2822 scope From the..."
---

<a name="conf.ref.rfc2822_date_header"></a> 
## Name

rfc2822_date_header — rfc2822 conformance

## Synopsis

`RFC2822_Date_Header = "ignore"`
`RFC2822_Date_Header = "pedantic"`
`RFC2822_Date_Header = "ifneeded"`

<a name="idp11296896"></a> 
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `2`. This is the integer constant value of the default, `ifneeded`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC 2822 requires that a Date header be present in all email messages. This requirement can often pose problems with incompatible mail user agents that neglect to present messages with Date fields.

The default, "ifneeded," behavior is to add a Date header if one is not present upon receiving the message.

If you would prefer to reject messages that do not contain a Date header, the "pedantic" option can be used.

If you would prefer to accept messages without Date headers and have Momentum attempt delivery of those messages without adding a Date header, a value of "ignore" may be specified.

<a name="idp11303632"></a> 
## Scope

RFC2822_Date_Header is valid in the global and the pathway scopes.

<a name="idp11305296"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)