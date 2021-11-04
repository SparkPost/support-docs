---
lastUpdated: "03/26/2020"
title: "msgpart:text"
description: "msgpart text The entire message body part is replaced by the supplied text msgpart text value type charset This function has the same semantics and purpose as the Message equivalent see msg text except that it is scoped to the message part currently being referenced instead of the entire message..."
---

<a name="lua.ref.msgpart_text2"></a> 
## Name

msgpart:text — The entire message body part is replaced by the supplied text

<a name="idp17140240"></a> 
## Synopsis

`msgpart:text(value, type, charset);`

```
value: string
type: string, optional
charset: string, optional
```
<a name="idp17143264"></a> 
## Description

This function has the same semantics and purpose as the Message equivalent (see [msg:text](/momentum/4/lua/ref-msg-text)), except that it is scoped to the message part currently being referenced instead of the entire message.

This function does not always return a string. It can return `nil` on message parts where there is no body content.

### Warning

In the current design, this function applies encoding and MIME headers but **does not dot stuff** .

Enable this function with the statement `require('msys.extended.message');`.