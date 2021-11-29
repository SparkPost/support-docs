---
lastUpdated: "03/26/2020"
title: "ec_mime_parts"
description: "ec mime parts test against metadata for each MIME part in a message ec mime parts comparison metadata value This test allows the metadata of every MIME part of a message to be inspected The metadata attribute is extracted from each MIME part and compared to the specified value using..."
---

<a name="sieve.ref.ec_mime_parts"></a> 
## Name

ec_mime_parts — test against metadata for each MIME part in a message

## Synopsis

`ec_mime_parts` { *`comparison`* } { *`metadata`* } { *`value`* }

<a name="idp30288608"></a> 
## Description

This test allows the metadata of every MIME part of a message to be inspected. The "metadata" attribute is extracted from each MIME part and compared to the specified "value" using the provided comparison method. Currently supported metadata attributes are:

*   "filename"

<a name="example.ec_mime_parts"></a> 


```
if ec_mime_parts :regex "filename"
                        "^.*\\.(scr|bat|pif|com|cpl|exe|vbs|hta|cmd|zip)$" {
   ec_action 550 "5.7.1 bad attachment";
}
```