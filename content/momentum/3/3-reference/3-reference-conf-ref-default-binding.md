---
lastUpdated: "03/26/2020"
title: "default_binding"
description: "default binding control usage of the default binding default binding normal default binding suspended default binding none The default binding is the binding that a message belongs to when no other binding applies For more information see the section called The default Binding For customers using Multi VIP interfaces it..."
---

<a name="conf.ref.default_binding"></a> 
## Name

default_binding — control usage of the "default" binding

## Synopsis

`default_binding = "normal"`

`default_binding = "suspended"`

`default_binding = "none"`

<a name="idp8750608"></a> 
## Description

The default binding is the binding that a message belongs to when no other binding applies. For more information see [the section called “The "default" Binding”](/momentum/3/3-reference/3-reference-conf-ref-binding#conf.ref.binding.default).

For customers using MultiVIP© interfaces, it may be desirable never to use the 'default' binding. There are two options for this. If `Default_Binding` is set to `none`, then messages that would fall into the default binding will generate a 451 transient failure back to the generating software.

The default value for this option is `normal`

If you wish to suspend delivery for the default binding, do it in the following way:

```
binding "default" {
  suspend_delivery = true
}
```
<a name="idp8756720"></a> 
## Scope

`default_binding` is valid in the global scope.

<a name="idp8758752"></a> 
## See Also

[“MultiVIP© Interfaces”](/momentum/3/3-reference/operations-multivip), [suspend_delivery](/momentum/3/3-reference/3-reference-conf-ref-suspend-delivery), [binding](/momentum/3/3-reference/3-reference-conf-ref-binding)