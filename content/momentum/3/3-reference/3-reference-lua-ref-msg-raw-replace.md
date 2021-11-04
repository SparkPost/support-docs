---
lastUpdated: "03/26/2020"
title: "msg:raw_replace"
description: "msg raw replace Streaming interface to a PCRE replacement of message content msg raw replace pattern replacement Streaming interface to a PCRE replacement of message content This function has the same semantics as raw match Enable this function with the statement require msys extended message msg raw match..."
---

<a name="lua.ref.msg_raw_replace"></a> 
## Name

msg:raw_replace — Streaming interface to a PCRE replacement of message content

<a name="idp25585856"></a> 
## Synopsis

`msg:raw_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25588560"></a> 
## Description

Streaming interface to a PCRE replacement of message content. This function has the same semantics as `raw_match`.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25591648"></a> 
## See Also

[msg:raw_match](/momentum/3/3-reference/3-reference-lua-ref-msg-raw-match)