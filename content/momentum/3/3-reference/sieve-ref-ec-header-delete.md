---
lastUpdated: "03/26/2020"
title: "ec_header_delete"
description: "ec header delete remove a header from the current message ec header delete field name This will delete the named RFC 2822 header from the current email message You should not use this function in the set binding phases regardless of version and as of Momentum 2 2 2 37..."
---

<a name="sieve.ref.ec_header_delete"></a> 
## Name

ec_header_delete — remove a header from the current message

## Synopsis

`ec_header_delete` { *`field-name`* }

<a name="idp29822352"></a> 
## Description

This will delete the named RFC2822 header from the current email message.

### Note

You should not use this function in the set_binding phases (regardless of version), and, as of Momentum 2.2.2.37, it will not work in these phases.