---
lastUpdated: "03/26/2020"
title: "relay_domains"
description: "relay domains configure the list of domains for which Momentum relays mail relay domains example com example net When Momentum is configured as an inbound mail relay or gateway it is necessary to specify for which domains you are willing to accept mail Accepting mail from anyone for any destination..."
---

<a name="conf.ref.relay_domains"></a> 
## Name

relay_domains — configure the list of domains for which Momentum relays mail

## Synopsis

`relay_domains = ( "*.example.com" "example.net" )`

<a name="idp25842080"></a> 
## Description

When Momentum is configured as an inbound mail relay or gateway, it is necessary to specify for which domains you are willing to accept mail. Accepting mail from anyone for any destination would make you an open relay and vulnerable to abuse.

With the `relay_domains` option, you may specify a list of domains and left-globbed domains for which the instance will relay mail (accept for delivery). Left-globbed domains are of the form `*fixed.ending`. For example, `*.example.com` would **not** match example.com (as the dot is required) but would match test.example.com, mail.example.com, foo.example.com, etc. `*example.com` would match example.com. However, it would also match badexample.com, which is usually undesirable, so in most cases the asterisk should be followed by a period.

If a domain is specified as a relay domain any incoming message that has its `envelope to` set to that domain, will be relayed. This setting works independently of the `relay_hosts` setting.

To accept mail for the domain `example.com` and all subdomains under it, specify:

`relay_domains = ( example.com *.example.com )`
### Note

Any addresses set in the `addresses` option of the [“fbl - Feedback Loop”](/momentum/4/modules/fbl) must be set in the `relay_domains` option.

<a name="idp25853136"></a> 
## Scope

`relay_domains` is valid in the global, pathway_group, and pathway scopes.

<a name="idp25856400"></a> 
## See Also

[relay_hosts](/momentum/4/config/ref-relay-hosts), [only_use_best_mx_for_relay_domains](/momentum/4/config/ref-only-use-best-mx-for-relay-domains)