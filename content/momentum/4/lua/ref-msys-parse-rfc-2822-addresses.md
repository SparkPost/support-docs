---
lastUpdated: "03/26/2020"
title: "msys.parseRFC2822Addresses"
description: "msys parse RFC 2822 Addresses Parse the address string per the address parsing rules defined in RFC 2822 msys parse RFC 2822 Addresses addressstring component Parse the address string per the address parsing rules defined in RFC 2822 Note that this is NOT the same specification used to parse SMTP..."
---

<a name="lua.ref.msys.parseRFC2822Addresses"></a> 
## Name

msys.parseRFC2822Addresses — Parse the address string per the address parsing rules defined in RFC2822

<a name="idp16184672"></a> 
## Synopsis

`msys.parseRFC2822Addresses(addressstring, component);`

```
addressstring: string
component: string
```
<a name="idp16187712"></a> 
## Description

Parse the address string per the address parsing rules defined in RFC2822\. *Note that this is NOT the same specification used to parse SMTP protocol addresses (RFC2821)* .

Where the address header is made up of `user+detail@domain`, the possible components are:

*   `all` the entire email address

*   `localpart` everything before the `@`

*   `user` the user portion

*   `detail` the detail portion

*   `domain` the domain portion

A table containing each detected address component is returned.

It is anticipated that you will usually want to use the `msg:address_header` function as it is more convenient.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.

<a name="idp16201632"></a> 
## See Also

[msg:address_header](/momentum/4/lua/ref-msg-address-header)