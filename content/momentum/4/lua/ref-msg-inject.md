---
lastUpdated: "03/26/2020"
title: "msg:inject"
description: "msg inject Use this function to send mail msg inject mailfrom rcptto Use this function to send mail mailfrom is the address of the sender in the form of localpart domain rcptto is the address of the recipient in the form of localpart domain If you want to send this..."
---

<a name="lua.ref.msg_inject"></a> 
## Name

msg:inject — Use this function to send mail

<a name="idp16772960"></a> 
## Synopsis

`msg:inject(mailfrom, rcptto);`

```
mailfrom: string
rcptto: string
```
<a name="idp16775952"></a> 
## Description

Use this function to send mail. `mailfrom` is the address of the sender in the form of "`localpart@domain`". `rcptto` is the address of the recipient in the form of `localpart@domain`. If you want to send this mail to multiple addresses, separate the addresses using a ‘`,`’.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16781168"></a> 
## See Also

[msg:build](/momentum/4/lua/ref-msg-build)