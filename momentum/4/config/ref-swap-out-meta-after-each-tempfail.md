---
title: "swap_out_meta_after_each_tempfail"
description: "controls whether or not Momentum will update metadata such as num_retries, next_attempt, and message context on disk after each tempfail. Defaults to true"
---

<a name="conf.ref.swap_out_meta_after_each_tempfail"></a> 
## Name

swap_out_meta_after_each_tempfail — controls behavior for updating the startup failure related metadata on

## Synopsis

`swap_out_meta_after_each_tempfail = true`

## Description

Assuming `swap_out_meta_after_each_tempfail` is left at the default value of true, the `num_retries` and `next_attempt` values will always be updated on disk after each tempfail.  If this is set to false, `num_retries` will start back at 0 on a restart causing potential issues. 

The default value is _true_.

## Scope

swap_out_meta_after_each_tempfail is valid in the global scope.

## See Also

[inline_transfail_processing](/momentum/4/config/ref-inline-transfail-processing)