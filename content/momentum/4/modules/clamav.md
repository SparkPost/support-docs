---
lastUpdated: "03/26/2020"
title: "clamav – ClamAV"
description: "The clamav module is an open source antivirus engine that is part of the default Momentum installation The following is an example configuration Example 71 28 clamav Configuration In order to use this module you must install Clam AV on your server and update it as needed or desired Configure..."
---

<a name="idp20200832"></a> 

The clamav module is an open source antivirus engine that is part of the default Momentum installation.

### <a name="idp20203168"></a> Configuration

The following is an example configuration:

<a name="example.clamav.3"></a> 


```
clamav {}
antivirus "antivirus1" {
  clamav "clamav1" {
    daemon = "127.0.0.1:3310"
    timeout = "20"
    action = "pass"
    paranoid = false
    context_variable = "virus"
    skip_context_variable = "skip_virus_check"
    file_base = "/var/tmp"
  }
}
```

### Note

In order to use this module, you must install ClamAV on your server and update it as needed or desired. Configure this module in the global scope **and** also within the antivirus scope as shown in [“clamav Configuration”](/momentum/4/modules/clamav#example.clamav.3).

The clamav module is a singleton in the global scope but a non-singleton within the antivirus scope. In the global scope this module only supports the `enabled` and `debug_level` options.

For more information about Clam AV, see the [ClamAV](http://www.clamav.net/lang/en/) web page.

This module uses the configuration options common to all antivirus modules, plus the following plus the following clamav-specific options:

<dl class="variablelist">

<dt>daemon</dt>

<dd>

The ClamAV engine connects to its external daemon over TCP/IP. This means the daemon may optionally be run on another machine. It runs in the IO pool by default.

</dd>

</dl>

For a list of the configuration options that this module shares with other antivirus modules, see [“Configuration”](/momentum/4/modules/4-antivirus#modules.antivirus.configuration). For the clamav module, the `context_variable` option defaults to `clamav_status`.

**<a name="modules.clamav.runtime"></a> 71.17.1.1. clamav Runtime Usage****<a name="idp20220096"></a> Lua Functions**

This module supports the **msys.av.scan** and the **msys.av.scan_part** Lua functions.

These functions return four values:

*   The *scan status* , which is one of the following values:

    *   msys.av.EC_AV_PART_IS_CONTAINER – A container was passed to msys.av.scan.

    *   msys.av.EC_AV_NAME_TOO_LONG – `av_engine_name` is longer than 40 characters.

    *   msys.av.EC_AV_NO_ENGINE – No AV engine is configured.

    *   msys.av.EC_AV_NOT_SUITABLE_FOR_STREAMING – AV engine cannot scan the message that was passed in as a stream.

    *   msys.av.EC_AV_ERROR – A runtime error occurred. This status is returned if the *engine scan code*           is either `OK` or `Empty file`, and the error text is returned in the *informational string* .

    *   msys.av.EC_AV_CLEAN – The scan code is either `OK` or `Empty file`, and there is no runtime error.

        This includes cases where a runtime error in the AV engine occurs.

    *   msys.av.EC_AV_INFECTED – Message is classified as infected if the scan code is **not** `OK` or `Empty file`.

    *   msys.av.EC_AV_UNSCANNABLE – Message could not be scanned.

*   An *informational string* , which typically contains the virus name; the precise contents of this string depend on the engine.

*   The *name of the AV engine*                  that detected the virus or `nil` if no virus was detected.

*   The *engine scan code*           or `nil` if no engine scan code is available. If the scan result is msys.av.EC_AV_CLEAN, this code will be either `OK` or `Empty file`.

For additional details about these functions, see [msys.av.scan](/momentum/4/lua/ref-msys-av-scan) and [msys.av.scan_part](/momentum/4/lua/ref-msys-av-scan-part).