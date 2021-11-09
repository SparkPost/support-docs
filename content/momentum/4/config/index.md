---
lastUpdated: "09/14/2021"
title: "Category File"
type: "custom"
name: "Configuration Options Reference"
description: "This chapter provides the definitions of the configuration options for the configuration files that are referenced in this document Most options that are common to Momentum 4 and Momentum 3 are documented in the Momentum 3 x Reference Manual See the Chapter 66 Configuration Options Summary..."
---


| Name | Description |
| ---- | ----------- |
| [adaptive_backstore_leveldb](/momentum/4/config/ref-adaptive-backstore-leveldb) | use LevelDB as the backing store for Adaptive Delivery |
| [adaptive_backstore_riak](/momentum/4/config/ref-adaptive-backstore-riak) | set characteristics of the Riak backing store |
| [adaptive_enabled](/momentum/4/config/ref-adaptive-enabled) | enable or disable the adaptive module |
| [adaptive_scope](/momentum/4/config/ref-adaptive-scope) | define the scope applicable to adaptive delivery (AD) |
| [address_metrics_cleanse_interval](/momentum/4/config/ref-address-metrics-cleanse-interval) | the interval for refreshing address metrics |
| [address_metrics_lifetime](/momentum/4/config/ref-address-metrics-lifetime) | the TTL of address metrics |
| [alias_schemes](/momentum/4/config/ref-alias-schemes) | enable named alias expansion schemes |
| [allow_ip_literal](/momentum/4/config/ref-allow-ip-literal) | allow IP addresses in email addresses |
| [allow_null_envelope_sender](/momentum/4/config/ref-allow-null-envelope-sender) | allow the null envelope sender in e-mail addresses |
| [allow_trailing_whitespace_in_commands](/momentum/4/config/ref-allow-trailing-whitespace-in-commands) | permit trailing whitespace at the end of an SMTP command |
| [async_bounce_rendering](/momentum/4/config/ref-async-bounce-rendering) | which thread pool to use for bounce rendering |
| [authorization](/momentum/4/config/ref-authorization) | configure the console commands applicable to users |
| [bind_address](/momentum/4/config/ref-bind-address) | source address for outbound connections |
| [binding](/momentum/4/config/ref-binding) | configure binding specific options |
| [binding_auto_replumb](/momentum/4/config/ref-binding-auto-replumb) | enable or disable the auto replumber |
| [binding_auto_replumb_interval](/momentum/4/config/ref-binding-auto-replumb-interval) | sets the time interval to check the plumbed state of statically plumbed bindings |
| [binding_group](/momentum/4/config/ref-binding-group) | logically group a set of bindings |
| [blackhole](/momentum/4/config/ref-blackhole) | blackhole mail |
| [body_timeout](/momentum/4/config/ref-body-timeout) | network timeout once the DATA phase is complete |
| [bounce_behavior](/momentum/4/config/ref-bounce-behavior) | configure the action taken when a message is classified as a bounce |
| [bounce_domains](/momentum/4/config/ref-bounce-domains) | configure the list of domains eligible for bounce processing by Momentum. |
| [bounce_pattern](/momentum/4/config/ref-bounce-pattern) | configure the pattern that inbound email addresses must match in order to be considered bounces. |
| [bounce_suppress_list](/momentum/4/config/ref-bounce-suppress-list) | configure a list of email addresses that may not be considered original recipients. |
| [bounces_inline_original](/momentum/4/config/ref-bounces-inline-original) | how much of the original message to include in MDNs |
| [capabilities](/momentum/4/config/ref-capabilities) | selectively retain "root" capabilities |
| [chroot](/momentum/4/config/ref-chroot) | chroot to a secure environment |
| [clear_mail_queue_maintainers](/momentum/4/config/ref-clear-mail-queue-maintainers) | reschedule the mail queue maintainer |
| [click_tracking_enabled](/momentum/4/config/click-tracking-enabled) | enable or disable click tracking for SMTP injections |
| [click_tracking_scheme](/momentum/4/config/click-tracking-scheme) | set the hyperlink scheme to use for click tracking links in SMTP injections |
| [cluster_max_outbound_connections](/momentum/4/config/ref-cluster-max-outbound-connections) | set the maximum number of outbound connections for a scope and enforce it across a cluster |
| [cluster_outbound_throttle_connections](/momentum/4/config/ref-cluster-outbound-throttle-connections) | limit the rate at which connections are established, and enforce it across a cluster of systems |
| [cluster_outbound_throttle_messages](/momentum/4/config/ref-cluster-outbound-throttle-messages) | limit the rate at which messages are delivered, and enforce it across the cluster |
| [cluster_scope_max_outbound_connections](/momentum/4/config/ref-cluster-scope-max-outbound-connections) | provide traffic shaping for outbound connections in a cluster configuration |
| [cluster_server_max_outbound_connections](/momentum/4/config/ref-cluster-server-max-outbound-connections) | set the maximum number of outbound connections, and enforce it across a cluster |
| [connect_timeout](/momentum/4/config/ref-connect-timeout) | set the connection timeout |
| [connect_timeout_to_delay](/momentum/4/config/ref-connect-timeout-to-delay) | time interval before sweeping mail into the delayed queue |
| [connection_allocation_aggressiveness](/momentum/4/config/ref-connection-allocation-aggressiveness) | tune the aggressiveness for establishing new connections to domains |
| [context](/momentum/4/config/ref-context) | use to set arbitrary connection context key value pairs. |
| [control_client_timeout](/momentum/4/config/ref-control-client-timeout) | network timeout for Momentum control client connections |
| [crypto_engine](/momentum/4/config/ref-crypto-engine) | enable hardware cryptography acceleration |
| [crypto_lock_method](/momentum/4/config/crypto-lock-method) | set the locking method used by the TLS layer |
| [debug_flags](/momentum/4/config/ref-debug-flags) | configure debug verbosity |
| [default_binding](/momentum/4/config/ref-default-binding) | control usage of the "default" binding |
| [default_charset](/momentum/4/config/ref-default-charset) | control usage of the "default" character set |
| [delay_dsn_max_retry_interval](/momentum/4/config/ref-delay-dsn-max-retry-interval) | maximum interval for sending DSNs to the sender of a message that has not yet been delivered |
| [delay_dsn_retry_interval](/momentum/4/config/ref-delay-dsn-retry-interval) | base interval for sending DSNs to the sender of a message that has not yet been delivered |
| [delayed_binding_domain_fuzz](/momentum/4/config/ref-delayed-binding-domain-fuzz) | length of time to spread scheduled messages over when a bulk requeue is necessary |
| [delayed_queue_scan_interval](/momentum/4/config/ref-delayed-queue-scan-interval) | how often to call the maintainer for a domain |
| [delivery_method](/momentum/4/config/ref-delivery-method) | set the delivery method |
| [delivery_pool](/momentum/4/config/ref-delivery-pool) | associate a pool of event loops with email delivery to use multiple threads |
| [delivery_response_timeout](/momentum/4/config/ref-delivery-response-timeout) | time to wait for a response to an outbound request |
| [disable_nagle_algorithm](/momentum/4/config/ref-disable-nagle-algorithm) | disable nagle algorithm on sockets |
| [disk_queue_drain_rate](/momentum/4/config/ref-disk-queue-drain-rate) | control the rate at which messages are spooled in on start-up |
| [dns_cache_purge_interval](/momentum/4/config/ref-dns-cache-purge-interval) | how often the DNS response cache is scanned for stale entries |
| [dns_expire_interval](/momentum/4/config/ref-dns-expire-interval) | how often to check for domains with expired DNS information |
| [dns_failures_to_purge](/momentum/4/config/ref-dns-failures-to-purge) | configure the maximum number of DNS lookups |
| [dns_fallback_to_tcp](/momentum/4/config/ref-dns-fallback-to-tcp) | whether or not to fail over to TCP in place of UDP |
| [domain_for_unqualified_recipient_addresses](/momentum/4/config/ref-domain-for-unqualified-recipient-addresses) | configure a domain which will be used to resolve delivery for unqualified addresses |
| [domain_for_unqualified_sender_address](/momentum/4/config/ref-domain-for-unqualified-sender-address) | configure a domain which will be used to substitute for unqualified sender addresses |
| [domain](/momentum/4/config/ref-domain) | configure domain specific options |
| [domainkeys](/momentum/4/config/ref-domainkeys) | enable or disable domainkeys signing |
| [drop_body_after_trans_fail](/momentum/4/config/ref-drop-body-after-trans-fail) | number of retry attempts before freeing message memory |
| [ecstream_port](/momentum/4/config/ref-ecstream-port) | configure the port for ecstream deliveries |
| [ecstream_timeout](/momentum/4/config/ref-ecstream-timeout) | the amount of time to wait for an ecstream connection to be established |
| [ehlo_hostname](/momentum/4/config/ref-ehlo-hostname) | set the hostname used for EHLO in outbound mail |
| [ehlo_timeout](/momentum/4/config/ref-ehlo-timeout) | network timeout for EHLO |
| [enable_fbl_header_insertion](/momentum/4/config/ref-enable-fbl-header-insertion) | enable or disable fbl header insertion |
| [event_loop](/momentum/4/config/ref-event-loop) | associate a pool of event loops within a listener scope to use multiple threads |
| [eventloop](/momentum/4/config/ref-eventloop) | define a pool of event loops to enable multiple event loop configuration |
| [events_per_iter](/momentum/4/config/ref-events-per-iter) | employ when using a concurrency greater than 1. |
| [exclude_vctx_conn](/momentum/4/config/ref-exclude-vctx-conn) | exclude validation context keys from being journaled in the spool metadata. |
| [exclude_vctx_mess](/momentum/4/config/ref-exclude-vctx-mess) | exclude validation context keys from being journaled in the spool metadata. |
| [expensive_batch_assessment](/momentum/4/config/ref-expensive-batch-assessment) | only treat messages as different if the headers are rendered differently |
| [force_fsync](/momentum/4/config/ref-force-fsync) | ensure that data is synced to disk on reception |
| [fully_resolve_before_smtp](/momentum/4/config/ref-fully-resolve-before-smtp) | resolve all MX and A records before attempting delivery |
| [gateway](/momentum/4/config/ref-gateway) | configure a static SMTP route for mail |
| [generate_bounces](/momentum/4/config/ref-generate-bounces) | generate MDNs if mail is failed after reception |
| [generate_bounces_for_multi_recipient_policy_rejections](/momentum/4/config/ref-generate-bounces-for-multi-recipient-policy-rejections) | generate MDNs after reception for policy rejections |
| [generate_delay_dsn](/momentum/4/config/ref-generate-delay-dsn) | generate DSNs if mail is delayed |
| [growbuf_size](/momentum/4/config/ref-growbuf-size) | The size of an element in a growbuf chain |
| [host](/momentum/4/config/ref-host) | configure host specific options |
| [hostname](/momentum/4/config/ref-hostname) | override the system configured hostname |
| [host_failure_retry](/momentum/4/config/ref-host-failure-retry) | time to wait before attempting a retry |
| [hot_domains](/momentum/4/config/ref-hot-domains) | list of high-traffic domains that should be spread across maintainer threads |
| [http_basic_auth](/momentum/4/config/ref-http-basic-auth) | Define the user credentials when using basic HTTP authentication |
| [http_host](/momentum/4/config/ref-http-host) | Define the HTTP host |
| [http_method](/momentum/4/config/ref-http-method) | Define the HTTP method to use |
| [http_uri](/momentum/4/config/ref-http-uri) | Define the HTTP URI that you wish to connect to |
| [http_version](/momentum/4/config/ref-http-version) | Define the HTTP version to use |
| [idle_timeout](/momentum/4/config/ref-idle-timeout) | time to maintain idle outbound connections |
| [inbound_throttle_messages](/momentum/4/config/ref-inbound-throttle-messages) | rate limit inbound mail |
| [initial_hash_buckets](/momentum/4/config/ref-initial-hash-buckets) | Set the number of hash buckets used by the system |
| [inline_transfail_processing](/momentum/4/config/ref-inline-transfail-processing) | how to handle transient failure processing |
| [keep_message_dicts_in_memory](/momentum/4/config/ref-keep-message-dicts-in-memory) | preserve memory representation of metadata when memory is low |
| [large_message_threshold](/momentum/4/config/ref-large-message-threshold) | Consider a message large when its size exceeds this amount |
| [legacy_message_threshold](/momentum/4/config/ref-legacy-message-threshold) | The maximum size allowed for messages being passed to legacy modules |
| [license](/momentum/4/config/ref-license) | specify an alternate license location |
| [lmtp_port](/momentum/4/config/ref-lmtp-port) | configure the port for LMTP deliveries |
| [local_changes_file](/momentum/4/config/ref-local-changes-file) | the file for writing local configuration changes |
| [local_changes_only](/momentum/4/config/ref-local-changes-only) | whether there is a file for writing local configuration changes |
| [mail_queue_check_vm_interval](/momentum/4/config/ref-mail-queue-check-vm-interval) | how often to apply memory management reduction on mail queues |
| [mailerdaemon](/momentum/4/config/ref-mailerdaemon) | set the From: address for MDNs |
| [mailfrom_timeout](/momentum/4/config/ref-mailfrom-timeout) | timeout after MAIL FROM |
| [maintainer_pool](/momentum/4/config/ref-maintainer-pool) | associate a pool of event loops with mail queues, DNS lookup, and module events to use multiple threads |
| [malloc2mmap_threshold](/momentum/4/config/ref-malloc-2-mmap-threshold) | use mmap when allocations exceed this amount |
| [masterdb_file](/momentum/4/config/ref-masterdb-file) | specify an alternate path for the statistics permastore |
| [match_cache_life](/momentum/4/config/ref-match-cache-life) | set the maximum number of seconds that the match cache will be valid |
| [match_cache_size](/momentum/4/config/ref-match-cache-size) | the size of the cache that holds the results of looking up matching scopes |
| [max_deliveries_per_connection](/momentum/4/config/ref-max-deliveries-per-connection) | maximum number of messages to deliver before closing a connection |
| [max_dns_ttl](/momentum/4/config/ref-max-dns-ttl) | set the maximum DNS TTL |
| [max_outbound_connections](/momentum/4/config/ref-max-outbound-connections) | set the maximum number of outbound connections for a domain |
| [max_recipients_per_batch](/momentum/4/config/ref-max-recipients-per-batch) | maximum number of recipients to send in a single outbound message transaction |
| [max_request_size](/momentum/4/config/max-request-size) | maximum size of an HTTP request |
| [max_resident_active_queue](/momentum/4/config/ref-max-resident-active-queue) | threshold above which messages are not held in memory |
| [max_resident_messages](/momentum/4/config/ref-max-resident-messages) | threshold above which messages are not held in memory |
| [max_resident_transfails](/momentum/4/config/ref-max-resident-transfails) | the threshold for swapping transient failures out of memory |
| [swap_out_meta_after_each_tempfail](/momentum/4/config/ref-swap-out-meta-after-each-tempfail) | controls whether or not Momentum will update metadata such as num_retries, next_attempt, and message context on disk after each tempfail. |
| [max_retries](/momentum/4/config/ref-max-retries) | override the system configured max_retries |
| [max_retry_interval](/momentum/4/config/ref-max-retry-interval) | maximum retry interval |
| [max_timed_events_per_iter](/momentum/4/config/ref-max-timed-events-per-iter) | the maximum numer of timed events per scheduler iteration |
| [mdn_failures_notify](/momentum/4/config/ref-mdn-failures-notify) | mailbox to which to send null recipient MDNs |
| [memory_goal](/momentum/4/config/ref-memory-goal) | configure physical memory usage goal |
| [memory_hwm](/momentum/4/config/ref-memory-hwm) | configure physical memory usage high-water mark |
| [message_expiration](/momentum/4/config/ref-message-expiration) | the time to live for messages |
| [migrate_connections_between_sibling_domains](/momentum/4/config/ref-migrate-connections-between-sibling-domains) | optimize connections for sibling domains |
| [mime_parse_large_messages_during_reception](/momentum/4/config/ref-mime-parse-large-messages-during-reception) | configure whether large messages are parsed upon reception or just in time. |
| [min_dns_ttl](/momentum/4/config/ref-min-dns-ttl) | override DNS TTLs smaller than this value |
| [mx_failures_fallback_to_a](/momentum/4/config/ref-mx-failures-fallback-to-a) | configure the maximum number of times an MX lookup will be attempted |
| [mx_failures_to_delay](/momentum/4/config/ref-mx-failures-to-delay) | number of consecutive failures before a domain is auto-delayed |
| [never_attempt_expired_messages](/momentum/4/config/ref-never-attempt-expired-messages) | Never attempt delivery of expired messages |
| [never_retry](/momentum/4/config/ref-never-retry) | whether or not to retry delivery of failed messages |
| [only_use_best_mx_for_relay_domains](/momentum/4/config/ref-only-use-best-mx-for-relay-domains) | If this is set to `true`, only the lowest numerical priority MXs are used when sending to domains listed in `bounce_domains` or `relay_domains`. |
| [open_relay](/momentum/4/config/ref-open-relay) | whether the MTA is an open relay or not |
| [open_tracking_enabled](/momentum/4/config/open-tracking-enabled) | enable or disable open tracking for SMTP injections |
| [open_tracking_scheme](/momentum/4/config/open-tracking-scheme) | set the hyperlink scheme to use for open tracking links in SMTP injections |
| [opendkim_sign](/momentum/4/config/ref-opendkim-sign) | whether or not to enable OpenDKIM signing |
| [outbound_throttle_connections](/momentum/4/config/ref-outbound-throttle-connections) | limit the rate at which connections are established |
| [outbound_throttle_messages](/momentum/4/config/ref-outbound-throttle-messages) | limit the rate at which messages are delivered |
| [pathway](/momentum/4/config/ref-pathway) | a grouping of inbound configuration options |
| [pathway_group](/momentum/4/config/ref-pathway-group) | a container for pathways |
| [pcre_cache_size](/momentum/4/config/ref-pcre-cache-size) | set the maximum size of the ec_pcre_compile cache |
| [pcre_cache_ttl](/momentum/4/config/ref-pcre-cache-ttl) | set the maximum TTL for the ec_pcre_compile cache |
| [permastore_interval](/momentum/4/config/ref-permastore-interval) | the frequency for saving various statistics |
| [pidfile](/momentum/4/config/ref-pidfile) | set the PID file path |
| [prefer_ipv6_mxs](/momentum/4/config/ref-prefer_ipv6_mxs) | prefer IPv6 addresses over ipv4 at a given mx priority level |
| [prohibited_hosts](/momentum/4/config/ref-prohibited-hosts) | prevent mail from being delivered to invalid destinations |
| [rcptto_timeout](/momentum/4/config/ref-rcptto-timeout) | timeout after RCPT TO |
| [relay_for_sending_domains](/momentum/4/config/ref-relay-for-sending-domains) | domains that may use the MTA as a relay. |
| [relay_domains](/momentum/4/config/ref-relay-domains) | configure the list of domains for which Momentum relays mail |
| [relay_hosts](/momentum/4/config/ref-relay-hosts) | configure the list of hosts for which Momentum relays mail |
| [remote_smtp_port](/momentum/4/config/ref-remote-smtp-port) | set the port to be used for SMTP deliveries |
| [require_ehlo](/momentum/4/config/ref-require-ehlo) | reject mail from clients that don't say HELO |
| [reserve_maintenance_interval](/momentum/4/config/ref-reserve-maintenance-interval) | how often to perform mail queue maintenance |
| [resolv_conf](/momentum/4/config/ref-resolv-conf) | specify a custom resolv.conf |
| [response_transcode_pattern](/momentum/4/config/ref-response-transcode-pattern) | the regex pattern for comparison to a server response |
| [response_transcode_replace](/momentum/4/config/ref-response-transcode-replace) | the replacement string for a server response |
| [retry_interval](/momentum/4/config/ref-retry-interval) | base retry interval |
| [rfc2821_allow_whitespace_in_envelope](/momentum/4/config/ref-rfc-2821-allow-whitespace-in-envelope) | permit trailing whitespace before the final CRLF |
| [rfc2821_pedantic_address_rules](/momentum/4/config/ref-rfc-2821-pedantic-address-rules) | Allow relaxation of enforcement of the rfc2821 address rules. |
| [rfc2822_date_header](/momentum/4/config/ref-rfc-2822-date-header) | rfc2822 conformance |
| [rfc2822_lone_lf_in_body](/momentum/4/config/ref-rfc-2822-lone-lf-in-body) | rfc2822 conformance |
| [rfc2822_lone_lf_in_headers](/momentum/4/config/ref-rfc-2822-lone-lf-in-headers) | rfc2822 conformance |
| [rfc2822_max_line_length](/momentum/4/config/ref-rfc-2822-max-line-length) | rfc2822 conformance |
| [rfc2822_max_line_length_policy](/momentum/4/config/ref-rfc-2822-max-line-length-policy) | determine how non-RFC-compliant line lengths are handled |
| [rfc2822_messageid_header](/momentum/4/config/ref-rfc-2822-messageid-header) | rfc2822 conformance |
| [rfc2822_missing_headers](/momentum/4/config/ref-rfc-2822-missing-headers) | rfc2822 conformance |
| [rfc2822_trace_headers](/momentum/4/config/ref-rfc-2822-trace-headers) | rfc2822 conformance |
| [rollup_mx](/momentum/4/config/ref-rollup-mx) | MX Rollup enable/disable |
| [rollup_mx_name](/momentum/4/config/ref-rollup-mx-name) | MX Rollup routing domain specification |
| [routes](/momentum/4/config/ref-routes) | configure message routing |
| [rset_timeout](/momentum/4/config/ref-rset-timeout) | set the timeout after RSET |
| [scope_max_outbound_connections](/momentum/4/config/ref-scope-max-outbound-connections) | provide traffic shaping for outbound connections |
| [scheduler](/momentum/4/config/ref-scheduler) | override the default IO scheduler |
| [security](/momentum/4/config/ref-security) | Scope for defining which permissions are retained by which user |
| [send_8bitmime](/momentum/4/config/ref-send-8-bitmime) | Enable advertising of 8BITMIME when sending mail |
| [server_max_file_descriptors](/momentum/4/config/ref-server-max-file-descriptors) | sets the maximum number of file descriptors usable by the system |
| [server_max_outbound_connections](/momentum/4/config/ref-server-max-outbound-connections) | sets the maximum number of outbound connections |
| [server_reserve_outbound_connections](/momentum/4/config/ref-server-reserve-outbound-connections) | sets the server-wide connection limit reserve |
| [signing_stats](/momentum/4/config/ref-signing-stats) | control how signing statistics are recorded |
| [siv_throttle_cache_size](/momentum/4/config/ref-siv-throttle-cache-size) | set the maximum number of named throttles |
| [skip_hosts](/momentum/4/config/ref-skip-hosts) | skip the specified host, but consider other hosts in the domain |
| [SNMP](/momentum/4/config/ref-snmp) | Simple Network Management Protocol Support |
| [soft_bounce_drain_rate](/momentum/4/config/ref-soft-bounce-drain-rate) | how many soft bounces to place into the mail queues in a single scheduler iteration |
| [spool_mode](/momentum/4/config/ref-spool-mode) | set the file mode for newly created spool files |
| [spoolbase](/momentum/4/config/ref-spoolbase) | set the base directory for the spool |
| [ssl_lock_method](/momentum/4/config/ssl-lock-method) | the SSL lock method |
| [starttls_injection_policy](/momentum/4/config/starttls-injection-policy) | protect against SMTP injections prior to TLS |
| [supplemental_groups](/momentum/4/config/ref-supplemental-groups) | security: supplemental groups to assume after startup |
| [suspend_delivery](/momentum/4/config/ref-suspend-delivery) | prevent outbound mail delivery |
| [tcp_buffer_size](/momentum/4/config/ref-tcp-buffer-size) | maximum tcp buffer size for outbound connections |
| [threadpool](/momentum/4/config/ref-threadpool) | configure thread pool specific options |
| [timestampformat](/momentum/4/config/ref-timestampformat) | set the timestamp format used when logging to stderr |
| [tls](/momentum/4/config/ref-tls) | determine whether to use TLS connection for outbound mail |
| [tls_allow_renegotiation](/momentum/4/config/tls-allow-renegotiation) | determine whether to enable TLS renegotiation |
| [tls_ca](/momentum/4/config/tls-ca) | certificate authority for outbound mail |
| [tls_certificate](/momentum/4/config/tls-certificate) | certificate to use for inbound and outbound mail |
| [tls_ciphers](/momentum/4/config/tls-ciphers) | specify allowable ciphers for TLS inbound and outbound sessions |
| [tls_client_ca](/momentum/4/config/tls-client-ca) | certificate authority for inbound mail |
| [tls_dhparams_file](/momentum/4/config/ref-tls-dhparams-file) | specifies the file of Diffie Hellman (DHE) parameters that add per-session randomness to the encryption. Default parameters are built in the product if none are specified. |
| [tls_enable_dhe_ciphers](/momentum/4/config/ref-tls-enable-dhe-ciphers) | controls whether or not Diffie Hellman (DHE) ciphers are available |
| [tls_engine](/momentum/4/config/tls-engine) | specify the TLS library to use |
| [tls_ifavailable_fallback](/momentum/4/config/tls-ifavailable-fallback) | determine the behavior if TLS negotiation fails |
| [tls_key](/momentum/4/config/tls-key) | TLS key to use for outbound or inbound mail |
| [tls_protocols](/momentum/4/config/tls-protocols) | allowable ciphers for TLS inbound and outbound sessions |
| [tls_verified_peer_is_authorized](/momentum/4/config/tls-verified-peer-is-authorized) | Marks requests that use a verified SSL Client certificate as being authorized |
| [tls_verify](/momentum/4/config/tls-verify) | specify how to handle the remote presented certificate |
| [tls_verify_mode](/momentum/4/config/tls-verify-mode) | determine whether a TLS certificate is required |
| [trace_smtp_mode](/momentum/4/config/ref-trace-smtp-mode) | set the default permissions of trace files |
| [tracking_domain](/momentum/4/config/tracking-domain) | set the tracking domain to use for engagement tracking in SMTP injections |
| [tracking_link_expiry](/momentum/4/config/tracking-link-expiry) | set the expiration time for engagement tracking for SMTP injections |
| [transfail_drain_rate](/momentum/4/config/ref-transfail-drain-rate) | the maximum number of messages to pop off the transient failure queue in a single scheduler iteration |
| [transform_8bitmime_content](/momentum/4/config/ref-transform-8-bitmime-content) | Enable 8BITMIME downconversion when sending mail |
| [unlink_on_spool_in_failure](/momentum/4/config/ref-unlink-on-spool-in-failure) | Whether or not to remove malformed messages |
| [_unsafe_spool](/momentum/4/config/ref-unsafe-spool) | allow dangerous spool semantics to be used |
| [use_iflist_cache](/momentum/4/config/ref-use-iflist-cache) | Whether or not to cache the list of network interfaces configured by the system |
| [use_ipv6](/momentum/4/config/ref-use-ipv-6) | Affects the selection of IPv6 hosts in the SMTP client |
| [use_mmap](/momentum/4/config/ref-use-mmap) | use mmap when spooling messages from disk |
| [use_sendfile](/momentum/4/config/ref-use-sendfile) | use sendfile() when sending mail |
| [user](/momentum/4/config/ref-user) | security: user identity to assume after startup |
| [xclient](/momentum/4/config/ref-xclient) | use the xclient extension to SMTP for outbound mail |



This chapter provides the definitions of the configuration options for the configuration files that are referenced in this document.

Most options that are common to Momentum 4 and Momentum 3 are documented in the Momentum 3.x Reference Manual. See the [*Configuration Options Summary*](/momentum/4/config-options-summary) .
