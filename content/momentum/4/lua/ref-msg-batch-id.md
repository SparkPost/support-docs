---
lastUpdated: "03/26/2020"
title: "msg.batch_id"
description: "msg batch id Return the human readable ec message batch id msg batch id When used in a string context or explicitly forced into a string via tostring msg batch id this function returns the human readable ec message batch id Enable this function with the statement require msys extended..."
---

<a name="lua.ref.msg.batch_id"></a> 
## Name

msg.batch_id — Return the human-readable ec_message.batch_id

<a name="idp16566592"></a> 
## Synopsis

`msg.batch_id;`

<a name="idp16568832"></a> 
## Description

When used in a string context, or explicitly forced into a string via `tostring(msg.batch_id)`, this function returns the human-readable ec_message.batch_id.

Enable this function with the statement `require('msys.extended.message');`.

<a name="lua.ref.msg.batch_id.example"></a> 


```
require("msys.core");
require("msys.extended.message");

local mod = {};

function mod:validate_data(msg, ac, vctx)
  print(msg.batch_id);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("validate_data", mod);
```