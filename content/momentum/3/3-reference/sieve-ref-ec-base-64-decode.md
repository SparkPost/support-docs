---
lastUpdated: "03/26/2020"
title: "ec_base64_decode"
description: "ec base 64 decode decode base 64 encoded text ec base 64 decode coded text Convert base 64 encoded text to plain text Sieve scripts using base 64 decode can be used in any phase Example 16 26 ec base 64 encode example ec base 64 encode..."
---

<a name="sieve.ref.ec_base64_decode"></a> 
## Name

ec_base64_decode — decode base64 encoded text

## Synopsis

`ec_base64_decode` { *`coded_text`* }

<a name="idp29172896"></a> 
## Description

Convert base 64 encoded text to plain text.

Sieve scripts using `base64_decode` can be used in any phase.

<a name="example.ec_base64_encode"></a> 


`$dec = ec_base64_decode $enc;`
<a name="idp29178448"></a> 
## See Also

[ec_base64_encode](/momentum/3/3-reference/sieve-ref-ec-base-64-encode)