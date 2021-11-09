---
lastUpdated: "03/26/2020"
title: "msg:makeContainer"
description: "msg make Container Creates a new unlinked container message part msg make Container mimetype boundary add terminator Creates a new unlinked container message part The mimetype parameter specifies the MIME Content Type that is to be used If boundary is left unspecified a random boundary will be generated on your..."
---

<a name="lua.ref.msg_makeContainer"></a> 
## Name

msg:makeContainer — Creates a new, unlinked, container message part

<a name="idp16822672"></a> 
## Synopsis

`msg:makeContainer(mimetype, boundary, add_terminator);`

```
mimetype: string
boundary: string, optional
add_terminator: boolean, optional
```
<a name="idp16825744"></a> 
## Description

Creates a new, unlinked, container message part. The `mimetype` parameter specifies the MIME Content-Type that is to be used. If `boundary` is left unspecified, a random boundary will be generated on your behalf.

If add_terminator is `true`, "`CRLF.CFLF`" will be added to the container so that it can be used as the top part of a message. This parameter defaults to `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16831456"></a> 
## See Also

[msg:makeBoundary](/momentum/4/lua/ref-msg-make-boundary)