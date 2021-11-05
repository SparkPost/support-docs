---
lastUpdated: "03/26/2020"
title: "rfc2822_lone_lf_in_headers"
description: "rfc 2822 lone lf in headers rfc 2822 conformance RFC 2822 Lone LF in Headers fix RFC 2822 Lone LF in Headers pedantic This option is available as of version 3 0 and replaces the version 2 2 option of the same name declared in the RFC 2822 scope From..."
---

<a name="conf.ref.rfc2822_lone_lf_in_headers"></a> 
## Name

rfc2822_lone_lf_in_headers — rfc2822 conformance

## Synopsis

`RFC2822_Lone_LF_in_Headers = "fix"`
`RFC2822_Lone_LF_in_Headers = "pedantic"`

<a name="idp11343600"></a> 
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `pedantic`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC 2822 (section 2.2) requires that all headers end with a carriage return (CR) and a linefeed (LF). Technically, any MTA that accepts messages that do not separate headers with a CR LF sequence is not compliant. Therefore, the default behavior is to reject those messages during the SMTP session.

Many mail user agents do not comply to this standard and send messages with headers separated by lone LF. While non-compliant, you can have Momentum rectify these mistakes upon message reception by setting this option to "fix". *Note*: Setting this to "fix" will incur a slight performance penalty during reception. However, the performance impact is very small (almost negligible for a single message) and only applies to the messages that are badly formatted.

When set to `fix`, this option also fixes lone CRs.

<a name="idp11350896"></a> 
## Scope

RFC2822_Lone_LF_in_Headers is valid in global and pathway scopes.

<a name="idp11352544"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)