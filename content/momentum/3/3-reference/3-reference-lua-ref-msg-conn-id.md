---
lastUpdated: "03/26/2020"
title: "msg.conn_id"
description: "msg conn id Return the human readable ec message conn id msg conn id When used in a string context or explicitly forced into a string via tostring msg conn id this function returns the human readable ec message conn id Enable this function with the statement require msys extended..."
---

<a name="lua.ref.msg.conn_id"></a> 
## Name

msg.conn_id — Return the human-readable ec_message.conn_id

<a name="idp25297904"></a> 
## Synopsis

`msg.conn_id;`

<a name="idp25299888"></a> 
## Description

When used in a string context, or explicitly forced into a string via `tostring(msg.conn_id)`, this function returns the human-readable ec_message.conn_id.

Enable this function with the statement `require('msys.extended.message');`.