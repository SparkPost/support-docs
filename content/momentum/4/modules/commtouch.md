---
lastUpdated: "03/26/2020"
title: "commtouch_ctasd – Commtouch Spam Protection"
description: "The commtouch ctasd module provides message diagnosis via the CYREN formerly known as Commtouch spam and phishing protection technology If you intend to use this module be sure to choose it during installation For more information see Section 12 1 Installing Partner Modules As with other Validation modules the commtouch..."
---

<a name="idp20569120"></a> 

The commtouch_ctasd module provides message diagnosis via the CYREN (formerly known as Commtouch) spam and phishing protection technology. If you intend to use this module be sure to choose it during installation. For more information, see [“Installing Partner Modules”](/momentum/4/post-installation#install.additional.packages).

### <a name="modules.commtouch.configuration"></a> Configuration

As with other Validation modules, the commtouch_ctasd module may be loaded in passive mode, which means that inbound messages will not be virus scanned unless you invoke a policy script. Modules are loaded passively by setting the `enabled` option to `false`.

The following is an example configuration:

<a name="example.commtouch.3"></a> 


```
commtouch_ctasd "commtouch_ctasd1" {
  concurrency = 10
  host = "127.0.0.1"
  port = 8088
}
```

The following configuration options are available:

<dl class="variablelist">

<dt>concurrency</dt>

<dd>

Default value is `10`, meaning that a maximum of 10 threads will be used. Assigning a value of `0` to this option means that no concurrent sessions will be used and no messages will be scanned.

</dd>

<dt>host</dt>

<dd>

Domain name or IP address of the host. Default value is `127.0.0.1`.

</dd>

<dt>port</dt>

<dd>

Port that the commtouch_ctasd module listens on. Default value is `8088`. This port is used internally by Momentum.

</dd>

</dl>

**<a name="modules.commtouch.ctasd.conf"></a> 71.20.1.1. `ctasd.conf` File**

For the commtouch_ctasd module to work with Momentum, you must also edit the `ctasd.conf` file. This file is found in the `/opt/msys/3rdParty/commtouch/etc/` directory.

In the connectivity section of the file, replace *`xxxxxxxxxxxxxxxxxxxx`* (a combination of the license key and the resolver domain) with the values provided by Commtouch:

[Connectivity]
License_key_code = *`xxxxxxxxxxxxxxxxxxxx`*
Server_address = *`xxxxxxxxxxxxxxxxxxxx`*

Momentum communicates with Commtouch over the Internet using port `80`.

### <a name="modules.commtouch.context.variables"></a> Message Context Variables

The commtouch_ctasd module sets the following message context variables:

<dl class="variablelist">

<dt>commtouch-class</dt>

<dd>

Settings for this parameter are `unknown`, `suspect`, `bulk`, `confirmed`, and `none`. If this variable is set, a policy script should take appropriate action.

</dd>

<dt>commtouch-virus-threat</dt>

<dd>

Settings for this parameter are `nonvirus`, `medium`, `high`, and `unknown`.

</dd>

<dt>commtouch-ref-id</dt>

<dd>

*Fingerprint* for the message that is useful when communicating with Commtouch

</dd>

</dl>

### <a name="modules.commtouch.lua.functions"></a> Lua Functions

This module makes the Lua function `msys.commtouch.diagnose` available. For a description of how this function is used, see [msys.commtouch.diagnose](/momentum/4/lua/ref-msys-commtouch-diagnose).

### <a name="modules.commtouch.console"></a> Console Commands

The commtouch_ctasd module can be controlled through the `ec_console`. The following command is available:

<dl class="variablelist">

<dt>commtouch_ctasd:*`commtouch_ctasd1`* pending</dt>

<dd>

This command outputs the number of pending jobs.

</dd>

</dl>