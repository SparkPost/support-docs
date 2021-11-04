---
lastUpdated: "03/26/2020"
title: "msg:rcptto"
description: "msg rcptto Sets the RCPT TO email address if one is provided msg rcptto Sets the RCPT TO email address if one is provided and returns the current or new value Enable this function with the statement require msys extended message The function may be used to return the current..."
---

<a name="lua.ref.msg_rcptto"></a> 
## Name

msg:rcptto — Sets the 'RCPT TO' email address if one is provided

<a name="idp16903488"></a> 
## Synopsis

`msg:rcptto(...);`

`...: string, optional`<a name="idp16906448"></a> 
## Description

Sets the 'RCPT TO' email address if one is provided and returns the current or new value.

Enable this function with the statement `require('msys.extended.message');`.

### Note

The function may be used to return the current `RCPT TO` address in any validation phase from `validate_rcptto` and later. However, if you want to **modify** the `RCPT TO` address, you must do this in `validate_data_spool_each_rcpt` or later.