---
lastUpdated: "03/26/2020"
title: "System Console Command Summary"
description: "This table lists all system console commands alphabetically giving a brief description Click the command name to see detailed information A check mark appears in the Module column for commands that are module specific For module specific commands to work you must have the module loaded Table 12 1 All..."
---

This table lists all system console commands alphabetically giving a brief description. Click the command name to see detailed information. A check mark appears in the `Module` column for commands that are module-specific. For module-specific commands to work, you must have the module loaded.

<a name="All-console-table"></a> 


| Command/Description | Version | Module | Class |
| --- | --- | --- | --- |
| [\pager](/momentum/3/3-reference/3-reference-console-commands-pager) – Page output of long console commands in the console | 3.0 |   | misc |
| [active](/momentum/3/3-reference/3-reference-console-commands-active) – Show domains with active queue size bigger than threshold | 3.0 |   | queue size |
| [adaptive list](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Display the value of shaping parameters | 3.0 | ✓ | module |
| [adaptive override](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Override a suspension | 3.0 | ✓ | module |
| [adaptive reset](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Clear the values of the shaping parameters | 3.0 | ✓ | module |
| [adaptive rules](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Display the adaptive rules that are in effect for the specified domain/binding pair | 3.0 | ✓ | module |
| [adaptive suspensions](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Summarize the suspensions that are currently in effect | 3.0 | ✓ | module |
| [adaptive warmup](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.console) – Display the age of bindings from the perspective of the IP Warmup component | 3.0 | ✓ | module |
| [authz id](/momentum/3/3-reference/3-reference-console-commands-authz-id) – Display the id of the current user | 3.0 |   | misc |
| [authz roles list](/momentum/3/3-reference/3-reference-console-commands-authz-roles-list) – Display the currently defined roles | 3.0 |   | misc |
| [beik:instance_name reload](/momentum/3/3-reference/3-reference-modules-beik#modules.beik.console) – Reload the beik module | 3.0.26 | ✓ | module |
| [binding active](/momentum/3/3-reference/3-reference-console-commands-binding-active) – Show domains with active queue size bigger than threshold on a specified binding | 3.0 |   | queue size |
| [binding delayed](/momentum/3/3-reference/3-reference-console-commands-binding-delayed) – Show domains with delayed queue size bigger than threshold on a specified binding | 3.0 |   | queue size |
| [binding fail domain quiet](/momentum/3/3-reference/3-reference-console-commands-binding-fail-domain-quiet) – Fail messages for a domain on a binding without generating bounces | 3.0 |   | queue admin |
| [binding fail domain](/momentum/3/3-reference/3-reference-console-commands-binding-fail-domain) – Fail messages for a domain on a binding with a bounce message | 3.0 |   | queue admin |
| [binding flush domain](/momentum/3/3-reference/3-reference-console-commands-binding-flush-domain) – Perform delivery attempt on delayed queue of a domain on a binding | 3.0 |   | queue admin |
| [binding summary](/momentum/3/3-reference/3-reference-console-commands-binding-summary) – Show binding statistics | 3.0 |   | stats |
| [bounce_classifier:instance_name reload](/momentum/3/3-reference/modules-bounce-classifier#modules.bounce_classifier.console) – Reload the bounce classification overrides | 3.0 | ✓ | module |
| [bounce_classifier_override reload](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override#modules.bounce_classifier_override.console) – Reload the bounce classification overrides | 3.1 | ✓ | module |
| [bounce_classifier_override test](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override#modules.bounce_classifier_override.console) – Test the classification of an SMTP reply | 3.5.7 | ✓ | module |
| [bounce_logger:instance_name reopen logs](/momentum/3/3-reference/3-reference-modules-bounce-logger#modules.bounce_logger.console3) – Reopen the log files | 3.0 | ✓ | module |
| [cache list](/momentum/3/3-reference/3-reference-console-commands-cache-list) – List all caches along with their associated attributes | 3.0.26 |   | stats |
| [cache stat](/momentum/3/3-reference/3-reference-console-commands-cache-stat) – Show detailed cache statistics for the specified cache | 3.0.26 |   | stats |
| [cache stats](/momentum/3/3-reference/3-reference-console-commands-cache-stats) – Show cache statistics | 3.0 |   | stats |
| [cidrdb list](/momentum/3/3-reference/3-reference-modules-cidrdb#modules.cidrdb.console) – List configured CIDR databases | 3.0 | ✓ | module |
| [cidrdb reload](/momentum/3/3-reference/3-reference-modules-cidrdb#modules.cidrdb.console) – Reload a cidrdb list | 3.0 | ✓ | module |
| [cloudmark:instance_name version](/momentum/3/3-reference/3-reference-modules-cloudmark#modules.cloudmark.console) – Output the Cloudmark version | 3.0 | ✓ | module |
| [cluster abort](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Abort the specified job | 3.0 | ✓ | module |
| [cluster arp show](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Resolve the MAC addresses of the cluster | 3.0 | ✓ | module |
| [cluster duravip announce view](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Announce a view update using the current local view | 3.0 | ✓ | module |
| [cluster duravip debug](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Turn DuraVIP™ debugging on or off | 3.0 | ✓ | module |
| [cluster duravip move](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Move a binding from one node to another | 3.0 | ✓ | module |
| [cluster duravip show tables](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Display the DuraVIP™ state tables in XML format | 3.0 | ✓ | module |
| [cluster duravip show](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Show the current state of DuraVIP™ bindings | 3.0 | ✓ | module |
| [cluster help](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Display the cluster console commands | 3.0 | ✓ | module |
| [cluster info](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Display the current operating status and parameters | 3.0 | ✓ | module |
| [cluster membership](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Display the current cluster nodes | 3.0 | ✓ | module |
| [cluster nodeaddr](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Show the cluster protocol service address | 3.0 | ✓ | module |
| [cluster nodename](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Show the name of the local node | 3.0 | ✓ | module |
| [cluster reset](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Reset the node cluster membership | 3.0 | ✓ | module |
| [cluster shared list](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – This command displays the currently managed objects | 3.0 | ✓ | module |
| [cluster shared show](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Display shared objects | 3.0 | ✓ | module |
| [cluster show logs](/momentum/3/3-reference/3-reference-cluster-config-replication#cluster.logging.console) – Show the size, name and location of the cluster logs | 3.0 | ✓ | module |
| [commtouch_ctasd:instance_name pending](/momentum/3/3-reference/3-reference-modules-commtouch#modules.commtouch.console) – Output the number of pending jobs | 3.0 | ✓ | module |
| [config begin from scratch](/momentum/3/3-reference/3-reference-console-commands-config) – Begin a transaction from scratch | 3.0 |   | config |
| [config begin](/momentum/3/3-reference/3-reference-console-commands-config) – Begin a transaction | 3.0 |   | config |
| [config commit](/momentum/3/3-reference/3-reference-console-commands-config) – Commit a transaction | 3.0 |   | config |
| [config eval](/momentum/3/3-reference/3-reference-console-commands-config) – Determine configuration value | 3.0 |   | config |
| [config get](/momentum/3/3-reference/3-reference-console-commands-config) – Get configuration setting | 3.0 |   | config |
| [config locate](/momentum/3/3-reference/3-reference-console-commands-config) – Locate a specific scope | 3.0 |   | config |
| [config reload](/momentum/3/3-reference/3-reference-console-commands-config) – Reload configuration options from file | 3.0 |   | config |
| [config replay](/momentum/3/3-reference/3-reference-console-commands-config) – Show changes in a transaction | 3.0 |   | config |
| [config rollback](/momentum/3/3-reference/3-reference-console-commands-config) – Rollback a transaction | 3.0 |   | config |
| [config set](/momentum/3/3-reference/3-reference-console-commands-config) – Set configuration option | 3.0 |   | config |
| [config show](/momentum/3/3-reference/3-reference-console-commands-config) – Show a specific scope | 3.0 |   | config |
| [config showrecurse](/momentum/3/3-reference/3-reference-console-commands-config) – Show a specific scope and its child scopes | 3.0 |   | config |
| [config unset](/momentum/3/3-reference/3-reference-console-commands-config) – Unset configuration option | 3.0 |   | config |
| [config writeback](/momentum/3/3-reference/3-reference-console-commands-config) – Write configuration changes to ecelerity.conf | 3.0 |   | config |
| [count](/momentum/3/3-reference/3-reference-console-commands-count) – Count open connections | 3.0 |   | connections |
| [counter add](/momentum/3/3-reference/3-reference-console-commands-counter) – Add the specified amount to a counter | 3.1 |   | policy |
| [counter help](/momentum/3/3-reference/3-reference-console-commands-counter) – Display help for the counter command | 3.1 |   | policy |
| [counter increment](/momentum/3/3-reference/3-reference-console-commands-counter) – Increment a counter | 3.1 |   | policy |
| [counter list](/momentum/3/3-reference/3-reference-console-commands-counter) – List all counters counter | 3.1 |   | policy |
| [counter reset](/momentum/3/3-reference/3-reference-console-commands-counter) – Reset a counter to zero | 3.1 |   | policy |
| [counter unlink](/momentum/3/3-reference/3-reference-console-commands-counter) – Unlink a counter | 3.1 |   | policy |
| [delay_dsn:instance_name show pending events](/momentum/3/3-reference/3-reference-modules-delay-dsn#modules.delay_dsn.console) – List all pending events | 3.0 | ✓ | module |
| [delayed](/momentum/3/3-reference/3-reference-console-commands-delayed) – Show domains with delayed queue size bigger than threshold | 3.0 |   | queue admin |
| [dig](/momentum/3/3-reference/3-reference-console-commands-dig) – Submit a domain for dns MX query | 3.0 |   | dns |
| [dk_sign:instance_name flush keycache](/momentum/3/3-reference/3-reference-modules-domainkeys#modules.domainkeys.console) – Flush all entries from the keycache | 3.0 | ✓ | module |
| [dk_sign:instance_name stats](/momentum/3/3-reference/3-reference-modules-domainkeys#modules.domainkeys.console) – Display statistics relating to domain key signing | 3.0 | ✓ | module |
| [dkim_sign:instance_name flush keycache](/momentum/3/3-reference/modules-dkim#modules.dkim.console) – Flush all entries from the keycache | 3.0 | ✓ | module |
| [dns_cache lookup](/momentum/3/3-reference/3-reference-console-commands-dns-cache) – Look up a query in the DNS cache | 3.0 |   | dns |
| [dns_cache refcnts](/momentum/3/3-reference/3-reference-console-commands-dns-cache) – Show the references in the DNS cache | 3.0 |   | dns |
| [dns_cache stats](/momentum/3/3-reference/3-reference-console-commands-dns-cache) – Show summary stats for the DNS cache | 3.0 |   | dns |
| [dns_cache submit](/momentum/3/3-reference/3-reference-console-commands-dns-cache) – Submit a DNS query | 3.0 |   | dns |
| [dnsbuf interval](/momentum/3/3-reference/3-reference-modules-dnsbuf#modules.dnsbuf.console) – Change how often setsockopt() operations are performed | 3.6.5 | ✓ | module |
| [dnsbuf rcvbuf_size](/momentum/3/3-reference/3-reference-modules-dnsbuf#modules.dnsbuf.console) – Change the rcvbuf_size value on the fly | 3.6.5 | ✓ | module |
| [dnsbuf sndbuf_size](/momentum/3/3-reference/3-reference-modules-dnsbuf#modules.dnsbuf.console) – Change the sndbuf_size value on the fly | 3.6.5 | ✓ | module |
| [dnsbuf verify](/momentum/3/3-reference/3-reference-modules-dnsbuf#modules.dnsbuf.console) – Query active sockets for current buffer sizes and report the results | 3.6.5 |   | module |
| [domain all](/momentum/3/3-reference/3-reference-console-commands-domain-all) – Show statistics for all domains | 3.0 |   | stats |
| [domain](/momentum/3/3-reference/3-reference-console-commands-domain) – Show domain statistics | 3.0 |   | stats |
| [ds_core flush cache_name](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_core.console) – Flush a specific cache | 3.0 | ✓ | module |
| [ds_core stats](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_core.console) – Print stats for each cache | 3.0 | ✓ | module |
| [ds_ldap flush connection cache](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_ldap.console) – Remove all entries from the connection cache | 3.0 | ✓ | module |
| [ds_ldap show connection cache stats](/momentum/3/3-reference/3-reference-modules-ds-core#modules.ds_ldap.console) – Output statistics relating to the connection cache | 3.0 | ✓ | module |
| [ec_logger:instance_name help](/momentum/3/3-reference/3-reference-modules-ec-logger#modules.ec_logger.console) – Display the available commands | 3.0 | ✓ | module |
| [ec_logger:instance_name reopen logs](/momentum/3/3-reference/3-reference-modules-ec-logger#modules.ec_logger.console) – Close and reopen the logs | 3.0 | ✓ | module |
| [fail domain quiet](/momentum/3/3-reference/3-reference-console-commands-fail-domain-quiet) – Fail messages for a domain without generating bounces | 3.0 |   | misc |
| [fail domain](/momentum/3/3-reference/3-reference-console-commands-fail-domain) – Fail messages for a domain with a bounce message | 3.0 |   | misc |
| [fingerprint cache summary](/momentum/3/3-reference/3-reference-console-commands-fingerprint-cache-summary) – Display the current cache size | 3.0.26 | ✓ | policy |
| [fingerprint rejection summary](/momentum/3/3-reference/3-reference-console-commands-fingerprint-rejection-summary) – Display details related to the current inbound connection | 3.0.26 | ✓ | policy |
| [flush domain](/momentum/3/3-reference/3-reference-console-commands-flush-domain) – Perform delivery attempt on delayed queue of a domain | 3.0 |   | queue admin |
| [help](/momentum/3/3-reference/3-reference-console-commands-help) – Show help information for console commands | 3.0 |   | misc |
| [inbound_audit:instance_name add](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Add a value to a CIDR in a named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name delete_ip](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Delete an IP from a defined named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name help](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Display the available commands | 3.0 | ✓ | module |
| [inbound_audit:instance_name ip](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Count a CIDR in a named series | 3.0 | ✓ | module |
| [inbound_audit:instance_name show all](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Display verbose statistics for all domains as a CSV list | 3.0 | ✓ | module |
| [inbound_audit:instance_name subtract](/momentum/3/3-reference/3-reference-modules-inbound-audit#modules.inbound_audit.console) – Subtract a value from a CIDR in a named series | 3.0 | ✓ | module |
| [mailq](/momentum/3/3-reference/3-reference-console-commands-mailq) – Show the status of the mail queues | 3.0 |   | stats |
| [memory](/momentum/3/3-reference/3-reference-console-commands-memory) – Report detailed memory usage | 3.0 |   | stats |
| [message details](/momentum/3/3-reference/3-reference-console-commands-message-details) – Show detailed message information | 3.0 |   | message |
| [message fail quiet](/momentum/3/3-reference/3-reference-console-commands-message-fail-quiet) – Fail a message and do not create a non-delivery receipt (NDR) | 3.0 |   | message |
| [message fail](/momentum/3/3-reference/3-reference-console-commands-message-fail) – Fail a message | 3.0 |   | message |
| [message retry](/momentum/3/3-reference/3-reference-console-commands-message-retry) – Perform an immediate delivery attempt on a message | 3.0 |   | message |
| [module hooks](/momentum/3/3-reference/3-reference-console-commands-module) – Manage loaded module hooks | 3.0 |   | module |
| [module list](/momentum/3/3-reference/3-reference-console-commands-module) – Show loaded modules | 3.0 |   | module |
| [outbound_audit:instance_name clear all](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Zero-out all statistics | 3.0 | ✓ | module |
| [outbound_audit:instance_name clear domain](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Zero-out a domain's statistics | 3.0 | ✓ | module |
| [outbound_audit:instance_name domain_list](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Runtime addition/deletion of a domain in the monitoring list | 3.0 | ✓ | module |
| [outbound_audit:instance_name show all](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Dump all collected time-series data for all collected domains | 3.0 | ✓ | module |
| [outbound_audit:instance_name show domain](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Dump all collected time-series data for the specified domain | 3.0 | ✓ | module |
| [outbound_audit:instance_name show domains](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – List the names of all domains which have collected data | 3.0 | ✓ | module |
| [outbound_audit:instance_name show global](/momentum/3/3-reference/3-reference-modules-outbound-audit#modules.outbound_audit.console) – Show the global (aggregated) time-series data | 3.0 | ✓ | module |
| [paniclog](/momentum/3/3-reference/3-reference-console-commands-paniclog) – Show last several entries written to paniclog | 3.0 |   | logs |
| [pid](/momentum/3/3-reference/3-reference-console-commands-pid) – Show process id of Momentum | 3.0 |   | misc |
| [rebind](/momentum/3/3-reference/3-reference-console-commands-rebind) – Rebind the messages in a binding or domain | 3.0 |   | queue admin |
| [refresh domain](/momentum/3/3-reference/3-reference-console-commands-refresh-domain) – Refresh the DNS information for a domain | 3.0 |   | dns |
| [reopen logs](/momentum/3/3-reference/3-reference-console-commands-reopen-logs) – Close and open log files | 3.0 |   | logs |
| [reroute queue](/momentum/3/3-reference/3-reference-console-commands-reroute-queue) – Move messages from queues of one domain to queues of the other | 3.0 |   | queue admin |
| [sched at](/momentum/3/3-reference/3-reference-modules-sched#modules.sched.console) – Create a recurrent command that repeats at the specified interval | 3.0 | ✓ | module |
| [sched delete](/momentum/3/3-reference/3-reference-modules-sched#modules.sched.console) – Delete a scheduled job | 3.0 | ✓ | module |
| [sched every](/momentum/3/3-reference/3-reference-modules-sched#modules.sched.console) – Create a recurrent command that repeats at the specified interval | 3.0 | ✓ | module |
| [sched in](/momentum/3/3-reference/3-reference-modules-sched#modules.sched.console) – Run a command at the specified number of seconds from the current time | 3.0 | ✓ | module |
| [sched list](/momentum/3/3-reference/3-reference-modules-sched#modules.sched.console) – List any scheduled tasks | 3.0 | ✓ | module |
| [show inbound](/momentum/3/3-reference/3-reference-console-commands-show-inbound) – Show all inbound connections | 3.0 |   | connections |
| [show outbound](/momentum/3/3-reference/3-reference-console-commands-show-outbound) – Show all outbound connections | 3.0 |   | connections |
| [showqueue](/momentum/3/3-reference/3-reference-console-commands-showqueue) – Show queue information | 3.0 |   | queue admin |
| [shutdown](/momentum/3/3-reference/3-reference-console-commands-shutdown) – Shutdown Momentum | 3.0 |   | misc |
| [signing_stats reset](/momentum/3/3-reference/3-reference-console-commands-signing-stats-reset) – Reset signing stats | 3.0 | ✓ | stats |
| [signing_stats](/momentum/3/3-reference/3-reference-console-commands-signing-stats) – Show DK/DKIM signing stats | 3.0 | ✓ | stats |
| [sp_async](/momentum/3/3-reference/3-reference-console-commands-sp-async) – Access the asynchronous I/O subsystem | 3.0 |   | misc |
| [spool import_poll](/momentum/3/3-reference/3-reference-console-commands-spool-import-poll) – Check the status of a spool that is being imported | 3.0 |   | misc |
| [spool import](/momentum/3/3-reference/3-reference-console-commands-spool-import) – Import an alternative spool | 3.0 |   | resource |
| [spool_in](/momentum/3/3-reference/3-reference-console-commands-spool-in) – Read a message from the spool to the mail queue | 3.0 |   | message |
| [summary reset](/momentum/3/3-reference/3-reference-console-commands-summary-reset) – Reset summary statistics | 3.0 |   | stats |
| [summary](/momentum/3/3-reference/3-reference-console-commands-summary) – Show global metrics | 3.0 |   | stats |
| [sysinfo](/momentum/3/3-reference/3-reference-console-commands-sysinfo) – Show system information | 3.0 |   | misc |
| [threads cpu queue](/momentum/3/3-reference/3-reference-console-commands-threads) – Display summary statistics for the CPU thread pools | 3.0 |   | stats |
| [threads io queue](/momentum/3/3-reference/3-reference-console-commands-threads) – Display summary statistics for the IO thread pools | 3.0 |   | stats |
| [threads stats](/momentum/3/3-reference/3-reference-console-commands-threads) – Display summary statistics for thread pools | 3.0 |   | stats |
| [tls flush cache](/momentum/3/3-reference/3-reference-console-commands-tls) – Flush the TLS cache | 3.0 |   | tls |
| [tls rekey](/momentum/3/3-reference/3-reference-console-commands-tls) – Remove the temporary RSA key | 3.0 |   | tls |
| [tls show cache](/momentum/3/3-reference/3-reference-console-commands-tls) – Show the TLS cache | 3.0 |   | tls |
| [trace smtp add](/momentum/3/3-reference/3-reference-console-commands-trace-smtp) – Add an SMTP trace | 3.0 |   | misc |
| [trace smtp list](/momentum/3/3-reference/3-reference-console-commands-trace-smtp) – List smtp traces | 3.0 |   | misc |
| [trace smtp remove](/momentum/3/3-reference/3-reference-console-commands-trace-smtp) – Remove an SMTP trace | 3.0 |   | misc |
| [unlink stats](/momentum/3/3-reference/3-reference-console-commands-unlink-stats) – Show statistics of removing messages from the disk | 3.0 |   | stats |
| [version](/momentum/3/3-reference/3-reference-console-commands-version) – Show version information of Momentum | 3.0 |   | misc |
| [write config](/momentum/3/3-reference/3-reference-console-commands-write-config) – Display current running configuration | 3.0 |   | config |