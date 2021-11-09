---
lastUpdated: "03/26/2020"
title: "msgpart:raw_match"
description: "msgpart raw match Streaming interface to a PCRE search of the current message part msgpart raw match pattern Streaming interface to a PCRE search of the current message part If no match is found false is returned Enable this function with the statement require msys extended message..."
---

<a name="lua.ref.msgpart_raw_match"></a> 
## Name

msgpart:raw_match — Streaming interface to a PCRE search of the current message part

<a name="idp17120528"></a> 
## Synopsis

`msgpart:raw_match(pattern);`

`pattern: string`<a name="idp17123456"></a> 
## Description

Streaming interface to a PCRE search of the current message part. If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.