---
lastUpdated: "03/26/2020"
title: "msg:body_replace"
description: "msg body replace Streaming interface to a PCRE replacement of a message body minus headers msg body replace pattern replacement Streaming interface to a PCRE replacement of a message body minus headers This function has the same semantics as msg body match If no match is found false is returned..."
---

<a name="lua.ref.msg_body_replace"></a> 
## Name

msg:body_replace — Streaming interface to a PCRE replacement of a message body (minus headers)

<a name="idp16675024"></a> 
## Synopsis

`msg:body_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp16677968"></a> 
## Description

Streaming interface to a PCRE replacement of a message body (minus headers). This function has the same semantics as `msg:body_match`. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16681760"></a> 
## See Also

[msg:body_match](/momentum/4/lua/ref-msg-body-match)