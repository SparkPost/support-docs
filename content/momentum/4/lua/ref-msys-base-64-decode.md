---
lastUpdated: "03/26/2020"
title: "msys.base64.decode"
description: "msys base 64 decode Decode a base 64 encoded string msys base 64 decode encoded text charset encoded text is a base 64 encoded string This function returns the decoded bytes in a string If the input cannot be decoded it raises an error By default the character encoding for..."
---

<a name="lua.ref.msys.base64.decode"></a> 
## Name

msys.base64.decode — Decode a base64 encoded string

<a name="idp17530736"></a> 
## Synopsis

`msys.base64.decode(encoded_text, charset);`

```
encoded_text: string
charset: string, optional
```
<a name="idp17533760"></a> 
## Description

`encoded_text` is a base64 encoded string. This function returns the decoded bytes in a string. If the input cannot be decoded, it raises an error. By default, the character encoding for decoded text is UTF-8\. If the original text is not UTF-8, its character encoding must be specified using `charset` in order for the decoded text returned from this function to be UTF-8.

Enable this function with the statement `require('msys.base64');`.

<a name="idp17537760"></a> 
## See Also

[msys.base64.encode](/momentum/4/lua/ref-msys-base-64-encode)