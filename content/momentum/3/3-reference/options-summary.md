---
lastUpdated: "07/14/2021"
title: "Options Summary"
description: "This section displays all configuration file options visible in the following scopes global domain host binding binding group security pathway pathway group listener listen peer threadpool debug flags and cluster Module specific options are documented in the module documentation and options specific to Mobile Momentum are documented in the Mobile..."
---


This section displays all configuration file options visible in the following scopes; global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags and cluster. Module-specific options are documented in the module documentation and options specific to Mobile Momentum are documented in the Mobile Momentum documents. Listener options are listed here but for a separate table of listener-specific options see [Table 9.25, “listener options”](/momentum/3/3-reference/ecelerity-conf#table-listener-options) and for a separate list of cluster options see [Table 7.1, “ Cluster options ”](/momentum/3/3-reference/cluster-config-management#table-cluster-options). Options are sorted alphabetically by name. If an option functions as a scope, this is indicated by `(scope)`. The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA. If an option has a default value, it is shown in the `Default` column followed by a version number, if there has been a change to the default value. If the value of an option cannot be changed at runtime, the `Default` column will show `(non-dynamic)`. The `Version` column shows when an option was introduced. Options that are not valid in version 3.0 or higher are not shown.

<a name="All-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](/momentum/3/3-reference/3-reference-conf-ref-unsafe-spool) – Allow dangerous spool semantics to be used | na | false | 3.0 | global |
| [accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.accept_queue_backlog) – The accept queue backlog | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [adaptive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_destination) – The address where adaptive alerts should be sent | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_sender](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_sender) – Set the sender address of the alert email | sending | NULL | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_attempt_threshold) – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 3.0 | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-leveldb) *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 3.6 | global |
| [adaptive_backstore_riak](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-riak) *(scope)* – Define the characteristics of the Riak backing store | sending |   | 3.6 | global |
| [adaptive_body_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension) – The amount of time to suspend a domain | sending | 4 hours | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension_enabled) – Enables and disables adaptive_rejection_rate_suspension_percentage | sending | false | 3.6.11 | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_enabled](/momentum/3/3-reference/3-reference-conf-ref-adaptive-enabled) – Whether to enable the adaptive module for a specific scope | sending | false | 3.0 | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold) – The minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 3.2 | binding, binding_group, domain, global |
| [adaptive_idle_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retries](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_notification_events](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 3.5.6, 3.6.1 | binding, binding_group, domain, global |
| [adaptive_notification_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_interval) – The throttle for adaptive alert notification emails | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – The rate at which messages are rejected | sending | 20 | 3.0 | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 3.0.26 | binding, binding_group, domain, global |
| [adaptive_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rset_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_scope](/momentum/3/3-reference/3-reference-conf-ref-adaptive-scope) – Define the scope applicable to adaptive delivery | sending | auto | 3.3 | binding, binding_group, domain, global |
| [adaptive_sweep_rule](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule) *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 3.2 | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule_enabled) – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 3.2 | binding, binding_group, domain, global |
| [address](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP IP address and port | na | (*non-dynamic*) | 3.0 | snmp |
| [address_metrics_cleanse_interval](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-cleanse-interval) – The interval for refreshing address metrics | sending | 3600 | 3.0 | global |
| [address_metrics_lifetime](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-lifetime) – The TTL of address metrics | sending | 1800 | 3.0 | global |
| [alias_schemes](/momentum/3/3-reference/3-reference-conf-ref-alias-schemes) – Enable named alias expansion schemes | both |   | 3.0 | domain, global, pathway, pathway_group |
| [allow_ip_literal](/momentum/3/3-reference/3-reference-conf-ref-allow-ip-literal) – Allow IP addresses in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_null_envelope_sender](/momentum/3/3-reference/3-reference-conf-ref-allow-null-envelope-sender) – Allow the null envelope sender in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](/momentum/3/3-reference/3-reference-conf-ref-allow-trailing-whitespace-in-commands) – Allow trailing white space at the end of an SMTP command | receiving | false | 3.0.26 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding) – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding) – If set to true, authentication is considered to have failed | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [apn_expiry](/momentum/3/3-push/apns-apn-expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 3.5.5 | binding, binding_group, domain, global |
| [arp_all_hosts](/momentum/3/3-reference/ecelerity-cluster-conf#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 3.0.13 | cluster |
| [async_bounce_rendering](/momentum/3/3-reference/3-reference-conf-ref-async-bounce-rendering) – Which thread pool to use for bounce rendering | sending | true | 3.0 | global |
| [authcrammd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.cram-md5) – Configure CRAM-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5) – Configure DIGEST-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](/momentum/3/3-reference/conf-aaa#conf.control_authen.clear.text) – Configure clear text login authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](/momentum/3/3-reference/3-reference-conf-ref-authorization) *(scope)* – Configure the console commands applicable to users | na |   | 3.0 | global |
| [authorizationparameters](/momentum/3/3-reference/conf-aaa#conf.control_authz.ecauth) – AuthorizationParameters dictionary points to authorization information | receiving |   | 3.0 | control_listener, esmtp_listener, listen |
| [authplainparameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text) – Configure plain text login authentication | receiving |   | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [backlog](/momentum/3/3-reference/3-reference-conf-ref-threadpool) – The maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [banner_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.banner_hostname) – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](/momentum/3/3-reference/3-reference-conf-ref-bind-address) – Source address for outbound connections | sending |   | 3.0 | binding, binding_group, global |
| [binding](/momentum/3/3-reference/3-reference-conf-ref-binding) *(scope)* – Configure binding-specific options | sending |   | 3.0 | binding_group, global |
| [binding_group](/momentum/3/3-reference/3-reference-conf-ref-binding-group) *(scope)* – Logically group a set of bindings | sending |   | 3.0 | global |
| [blackhole](/momentum/3/3-reference/3-reference-conf-ref-blackhole) – Blackhole mail | sending | false | 3.0 | binding, binding_group, domain, global |
| [body_timeout](/momentum/3/3-reference/3-reference-conf-ref-body-timeout) – Network timeout once the DATA phase is complete | sending | 600 | 3.0 | binding, binding_group, domain, global |
| [bounce_behavior](/momentum/3/3-reference/3-reference-conf-ref-bounce-behavior) – Configure the action taken when a message is classified as a bounce | sending | pass | 3.0 | domain, global |
| [bounce_cache_size](/momentum/3/3-reference/conf-ref-bounce-cache-size) – Set the maximum size of the bounce classification cache | na | 16384 | 3.6.9 | global |
| [bounce_cache_ttl](/momentum/3/3-reference/conf-ref-bounce-cache-ttl) – Set the maximum TTL for the bounce classification cache | na | 60 | 3.6.9 | global |
| [bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains) – Configure the list of domains eligible for bounce processing | receiving |   | 3.0 | global, pathway, pathway_group |
| [bounce_pattern](/momentum/3/3-reference/3-reference-conf-ref-bounce-pattern) – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 3.0 | domain, global |
| [bounce_suppress_list](/momentum/3/3-reference/3-reference-conf-ref-bounce-suppress-list) – Configure a list of email addresses that may not be considered original recipients | sending |   | 3.0 | global |
| [bounces_inline_original](/momentum/3/3-reference/3-reference-conf-ref-bounces-inline-original) – How much of the original message to include in MDNs | sending | headers | 3.0 | binding, binding_group, domain, global |
| [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities) – Selectively retain root capabilities | na | (*non-dynamic*) | 3.0 | security |
| [chroot](/momentum/3/3-reference/3-reference-conf-ref-chroot) – chroot to a secure environment | na | (*non-dynamic*) | 3.0 | security |
| [clear_mail_queue_maintainers](/momentum/3/3-reference/3-reference-conf-ref-clear-mail-queue-maintainers) – Reschedule the mail queue maintainer | both | false, true (*3.6*) | 3.0 | global |
| [cluster_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.cluster_group) – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 3.0 | cluster |
| [cluster_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections) – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 3.0 | binding, domain, global, host |
| [cluster_outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-connections) – Limit the rate at which connections are established (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-messages) – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-scope-max-outbound-connections) – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 3.0.16 | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-server-max-outbound-connections) – Set the maximum number of outbound connections (cluster-specific) | sending |   | 3.0 | binding, binding_group, global |
| [codes](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 3.2 | adaptive_sweep_rule |
| [community](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 3.0 | snmp |
| [concurrency](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Define number of available threads | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [connect_timeout](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout) – Set the connection timeout | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout_to_delay](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout-to-delay) – Time interval before moving mail into the delayed queue | sending | 900 | 3.0 | binding, binding_group, domain, global |
| [connection_allocation_aggressiveness](/momentum/3/3-reference/3-reference-conf-ref-connection-allocation-aggressiveness) – Tune the aggressiveness for establishing new connections to domains | sending | normal | 3.0 | binding, binding_group, domain, global |
| [context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context) – Use to set arbitrary connection context key value pairs | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_cache](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The name of the cache file storing asynchronous responses | na |   | 3.0 | logs |
| [control_client_timeout](/momentum/3/3-reference/3-reference-conf-ref-control-client-timeout) – Network timeout for Momentum control client connections | na | 60 | 3.0 | global |
| [control_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.control_group) – The cluster console manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 3.0 | cluster |
| [control_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener) *(scope)* – The listener for incoming control connections | na |   | 3.0 | global |
| [critical](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na | ALL | 3.0 | debug_flags |
| [crypto_engine](/momentum/3/3-reference/3-reference-conf-ref-crypto-engine) – Enable hardware cryptography acceleration | both |   | 3.0 | global |
| [crypto_lock_method](/momentum/3/3-reference/conf-ref-crypto-lock-method) – Change the locking method used by the TLS layer | both | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 3.0 | global |
| [debug](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [debug_flags](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) *(scope)* – Configure debug verbosity | na |   | 3.0 | global |
| [debug_level](/momentum/3/3-reference/modules-overview-implicit) – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 3.0 | cluster |
| [default_binding](/momentum/3/3-reference/3-reference-conf-ref-default-binding) – Control the default binding | sending | normal | 3.0 | global |
| [default_charset](/momentum/3/3-reference/3-reference-conf-ref-default-charset) – Control the character set | both | us-ascii | 3.0 | global, pathway, pathway_group |
| [delay_dsn_max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-max-retry-interval) – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-retry-interval) – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [delayed_binding_domain_fuzz](/momentum/3/3-reference/3-reference-conf-ref-delayed-binding-domain-fuzz) – The time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 3.0.26 | binding, binding_group, global |
| [delayed_queue_scan_interval](/momentum/3/3-reference/3-reference-conf-ref-delayed-queue-scan-interval) – How often to call the maintainer for a domain | sending | 15 | 3.0 | global |
| [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 3.0 | binding, binding_group, domain, global |
| [delivery_pool](/momentum/3/3-reference/conf-ref-delivery-pool) – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 3.6 | global |
| [delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout) – Time to wait for a response to an outbound request | sending | 5000 | 3.5.6 | binding, domain, global |
| [dir_mode](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The octal representation of the file permissions | na |   | 3.0 | logs |
| [disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener) – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm) – Disable nagle algorithm on sockets | both | false | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [disk_queue_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-disk-queue-drain-rate) – Control the rate at which messages are spooled in on start-up | both | 100 | 3.0 | global |
| [dkim](/momentum/3/3-reference/conf-ref-dkim) – Enable or disable signing messages | sending |   | 3.0 | binding, binding_group, domain, global |
| [dns_cache_purge_interval](/momentum/3/3-reference/3-reference-conf-ref-dns-cache-purge-interval) – How often the DNS response cache is scanned for stale entries | sending | 60 | 3.0 | global |
| [dns_expire_interval](/momentum/3/3-reference/3-reference-conf-ref-dns-expire-interval) – How often to check for domains with expired DNS information | sending | 10 | 3.0 | global |
| [dns_failures_to_purge](/momentum/3/3-reference/3-reference-conf-ref-dns-failures-to-purge) – Configure the maximum number of DNS lookups | sending | 10 | 3.0 | domain, global |
| [dns_fallback_to_tcp](/momentum/3/3-reference/3-reference-conf-ref-dns-fallback-to-tcp) – Whether or not to fail over to TCP in place of UDP | both | false | 3.0.22 | global |
| [domain](/momentum/3/3-reference/3-reference-conf-ref-domain) *(scope)* – Configure domain-specific options | sending |   | 3.0 | binding, binding_group, global |
| [domain_for_unqualified_recipient_addresses](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-recipient-addresses) – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-sender-address) – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domainkeys](/momentum/3/3-reference/3-reference-conf-ref-domainkeys) – Enable or disable domainkeys signing | sending |   | 3.0 | binding, binding_group, domain, global |
| [drop_body_after_trans_fail](/momentum/3/3-reference/3-reference-conf-ref-drop-body-after-trans-fail) – Number of retry attempts before freeing message memory | sending | 3 | 3.0 | binding, binding_group, domain, global |
| [duravip_balance_set_size](/momentum/3/3-reference/ecelerity-cluster-conf#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 3.0 | cluster |
| [duravip_follow](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Specify the binding a listener should follow (cluster-specific) | receiving |   | 3.0 | listen |
| [duravip_preference](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Specify a DuraVIP™ preference (cluster-specific) | both |   | 3.0 | binding, listen |
| [eccluster_listener](/momentum/3/3-reference/ecelerity-cluster-conf#ecelerity-cluster.conf.eccluster_listener) *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 3.0.15 | global |
| [ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) – The number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) *(scope)* – The listener for incoming ECSTREAM connections | receiving |   | 3.0 | global |
| [ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_port](/momentum/3/3-reference/3-reference-conf-ref-ecstream-port) – Configure the port for ecstream deliveries | sending | 1825 | 3.2 | binding, binding_group, domain, global |
| [ecstream_timeout](/momentum/3/3-reference/3-reference-conf-ref-ecstream-timeout) – The amount of time to wait for an ecstream connection to be established | sending | 600 | 3.2 | binding, binding_group, domain, global |
| [ehlo_hostname](/momentum/3/3-reference/3-reference-conf-ref-ehlo-hostname) – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 3.0 | binding, binding_group, domain, global |
| [ehlo_timeout](/momentum/3/3-reference/3-reference-conf-ref-ehlo-timeout) – Network timeout for EHLO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [enable](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Enable or disable a listener scope | receiving | true | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail) – Whether or not to enable authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](/momentum/3/3-reference/conf-aaa#conf.control_authz) – Whether or not to enable authorization for console commands | receiving |   | 3.0 | control_listener, listen, peer |
| [enable_duravip](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 3.0 | binding, listen |
| [enable_fbl_header_insertion](/momentum/3/3-reference/3-reference-conf-ref-enable-fbl-header-insertion) – Enable or disable fbl header insertion | sending |   | 3.0 | binding, binding_group, domain, global |
| [enabled](/momentum/3/3-reference/modules-overview) – Whether or not the module is enabled (cluster-specific) | na | true | 3.0 | cluster |
| [error](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na | ALL | 3.0 | debug_flags |
| [esmtp_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener) *(scope)* – The listener for incoming SMTP connections | receiving |   | 3.0 | global |
| [event_loop](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners.multi-core) – Associate a listener with an eventloop | sending | (*non-dynamic*) | 3.6 | ecstream_listener, esmtp_listener, listen |
| [eventloop](/momentum/3/3-reference/conf-ref-eventloop) *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 3.6 | global |
| [events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter) – Employ when using a Concurrency greater than 1 | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [exclude_vctx_conn](/momentum/3/3-reference/conf-ref-exclude-vctx) – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_mess](/momentum/3/3-reference/conf-ref-exclude-vctx) – Exclude validation message context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [expensive_batch_assessment](/momentum/3/3-reference/3-reference-conf-ref-expensive-batch-assessment) – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 3.0 | global |
| [file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener) – File access rights in octal notation | na | 0660 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [file_mode](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The octal representation of the file permissions (cluster logs) | na |   | 3.0 | logs |
| [force_fsync](/momentum/3/3-reference/3-reference-conf-ref-force-fsync) – Ensure that data is synced to disk on reception | receiving | false | 3.0 | global |
| [fully_resolve_before_smtp](/momentum/3/3-reference/3-reference-conf-ref-fully-resolve-before-smtp) – Resolve all MX and A records before attempting delivery | sending | true | 3.0 | binding, binding_group, domain, global |
| [gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway) – Configure a static SMTP route for mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [gcm_application_id](/momentum/3/3-push/push-gcm-gcm-application-id) – Define the package name of the Android application allowed to received notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_authorization_token_id](/momentum/3/3-push/push-gcm-gcm-authorization-token-id) – The authorization token that permits sending Google push notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_delay_while_idle](/momentum/3/3-push/push-gcm-gcm-delay-while-idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_dry_run](/momentum/3/3-push/push-gcm-gcm-dry-run) – Test a request without actually sending a message | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_ttl](/momentum/3/3-push/push-gcm-ttl) – Default Time To Live for notifications | sending | -1 | 3.5.5 | binding, binding_group, domain, global |
| [generate_bounces](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces) – Generate MDNs if mail is failed after reception | sending | true | 3.0 | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces-for-multi-recipient-policy-rejections) – Generate MDNs after reception for policy rejections | receiving | true | 3.0 | global, pathway, pathway_group |
| [generate_delay_dsn](/momentum/3/3-reference/3-reference-conf-ref-generate-delay-dsn) – Generate DSNs if mail is delayed | sending | false | 3.0 | binding, binding_group, domain, global |
| [group](/momentum/3/3-reference/3-reference-conf-ref-user) – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [growbuf_size](/momentum/3/3-reference/3-reference-conf-ref-growbuf-size) – The size of an element in a growbuf chain | na | 16384 | 3.0 | global |
| [heartbeat_start_delay](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 3.0 | cluster |
| [heartbeats_per_sec](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 3.0 | cluster |
| [high_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_action) – The action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 3.2 | adaptive_sweep_rule |
| [high_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_threshold) – The high threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 3.2 | adaptive_sweep_rule |
| [host](/momentum/3/3-reference/3-reference-conf-ref-host) *(scope)* – Configure host-specific options | sending |   | 3.0 | binding, binding_group, global |
| [host_failure_retry](/momentum/3/3-reference/3-reference-conf-ref-host-failure-retry) – Time to wait before attempting a retry | sending | 120 | 3.0 | domain, global |
| [hostname](/momentum/3/3-reference/3-reference-conf-ref-hostname) – Override the system configured hostname | both |   | 3.0 | global |
| [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth) – Define the user credentials when using basic HTTP authentication | both |   | 3.5.6 | binding, binding_group, domain, global |
| [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host) – Define the HTTP host | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_listener](/momentum/3/3-rest/rest-http-listener) *(scope)* – The listener used with the REST injector | sending |   | 3.1.4 | global |
| [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method) – Define the HTTP method to use | sending | POST | 3.5.6 | binding, binding_group, domain, global |
| [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri) – Define the HTTP URI that you wish to connect to | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version) – Define the HTTP version to use | sending | 1.1 | 3.5.6 | binding, binding_group, domain, global |
| [idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time) – The number of seconds of inactivity before a client is disconnected | receiving | 0 | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout) – Time to maintain idle outbound connections | sending | 5 | 3.0 | binding, binding_group, domain, global |
| [if_check_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 3.0 | cluster |
| [if_down_limit](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 3.0 | cluster |
| [inbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-inbound-throttle-messages) – Rate limit inbound mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [info](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [initial_hash_buckets](/momentum/3/3-reference/3-reference-conf-ref-initial-hash-buckets) – Set the number of hash buckets used by the system | na | 32 | 3.1 | global |
| [inline_transfail_processing](/momentum/3/3-reference/3-reference-conf-ref-inline-transfail-processing) – How to handle transient failure processing | sending | 1 | 3.0 | global |
| [keep_message_dicts_in_memory](/momentum/3/3-reference/3-reference-conf-ref-keep-message-dicts-in-memory) – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 3.0 | global |
| [large_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-large-message-threshold) – Consider a message large when its size exceeds this amount | both | 131072 | 3.0 | global |
| [legacy_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-legacy-message-threshold) – The maximum size allowed for messages being passed to legacy modules | both | 1048576 | 3.0 | global |
| [license](/momentum/3/3-reference/3-reference-conf-ref-license) – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 3.0 | global |
| [listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes) *(scope)* – Specify the socket that a listener listens on | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| [listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog) – The listen backlog | receiving | 500 (*3.0*) | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [listener_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listener_sessions) – Specifies the maximum number of concurrent sessions that can be established to a listener | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [lmtp_port](/momentum/3/3-reference/3-reference-conf-ref-lmtp-port) – Configure the port for LMTP deliveries | sending | 2003 | 3.0 | binding, binding_group, domain, global |
| [local_changes_file](/momentum/3/3-reference/3-reference-conf-ref-local-changes-file) – The file for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 3.0 | global |
| [local_changes_only](/momentum/3/3-reference/3-reference-conf-ref-local-changes-only) – Whether there is a file for writing local configuration change | na | false | 3.0 | global |
| [log_active_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 3.0 | cluster |
| [log_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 3.0 | cluster |
| [log_idle_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_idle_interval) – The amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 3.0 | cluster |
| [log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener) – Whether to log REST injection requests | sending | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [logfile](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.logfile) – Describe the full path to the log file | na |   | 3.0 | logs |
| [logs](/momentum/3/3-reference/ecelerity-cluster-conf) – Define the location of the cluster manager logs (cluster-specific) | na |   | 3.0 | cluster |
| [logs](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) *(scope)* – Configure centralized log files on the cluster manager | na |   | 3.0 | global |
| [low_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_action) – The action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 3.2 | adaptive_sweep_rule |
| [low_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_threshold) – The low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 3.2 | adaptive_sweep_rule |
| [mail_queue_check_vm_interval](/momentum/3/3-reference/3-reference-conf-ref-mail-queue-check-vm-interval) – How often to apply memory management reduction on mail queues | both | 60 | 3.0 | global |
| [mailerdaemon](/momentum/3/3-reference/3-reference-conf-ref-mailerdaemon) – Set the From: address for MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [mailfrom_timeout](/momentum/3/3-reference/3-reference-conf-ref-mailfrom-timeout) – Timeout after MAIL FROM | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [maintainer_pool](/momentum/3/3-reference/conf-ref-maintainer-pool) – Create an eventloop for maintainers | both | (*non-dynamic*) | 3.6 | global |
| [malloc2mmap_threshold](/momentum/3/3-reference/3-reference-conf-ref-malloc-2-mmap-threshold) – Use mmap when allocations exceed this amount | na | 4092 | 3.0 | global |
| [manager](/momentum/3/3-reference/cluster-config-logging#cluster.config.logging.complex) *(scope)* – Define managers for subclusters | na |   | 3.0 | logs |
| [masterdb_file](/momentum/3/3-reference/3-reference-conf-ref-masterdb-file) – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 3.0 | global |
| [match_cache_life](/momentum/3/3-reference/3-reference-conf-ref-match-cache-life) – Set the maximum number of seconds that the match cache will be valid | na | 0 | 3.0 | global |
| [match_cache_size](/momentum/3/3-reference/3-reference-conf-ref-match-cache-size) – The size of the cache that holds the results of looking up matching scopes | na | 16384 | 3.0 | global |
| [max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection) – Maximum number of messages to deliver before closing a connection | sending | 0 | 3.0 | binding, binding_group, domain, global |
| [max_dns_ttl](/momentum/3/3-reference/3-reference-conf-ref-max-dns-ttl) – Set the maximum DNS TTL | sending | 4294967295 | 3.0 | global |
| [max_idle](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.max_idle) – The maximum number of seconds a log file may be left open | na |   | 3.0 | logs |
| [max_message_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_message_size) – The maximum number of bytes allowed in a single message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_open](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.max_open) – The maximum number of concurrently open log files | na |   | 3.0 | logs |
| [max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections) – Set the maximum number of outbound connections | sending | 32 | 3.0 | binding, binding_group, domain, global, host |
| [max_receptions_per_connection](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_receptions_per_connection) – The maximum number of messages allowed in a single session | receiving | 0 | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](/momentum/3/3-reference/3-reference-conf-ref-max-recipients-per-batch) – The maximum number of recipients to send in a single outbound message transaction | sending | 100 | 3.0 | binding, binding_group, domain, global |
| [max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection) – The maximum number of recipients to send on a connection | sending | 0 | 3.0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| [max_recipients_per_message](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_recipients_per_message) – The maximum number of recipients allowed in a message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](/momentum/3/3-rest/rest-http-listener) – Limit the size of an HTTP request | both |   | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](/momentum/3/3-reference/3-reference-conf-ref-max-resident-active-queue) – Threshold above which messages are not held in memory | sending | 250 | 3.0 | binding, binding_group, domain, global |
| [max_resident_messages](/momentum/3/3-reference/3-reference-conf-ref-max-resident-messages) – Threshold above which messages are not held in memory | sending | 32768 | 3.0 | binding, binding_group, global |
| [max_resident_transfails](/momentum/3/3-reference/3-reference-conf-ref-max-resident-transfails) – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 3.0 | global |
| [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries) – Override the system configured max_retries | sending |   | 3.0 | binding, binding_group, domain, global |
| [max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-max-retry-interval) – Maximum retry interval | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [max_timed_events_per_iter](/momentum/3/3-reference/3-reference-conf-ref-max-timed-events-per-iter) – The maximum numer of timed events per scheduler iteration | na | 1024 | 3.0.22 | global |
| [mbus_daemon](/momentum/3/3-reference/ecelerity-cluster-conf) *(deprecated)* – The port that the messaging bus listens on (cluster-specific) | na | 4803 | 3.0 | cluster |
| [mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 3.1.4 | esmtp_listener, listen, pathway, pathway_group, peer |
| [mdn_failures_notify](/momentum/3/3-reference/3-reference-conf-ref-mdn-failures-notify) – Mailbox to which to send null recipient MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [memory_goal](/momentum/3/3-reference/3-reference-conf-ref-memory-goal) – Configure physical memory usage goal | na | 90 | 3.0 | global |
| [memory_hwm](/momentum/3/3-reference/3-reference-conf-ref-memory-hwm) – Configure physical memory usage high-water mark | na | 95 | 3.0 | global |
| [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration) – Time to live for messages | sending | 86400 | 3.0 | binding, binding_group, domain, global |
| [migrate_connections_between_sibling_domains](/momentum/3/3-reference/3-reference-conf-ref-migrate-connections-between-sibling-domains) – Optimize connections for sibling domains | both | true | 3.4 | global |
| [mime_parse_large_messages_during_reception](/momentum/3/3-reference/3-reference-conf-ref-mime-parse-large-messages-during-reception) – Configure whether large messages are parsed upon reception or just in time | receiving | true | 3.0 | global |
| [min_dns_ttl](/momentum/3/3-reference/3-reference-conf-ref-min-dns-ttl) – Override DNS TTLs smaller than this value | sending | 0 | 3.0 | global |
| [mx_failures_fallback_to_a](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-fallback-to-a) – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 3.0 | domain, global |
| [mx_failures_to_delay](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-to-delay) – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 3.0 | domain, global |
| [never_attempt_expired_messages](/momentum/3/3-reference/3-reference-conf-ref-never-attempt-expired-messages) – Never attempt delivery of expired messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [never_retry](/momentum/3/3-reference/3-reference-conf-ref-never-retry) – Whether or not to retry delivery of failed messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [nodeaddr](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodeaddr) – The canonical cluster address for the node (cluster-specific) | na |   | 3.0 | cluster |
| [nodename](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 3.0 | cluster |
| [notice](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [only_use_best_mx_for_relay_domains](/momentum/3/3-reference/3-reference-conf-ref-only-use-best-mx-for-relay-domains) – If this is set to true only the lowest numerical priority MXs are used | sending | true | 3.0 | global |
| [open_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.open_relay) – Whether the MTA is an open relay or not | receiving | false | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [opendkim_sign](/momentum/3/3-reference/3-reference-conf-ref-opendkim-sign) – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 3.6 | binding, binding_group, domain, global |
| [outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-connections) – Limit the rate at which connections are established | sending |   | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-messages) – Limit the rate at which messages are delivered | sending |   | 3.0 | binding, binding_group, domain, global |
| [pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway) *(scope)* – A grouping of inbound configuration options | receiving |   | 3.0.23 | global, pathway_group |
| [pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway) – A means for associating a Listener with a pathway scope | receiving |   | 3.0.23 | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](/momentum/3/3-reference/3-reference-conf-ref-pathway-group) *(scope)* – A container for pathway scopes | receiving |   | 3.0.23 | global |
| [pcre_cache_size](/momentum/3/3-reference/3-reference-conf-ref-pcre-cache-size) – Set the maximum size of the ec_pcre_compile cache | na | 100 | 3.0 | global |
| [pcre_cache_ttl](/momentum/3/3-reference/3-reference-conf-ref-pcre-cache-ttl) – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 3.0 | global |
| [peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls) *(scope)* – Create an ACL within a specific listener | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [permastore_interval](/momentum/3/3-reference/3-reference-conf-ref-permastore-interval) – The frequency for saving various statistics | na | 300 | 3.0 | global |
| [pidfile](/momentum/3/3-reference/3-reference-conf-ref-pidfile) – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 3.0 | global |
| [pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Associate a threadpool with a listener | receiving |   | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [prefer_ipv6_mxs](/momentum/3/3-reference/3-reference-conf-prefer_ipv6mxs) - Prefer IPv6 addresses over IPv4 addresses at a given MX priority level | sending | false | 3.6.12 | global |
| [privileges](/momentum/3/3-reference/3-reference-conf-ref-capabilities) – Selectively retain root capabilities (Solaris) | na | (*non-dynamic*) | 3.0 | security |
| [prohibited_hosts](/momentum/3/3-reference/3-reference-conf-ref-prohibited-hosts) – Prevent mail from being delivered to invalid destinations | sending |   | 3.0 | global |
| [rcptto_timeout](/momentum/3/3-reference/3-reference-conf-ref-rcptto-timeout) – Timeout after RCPT TO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [received_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.received_hostname) – The hostname that is placed in the received headers | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [reconfig_message](/momentum/3/3-reference/ecelerity-conf#reconfig_message) – The message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 3.0 | esmtp_listener |
| [relay_domains](/momentum/3/3-reference/3-reference-conf-ref-relay-domains) – Configure the list of domains for which Momentum relays mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [relay_for_sending_domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains) – Domains that may use the MTA as a relay | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts) – Configure the list of hosts for which Momentum relays mail | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](/momentum/3/3-reference/3-reference-conf-ref-remote-smtp-port) – Set the port to be used for SMTP deliveries | sending | 25 | 3.0 | binding, binding_group, domain, global |
| [replicate](/momentum/3/3-reference/ecelerity-cluster-conf) *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 3.0 | cluster |
| [require_ehlo](/momentum/3/3-reference/3-reference-conf-ref-require-ehlo) – Reject mail from clients that do not say HELO | receiving | false | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [reserve_maintenance_interval](/momentum/3/3-reference/3-reference-conf-ref-reserve-maintenance-interval) – How often to perform mail queue maintenance | sending | 15 | 3.0 | global |
| [resolv_conf](/momentum/3/3-reference/3-reference-conf-ref-resolv-conf) – Specify a custom resolv.conf file | sending |   | 3.0 | global |
| [response_transcode_pattern](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-pattern) – The regex pattern for comparison to a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [response_transcode_replace](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-replace) – The replacement string for a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval) – Base retry interval | sending | 1200 | 3.0 | binding, binding_group, domain, global |
| [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope) – Permit trailing white space before the final CRLF | receiving | false | 3.0.26 | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules) – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length-policy) – Determine how non-RFC-compliant line lengths are handled | receiving | none | 3.0.26 | global, pathway, pathway_group |
| [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 3.0 | global, pathway, pathway_group |
| [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [role](/momentum/3/3-reference/3-reference-conf-ref-authorization) *(scope)* – Define a role within an authorization stanza | na |   | 3.0 | authorization |
| [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) – Configure message routing | sending |   | 3.0 | domain, global |
| [rset_timeout](/momentum/3/3-reference/3-reference-conf-ref-rset-timeout) – Set the timeout after RSET | sending | 30 | 3.0 | binding, binding_group, domain, global |
| [scheduler](/momentum/3/3-reference/3-reference-conf-ref-scheduler) – Override the default IO scheduler | na | (*non-dynamic*) | 3.0 | global |
| [scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-scope-max-outbound-connections) – Provide traffic shaping for outbound connections | sending |   | 3.2 | binding, binding_group, domain, global |
| [security](/momentum/3/3-reference/3-reference-conf-ref-security) *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 3.0 | global |
| [send_8bitmime](/momentum/3/3-reference/3-reference-conf-ref-send-8-bitmime) – Enable advertising of 8BITMIME when sending mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [server_max_file_descriptors](/momentum/3/3-reference/3-reference-conf-ref-server-max-file-descriptors) – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 3.0 | global |
| [server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-max-outbound-connections) – Sets the maximum number of outbound connections | sending | 20000 | 3.0 | binding, binding_group, global |
| [server_reserve_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-reserve-outbound-connections) – Sets the server-wide connection limit reserve | sending | 200 | 3.0 | global |
| [service_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.service_sessions) – The maximum number of concurrent sessions that can be established to all listeners | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [signing_stats](/momentum/3/3-reference/3-reference-conf-ref-signing-stats) – Control how signing statistics are recorded | sending | all | 3.0.17 | global |
| [siv_throttle_cache_size](/momentum/3/3-reference/3-reference-conf-ref-siv-throttle-cache-size) – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 3.0 | global |
| [smtp_extensions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions) – Array of SMTP extensions | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [snmp](/momentum/3/3-reference/3-reference-conf-ref-snmp) *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 3.0 | global |
| [snmp_traps](/momentum/3/3-reference/3-reference-conf-ref-snmp) *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 3.0 | global |
| [soft_bounce_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-soft-bounce-drain-rate) – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 3.0 | global |
| [spool_mode](/momentum/3/3-reference/3-reference-conf-ref-spool-mode) – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 3.0 | global |
| [spoolbase](/momentum/3/3-reference/3-reference-conf-ref-spoolbase) – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 3.0 | global |
| [ssl_lock_method](/momentum/3/3-reference/conf-ref-ssl-lock-method) – The SSL lock method | na | mutex (*3.0.17*) (*non-dynamic*) | 3.0 | global |
| [stack_size](/momentum/3/3-reference/3-reference-conf-ref-threadpool) – The stack space for a threadpool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [starttls_injection_policy](/momentum/3/3-reference/conf-ref-starttls-injection-policy) – Protect against SMTP injections prior to TLS | receiving | reject | 3.3 | esmtp_listener, listen, pathway, pathway_group, peer |
| [state](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 3.0 | snmp |
| [state](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 3.0 | snmp_traps |
| [static_banner](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.static_banner) – The banner that is displayed to the remote client | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [subcluster](/momentum/3/3-reference/mbus-conf) *(deprecated)* – The name of the subcluster (cluster-specific) | na |   | 3.0 | cluster |
| [supplemental_groups](/momentum/3/3-reference/3-reference-conf-ref-supplemental-groups) – Supplemental groups to assume after startup | na | (*non-dynamic*) | 3.0 | security |
| [suspend_delivery](/momentum/3/3-reference/3-reference-conf-ref-suspend-delivery) – Prevent outbound mail delivery | sending | false | 3.0 | binding, binding_group, domain, global |
| [syscontact](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysContact option value | na | (*non-dynamic*) | 3.0 | snmp |
| [sysdescription](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 3.0 | snmp |
| [syslocation](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 3.0 | snmp |
| [tcp_buffer_size](/momentum/3/3-reference/3-reference-conf-ref-tcp-buffer-size) – Maximum tcp buffer size for outbound connections | sending | 32768 | 3.0 | cluster, global |
| [tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size) – The size of the TCP receive buffer size | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size) – The size of the TCP send buffer | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool) *(scope)* – Configure thread pool specific options | na |   | 3.0 | global |
| [timeout](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.timeout) – The timeout for idle control connections on Control_Listeners | receiving | 60 | 3.0 | control_listener |
| [timestampformat](/momentum/3/3-reference/3-reference-conf-ref-timestampformat) – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 3.0 | global |
| [tls](/momentum/3/3-reference/conf-ref-tls) – Determine whether to use a TLS connection for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation) – Whether to enable OpenSSL TLS renegotiation | both | true | 3.5.4 | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](/momentum/3/3-reference/conf-ref-tls-ca) – Certificate authority for outbound mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate) – Certificate to use for inbound and outbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers) – Allowable ciphers for a TLS session | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca) – Certificate authority for inbound mail | receiving |   | 3.0 | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](/momentum/3/3-reference/3-reference-conf-ref-tls-dhparams-file) – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 3.6.6 | global |
| [tls_enable_dhe_ciphers](/momentum/3/3-reference/3-reference-conf-ref-tls-enable-dhe-ciphers) – Controls whether or not DHE ciphers are available | both | true | 3.6.6 | global |
| [tls_ifavailable_fallback](/momentum/3/3-reference/conf-ref-tls-ifavailable-fallback) – Determine the behavior if TLS negotiation fails | sending | true | 3.5.10, 3.6.4 | binding, binding_group, domain, global |
| [tls_key](/momentum/3/3-reference/conf-ref-tls-key) – the TLS key to use for outbound mail or inbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols) – Allowable ciphers for TLS inbound and outbound sessions | both |   | 3.6.6 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options) – Verification that peer can relay | receiving | false | 3.0 | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_is_authorized](/momentum/3/3-rest/rest-http-listener) – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 3.1.4 | http_listener, listen, pathway, peer |
| [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) – Specify how to handle the remote certificates | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode) – Determine whether a TLS certificates is required | receiving |   | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [topology](/momentum/3/3-reference/3-reference-cluster-config-duravip) *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 3.0 | cluster |
| [trace_smtp_mode](/momentum/3/3-reference/3-reference-conf-ref-trace-smtp-mode) – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 3.0 | global |
| [transfail_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-transfail-drain-rate) – The maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 3.0 | global |
| [transform_8bitmime_content](/momentum/3/3-reference/3-reference-conf-ref-transform-8-bitmime-content) – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 3.0 | binding, binding_group, domain, global |
| [trap_destination](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Destination for SNMP trap | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [trap_interval](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 3.0 | snmp_traps |
| [unconditional_rebind](/momentum/3/3-reference/ecelerity-cluster-conf#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 3.0 | cluster |
| [unlink_on_spool_in_failure](/momentum/3/3-reference/3-reference-conf-ref-unlink-on-spool-in-failure) – Whether or not to remove malformed messages | receiving | true | 3.0 | global |
| [use_iflist_cache](/momentum/3/3-reference/3-reference-conf-ref-use-iflist-cache) – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 3.0 | global |
| [use_ipv6](/momentum/3/3-reference/3-reference-conf-ref-use-ipv-6) – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 3.0 | global |
| [use_mmap](/momentum/3/3-reference/3-reference-conf-ref-use-mmap) – Use mmap when spooling messages from disk | na | false | 3.0 | global |
| [use_sendfile](/momentum/3/3-reference/3-reference-conf-ref-use-sendfile) – Use sendfile() when sending mail | sending | false | 3.0 | global |
| [use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl) – Whether to use SSL verification | receiving | false | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](/momentum/3/3-reference/3-reference-conf-ref-user) – User identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [view_balance_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 3.0 | cluster |
| [view_broadcast_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 3.0 | cluster |
| [view_mature_time](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 3.0 | cluster |
| [warning](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [watch_interval](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_variables](/momentum/3/3-reference/3-reference-conf-ref-snmp) – SNMP traps watch variables | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [watchdog_interval](/momentum/3/3-reference/conf-ref-watchdog-interval) *(deprecated)* – If Momentum is unresponsive for this length of time, it will be restarted | na | 60 | 3.0 | global |
| [xclient](/momentum/3/3-reference/3-reference-conf-ref-xclient) – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [xmpp_dialback_secret](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 3.4 | domain |
| [xmpp_listener](/momentum/mobile/mobile-reference/mobility-xmpp-modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 3.4 | global |
| [xmpp_role](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 3.4 | domain |

### <a name="adaptive-options"></a> Adaptive Options

This section displays all options of the specified type sorted alphabetically.

<a name="adaptive-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [adaptive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_destination) – The address where adaptive alerts should be sent | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_alert_email_sender](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_sender) – Set the sender address of the alert email | sending | NULL | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_attempt_threshold) – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 3.0 | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-leveldb) *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 3.6 | global |
| [adaptive_backstore_riak](/momentum/3/3-reference/3-reference-conf-ref-adaptive-backstore-riak) *(scope)* – Define the characteristics of the Riak backing store | sending |   | 3.6 | global |
| [adaptive_body_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension) – The amount of time to suspend a domain | sending | 4 hours | 3.0 | binding, binding_group, domain, global |
| [adaptive_default_suspension_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension_enabled) – Enables and disables adaptive_rejection_rate_suspension_percentage | sending | false | 3.6.11 | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_enabled](/momentum/3/3-reference/3-reference-conf-ref-adaptive-enabled) – Whether to enable the adaptive module for a specific scope | sending | false | 3.0 | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold) – The minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 3.2 | binding, binding_group, domain, global |
| [adaptive_idle_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retries](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0.17 | binding, binding_group, domain, global |
| [adaptive_notification_events](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 3.5.6, 3.6.1 | binding, binding_group, domain, global |
| [adaptive_notification_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_interval) – The throttle for adaptive alert notification emails | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – The rate at which messages are rejected | sending | 20 | 3.0 | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 3.0.26 | binding, binding_group, domain, global |
| [adaptive_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_rset_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options) – Set the bounds for the adaptive option | sending |   | 3.0 | binding, binding_group, domain, global |
| [adaptive_scope](/momentum/3/3-reference/3-reference-conf-ref-adaptive-scope) – Define the scope applicable to adaptive delivery | sending | auto | 3.3 | binding, binding_group, domain, global |
| [adaptive_sweep_rule](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule) *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 3.2 | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule_enabled) – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 3.2 | binding, binding_group, domain, global |
| [codes](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 3.2 | adaptive_sweep_rule |
| [high_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_action) – The action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 3.2 | adaptive_sweep_rule |
| [high_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.high_threshold) – The high threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 3.2 | adaptive_sweep_rule |
| [low_action](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_action) – The action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 3.2 | adaptive_sweep_rule |
| [low_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.low_threshold) – The low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 3.2 | adaptive_sweep_rule |

### <a name="bounce-options"></a> Bounce Options

This section displays all options of the specified type sorted alphabetically.

<a name="bounce-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [async_bounce_rendering](/momentum/3/3-reference/3-reference-conf-ref-async-bounce-rendering) – Which thread pool to use for bounce rendering | sending | true | 3.0 | global |
| [bounce_behavior](/momentum/3/3-reference/3-reference-conf-ref-bounce-behavior) – Configure the action taken when a message is classified as a bounce | sending | pass | 3.0 | domain, global |
| [bounce_cache_size](/momentum/3/3-reference/conf-ref-bounce-cache-size) – Set the maximum size of the bounce classification cache | na | 16384 | 3.6.9 | global |
| [bounce_cache_ttl](/momentum/3/3-reference/conf-ref-bounce-cache-ttl) – Set the maximum TTL for the bounce classification cache | na | 60 | 3.6.9 | global |
| [bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains) – Configure the list of domains eligible for bounce processing | receiving |   | 3.0 | global, pathway, pathway_group |
| [bounce_pattern](/momentum/3/3-reference/3-reference-conf-ref-bounce-pattern) – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 3.0 | domain, global |
| [bounce_suppress_list](/momentum/3/3-reference/3-reference-conf-ref-bounce-suppress-list) – Configure a list of email addresses that may not be considered original recipients | sending |   | 3.0 | global |
| [bounces_inline_original](/momentum/3/3-reference/3-reference-conf-ref-bounces-inline-original) – How much of the original message to include in MDNs | sending | headers | 3.0 | binding, binding_group, domain, global |
| [generate_bounces](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces) – Generate MDNs if mail is failed after reception | sending | true | 3.0 | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces-for-multi-recipient-policy-rejections) – Generate MDNs after reception for policy rejections | receiving | true | 3.0 | global, pathway, pathway_group |
| [generate_delay_dsn](/momentum/3/3-reference/3-reference-conf-ref-generate-delay-dsn) – Generate DSNs if mail is delayed | sending | false | 3.0 | binding, binding_group, domain, global |
| [inline_transfail_processing](/momentum/3/3-reference/3-reference-conf-ref-inline-transfail-processing) – How to handle transient failure processing | sending | 1 | 3.0 | global |
| [mailerdaemon](/momentum/3/3-reference/3-reference-conf-ref-mailerdaemon) – Set the From: address for MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [mdn_failures_notify](/momentum/3/3-reference/3-reference-conf-ref-mdn-failures-notify) – Mailbox to which to send null recipient MDNs | sending |   | 3.0 | binding, binding_group, domain, global |
| [never_retry](/momentum/3/3-reference/3-reference-conf-ref-never-retry) – Whether or not to retry delivery of failed messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [soft_bounce_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-soft-bounce-drain-rate) – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 3.0 | global |
| [transfail_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-transfail-drain-rate) – The maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 3.0 | global |

### <a name="cluster-options"></a> Cluster Options

This section displays all options of the specified type sorted alphabetically.

<a name="cluster-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [arp_all_hosts](/momentum/3/3-reference/ecelerity-cluster-conf#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 3.0.13 | cluster |
| [control_cache](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The name of the cache file storing asynchronous responses | na |   | 3.0 | logs |
| [control_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.control_group) – The cluster console manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 3.0 | cluster |
| [debug_level](/momentum/3/3-reference/modules-overview-implicit) – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 3.0 | cluster |
| [dir_mode](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The octal representation of the file permissions | na |   | 3.0 | logs |
| [duravip_balance_set_size](/momentum/3/3-reference/ecelerity-cluster-conf#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 3.0 | cluster |
| [enabled](/momentum/3/3-reference/modules-overview) – Whether or not the module is enabled (cluster-specific) | na | true | 3.0 | cluster |
| [file_mode](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) – The octal representation of the file permissions (cluster logs) | na |   | 3.0 | logs |
| [heartbeat_start_delay](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 3.0 | cluster |
| [heartbeats_per_sec](/momentum/3/3-reference/ecelerity-cluster-conf#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 3.0 | cluster |
| [if_check_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 3.0 | cluster |
| [if_down_limit](/momentum/3/3-reference/ecelerity-cluster-conf#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 3.0 | cluster |
| [log_active_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 3.0 | cluster |
| [log_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 3.0 | cluster |
| [log_idle_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.log_idle_interval) – The amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 3.0 | cluster |
| [logfile](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.logfile) – Describe the full path to the log file | na |   | 3.0 | logs |
| [logs](/momentum/3/3-reference/ecelerity-cluster-conf) – Define the location of the cluster manager logs (cluster-specific) | na |   | 3.0 | cluster |
| [logs](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs) *(scope)* – Configure centralized log files on the cluster manager | na |   | 3.0 | global |
| [manager](/momentum/3/3-reference/cluster-config-logging#cluster.config.logging.complex) *(scope)* – Define managers for subclusters | na |   | 3.0 | logs |
| [max_idle](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.max_idle) – The maximum number of seconds a log file may be left open | na |   | 3.0 | logs |
| [max_open](/momentum/3/3-reference/eccluster-conf-3#eccluster.conf3.logs.max_open) – The maximum number of concurrently open log files | na |   | 3.0 | logs |
| [mbus_daemon](/momentum/3/3-reference/ecelerity-cluster-conf) *(deprecated)* – The port that the messaging bus listens on (cluster-specific) | na | 4803 | 3.0 | cluster |
| [nodeaddr](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodeaddr) – The canonical cluster address for the node (cluster-specific) | na |   | 3.0 | cluster |
| [nodename](/momentum/3/3-reference/ecelerity-cluster-conf#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 3.0 | cluster |
| [replicate](/momentum/3/3-reference/ecelerity-cluster-conf) *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 3.0 | cluster |
| [subcluster](/momentum/3/3-reference/mbus-conf) *(deprecated)* – The name of the subcluster (cluster-specific) | na |   | 3.0 | cluster |
| [topology](/momentum/3/3-reference/3-reference-cluster-config-duravip) *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 3.0 | cluster |
| [unconditional_rebind](/momentum/3/3-reference/ecelerity-cluster-conf#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 3.0 | cluster |
| [view_balance_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 3.0 | cluster |
| [view_broadcast_interval](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 3.0 | cluster |
| [view_mature_time](/momentum/3/3-reference/ecelerity-cluster-conf#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 3.0 | cluster |

### <a name="http-options"></a> HTTP Options

This section displays all options of the specified type sorted alphabetically.

<a name="http-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout) – Time to wait for a response to an outbound request | sending | 5000 | 3.5.6 | binding, domain, global |
| [http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth) – Define the user credentials when using basic HTTP authentication | both |   | 3.5.6 | binding, binding_group, domain, global |
| [http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host) – Define the HTTP host | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method) – Define the HTTP method to use | sending | POST | 3.5.6 | binding, binding_group, domain, global |
| [http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri) – Define the HTTP URI that you wish to connect to | sending |   | 3.5.6 | binding, binding_group, domain, global |
| [http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version) – Define the HTTP version to use | sending | 1.1 | 3.5.6 | binding, binding_group, domain, global |

### <a name="listen-options"></a> Listen Options

This section displays all options of the specified type sorted alphabetically.

<a name="listen-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [accept_queue_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.accept_queue_backlog) – The accept queue backlog | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context) – Use to set arbitrary connection context key value pairs | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener) *(scope)* – The listener for incoming control connections | na |   | 3.0 | global |
| [disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener) – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [eccluster_listener](/momentum/3/3-reference/ecelerity-cluster-conf#ecelerity-cluster.conf.eccluster_listener) *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 3.0.15 | global |
| [ecstream_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) *(scope)* – The listener for incoming ECSTREAM connections | receiving |   | 3.0 | global |
| [esmtp_listener](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.esmtp_listener) *(scope)* – The listener for incoming SMTP connections | receiving |   | 3.0 | global |
| [http_listener](/momentum/3/3-rest/rest-http-listener) *(scope)* – The listener used with the REST injector | sending |   | 3.1.4 | global |
| [listen](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.attributes) *(scope)* – Specify the socket that a listener listens on | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| [listen_backlog](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listen_backlog) – The listen backlog | receiving | 500 (*3.0*) | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [listener_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listener_sessions) – Specifies the maximum number of concurrent sessions that can be established to a listener | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](/momentum/3/3-rest/rest-http-listener) – Limit the size of an HTTP request | both |   | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 3.1.4 | esmtp_listener, listen, pathway, pathway_group, peer |
| [timeout](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.timeout) – The timeout for idle control connections on Control_Listeners | receiving | 60 | 3.0 | control_listener |
| [tls_verified_peer_is_authorized](/momentum/3/3-rest/rest-http-listener) – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 3.1.4 | http_listener, listen, pathway, peer |

### <a name="logging-options"></a> Logging Options

This section displays all options of the specified type sorted alphabetically.

<a name="logging-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [critical](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na | ALL | 3.0 | debug_flags |
| [debug](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [debug_flags](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) *(scope)* – Configure debug verbosity | na |   | 3.0 | global |
| [error](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na | ALL | 3.0 | debug_flags |
| [info](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener) – Whether to log REST injection requests | sending | false | 3.1.4 | http_listener, listen, pathway, pathway_group, peer |
| [notice](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |
| [response_transcode_pattern](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-pattern) – The regex pattern for comparison to a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [response_transcode_replace](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-replace) – The replacement string for a server response | sending |   | 3.0 | binding, binding_group, domain, global |
| [signing_stats](/momentum/3/3-reference/3-reference-conf-ref-signing-stats) – Control how signing statistics are recorded | sending | all | 3.0.17 | global |
| [timestampformat](/momentum/3/3-reference/3-reference-conf-ref-timestampformat) – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 3.0 | global |
| [warning](/momentum/3/3-reference/3-reference-conf-ref-debug-flags) – Set the debug level | na |   | 3.0 | debug_flags |

### <a name="misc-options"></a> Misc Options

This section displays all options of the specified type sorted alphabetically.

<a name="misc-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [default_charset](/momentum/3/3-reference/3-reference-conf-ref-default-charset) – Control the character set | both | us-ascii | 3.0 | global, pathway, pathway_group |
| [delayed_queue_scan_interval](/momentum/3/3-reference/3-reference-conf-ref-delayed-queue-scan-interval) – How often to call the maintainer for a domain | sending | 15 | 3.0 | global |
| [disable_nagle_algorithm](/momentum/3/3-reference/3-reference-conf-ref-disable-nagle-algorithm) – Disable nagle algorithm on sockets | both | false | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [enable](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Enable or disable a listener scope | receiving | true | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [events_per_iter](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.events_per_iter) – Employ when using a Concurrency greater than 1 | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [file_mode](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.control_listener) – File access rights in octal notation | na | 0660 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [license](/momentum/3/3-reference/3-reference-conf-ref-license) – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 3.0 | global |
| [local_changes_file](/momentum/3/3-reference/3-reference-conf-ref-local-changes-file) – The file for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 3.0 | global |
| [local_changes_only](/momentum/3/3-reference/3-reference-conf-ref-local-changes-only) – Whether there is a file for writing local configuration change | na | false | 3.0 | global |
| [permastore_interval](/momentum/3/3-reference/3-reference-conf-ref-permastore-interval) – The frequency for saving various statistics | na | 300 | 3.0 | global |
| [pidfile](/momentum/3/3-reference/3-reference-conf-ref-pidfile) – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 3.0 | global |
| [reconfig_message](/momentum/3/3-reference/ecelerity-conf#reconfig_message) – The message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 3.0 | esmtp_listener |
| [reserve_maintenance_interval](/momentum/3/3-reference/3-reference-conf-ref-reserve-maintenance-interval) – How often to perform mail queue maintenance | sending | 15 | 3.0 | global |
| [send_8bitmime](/momentum/3/3-reference/3-reference-conf-ref-send-8-bitmime) – Enable advertising of 8BITMIME when sending mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [smtp_extensions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions) – Array of SMTP extensions | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [tcp_recv_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_recv_buffer_size) – The size of the TCP receive buffer size | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [tcp_send_buffer_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.tcp_send_buffer_size) – The size of the TCP send buffer | receiving | 4096 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [transform_8bitmime_content](/momentum/3/3-reference/3-reference-conf-ref-transform-8-bitmime-content) – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 3.0 | binding, binding_group, domain, global |
| [unlink_on_spool_in_failure](/momentum/3/3-reference/3-reference-conf-ref-unlink-on-spool-in-failure) – Whether or not to remove malformed messages | receiving | true | 3.0 | global |
| [watchdog_interval](/momentum/3/3-reference/conf-ref-watchdog-interval) *(deprecated)* – If Momentum is unresponsive for this length of time, it will be restarted | na | 60 | 3.0 | global |
| [xclient](/momentum/3/3-reference/3-reference-conf-ref-xclient) – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |

### <a name="module-options"></a> Module Options

This section displays all options of the specified type sorted alphabetically.

<a name="module-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [dkim](/momentum/3/3-reference/conf-ref-dkim) – Enable or disable signing messages | sending |   | 3.0 | binding, binding_group, domain, global |
| [domainkeys](/momentum/3/3-reference/3-reference-conf-ref-domainkeys) – Enable or disable domainkeys signing | sending |   | 3.0 | binding, binding_group, domain, global |
| [enable_fbl_header_insertion](/momentum/3/3-reference/3-reference-conf-ref-enable-fbl-header-insertion) – Enable or disable fbl header insertion | sending |   | 3.0 | binding, binding_group, domain, global |
| [opendkim_sign](/momentum/3/3-reference/3-reference-conf-ref-opendkim-sign) – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 3.6 | binding, binding_group, domain, global |

### <a name="multiple-event-options"></a> Multiple-event Options

This section displays all options of the specified type sorted alphabetically.

<a name="multiple-event-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [delivery_pool](/momentum/3/3-reference/conf-ref-delivery-pool) – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 3.6 | global |
| [event_loop](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listeners.multi-core) – Associate a listener with an eventloop | sending | (*non-dynamic*) | 3.6 | ecstream_listener, esmtp_listener, listen |
| [eventloop](/momentum/3/3-reference/conf-ref-eventloop) *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 3.6 | global |
| [maintainer_pool](/momentum/3/3-reference/conf-ref-maintainer-pool) – Create an eventloop for maintainers | both | (*non-dynamic*) | 3.6 | global |

### <a name="push-options"></a> Push Options

This section displays all options of the specified type sorted alphabetically.

<a name="push-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [apn_expiry](/momentum/3/3-push/apns-apn-expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 3.5.5 | binding, binding_group, domain, global |
| [gcm_application_id](/momentum/3/3-push/push-gcm-gcm-application-id) – Define the package name of the Android application allowed to received notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_authorization_token_id](/momentum/3/3-push/push-gcm-gcm-authorization-token-id) – The authorization token that permits sending Google push notifications | sending |   | 3.5.5 | binding, binding_group, domain, global |
| [gcm_delay_while_idle](/momentum/3/3-push/push-gcm-gcm-delay-while-idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_dry_run](/momentum/3/3-push/push-gcm-gcm-dry-run) – Test a request without actually sending a message | sending | false | 3.5.5 | binding, binding_group, domain, global |
| [gcm_ttl](/momentum/3/3-push/push-gcm-ttl) – Default Time To Live for notifications | sending | -1 | 3.5.5 | binding, binding_group, domain, global |

### <a name="resource-options"></a> Resource Options

This section displays all options of the specified type sorted alphabetically.

<a name="resource-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](/momentum/3/3-reference/3-reference-conf-ref-unsafe-spool) – Allow dangerous spool semantics to be used | na | false | 3.0 | global |
| [address_metrics_cleanse_interval](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-cleanse-interval) – The interval for refreshing address metrics | sending | 3600 | 3.0 | global |
| [address_metrics_lifetime](/momentum/3/3-reference/3-reference-conf-ref-address-metrics-lifetime) – The TTL of address metrics | sending | 1800 | 3.0 | global |
| [backlog](/momentum/3/3-reference/3-reference-conf-ref-threadpool) – The maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [clear_mail_queue_maintainers](/momentum/3/3-reference/3-reference-conf-ref-clear-mail-queue-maintainers) – Reschedule the mail queue maintainer | both | false, true (*3.6*) | 3.0 | global |
| [concurrency](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Define number of available threads | receiving | 0 | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [crypto_engine](/momentum/3/3-reference/3-reference-conf-ref-crypto-engine) – Enable hardware cryptography acceleration | both |   | 3.0 | global |
| [delayed_binding_domain_fuzz](/momentum/3/3-reference/3-reference-conf-ref-delayed-binding-domain-fuzz) – The time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 3.0.26 | binding, binding_group, global |
| [disk_queue_drain_rate](/momentum/3/3-reference/3-reference-conf-ref-disk-queue-drain-rate) – Control the rate at which messages are spooled in on start-up | both | 100 | 3.0 | global |
| [dns_cache_purge_interval](/momentum/3/3-reference/3-reference-conf-ref-dns-cache-purge-interval) – How often the DNS response cache is scanned for stale entries | sending | 60 | 3.0 | global |
| [drop_body_after_trans_fail](/momentum/3/3-reference/3-reference-conf-ref-drop-body-after-trans-fail) – Number of retry attempts before freeing message memory | sending | 3 | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_conn](/momentum/3/3-reference/conf-ref-exclude-vctx) – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [exclude_vctx_mess](/momentum/3/3-reference/conf-ref-exclude-vctx) – Exclude validation message context keys from being journaled in the spool metadata | both |   | 3.0 | binding, binding_group, domain, global |
| [expensive_batch_assessment](/momentum/3/3-reference/3-reference-conf-ref-expensive-batch-assessment) – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 3.0 | global |
| [force_fsync](/momentum/3/3-reference/3-reference-conf-ref-force-fsync) – Ensure that data is synced to disk on reception | receiving | false | 3.0 | global |
| [growbuf_size](/momentum/3/3-reference/3-reference-conf-ref-growbuf-size) – The size of an element in a growbuf chain | na | 16384 | 3.0 | global |
| [initial_hash_buckets](/momentum/3/3-reference/3-reference-conf-ref-initial-hash-buckets) – Set the number of hash buckets used by the system | na | 32 | 3.1 | global |
| [keep_message_dicts_in_memory](/momentum/3/3-reference/3-reference-conf-ref-keep-message-dicts-in-memory) – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 3.0 | global |
| [large_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-large-message-threshold) – Consider a message large when its size exceeds this amount | both | 131072 | 3.0 | global |
| [legacy_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-legacy-message-threshold) – The maximum size allowed for messages being passed to legacy modules | both | 1048576 | 3.0 | global |
| [mail_queue_check_vm_interval](/momentum/3/3-reference/3-reference-conf-ref-mail-queue-check-vm-interval) – How often to apply memory management reduction on mail queues | both | 60 | 3.0 | global |
| [malloc2mmap_threshold](/momentum/3/3-reference/3-reference-conf-ref-malloc-2-mmap-threshold) – Use mmap when allocations exceed this amount | na | 4092 | 3.0 | global |
| [masterdb_file](/momentum/3/3-reference/3-reference-conf-ref-masterdb-file) – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 3.0 | global |
| [match_cache_life](/momentum/3/3-reference/3-reference-conf-ref-match-cache-life) – Set the maximum number of seconds that the match cache will be valid | na | 0 | 3.0 | global |
| [match_cache_size](/momentum/3/3-reference/3-reference-conf-ref-match-cache-size) – The size of the cache that holds the results of looking up matching scopes | na | 16384 | 3.0 | global |
| [max_message_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_message_size) – The maximum number of bytes allowed in a single message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](/momentum/3/3-reference/3-reference-conf-ref-max-resident-active-queue) – Threshold above which messages are not held in memory | sending | 250 | 3.0 | binding, binding_group, domain, global |
| [max_resident_messages](/momentum/3/3-reference/3-reference-conf-ref-max-resident-messages) – Threshold above which messages are not held in memory | sending | 32768 | 3.0 | binding, binding_group, global |
| [max_resident_transfails](/momentum/3/3-reference/3-reference-conf-ref-max-resident-transfails) – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 3.0 | global |
| [max_timed_events_per_iter](/momentum/3/3-reference/3-reference-conf-ref-max-timed-events-per-iter) – The maximum numer of timed events per scheduler iteration | na | 1024 | 3.0.22 | global |
| [memory_goal](/momentum/3/3-reference/3-reference-conf-ref-memory-goal) – Configure physical memory usage goal | na | 90 | 3.0 | global |
| [memory_hwm](/momentum/3/3-reference/3-reference-conf-ref-memory-hwm) – Configure physical memory usage high-water mark | na | 95 | 3.0 | global |
| [migrate_connections_between_sibling_domains](/momentum/3/3-reference/3-reference-conf-ref-migrate-connections-between-sibling-domains) – Optimize connections for sibling domains | both | true | 3.4 | global |
| [mime_parse_large_messages_during_reception](/momentum/3/3-reference/3-reference-conf-ref-mime-parse-large-messages-during-reception) – Configure whether large messages are parsed upon reception or just in time | receiving | true | 3.0 | global |
| [pcre_cache_size](/momentum/3/3-reference/3-reference-conf-ref-pcre-cache-size) – Set the maximum size of the ec_pcre_compile cache | na | 100 | 3.0 | global |
| [pcre_cache_ttl](/momentum/3/3-reference/3-reference-conf-ref-pcre-cache-ttl) – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 3.0 | global |
| [pool_name](/momentum/3/3-reference/ecelerity-conf#esmtp_listener_example3) – Associate a threadpool with a listener | receiving |   | 3.0 | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [scheduler](/momentum/3/3-reference/3-reference-conf-ref-scheduler) – Override the default IO scheduler | na | (*non-dynamic*) | 3.0 | global |
| [spool_mode](/momentum/3/3-reference/3-reference-conf-ref-spool-mode) – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 3.0 | global |
| [spoolbase](/momentum/3/3-reference/3-reference-conf-ref-spoolbase) – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 3.0 | global |
| [stack_size](/momentum/3/3-reference/3-reference-conf-ref-threadpool) – The stack space for a threadpool | na | 0 (*non-dynamic*) | 3.0 | threadpool |
| [tcp_buffer_size](/momentum/3/3-reference/3-reference-conf-ref-tcp-buffer-size) – Maximum tcp buffer size for outbound connections | sending | 32768 | 3.0 | cluster, global |
| [threadpool](/momentum/3/3-reference/3-reference-conf-ref-threadpool) *(scope)* – Configure thread pool specific options | na |   | 3.0 | global |
| [trace_smtp_mode](/momentum/3/3-reference/3-reference-conf-ref-trace-smtp-mode) – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 3.0 | global |
| [use_iflist_cache](/momentum/3/3-reference/3-reference-conf-ref-use-iflist-cache) – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 3.0 | global |
| [use_mmap](/momentum/3/3-reference/3-reference-conf-ref-use-mmap) – Use mmap when spooling messages from disk | na | false | 3.0 | global |
| [use_sendfile](/momentum/3/3-reference/3-reference-conf-ref-use-sendfile) – Use sendfile() when sending mail | sending | false | 3.0 | global |

### <a name="rfc-options"></a> RFC Options

This section displays all options of the specified type sorted alphabetically.

<a name="rfc-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [allow_null_envelope_sender](/momentum/3/3-reference/3-reference-conf-ref-allow-null-envelope-sender) – Allow the null envelope sender in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](/momentum/3/3-reference/3-reference-conf-ref-allow-trailing-whitespace-in-commands) – Allow trailing white space at the end of an SMTP command | receiving | false | 3.0.26 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [require_ehlo](/momentum/3/3-reference/3-reference-conf-ref-require-ehlo) – Reject mail from clients that do not say HELO | receiving | false | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope) – Permit trailing white space before the final CRLF | receiving | false | 3.0.26 | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules) – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 3.0 | global, pathway, pathway_group |
| [rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 3.0 | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length-policy) – Determine how non-RFC-compliant line lengths are handled | receiving | none | 3.0.26 | global, pathway, pathway_group |
| [rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 3.0 | global, pathway, pathway_group |
| [rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 3.0 | global, pathway, pathway_group |
| [rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 3.0 | global, pathway, pathway_group |

### <a name="routing-options"></a> Routing Options

This section displays all options of the specified type sorted alphabetically.

<a name="routing-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [allow_ip_literal](/momentum/3/3-reference/3-reference-conf-ref-allow-ip-literal) – Allow IP addresses in email addresses | receiving | true | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [blackhole](/momentum/3/3-reference/3-reference-conf-ref-blackhole) – Blackhole mail | sending | false | 3.0 | binding, binding_group, domain, global |
| [delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method) – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 3.0 | binding, binding_group, domain, global |
| [dns_fallback_to_tcp](/momentum/3/3-reference/3-reference-conf-ref-dns-fallback-to-tcp) – Whether or not to fail over to TCP in place of UDP | both | false | 3.0.22 | global |
| [domain_for_unqualified_recipient_addresses](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-recipient-addresses) – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-sender-address) – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [ecstream_port](/momentum/3/3-reference/3-reference-conf-ref-ecstream-port) – Configure the port for ecstream deliveries | sending | 1825 | 3.2 | binding, binding_group, domain, global |
| [fully_resolve_before_smtp](/momentum/3/3-reference/3-reference-conf-ref-fully-resolve-before-smtp) – Resolve all MX and A records before attempting delivery | sending | true | 3.0 | binding, binding_group, domain, global |
| [gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway) – Configure a static SMTP route for mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [lmtp_port](/momentum/3/3-reference/3-reference-conf-ref-lmtp-port) – Configure the port for LMTP deliveries | sending | 2003 | 3.0 | binding, binding_group, domain, global |
| [only_use_best_mx_for_relay_domains](/momentum/3/3-reference/3-reference-conf-ref-only-use-best-mx-for-relay-domains) – If this is set to true only the lowest numerical priority MXs are used | sending | true | 3.0 | global |
| [open_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.open_relay) – Whether the MTA is an open relay or not | receiving | false | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [prohibited_hosts](/momentum/3/3-reference/3-reference-conf-ref-prohibited-hosts) – Prevent mail from being delivered to invalid destinations | sending |   | 3.0 | global |
| [relay_domains](/momentum/3/3-reference/3-reference-conf-ref-relay-domains) – Configure the list of domains for which Momentum relays mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [relay_for_sending_domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains) – Domains that may use the MTA as a relay | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts) – Configure the list of hosts for which Momentum relays mail | receiving |   | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](/momentum/3/3-reference/3-reference-conf-ref-remote-smtp-port) – Set the port to be used for SMTP deliveries | sending | 25 | 3.0 | binding, binding_group, domain, global |
| [resolv_conf](/momentum/3/3-reference/3-reference-conf-ref-resolv-conf) – Specify a custom resolv.conf file | sending |   | 3.0 | global |
| [routes](/momentum/3/3-reference/3-reference-conf-ref-routes) – Configure message routing | sending |   | 3.0 | domain, global |
| [use_ipv6](/momentum/3/3-reference/3-reference-conf-ref-use-ipv-6) – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 3.0 | global |

### <a name="security-options"></a> Security Options

This section displays all options of the specified type sorted alphabetically.

<a name="security-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding) – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding) – If set to true, authentication is considered to have failed | receiving | false | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [authcrammd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.cram-md5) – Configure CRAM-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5) – Configure DIGEST-MD5 authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](/momentum/3/3-reference/conf-aaa#conf.control_authen.clear.text) – Configure clear text login authentication | receiving |   | 3.0 | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](/momentum/3/3-reference/3-reference-conf-ref-authorization) *(scope)* – Configure the console commands applicable to users | na |   | 3.0 | global |
| [authorizationparameters](/momentum/3/3-reference/conf-aaa#conf.control_authz.ecauth) – AuthorizationParameters dictionary points to authorization information | receiving |   | 3.0 | control_listener, esmtp_listener, listen |
| [authplainparameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text) – Configure plain text login authentication | receiving |   | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [capabilities](/momentum/3/3-reference/3-reference-conf-ref-capabilities) – Selectively retain root capabilities | na | (*non-dynamic*) | 3.0 | security |
| [chroot](/momentum/3/3-reference/3-reference-conf-ref-chroot) – chroot to a secure environment | na | (*non-dynamic*) | 3.0 | security |
| [enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail) – Whether or not to enable authentication | receiving |   | 3.0 | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](/momentum/3/3-reference/conf-aaa#conf.control_authz) – Whether or not to enable authorization for console commands | receiving |   | 3.0 | control_listener, listen, peer |
| [group](/momentum/3/3-reference/3-reference-conf-ref-user) – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |
| [peer](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.config.acls) *(scope)* – Create an ACL within a specific listener | receiving |   | 3.0 | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [privileges](/momentum/3/3-reference/3-reference-conf-ref-capabilities) – Selectively retain root capabilities (Solaris) | na | (*non-dynamic*) | 3.0 | security |
| [role](/momentum/3/3-reference/3-reference-conf-ref-authorization) *(scope)* – Define a role within an authorization stanza | na |   | 3.0 | authorization |
| [security](/momentum/3/3-reference/3-reference-conf-ref-security) *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 3.0 | global |
| [supplemental_groups](/momentum/3/3-reference/3-reference-conf-ref-supplemental-groups) – Supplemental groups to assume after startup | na | (*non-dynamic*) | 3.0 | security |
| [use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl) – Whether to use SSL verification | receiving | false | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](/momentum/3/3-reference/3-reference-conf-ref-user) – User identity to assume after startup | na | ecuser (*non-dynamic*) | 3.0 | security |

### <a name="shaping-options"></a> Shaping Options

This section displays all options of the specified type sorted alphabetically.

<a name="shaping-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [cluster_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections) – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 3.0 | binding, domain, global, host |
| [cluster_outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-connections) – Limit the rate at which connections are established (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-cluster-outbound-throttle-messages) – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 3.0 | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-scope-max-outbound-connections) – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 3.0.16 | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-server-max-outbound-connections) – Set the maximum number of outbound connections (cluster-specific) | sending |   | 3.0 | binding, binding_group, global |
| [connection_allocation_aggressiveness](/momentum/3/3-reference/3-reference-conf-ref-connection-allocation-aggressiveness) – Tune the aggressiveness for establishing new connections to domains | sending | normal | 3.0 | binding, binding_group, domain, global |
| [ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [inbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-inbound-throttle-messages) – Rate limit inbound mail | receiving |   | 3.0 | global, pathway, pathway_group |
| [max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection) – Maximum number of messages to deliver before closing a connection | sending | 0 | 3.0 | binding, binding_group, domain, global |
| [max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections) – Set the maximum number of outbound connections | sending | 32 | 3.0 | binding, binding_group, domain, global, host |
| [max_receptions_per_connection](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_receptions_per_connection) – The maximum number of messages allowed in a single session | receiving | 0 | 3.0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](/momentum/3/3-reference/3-reference-conf-ref-max-recipients-per-batch) – The maximum number of recipients to send in a single outbound message transaction | sending | 100 | 3.0 | binding, binding_group, domain, global |
| [max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection) – The maximum number of recipients to send on a connection | sending | 0 | 3.0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| [max_recipients_per_message](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_recipients_per_message) – The maximum number of recipients allowed in a message | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries) – Override the system configured max_retries | sending |   | 3.0 | binding, binding_group, domain, global |
| [max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-max-retry-interval) – Maximum retry interval | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [never_attempt_expired_messages](/momentum/3/3-reference/3-reference-conf-ref-never-attempt-expired-messages) – Never attempt delivery of expired messages | sending | false | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-connections) – Limit the rate at which connections are established | sending |   | 3.0 | binding, binding_group, domain, global |
| [outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-messages) – Limit the rate at which messages are delivered | sending |   | 3.0 | binding, binding_group, domain, global |
| [scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-scope-max-outbound-connections) – Provide traffic shaping for outbound connections | sending |   | 3.2 | binding, binding_group, domain, global |
| [server_max_file_descriptors](/momentum/3/3-reference/3-reference-conf-ref-server-max-file-descriptors) – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 3.0 | global |
| [server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-max-outbound-connections) – Sets the maximum number of outbound connections | sending | 20000 | 3.0 | binding, binding_group, global |
| [server_reserve_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-reserve-outbound-connections) – Sets the server-wide connection limit reserve | sending | 200 | 3.0 | global |
| [service_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.service_sessions) – The maximum number of concurrent sessions that can be established to all listeners | receiving | 0 | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [siv_throttle_cache_size](/momentum/3/3-reference/3-reference-conf-ref-siv-throttle-cache-size) – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 3.0 | global |
| [suspend_delivery](/momentum/3/3-reference/3-reference-conf-ref-suspend-delivery) – Prevent outbound mail delivery | sending | false | 3.0 | binding, binding_group, domain, global |

### <a name="snmp-options"></a> SNMP Options

This section displays all options of the specified type sorted alphabetically.

<a name="snmp-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [address](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP IP address and port | na | (*non-dynamic*) | 3.0 | snmp |
| [community](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 3.0 | snmp |
| [snmp](/momentum/3/3-reference/3-reference-conf-ref-snmp) *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 3.0 | global |
| [snmp_traps](/momentum/3/3-reference/3-reference-conf-ref-snmp) *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 3.0 | global |
| [state](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 3.0 | snmp |
| [state](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 3.0 | snmp_traps |
| [syscontact](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysContact option value | na | (*non-dynamic*) | 3.0 | snmp |
| [sysdescription](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 3.0 | snmp |
| [syslocation](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 3.0 | snmp |
| [trap_destination](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Destination for SNMP trap | na | (*non-dynamic*) | 3.0 | snmp_traps |
| [trap_interval](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_interval](/momentum/3/3-reference/3-reference-conf-ref-snmp) – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 3.0 | snmp_traps |
| [watch_variables](/momentum/3/3-reference/3-reference-conf-ref-snmp) – SNMP traps watch variables | na | (*non-dynamic*) | 3.0 | snmp_traps |

### <a name="timeout-options"></a> Timeout Options

This section displays all options of the specified type sorted alphabetically.

<a name="timeout-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [body_timeout](/momentum/3/3-reference/3-reference-conf-ref-body-timeout) – Network timeout once the DATA phase is complete | sending | 600 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout) – Set the connection timeout | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [connect_timeout_to_delay](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout-to-delay) – Time interval before moving mail into the delayed queue | sending | 900 | 3.0 | binding, binding_group, domain, global |
| [control_client_timeout](/momentum/3/3-reference/3-reference-conf-ref-control-client-timeout) – Network timeout for Momentum control client connections | na | 60 | 3.0 | global |
| [delay_dsn_max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-max-retry-interval) – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 3.0 | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-retry-interval) – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 3.0 | binding, binding_group, domain, global |
| [dns_expire_interval](/momentum/3/3-reference/3-reference-conf-ref-dns-expire-interval) – How often to check for domains with expired DNS information | sending | 10 | 3.0 | global |
| [dns_failures_to_purge](/momentum/3/3-reference/3-reference-conf-ref-dns-failures-to-purge) – Configure the maximum number of DNS lookups | sending | 10 | 3.0 | domain, global |
| [ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener) – The number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 3.0 | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_timeout](/momentum/3/3-reference/3-reference-conf-ref-ecstream-timeout) – The amount of time to wait for an ecstream connection to be established | sending | 600 | 3.2 | binding, binding_group, domain, global |
| [ehlo_timeout](/momentum/3/3-reference/3-reference-conf-ref-ehlo-timeout) – Network timeout for EHLO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [host_failure_retry](/momentum/3/3-reference/3-reference-conf-ref-host-failure-retry) – Time to wait before attempting a retry | sending | 120 | 3.0 | domain, global |
| [idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time) – The number of seconds of inactivity before a client is disconnected | receiving | 0 | 3.0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout) – Time to maintain idle outbound connections | sending | 5 | 3.0 | binding, binding_group, domain, global |
| [mailfrom_timeout](/momentum/3/3-reference/3-reference-conf-ref-mailfrom-timeout) – Timeout after MAIL FROM | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [max_dns_ttl](/momentum/3/3-reference/3-reference-conf-ref-max-dns-ttl) – Set the maximum DNS TTL | sending | 4294967295 | 3.0 | global |
| [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration) – Time to live for messages | sending | 86400 | 3.0 | binding, binding_group, domain, global |
| [min_dns_ttl](/momentum/3/3-reference/3-reference-conf-ref-min-dns-ttl) – Override DNS TTLs smaller than this value | sending | 0 | 3.0 | global |
| [mx_failures_fallback_to_a](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-fallback-to-a) – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 3.0 | domain, global |
| [mx_failures_to_delay](/momentum/3/3-reference/3-reference-conf-ref-mx-failures-to-delay) – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 3.0 | domain, global |
| [rcptto_timeout](/momentum/3/3-reference/3-reference-conf-ref-rcptto-timeout) – Timeout after RCPT TO | sending | 300 | 3.0 | binding, binding_group, domain, global |
| [retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval) – Base retry interval | sending | 1200 | 3.0 | binding, binding_group, domain, global |
| [rset_timeout](/momentum/3/3-reference/3-reference-conf-ref-rset-timeout) – Set the timeout after RSET | sending | 30 | 3.0 | binding, binding_group, domain, global |

### <a name="tls-options"></a> TLS Options

This section displays all options of the specified type sorted alphabetically.

<a name="tls-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [crypto_lock_method](/momentum/3/3-reference/conf-ref-crypto-lock-method) – Change the locking method used by the TLS layer | both | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 3.0 | global |
| [ssl_lock_method](/momentum/3/3-reference/conf-ref-ssl-lock-method) – The SSL lock method | na | mutex (*3.0.17*) (*non-dynamic*) | 3.0 | global |
| [starttls_injection_policy](/momentum/3/3-reference/conf-ref-starttls-injection-policy) – Protect against SMTP injections prior to TLS | receiving | reject | 3.3 | esmtp_listener, listen, pathway, pathway_group, peer |
| [tls](/momentum/3/3-reference/conf-ref-tls) – Determine whether to use a TLS connection for outbound mail | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation) – Whether to enable OpenSSL TLS renegotiation | both | true | 3.5.4 | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](/momentum/3/3-reference/conf-ref-tls-ca) – Certificate authority for outbound mail | sending |   | 3.0 | binding, binding_group, domain, global |
| [tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate) – Certificate to use for inbound and outbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers) – Allowable ciphers for a TLS session | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca) – Certificate authority for inbound mail | receiving |   | 3.0 | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](/momentum/3/3-reference/3-reference-conf-ref-tls-dhparams-file) – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 3.6.6 | global |
| [tls_enable_dhe_ciphers](/momentum/3/3-reference/3-reference-conf-ref-tls-enable-dhe-ciphers) – Controls whether or not DHE ciphers are available | both | true | 3.6.6 | global |
| [tls_ifavailable_fallback](/momentum/3/3-reference/conf-ref-tls-ifavailable-fallback) – Determine the behavior if TLS negotiation fails | sending | true | 3.5.10, 3.6.4 | binding, binding_group, domain, global |
| [tls_key](/momentum/3/3-reference/conf-ref-tls-key) – the TLS key to use for outbound mail or inbound mail | both |   | 3.0 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols) – Allowable ciphers for TLS inbound and outbound sessions | both |   | 3.6.6 | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options) – Verification that peer can relay | receiving | false | 3.0 | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verify](/momentum/3/3-reference/conf-ref-tls-verify) – Specify how to handle the remote certificates | sending | no | 3.0 | binding, binding_group, domain, global |
| [tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode) – Determine whether a TLS certificates is required | receiving |   | 3.0 | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |

### <a name="virtual-options"></a> Virtual Options

This section displays all options of the specified type sorted alphabetically.

<a name="virtual-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [alias_schemes](/momentum/3/3-reference/3-reference-conf-ref-alias-schemes) – Enable named alias expansion schemes | both |   | 3.0 | domain, global, pathway, pathway_group |
| [banner_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.banner_hostname) – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](/momentum/3/3-reference/3-reference-conf-ref-bind-address) – Source address for outbound connections | sending |   | 3.0 | binding, binding_group, global |
| [binding](/momentum/3/3-reference/3-reference-conf-ref-binding) *(scope)* – Configure binding-specific options | sending |   | 3.0 | binding_group, global |
| [binding_group](/momentum/3/3-reference/3-reference-conf-ref-binding-group) *(scope)* – Logically group a set of bindings | sending |   | 3.0 | global |
| [cluster_group](/momentum/3/3-reference/ecelerity-cluster-conf#option.cluster_group) – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 3.0 | cluster |
| [default_binding](/momentum/3/3-reference/3-reference-conf-ref-default-binding) – Control the default binding | sending | normal | 3.0 | global |
| [domain](/momentum/3/3-reference/3-reference-conf-ref-domain) *(scope)* – Configure domain-specific options | sending |   | 3.0 | binding, binding_group, global |
| [duravip_follow](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Specify the binding a listener should follow (cluster-specific) | receiving |   | 3.0 | listen |
| [duravip_preference](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Specify a DuraVIP™ preference (cluster-specific) | both |   | 3.0 | binding, listen |
| [ehlo_hostname](/momentum/3/3-reference/3-reference-conf-ref-ehlo-hostname) – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 3.0 | binding, binding_group, domain, global |
| [enable_duravip](/momentum/3/3-reference/3-reference-cluster-config-duravip) – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 3.0 | binding, listen |
| [host](/momentum/3/3-reference/3-reference-conf-ref-host) *(scope)* – Configure host-specific options | sending |   | 3.0 | binding, binding_group, global |
| [hostname](/momentum/3/3-reference/3-reference-conf-ref-hostname) – Override the system configured hostname | both |   | 3.0 | global |
| [pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway) *(scope)* – A grouping of inbound configuration options | receiving |   | 3.0.23 | global, pathway_group |
| [pathway](/momentum/3/3-reference/3-reference-conf-ref-pathway) – A means for associating a Listener with a pathway scope | receiving |   | 3.0.23 | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](/momentum/3/3-reference/3-reference-conf-ref-pathway-group) *(scope)* – A container for pathway scopes | receiving |   | 3.0.23 | global |
| [received_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.received_hostname) – The hostname that is placed in the received headers | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |
| [static_banner](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.static_banner) – The banner that is displayed to the remote client | receiving |   | 3.0 | esmtp_listener, listen, pathway, pathway_group, peer |

### <a name="xmpp-options"></a> XMPP Options

This section displays all options of the specified type sorted alphabetically.

<a name="xmpp-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [xmpp_dialback_secret](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 3.4 | domain |
| [xmpp_listener](/momentum/mobile/mobile-reference/mobility-xmpp-modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 3.4 | global |
| [xmpp_role](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 3.4 | domain |
