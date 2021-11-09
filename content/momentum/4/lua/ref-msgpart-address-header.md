---
lastUpdated: "03/26/2020"
title: "msgpart:address_header"
description: "msgpart address header Parse each instance of the named header for RFC 2822 addresses msgpart address header headername component Parse each instance of the named header for RFC 2822 addresses Where the address header is made up of user detail domain the possible components are all the entire email address..."
---

<a name="lua.ref.msgpart_address_header"></a> 
## Name

msgpart:address_header — Parse each instance of the named header for RFC2822 addresses

<a name="idp17009840"></a> 
## Synopsis

`msgpart:address_header(headername, component);`

```
headername: string
component: string, optional
```
<a name="idp17012864"></a> 
## Description

Parse each instance of the named header for RFC2822 addresses.

Where the address header is made up of `user+detail@domain`, the possible components are:

*   `all` the entire email address

*   `localpart` everything before the `@`

*   `user` the user portion

*   `detail` the detail portion

*   `domain` the domain portion

Enable this function with the statement `require('msys.extended.message');`.