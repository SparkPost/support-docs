---
lastUpdated: "03/26/2020"
title: "spool_mode"
description: "spool mode set the file mode for newly created spool files Spool Mode 0640 Spool Mode allows you to set the mode for the open system call used to create spool files The value must be specified in octal format The default is 0640 Changing the value of this option..."
---

<a name="conf.ref.spool_mode"></a> 
## Name

spool_mode — set the file mode for newly created spool files

## Synopsis

`Spool_Mode = 0640`

<a name="idp11849312"></a> 
## Description

`Spool_Mode` allows you to set the *`mode`* for the `open` system call used to create spool files. The value must be specified in octal format. The default is `0640`.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp11854176"></a> 
## Scope

`spool_mode` is valid in the global scope.

<a name="idp11856208"></a> 
## See Also

[spoolbase](/momentum/3/3-reference/3-reference-conf-ref-spoolbase)