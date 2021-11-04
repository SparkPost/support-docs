---
lastUpdated: "03/26/2020"
title: "ipv6_lookup – Multi-address-family MX Records"
description: "Configuration Change This feature is available as beta in Momentum 3 6 10 and later The ipv 6 lookup module supports multi address family MX records enabling A record lookups for I Pv 6 addresses This module keeps track of whether the A record query succeeded and if it did..."
---

<a name="idp20249616"></a> 

**Configuration Change. ** This feature is available as beta in Momentum 3.6.10 and later.

The ipv6_lookup module supports multi-address-family MX records, enabling A record lookups for IPv6 addresses. This module keeps track of whether the A record query succeeded, and if it did when getting the AAAA records back when making a new list of addresses, it copies the existing set of addresses and then adds the new ones to the end of the list.

### <a name="modules.ipv6_lookup.config"></a> Configuration

The ipv6_lookup module is enabled as follows:

<a name="modules.ipv6_lookup.example"></a> 


`ipv6_lookup {}`