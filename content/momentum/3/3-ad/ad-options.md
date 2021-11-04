---
lastUpdated: "03/26/2020"
title: "Adaptive Options"
description: "Find below a table of options valid in the adaptive module scope Table A 1 adaptive module options Option Description Default ad response rule series prefix The suffix for rule series names ADRR series adaptive cache size The size of the adaptive cache 1048576 adaptive cache ttl The TTL for..."
---

## <a name="ad.options"></a> Adaptive Options

Find below a table of options valid in the adaptive module scope.

<a name="adaptive-module-options-table"></a> 


| Option/Description | Default |
| --- | --- |
| **[ad_response_rule_series_prefix](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.ad_response_rule_series_prefix)** – The suffix for rule series' names | ADRR_series |
| **[adaptive_cache_size](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_cache_size)** – The size of the adaptive cache | 1048576 |
| **[adaptive_cache_ttl](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_cache_ttl)** – The TTL for the adaptive cache | 43200 |
| **[adaptive_manage_options](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_manage_options)** – Define options that will be managed by adaptive |   |
| **[adaptive_stats_period](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_stats_period)** – The size of the sliding window for the audit_series of the adaptive statistics | 3600 |
| **[adaptive_unmanage_options](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_unmanage_options)** – Define options that will be unmanaged by adaptive |   |
| **[backing_store_connect_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.backing_store_connect_timeout)** – The amount of time that the adaptive module will wait for a connection to the backing store server | 5 |
| **[backing_store_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.backing_store_timeout)** – The amount of time that the adaptive module will wait for a response from the adaptive backing store | 5 |
| **[binding_domain_cache_max_ttl](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.binding_domain_cache_max_ttl)** – The TTL for the binding::domain cache | 86400 |
| **[binding_domain_cache_size](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.binding_domain_cache_size)** – The number of entries in the binding::domain cache | 999999 |
| **[bounce_sweep_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.bounce_sweep_interval)** – How often to check the binding::domain bounce and FBL rates | 3600 |
| **[data_store](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.data_store)** – The IP/Port of Riak server(s) | ("http://127.0.0.1:8098") |
| **[data_store_sync_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.data_store_sync_interval)** – How often to synchronize the tables stored in memory with the database backing store | 3600 |
| **[enable_bounce_stats](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.enable_bounce_stats)** – Whether or not to consolidate bounce statistics hourly | true |
| **[enable_fbl_stats](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.enable_fbl_stats)** – Whether or not to consolidate FBL statistics hourly | true |
| **[enable_jlog](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.enable_jlog)** – Whether or not to enable logging of changes in status, suspension and other configuration changes | true |
| **[enable_logging](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.enable_logging)** – Whether or not to enable adaptive logging | true |
| **[fbl_stats_monitor](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.fbl_stats_monitor)** – Define FBL statistics monitoring windows | (14400, 6) |
| **[fbl_stats_series](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.fbl_stats_series)** – Specify the name of a persisted named series to be used to hold the FBL statistics | FBL_stats |
| **[fbl_total_series](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.fbl_total_series)** – Specify the name of a persisted named series to be used to hold the FBL total delivery count for all binding::domain combinations | FBL_total |
| **[jlog_file](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.jlog_file)** – Define the location of the adaptive jlog files | jlog:///var/log/adaptive/adaptive.rt=>ad_stats |
| **[log_base](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.log_base)** – Define the location of the adaptive module logs | /var/log/ecelerity/adaptive |
| **[operational_log_level](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.operational_log_level)** – Define the log level of the adaptive module | NOTICE |
| **[outbound_throttle_messages_monitor](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.outbound_throttle_messages_monitor)** – Specify the monitor window(s) for the outbound throttle audit series | (2, 20) |
| **[outbound_throttle_messages_series](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.outbound_throttle_messages_series)** – The name of the outbound throttle messages series | OBTM_Series |
| **[split_logs_by_binding](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.split_logs_by_binding)** – Whether or not to log by binding name | false |
| **[suspend_sweep_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.suspend_sweep_interval)** – How often to perform a sweep that checks for suspended and blackholed domains and re-enable the affected binding::domain | 60 |

