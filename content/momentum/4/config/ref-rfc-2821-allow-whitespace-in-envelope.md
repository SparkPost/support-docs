---
lastUpdated: "03/26/2020"
title: "rfc2821_allow_whitespace_in_envelope"
description: "rfc 2821 allow whitespace in envelope permit trailing whitespace before the final CRLF rfc 2821 allow whitespace in envelope false In RFC 2821 in the interest of improved interoperability SMTP receivers are encouraged to tolerate trailing white space before the terminating CRLF When set to true this directive instructs Momentum..."
---

<a name="conf.ref.rfc2821_allow_whitespace_in_envelope"></a> 
## Name

rfc2821_allow_whitespace_in_envelope — permit trailing whitespace before the final CRLF

## Synopsis

`rfc2821_allow_whitespace_in_envelope = false`

<a name="idp26023408"></a> 
## Description

In RFC 2821, in the interest of improved interoperability, SMTP receivers are encouraged to tolerate trailing white space before the terminating CRLF. When set to true, this directive instructs Momentum to ignore such trailing white spaces.

The default value for this option is `false`.

<a name="idp26026384"></a> 
## Scope

`rfc2821_allow_whitespace_in_envelope` is valid in the global and pathway scopes.

<a name="idp26028672"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules)