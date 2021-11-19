---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.set_af_mode_discard"
description: "msys cloudmark set af mode discard Set the Cloudmark Active Filter mode to DISCARD msys cloudmark set af mode discard Set the Cloudmark Active Filter mode to DISCARD You must set the Active Filter mode by invoking one of the following functions msys cloudmark set af mode discard msys cloudmark..."
---

<a name="lua.ref.msys.cloudmark.set_af_mode_discard"></a> 
## Name

msys.cloudmark.set_af_mode_discard — Set the Cloudmark ActiveFilter mode to DISCARD.

<a name="idp15038512"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_discard()`

<a name="idp15041504"></a> 
## Description

Set the Cloudmark ActiveFilter mode to DISCARD.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_discard.example"></a> 


```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_discard();
  msys.cloudmark.set_af_msi_address("msi@msi.local");
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp15051584"></a> 
## See Also

[msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af), [msys.cloudmark.add_af_data](/momentum/4/lua/ref-msys-cloudmark-add-af-data), [msys.cloudmark.set_af_mode_keep](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-keep), [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg), [msys.cloudmark.set_af_msi_address](/momentum/4/lua/ref-msys-cloudmark-set-af-msi-address), [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze), [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score), [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark)