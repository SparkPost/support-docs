---
lastUpdated: "03/26/2020"
title: "supplemental_groups"
description: "supplemental groups security supplemental groups to assume after startup Example 9 17 supplemental groups example This security feature instructs Momentum to issue a setgroups system call to set the supplemental groups for the Momentum process This allows more flexibility for granting Momentum access to resources that are restricted based on..."
---

<a name="conf.ref.supplemental_groups"></a> 
## Name

supplemental_groups — security: supplemental groups to assume after startup

<a name="idp11908944"></a> 
## Description

<a name="conf.ref.supplemental_groups.example"></a> 


Security {
  Supplemental_Groups = ( *`"list of group names or ids"`*                         )
  # On Linux, allow binding to privileged ports without requiring
  # a process restart
  Capabilities = "cap_net_bind_service+ep"
  # On Solaris, allow binding to privileged ports without requiring
  # a process restart (version 3.0 and higher)
  Privileges = "basic net_privaddr"
}

This security feature instructs Momentum to issue a `setgroups` system call to set the supplemental groups for the Momentum process. This allows more flexibility for granting Momentum access to resources that are restricted based on group membership.

<a name="idp11914672"></a> 
## Scope

Supplemental_Groups is valid in the security scope.

<a name="idp11916320"></a> 
## See Also

[user](/momentum/3/3-reference/3-reference-conf-ref-user), [chroot](/momentum/3/3-reference/3-reference-conf-ref-chroot), [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities)