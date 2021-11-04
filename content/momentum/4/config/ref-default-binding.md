---
lastUpdated: "03/26/2020"
title: "default_binding"
description: "default binding control usage of the default binding default binding normal default binding suspended default binding none The default binding is the binding that a message belongs to when no other binding applies The default value is normal If you are using Multi VIP interfaces you may want to use..."
---

<a name="conf.ref.default_binding"></a> 
## Name

default_binding — control usage of the "default" binding

## Synopsis

`default_binding = "normal"`

`default_binding = "suspended"`

`default_binding = "none"`

<a name="idp24079264"></a> 
## Description

The default binding is the binding that a message belongs to when no other binding applies. The default value is `normal`.

If you are using MultiVIP© interfaces, you may want to use one of the following options rather than the 'default' binding:

*   If `default_binding` is set to `none`, then messages that would fall into the default binding will generate a 451 transient failure back to the generating software.

*   If `default_binding` is set to `suspended`, you can suspend delivery for the default binding using the [suspend_delivery](/momentum/4/config/ref-suspend-delivery) option.

<a name="idp24087008"></a> 
## Scope

`default_binding` is valid in the global scope.

<a name="idp24089264"></a> 
## See Also

[suspend_delivery](/momentum/4/config/ref-suspend-delivery), [binding](/momentum/4/config/ref-binding), and [the section called “`default` Binding”](/momentum/4/config/ref-binding#conf.ref.binding.default)