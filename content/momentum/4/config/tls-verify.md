---
lastUpdated: "03/26/2020"
title: "tls_verify"
description: "tls verify specify how to handle the remote presented certificate TLS Verify no ca host optional Configuration Change Support for GNUTLS is available as of version 4 1 for SMTP reception and SMTP deliveries only If TLS is set to required or ifavailable and TLS is negotiated with the remote..."
---

<a name="config.tls_verify"></a> 
## Name

tls_verify — specify how to handle the remote presented certificate

## Synopsis

`TLS_Verify = "no|ca|host|optional"`

<a name="idp27022064"></a> 
## Description

**Configuration Change. ** Support for GNUTLS is available as of version 4.1 for SMTP reception and SMTP deliveries only.

If TLS is set to `required` or `ifavailable` and TLS is negotiated with the remote mail exchange, this option specifies how the remote presented certificate should be handled.

This option can be set to the following:

*   `no` – The certificate will not be checked. Given the number of self-signed certificates used on mail hosts, this setting is probably the most useful.

*   `ca` – The connection will only proceed if the certificate presented is signed by a valid certificate authority listed in the CA list specified by TLS_Ca.

*   `host` – In addition to requiring that the certificate be signed by a valid certificate authority, the common name presented in the certificate must either exactly match the domain or mail exchange to which we are connected. If this verification fails, delivery fails.

*   `optional` – Performs the same verification as the `host` setting but allows delivery if the verification fails.

### Note

For custom behavior create a C module that uses the [outbound_smtp_tls_verify_callback](/momentum/3/3-api/hooks-core-outbound-smtp-tls-verify-callback) and [inbound_smtp_tls_verify_callback](/momentum/3/3-api/hooks-core-inbound-smtp-tls-verify-callback) hooks.

The default value is `no`.

<a name="idp27037504"></a> 
## Scope

`tls_verify` is valid in the binding, binding_group, domain and global scopes.