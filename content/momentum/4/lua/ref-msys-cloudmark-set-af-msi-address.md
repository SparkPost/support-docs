---
lastUpdated: "03/26/2020"
title: "msys.cloudmark.set_af_msi_address"
description: "msys cloudmark set af msi address Set the address for the Cloudmark Active Filter MSI Messages msys cloudmark set af msi address addr Set the address for the Active Filter MSI Messages This address needs to correspond to the maildir that was defined in the maildir module declaration when you..."
---

<a name="lua.ref.msys.cloudmark.set_af_msi_address"></a> 
## Name

msys.cloudmark.set_af_msi_address — Set the address for the Cloudmark ActiveFilter MSI Messages.

<a name="idp15118384"></a> 
## Synopsis

`require('msys.cloudmark')`

`msys.cloudmark.set_af_msi_address(addr)`

`addr: string`<a name="idp15122096"></a> 
## Description

Set the address for the ActiveFilter MSI Messages. This address needs to correspond to the maildir that was defined in the `maildir` module declaration when you configured Momentum to use the Cloudmark ActiveFilter.

<a name="lua.ref.msys.cloudmark.set_af_msi_address.example"></a> 


```
require("msys.cloudmark");

local mod = {};

function mod:init()

  msys.cloudmark.set_af_mode_movemsg("Inbox", "Spam", "no");
  msys.cloudmark.set_af_msi_address("msi@msi.local");  -- Uses same address configured in the maildir module
  return 0;
end

msys.registerModule("af_test", mod);
```

<a name="idp15127280"></a> 
## See Also

[msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af), [msys.cloudmark.add_af_data](/momentum/4/lua/ref-msys-cloudmark-add-af-data), [msys.cloudmark.set_af_mode_discard](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-discard), [msys.cloudmark.set_af_mode_keep](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-keep), [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg), [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze), [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score), [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark)