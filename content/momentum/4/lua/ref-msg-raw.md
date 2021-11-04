---
lastUpdated: "10/05/2021"
title: "msg:raw"
description: "msg raw Set or returns the message content msg raw value and the message length If a value is provided set the content of the message to that value Otherwise this function returns the full RFC 2822 message as a string along with the length as an integer Enable this function with the statement require msys extended message..."
---

<a name="lua.ref.msg_raw"></a> 
## Name

msg:raw — Set or returns the message content and the message length

<a name="idp16866720"></a> 
## Synopsis

`msg:raw(value);`

`value: string, optional`<a name="idp16869696"></a> 
## Description

If a value is provided, set the content of the message to that value. Otherwise this function returns the full RFC2822 message as a string along with the length as an integer.

Enable this function with the statement `require('msys.extended.message');`.
