---
lastUpdated: "03/26/2020"
title: "msgpart:body_replace"
description: "msgpart body replace Streaming interface to a PCRE replacement of a message body part minus headers msgpart body replace pattern replacement Streaming interface to a PCRE replacement of a message body part minus headers Enable this function with the statement require msys extended message..."
---

<a name="lua.ref.msgpart_body_replace"></a> 
## Name

msgpart:body_replace — Streaming interface to a PCRE replacement of a message body part (minus headers)

<a name="idp25723296"></a> 
## Synopsis

`msgpart:body_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25725968"></a> 
## Description

Streaming interface to a PCRE replacement of a message body part (minus headers).

Enable this function with the statement `require('msys.extended.message');`.