---
lastUpdated: "03/26/2020"
title: "relay_for_sending_domains"
description: "relay for sending domains domains that may use the MTA as a relay relay for sending domains example com Provides a mechanism for finer control over SMTP relaying If specified with no parameters it allows unrestricted use of the instance as an SMTP relay a k a open relay from..."
---

<a name="conf.ref.relay_for_sending_domains"></a> 
## Name

relay_for_sending_domains — domains that may use the MTA as a relay.

## Synopsis

relay_for_sending_domains = *`(“*.example.com”)`*

<a name="idp25826192"></a> 
## Description

Provides a mechanism for finer control over SMTP relaying. If specified with no parameters, it allows unrestricted use of the instance as an SMTP relay (a.k.a., open relay) from the IP ACL that was matched.

If parameters of the form `"domainname" "other_domainname"` are specified, relaying will be allowed from that IP ACL if the sender domain matches one of the specified domain names. You can also use wildcards to specify a series of domain names, for example, `"*.foo.com"`. The `relay_hosts` options will override any restrictions enacted by this option for the specified IP addresses.

<a name="idp25830336"></a> 
## Scope

relay_for_sending_domains is valid in the esmtp_listener, listen, pathway, pathway_group, and peer scopes.

<a name="idp25832240"></a> 
## See Also

[relay_hosts](/momentum/4/config/ref-relay-hosts)