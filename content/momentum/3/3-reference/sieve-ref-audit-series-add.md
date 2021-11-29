---
lastUpdated: "03/26/2020"
title: "audit_series_add"
description: "audit series add Add to a named series audit series add series name interval number amount to add audit series add hash Audit series enable IP address based events to be tracked over a rolling set of time windows For further background see the section called Audit series As of..."
---

<a name="sieve.ref.audit_series_add"></a> 
## Name

audit_series_add — Add to a named series

## Synopsis

`audit_series_add` { *`series_name`* } { *`interval,number`* } [ *`amount_to_add`* ]
`audit_series_add` { *`$hash`* }

<a name="idp28686864"></a> 
## Description

Audit series enable IP-address based events to be tracked over a rolling set of time windows. For further background, see [the section called “Audit series”](/momentum/3/3-reference/sieve-ecaddons#sieve.ectypes_audit_series).

### Note

As of version 3.4, this feature supports IPv6.

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `Gateway`, `Routes` and `Listen` options must have IPv6 addresses enclosed in brackets. Others, such as `Peer`, `Relay_Hosts` and `Prohibited_Hosts` do not require the IPv6 address in brackets.

`audit_series_add` increments the count associated with the IP address (see `ip` argument) by the provided amount, in the audit series having the specified name and monitor.

The `monitor` is a "interval,number" string that specifies a time interval in seconds, and the number of windows of that size. E.g., "300,6" specifies that the series should have six windows of 300 seconds each.

There are two forms for this command. The first form takes positional arguments, and the second form takes named arguments, passed as keys with their corresponding values in a hash. These keys are supported:

<dl class="variablelist">

<dt>series</dt>

<dd>

A string identifying the series, for example, "mycounter".

</dd>

<dt>monitor</dt>

<dd>

A string identifying the monitor, for example, "300,6".

</dd>

<dt>count</dt>

<dd>

The number to add to the current window. The count defaults to 1.

</dd>

<dt>replicate</dt>

<dd>

If this key is not used or its value is `0` then there is no replication. A value of `1` means do a `metrics` type of replication for this add, meaning that all nodes get updated audit_series data. A value of `-1` means do a `eccmgr_metrics` type of replication which updates eccmgr but not other nodes. Named audit series replication must be configured and the replicate type must be set in the cluster module as indicated. For more information see [“Replicated named audit series”](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.replicated_audit_series).

</dd>

<dt>ip</dt>

<dd>

IP address to insert. If this is not specified, the remote side of the current active connection is used.

</dd>

<dt>serialize</dt>

<dd>

To use `audit_series_add` on a single-node set this key to `1`.

</dd>

</dl>

### Note

This feature requires the inbound_audit module. See [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit) for more information.

<a name="example.audit_series_add"></a> 


`audit_series_add "mycounter" "1800,3" "3";`
<a name="example.audit_series_add.second"></a> 


```
$args = hash_create;
hash_set $args "series" "mycounter";
hash_set $args "monitor" "1,10";
hash_set $args "count" 2;
audit_series_add $args;
```

When using `audit_series_add`, on a single-node you need to set `serialize` to `1`. Add the following line to your script before invoking `audit_series_add`:

`hash_set $args "serialize" 1;`