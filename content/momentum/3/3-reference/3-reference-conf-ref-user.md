---
lastUpdated: "03/26/2020"
title: "user"
description: "user group security user identity to assume after startup This security feature instructs Momentum if run as root to drop its superuser privileges before processing mail By doing this Momentum can limit the damage that could be caused by an attack on the system that results in compromise If you..."
---

<a name="conf.ref.user"></a> 
## Name

user, group — security: user identity to assume after startup

<a name="idp12416448"></a> 
## Description

```
Security {
  user = "<replaceable>user name or id</replaceable>" # default none>
  group = "<replaceable>group name or id</replaceable>" # default none>
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  Privileges = "basic net_privaddr"
}
```

This security feature instructs Momentum, if run as root, to drop its superuser privileges before processing mail. By doing this, Momentum can limit the damage that could be caused by an attack on the system that results in compromise.

If you are using a Security stanza and you want to use DuraVIP bindings in a cluster, you will also need to enable appropriate capabilities so that you can retain certain root privileges. For more information see [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities).

### Warning

The default value for both the "user" and the "group" option is `ecuser`. It is strongly recommended that you leave these options as their defaults. If you change these options to something else, you are responsible for maintaining the ownership and permissions of the files used by the Momentum components. This is of particular importance after running an upgrade; the packaging will try to respect existing permissions but there are limits to the level of intelligence that can applied to the installer.

<a name="idp12423024"></a> 
## Scope

user and group are valid in the security scope.

<a name="idp12424672"></a> 
## See Also

[chroot](/momentum/3/3-reference/3-reference-conf-ref-chroot), [supplemental_groups](/momentum/3/3-reference/3-reference-conf-ref-supplemental-groups), [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities), [privileges](/momentum/3/3-reference/conf-ref-privileges)