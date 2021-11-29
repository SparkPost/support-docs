---
lastUpdated: "03/26/2020"
title: "msg:raw_match"
description: "msg raw match Streaming interface to a PCRE search of the message content msg raw match pattern Streaming interface to a PCRE search of the message content This applies to the entire message content headers through body without decoding transfer encoding This function returns all matches If no match is..."
---

<a name="lua.ref.msg_raw_match"></a> 
## Name

msg:raw_match — Streaming interface to a PCRE search of the message content

<a name="idp16877056"></a> 
## Synopsis

`msg:raw_match(pattern);`

`pattern: string`<a name="idp16880016"></a> 
## Description

Streaming interface to a PCRE search of the message content. This applies to the entire message content, headers through body, without decoding transfer encoding. This function returns all matches. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16883472"></a> 
## See Also

[msg:raw_replace](/momentum/4/lua/ref-msg-raw-replace)