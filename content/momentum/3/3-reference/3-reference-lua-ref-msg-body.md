---
lastUpdated: "03/26/2020"
title: "msg:body"
description: "msg body Set the message body minus headers if provided msg body This function sets the message body minus headers if it is provided and returns the message body minus headers This applies to the body not headers without decoding transfer encoding When called without parameters this function returns content..."
---

<a name="lua.ref.msg_body"></a> 
## Name

msg:body — Set the message body (minus headers) if provided

<a name="idp25362736"></a> 
## Synopsis

`msg:body(...);`

`...: mixed, optional`<a name="idp25365408"></a> 
## Description

This function sets the message body (minus headers) if it is provided and returns the message body (minus headers). This applies to the body (not headers), without decoding transfer encoding.

### Note

When called without parameters, this function returns content that does not have the end-of-data marker (`CRLF.CRLF`). However, when setting the message body you must append the end-of-data marker to the content.

If you are modifying content be sure set readonly to `false` using the [msg:mime](/momentum/3/3-reference/3-reference-lua-ref-msg-mime) function.

Enable this function with the statement `require('msys.extended.message');`.