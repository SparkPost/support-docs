---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.score_af"
description: "msys cloudmark score af Set the Cloudmark Active Filter score threshold msys cloudmark score af msg accept vctx af threshold Set the Active Filter score threshold as part of the fourth argument in this function If a message is originally marked as not spam and later the message fingerprint exceeds..."
---

<a name="lua.ref.msys.cloudmark.score_af"></a> 
## Name

msys.cloudmark.score_af — Set the Cloudmark ActiveFilter score threshold

<a name="idp15017200"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.score_af(msg, accept, vctx, af_threshold)`

```
msg: userdata, ec_message
accept: userdata, accept_construct
vctx: userdata, validate_context
af_threshold: string
```
<a name="idp15021040"></a> 
## Description

Set the ActiveFilter score threshold as part of the fourth argument in this function. If a message is originally marked as "not-spam" and later the message fingerprint exceeds this score, then it will trigger an ActiveFilter update. Similarly, if a message is marked as spam and later is re-classified as "not spam", then ActiveFilter will be updated as well. Note that the latter case is only significant in the `MOVEMSG` ActiveFilter mode. Why? If you are discarding messages then there is no action to take in the false positive case.

<a name="lua.ref.msys.cloudmark.score_af.example"></a> 


```
require("msys.core");
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
  msys.cloudmark.set_af_msi_address("msi@msi.local"); 

  return 0;
end

function mod:validate_data(msg, ac, vctx)

  -- Set the ActiveFilter score threshold

  local score = msys.cloudmark.score_af(msg, ac, vctx, 90);
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("af_test", mod);
```

<a name="idp15026752"></a> 
## See Also

[msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af), [msys.cloudmark.add_af_data](/momentum/4/lua/ref-msys-cloudmark-add-af-data), [msys.cloudmark.set_af_mode_discard](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-discard), [msys.cloudmark.set_af_mode_keep](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-keep), [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg), [msys.cloudmark.set_af_msi_address](/momentum/4/lua/ref-msys-cloudmark-set-af-msi-address), [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze), [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score), [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark)