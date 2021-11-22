---
lastUpdated: "03/26/2020"
title: "msys.av.scan"
description: "msys av scan Perform a virus scan using the named engine msys av scan av engine name msg validate context Use this function with AV engines that depend on the AV module such as the clamav module This function performs a virus scan The scan is done using the specified..."
---

<a name="lua.ref.msys.av.scan"></a> 
## Name

msys.av.scan — Perform a virus scan using the named engine

<a name="idp17444000"></a> 
## Synopsis

`msys.av.scan(av_engine_name, msg, validate_context);`

```
av_engine_name: string, optional
msg: userdata, ec_message type, optional
validate_context: userdata, validate_context type, optional
```
<a name="idp17447120"></a> 
## Description

Use this function with AV engines that depend on the AV module, such as the clamav module.

This function performs a virus scan. The scan is done using the specified engine or, if no engine is specified, any installed engines that are supported by the AV module. If a virus is detected by an engine, the function will skip the remaining engines and return. For a list of these engines, see [“antivirus – Antivirus”](/momentum/4/modules/4-antivirus).

Enable this function with the statement `require('msys.av');`.

This function takes the following parameters:

*   `av_engine_name` – optional engine name

*   `msg`– optional message (msys.core:_ec_message)

*   `validate_context` – optional validation context

If the `msg` and/or `validate_context` parameters are omitted, they will be inferred from the calling environment, if possible. If no message can be inferred, this function will raise an error.

This function returns four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER – A container was passed to `msys.av.scan`.

    *   msys.av.EC_AV_NAME_TOO_LONG – `av_engine_name` is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE – No AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING – AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR – A runtime error occurred. For clamav-specific information, see [“clamav Runtime Usage”](/momentum/4/modules/clamav#modules.clamav.runtime).

    *   msys.av.EC_AV_CLEAN – Meaning of this status depends on the AV engine.

    *   msys.av.EC_AV_INFECTED – Meaning of this status depends on the AV engine. For engine-specific information, see [“Context Variables”](/momentum/4/modules/csapi#modules.csapi.context.variables) and [“clamav Runtime Usage”](/momentum/4/modules/clamav#modules.clamav.runtime).

    *   msys.av.EC_AV_UNSCANNABLE – Message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus or `nil` if no virus was detected.

*   The *engine scan code*           or `nil` if no engine scan code is available. The scan code returned is specific to the engine reporting the error. For engine-specific information, see [“Context Variables”](/momentum/4/modules/csapi#modules.csapi.context.variables) and [“clamav Runtime Usage”](/momentum/4/modules/clamav#modules.clamav.runtime).

<a name="lua.ref.msys.av.scan.example"></a> 


```
require("msys.av");
 local mod = {};

 function mod:validate_data(msg, accept, vctx)
   local rc
   local result
   local eng
   local s_code
   rc, result, eng, s_code = msys.av.scan("clamav", msg, vctx);
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

<a name="idp17481440"></a> 
## See Also

[msys.av.scan_part](/momentum/4/lua/ref-msys-av-scan-part)