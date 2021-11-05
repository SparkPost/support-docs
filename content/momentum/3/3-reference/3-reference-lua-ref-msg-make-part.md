---
lastUpdated: "03/26/2020"
title: "msg:makePart"
description: "msg make Part Creates a new unlinked singleton or leaf message part msg make Part mimetype body encoding Creates a new unlinked singleton or leaf message part mimetype specifies the MIME Content Type that is to be used and body is an optional io object that contains the raw message..."
---

<a name="lua.ref.msg_makePart"></a> 
## Name

msg:makePart — Creates a new, unlinked, singleton (or leaf) message part

<a name="idp25538352"></a> 
## Synopsis

`msg:makePart(mimetype, body, encoding);`

```
mimetype: string
body: userdata, io_object, optional
encoding: string, optional
```
<a name="idp25541104"></a> 
## Description

Creates a new, unlinked, singleton (or leaf) message part. `mimetype` specifies the MIME Content-Type that is to be used, and `body` is an optional io_object that contains the raw message body excluding headers. `encoding` is one of:

*   `msys.core.EC_MIME_TE_7BIT` (this is the default if left unspecified)

*   `msys.core.EC_MIME_TE_8BIT`

*   `msys.core.EC_MIME_TE_BASE64`

*   `msys.core.EC_MIME_TE_QUOTED_PRINTABLE`

Enable this function with the statement `require('msys.extended.message');`.