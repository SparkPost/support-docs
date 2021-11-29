---
lastUpdated: "03/26/2020"
title: "msys.qp.encode"
description: "msys qp encode Quoted printable encode a string msys qp encode original charset original can be a string or a msys core ec string By default the character encoding for all text is UTF 8 If you would like to convert the text to a different character encoding before it..."
---

<a name="lua.ref.msys.qp.encode"></a> 
## Name

msys.qp.encode — Quoted-printable encode a string

<a name="idp26887664"></a> 
## Synopsis

`msys.qp.encode(original, charset);`

```
original: mixed
charset: string, optional
```
<a name="idp26890384"></a> 
## Description

`original` can be a string or a `msys.core:_ec_string`. By default, the character encoding for all text is UTF-8\. If you would like to convert the text to a different character encoding before it is quoted-printable encoded, then specify a `charset`.

Enable this function with the statement `require('msys.qp');`.

<a name="idp26894432"></a> 
## See Also

[msys.qp.decode](/momentum/3/3-reference/3-reference-lua-ref-msys-qp-decode)