---
lastUpdated: "09/14/2021"
title: "Configuration Options Summary"
description: "This chapter lists all configuration options visible in the following scopes global domain host binding binding group security pathway pathway group listener listen peer threadpool debug flags and cluster as well as in the listener specific scope Module specific options are documented in the module documentation and options specific to..."
---

This chapter lists all configuration options visible in the following scopes; global, domain, host, binding, binding_group, security, pathway, pathway_group, listener, listen, peer, threadpool, debug_flags, and cluster, as well as in the listener-specific scope. Module-specific options are documented in the module documentation and options specific to Mobile Momentum are documented in the Mobile Momentum documents. Options are sorted alphabetically by name. If an option functions as a scope, this is indicated by `(scope)`.

The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA.

If an option has a default value, it is shown in the `Default` column followed by a version number, if there has been a change to the default value. If the value of an option cannot be changed at runtime, the `Default` column will show `(non-dynamic)`.

The `Version` column indicated the version(s) of Momentum that support the option.

<a name="all-options-table"></a>


| Option/Description | Type | Default | Version | Scopes |
| --- | --- | --- | --- | --- |
| [_unsafe_spool](/momentum/4/config/ref-unsafe-spool) – Allow dangerous spool semantics to be used | na | false | 4.0 and later | global |
| **accept_queue_backlog** – Accept queue backlog | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [adaptive_adjustment_interval](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_adjustment_interval) – Throttle the adaptive adjustment interval | sending | 60 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_alert_email_destination](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_alert_email_destination) – Address where adaptive alerts should be sent | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_events](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_notification_events) – Set the sender address of the alert email | sending | NULL | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_attempt_threshold](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_attempt_threshold) – Minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | sending | 2000 (*3.2*) | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_backstore_leveldb](/momentum/4/config/ref-adaptive-backstore-leveldb) *(scope)* – Use LevelDB as the backing store for Adaptive Delivery | sending |   | 4.0 and later | global |
| [adaptive_backstore_riak](/momentum/4/config/ref-adaptive-backstore-riak) *(scope)* – Define the characteristics of the Riak backing store | sending |   | 4.0 and later | global |
| [adaptive_body_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_default_suspension](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_default_suspension) – Amount of time to suspend a domain | sending | 4 hours | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_ehlo_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_enabled](/momentum/4/config/ref-adaptive-enabled) – Whether to enable the adaptive module for a specific scope | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_fbl_volume_threshold](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_fbl_volume_threshold) – Minimum total delivered mail count over a period during which FBL stats are collected | sending | 20000 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_idle_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_mailfrom_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_deliveries_per_connection](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_outbound_connections](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_batch](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_recipients_per_connection](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_resident_active_queue](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_retries](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_max_retry_interval](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_events](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_notification_events) – Configure the events that will trigger an email notification | sending | throttle suspension blackhole | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_notification_interval](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_notification_interval) – Throttle for adaptive alert notification emails | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_outbound_throttle_messages](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_positive_adjustment_interval](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_positive_adjustment_interval) – Throttle positive adjustments to adaptive changes | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rcptto_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rejection_rate_suspension_percentage](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage) – Rate at which messages are rejected | sending | 20 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_retry_fuzz](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_retry_fuzz) – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | sending | 4096 | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_retry_interval](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_rset_timeout](/momentum/4/modules/4-adaptive) – Set the bounds for the adaptive option | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_scope](/momentum/4/config/ref-adaptive-scope) – Define the scope applicable to adaptive delivery | sending | auto | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_sweep_rule](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_sweep_rule) *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [adaptive_sweep_rule_enabled](/momentum/4/modules/4-adaptive#modules.adaptive.adaptive_sweep_rule_enabled) – Enable or disable adaptive_sweep_rule in a specified scope | sending | 1 | 4.0 and later | binding, binding_group, domain, global |
| [address](/momentum/4/config/ref-snmp#conf.ref.snmp.address) – Set the SNMP IP address and port | na | (*non-dynamic*) | 4.0 and later | snmp |
| [address_metrics_cleanse_interval](/momentum/4/config/ref-address-metrics-cleanse-interval) – Interval for refreshing address metrics | sending | 3600 | 4.0 and later | global |
| [address_metrics_lifetime](/momentum/4/config/ref-address-metrics-lifetime) – TTL of address metrics | sending | 1800 | 4.0 and later | global |
| [alias_schemes](/momentum/4/config/ref-alias-schemes) – Enable named alias expansion schemes | both |   | 4.0 and later | domain, global, pathway, pathway_group |
| [allow_ip_literal](/momentum/4/config/ref-allow-ip-literal) – Allow IP addresses in email addresses | receiving | true | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_null_envelope_sender](/momentum/4/config/ref-allow-null-envelope-sender) – Allow the null envelope sender in email addresses | receiving | true | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [allow_trailing_whitespace_in_commands](/momentum/4/config/ref-allow-trailing-whitespace-in-commands) – Allow trailing white space at the end of an SMTP command | receiving | false | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [always_allow](/momentum/4/control-auth#control_auth.overriding) – When set to true, authentication is considered to have succeeded, unless always_deny is set | receiving | false | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [always_deny](/momentum/4/control-auth#control_auth.overriding) – If set to true, authentication is considered to have failed | receiving | false | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [apn_expiry](/momentum/3/3-push/apns-apn-expiry) – Define the number of seconds after which an APNs notification is no longer valid | sending | yes (*non-dynamic*) | 4.0 and later | binding, binding_group, domain, global |
| [arp_all_hosts](/momentum/4/modules/4-modules-cluster#option.arp_all_hosts) – Whether or not to aggressively send out ARP information to ensure that the network knows about the IP address assignment (cluster-specific) | na | true | 4.0 and later | cluster |
| [async_bounce_rendering](/momentum/4/config/ref-async-bounce-rendering) – Which thread pool to use for bounce rendering | sending | true | 4.0 and later | global |
| [authcrammd5parameters](/momentum/4/inbound-smtp#inbound_smtp.cram-md5) – Configure CRAM-MD5 authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authdigestmd5parameters](/momentum/4/inbound-smtp#inbound_smtp.digest-md5) – Configure DIGEST-MD5 authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [authloginparameters](/momentum/4/control-auth#control_auth.clear.text) – Configure clear text login authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen, pathway, pathway_group |
| [authorization](/momentum/4/config/ref-authorization) *(scope)* – Configure the console commands applicable to users | na |   | 4.0 and later | global |
| [authorizationparameters](/momentum/4/control-authz#control_authz.ecauth) – AuthorizationParameters dictionary points to authorization information | receiving |   | 4.0 and later | control_listener, esmtp_listener, listen |
| [authplainparameters](/momentum/4/inbound-smtp#inbound_smtp.plain.text) – Configure plain text login authentication | receiving |   | 4.0 and later | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| [backlog](/momentum/4/config/ref-threadpool) – Maximum number of jobs that can be queued up for a pool | na | 0 (*non-dynamic*) | 4.0 and later | threadpool |
| **banner_hostname** – Specifies the banner hostname that will be displayed to the remote client upon connecting | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [bind_address](/momentum/4/config/ref-bind-address) – Source address for outbound connections | sending |   | 4.0 and later | binding, binding_group, global |
| [binding](/momentum/4/config/ref-binding) *(scope)* – Configure binding-specific options | sending |   | 4.0 and later | binding_group, global |
| [binding_auto_replumb](/momentum/4/config/ref-binding-auto-replumb) *(scope)* – Enable or disable the auto replumber | sending and receiving |   | 4.2.1.11 and later | global |
| [binding_auto_replumb_interval](/momentum/4/config/ref-binding-auto-replumb-interval) *(scope)* – Sets the time interval to check the plumbed state of statically plumbed bindings | sending and receiving |   | 4.2.1.11 and later | global |
| [binding_group](/momentum/4/config/ref-binding-group) *(scope)* – Logically group a set of bindings | sending |   | 4.0 and later | global |
| [blackhole](/momentum/4/config/ref-blackhole) – Blackhole mail | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [body_timeout](/momentum/4/config/ref-body-timeout) – Network timeout once the DATA phase is complete | sending | 600 | 4.0 and later | binding, binding_group, domain, global |
| [bounce_behavior](/momentum/4/config/ref-bounce-behavior) – Configure the action taken when a message is classified as a bounce | sending | pass | 4.0 and later | domain, global |
| [bounce_domains](/momentum/4/config/ref-bounce-domains) – Configure the list of domains eligible for bounce processing | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [bounce_pattern](/momentum/4/config/ref-bounce-pattern) – Configure the pattern that inbound email addresses must match to be considered bounces | sending |   | 4.0 and later | domain, global |
| [bounce_suppress_list](/momentum/4/config/ref-bounce-suppress-list) – Configure a list of email addresses that may not be considered original recipients | sending |   | 4.0 and later | global |
| [bounces_inline_original](/momentum/4/config/ref-bounces-inline-original) – How much of the original message to include in MDNs | sending | headers | 4.0 and later | binding, binding_group, domain, global |
| [capabilities](/momentum/4/config/ref-capabilities) – Selectively retain root capabilities | na | (*non-dynamic*) | 4.0 and later | security |
| [chroot](/momentum/4/config/ref-chroot) – chroot to a secure environment | na | (*non-dynamic*) | 4.0 and later | security |
| [clear_mail_queue_maintainers](/momentum/4/config/ref-clear-mail-queue-maintainers) – Reschedule the mail queue maintainer | both | true | 4.0 and later | global |
| [click_tracking_enabled](/momentum/4/config/click-tracking-enabled) – Enable or disable click tracking for SMTP injections | boolean | false | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [click_tracking_scheme](/momentum/4/config/click-tracking-scheme) – Set the hyperlink scheme to use for click tracking links in SMTP injections | string | http | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| **cluster_group** – The DuraVIP™ system coordinates IP ownership responsibilities via the cluster_group extended virtual synchrony group (cluster-specific) | na | ec_cluster | 4.0 and later | cluster |
| [cluster_max_outbound_connections](/momentum/4/config/ref-cluster-max-outbound-connections) – Set the maximum number of outbound connections for a domain (cluster-specific) | sending | -1 | 4.0 and later | binding, domain, global, host |
| [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections) – Limit the rate at which connections are established (cluster-specific) | sending |   | 4.0 and later | binding_group, domain, global |
| [cluster_outbound_throttle_messages](/momentum/4/config/ref-cluster-outbound-throttle-messages) – Limit the rate at which messages are delivered (cluster-specific) | sending |   | 4.0 and later | binding_group, domain, global |
| [cluster_scope_max_outbound_connections](/momentum/4/config/ref-cluster-scope-max-outbound-connections) – Provide traffic shaping for outbound connections (cluster-specific) | sending |   | 4.0 and later | binding, binding_group, domain, global, host |
| [cluster_server_max_outbound_connections](/momentum/4/config/ref-cluster-server-max-outbound-connections) – Set the maximum number of outbound connections (cluster-specific) | sending |   | 4.0 and later | binding, binding_group, global |
| [codes](/momentum/4/modules/4-adaptive#modules.adaptive.codes) – adaptive_sweep_rule bounce or fbl codes | sending |   | 4.0 and later | adaptive_sweep_rule |
| [community](/momentum/4/config/ref-snmp#conf.ref.snmp.community) – Set the SNMP Community option value to the desired SNMP community the agent is to join | na | public (*non-dynamic*) | 4.0 and later | snmp |
| [concurrency](/momentum/4/esmtp-listener#esmtp_listener.config) – Define number of available threads | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, threadpool, xmpp_listener |
| [connect_timeout](/momentum/4/config/ref-connect-timeout) – Set the connection timeout | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [connect_timeout_to_delay](/momentum/4/config/ref-connect-timeout-to-delay) – Time interval before moving mail into the delayed queue | sending | 900 | 4.0 and later | binding, binding_group, domain, global |
| [connection_allocation_aggressiveness](/momentum/4/config/ref-connection-allocation-aggressiveness) – Tune the aggressiveness for establishing new connections to domains | sending | normal | 4.0 and later | binding, binding_group, domain, global |
| [context](/momentum/4/config/ref-context) – Use to set arbitrary connection context key value pairs | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [control_cache](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.control_cache) – Name of the cache file storing asynchronous responses | na |   | 4.0 and later | logs |
| [control_client_timeout](/momentum/4/config/ref-control-client-timeout) – Network timeout for Momentum control client connections | na | 60 | 4.0 and later | global |
| [control_group](/momentum/4/config/ref-ecelerity-cluster-conf) – Cluster manager utilizes this group to issue cluster-wide configuration commands (cluster-specific) | na | ec_console | 4.0 and later | cluster |
| [control_listener](/momentum/4/control-listener#control_listener.config) *(scope)* – Listener for incoming control connections | na |   | 4.0 and later | global |
| [critical](/momentum/4/config/ref-debug-flags) – Set the debug level | na | ALL | 4.0 and later | debug_flags |
| [crypto_engine](/momentum/4/config/ref-crypto-engine) – Enable hardware cryptography acceleration | both |   | 4.0 and later | global |
| [crypto_lock_method](/momentum/4/config/crypto-lock-method) – Set the locking method used by the TLS layer | receiving and sending | EC_SSL_DEFAULTLOCK (*non-dynamic*) | 4.0 and later | global |
| [debug](/momentum/4/config/ref-debug-flags) – Set the debug level | na |   | 4.0 and later | debug_flags |
| [debug_flags](/momentum/4/config/ref-debug-flags) *(scope)* – Configure debug verbosity | na |   | 4.0 and later | global |
| [debug_level](/momentum/4/4-module-config) – Set the module debug level (applicable to all modules) (cluster-specific) | na | error | 4.0 and later | cluster |
| [default_binding](/momentum/4/config/ref-default-binding) – Control the default binding | sending | normal | 4.0 and later | global |
| [default_charset](/momentum/4/config/ref-default-charset) – Control the character set | both | us-ascii | 4.0 and later | global, pathway, pathway_group |
| [delay_dsn_max_retry_interval](/momentum/4/config/ref-delay-dsn-max-retry-interval) – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 43200 | 4.0 and later | binding, binding_group, domain, global |
| [delay_dsn_retry_interval](/momentum/4/config/ref-delay-dsn-retry-interval) – Base interval for sending DSNs to the sender of a message that has not yet been delivered | sending | 3600 | 4.0 and later | binding, binding_group, domain, global |
| [delayed_binding_domain_fuzz](/momentum/4/config/ref-delayed-binding-domain-fuzz) – Time period to spread scheduled messages over when a bulk requeue is necessary | sending | 0 | 4.0 and later | binding, binding_group, global |
| [delayed_queue_scan_interval](/momentum/4/config/ref-delayed-queue-scan-interval) – How often to call the maintainer for a domain | sending | 15 | 4.0 and later | global |
| [delivery_method](/momentum/4/config/ref-delivery-method) – Set the delivery method | sending | ESMTP (*3.0*), SMTP (*2.2*) | 4.0 and later | binding, binding_group, domain, global |
| [delivery_pool](/momentum/4/config/ref-delivery-pool) – Associate an eventloop with mail delivery | sending | (*non-dynamic*) | 4.0 and later | global |
| [delivery_response_timeout](/momentum/4/config/ref-delivery-response-timeout) – Time to wait for a response to an outbound request | sending | 5000 | 4.0 and later | binding, domain, global |
| [dir_mode](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.dir_mode) – Octal representation of the file permissions | na |   | 4.0 and later | logs |
| [disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener) – Option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | both | false | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [disable_nagle_algorithm](/momentum/4/config/ref-disable-nagle-algorithm) – Disable nagle algorithm on sockets | both | false | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener, listen, xmpp_listener |
| [disk_queue_drain_rate](/momentum/4/config/ref-disk-queue-drain-rate) – Control the rate at which messages are spooled in on start-up | both | 100 | 4.0 and later | global |
| [dns_cache_purge_interval](/momentum/4/config/ref-dns-cache-purge-interval) – How often the DNS response cache is scanned for stale entries | sending | 60 | 4.0 and later | global |
| [dns_expire_interval](/momentum/4/config/ref-dns-expire-interval) – How often to check for domains with expired DNS information | sending | 10 | 4.0 and later | global |
| [dns_failures_to_purge](/momentum/4/config/ref-dns-failures-to-purge) – Configure the maximum number of DNS lookups | sending | 10 | 4.0 and later | domain, global |
| [dns_fallback_to_tcp](/momentum/4/config/ref-dns-fallback-to-tcp) – Whether or not to fail over to TCP in place of UDP | both | false | 4.0 and later | global |
| [domain](/momentum/4/config/ref-domain) *(scope)* – Configure domain-specific options | sending |   | 4.0 and later | binding, binding_group, global |
| [domain_for_unqualified_recipient_addresses](/momentum/4/config/ref-domain-for-unqualified-recipient-addresses) – Configure a domain which will be used to resolve delivery for unqualified addresses | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domain_for_unqualified_sender_address](/momentum/4/config/ref-domain-for-unqualified-sender-address) – Configure a domain which will be used to substitute for unqualified sender addresses | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [domainkeys](/momentum/4/config/ref-domainkeys) – Enable or disable domainkeys signing | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [drop_body_after_trans_fail](/momentum/4/config/ref-drop-body-after-trans-fail) – Number of retry attempts before freeing message memory | sending | 3 | 4.0 and later | binding, binding_group, domain, global |
| [duravip_balance_set_size](/momentum/4/modules/4-modules-cluster#option.duravip_balance_set_size) – When balancing DuraVIP™s, how many to process as a batch in response to a balance request (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [duravip_follow](/momentum/4/4-cluster-config-duravip) – Specify the binding a listener should follow (cluster-specific) | receiving |   | 4.0 and later | listen |
| [duravip_preference](/momentum/4/4-cluster-config-duravip) – Specify a DuraVIP™ preference (cluster-specific) | both |   | 4.0 and later | binding, listen |
| [eccluster_listener](/momentum/4/cluster-listeners#eccluster_listener) *(scope)* – Control communication between cluster nodes (cluster-specific) | na |   | 4.0 and later | global |
| [ecstream_idle_time](/momentum/4/ecstream-listener) – Number of seconds of inactivity before a client is disconnected (ECStream only) | receiving | 300 | 4.0 and later | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_listener](/momentum/4/ecstream-listener) *(scope)* – Listener for incoming ECSTREAM connections | receiving |   | 4.0 and later | global |
| [ecstream_max_batch_size](/momentum/4/ecstream-listener) – Maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | receiving | 10000 | 4.0 and later | ecstream_listener, listen, pathway, pathway_group, peer |
| [ecstream_port](/momentum/4/config/ref-ecstream-port) – Configure the port for ecstream deliveries | sending | 1825 | 4.0 and later | binding, binding_group, domain, global |
| [ecstream_timeout](/momentum/4/config/ref-ecstream-timeout) – Amount of time to wait for an ecstream connection to be established | sending | 600 | 4.0 and later | binding, binding_group, domain, global |
| [ehlo_hostname](/momentum/4/config/ref-ehlo-hostname) – Set the hostname used for EHLO in outbound mail | sending | __hostname__ | 4.0 and later | binding, binding_group, domain, global |
| [ehlo_timeout](/momentum/4/config/ref-ehlo-timeout) – Network timeout for EHLO | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [enable](/momentum/4/listeners#listeners.enable.option) – Enable or disable a listener scope | receiving | true | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [enable_authentication](/momentum/4/control-auth) – Whether or not to enable authentication | receiving |   | 4.0 and later | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [enable_authorization](/momentum/4/control-authz) – Whether or not to enable authorization for console commands | receiving |   | 4.0 and later | control_listener, listen, peer |
| [enable_duravip](/momentum/4/4-cluster-config-duravip) – Whether to enable Durable MultiVIP© bindings (cluster-specific) | both |   | 4.0 and later | binding, listen |
| [enable_fbl_header_insertion](/momentum/4/config/ref-enable-fbl-header-insertion) – Enable or disable fbl header insertion | sending |   | 4.0 and later | binding, binding_group, domain, global |
| **enabled** – Whether or not the module is enabled (cluster-specific) | na | true | 4.0 and later | cluster |
| [error](/momentum/4/config/ref-debug-flags) – Set the debug level | na | ALL | 4.0 and later | debug_flags |
| [esmtp_listener](/momentum/4/esmtp-listener) *(scope)* – Listener for incoming SMTP connections | receiving |   | 4.0 and later | global |
| [event_loop](/momentum/4/config/ref-event-loop) – Associate a listener with an eventloop | sending | (*non-dynamic*) | 4.0 and later | ecstream_listener, esmtp_listener, listen |
| [eventloop](/momentum/4/config/ref-eventloop) *(scope)* – Define a pool of event loops to enable multiple event loop configuration | both | (*non-dynamic*) | 4.0 and later | global |
| [events_per_iter](/momentum/4/config/ref-events-per-iter) – Employ when using a Concurrency greater than 1 | receiving | 0 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [exclude_vctx_conn](/momentum/4/config/ref-exclude-vctx-conn) – Exclude validation connection context keys from being journaled in the spool metadata | both |   | 4.0 and later | binding, binding_group, domain, global |
| [exclude_vctx_mess](/momentum/4/config/ref-exclude-vctx-mess) – Exclude validation message context keys from being journaled in the spool metadata | both |   | 4.0 and later | binding, binding_group, domain, global |
| [expensive_batch_assessment](/momentum/4/config/ref-expensive-batch-assessment) – Treat messages as equal even if the bodies or headers have been modified since reception | receiving | false | 4.0 and later | global |
| [File_Mode](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.file_mode) – File access rights in octal notation | na | 0660 | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, msgcserver_listener, xmpp_listener |
| [file_mode](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.logfile) – Octal representation of the file permissions (cluster logs) | na |   | 4.0 and later | logs |
| [force_fsync](/momentum/4/config/ref-force-fsync) – Ensure that data is synced to disk on reception | receiving | false | 4.0 and later | global |
| [fully_resolve_before_smtp](/momentum/4/config/ref-fully-resolve-before-smtp) – Resolve all MX and A records before attempting delivery | sending | true | 4.0 and later | binding, binding_group, domain, global |
| [gateway](/momentum/4/config/ref-gateway) – Configure a static SMTP route for mail | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_application_id](/momentum/3/3-push/push-gcm-gcm-application-id) – Define the package name of the Android application allowed to received notifications | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_authorization_token_id](/momentum/3/3-push/push-gcm-gcm-authorization-token-id) – Authorization token that permits sending Google push notifications | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [gcm_delay_while_idle](/momentum/3/3-push/push-gcm-gcm-delay-while-idle) – Whether or not to send the notification immediately if a device is idle | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [gcm_dry_run](/momentum/3/3-push/push-gcm-gcm-dry-run) – Test a request without actually sending a message | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [gcm_ttl](/momentum/3/3-push/push-gcm-gcm-ttl) – Default Time To Live for notifications | sending | -1 | 4.0 and later | binding, binding_group, domain, global |
| [generate_bounces](/momentum/4/config/ref-generate-bounces) – Generate MDNs if mail is failed after reception | sending | true | 4.0 and later | binding, binding_group, domain, global |
| [generate_bounces_for_multi_recipient_policy_rejections](/momentum/4/config/ref-generate-bounces-for-multi-recipient-policy-rejections) – Generate MDNs after reception for policy rejections | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [generate_delay_dsn](/momentum/4/config/ref-generate-delay-dsn) – Generate DSNs if mail is delayed | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [group](/momentum/4/config/ref-user) – Group identity to assume after startup | na | ecuser (*non-dynamic*) | 4.0 and later | security |
| [growbuf_size](/momentum/4/config/ref-growbuf-size) – Size of an element in a growbuf chain | na | 16384 | 4.0 and later | global |
| [heartbeat_start_delay](/momentum/4/modules/4-modules-cluster#option.heartbeat_start_delay) – Seconds to wait after startup before the cluster heartbeat is activated (cluster-specific) | na | 15 | 4.0 and later | cluster |
| [heartbeats_per_sec](/momentum/4/modules/4-modules-cluster#option.heartbeats_per_sec) – How often to send a heartbeat (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [high_action](/momentum/4/modules/4-adaptive#modules.adaptive.high_action) – Action when the high threshold is met and the number of delivery attempts exceeds the adaptive_attempt_threshold | sending | "suspend" "4 hours" | 4.0 and later | adaptive_sweep_rule |
| [high_threshold](/momentum/4/modules/4-adaptive#modules.adaptive.high_threshold) – High threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 10 | 4.0 and later | adaptive_sweep_rule |
| [host](/momentum/4/config/ref-host) *(scope)* – Configure host-specific options | sending |   | 4.0 and later | binding, binding_group, global |
| [host_failure_retry](/momentum/4/config/ref-host-failure-retry) – Time to wait before attempting a retry | sending | 120 | 4.0 and later | domain, global |
| [hot_domains](/momentum/4/config/ref-hot-domains) - List of high-traffic domains that should be spread across maintainer threads | sending | version-dependent | 3.6 and later | global |
| [hostname](/momentum/4/config/ref-hostname) – Override the system configured hostname | both |   | 4.0 and later | global |
| [http_basic_auth](/momentum/4/config/ref-http-basic-auth) – Define the user credentials when using basic HTTP authentication | both |   | 4.0 and later | binding, binding_group, domain, global |
| [http_host](/momentum/4/config/ref-http-host) – Define the HTTP host | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [http_listener](/momentum/3/3-rest/rest-http-listener) *(scope)* – Listener used with the REST injector | sending |   | 4.0 and later | global |
| [http_method](/momentum/4/config/ref-http-method) – Define the HTTP method to use | sending | POST | 4.0 and later | binding, binding_group, domain, global |
| [http_uri](/momentum/4/config/ref-http-uri) – Define the HTTP URI that you wish to connect to | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [http_version](/momentum/4/config/ref-http-version) – Define the HTTP version to use | sending | 1.1 | 4.0 and later | binding, binding_group, domain, global |
| **idle_time** – Number of seconds of inactivity before a client is disconnected | receiving | 300 | 4.0 and later | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [idle_timeout](/momentum/4/config/ref-idle-timeout) – Time to maintain idle outbound connections | sending | 5 | 4.0 and later | binding, binding_group, domain, global |
| [if_check_interval](/momentum/4/modules/4-modules-cluster#option.if_check_interval) – How often to run through a maintenance cycle (cluster-specific) | na | 30 | 4.0 and later | cluster |
| [if_down_limit](/momentum/4/modules/4-modules-cluster#option.if_down_limit) – How long to wait before deciding to bring an IP online (cluster-specific) | na | 4 | 4.0 and later | cluster |
| [inbound_throttle_messages](/momentum/4/config/ref-inbound-throttle-messages) – Rate limit inbound mail | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [info](/momentum/4/config/ref-debug-flags) – Set the debug level | na |   | 4.0 and later | debug_flags |
| [initial_hash_buckets](/momentum/4/config/ref-initial-hash-buckets) – Set the number of hash buckets used by the system | na | 32 | 4.0 and later | global |
| [inline_transfail_processing](/momentum/4/config/ref-inline-transfail-processing) – How to handle transient failure processing | sending | 1 | 4.0 and later | global |
| [keep_message_dicts_in_memory](/momentum/4/config/ref-keep-message-dicts-in-memory) – Preserve memory representation of metadata when memory is low | both | false (*non-dynamic*) | 4.0 and later | global |
| [large_message_threshold](/momentum/4/config/ref-large-message-threshold) – Consider a message large when its size exceeds this amount | both | 131072 | 4.0 and later | global |
| [legacy_message_threshold](/momentum/4/config/ref-legacy-message-threshold) – Maximum size allowed for messages being passed to legacy modules | both | 1048576 | 4.0 and later | global |
| [license](/momentum/4/config/ref-license) – Specify an alternate license location | na | /opt/msys/ecelerity/etc (*non-dynamic*) | 4.0 and later | global |
| [listen](/momentum/4/listeners#listeners.enable.option) *(scope)* – Specify the socket that a listener listens on | receiving |   | 4.0 and later | control_listener, ecstream_listener, esmtp_listener, http_listener, msgcserver_listener, xmpp_listener |
| **listen_backlog** – Listen backlog | receiving | 500 (*3.0*) | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **listener_sessions** – Specifies the maximum number of concurrent sessions that can be established to this listener | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [lmtp_port](/momentum/4/config/ref-lmtp-port) – Configure the port for LMTP deliveries | sending | 2003 | 4.0 and later | binding, binding_group, domain, global |
| [local_changes_file](/momentum/4/config/ref-local-changes-file) – File for writing local configuration changes | na | /opt/msys/ecelerity/etc/local_changes.conf | 4.0 and later | global |
| [local_changes_only](/momentum/4/config/ref-local-changes-only) – Whether there is a file for writing local configuration change | na | false | 4.0 and later | global |
| [log_active_interval](/momentum/4/modules/4-modules-cluster#option.log_active_interval) – Used to tune centralized logging (cluster-specific) | na | 1 | 4.0 and later | cluster |
| [log_group](/momentum/4/modules/4-modules-cluster#option.log_group) – Whether or not panic log messages are broadcast over spread (cluster-specific) | na |   | 4.0 and later | cluster |
| [log_idle_interval](/momentum/4/modules/4-modules-cluster#option.log_idle_interval) – Amount of time to sleep before looking for another segment (cluster-specific) | na | 10 | 4.0 and later | cluster |
| [log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener) – Whether to log REST injection requests | sending | false | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [Logfile](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.logfile) – Describe the full path to the log file | na |   | 4.0 and later | logs |
| [logs](/momentum/4/config/ref-ecelerity-cluster-conf) – Define the location of the cluster manager logs (cluster-specific) | na |   | 4.0 and later | cluster |
| [logs](/momentum/4/config/ref-eccluster-conf) *(scope)* – Configure centralized log files on the cluster manager | na |   | 4.0 and later | global |
| [low_action](/momentum/4/modules/4-adaptive#modules.adaptive.low_action) – Action when the high threshold is not met but the low threshold is met | sending | "throttle" "down" | 4.0 and later | adaptive_sweep_rule |
| [low_threshold](/momentum/4/modules/4-adaptive#modules.adaptive.low_threshold) – Low threshold value for the sum of the rates of the bounce codes or FBL categories | sending | 5 | 4.0 and later | adaptive_sweep_rule |
| [mail_queue_check_vm_interval](/momentum/4/config/ref-mail-queue-check-vm-interval) – How often to apply memory management reduction on mail queues | both | 60 | 4.0 and later | global |
| [mailerdaemon](/momentum/4/config/ref-mailerdaemon) – Set the From: address for MDNs | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [mailfrom_timeout](/momentum/4/config/ref-mailfrom-timeout) – Timeout after MAIL FROM | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| [maintainer_pool](/momentum/4/config/ref-maintainer-pool) – Create an eventloop for maintainers | both | (*non-dynamic*) | 4.0 and later | global |
| [malloc2mmap_threshold](/momentum/4/config/ref-malloc-2-mmap-threshold) – Use mmap when allocations exceed this amount | na | 4092 | 4.0 and later | global |
| [manager](/momentum/4/cluster-config-logging-complex) *(scope)* – Define managers for subclusters | na |   | 4.0 and later | logs |
| [masterdb_file](/momentum/4/config/ref-masterdb-file) – Specify an alternate path for the statistics permastore | na | /var/log/ecelerity/ecdb (*non-dynamic*) | 4.0 and later | global |
| [match_cache_life](/momentum/4/config/ref-match-cache-life) – Set the maximum number of seconds that the match cache will be valid | na | 0 | 4.0 and later | global |
| [match_cache_size](/momentum/4/config/ref-match-cache-size) – Size of the cache that holds the results of looking up matching scopes | na | 16384 | 4.0 and later | global |
| [max_deliveries_per_connection](/momentum/4/config/ref-max-deliveries-per-connection) – Maximum number of messages to deliver before closing a connection | sending | 0 | 4.0 and later | binding, binding_group, domain, global |
| [max_dns_ttl](/momentum/4/config/ref-max-dns-ttl) – Set the maximum DNS TTL | sending | 4294967295 | 4.0 and later | global |
| [max_idle](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.max_idle) – Maximum number of seconds a log file may be left open | na |   | 4.0 and later | logs |
| **max_message_size** – Maximum number of bytes allowed in a single message before a "resources exhausted" message is returned to the client | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_open](/momentum/4/config/ref-eccluster-conf#eccluster.conf.logs.max_open) – Maximum number of concurrently open log files | na |   | 4.0 and later | logs |
| [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections) – Set the maximum number of outbound connections | sending | 32 | 4.0 and later | binding, binding_group, domain, global, host |
| **max_receptions_per_connection** – Maximum number of messages allowed in a single session, after which a 421 error will be returned | receiving | 0 | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [max_recipients_per_batch](/momentum/4/config/ref-max-recipients-per-batch) – Maximum number of recipients to send in a single outbound message transaction | sending | 100 | 4.0 and later | binding, binding_group, domain, global |
| **max_recipients_per_connection** – Maximum number of recipients allowed in a single session, after which a 421 error will be returned | sending | 0 | 4.0 and later | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **max_recipients_per_message** – Maximum number of recipients allowed in a message, after which a 421 error will be returned | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [max_request_size](/momentum/4/config/max-request-size) – Limit the size of an HTTP request | both |   | 4.0 and later | http_listener, listen, pathway, pathway_group, peer |
| [max_resident_active_queue](/momentum/4/config/ref-max-resident-active-queue) – Threshold above which messages are not held in memory | sending | 250 | 4.0 and later | binding, binding_group, domain, global |
| [max_resident_messages](/momentum/4/config/ref-max-resident-messages) – Threshold above which messages are not held in memory | sending | 32768 | 4.0 and later | binding, binding_group, global |
| [max_resident_transfails](/momentum/4/config/ref-max-resident-transfails) – If the transient failure queue grows beyond this size, messages are swapped out of memory | sending | 100 | 4.0 and later | global |
| [swap_out_meta_after_each_tempfail](/momentum/4/config/ref-swap-out-meta-after-each-tempfail) – If this is set to false, Momentum will only update metadata on disk after each tempfail if the message context is dirty, and the num_retires, next_attempt and message context may not be accurate if Momentum crashes | sending | true | 4.3.1 and later | global |
| [max_retries](/momentum/4/config/ref-max-retries) – Override the system configured max_retries | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [max_retry_interval](/momentum/4/config/ref-max-retry-interval) – Maximum retry interval | sending | 43200 | 4.0 and later | binding, binding_group, domain, global |
| [max_timed_events_per_iter](/momentum/4/config/ref-max-timed-events-per-iter) – Maximum numer of timed events per scheduler iteration | na | 1024 | 4.0 and later | global |
| [mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception) – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | both | passthru | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [mdn_failures_notify](/momentum/4/config/ref-mdn-failures-notify) – Mailbox to which to send null recipient MDNs | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [memory_goal](/momentum/4/config/ref-memory-goal) – Configure physical memory usage goal | na | 90 | 4.0 and later | global |
| [memory_hwm](/momentum/4/config/ref-memory-hwm) – Configure physical memory usage high-water mark | na | 95 | 4.0 and later | global |
| [message_expiration](/momentum/4/config/ref-message-expiration) – Time to live for messages | sending | 86400 | 4.0 and later | binding, binding_group, domain, global |
| [migrate_connections_between_sibling_domains](/momentum/4/config/ref-migrate-connections-between-sibling-domains) – Optimize connections for sibling domains | both | true | 4.0 and later | global |
| [mime_parse_large_messages_during_reception](/momentum/4/config/ref-mime-parse-large-messages-during-reception) – Configure whether large messages are parsed upon reception or just in time | receiving | true | 4.0 and later | global |
| [min_dns_ttl](/momentum/4/config/ref-min-dns-ttl) – Override DNS TTLs smaller than this value | sending | 0 | 4.0 and later | global |
| [mx_failures_fallback_to_a](/momentum/4/config/ref-mx-failures-fallback-to-a) – Configure the maximum number of times an MX lookup will be attempted | sending | 3 | 4.0 and later | domain, global |
| [mx_failures_to_delay](/momentum/4/config/ref-mx-failures-to-delay) – Number of consecutive failures before a domain is auto-delayed | sending | 50 | 4.0 and later | domain, global |
| [never_attempt_expired_messages](/momentum/4/config/ref-never-attempt-expired-messages) – Never attempt delivery of expired messages | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [never_retry](/momentum/4/config/ref-never-retry) – Whether or not to retry delivery of failed messages | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [nodeaddr](/momentum/4/modules/4-modules-cluster#option.nodeaddr) – Canonical cluster address for the node (cluster-specific) | na |   | 4.0 and later | cluster |
| [nodename](/momentum/4/modules/4-modules-cluster#option.nodename) – Override the node name that is used to canonically identify this cluster node (cluster-specific) | na |   | 4.0 and later | cluster |
| [notice](/momentum/4/config/ref-debug-flags) – Set the debug level | na |   | 4.0 and later | debug_flags |
| [only_use_best_mx_for_relay_domains](/momentum/4/config/ref-only-use-best-mx-for-relay-domains) – If this is set to true only the lowest numerical priority MXs are used | sending | true | 4.0 and later | global |
| [open_tracking_enabled](/momentum/4/config/open-tracking-enabled) – Enable or disable open tracking for SMTP injections | boolean | false | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [open_tracking_scheme](/momentum/4/config/open-tracking-scheme) – Set the hyperlink scheme to use for open tracking links in SMTP injections | string | http | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [open_relay](/momentum/4/config/ref-open-relay) – Whether the MTA is an open relay or not | receiving | false | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [opendkim_sign](/momentum/4/config/ref-opendkim-sign) – Whether or not to enable OpenDKIM signing | sending | true (*non-dynamic*) | 4.0 and later | binding, binding_group, domain, global |
| [outbound_throttle_connections](/momentum/4/config/ref-outbound-throttle-connections) – Limit the rate at which connections are established | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [outbound_throttle_messages](/momentum/4/config/ref-outbound-throttle-messages) – Limit the rate at which messages are delivered | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [pathway](/momentum/4/config/ref-pathway) *(scope)* – Grouping of inbound configuration options | receiving |   | 4.0 and later | global, pathway_group |
| [pathway](/momentum/4/config/ref-pathway) – Means for associating a Listener with a pathway scope | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, listen, peer |
| [pathway_group](/momentum/4/config/ref-pathway-group) *(scope)* – Container for pathway scopes | receiving |   | 4.0 and later | global |
| [pcre_cache_size](/momentum/4/config/ref-pcre-cache-size) – Set the maximum size of the ec_pcre_compile cache | na | 100 | 4.0 and later | global |
| [pcre_cache_ttl](/momentum/4/config/ref-pcre-cache-ttl) – Set the maximum TTL for the ec_pcre_compile cache | na | 300 | 4.0 and later | global |
| [peer](/momentum/4/listeners#listeners.acls) *(scope)* – Create an ACL within a specific listener | receiving |   | 4.0 and later | control_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [permastore_interval](/momentum/4/config/ref-permastore-interval) – Frequency for saving various statistics | na | 300 | 4.0 and later | global |
| [pidfile](/momentum/4/config/ref-pidfile) – Set the PID file path | na | /var/run/ecelerity.pid (*non-dynamic*) | 4.0 and later | global |
| [pool_name](/momentum/4/esmtp-listener#esmtp_listener.config) – Associate a threadpool with a listener | receiving |   | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [prefer_ipv6_mxs](/momentum/4/config/ref-prefer_ipv6_mxs) - Prefer IPv6 addresses over IPv4 addresses at a given MX priority level | sending | false | 4.0 and later | global |
| [prohibited_hosts](/momentum/4/config/ref-prohibited-hosts) – Prevent mail from being delivered to invalid destinations | sending |   | 4.0 and later | global |
| [rcptto_timeout](/momentum/4/config/ref-rcptto-timeout) – Timeout after RCPT TO | sending | 300 | 4.0 and later | binding, binding_group, domain, global |
| **received_hostname** – Hostname that is placed in the received headers; these are added to the messages as it transits Momentum | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [reconfig_message](/momentum/4/esmtp-listener-reconfig-message) – Message if the configuration has changed | receiving | 4.3.2 Reconfiguration in progress | 4.0 and later | esmtp_listener |
| [relay_domains](/momentum/4/config/ref-relay-domains) – Configure the list of domains for which Momentum relays mail | receiving |   | 4.0 and later | global, pathway, pathway_group |
| [relay_for_sending_domains](/momentum/4/config/ref-relay-for-sending-domains) – Domains that may use the MTA as a relay | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [relay_hosts](/momentum/4/config/ref-relay-hosts) – Configure the list of hosts for which Momentum relays mail | receiving |   | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [remote_smtp_port](/momentum/4/config/ref-remote-smtp-port) – Set the port to be used for SMTP deliveries | sending | 25 | 4.0 and later | binding, binding_group, domain, global |
| [replicate](/momentum/4/config/ref-ecelerity-cluster-conf) *(scope)* – Define the cluster replication framework (cluster-specific) | na |   | 4.0 and later | cluster |
| [require_ehlo](/momentum/4/config/ref-require-ehlo) – Reject mail from clients that do not say HELO | receiving | false | 4.0 and later | esmtp_listener, global, listen, pathway, pathway_group, peer |
| [reserve_maintenance_interval](/momentum/4/config/ref-reserve-maintenance-interval) – How often to perform mail queue maintenance | sending | 15 | 4.0 and later | global |
| [resolv_conf](/momentum/4/config/ref-resolv-conf) – Specify a custom resolv.conf file | sending |   | 4.0 and later | global |
| [response_transcode_pattern](/momentum/4/config/ref-response-transcode-pattern) – Regex pattern for comparison to a server response | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [response_transcode_replace](/momentum/4/config/ref-response-transcode-replace) – Replacement string for a server response | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [retry_interval](/momentum/4/config/ref-retry-interval) – Base retry interval | sending | 1200 | 4.0 and later | binding, binding_group, domain, global |
| [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope) – Permit trailing white space before the final CRLF | receiving | false | 4.0 and later | global, pathway, pathway_group |
| [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules) – Allow relaxation of enforcement of the rfc2821 address rules | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | pedantic | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ignore | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_max_line_length_policy](/momentum/4/config/ref-rfc-2822-max-line-length-policy) – Determine how non-RFC-compliant line lengths are handled | receiving | none | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | ifneeded | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | reject | 4.0 and later | global, pathway, pathway_group |
| [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers) – Allow relaxation of enforcement of the rfc2822 address rules | receiving | true | 4.0 and later | global, pathway, pathway_group |
| [replicate](/momentum/4/config/ref-authorization) *(scope)* – Define a role within an authorization stanza | na |   | 4.0 and later | authorization |
| [routes](/momentum/4/config/ref-routes) – Configure message routing | sending |   | 4.0 and later | domain, global |
| [rset_timeout](/momentum/4/config/ref-rset-timeout) – Set the timeout after RSET | sending | 30 | 4.0 and later | binding, binding_group, domain, global |
| [scheduler](/momentum/4/config/ref-scheduler) – Override the default IO scheduler | na | (*non-dynamic*) | 4.0 and later | global |
| [scope_max_outbound_connections](/momentum/4/config/ref-scope-max-outbound-connections) – Provide traffic shaping for outbound connections | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [security](/momentum/4/config/ref-security) *(scope)* – Scope for defining which permissions are retained by which user | na | (*non-dynamic*) | 4.0 and later | global |
| [send_8bitmime](/momentum/4/config/ref-send-8-bitmime) – Enable advertising of 8BITMIME when sending mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [server_max_file_descriptors](/momentum/4/config/ref-server-max-file-descriptors) – Sets the maximum number of file descriptors usable by the system | na | 3000000 | 4.0 and later | global |
| [server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections) – Sets the maximum number of outbound connections | sending | 20000 | 4.0 and later | binding, binding_group, global |
| [server_reserve_outbound_connections](/momentum/4/config/ref-server-reserve-outbound-connections) – Sets the server-wide connection limit reserve | sending | 200 | 4.0 and later | global |
| **service_sessions** – Specifies the maximum number of concurrent sessions that can be established to all listeners for this service (e.g., ESMTP, ECStream) | receiving | 0 | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [signing_stats](/momentum/4/config/ref-signing-stats) – Control how signing statistics are recorded | sending | all | 4.0 and later | global |
| [siv_throttle_cache_size](/momentum/4/config/ref-siv-throttle-cache-size) – Set the maximum number of named throttles | both | 100, 1000 (*3.0.24*) | 4.0 and later | global |
| [skip_hosts](/momentum/4/config/ref-skip-hosts) – Skip the specified host, but consider other hosts in the domain | sending |   | 4.2.1.6 and later | global |
| [smtp_extensions](/momentum/4/esmtp-listener-extensions) – Array of SMTP extensions | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [SNMP](/momentum/4/config/ref-snmp) *(scope)* – Simple Network Management Protocol Support scope options | na | (*non-dynamic*) | 4.0 and later | global |
| [snmp_traps](/momentum/4/config/ref-snmp) *(scope)* – Enable and configure generation of SNMP traps | na | (*non-dynamic*) | 4.0 and later | global |
| [soft_bounce_drain_rate](/momentum/4/config/ref-soft-bounce-drain-rate) – How many soft bounces to place into the mail queues in a single scheduler iteration | sending | 100 | 4.0 and later | global |
| [spool_mode](/momentum/4/config/ref-spool-mode) – Set the file mode for newly created spool files | na | 0640 (*non-dynamic*) | 4.0 and later | global |
| [spoolbase](/momentum/4/config/ref-spoolbase) – Set the base directory for the spool | na | /var/spool/ecelerity (*non-dynamic*) | 4.0 and later | global |
| [ssl_lock_method](/momentum/4/config/ssl-lock-method) – Specify the SSL lock method | na | mutex (*non-dynamic*) | 4.0 and later | global |
| [stack_size](/momentum/4/config/ref-threadpool) – Stack space for a threadpool | na | 0 (*non-dynamic*) | 4.0 and later | threadpool |
| [starttls_injection_policy](/momentum/4/config/starttls-injection-policy) – Protect against SMTP injections prior to TLS | receiving | reject | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [state](/momentum/4/config/ref-snmp) – Whether to enable the SNMP agent | na | 1 (*non-dynamic*) | 4.0 and later | snmp |
| [state](/momentum/4/config/ref-snmp) – Whether to enable generation of SNMP traps | na | 0 (*non-dynamic*) | 4.0 and later | snmp_traps |
| **static_banner** – Specifies the banner that will be displayed to the remote client upon connecting. You must include 220 as the beginning of your replacement string; e.g., 220 my.mail.server ESMTP | receiving |   | 4.0 and later | esmtp_listener, listen, pathway, pathway_group, peer |
| [supplemental_groups](/momentum/4/config/ref-supplemental-groups) – Supplemental groups to assume after startup | na | (*non-dynamic*) | 4.0 and later | security |
| [suspend_delivery](/momentum/4/config/ref-suspend-delivery) – Prevent outbound mail delivery | sending | false | 4.0 and later | binding, binding_group, domain, global |
| [syscontact](/momentum/4/config/ref-snmp) – Set the SNMP SysContact option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [sysdescription](/momentum/4/config/ref-snmp) – Set the SNMP SysDescription option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [syslocation](/momentum/4/config/ref-snmp) – Set the SNMP SysLocation option value | na | (*non-dynamic*) | 4.0 and later | snmp |
| [tcp_buffer_size](/momentum/4/config/ref-tcp-buffer-size) – Maximum tcp buffer size for outbound connections | sending | 32768 | 4.0 and later | cluster, global |
| **tcp_recv_buffer_size** – Sets the TCP receive buffer size. When set to 0, the operating system automatically manages the buffer size. | receiving | 4096 (ESMTP_Listener), 32768 (HTTP_Listener) | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| **tcp_send_buffer_size** – Sets the TCP send buffer size. When set to 0, the operating system automatically manages the buffer size. | receiving | 4096 (ESMTP_Listener), 32768 (HTTP_Listener) | 4.0 and later | control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, xmpp_listener |
| [threadpool](/momentum/4/config/ref-threadpool) *(scope)* – Configure thread pool specific options | na |   | 4.0 and later | global |
| [timeout](/momentum/4/control-listener#control_listener.config) – Timeout for idle control connections on Control_Listeners | receiving | 60 | 4.0 and later | control_listener |
| [timestampformat](/momentum/4/config/ref-timestampformat) – Set the timestamp format used when logging to stderr | na | [%a %d %b %Y %H:%M:%S] | 4.0 and later | global |
| [tls](/momentum/4/config/ref-tls) – Determine whether to use a TLS connection for outbound mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [tls_allow_renegotiation](/momentum/4/config/tls-allow-renegotiation) – Determine whether to enable TLS renegotiation | receiving and sending | true | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ca](/momentum/4/config/tls-ca) – Specify certificate authority for outbound mail | sending |   | 4.0 and later | binding, binding_group, domain, global |
| [tls_certificate](/momentum/4/config/tls-certificate) – Specify certificate to use for inbound and outbound mail | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_ciphers](/momentum/4/config/tls-ciphers) – Specify allowable ciphers for TLS inbound and outbound sessions | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_client_ca](/momentum/4/config/tls-client-ca) – Specify certificate authority for inbound mail | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_dhparams_file](/momentum/4/config/ref-tls-dhparams-file) – Specifies DHE parameters that add per-session randomness to the encryption | both |   | 4.0 and later | global |
| [tls_enable_dhe_ciphers](/momentum/4/config/ref-tls-enable-dhe-ciphers) – Controls whether or not DHE ciphers are available | both | true | 4.0 and later | global |
| [tls_engine](/momentum/4/config/tls-engine) – Specify the TLS library to use (OpenSSL or GNUTLS) | sending | openssl | 4.0 and later | global |
| [tls_ifavailable_fallback](/momentum/4/config/tls-ifavailable-fallback) – Determine the behavior if TLS negotiation fails | sending | true | 4.1 and later | binding, binding_group, domain, global |
| [tls_key](/momentum/4/config/tls-key) – Specify the TLS key to use for outbound mail or inbound mail | receiving and sending |   | 4.0 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [tls_protocols](/momentum/4/config/tls-protocols) – Allowable ciphers for TLS inbound and outbound sessions | receiving and sending |   | 4.1.0.2 and later | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **tls_verified_peer_can_relay** – Verification that peer can relay | receiving | false | 4.0 and later | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| [tls_verified_peer_is_authorized](/momentum/4/config/tls-verified-peer-is-authorized) – Mark requests that use a verified SSL Client certificate as being authorized | sending | false | 4.0 and later | http_listener, listen, pathway, peer |
| [tls_verify](/momentum/4/config/tls-verify) – Specify how to handle the remote presented certificate | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [tls_verify_mode](/momentum/4/config/tls-verify-mode) – Determine whether a TLS certificates is required | receiving |   | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| [topology](/momentum/4/4-cluster-config-duravip) *(scope)* – Define the cluster network topology (cluster-specific) | na |   | 4.0 and later | cluster |
| [trace_smtp_mode](/momentum/4/config/ref-trace-smtp-mode) – Set the default permissions of trace files | sending | 0640 (*non-dynamic*) | 4.0 and later | global |
| [tracking_domain](/momentum/4/config/tracking-domain) – Set the tracking domain to use for engagement tracking in SMTP injections | string | localhost:8080 | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [tracking_link_expiry](/momentum/4/config/tracking-link-expiry) – Set the expiration time, in seconds, for engagement tracking for SMTP injections | integer | 31536000 | 4.1-HF4 (beta) | esmtp_listener, listen, pathway, pathway_group, peer |
| [transfail_drain_rate](/momentum/4/config/ref-transfail-drain-rate) – Maximum number of messages to pop off the transient failure queue in a single scheduler iteration | sending | 100 | 4.0 and later | global |
| [transform_8bitmime_content](/momentum/4/config/ref-transform-8-bitmime-content) – Enable 8BITMIME downconversion when sending mail | sending | ifneeded (*3.1.6*) | 4.0 and later | binding, binding_group, domain, global |
| [trap_destination](/momentum/4/config/ref-snmp#example.snmp.3) – Destination for SNMP trap | na | (*non-dynamic*) | 4.0 and later | snmp_traps |
| [trap_interval](/momentum/4/config/ref-snmp#conf.ref.snmp.trap_interval) – Frequency of SNMP trap generation | na | 60 (*non-dynamic*) | 4.0 and later | snmp_traps |
| [unconditional_rebind](/momentum/4/modules/4-modules-cluster#option.unconditional_rebind) – Whether the full set_binding logic is invoked or not (cluster-specific) | na | true | 4.0 and later | cluster |
| [unlink_on_spool_in_failure](/momentum/4/config/ref-unlink-on-spool-in-failure) – Whether or not to remove malformed messages | receiving | true | 4.0 and later | global |
| [use_iflist_cache](/momentum/4/config/ref-use-iflist-cache) – Whether or not to cache the list of interfaces configured by the system | sending | 0 (*non-dynamic*) | 4.0 and later | global |
| [use_ipv6](/momentum/4/config/ref-use-ipv-6) – Affects the selection of IPv6 hosts in the SMTP client | sending | false | 4.0 and later | global |
| [use_mmap](/momentum/4/config/ref-use-mmap) – Use mmap when spooling messages from disk | na | false | 4.0 and later | global |
| [use_sendfile](/momentum/4/config/ref-use-sendfile) – Use sendfile() when sending mail | sending | false | 4.0 and later | global |
| **use_ssl** – Whether or not to use SSL verification | receiving | false | 4.0 and later | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| [user](/momentum/4/config/ref-user) – User identity to assume after startup | na | ecuser (*non-dynamic*) | 4.0 and later | security |
| [view_balance_interval](/momentum/4/modules/4-modules-cluster#option.view_balance_interval) – How often DuraVIP™ views are subject to balancing (cluster-specific) | na | 10 | 4.0 and later | cluster |
| [view_broadcast_interval](/momentum/4/modules/4-modules-cluster#option.view_broadcast_interval) – How often to speculatively broadcast a view announcement to the cluster (cluster-specific) | na | 0 | 4.0 and later | cluster |
| [view_mature_time](/momentum/4/modules/4-modules-cluster#option.view_mature_time) – How long a DuraVIP™ view needs to remain unchanged before considering it "mature" (cluster-specific) | na | 5 | 4.0 and later | cluster |
| [warning](/momentum/4/config/ref-debug-flags) – Set the debug level | na |   | 4.0 and later | debug_flags |
| [trap_interval](/momentum/4/config/ref-snmp#conf.ref.snmp.watch_interval) – Interval for watched system variables for SNMP traps | na | 10 (*non-dynamic*) | 4.0 and later | snmp_traps |
| [watch_variables](/momentum/4/config/ref-snmp#conf.ref.snmp.watch_variables) – SNMP traps watch variables | na | (*non-dynamic*) | 4.0 and later | snmp_traps |
| [xclient](/momentum/4/config/ref-xclient) – Use the XCLIENT extension to SMTP for outbound mail | sending | no | 4.0 and later | binding, binding_group, domain, global |
| [xmpp_dialback_secret](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Use when verifying the XMPP server dialback key (Mobile Momentum) | both |   | 4.0 and later | domain |
| [xmpp_listener](/momentum/mobile/mobile-reference/mobility-xmpp-modules#modules.xmpp.xmpp_listener) *(scope)* – The listener for incoming XMPP connections (Mobile Momentum) | receiving |   | 4.0 and later | global |
| [xmpp_role](/momentum/mobile/mobile-reference/mobility-xmpp-modules#mobility.xmpp.modules.xmpp_role) – Define whether a domain is an XMPP server or client (Mobile Momentum) | both |   | 4.0 and later | domain |
