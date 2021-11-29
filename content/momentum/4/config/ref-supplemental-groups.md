---
lastUpdated: "03/26/2020"
title: "supplemental_groups"
description: "supplemental groups security supplemental groups to assume after startup This security feature instructs Momentum to issue a setgroups system call to set the supplemental groups for the Momentum process This allows more flexibility for granting Momentum access to resources that are restricted based on group membership Example 72 10 supplemental..."
---

<a name="conf.ref.supplemental_groups"></a> 
## Name

supplemental_groups — security: supplemental groups to assume after startup

<a name="idp26684784"></a> 
## Description

This security feature instructs Momentum to issue a `setgroups` system call to set the supplemental groups for the Momentum process. This allows more flexibility for granting Momentum access to resources that are restricted based on group membership.

<a name="conf.ref.supplemental_groups.example"></a> 


Security {
  Supplemental_Groups = ( *`"list of group names or ids"`*                         )
  # Allow binding to privileged ports without requiring a process restart  
  Capabilities = "cap_net_bind_service+ep"
}

### Note

Changing the value of options in the `security` scope at runtime requires restarting the ecelerity process—issuing the ec_console command **`config reload`**         will not suffice.

<a name="idp26692272"></a> 
## Scope

Supplemental_Groups is valid in the security scope.

<a name="idp26694112"></a> 
## See Also

[security](/momentum/4/config/ref-security), [capabilities](/momentum/4/config/ref-capabilities), [user](/momentum/4/config/ref-user), and [chroot](/momentum/4/config/ref-chroot)