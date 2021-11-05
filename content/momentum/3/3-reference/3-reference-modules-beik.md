---
lastUpdated: "03/26/2020"
title: "beik – BEIK Module"
description: "The beik module is an anti spam module that provides support for the Symantec Brightmail Engine Integration Kit BEIK Because BEIK is an in process version of the brightmail module it provides superior performance If you intend to use this module be sure to choose it during installation For more..."
---

<a name="idp17943088"></a> 

The beik module is an anti-spam module that provides support for the Symantec Brightmail Engine Integration Kit (BEIK). Because BEIK is an in-process version of the brightmail module it provides superior performance.

If you intend to use this module be sure to choose it during installation. For more information see [“Installing Additional Packages”](/momentum/3/3-reference/install-additional-packages). The beik module is licensed by Symantec. Register this license as instructed by Symantec.

### Note

This module is available starting from Momentum 3.0.24\. In order to use this module, you must have the sieve module loaded.

Prior to version 3.2, this module was only available on systems running Red Hat 5 on either 32 or 64 bit architectures.

As of version 3.2, this module is available for Solaris AMD64 and as of version 3.4 it is also available for Solaris Sparc.

In Momentum 3.3.3, this module is not supported on the Red Hat 5 32 bit architecture.

As of Momentum version 3.5, upon installation, this module applies the "Service Provider Full" rule set. Previously the "Service Provider Express" set was applied. If you are using a low-performance machine you may wish to revert to the "Service Provider Express" rule set.

You must have a valid `cert.pem` file in place to use the beik module with Momentum. Take the following steps:

1.  Get the *`file_name`*.slf file from Symantec

2.  To create a `cert.pem` file run the following command as root:

    shell> /opt/msys/3rdParty/symantec/beik/sbin/register        \
              -c /opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml \
              -l *`file_name`*.slf
3.  Stop ecelerity by issuing the command **/etc/init.d/ecelerity stop**      and add a beik stanza to your `ecelerity.conf` file. Commit this changed file to the repository as described in step 8 in [“Best Practices for Manually Changing Configuration Files”](/momentum/3/3-reference/conf-manual-changes).

4.  Start BEIK by issuing the command: **`/etc/init.d/msys-beik start.`**        

5.  Restart ecelerity by issuing the command: **`/etc/init.d/ecelerity start`**       .

    ### Note

    You must restart ecelerity for these changes to have effect. Using **config reload**        is ineffective here.

Momentum version 3.3 uses version `6.2` of Brightmail Engine Integration kit. As of version 3.4, Momentum supports version `6.3` of Brightmail Engine Integration kit.

### <a name="modules.beik.configuration"></a> Configuration

<a name="idp17966144"></a> 


```
beik {
  use_wire_rep = true
  bmiconfig_path = "/opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml"
  header_padding = 512
}
```

<dl class="variablelist">

<dt>accum_pool</dt>

<dd>

Which thread pool to use when accumulating data against the scanned message. The default value for this option is the `IO` thread pool.

</dd>

<dt>bmiconfig_path</dt>

<dd>

This option indicates the full path to the BEIK configuration file, `bmiconfig.xml`. The default value for this option is `/opt/msys/3rdParty/symantec/beik/etc/bmiconfig.xml.` For more information about this file see the documentation provided by Symantec.

</dd>

<dt>header_padding</dt>

<dd>

When `use_wire_rep` is not or cannot be used, the number assigned to `header_padding` is added as padding to an internal allocation to avoid an additional call to `realloc`. Sizing for this is guided by approximate size of the trace headers added by *this* MTA. The value of `header_padding` should be larger than those trace headers, otherwise the internal memory buffers may need to be `realloc`'d. The default value for this option is `512`.

</dd>

<dt>scan_pool</dt>

<dd>

Which thread pool to use when scanning a message. The default value for this option is the `CPU` thread pool. For more information about defining thread pools see [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool).

</dd>

<dt>use_wire_rep</dt>

<dd>

If use_wire_rep = `true` (the default setting) and the message is “small” (i.e., it is less than `large_message_threshold`), then a dot-stuffed representation of the message is held entirely in memory and can be used as received, rather than loading pieces of the message as needed.

If use_wire_rep = `false`, or if the message is “large,” then a dot-unstuffed representation of the message will be generated and passed to the module. This involves more memory allocations (malloc) and copying of data (memcpy).

To summarize:

*   use_wire_rep = `true` and small message: no modifications will be passed to BEIK

*   use_wire_rep = `true` and large message: modifications will be passed to BEIK

*   use_wire_rep = `false`: modifications will be passed to BEIK

All messages that pass through the system are stored on disk dot-stuffed. This provides a more efficient transfer by eliminating the need to decode and then re-encode a message before it is sent.

</dd>

</dl>

### <a name="modules.beik.runtime"></a> Runtime Usage

Unlike other validation modules, BEIK is always loaded in passive mode. When a module is loaded in passive mode, inbound messages will not be virus scanned unless you explicitly call the appropriate scripting action.

**<a name="idp17993856"></a> Lua Functions**

This module makes the Lua function `msys.symantec_beik.scan` available. For a description of how this function is used see [msys.symantec_beik.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-symantec-beik-scan).

**<a name="modules.beik.sieve"></a> Sieve Usage**

Because the module is always loaded in passive mode, inbound messages will only be scanned when the Sieve `beik_scan` action is invoked.

This function should be invoked in the `each_rcpt_phase` phase as shown in the following:

```
$verdict = beik_scan;
vctx_mess_set "bm_verdict" $verdict;
```

### <a name="modules.beik.ipv6"></a> beik and IPv6

The beik module does **not** currently support IPv6 addresses.

If you attempt to inject and scan a message with an IPv6 address you will see an error in the panic log similar to the following:

`1337205547:BEIK: bmiProcessConnection() fatal error [0x3000006] client: The API received an invalid argument`

There is no other indication of an error.

### <a name="modules.beik.console"></a> beik Management Using Console Commands

The beik module can be controlled through the `ec_console`; the following command is available:

**<a name="idp18006432"></a> 14.10.4.1. beik reload**

Use this command to reload the beik module. You do not need to manually invoke this command; it is triggered by the updates service, msys-beik.