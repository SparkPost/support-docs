---
lastUpdated: "03/26/2020"
title: "rfc2821_pedantic_address_rules"
description: "rfc 2821 pedantic address rules Allow relaxation of enforcement of the rfc 2821 address rules RFC 2821 pedantic address rules false RFC 2821 pedantic address rules true This option is available as of version 3 0 and replaces the version 2 2 option of the same name declared in the..."
---

<a name="conf.ref.rfc2821_pedantic_address_rules"></a> 
## Name

rfc2821_pedantic_address_rules — Allow relaxation of enforcement of the rfc2821 address rules.

## Synopsis

`RFC2821_pedantic_address_rules = false`
`RFC2821_pedantic_address_rules = true`

<a name="idp11277408"></a> 
## Description

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

RFC2821 has very strict guidelines about what address formats are allowable. This option allows those guidelines to be relaxed. If the option is set to its default value of true, it will enforce the full gamut of rfc2821 rules. If it is set to false, it will allow addresses of the following formats: "a..b@xxx.com" "ab.@xxx.com"

<a name="idp11280304"></a> 
## Scope

RFC2821_pedantic_address_rules is valid in the global and pathway scopes.

<a name="idp11281984"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)