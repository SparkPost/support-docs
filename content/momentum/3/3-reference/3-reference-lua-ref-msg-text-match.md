---
lastUpdated: "03/26/2020"
title: "msg:text_match"
description: "msg text match Streaming PCRE search across the transfer decoded UTF 8 text version of the message body msg text match pattern Streaming PCRE search across the transfer decoded UTF 8 text version of the message body Only parts that have a text mime type will be included in the..."
---

<a name="lua.ref.msg_text_match"></a> 
## Name

msg:text_match — Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body

<a name="idp25647968"></a> 
## Synopsis

`msg:text_match(pattern);`

`pattern: string`<a name="idp25650656"></a> 
## Description

Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body. Only parts that have a 'text' mime type will be included in the search. This function returns the matches as a table. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.