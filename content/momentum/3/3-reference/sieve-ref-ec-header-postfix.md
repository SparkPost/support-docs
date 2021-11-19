---
lastUpdated: "03/26/2020"
title: "ec_header_postfix"
description: "ec header postfix append to a header of the current message ec header postfix field name field body This will find the header named field name and should it exist append the specified newtext to the field body of the header You should not use this function in the set..."
---

<a name="sieve.ref.ec_header_postfix"></a> 
## Name

ec_header_postfix — append to a header of the current message

## Synopsis

`ec_header_postfix` { *`field-name`* } { *`field-body`* }

<a name="idp29854896"></a> 
## Description

This will find the header named <field-name> and should it exist, append the specified newtext to the field body of the header.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.