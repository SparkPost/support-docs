---
lastUpdated: "03/26/2020"
title: "msg:text"
description: "msg text Replace the entire message body msg text value type charset The entire message body is replaced by the supplied text The text will be converted to the specified charset and transfer encoding will be applied affecting the content type and related headers of the message Enable this function..."
---

<a name="lua.ref.msg_text1"></a> 
## Name

msg:text — Replace the entire message body

<a name="idp25636336"></a> 
## Synopsis

`msg:text(value, type, charset);`

```
value: string
type: string, optional
charset: string, optional
```
<a name="idp25639072"></a> 
## Description

The entire message body is replaced by the supplied text. The text will be converted to the specified charset and transfer encoding will be applied affecting the content-type and related headers of the message.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25641840"></a> 
## See Also

[msg:text](/momentum/3/3-reference/3-reference-lua-ref-msg-text)