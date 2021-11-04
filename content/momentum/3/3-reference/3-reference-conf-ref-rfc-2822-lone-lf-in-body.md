---
lastUpdated: "03/26/2020"
title: "rfc2822_lone_lf_in_body"
description: "rfc 2822 lone lf in body rfc 2822 conformance RFC 2822 Lone LF in Body ignore RFC 2822 Lone LF in Body pedantic RFC 2822 Lone LF in Body fix This option is available as of version 3 0 and replaces the version 2 2 option of the same name..."
---

<a name="conf.ref.rfc2822_lone_lf_in_body"></a> 
## Name

rfc2822_lone_lf_in_body — rfc2822 conformance

## Synopsis

`RFC2822_Lone_LF_in_Body = "ignore"`
`RFC2822_Lone_LF_in_Body = "pedantic"`
`RFC2822_Lone_LF_in_Body = "fix"`

<a name="idp11318976"></a> 
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `ignore`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC 2822 (section 2.3) strictly forbids Internet email from containing a carriage return (CR) or a linefeed (LF) by itself. If they do occur, they must appear in a CR LF sequence.

However, a wide variety of Internet email messages are transmitted with lone CR or LF characters in them. To be pedantic would lead to the rejection of messages that may be of importance. By default, Momentum will accept messages with lone CR or LF characters in the body. If the value "pedantic" is given, Momentum will inspect the body for violations of this nature and reject the message during SMTP.

Since version 3.0.11, you can set `RFC2822_Lone_LF_in_Body` to `fix` which will convert lone linefeeds into a canonical CRLF sequence. This option is intended for use by sites that are injecting mail.

Any MTA which modifies the body of a message is considered hostile, and Momentum will not act as a hostile MTA without being explicitly configured to do so. If you are considering setting this option to `fix`, think twice: message content modification in any MTA can invalidate digital signatures and imposes a performance overhead. It is generally better to ensure that the content you are injecting is appropriately formed, rather than leaving it for the MTA to correct. We recognize that this may not always be possible, so we offer the "fix" option as a convenience.

When set to `fix`, this option also fixes lone CRs.

<a name="idp11328608"></a> 
## Scope

RFC2822_Lone_LF_in_Body is valid in the global and the pathway scopes.

<a name="idp11330288"></a> 
## See Also

[rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)