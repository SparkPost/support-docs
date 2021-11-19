---
lastUpdated: "03/26/2020"
title: "msg:body_match"
description: "msg body match Streaming interface to a PCRE search of a message body minus headers msg body match pattern Streaming interface to a PCRE search of a message body minus headers If matches are found they are returned Otherwise this function returns false Enable this function with the statement require..."
---

<a name="lua.ref.msg_body_match"></a> 
## Name

msg:body_match — Streaming interface to a PCRE search of a message body (minus headers)

<a name="idp25375104"></a> 
## Synopsis

`msg:body_match(pattern);`

`pattern: string`<a name="idp25377792"></a> 
## Description

Streaming interface to a PCRE search of a message body (minus headers). If matches are found, they are returned. Otherwise this function returns `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25380928"></a> 
## See Also

[msg:body_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-body-replace)