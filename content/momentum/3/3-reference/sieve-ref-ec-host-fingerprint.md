---
lastUpdated: "03/26/2020"
title: "ec_host_fingerprint"
description: "ec host fingerprint return genre and detail of the passive host fingerprinting operation ec host fingerprint Configuration Change This feature is available starting from Momentum 3 0 26 In order to use this command you must have the Policy Tools suite installed Passive OS fingerprinting is installed as part of..."
---

<a name="sieve.ref.ec_host_fingerprint"></a> 
## Name

ec_host_fingerprint — return genre and detail of the passive host fingerprinting operation

## Synopsis

`ec_host_fingerprint`

<a name="idp29882224"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [“Installing Additional Packages”](/momentum/3/3-reference/install-additional-packages).

The `ec_host_fingerprint` function returns the genre and detail regarding the current inbound connection.

<a name="example.ec_host_fingerprint"></a> 


```
($genre, $detail) = ec_host_fingerprint;
ec_header_add "X-Host-Fingerprint" "%{i} %{p} ${genre} ${detail}";
```

**Configuration Change. ** This feature is available starting from Momentum 3.0.24.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/msys-p0f start** . The fingerprints are all included in the msys-p0f package and are located here: `/opt/msys/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.