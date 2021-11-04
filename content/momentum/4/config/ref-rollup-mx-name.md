---
lastUpdated: "04/13/2020"
title: "rollup_mx_name"
description: "If the associated rollup_mx option is set to 'true', rollup_mx_name specifies the MX host domain to route the traffic to. Valid in host, binding, and binding_group scopes. Usable in Host stanzas, which can be included in global, binding or binding_group scopes."
---

<a name="conf.ref.rollup_mx_name"></a>
## Name

rollup_mx_name — specifies the destination domain to route mail to when using the MX rollup feature

## Synopsis

`rollup_mx_name = "somedomain.com`

## Description
This option specifies the destination domain to route to when using the MX rollup feature for a destination host.  A more complete description of MX rollup is given in the rollup_mx option entry.

In the following example configuration, mail sent to either "node1.somedomain.com" or "mail.nobody.com" will be routed to "otherdomain.com", and any Adaptive Delivery settings for "otherdomain.com" will control the delivery.

```
Host "node1.somedomain.com" {
  rollup_mx = true
  rollup_mx_name = "otherdomain.com"
}

Host "mail.nobody.com" {
  rollup_mx = true
  rollup_mx_name = "otherdomain.com"
}
```

### Note

The rollup_mx_name option works in conjunction with the rollup_mx option to implement the MX Rollup functionality.

## Scope

rollup_mx_name is valid in Host scope.  This can be specified in a Host stanza used in global, binding, or binding_group scopes.

## See Also

[rollup_mx](/momentum/4/ref-rollup-mx)
