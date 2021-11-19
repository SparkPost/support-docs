---
lastUpdated: "03/26/2020"
title: "msg.id"
description: "msg id Return the human readable ec message id msg id When used in a string context or explicitly forced into a string via tostring msg id this function returns the human readable ec message id Enable this function with the statement require msys extended message msg batch id..."
---

<a name="lua.ref.msg.id"></a> 
## Name

msg.id — Return the human-readable ec_message.id

<a name="idp25305824"></a> 
## Synopsis

`msg.id;`

<a name="idp25307808"></a> 
## Description

When used in a string context, or explicitly forced into a string via `tostring(msg.id)`, this function returns the human-readable ec_message.id.

Enable this function with the statement `require('msys.extended.message');`.

<a name="idp25310912"></a> 
## See Also

[msg.batch_id](/momentum/3/3-reference/3-reference-lua-ref-msg-batch-id)