---
lastUpdated: "03/26/2020"
title: "address_metrics_cleanse_interval"
description: "address metrics cleanse interval the interval for refreshing address metrics address metrics cleanse interval 3600 Address metrics store data on the quality of service to a particular target host from a particular binding data such as the time since the last failure and how long it takes to connect and..."
---

<a name="conf.ref.address_metrics_cleanse_interval"></a> 
## Name

address_metrics_cleanse_interval — the interval for refreshing address metrics

## Synopsis

`address_metrics_cleanse_interval = 3600`

<a name="idp23343088"></a> 
## Description

Address metrics store data on the quality of service to a particular target host from a particular binding; data such as the time since the last failure, and how long it takes to connect and to deliver a message. Address metrics are used to determine which of a domain's MXs to open more connections to. `address_metrics_cleanse_interval` controls how often stale entries are cleaned up. Normally this option does not need to be changed.

The default value is 3600 seconds.

<a name="idp23346176"></a> 
## Scope

address_metrics_cleanse_interval is valid in the global scope.

<a name="idp23347936"></a> 
## See Also

[address_metrics_lifetime](/momentum/4/config/ref-address-metrics-lifetime)