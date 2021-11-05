---
lastUpdated: "03/26/2020"
title: "rfc2822_max_line_length"
description: "rfc 2822 max line length rfc 2822 conformance RFC 2822 Max Line Length ignore pedantic fix RFC 2822 Max Line Length 2048 This option is available as of version 3 0 and replaces the version 2 2 option of the same name declared in the RFC 2822 scope From the..."
---

<a name="conf.ref.rfc2822_max_line_length"></a> 
## Name

rfc2822_max_line_length — rfc2822 conformance

## Synopsis

`RFC2822_Max_Line_Length =` [ "ignore" ] [ "pedantic" ] [ "fix" ]

`RFC2822_Max_Line_Length = 2048`

<a name="idp11368048"></a> 
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

From the web UI, when this option has not been set, its value is shown as `0`. This is the integer constant value of the default, `ignore`. Once this option has been set, the string value displays rather than the integer constant. If you set this value from the web UI, choose one of the string values rather than the `Custom` option.

RFC2822 requires that the maximum length of a single line of a message be no longer than 998 characters.

The default, "ignore," behavior is to ignore the length of the lines and process the email normally regardless.

If you would prefer to reject messages that do contain a line with more than 998 characters, the "pedantic" option can be used.

If you would prefer to accept messages with more than 998 characters on a line and have Momentum fix those messages by breaking up lines with more than 998 characters a value of "fix" may be specified.

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

As of version 3.0.25, this option can be set to a numeric value. When `rfc2822_max_line_length_policy` is set to a value other than `none`, it is recommended that `RFC2822_Max_Line_Length` be set to a *numeric* value greater than the RFC guideline. For example, `rfc2822_max_line_length = 2048`.

<a name="idp11380784"></a> 
## Scope

RFC2822_Max_Line_Length is valid in the global and the pathway scopes.

<a name="idp11382464"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope), [rfc2822_max_line_length_policy](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length-policy)