Find below a table of non-module options related to Adaptive Delivery. (However, the adaptive module must be present, to configure any of these options).

<a name="adaptive-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[adaptive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_adjustment_interval)** – Throttle the adaptive adjustment interval | 60 | binding, binding_group, domain, global |
| **[adaptive_alert_email_destination](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_destination)** – The address where adaptive alerts should be sent |   | binding, binding_group, domain, global |
| **[adaptive_alert_email_sender](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_sender)** – Set the sender address of the alert email | NULL | binding, binding_group, domain, global |
| **[adaptive_attempt_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_attempt_threshold)** – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | 2000 | binding, binding_group, domain, global |
| **[adaptive_backstore_leveldb](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-leveldb)** – Use LevelDB as the backing store for Adaptive Delivery *(scope)* |   | global |
| **[adaptive_backstore_riak](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-riak)** – Define the characteristics of the Riak backing store *(scope)* |   | global |
| **[adaptive_body_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_default_suspension](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension)** – The amount of time to suspend a domain | 4 hours | binding, binding_group, domain, global |
| **[adaptive_default_suspension_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension_enabled)** – Enables and disables adaptive_rejection_rate_suspension_percentage | false | binding, binding_group, domain, global |
| **[adaptive_ehlo_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_enabled](/momentum/3/3-reference/3-reference-conf-ref-adaptive-enabled)** – Whether to enable the adaptive module for a specific scope | false | binding, binding_group, domain, global |
| **[adaptive_fbl_volume_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold)** – The minimum total delivered mail count over a period during which FBL stats are collected | 20000 | binding, binding_group, domain, global |
| **[adaptive_idle_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_mailfrom_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_deliveries_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_outbound_connections](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_batch](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_resident_active_queue](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retries](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_notification_events](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_events)** – Configure the events that will trigger an email notification | throttle suspension blackhole | binding, binding_group, domain, global |
| **[adaptive_notification_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_interval)** – The throttle for adaptive alert notification emails | 3600 | binding, binding_group, domain, global |
| **[adaptive_outbound_throttle_messages](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_positive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_positive_adjustment_interval)** – Throttle positive adjustments to adaptive changes | 3600 | binding, binding_group, domain, global |
| **[adaptive_rcptto_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rejection_rate_suspension_percentage](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage)** – The rate at which messages are rejected | 20 | binding, binding_group, domain, global |
| **[adaptive_retry_fuzz](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_retry_fuzz)** – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | 4096 | binding, binding_group, domain, global |
| **[adaptive_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rset_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_scope](/momentum/3/3-reference/3-reference-conf-ref-adaptive-scope)** – Define the scope applicable to adaptive delivery | auto | binding, binding_group, domain, global |
| **[adaptive_sweep_rule](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule)** – Set the thresholds and actions for adaptive fbl and bounce rules *(scope)* |   | binding, binding_group, domain, global |
| **[adaptive_sweep_rule_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule_enabled)** – Enable or disable adaptive_sweep_rule in a specified scope | 1 | binding, binding_group, domain, global |
| **[codes](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.codes)** – adaptive_sweep_rule bounce or fbl codes |   | adaptive_sweep_rule |
| **[high_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_action)** – The action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | "suspend" "4 hours" | adaptive_sweep_rule |
| **[high_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_threshold)** – The high threshold value for the sum of the rates of the bounce codes or FBL categories | 10 | adaptive_sweep_rule |
| **[low_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_action)** – The action when the high threshold is not met but the low threshold is met | "throttle" "down" | adaptive_sweep_rule |
| **[low_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_threshold)** – The low threshold value for the sum of the rates of the bounce codes or FBL categories | 5 | adaptive_sweep_rule |