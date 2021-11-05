---
lastUpdated: "03/26/2020"
title: "msg:forward"
description: "msg forward Forward the current message to recipients other than the original recipients msg forward sender rcptto text subject charset Forward the current message to recipients other than the original recipients A new message is created and the original message is attached to it The parameters are as follows sender..."
---

<a name="lua.ref.msg_forward"></a> 
## Name

msg:forward — Forward the current message to recipients other than the original recipients

<a name="idp16733472"></a> 
## Synopsis

`msg:forward(sender, rcptto, text, subject, charset);`

```
sender: string
rcptto: string
text: string
subject: string, optional
charset: string, optional
```
<a name="idp16736560"></a> 
## Description

Forward the current message to recipients other than the original recipients. A new message is created and the original message is attached to it. The parameters are as follows:

*   `sender` the address of the forwarder

*   `rcptto` the addresses where the message is to be forwarded to. If there are more than one address, separate them with `,`.

*   `text` brief text. If it contains non-ASCII or non-printable ASCII, charset must be specified.

*   `subject` optional subject line. If it contains non-ASCII or non-printable ASCII, encode it according to RFC 2047.

*   `charset` the character encoding of text. It need not be specified if text contains only ASCII.

Enable this function with the statement `require('msys.extended.message');`.