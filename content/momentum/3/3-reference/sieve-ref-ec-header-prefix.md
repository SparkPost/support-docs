---
lastUpdated: "03/26/2020"
title: "ec_header_prefix"
description: "ec header prefix prepend to a header in the current message ec header prefix field name field body This will find the header named field name and should it exist prepend the specified newtext to the field body of the header You should not use this function in the set..."
---

<a name="sieve.ref.ec_header_prefix"></a> 
## Name

ec_header_prefix — prepend to a header in the current message

## Synopsis

`ec_header_prefix` { *`field-name`* } { *`field-body`* }

<a name="idp29869424"></a> 
## Description

This will find the header named <field-name> and should it exist, prepend the specified newtext to the field body of the header.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.