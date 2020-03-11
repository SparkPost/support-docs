---
title: "rfc2822_missing_headers"
description: "rfc 2822 missing headers rfc 2822 conformance rfc 2822 missing headers reject rfc 2822 missing headers allow RFC 2822 requires that all messages consist of headers and a body separated by a blank line By default Momentum will reject messages that are missing their headers but by setting the Missing..."
---

<a name="conf.ref.rfc2822_missing_headers"></a> 
## Name

rfc2822_missing_headers — rfc2822 conformance

## Synopsis

`rfc2822_missing_headers = "reject"`
`rfc2822_missing_headers = "allow"`

<a name="idp26193264"></a> 
## Description

RFC 2822 requires that all messages consist of headers and a body, separated by a blank line. By default, Momentum will reject messages that are missing their headers, but by setting the Missing_Headers option to "allow", it will accept those messages and treat them as header-less messages, prepend trace headers as normal.

<a name="idp26195408"></a> 
## Scope

`rfc2822_missing_headers` is valid in the global and the pathway scopes.

<a name="idp26197696"></a> 
## See Also

[rfc2822_lone_lf_in_body](conf.ref.rfc2822_lone_lf_in_body "rfc2822_lone_lf_in_body"), [rfc2822_lone_lf_in_headers](conf.ref.rfc2822_lone_lf_in_headers "rfc2822_lone_lf_in_headers"), [rfc2822_messageid_header](conf.ref.rfc2822_messageid_header "rfc2822_messageid_header"), [rfc2822_trace_headers](conf.ref.rfc2822_trace_headers "rfc2822_trace_headers"), [rfc2822_max_line_length](conf.ref.rfc2822_max_line_length "rfc2822_max_line_length"), [rfc2822_date_header](conf.ref.rfc2822_date_header "rfc2822_date_header"), [rfc2821_pedantic_address_rules](conf.ref.rfc2821_pedantic_address_rules "rfc2821_pedantic_address_rules"), [rfc2821_allow_whitespace_in_envelope](conf.ref.rfc2821_allow_whitespace_in_envelope "rfc2821_allow_whitespace_in_envelope")