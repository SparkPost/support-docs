---
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

**Example 70.7. msys.cloudmark.set_af_mode_keep Example**

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

[msys.cloudmark.score_af](lua.ref.msys.cloudmark.score_af "msys.cloudmark.score_af"), [msys.cloudmark.add_af_data](lua.ref.msys.cloudmark.add_af_data "msys.cloudmark.add_af_data"), [msys.cloudmark.set_af_mode_discard](lua.ref.msys.cloudmark.set_af_mode_discard "msys.cloudmark.set_af_mode_discard"), [msys.cloudmark.set_af_mode_movemsg](lua.ref.msys.cloudmark.set_af_mode_movemsg "msys.cloudmark.set_af_mode_movemsg"), [msys.cloudmark.set_af_msi_address](lua.ref.msys.cloudmark.set_af_msi_address "msys.cloudmark.set_af_msi_address"), [msys.cloudmark.analyze](lua.ref.msys.cloudmark.analyze "msys.cloudmark.analyze"), [msys.cloudmark.score](lua.ref.msys.cloudmark.score "msys.cloudmark.score"), [Section 71.18, “cloudmark – Cloudmark Authority® Content Scanning”](modules.cloudmark "71.18. cloudmark – Cloudmark Authority® Content Scanning")