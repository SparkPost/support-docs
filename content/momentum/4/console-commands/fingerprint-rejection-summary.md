---
lastUpdated: "03/26/2020"
title: "fingerprint rejection summary"
description: "fingerprint rejection summary display details related to the current inbound connection fingerprint rejection summary In order to use this command you must have the Policy Tools suite installed Passive OS fingerprinting is installed as part of the Policy Tools suite This functionality yields information about inbound connections For more information..."
---

<a name="console_commands.fingerprint_rejection_summary"></a> 
## Name

fingerprint rejection summary — display details related to the current inbound connection

## Synopsis

`fingerprint rejection summary`

<a name="idp12616176"></a> 
## Description

In order to use this command, you must have the Policy Tools suite installed. Passive OS fingerprinting is installed as part of the Policy Tools suite. This functionality yields information about inbound connections. For more information about installing the Policy Tools suite see [“Installing Partner Modules”](/momentum/4/post-installation#install.additional.packages).

This command displays the genre, detail, receptions and rejections related to the current inbound connection.

Passive operating system fingerprinting runs as a daemon that Momentum communicates with over a socket, `/tmp/p0fd`. This daemon is started using the command: **/etc/init.d/ecp0f start** . The fingerprints are all included in the ecp0f package and are located here: `/opt/msys/ecelerity/3rdParty/etc/p0f/`. These fingerprints do not need to be modified.

<a name="idp11051248"></a> 
## See Also

[fingerprint cache summary](/momentum/4/console-commands/fingerprint-cache-summary)