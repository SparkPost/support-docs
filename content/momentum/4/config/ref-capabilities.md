---
lastUpdated: "03/26/2020"
title: "capabilities"
description: "capabilities selectively retain root capabilities Security capabilities linux capability set It is generally agreed that running with root privileges is dangerous for Internet servers As such Linux exposes a capabilities system that allows a non privileged user to retain certain root privileges The capability system makes this possible The list..."
---

<a name="conf.ref.capabilities"></a> 
## Name

capabilities — selectively retain "root" capabilities

## Synopsis

`Security { capabilities = "linux capability set" }`

<a name="idp23719632"></a> 
## Description

It is generally agreed that running with "root privileges" is dangerous for Internet servers. As such, Linux exposes a "capabilities" system that allows a non-privileged user to retain certain root privileges. The capability system makes this possible.

The list of possible capabilities for Linux may vary depending on your Linux distribution, but documentation is found in the `capabilities` manual page. We use the `cap_from_text` library function to process the Linux capabilities string, so we will accept any capability supported by the operating system. The capability adjustment is applied via the `cap_set_proc` library function. If no capabilities string is specified, no privileges are retained; this is the default.

The following is an example of using the Capabilities option in a single-node configuration:

<a name="example.capabilities"></a> 


```
Security {
  user = ecuser
  group = ecuser
  # Allow binding to privileged ports without requiring a process restart
  Capabilities = "cap_net_bind_service+ep"
}
```

The following is an example of using the Capabilities option on a cluster node:

<a name="example.capabilities.cluster"></a> 


```
Security {
  user = ecuser
  group = ecuser
  Capabilities = "cap_net_admin+ep cap_net_bind_service+ep cap_net_raw+ep cap_sys_resource+ep"
}
```

### Note

The capabilities in this example make it possible to use DuraVIP™ bindings in a cluster when running as the user "ecuser".

The DuraVIP™ feature of Momentum requires higher privileges than usual in order to manipulate the network interfaces on the machine; rather than running with all possible privileges, you can configure Capabilities to specify the subset of privileges that are required. During initialization, Momentum will adjust the process privileges as you specify, and this typically results in a process running at a lower privilege level that cannot later increase its privilege level.

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp23734528"></a> 
## Scope

`capabilities` is valid in the security scope.

<a name="idp23736784"></a> 
## See Also

[security](/momentum/4/config/ref-security), [user](/momentum/4/config/ref-user), [chroot](/momentum/4/config/ref-chroot), and [supplemental_groups](/momentum/4/config/ref-supplemental-groups)