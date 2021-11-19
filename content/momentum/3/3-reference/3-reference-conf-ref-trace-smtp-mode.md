---
lastUpdated: "03/26/2020"
title: "trace_smtp_mode"
description: "trace smtp mode set the default permissions of trace files trace smtp mode 0640 This option sets the default permissions of trace files created when using the console command trace smtp As always the permissions will be modified by the umask of the ecelerity process When running as user and..."
---

<a name="conf.ref.trace_smtp_mode"></a> 
## Name

trace_smtp_mode — set the default permissions of trace files

## Synopsis

`trace_smtp_mode = 0640`

<a name="idp12266352"></a> 
## Description

This option sets the default permissions of trace files created when using the console command **trace smtp** . As always, the permissions will be modified by the umask of the ecelerity process. When running as user and group `ecuser`, the default value of this option will make the files readable and writable to the `ecuser` user, readable to members of the ecuser group, and not accessible to other users.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is `0640`.

<a name="idp12271952"></a> 
## Scope

trace_smtp_mode is valid in the global scope.

<a name="idp12273600"></a> 
## See Also

[trace smtp](/momentum/3/3-reference/3-reference-console-commands-trace-smtp)