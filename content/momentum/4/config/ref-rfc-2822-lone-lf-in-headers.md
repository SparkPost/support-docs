---
lastUpdated: "03/26/2020"
title: "rfc2822_lone_lf_in_headers"
description: "rfc 2822 lone lf in headers rfc 2822 conformance rfc 2822 lone lf in headers fix rfc 2822 lone lf in headers pedantic RFC 2822 section 2 2 requires that all headers end with a carriage return CR and a linefeed LF Technically any MTA that accepts messages that do..."
---

<a name="conf.ref.rfc2822_lone_lf_in_headers"></a> 
## Name

rfc2822_lone_lf_in_headers — rfc2822 conformance

## Synopsis

`rfc2822_lone_lf_in_headers = "fix"`
`rfc2822_lone_lf_in_headers = "pedantic"`

<a name="idp26107776"></a> 
## Description

RFC 2822 (section 2.2) requires that all headers end with a carriage return (CR) and a linefeed (LF). Technically, any MTA that accepts messages that do not separate headers with a CR LF sequence is not compliant. Therefore, the default behavior is to reject those messages during the SMTP session.

Many mail user agents do not comply to this standard and send messages with headers separated by lone LF. While non-compliant, you can have Momentum rectify these mistakes upon message reception by setting this option to "fix". *Note*: Setting this to "fix" will incur a slight performance penalty during reception. However, the performance impact is very small (almost negligible for a single message) and only applies to the messages that are badly formatted.

When set to `fix`, this option also fixes lone CRs.

<a name="idp26112192"></a> 
## Scope

`rfc2822_lone_lf_in_headers` is valid in global and pathway scopes.

<a name="idp26114480"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body), [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope)