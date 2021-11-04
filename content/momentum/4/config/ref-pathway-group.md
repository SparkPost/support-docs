---
lastUpdated: "03/26/2020"
title: "pathway_group"
description: "pathway group a container for pathways Currently esmtp listener options used in the pathway group scope are not recognized by ecelerity For this reason do not use pathway group as a configuration container As a workaround use the pathway scope only The pathway group scope is used to logically group..."
---

<a name="conf.ref.pathway_group"></a> 
## Name

pathway_group — a container for pathways

<a name="idp25720720"></a> 
## Description

### Warning

Currently, esmtp_listener options used in the pathway_group scope are not recognized by ecelerity. For this reason, do not use pathway_group as a configuration container. As a workaround, use the pathway scope only.

The `pathway_group` scope is used to logically group pathways so that common configuration options need not be repeated throughout a configuration file.

```
pathway_group "group1" {
  idle_time = 400
  pathway "example1" {
    banner_hostname = "example1.mail.server"
  }

  pathway "example2" {
    banner_hostname = "example2.mail.server"
  }
}
```

In the example above, both pathways will have the same `idle_time` but different `banner_hostname`s.

<a name="idp25726512"></a> 
## Scope

pathway_group is valid in the global scope.

<a name="idp25728880"></a> 
## See Also

[pathway](/momentum/4/config/ref-pathway)