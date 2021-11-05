---
lastUpdated: "03/26/2020"
title: "security"
description: "security Scope for defining which permissions are retained by which user security It is generally agreed that running with root privileges is dangerous for Internet servers As such Linux exposes a security system that allows a non privileged user to retain certain root privileges The following is an example of..."
---

<a name="conf.ref.security"></a> 
## Name

security — Scope for defining which permissions are retained by which user

## Synopsis

`security { ... }`

<a name="idp26357072"></a> 
## Description

It is generally agreed that running with "root privileges" is dangerous for Internet servers. As such, Linux exposes a "security" system that allows a non-privileged user to retain certain root privileges.

The following is an example of using the Security scope in a single-node configuration:

<a name="example.security"></a> 


```
Security {
  user = ecuser
  group = ecuser
  # Allow binding to privileged ports without requiring a process restart
  Capabilities = "cap_net_bind_service+ep"
}
```

The following is an example of using the Security scope on a cluster node:

<a name="example.security.cluster"></a> 


```
Security {
  user = ecuser
  group = ecuser
  Capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
}
```

In a cluster configuration, when you accept the default configuration, the definition of the `Security` stanza in the `ecelerity-cluster.conf` file overrides the configuration defined in the `ecelerity.conf` file.

### Warning

We do not recommend that the user in a `Security` stanza be set to `root`. However, if you do set `user` to `root` you will encounter permissions problems because capabilities are exclusive and not cumulative. Specifically, the `dmllog.rt` jlog won't be consumed, because it is written by a process that runs as ecuser, and when you run as root and define `Capabilities`, you lose the "root access to all files" capability unless it's defined in the capabilities set. If you must run as root, comment out the `Capabilities` option.

The following are the options valid in the `security` scope. For additional details about each option, follow the link:

*   [`capabilities`](/momentum/4/config/ref-capabilities)

*   [`group`](/momentum/4/config/ref-user)

*   [`user`](/momentum/4/config/ref-user)

*   [`chroot`](/momentum/4/config/ref-chroot)

*   [`supplemental_groups`](/momentum/4/config/ref-supplemental-groups)

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp26383536"></a> 
## Scope

`security` is valid in the global scope.

<a name="idp26385792"></a> 
## See Also

[capabilities](/momentum/4/config/ref-capabilities), [chroot](/momentum/4/config/ref-chroot), [supplemental_groups](/momentum/4/config/ref-supplemental-groups), [user](/momentum/4/config/ref-user), and [“`ecelerity-cluster.conf` File”](/momentum/4/config/ref-ecelerity-cluster-conf)