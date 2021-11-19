---
lastUpdated: "03/26/2020"
title: "ec_base64_encode"
description: "ec base 64 encode base 64 encode text ec base 64 encode plain text Convert plain text to a base 64 representation Sieve scripts using ec base 64 encode can be used in any phase Example 16 27 ec base 64 encode example ec base 64 decode..."
---

<a name="sieve.ref.ec_base64_encode"></a> 
## Name

ec_base64_encode — base64 encode text

## Synopsis

`ec_base64_encode` { *`plain_text`* }

<a name="idp29191440"></a> 
## Description

Convert plain text to a base 64 representation.

Sieve scripts using `ec_base64_encode` can be used in any phase.

<a name="example.ec_base64"></a> 


`$enc = ec_base64_encode $plain;`
<a name="idp29196976"></a> 
## See Also

[ec_base64_decode](/momentum/3/3-reference/sieve-ref-ec-base-64-decode)