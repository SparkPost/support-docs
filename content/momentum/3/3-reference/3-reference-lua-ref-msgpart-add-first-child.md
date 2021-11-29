---
lastUpdated: "03/26/2020"
title: "msgpart:addFirstChild"
description: "msgpart add First Child Adds a child as the first child on this part msgpart add First Child child Adds a child as the first child on this part This part must already be a container for the addition to succeed Returns true on success false on error Enable this..."
---

<a name="lua.ref.msgpart_addFirstChild"></a> 
## Name

msgpart:addFirstChild — Adds a child as the first child on this part

<a name="idp25667968"></a> 
## Synopsis

`msgpart:addFirstChild(child);`

`child: table`<a name="idp25670608"></a> 
## Description

Adds a child as the first child on this part. This part must already be a container for the addition to succeed. Returns `true` on success, `false` on error.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25674176"></a> 
## See Also

[msgpart:addLastChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-last-child)