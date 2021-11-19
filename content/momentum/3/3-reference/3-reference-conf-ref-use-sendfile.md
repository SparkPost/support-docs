---
lastUpdated: "03/26/2020"
title: "Use_SendFile"
description: "Use Send File use sendfile when sending mail Use Send File false Use Send File true When set to true Momentum will attempt to use sendfile or other system dependent equivalent to efficiently send mail to a remote MTA This typically means that the system will either pull data directly..."
---

<a name="conf.ref.use_sendfile"></a> 
## Name

Use_SendFile — use sendfile() when sending mail

## Synopsis

`Use_SendFile = false`

`Use_SendFile = true`

<a name="idp12402432"></a> 
## Description

When set to true, Momentum will attempt to use `sendfile` ), (or other system dependent equivalent) to efficiently send mail to a remote MTA. This typically means that the system will either pull data directly from disk using a form of memory mapped IO, or use a zero copy mechanism to reduce the number of user-space to kernel mode transitions and memory bus overhead that would otherwise be required to push the data through the system.

The default for this option is `false`. This option should be set dependent on the performance and stability of `sendfile` on your system. Unix systems typically also require that `Use_MMAP` also be enabled for this to take effect.

<a name="idp12406848"></a> 
## Scope

use_sendfile is valid in the global scope.

<a name="idp12408480"></a> 
## See Also

[Use_MMAP](/momentum/3/3-reference/3-reference-conf-ref-use-mmap)