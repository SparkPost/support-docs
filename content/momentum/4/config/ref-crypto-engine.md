---
lastUpdated: "03/26/2020"
title: "crypto_engine"
description: "crypto engine enable hardware cryptography acceleration crypto engine engine name crypto engine is an option to allow hardware acceleration of the cryptographic processes in Momentum The right hand side takes the value of the specific hardware acceleration engine present There is no default value for this option The example below..."
---

<a name="conf.ref.crypto_engine"></a> 
## Name

crypto_engine — enable hardware cryptography acceleration

> **NOTE: This option depends on the OpenSSL ENGINE API, which was removed in OpenSSL 3.0 in favor of the provider model.** On builds running OpenSSL 3.x (including the 3.5.x series), `crypto_engine` has no effect and is silently ignored; it remains functional only on OpenSSL 1.1.1 builds (for example, RHEL 8).

## Synopsis

crypto_engine = "*`engine_name`*"

<a name="idp23994336"></a> 
## Description

`crypto_engine` is an option to allow hardware acceleration of the cryptographic processes in Momentum. The right hand side takes the value of the specific hardware acceleration engine present. There is no default value for this option.

The example below shows how to configure Momentum to use the pkcs12 engine.

<a name="example.crypto_engine"></a> 


`crypto_engine = "pkcs12"`
<a name="idp23999840"></a> 
## Scope

crypto_engine is valid in the global scope.
