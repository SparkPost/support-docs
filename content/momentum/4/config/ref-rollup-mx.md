---
lastUpdated: "04/13/2020"
title: "rollup_mx"
description: "If set to 'true' traffic for the associated host domain will be routed to the MX host of the destination host domain specified by the argument of the related rollup_mx_name option. This enhances the ability of Adaptive Delivery to respond to feedback from receiving domains. Usable in host stanzas, which can be included in global, binding or binding_group scopes."
---

<a name="conf.ref.rollup_mx"></a>
## Name

rollup_mx — If this option is set to `true`, traffic destined for the associated host will be routed to the destination domain specified by the argument of the related "rollup_mx_name" configuration option.

## Synopsis

`rollup_mx = true`

## Description
This option controls whether or not the MX rollup feature is active for a destination host. In some cases, multiple destination domains are, through their MX records, routed to a single receiving domain. If Adaptive Delivery treats them all as separate domains, any feedback received from one is applied only to the individual domain, but since all are routing via MX to a single destination, requests to limit sending should apply to all of them for Adaptive Delivery to respond most efficiently.  MX rollup enables dealing with this problem and enhances the ability of Adaptive Delivery to manage sending.

When a destination domain's MX host is resolved, the host name is checked against Host stanzas in the configuration.  If there's a match, and rollup_mx is set to 'true' in the Host stanza, the mail is queued for the routing domain specified by the rollup_mx_name option value in the Host stanza.  Connection limits, sending rates, etc. determined by Adaptive Delivery are applied based on the routing domain, rather than the original destination domain.

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

The rollup_mx option works in conjunction with the rollup_mx_name option to implement the MX Rollup functionality.

## Scope

rollup_mx is valid in Host scope.  This can be specified in a Host stanza used in global, binding, or binding_group scopes.

## See Also

[rollup_mx_name](/momentum/4/ref-rollup-mx-name)
