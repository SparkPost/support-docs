---
lastUpdated: "03/26/2020"
title: "msys.av.scan_part"
description: "msys av scan part Perform a virus scan on a specific message part using the named engine msys av scan part msg part av engine name validate context Use this function with AV engines such as clamav that depend on the AV module This function takes a required message part..."
---

<a name="lua.ref.msys.av.scan_part"></a> 
## Name

msys.av.scan_part — Perform a virus scan on a specific message part using the named engine

<a name="idp26138960"></a> 
## Synopsis

`msys.av.scan_part(msg_part, av_engine_name, validate_context);`

```
msg_part: userdata, ec_message type
av_engine_name: string, optional
validate_context: userdata, validate_context type, optional
```
<a name="idp26142208"></a> 
## Description

Use this function with AV engines such as clamav that depend on the AV module.

This function takes a required message part (msys.core:_ec_message_part), an optional engine name, and an optional validation context, and performs a virus scan. The scan is done using the specified engine or, if no engine is specified, any installed engines that are supported by the AV module. For a list of these engines see [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus).

However, if a virus is detected by an engine, the function will skip the remaining engines and return.

### Note

Apart from the AV engines supported by the AV module, Momentum also supports the following engines: [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail), [“beik – BEIK Module”](/momentum/3/3-reference/3-reference-modules-beik) and [“eleven – Module”](/momentum/3/3-reference/3-reference-modules-eleven).

If the validate_context parameter is omitted, it will be inferred from the calling environment, if possible. If msg_part is nil, this function will raise an error.

This function returns four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER - a container was passed to msys.av.scan.

    *   msys.av.EC_AV_NAME_TOO_LONG - av_engine_name is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE - no AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING - the AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR - a runtime error occurred. See [“Runtime Usage”](/momentum/3/3-reference/3-reference-modules-clamav#modules.clamav.runtime) for clamav-specific information.

    *   msys.av.EC_AV_CLEAN - the meaning of this status depends on the AV engine.

    *   msys.av.EC_AV_INFECTED - the meaning of this status depends on the AV engine. See [“csapi Runtime Usage”](/momentum/3/3-reference/3-reference-modules-csapi#modules.csapi.runtime) and [“Runtime Usage”](/momentum/3/3-reference/3-reference-modules-clamav#modules.clamav.runtime) for engine-specific information.

    *   msys.av.EC_AV_UNSCANNABLE - the message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus, or nil if no virus was detected.

*   The *engine scan code* , or nil if no engine scan code is available. The scan code returned is specific to the engine reporting the error. See [“csapi Runtime Usage”](/momentum/3/3-reference/3-reference-modules-csapi#modules.csapi.runtime) and [“Runtime Usage”](/momentum/3/3-reference/3-reference-modules-clamav#modules.clamav.runtime) for engine-specific information.

**Configuration Change. ** The engine scan code is returned as of version 3.5.

Enable this function with the statement `require('msys.av');`.

<a name="lua.ref.msys.av.scan_part.example"></a> 


```
require("msys.av");

 local mod = {};

 function mod:validate_data(msg_part, accept, vctx)
   local rc
   local result
   local eng
   local s_code
   rc, result, eng, s_code = msys.av.scan_part(msg_part, "clamav", vctx);
   print ("rc: ", rc, map_to_symbol(rc), " result: ", result, " engine: ", eng, " scan code: ", s_code)
   if rc == msys.av.EC_AV_INFECTED then
     vctx:set_code(550, "The mail contains virus: " .. result)
     return msys.core.VALIDATE_DONE;
   end
   return msys.core.VALIDATE_CONT;
 end

 local function map_to_symbol(rc)
   if rc == msys.av.EC_AV_PART_IS_CONTAINER then
     return "EC_AV_PART_IS_CONTAINER"
   elseif rc == msys.av.EC_AV_NAME_TOO_LONG then
     return "EC_AV_NAME_TOO_LONG"
   elseif rc == msys.av.EC_AV_NO_ENGINE then
     return "EC_AV_NO_ENGINE"
   elseif rc == msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING then
     return "EC_AV_NOT_SUITABLE_FOR_STREAMING"
   elseif rc == msys.av.EC_AV_ERROR then
     return "EC_AV_ERROR"
   elseif rc == msys.av.EC_AV_CLEAN then
     return "EC_AV_CLEAN"
   elseif rc == msys.av.EC_AV_INFECTED then
     return "EC_AV_INFECTED"
   elseif rc == msys.av.EC_AV_UNSCANNABLE then
     return "EC_AV_UNSCANNABLE"
   else
     return "UNKNOWN"
   end
 end

 msys.registerModule("test_av", mod);
```

<a name="idp26172560"></a> 
## See Also

[msys.av.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-av-scan), [“clamav – ClamAV”](/momentum/3/3-reference/3-reference-modules-clamav), [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi), [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus)