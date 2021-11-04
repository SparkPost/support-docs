---
lastUpdated: "03/26/2020"
title: "max_resident_transfails"
description: "max resident transfails the threshold for swapping transient failures out of memory max resident transfails 100 If the transfail queue grows beyond the size specified by this option messages are swapped out before being queued to the transfail queue thus mitigating a potential memory usage problem The default value is..."
---

<a name="conf.ref.max_resident_transfails"></a> 
## Name

max_resident_transfails — the threshold for swapping transient failures out of memory

## Synopsis

`max_resident_transfails = 100`

<a name="idp25318320"></a> 
## Description

If the transfail queue grows beyond the size specified by this option, messages are swapped out before being queued to the transfail queue thus mitigating a potential memory usage problem.

The default value is `100`.

<a name="idp25321216"></a> 
## Scope

max_resident_transfails is valid in the global scope.

<a name="idp25323056"></a> 
## See Also

[inline_transfail_processing](/momentum/4/config/ref-inline-transfail-processing) and [reserve_maintenance_interval](/momentum/4/config/ref-reserve-maintenance-interval)