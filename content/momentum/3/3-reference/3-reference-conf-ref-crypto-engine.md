---
lastUpdated: "03/26/2020"
title: "crypto_engine"
description: "crypto engine Enable hardware cryptography acceleration Crypto Engine engine name crypto engine is an option to allow hardware acceleration of the cryptographic processes in Momentum The right hand side takes the value of the specific hardware acceleration engine present There is no default value for this option The example below..."
---

<a name="conf.ref.crypto_engine"></a> 
## Name

crypto_engine — Enable hardware cryptography acceleration

## Synopsis

Crypto_Engine = "*`engine_name`*"

<a name="idp8673984"></a> 
## Description

`crypto_engine` is an option to allow hardware acceleration of the cryptographic processes in Momentum. The right hand side takes the value of the specific hardware acceleration engine present. There is no default value for this option.

The example below shows how to configure Momentum to use the pkcs12 engine.

<a name="example.crypto_engine"></a> 


`crypto_engine = "pkcs12"`
<a name="idp8679088"></a> 
## Scope

crypto_engine is valid in the global scope.