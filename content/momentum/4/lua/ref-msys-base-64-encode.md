---
lastUpdated: "03/26/2020"
title: "msys.base64.encode"
description: "msys base 64 encode Base 64 encode a string msys base 64 encode original fold charset original can be a string or a msys core ec string This function returns a base 64 encoded string If fold is true the encoded string is folded at every 76 bytes by inserting..."
---

<a name="lua.ref.msys.base64.encode"></a> 
## Name

msys.base64.encode — Base64-encode a string

<a name="idp17543264"></a> 
## Synopsis

`msys.base64.encode(original, fold, charset);`

```
original: mixed
fold: string, optional
charset: string, optional
```
<a name="idp17546304"></a> 
## Description

`original` can be a string or a `msys.core:_ec_string`. This function returns a base64 encoded string. If `fold` is true, the encoded string is folded at every 76 bytes by inserting a `CRLF` after that position. By default, the character encoding for all text is UTF-8\. If you would like to convert the text to a different character encoding before it is base64 encoded, then specify that as `charset`.

Enable this function with the statement `require('msys.base64');`.

<a name="idp17551584"></a> 
## See Also

[msys.base64.decode](/momentum/4/lua/ref-msys-base-64-decode)