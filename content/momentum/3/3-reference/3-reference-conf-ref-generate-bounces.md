---
lastUpdated: "03/26/2020"
title: "generate_bounces"
description: "generate bounces generate MD Ns if mail is failed after reception generate bounces true generate bounces false Momentum has the ability to generate failure messages to be delivered to the envelope sender of an undeliverable message In large outbound mail systems for example large mailing lists it is often desirable..."
---

<a name="conf.ref.generate_bounces"></a> 
## Name

generate_bounces — generate MDNs if mail is failed after reception

## Synopsis

`generate_bounces = true`

`generate_bounces = false`

<a name="idp9626016"></a> 
## Description

Momentum has the ability to generate failure messages to be delivered to the envelope sender of an undeliverable message. In large outbound mail systems (for example large mailing lists), it is often desirable to suppress the generation and delivery of such failure notifications and opt for a more efficient approach such as post-processing failure logs. Note that this configuration option applies only to in-band bounces.

The default value for this option is `true` for conformance with the SMTP specification.

<a name="idp9629024"></a> 
## Scope

generate_bounces is valid in the binding, binding_group, domain and global scopes.

<a name="idp9630704"></a> 
## See Also

[bounce_behavior](/momentum/3/3-reference/3-reference-conf-ref-bounce-behavior)