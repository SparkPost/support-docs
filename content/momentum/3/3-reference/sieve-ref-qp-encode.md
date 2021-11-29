---
lastUpdated: "03/26/2020"
title: "qp_encode"
description: "qp encode quoted printable encode a string qp encode string charset Quoted printable encode all the encodable characters in a string and return the result A character encoding may be specified as an optional second argument Example 16 118 qp encode example..."
---

<a name="sieve.ref.qp_encode"></a> 
## Name

qp_encode — quoted-printable encode a string

## Synopsis

`qp_encode` { *`string`* } [ *`charset`* ]

<a name="idp31085472"></a> 
## Description

Quoted-printable encode all the encodable characters in a string and return the result. A character encoding may be specified as an optional second argument.

<a name="example.ap_encode"></a> 


```
$encoded = qp_encode "Postal Engine ®";
  $encoded2 = qp_encode "Postal Engine ®" "ISO-8859-1";
  ec_log "encoded: ${encoded}";
  ec_log "encoded2: ${encoded2}";
```