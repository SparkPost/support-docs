---
lastUpdated: "03/26/2020"
title: "tls_verify"
description: "tls verify specify how to handle the remote presented certificate tls verify no If TLS is set to required or ifavailable and TLS is negotiated with the remote mail exchange this option will specify how the remote presented certificate should be handled If this option is set to no then..."
---

<a name="conf.ref.tls_verify"></a> 
## Name

tls_verify — specify how to handle the remote presented certificate

## Synopsis

`tls_verify = "no"`

<a name="idp12165712"></a> 
## Description

If TLS is set to `required` or `ifavailable` and TLS is negotiated with the remote mail exchange, this option will specify how the remote presented certificate should be handled. If this option is set to `no`, then no checking of the certificate will be performed. Given the number of self-signed certificates used on mail hosts, this setting is probably the most useful. If this setting is `ca`, then the connection will only proceed if the certificate presented is signed by a valid certificate authority listed in the CA list specified by TLS_CA. If this setting is `host`, then in addition to requiring that the certificate be signed by a valid certificate authority, the common name presented in the certificate must either exactly match the domain or mail exchange to which we are connected.

### Note

For custom behavior create a C module that uses the outbound_smtp_tls_verify_callback and inbound_smtp_tls_verify_callback hooks. For more information see [outbound_smtp_tls_verify_callback](/momentum/3/3-api/hooks-core-outbound-smtp-tls-verify-callback) and [inbound_smtp_tls_verify_callback](/momentum/3/3-api/hooks-core-inbound-smtp-tls-verify-callback).

The default value is `no`.

<a name="idp12174000"></a> 
## Scope

`tls_verify` is valid in the binding, binding_group, domain and global scopes.