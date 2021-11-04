---
lastUpdated: "03/26/2020"
title: "only_use_best_mx_for_relay_domains"
description: "only use best mx for relay domains If this is set to true only the lowest numerical priority M Xs are used when sending to domains listed in Bounce Domains or Relay Domains only use best mx for relay domains false When the only use best mx for relay domains..."
---

<a name="conf.ref.only_use_best_mx_for_relay_domains"></a> 
## Name

only_use_best_mx_for_relay_domains — If this is set to "true", only the lowest numerical priority MXs are used when sending to domains listed in Bounce_Domains or Relay_Domains.

## Synopsis

`only_use_best_mx_for_relay_domains = false`

<a name="idp10474848"></a> 
## Description

When the `only_use_best_mx_for_relay_domains` option is set to "true", only the lowest numerical priority MXs are used when sending to domains listed in `Bounce_Domains` or `relay_domains`; others are ignored. This was the behavior prior to version 2.2.2.30\. If this value is set to false, all MXs will be used. The default value for this option is `true`. (However, this option is typically set to `false` in the default `ecelerity.conf` file.) We suggest setting this to `false` if you use the `Routes` option.

### Note

The `relay_domains` value that interacts with `only_use_best_mx_for_relay_domains` is the one set in the global scope; any `relay_domains` set in pathway scopes will **not** be affected.

<a name="idp10483648"></a> 
## Scope

only_use_best_mx_for_relay_domains is valid in the global scope.

<a name="idp10485312"></a> 
## See Also

[routes](/momentum/3/3-reference/3-reference-conf-ref-routes), [bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains), [relay_domains](/momentum/3/3-reference/3-reference-conf-ref-relay-domains)