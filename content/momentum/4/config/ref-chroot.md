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

<a name="idp23748272"></a> 
## Description

This security feature invokes the underlying operating system's `chroot` call to place Momentum in an alternate root directory. This can be used to limit the portions of the file system that are available to Momentum and can be an added protection should the instance be compromised.

The default value for this option is to use no chroot.

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp23753232"></a> 
## Scope

chroot is valid in the security scope.

<a name="idp23755056"></a> 
## See Also

[security](/momentum/4/config/ref-security), [capabilities](/momentum/4/config/ref-capabilities), [user](/momentum/4/config/ref-user), and [supplemental_groups](/momentum/4/config/ref-supplemental-groups)