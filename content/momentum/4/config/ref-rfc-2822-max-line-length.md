---
lastUpdated: "03/26/2020"
title: "rfc2822_max_line_length"
description: "rfc 2822 max line length rfc 2822 conformance rfc 2822 max line length ignore pedantic fix rfc 2822 max line length 2048 RFC 2822 requires that the maximum length of a single line of a message be no longer than 998 characters The default ignore behavior is to ignore the..."
---

<a name="conf.ref.rfc2822_max_line_length"></a> 
## Name

rfc2822_max_line_length — rfc2822 conformance

## Synopsis

`rfc2822_max_line_length =` [ "ignore" ] [ "pedantic" ] [ "fix" ]

`rfc2822_max_line_length = 2048`

<a name="idp26131360"></a> 
## Description

RFC2822 requires that the maximum length of a single line of a message be no longer than 998 characters.

The default, "ignore," behavior is to ignore the length of the lines and process the email normally regardless.

If you would prefer to reject messages that do contain a line with more than 998 characters, the "pedantic" option can be used.

If you would prefer to accept messages with more than 998 characters on a line and have Momentum fix those messages by breaking up lines with more than 998 characters a value of "fix" may be specified.

This option can be set to a numeric value. When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `rfc2822_max_line_length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

<a name="idp26137904"></a> 
## Scope

`rfc2822_max_line_length` is valid in the global and the pathway scopes.

<a name="idp26140192"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers), [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope), [rfc2822_max_line_length_policy](/momentum/4/config/ref-rfc-2822-max-line-length-policy)