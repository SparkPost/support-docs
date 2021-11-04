---
lastUpdated: "03/26/2020"
title: "ec_header_get"
description: "ec header get obtain the values for a particular header ec header get field name This will find all headers with the matching field name and return a string list of their bodies Example 16 56 ec header get example 1 Example 16 57 ec header get example 2 The..."
---

<a name="sieve.ref.ec_header_get"></a> 
## Name

ec_header_get — obtain the values for a particular header

## Synopsis

`ec_header_get` { *`field-name`* }

<a name="idp29835888"></a> 
## Description

This will find all headers with the matching field-name and return a string list of their bodies.

<a name="example.ec_header_get"></a> 


```
$category_headers = ec_header_get "X-Category";
$first_header = $category_headers[0];
ec_log "The category is ${first_header}";
```

<a name="example.ec_header_get.second"></a> 


```
($hdr) = ec_header_get "X-Category";
ec_log "The category is ${hdr}";
```

### Note

The parameter passed to this function is case insensitive.