---
lastUpdated: "03/26/2020"
title: "commtouch_ctasd – Commtouch_ctasd Module"
description: "The commtouch ctasd module provides message diagnosis via industry leading spam and phishing protection technology If you intend to use this module be sure to choose it during installation For more information see Section 1 9 Installing Additional Packages Momentum version 3 3 uses version 3 01 0017 of Commtouch..."
---

<a name="idp18501328"></a> 

The commtouch_ctasd module provides message diagnosis via industry-leading spam and phishing protection technology. If you intend to use this module be sure to choose it during installation. For more information see [“Installing Additional Packages”](/momentum/3/3-reference/install-additional-packages).

Momentum version 3.3 uses version `3.01.0017` of Commtouch CTSD. Momentum version 3.4 uses version `4.02.0014`.

### <a name="modules.commtouch.configuration"></a> Configuration

<a name="example.commtouch.3"></a> 


```
commtouch_ctasd "commtouch_ctasd1" {
  concurrency = 10
  host = "127.0.0.1"
  port = 8088
}
```

<dl class="variablelist">

<dt>concurrency</dt>

<dd>

The default value for this option is `10`, meaning that a maximum of 10 threads will be used. Assigning a value of `0` to this option means that no concurrent sessions will be used and no messages will be scanned.

</dd>

<dt>host</dt>

<dd>

The domain name or IP address of the host. The default value is ‘`127.0.0.1`’.

</dd>

<dt>port</dt>

<dd>

The port that the commtouch_ctasd module listens on. The default value is ‘`8088`’. This port is used internally by Momentum.

</dd>

</dl>

**<a name="modules.commtouch.ctasd.conf"></a> 14.19.1.1. The `ctasd.conf` File**

For the commtouch_ctasd module to work with Momentum, you must also edit the `ctasd.conf` file. Find the connectivity section and replace *`xxxxxxxxxxxxxxxxxxxx`* (a combination of the license key and the resolver domain) with the values provided by Commtouch:

[Connectivity]
License_key_code = *`xxxxxxxxxxxxxxxxxxxx`*
Server_address = *`xxxxxxxxxxxxxxxxxxxx`*

Momentum communicates with Commtouch over the Internet using the well known port, `80`.

This file is found in the `/opt/msys/3rdParty/commtouch/etc/` directory.

### <a name="modules.commtouch.runtime.usage"></a> commtouch Runtime Usage

The commtouch_ctasd module sets three message context validation parameters:

<dl class="variablelist">

<dt>commtouch-class</dt>

<dd>

The settings for this parameter are `unknown`, `suspect`, `bulk`, confirmed and `none`. If this variable is set a policy script should take appropriate action.

</dd>

<dt>commtouch-virus-threat</dt>

<dd>

The settings for this parameter are `nonvirus`, `medium`, `high` and `unknown`.

</dd>

<dt>commtouch-ref-id</dt>

<dd>

This a 'fingerprint' for the message that is useful when communicating with Commtouch.

</dd>

</dl>

As with other Validation modules, the commtouch_ctasd module may be loaded in passive mode which means that inbound messages will not be virus scanned unless you invoke a policy script.

To use Lua see [msys.commtouch.diagnose](/momentum/3/3-reference/3-reference-lua-ref-msys-commtouch-diagnose).

To use Sieve see [commtouch_scan](/momentum/3/3-reference/sieve-ref-commtouch-scan).

### <a name="modules.commtouch.console"></a> commtouch_ctasd Management Using Console Commands

The commtouch_ctasd module can be controlled through the `ec_console`; the following command is available:

**<a name="idp42080"></a> 14.19.3.1. commtouch_ctasd:*`commtouch_ctasd1`* pending**

This command outputs the number of pending jobs.