---
title: "71.36. fingerprint – Host Fingerprinting"
description: "Passive OS fingerprinting is installed as part of the Policy Tools suite This functionality yields information about inbound connections For more information about installing the Policy Tools suite see Section 12 1 Installing Partner Modules The Host Fingerprint module performs passive OS fingerprinting based on the incoming SMTP connections Momentum..."
---

<a name="idp21795440"></a> 

Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite, see [Section 12.1, “Installing Partner Modules”](post_installation#install.additional.packages "12.1. Installing Partner Modules").

The Host Fingerprint module performs passive OS fingerprinting based on the incoming SMTP connections.

Momentum uses version `2.0.8` of Passive OS fingerprinting.

### <a name="idp21799488"></a> 71.36.1. Configuration

<a name="example.fingerprint3"></a> 

**Example 71.64. fingerprint module**

```
fingerprint "fingerprint1" {
  max_cache_size = 10000
}
```

<dl class="variablelist">

<dt>max_cache_size</dt>

<dd>

The `max_cache_size` option specifies the maximum size of the cache of common hosts. The default value is `10000`.

</dd>

</dl>

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/msys-p0f start** . The fingerprints are all included in the msys-p0f package and are located in `/opt/msys/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.