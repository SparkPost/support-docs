---
lastUpdated: "03/26/2020"
title: "delayed_binding_domain_fuzz"
description: "delayed binding domain fuzz The length of time to spread scheduled messages over when a bulk requeue is necessary delayed binding domain fuzz 0 When a bulk requeue is necessary this option sets the number of seconds to spread scheduled messages over This option must be a power of two..."
---

<a name="conf.ref.delayed_binding_domain_fuzz"></a> 
## Name

delayed_binding_domain_fuzz — The length of time to spread scheduled messages over when a bulk requeue is necessary

## Synopsis

`delayed_binding_domain_fuzz = 0`

<a name="idp8816208"></a> 
## Description

When a bulk requeue is necessary, this option sets the number of seconds to spread scheduled messages over. This option must be a power-of-two value from 2 - n. It is possible to set this to values that are not powers of two, but this may result in sub-optimal performance and ecelerity scheduler congestion.

The default value for this option is `0`.

<a name="idp8819008"></a> 
## Scope

delayed_binding_domain_fuzz is valid in the global, binding and binding_group scopes

<a name="idp8820688"></a> 
## See Also

[“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive)