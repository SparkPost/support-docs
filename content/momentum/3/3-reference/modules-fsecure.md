---
lastUpdated: "03/26/2020"
title: "fsecure – F-Secure"
description: "Example 14 67 fsecure module In version 3 0 the antivirus module does not need to be explicitly included Configuration Change This module is not supported in version 3 1 daemon The F Secure antivirus runs as an independent process and relies on a Unix domain socket for synchronization The..."
---

<a name="idp20034656"></a> <a name="idp20036288"></a> 


```
av_fsecure "av_fsecure1" {
  daemon = "/tmp/.fsav-65534"
  timeout = 60
  action = pass
  paranoid = false
  context_variable = "virus"
  skip_context_variable = "skip_virus_check"
  file_base = "/var/tmp"
}
```

In version 3.0, the antivirus module does not need to be explicitly included.

**Configuration Change. ** This module is **not** supported in version 3.1.

<dl class="variablelist">

<dt>daemon</dt>

<dd>

The F-Secure antivirus runs as an independent process, and relies on a Unix domain socket for synchronization. The socket name defaults to `/tmp/.fsav-#####`, where "#####" is the userid that is executing the daemon. See the FSecure documentation at [http://www.f-secure.com/](http://www.f-secure.com/) for more details on setting the socket name. This engine runs in the IO pool by default.

</dd>

</dl>

For a list of the configuration options that this module shares with other antivirus modules see [“antivirus Configuration”](/momentum/3/3-reference/3-reference-modules-antivirus#modules.antivirus.configuration).

This module supports the **f_secure_avscan** Sieve command. For more information see [antivirus](/momentum/3/3-reference/sieve-ref-antivirus).

For more information about F-Secure see [http://www.f-secure.com/](http://www.f-secure.com/).