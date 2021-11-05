---
lastUpdated: "03/26/2020"
title: "fingerprint – Host Fingerprinting"
description: "Passive OS fingerprinting is installed as part of the Policy Tools suite This functionality yields information about inbound connections For more information about installing the Policy Tools suite see Section 1 9 Installing Additional Packages The Host Fingerprint module performs passive OS fingerprinting based on the incoming SMTP connections and..."
---

<a name="idp20052432"></a> 

Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [“Installing Additional Packages”](/momentum/3/3-reference/install-additional-packages).

The Host Fingerprint module performs passive OS fingerprinting based on the incoming SMTP connections and exposes the resulting information through a Sieve action.

Momentum version 3.3 uses version `2.0.8` of Passive OS fingerprinting.

### <a name="idp20057152"></a> Configuration

<a name="example.fingerprint3"></a> 


```
fingerprint "fingerprint1" {
  max_cache_size = 10000
}
```

<dl class="variablelist">

<dt>max_cache_size</dt>

<dd>

The `max_cache_size` option specifies the maximum size of the cache of common hosts. The default value for this option is `10000`.

</dd>

</dl>

**Configuration Change. ** This feature is available starting from Momentum 3.0.24.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/msys-p0f start** . The fingerprints are all included in the msys-p0f package and are located here: `/opt/msys/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

### <a name="idp20069744"></a> Operational Example

The Host Fingerprint module exposes Sieve functionality. This functionality is explained in: [ec_host_fingerprint](/momentum/3/3-reference/sieve-ref-ec-host-fingerprint).