---
lastUpdated: "03/26/2020"
title: "msys.counter.inc"
description: "msys counter inc Increment a counter msys counter inc object or path The first argument is either a path to a counter for example sites sit name errors or a counter object that was returned by msys counter open If a string is provided containing the path to a counter..."
---

<a name="lua.ref.msys.counter.inc"></a> 
## Name

msys.counter.inc — Increment a counter

<a name="idp17758816"></a> 
## Synopsis

`msys.counter.inc(object_or_path);`

`object_or_path: mixed`<a name="idp17761744"></a> 
## Description

The first argument is either a path to a counter (for example, `/sites/sit_name/errors`) or a counter object that was returned by `msys.counter.open`. If a string is provided containing the path to a counter that does not exist, the counter is created with STRICT semantics. The counter value is atomically incremented. For performance reasons, use of counter handles is recommended. Find an example below.

<a name="lua.ref.msys.counter.inc.example1"></a> 


```
require("msys.core");
require("msys.counter");

local mod = {};
local msys_emails = msys.counter.open("/sites/examples/messagesystems_correspondence");

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "@messagesystems.com") != nil) then
    msys.counter.inc(msys_emails);
  end
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("counter", mod);
```

<a name="lua.ref.msys.counter.inc.example2"></a> 


```
require("msys.core");
require("msys.counter");

local mod = {};

function mod:validate_mailfrom(str, accept, vctx)
  str = tostring(str);
  if (string.find(str, "@messagesystems.com") != nil) then
    msys.counter.inc("/sites/site_name/messagesystems_correspondence");
  end
return msys.core.VALIDATE_CONT;
end

msys.registerModule("counter", mod);
```

Enable this function with the statement `require('msys.counter');`.

You can also use the [counter](/momentum/4/console-commands/counter) console command to display and manipulate counters.

<a name="idp17772576"></a> 
## See Also

[msys.counter.open](/momentum/4/lua/ref-msys-counter-open), [msys.counter.add](/momentum/4/lua/ref-msys-counter-add), [msys.counter.reset](/momentum/4/lua/ref-msys-counter-reset), [msys.counter.unlink](/momentum/4/lua/ref-msys-counter-unlink)