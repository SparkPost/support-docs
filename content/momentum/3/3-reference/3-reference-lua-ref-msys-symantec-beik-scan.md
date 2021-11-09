---
lastUpdated: "03/26/2020"
title: "msys.symantec_beik.scan"
description: "msys symantec beik scan Scan using BEIK msys symantec beik scan msg vctx In order for this function to work you must configure the beik module Be sure to load the module in passive mode by setting Enabled to false This function can be invoked in the data spool or..."
---

<a name="lua.ref.msys.symantec_beik.scan"></a> 
## Name

msys.symantec_beik.scan — Scan using BEIK

<a name="idp26951504"></a> 
## Synopsis

`msys.symantec_beik.scan(msg, vctx);`

```
msg: userdata, ec_message type
vctx: userdata, validate_context type
```
<a name="idp26954192"></a> 
## Description

In order for this function to work, you must configure the beik module. Be sure to load the module in passive mode by setting `Enabled` to `false`. This function can be invoked in the data, spool or each_rcpt phases. It will not work at the connect, ehlo, mailfrom or rcptto phases. `msg` is the email to be scanned. Use this function to scan email.

A tuple is returned with the following members:

*   `code` – the scan result. Returned values are numeric BEIK codes.

*   `beik_destination` – where the email should go. Returned values are `tracker`, `inbox` and `is-spam`.

*   `is_default` – The returned value is `0` or `1`. When `1` is returned, the mail should be dispatched to its original destination.

*   `tracker` a string suitable for use as a header.

<a name="lua.ref.msys.symantec_beik.scan.example"></a> 


```
require("msys")
require("msys.core")
require("msys.symantec_beik")

local mod = {}
function mod:validate_data(msg, accept, vctx)
  print ("type(msg)", msys.type(msg))
  print ("type(accept)", msys.type(accept))
  print ("type(vctx)", msys.type(vctx))
  local a, b, is_default, tracker = msys.symantec_beik.scan(msg, vctx)
  if a == 0 then
    print("Error found: ", b)
    return msys.core.VALIDATE_DONE
  else
    print("return code:", a)
    print("beik_destination:", b)
    print ("beik_is_default:", is_default)
    print("beik_tracker:", tracker)
    return msys.core.VALIDATE_CONT
  end
end
msys.registerModule("test_beik", mod);
```

*Note*: When the first returned value is `0`, an error has occurred. The second return value contains the error message.

Enable this function with the statement `require('msys.symantec_beik');`.

<a name="idp26971440"></a> 
## See Also

[“beik – BEIK Module”](/momentum/3/3-reference/3-reference-modules-beik)