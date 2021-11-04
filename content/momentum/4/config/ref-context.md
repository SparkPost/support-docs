---
lastUpdated: "03/26/2020"
title: "context"
description: "context use to set arbitrary connection context key value pairs context name value Provides a mechanism to set arbitrary connection context key value pairs The connection context is visible to all validation modules and scriptlets It allows the efficient assignment of metadata to connections based on the listener and arbitrary..."
---

<a name="conf.ref.context"></a> 
## Name

context — use to set arbitrary connection context key value pairs.

## Synopsis

context = "*`(name = value)`*          "

<a name="idp23967360"></a> 
## Description

Provides a mechanism to set arbitrary connection context key value pairs. The connection context is visible to all validation modules and scriptlets. It allows the efficient assignment of metadata to connections based on the listener and arbitrary ACLs.

<a name="idp23969424"></a> 
## Scope

context is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp23971312"></a> 
## See Also

[“Validation and the Validation Context”](/momentum/4/4-policy#policy.validation)