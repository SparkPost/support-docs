---
lastUpdated: "03/26/2020"
title: "msys.qp.encode"
description: "msys qp encode Quoted printable encode a string msys qp encode original charset dotstuffing original can be a string msys core ec string or msys core io object Use charset to convert the text to a different character encoding before it is quoted printable encoded Use dotstuffing to specify whether..."
---

<a name="lua.ref.msys.qp.encode"></a> 
## Name

msys.qp.encode — Quoted-printable encode a string

<a name="idp18316816"></a> 
## Synopsis

`msys.qp.encode(original[, charset, dotstuffing]);`

```
original: mixed
charset: string, optional
dotstuffing: boolean
```
<a name="idp18319872"></a> 
## Description

`original` can be a string, `msys.core:_ec_string`, or `msys.core:_io_object`. Use `charset` to convert the text to a different character encoding before it is quoted-printable encoded. Use `dotstuffing` to specify whether or not the encoded text will be dot stuffed if qp encoding creates new line breaks. Encoded text is returned in a string.

Enable this function with the statement `require('msys.qp');`.

<a name="idp18325104"></a> 
## See Also

[msys.qp.decode](/momentum/4/lua/ref-msys-qp-decode)