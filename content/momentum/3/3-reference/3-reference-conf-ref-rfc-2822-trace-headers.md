---
lastUpdated: "03/26/2020"
title: "rfc2822_trace_headers"
description: "rfc 2822 trace headers rfc 2822 conformance RFC 2822 Trace Headers true RFC 2822 Trace Headers false Trace headers are headers added to the email message as it passes through the system to provide evidence of its transit through the MTA These are of the form Return path and Received..."
---

<a name="conf.ref.rfc2822_trace_headers"></a> 
## Name

rfc2822_trace_headers — rfc2822 conformance

## Synopsis

`RFC2822_Trace_Headers = "true"`
`RFC2822_Trace_Headers = "false"`

<a name="idp11461552"></a> 
## Description

Trace headers are headers added to the email message as it passes through the system to provide evidence of its transit through the MTA. These are of the form "Return-path:" and "Received:". If this option is set to `true`, the following occurs:

*   If there is no Return-Path, Momentum will add one using the MAILFROM

*   If there is a Return-Path, Momentum will replace it with the MAILFROM

*   Momentum will add a Received header for this hop

If this option is set to `false`, the following occurs:

*   If there is no Return-Path, Momentum will not add one

*   If there is a Return-Path, Momentum will ignore the existing header

*   Ecelerity will **not** add a Received header for this hop

### Note

This option is available as of version 3.0 and replaces the version 2.2 option of the same name declared in the RFC2822 scope.

Trace headers are defined in RFC 822 and 2822 and recommended by RFC 821 and 2821\. It is recommended that they be enabled (per the default), but can be disabled under special circumstances by setting this option to `false`.

Turning off trace headers can easily result in messages looking like direct-to-mx spam, especially if there are no additional hops through internal MTAs before leaving the network.

Turning off trace headers may hamper mail loop detection methods, allowing malformed addresses to loop infinitely through the system.

<a name="idp11474592"></a> 
## Scope

RFC2822_Trace_Headers is valid in the global and the pathway scopes.

<a name="idp11476256"></a> 
## See Also

[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body), [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers), [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header), [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers), [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length), [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header), [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules), [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)