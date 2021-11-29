---
lastUpdated: "03/26/2020"
title: "disclaimer_add"
description: "disclaimer add add a disclaimer to an email disclaimer add hash Use the disclaimer add function to append a message to an email For example this function may be used to indicate that an email has been scanned Sieve scripts using disclaimer add can be used in any stage or..."
---

<a name="sieve.ref.disclaimer_add"></a> 
## Name

disclaimer_add — add a disclaimer to an email

## Synopsis

`disclaimer_add` { *`hash`* }

<a name="idp28967008"></a> 
## Description

Use the `disclaimer_add` function to append a message to an email. For example, this function may be used to indicate that an email has been scanned.

Sieve scripts using `disclaimer_add` can be used in any stage or environment where you have a complete message body.

<a name="example.disclaimer_add"></a> 


```
$h = hash_create;
 hash_set $h "html" "<HR>
 <DIV align=center><FONT face=Arial size=2>This email has been scanned
 for viruses.</FONT></DIV>
 <DIV>
 <HR>
 </DIV>";
 disclaimer_add $h;
```

<a name="example.disclaimer_add.second"></a> 


```
$h = hash_create;
 hash_set $h "plain" "This email has been scanned for viruses";
 disclaimer_add $h;
```

When using `html` as a key, the module will look for all text/html parts that are not attachments and append the HTML disclaimer. When using `plain` as a key, the module will look for all text/plain parts that are not attachments and append the plain disclaimer. If using both, it will look for both, adding the html disclaimer to the html parts, and the plain disclaimer to the plain parts.