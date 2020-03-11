---
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

**Example 70.6. msys.cloudmark.set_af_mode_discard Example**

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

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_keep](lua.ref.msys.cloudmark.set_af_mode_keep "msys.cloudmark.set_af_mode_keep"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")