---
lastUpdated: "03/26/2020"
title: "pathway"
description: "pathway a grouping of inbound configuration options The pathway scope is used to group inbound configuration options that you wish to apply to a specific ESMTP Listener A pathway scope may be defined in the global scope or within a pathway group scope The usual fallback semantics apply to options..."
---

<a name="conf.ref.pathway"></a> 
## Name

pathway — a grouping of inbound configuration options

<a name="idp25695952"></a> 
## Description

The `pathway` *scope* is used to group inbound configuration options that you wish to apply to a specific ESMTP_Listener. A pathway scope may be defined in the global scope or within a `pathway_group` scope.

```
pathway "example1" {
  allow_null_envelope_sender = true
}

pathway_group "group1" {

  pathway "example2" {
    idle_time = 400
  }
}
```

The usual fallback semantics apply to options valid in the Pathway scope. The value that an option assumes, in order of decreasing precedence, is as follows:

1.  pathway_group::pathway

2.  pathway

3.  pathway_group

4.  global

A pathway is associated with a specific ESMTP_Listener or a listen or peer scope within an ESMTP_Listener by setting the `pathway` *option* within that scope. For example:

```
pathway "example1" {
  allow_null_envelope_sender = true
}

ESMTP_Listener {
  listen ":25" {
    ...
    **pathway = "example1"** 
  }
}
```

Pathway_groups are used for logical groupings only and cannot be associated with ESMTP_Listeners.

Because a pathway is just a message context variable, you can set it in the following way:

`vctx_mess_set "pathway" "example1"`<a name="idp25709136"></a> 
## Scope

The pathway scope is valid in the global scope and within a pathway group scope.

The pathway *option* references a pathway scope and is valid within an esmtp_listener or within a listen or peer scope within an esmtp_listener.

<a name="idp25712560"></a> 
## See Also

[pathway_group](/momentum/4/config/ref-pathway-group)