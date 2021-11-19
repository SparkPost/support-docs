---
lastUpdated: "03/26/2020"
title: "msg:raw"
description: "msg raw Set or returns the message content msg raw value If a value is provided set the content of the message to that value Otherwise this function returns the full RFC 2822 message as a string Enable this function with the statement require msys extended message..."
---

<a name="lua.ref.msg_raw"></a> 
## Name

msg:raw — Set or returns the message content

<a name="idp25564368"></a> 
## Synopsis

`msg:raw(value);`

`value: string, optional`<a name="idp25567056"></a> 
## Description

If a value is provided, set the content of the message to that value. Otherwise this function returns the full RFC2822 message as a string.

Enable this function with the statement `require('msys.extended.message');`.