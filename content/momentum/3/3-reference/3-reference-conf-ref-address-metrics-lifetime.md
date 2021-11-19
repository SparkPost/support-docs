---
lastUpdated: "03/26/2020"
title: "address_metrics_lifetime"
description: "address metrics lifetime the TTL of address metrics Address Metrics Lifetime 1800 Address metrics store data on the quality of service to a particular target host from a particular binding data such as the time since the last failure and how long it takes to connect and to deliver a..."
---

<a name="conf.ref.address_metrics_lifetime"></a> 
## Name

address_metrics_lifetime — the TTL of address metrics

## Synopsis

`Address_Metrics_Lifetime = 1800`

<a name="idp7419360"></a> 
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. The address_metrics_lifetime option controls how long a set of address metrics will live after last being updated. Normally this option does not need to be changed.

The default value for this option is 1800 seconds.

<a name="idp7421936"></a> 
## Scope

Address_Metrics_Lifetime is valid in the global scope.

<a name="idp7423584"></a> 
## See Also

[address_metrics_cleanse_interval](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-cleanse-interval)