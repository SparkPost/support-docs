---
lastUpdated: "03/26/2020"
title: "fingerprint cache summary"
description: "fingerprint cache summary display the current cache size fingerprint cache summary Configuration Change This feature is available starting from Momentum 3 0 26 In order to use this command you must have the Policy Tools suite installed Passive OS fingerprinting is installed as part of the Policy Tools suite This..."
---

<a name="console_commands.fingerprint_cache_summary"></a> 
## Name

fingerprint cache summary — display the current cache size

## Synopsis

`fingerprint cache summary`

<a name="idp15986880"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.26.

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [“Installing Additional Packages”](/momentum/3/3-reference/install-additional-packages).

This console command displays the current fingerprint cache usage.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/ecp0f start** . The fingerprints are all included in the ecp0f package and are located here: `/opt/msys/ecelerity/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

<a name="idp15996304"></a> 
## See Also

[fingerprint rejection summary](/momentum/3/3-reference/3-reference-console-commands-fingerprint-rejection-summary)