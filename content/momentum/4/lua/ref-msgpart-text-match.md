---
lastUpdated: "03/26/2020"
title: "msgpart:text_match"
description: "msgpart text match Streaming a PCRE search across the transfer decoded UTF 8 text version of the message body part msgpart text match pattern Streaming a PCRE search across the transfer decoded UTF 8 text version of the message body part If no match is found false is returned Enable..."
---

<a name="lua.ref.msgpart_text_match"></a> 
## Name

msgpart:text_match — Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part

<a name="idp17166416"></a> 
## Synopsis

`msgpart:text_match(pattern);`

`pattern: string`<a name="idp17169344"></a> 
## Description

Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.