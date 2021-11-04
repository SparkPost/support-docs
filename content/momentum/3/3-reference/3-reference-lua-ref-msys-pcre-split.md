---
lastUpdated: "03/26/2020"
title: "msys.pcre.split"
description: "msys pcre split Perform a PCRE split operation msys pcre split subject pattern Perform a PCRE split operation Enable this function with the statement require msys pcre msys pcre match msys pcre replace..."
---

<a name="lua.ref.msys.pcre.split"></a> 
## Name

msys.pcre.split — Perform a PCRE split operation

<a name="idp26811408"></a> 
## Synopsis

`msys.pcre.split(subject, pattern);`

```
subject: string
pattern: string
```
<a name="idp26814112"></a> 
## Description

Perform a PCRE split operation.

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

Enable this function with the statement `require('msys.pcre')`.

<a name="idp26817840"></a> 
## See Also

[msys.pcre.match](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-match), [msys.pcre.replace](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-replace)