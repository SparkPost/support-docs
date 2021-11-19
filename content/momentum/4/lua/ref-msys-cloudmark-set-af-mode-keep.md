---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.set_af_mode_keep"
description: "msys cloudmark set af mode keep Set the Cloudmark Active Filter mode to KEEP msys cloudmark set af mode keep This sets the Cloudmark Active Filter mode to KEEP That is move messages around based on their status You must set the Active Filter mode by invoking one of the..."
---

<a name="lua.ref.msys.cloudmark.set_af_mode_keep"></a> 
## Name

msys.cloudmark.set_af_mode_keep — Set the Cloudmark ActiveFilter mode to KEEP.

<a name="idp15062656"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_mode_keep()`

<a name="idp15065648"></a> 
## Description

This sets the Cloudmark ActiveFilter mode to `KEEP`. That is, move messages around based on their status.

### Note

You must set the ActiveFilter mode by invoking one of the following functions:

*   `msys.cloudmark.set_af_mode_discard`

*   `msys.cloudmark.set_af_mode_keep`

*   `msys.cloudmark.set_af_mode_movemsg`

<a name="lua.ref.msys.cloudmark.set_af_mode_keep.example"></a> 


```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_keep();
  msys.cloudmark.set_af_msi_address("msi@msi.local");
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp15076320"></a> 
## See Also

[msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af), [msys.cloudmark.add_af_data](/momentum/4/lua/ref-msys-cloudmark-add-af-data), [msys.cloudmark.set_af_mode_discard](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-discard), [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg), [msys.cloudmark.set_af_msi_address](/momentum/4/lua/ref-msys-cloudmark-set-af-msi-address), [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze), [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score), [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark)