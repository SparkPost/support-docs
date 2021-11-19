---
lastUpdated: "03/26/2020"
title: "address_metrics_cleanse_interval"
description: "address metrics cleanse interval the interval for refreshing address metrics Address Metrics Cleanse Interval 3600 Address metrics store data on the quality of service to a particular target host from a particular binding data such as the time since the last failure and how long it takes to connect and..."
---

<a name="conf.ref.address_metrics_cleanse_interval"></a> 
## Name

address_metrics_cleanse_interval — the interval for refreshing address metrics

## Synopsis

`Address_Metrics_Cleanse_Interval = 3600`

<a name="idp7406272"></a> 
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. The address_metrics_cleanse_interval option controls how often stale entries are cleaned up. Normally this option does not need to be changed.

The default value for this option is 3600 seconds.

<a name="idp7408816"></a> 
## Scope

Address_Metrics_Cleanse_Interval is valid in the global scope.

<a name="idp7410480"></a> 
## See Also

[address_metrics_lifetime](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-lifetime)