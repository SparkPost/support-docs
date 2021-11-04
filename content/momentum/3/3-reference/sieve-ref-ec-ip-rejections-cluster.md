---
lastUpdated: "03/26/2020"
title: "ec_ip_rejections_cluster"
description: "ec ip rejections cluster Audit how many rejections an IP address has made cluster wide ec ip rejections cluster time series index mask ec ip rejections cluster hash ec ip rejections cluster returns a string containing the number of rejections that have occurred for a CIDR block within a configured..."
---

<a name="sieve.ref.ec_ip_rejections_cluster"></a> 
## Name

ec_ip_rejections_cluster — Audit how many rejections an IP address has made cluster-wide

## Synopsis

`ec_ip_rejections_cluster` { *`time_series_index`* } [ *`mask`* ]
`ec_ip_rejections_cluster` { *`$hash`* }

<a name="idp30164304"></a> 
## Description

`ec_ip_rejections_cluster` returns a string containing the number of rejections that have occurred for a CIDR block within a configured time window. The referenced CIDR block is constructed by applying the `mask` option value to the SMTP connection's remote IP address. There are two forms of this command.

In the first form, the `time_series_index` value selects a monitor corresponding to its position in the inbound_audit configuration stanza (A `time_series_index` of '0' corresponds to the first monitor in the inbound_audit configuration stanza). The audit data returned for this monitor is based on a weighted sliding average of the current time window within this monitor and the previous time window, thus smoothing the transition between windows. If `mask` is not specified, the default value of '32' is used to compute the CIDR block.

In the second form, a hash is used to pass the arguments. These keys are supported:

<dl class="variablelist">

<dt>monitor</dt>

<dd>

A string matching a monitor definition within the inbound_audit configuration stanza, for example, "300,6". By default the first monitor listed in the configuration stanza is used.

</dd>

<dt>period_start</dt>

<dd>

Starting window number. The default is 0, which is the chronologically current window. For example, if the inbound_audit configuration stanza defines a monitor as "300,6", then the monitor contains six windows numbered 0 (current) through 5 (oldest). Each time window in this example is 300 seconds duration.

</dd>

<dt>period_end</dt>

<dd>

Ending window number. It defaults to the value of `period_start`. If this key is specified, its value is a window number (which should be equal to or greater than period_start). The result will be an aggregate sum over the window range.

</dd>

<dt>mask</dt>

<dd>

This is the mask used to compute CIDR block. The mask defaults to '32'.

</dd>

</dl>

### Note

This feature also requires the cluster module. The cluster configuration stanza must specify metrics replication including the parameter `rejection`:

```
cluster {
  # ... other cluster config ...
  Replicate "inbound_cidr" {}
}
```

This feature also requires the inbound_audit module. See [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit) for more information.

<a name="example.ec_ip_rejections_cluster"></a> 


```
$rejections = ec_ip_rejections_cluster "0" "32";
$c_rejections = ec_ip_rejections_cluster "0" "24";
if ec_test :value "gt" :comparator "i;ascii-numeric" "${rejections}" "1000" {
  ec_tarpit 10 "too many rejections /32";
}

if ec_test :value "gt" :comparator "i;ascii-numeric" "${c_rejections}" "10000" {
  ec_tarpit 10 "too many rejections /24";
}
```

<a name="example.ec_ip_rejections_cluster.second"></a> 


```
$args = hash_create;
hash_set $args "period_start" "0";
hash_set $args "period_end" "2";
hash_set $args "monitor" "300,6";
hash_set $args "mask" "32";
$count = ec_ip_rejections_cluster $args;

if ec_test :value "gt" :comparator "i;ascii-numeric" "${count}" "10000" {
  ec_tarpit 10 "too many rejections /32 in last fifteen minutes";
}
```