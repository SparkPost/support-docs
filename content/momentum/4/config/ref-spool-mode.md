---
lastUpdated: "03/26/2020"
title: "spool_mode"
description: "spool mode set the file mode for newly created spool files spool mode 0640 spool mode allows you to set the mode for the open system call used to create spool files The value must be specified in octal format The default is 0640 Changing the value of this option..."
---

<a name="conf.ref.spool_mode"></a> 
## Name

spool_mode — set the file mode for newly created spool files

## Synopsis

`spool_mode = 0640`

<a name="idp26619456"></a> 
## Description

`spool_mode` allows you to set the *`mode`* for the `open` system call used to create spool files. The value must be specified in octal format. The default is `0640`.

Changing the value of this option at runtime requires restarting the ecelerity process (issuing the ec_console command **`config reload`**         will not suffice).

<a name="idp26624192"></a> 
## Scope

`spool_mode` is valid in the global scope.

<a name="idp26626448"></a> 
## See Also

[spoolbase](/momentum/4/config/ref-spoolbase)