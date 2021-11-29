---
lastUpdated: "03/26/2020"
title: "msg:text"
description: "msg text Return the transfer decoded text for the body msg text This function returns the transfer decoded text for the body in UTF 8 Only parts that have a text mime type will be included If there are multiple text parts they are returned as a table Enable this..."
---

<a name="lua.ref.msg_text"></a> 
## Name

msg:text — Return the transfer decoded text for the body

<a name="idp25628096"></a> 
## Synopsis

`msg:text(...);`

`...: mixed`<a name="idp25630768"></a> 
## Description

This function returns the transfer decoded text for the body, in UTF-8\. Only parts that have a 'text' mime type will be included. If there are multiple text parts, they are returned as a table.

Enable this function with the statement `require('msys.extended.message');`.