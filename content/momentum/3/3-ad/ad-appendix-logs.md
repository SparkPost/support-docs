---
lastUpdated: "03/26/2020"
title: "Adaptive Logs"
description: "The following table shows the log entries at the various debug levels Table C 1 adaptive log entries Error Level Error Message Action DEBUG closing io wrapper path See message DEBUG opened filename See message DEBUG ec adaptive sweep rules by binding domain find instances scope for domain domain name..."
---

## <a name="ad.appendix.logs"></a> Adaptive Logs

The following table shows the log entries at the various debug levels.

<a name="ad.adaptive.log.entries.table"></a> 


| Error Level | Error Message | Action |
| --- | --- | --- |
| DEBUG | closing *`io_wrapper_path`* | See message |
| DEBUG | opened:*`filename`* | See message |
| DEBUG | ec_adaptive_sweep_rules_by_binding_domain: find *`instances`* scope for domain *`domain_name`* within binding *`binding_name`* bdname); | See message |
| DEBUG | adaptive: singleton module: *`name`* is found |   |
| INFO | ec_adaptive_sweep_rules_by_binding_domain: no stats available | See message |
| INFO | adaptive: Created persisted cluster-wide series *`fbl_stats_series`* with windows size/number= *`size/number`*n" | See message |
| INFO | adaptive: cluster is detected | See message |
| ERROR | unable to finding retry state for *`binding`*:*`domain`* | See message |
| ERROR | adaptive: unable to open *`datastore`*: *`error`* | See message |
| ERROR | adaptive: error executing query: *`error`* | See message |
| ERROR | adaptive: suspensions_cb called with argc *`number`* (expected 5) | See message |
| ERROR | adaptive: binding_age_cb called with argc *`number`* (expected 3) | See message |
| ERROR | adaptive: binding_age_cb called with NULL argv | See message |
| ERROR | adaptive: optvals_cb called with argc *`number`* (expected 5) | See message |
| ERROR | adaptive: optvals_cb called with NULL argv | See message |
| ERROR | adaptive: unable to open *`datastore error`*        | See message |
| ERROR | adaptive: error executing query: *`error`* | See message |
| ERROR | adaptive: fail to increment key *`fbl_buffer`* of series *`fbl_stats_series`* | See message |
| ERROR | adaptive: ill-formed fbl_stats_monitor: *`name`* Use 86400 as window size | See message |
| ERROR | adaptive: ill-formed fbl_stats_monitor: *`name`*. Use 6 as window count | See message |
| ERROR | failed to open: *`filename`* | See message |
| ERROR | ec_adaptive_sweep_rules_by_binding_domain: missing domain | See message |
| ERROR | ec_adaptive_sweep_rules_by_binding_domain: cannot find scope for binding *`bdname`* | See message |
| ERROR | adaptive: fail to fetch singleton modules, assume cluster is not configured | See message |
| ERROR | adaptive: Failed to create persisted cluster-wide series *`fbl_stats_series`* with windows size/number= *`size/number`* | See message |
| ERROR | Could not resize *`stats_cache_name`* | See message |
| CRITICAL | ec_adaptive_new_suspension called with NULL binding | Check binding configurations. |
| CRITICAL | ec_adaptive_new_suspension called with NULL domain | Check domain configurations. |
| CRITICAL | adaptive_lookup_value hook not found; AD is effectively disabled. Did you forget to load the msys.adaptive module. | See message. |
| CRITICAL | Cannot create adaptive thread pool. | See message |
| CRITICAL | Cannot create option cache. | See message |
| CRITICAL | Cannot create suspensions table. | See message |
| CRITICAL | Cannot create binding ages table. | See message |
| CRITICAL | Cannot create optvals table. | See message |