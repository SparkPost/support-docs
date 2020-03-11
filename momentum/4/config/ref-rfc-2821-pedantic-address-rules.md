---
title: "rfc2821_pedantic_address_rules"
description: "rfc 2821 pedantic address rules Allow relaxation of enforcement of the rfc 2821 address rules rfc 2821 pedantic address rules false rfc 2821 pedantic address rules true RFC 2821 has very strict guidelines about what address formats are allowable This option allows those guidelines to be relaxed If the option..."
---

<a name="conf.ref.rfc2821_pedantic_address_rules"></a> 
## Name

rfc2821_pedantic_address_rules — Allow relaxation of enforcement of the rfc2821 address rules.

## Synopsis

`rfc2821_pedantic_address_rules = false`
`rfc2821_pedantic_address_rules = true`

<a name="idp26043056"></a> 
## Description

RFC2821 has very strict guidelines about what address formats are allowable. This option allows those guidelines to be relaxed. If the option is set to its default value of true, it will enforce the full gamut of rfc2821 rules. If it is set to false, it will allow addresses of the following formats: "a..b@xxx.com" "ab.@xxx.com"

<a name="idp26045200"></a> 
## Scope

`rfc2821_pedantic_address_rules` is valid in the global and pathway scopes.

<a name="idp26047488"></a> 
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_missing_headers](conf.ref.rfc2822_missing_headers "rfc2822_missing_headers"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")