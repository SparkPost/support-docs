---
lastUpdated: "03/26/2020"
title: "msgpart:body_match"
description: "msgpart body match Streaming interface to a PCRE search of a message body part minus headers msgpart body match pattern Streaming interface to a PCRE search of a message body part minus headers If no match is found false is returned Enable this function with the statement require msys extended..."
---

<a name="lua.ref.msgpart_body_match"></a> 
## Name

msgpart:body_match — Streaming interface to a PCRE search of a message body part (minus headers)

<a name="idp25714528"></a> 
## Synopsis

`msgpart:body_match(pattern);`

`pattern: string`<a name="idp25717168"></a> 
## Description

Streaming interface to a PCRE search of a message body part (minus headers). If no match is found, `false` is returned.

Enable this function with the statement `require('msys.extended.message');`.