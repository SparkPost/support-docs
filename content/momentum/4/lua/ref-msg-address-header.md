---
lastUpdated: "03/26/2020"
title: "msg:address_header"
description: "msg address header Returns address components as an array msg address header Parses each instance of the named header for RFC 2822 addresses and returns the component of those addresses as an array The ellipsis in the parameter list indicates that this function has any number of arguments Enable this..."
---

<a name="lua.ref.msg_address_header"></a> 
## Name

msg:address_header — Returns address components as an array

<a name="idp16598928"></a> 
## Synopsis

`msg:address_header(...);`

`...: mixed`<a name="idp16601904"></a> 
## Description

Parses each instance of the named header for RFC2822 addresses and returns the component of those addresses as an array.

The ellipsis (...) in the parameter list indicates that this function has any number of arguments.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp16605344"></a> 
## See Also

[msys.parseRFC2822Addresses](/momentum/4/lua/ref-msys-parse-rfc-2822-addresses)