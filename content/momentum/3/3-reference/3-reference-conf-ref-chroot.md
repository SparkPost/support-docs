---
lastUpdated: "03/26/2020"
title: "chroot"
description: "chroot chroot to a secure environment Security chroot chroot dir This security feature invokes the underlying operating system's chroot call to place Momentum in an alternate root directory This can be used to limit the portions of the file system that are available to Momentum and can be an added..."
---

<a name="conf.ref.chroot"></a> 
## Name

chroot — chroot to a secure environment

## Synopsis

`Security { chroot = "/chroot/dir" }`

<a name="idp8487056"></a> 
## Description

This security feature invokes the underlying operating system's `chroot` call to place Momentum in an alternate root directory. This can be used to limit the portions of the file system that are available to Momentum and can be an added protection should the instance be compromised.

Changing the value of this option at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

The default value for this option is to use no chroot.

<a name="idp8491248"></a> 
## Scope

chroot is valid in the security scope.

<a name="idp8492880"></a> 
## See Also

[chroot](/momentum/3/3-reference/3-reference-conf-ref-chroot), [supplemental_groups](/momentum/3/3-reference/3-reference-conf-ref-supplemental-groups), [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities)