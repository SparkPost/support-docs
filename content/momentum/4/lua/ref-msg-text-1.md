---
lastUpdated: "03/26/2020"
title: "msg:text"
description: "msg text Replace the entire message body msg text value type charset The entire message body is replaced by the supplied text The text will be converted to the specified charset and transfer encoding will be applied affecting the content type and related headers of the message Enable this function..."
---

<a name="lua.ref.msg_text1"></a> 
## Name

msg:text — Replace the entire message body

<a name="idp16944160"></a> 
## Synopsis

`msg:text(value, type, charset);`

```
value: string
type: string, optional
charset: string, optional
```
<a name="idp16947184"></a> 
## Description

The entire message body is replaced by the supplied text. The text will be converted to the specified charset and transfer encoding will be applied affecting the content-type and related headers of the message.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16950176"></a> 
## See Also

[msg:text](/momentum/4/lua/ref-msg-text)