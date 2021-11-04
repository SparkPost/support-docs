---
lastUpdated: "03/26/2020"
title: "Adaptive Functions"
description: "The AP Is documented here relate to the adaptive module See the Momentum reference manual for more information about Adaptive Delivery Also see Adaptive Delivery User Guide..."
---


| Name                                                                                                                                              | Description                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [ec_adaptive_get_backstore_job_class](/momentum/3/3-api/apis-ec-adaptive-get-backstore-job-class)             | Get the backstore job class                                                       |
| [ec_adaptive_get_backstore_job_concurrency](/momentum/3/3-api/apis-ec-adaptive-get-backstore-job-concurrency) | Get the backstore job concurrency semaphore                                       |
| [ec_adaptive_get_configured_sweep_rules](/momentum/3/3-api/apis-ec-adaptive-get-configured-sweep-rules)       | Return a list of configured sweep rules                                           |
| [ec_adaptive_get_stats_period](/momentum/3/3-api/apis-ec-adaptive-get-stats-period)                           | Return the adaptive_stats_period which is the retention period for adaptive stats |
| [ec_adaptive_log](/momentum/3/3-api/apis-ec-adaptive-log)                                                     | Log function for AD system to log operational logs                                |
| [ec_adaptive_log_config](/momentum/3/3-api/apis-ec-adaptive-log-config)                                       | Log function for AD system to log config change to jlog                           |
| [ec_adaptive_log_status](/momentum/3/3-api/apis-ec-adaptive-log-status)                                       | Log function for AD system to log status change to jlog                           |
| [ec_adaptive_logf](/momentum/3/3-api/apis-ec-adaptive-logf)                                                   | Log function for AD system to log operational logs                                |
| [ec_adaptive_logv](/momentum/3/3-api/apis-ec-adaptive-logv)                                                   | Log function for AD system to log operational logs                                |
| [ec_adaptive_persist_configurations](/momentum/3/3-api/apis-ec-adaptive-persist-configurations)               | function to save suspensions, and optvals for a binding/domain to backstore       |
| [ec_adaptive_remove_suspension](/momentum/3/3-api/apis-ec-adaptive-remove-suspension)                         | function to remove one suspension from backstore                                  |
| [ec_adaptive_restore_configuration](/momentum/3/3-api/apis-ec-adaptive-restore-configuration)                 | function to refresh parameters from backstore                                     |
| [ec_adaptive_sweep_rules_by_binding_domain](/momentum/3/3-api/apis-ec-adaptive-sweep-rules-by-binding-domain) | Return a list of applicable sweep rules for given binding/domain pair             |
| [ec_adaptive_throttle_create_named](/momentum/3/3-api/apis-ec-adaptive-throttle-create-named)                 | create a named throttle within the adaptive context                               |
| [ec_adaptive_throttle_delta](/momentum/3/3-api/apis-ec-adaptive-throttle-delta)                               | adjust the counter for a named throttle                                           |
| [ec_adaptive_throttle_is_exceeded](/momentum/3/3-api/apis-ec-adaptive-throttle-is-exceeded)                   | check to see if a throttle is over budget                                         |
| [ec_adaptive_throttle_time_until_clear](/momentum/3/3-api/apis-ec-adaptive-throttle-time-until-clear)         | check to see how long it will be until a throttle is under budget                 |
| [is_adaptive_scope_global](/momentum/3/3-api/apis-is-adaptive-scope-global)                                   | check if a binding/domain pair's adaptive scope is global or not                  |

The APIs documented here relate to the [adaptive](/momentum/3/3-reference/3-reference-modules-adaptive) module. See the Momentum reference manual for more information about Adaptive Delivery. Also see [Adaptive Delivery User Guide](/momentum/3/3-ad).