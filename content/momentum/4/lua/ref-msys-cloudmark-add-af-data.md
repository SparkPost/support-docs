---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.add_af_data"
description: "msys cloudmark add af data Pass data for use with the Cloudmark Active Filter msys cloudmark add af data addr data Optionally pass the Cloudmark Active Filter an email address and a table of key value pairs You must load and correctly configure the cloudmark module and the maildir module..."
---

<a name="lua.ref.msys.cloudmark.add_af_data"></a> 
## Name

msys.cloudmark.add_af_data — Pass data for use with the Cloudmark ActiveFilter.

<a name="idp14960272"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.add_af_data(addr, data)`

```
addr: string
data: userdata (key-value pairs)
```
<a name="idp14963440"></a> 
## Description

Optionally pass the Cloudmark ActiveFilter an email address and a table of key-value pairs.

### Note

You must load and correctly configure the cloudmark module and the maildir module before using this function. This function does not have a return value.

<a name="lua.ref.msys.cloudmark.add_af_data.example"></a> 


```
require("msys");
require("msys.extended.vctx");
require("msys.cloudmark");

local mod = {};
function mod:validate_rcptto(msg, rcptto_string, ac, vctx)
  local localpart = vctx:get(msys.core.VCTX_MESS, "rcptto_localpart");
  local domain = vctx:get(msys.core.VCTX_MESS, "rcptto_domain");
  msys.cloudmark.add_af_data(localpart .. "@" .. domain,
                             { custom_key = "custom_value" });
  return msys.core.VALIDATE_CONT;
end
msys.registerModule("af_test", mod);
```

<a name="idp14968784"></a> 
## See Also

[msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af), [msys.cloudmark.set_af_mode_discard](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-discard), [msys.cloudmark.set_af_mode_keep](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-keep), [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg), [msys.cloudmark.set_af_msi_address](/momentum/4/lua/ref-msys-cloudmark-set-af-msi-address), [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze), [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score), [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark)