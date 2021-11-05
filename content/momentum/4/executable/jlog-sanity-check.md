---
lastUpdated: "03/26/2020"
title: "jlog_sanity_check"
description: "jlog sanity check validate that a jlog is free of errors opt msys jlog bin jlog sanity check le be jlog This command inspects the contents of a jlog and reports any errors or inconsistencies it finds If the jlog is OK nothing is printed The first argument indicates the..."
---

<a name="executable.jlog_sanity_check"></a> 
## Name

jlog_sanity_check — validate that a jlog is free of errors

## Synopsis

`/opt/msys/jlog/bin/jlog_sanity_check` { le | be } *`jlog`*

<a name="idp14258048"></a> 
## Description

This command inspects the contents of a jlog, and reports any errors or inconsistencies it finds. If the jlog is OK, nothing is printed.

The first argument indicates the endianness of the system on which the jlog was written (`le` for little-endian architectures like i386 and `be` for big-endian architectures like sparc).

The second argument is the path to the jlog you want to check.

This command should be run as `ecuser`.