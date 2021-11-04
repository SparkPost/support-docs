---
lastUpdated: "03/26/2020"
title: "ec_header_add"
description: "ec header add prepend a header to the current message ec header add field name field body This will prepend an RFC 2822 header named field name with the content field body to the current message You should not use this function in the set binding phases regardless of version..."
---

<a name="sieve.ref.ec_header_add"></a> 
## Name

ec_header_add — prepend a header to the current message

## Synopsis

`ec_header_add` { *`field-name`* } { *`field-body`* }

<a name="idp29809056"></a> 
## Description

This will prepend an RFC2822 header named <field-name> with the content <field-body> to the current message.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.