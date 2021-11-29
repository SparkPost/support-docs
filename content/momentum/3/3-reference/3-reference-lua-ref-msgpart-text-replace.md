---
lastUpdated: "03/26/2020"
title: "msgpart:text_replace"
description: "msgpart text replace Streaming interface to a PCRE replacement of textual content from the message body parts msgpart text replace pattern replacement Streaming interface to PCRE replacement of textual content from the message body parts Only parts that have a text mime type will be included in the search Enable..."
---

<a name="lua.ref.msgpart_text_replace"></a> 
## Name

msgpart:text_replace — Streaming interface to a PCRE replacement of textual content from the message body parts

<a name="idp25850208"></a> 
## Synopsis

`msgpart:text_replace(pattern, replacement);`

```
pattern: string
replacement: string
```
<a name="idp25852880"></a> 
## Description

Streaming interface to PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search.

Enable this function with the statement `require('msys.extended.message');`.