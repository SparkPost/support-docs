---
lastUpdated: "03/26/2020"
title: "ec_valid_mime"
description: "ec valid mime determine if the message is valid MIME ec valid mime As a part of a conditional test ec valid mime evaluates true if Momentum's internal MIME parser did not find any MIME errors improper headers or encapsulation Note that Momentum's MIME parser follows the RFC mantra be..."
---

<a name="sieve.ref.ec_valid_mime"></a> 
## Name

ec_valid_mime — determine if the message is valid MIME

## Synopsis

`ec_valid_mime`

<a name="idp30790048"></a> 
## Description

As a part of a conditional test, ec_valid_mime evaluates true if Momentum's internal MIME parser did not find any MIME errors (improper headers or encapsulation). Note that Momentum's MIME parser follows the RFC mantra, "be lenient on what you accept." We are lenient when parsing MIME headers to attempt to find the MIME parts that certain MUAs (like Outlook) would find to aid virus detection and other processes based on content analysis.

<a name="example.ec_vaklid_mime"></a> 


```
if not ec_valid_mime {
  ec_header_add "X-MIME-Analysis" "Broken";
}
```