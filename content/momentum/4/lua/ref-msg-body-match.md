---
lastUpdated: "03/26/2020"
title: "msg:body_match"
description: "msg body match Streaming interface to a PCRE search of a message body minus headers msg body match pattern Streaming interface to a PCRE search of a message body minus headers If matches are found they are returned Otherwise this function returns false Enable this function with the statement require..."
---

<a name="lua.ref.msg_body_match"></a> 
## Name

msg:body_match — Streaming interface to a PCRE search of a message body (minus headers)

<a name="idp16661776"></a> 
## Synopsis

`msg:body_match(pattern);`

`pattern: string`<a name="idp16664752"></a> 
## Description

Streaming interface to a PCRE search of a message body (minus headers). If matches are found, they are returned. Otherwise this function returns `false`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16668112"></a> 
## See Also

[msg:body_replace](/momentum/4/lua/ref-msg-body-replace)