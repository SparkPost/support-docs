---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.score"
description: "msys cloudmark score Scan messages using Cloudmark msys cloudmark score msg accept vctx Use this function to scan mail It can be invoked at the data spool or each rcpt phases and it will not work at the connect ehlo mailfrom or rcptto phases It takes the following parameters If..."
---

<a name="lua.ref.msys.cloudmark.score"></a> 
## Name

msys.cloudmark.score — Scan messages using Cloudmark

<a name="idp14979792"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.score(msg, accept, vctx)`

```
msg: userdata, ec_message type (optional)
accept: userdata, accept_construct type (optional)
vctx: userdata, validate_context type (optional)
```
<a name="idp14983632"></a> 
## Description

Use this function to scan mail. It can be invoked at the data, spool, or each_rcpt phases, and it will not work at the connect, ehlo, mailfrom, or rcptto phases. It takes the following parameters. If any of these inputs are not provided, they will be inferred from the current context.

*   `msg` – Email to be scored

*   `accept` – accept_construct

*   `vctx` – Validation context

You must load and correctly configure the cloudmark module before using this function. Be sure to set the cloudmark module option `Enabled` to `false`. For details, see [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark).

This function returns a table is returned with the following key/value pairs. These name value pairs are also set within the validation context (VCTX_MESS):

*   `score` – Authority score for the message, a number between 0 and 100\. The higher the number, the more certain the engine is that the mail is spam.

*   `is_spam` – If the cloudmark module `MinimumScore` option is set, this flag is set to `true`, indicating that the engine has determined the message is spam. No action is directly taken on the message; that is left to the user to do using a policy script.

*   `category` – Category assigned to the message by the Cloudmark Authority

*   `category-desc` – Description of the category

*   `sub-category` – Sub-category assigned to the message by the Cloudmark Authority

*   `sub-category-desc` – Description of sub-category

*   `rescan` – If this flag is set to `yes`, the email would benefit from a rescan.

*   `analysis` – Cloudmark Authority analysis header

<a name="lua.ref.msys.cloudmark.score.example"></a> 


```
require("msys");
require("require("msys");
require("msys.cloudmark");

local mod = {};
function mod:validate_data(msg, accept, vctx)
  local result = msys.cloudmark.score(msg, accept, vctx)
  for k,v in pairs(result) do
    print (k, '=', v)
  end
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("test_cm", mod);
```

### Warning

Do not use `pcall` with this function.

<a name="idp15010208"></a> 
## See Also

[msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze)