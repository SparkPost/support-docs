---
lastUpdated: "03/26/2020"
title: "msys.dumper.Dumper"
description: "msys dumper Dumper Dump information about an object msys dumper Dumper res Dump information about an object This function is typically used for debugging purposes Enable this function with the statement require msys dumper..."
---

<a name="lua.ref.msys.dumper.Dumper"></a> 
## Name

msys.dumper.Dumper — Dump information about an object

<a name="idp17978080"></a> 
## Synopsis

`msys.dumper.Dumper(res);`

`res: mixed`<a name="idp17981056"></a> 
## Description

Dump information about an object. This function is typically used for debugging purposes.

Enable this function with the statement `require('msys.dumper')`.

```
require("msys.core");
require("msys.pcre");
require("msys.dumper");
local mod = {};

function mod:validate_connect(accept, vctx)
  local res, err = msys.dnsLookup('messagesystems.com', 'A');
  if res then
    if type(res[1]) == "string" then
      table.sort(res);
    end
    local i;
    local l = msys.pcre.split(msys.dumper.Dumper(res), "\\n");
    for i=1, #l do
      print("OK:", l[i]);
    end
  else
    print("ERROR:", msys.dumper.Dumper(err));
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("dns-test", mod);
```