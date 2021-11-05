---
lastUpdated: "03/26/2020"
title: "msys.qp.decode"
description: "msys qp decode Decode a quoted printable message msys qp decode encoded txt charset encoded text is a quoted printable encoded string This function returns the decoded bytes in a string If the text cannot be decoded it raises an error By default the character encoding for the decoded text..."
---

<a name="lua.ref.msys.qp.decode"></a> 
## Name

msys.qp.decode — Decode a quoted-printable message

<a name="idp18304352"></a> 
## Synopsis

`msys.qp.decode(encoded_txt, charset);`

```
encoded_txt: string
charset: string, optional
```
<a name="idp18307360"></a> 
## Description

`encoded_text` is a quoted-printable encoded string. This function returns the decoded bytes in a string. If the text cannot be decoded, it raises an error. By default, the character encoding for the decoded text is UTF-8\. If the original text is not UTF-8, its character encoding must be specified as `charset` in order for the decoded text returned from this function to be in UTF-8.

Enable this function with the statement `require('msys.qp');`.

<a name="idp18311392"></a> 
## See Also

[msys.qp.encode](/momentum/4/lua/ref-msys-qp-encode)