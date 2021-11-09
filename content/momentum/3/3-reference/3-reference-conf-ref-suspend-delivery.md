---
lastUpdated: "03/26/2020"
title: "suspend_delivery"
description: "suspend delivery prevent outbound mail delivery Suspend Delivery false When set to true this directive forces Momentum not to attempt any deliveries at all in the scope it is configured The default value is false The following example suspends delivery for a specific binding within a binding group Within a..."
---

<a name="conf.ref.suspend_delivery"></a> 
## Name

suspend_delivery — prevent outbound mail delivery

## Synopsis

`Suspend_Delivery = "false"`

<a name="idp11926160"></a> 
## Description

When set to `true`, this directive forces Momentum not to attempt any deliveries at all in the scope it is configured. The default value is `false`. The following example suspends delivery for a specific binding within a binding_group:

```
Binding_Group "ExampleGroup" {
  Suspend_Delivery = "false"
  Binding "example1"
  {
    Bind_Address = "10.10.10.10"
    Suspend_Delivery = "true"
  }
  Binding "example2"
  {
    Bind_Address = "10.10.10.11"
  }

  ...
}
```

Within a binding group, non-suspended bindings are preferred over suspended bindings so in the example above, messages will not be queued for binding "example1".

You can suspend delivery from the system console by issuing the command: **config set [*`scope`* *`scope_name`*] Suspend_Delivery true**                                                     . This can be useful for temporarily suspending deliveries for a specific domain. Setting `Suspend_Delivery` to `false` will resume delivery for all queued messages.

### Note

Note that using this option in the global scope also suspends the `#mmove` function that transfers messages between nodes in a cluster configuration. If you wish to suspend delivery for the default binding, also see [the section called “The "default" Binding”](/momentum/3/3-reference/3-reference-conf-ref-binding#conf.ref.binding.default).

<a name="idp11935216"></a> 
## Scope

`suspend_delivery` is valid in the binding, binding_group, domain and global scopes.

<a name="idp11937296"></a> 
## See Also

[binding](/momentum/3/3-reference/3-reference-conf-ref-binding), [“`duravip_follow` and the #mmove Binding”](/momentum/3/3-reference/3-reference-cluster-config-duravip#cluster.config.mmove), [default_binding](/momentum/3/3-reference/3-reference-conf-ref-default-binding)