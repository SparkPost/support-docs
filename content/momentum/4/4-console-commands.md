---
lastUpdated: "03/26/2020"
title: "Console Commands Summary"
description: "This table lists all console commands alphabetically giving a brief description Click the command name to see detailed information A module name appears in the Module column for commands that are module specific For module specific commands to work you must have the module loaded Table 67 1 All console..."
---

This table lists all console commands alphabetically giving a brief description. Click the command name to see detailed information. A module name appears in the `Module` column for commands that are module-specific. For module-specific commands to work, you must have the module loaded.

<a name="All-console-table"></a> 


| Command/Description | Version | Module | Class |
| --- | --- | --- | --- |
| [\pager](/momentum/4/console-commands/pager) – Page output of long console commands in the console | 4.0 |   | misc |
| [active](/momentum/4/console-commands/active) – Show domains with active queue size bigger than threshold | 4.0 |   | queue size |
| [adaptive list](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Display the value of shaping parameters | 4.0 | adaptive | module |
| [adaptive override](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Override a suspension | 4.0 | adaptive | module |
| [adaptive reset](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Clear the values of the shaping parameters | 4.0 | adaptive | module |
| [adaptive rules](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Display the adaptive rules that are in effect for the specified domain/binding pair | 4.0 | adaptive | module |
| [adaptive suspensions](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Summarize the suspensions that are currently in effect | 4.0 | adaptive | module |
| [adaptive warmup](/momentum/4/modules/4-adaptive#modules.adaptive.console) – Display the age of bindings from the perspective of the IP Warmup component | 4.0 | adaptive | module |
| [authz id](/momentum/4/console-commands/authz-id) – Display the id of the current user | 4.0 |   | misc |
| [authz roles list](/momentum/4/console-commands/authz-roles-list) – Display the currently defined roles | 4.0 |   | misc |
| [beik reload](/momentum/4/modules/beik#modules.beik.console) – Reload the beik module | 4.0 | beik | module |
| [binding active](/momentum/4/console-commands/binding-active) – Show domains with active queue size bigger than threshold on a specified binding | 4.0 |   | queue size |
| [binding delayed](/momentum/4/console-commands/binding-delayed) – Show domains with delayed queue size bigger than threshold on a specified binding | 4.0 |   | queue size |
| [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet) – Fail messages for a domain on a binding without generating bounces | 4.0 |   | queue admin |
| [binding fail domain](/momentum/4/console-commands/binding-fail-domain) – Fail messages for a domain on a binding with a bounce message | 4.0 |   | queue admin |
| [binding flush domain](/momentum/4/console-commands/binding-flush-domain) – Perform delivery attempt on delayed queue of a domain on a binding | 4.0 |   | queue admin |
| [binding summary](/momentum/4/console-commands/binding-summary) – Show binding statistics | 4.0 |   | stats |
| [bounce_classifier_override reload](/momentum/4/modules/bounce-classifier-override#modules.bounce_classifier_override.console) – Reload the bounce classification overrides | 4.0 | bounce_classifier_override | module |
| [bounce_classifier_override test](/momentum/4/modules/bounce-classifier-override#modules.bounce_classifier_override.console) – Test the classification of an SMTP reply | 4.0 | bounce_classifier_override | module |
| [bounce_logger:instance_name reopen logs](/momentum/4/modules/bounce-logger#modules.bounce_logger.console) – Reopen the log files | 4.0 | bounce_logger | module |
| [cache list](/momentum/4/console-commands/cache-list) – List all caches along with their associated attributes | 4.0 |   | stats |
| [cache stat](/momentum/4/console-commands/cache-stat) – Show detailed cache statistics for the specified cache | 4.0 |   | stats |
| [cache stats](/momentum/4/console-commands/cache-stats) – Show cache statistics | 4.0 |   | stats |
| [cidrdb list](/momentum/4/modules/cidrdb#modules.cidrdb.console) – List configured CIDR databases | 4.0 | cidrdb | module |
| [cidrdb reload](/momentum/4/modules/cidrdb#modules.cidrdb.console) – Reload a cidrdb list | 4.0 | cidrdb | module |
| [cloudmark version](/momentum/4/modules/cloudmark#modules.cloudmark.console) – Output the Cloudmark version | 4.0 | cloudmark | module |
| [cluster abort](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Abort the specified job | 4.0 | cluster | module |
| [cluster arp show](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Resolve the MAC addresses of the cluster | 4.0 | cluster | module |
| [cluster duravip announce view](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Announce a view update using the current local view | 4.0 | cluster | module |
| [cluster duravip debug](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Turn DuraVIP™ debugging on or off | 4.0 | cluster | module |
| [cluster duravip move](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Move a binding from one node to another | 4.0 | cluster | module |
| [cluster duravip show](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Show the current state of DuraVIP™ bindings | 4.0 | cluster | module |
| [cluster duravip show tables](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Display the DuraVIP™ state tables in XML format | 4.0 | cluster | module |
| [cluster help](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Display the cluster console commands | 4.0 | cluster | module |
| [cluster info](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Display the current operating status and parameters | 4.0 | cluster | module |
| [cluster membership](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Display the current cluster nodes | 4.0 | cluster | module |
| [cluster nodeaddr](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Show the cluster protocol service address | 4.0 | cluster | module |
| [cluster nodename](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Show the name of the local node | 4.0 | cluster | module |
| [cluster reset](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Reset the node cluster membership | 4.0 | cluster | module |
| [cluster shared list](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – This command displays the currently managed objects | 4.0 | cluster | module |
| [cluster shared show](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Display shared objects | 4.0 | cluster | module |
| [cluster show logs](/momentum/4/modules/4-modules-cluster#modules.cluster.console) – Show the size, name and location of the cluster logs | 4.0 | cluster | module |
| [commtouch_ctasd:instance_name pending](/momentum/4/modules/commtouch#modules.commtouch.console) – Output the number of pending jobs | 4.0 | commtouch_ctasd | module |
| [config begin from scratch](/momentum/4/console-commands/config) – Begin a transaction from scratch | 4.0 |   | config |
| [config begin](/momentum/4/console-commands/config) – Begin a transaction | 4.0 |   | config |
| [config commit](/momentum/4/console-commands/config) – Commit a transaction | 4.0 |   | config |
| [config eval](/momentum/4/console-commands/config) – Determine configuration value | 4.0 |   | config |
| [config get](/momentum/4/console-commands/config) – Get configuration setting | 4.0 |   | config |
| [config locate](/momentum/4/console-commands/config) – Locate a specific scope | 4.0 |   | config |
| [config reload](/momentum/4/console-commands/config) – Reload configuration options from file | 4.0 |   | config |
| [config replay](/momentum/4/console-commands/config) – Show changes in a transaction | 4.0 |   | config |
| [config rollback](/momentum/4/console-commands/config) – Rollback a transaction | 4.0 |   | config |
| [config set](/momentum/4/console-commands/config) – Set configuration option | 4.0 |   | config |
| [config show](/momentum/4/console-commands/config) – Show a specific scope | 4.0 |   | config |
| [config showrecurse](/momentum/4/console-commands/config) – Show a specific scope and its child scopes | 4.0 |   | config |
| [config unset](/momentum/4/console-commands/config) – Unset configuration option | 4.0 |   | config |
| [config writeback](/momentum/4/console-commands/config) – Write configuration changes to ecelerity.conf | 4.0 |   | config |
| [count](/momentum/4/console-commands/count) – Count open connections | 4.0 |   | connections |
| [counter add](/momentum/4/console-commands/counter) – Add the specified amount to a counter | 4.0 |   | policy |
| [counter help](/momentum/4/console-commands/counter) – Display help for the counter command | 4.0 |   | policy |
| [counter increment](/momentum/4/console-commands/counter) – Increment a counter | 4.0 |   | policy |
| [counter list](/momentum/4/console-commands/counter) – List all counters counter | 4.0 |   | policy |
| [counter reset](/momentum/4/console-commands/counter) – Reset a counter to zero | 4.0 |   | policy |
| [counter unlink](/momentum/4/console-commands/counter) – Unlink a counter | 4.0 |   | policy |
| [delay_dsn:instance_name show pending events](/momentum/4/modules/delay-dsn#modules.delay_dsn.console) – List all pending events | 4.0 | delay_dsn | module |
| [delayed](/momentum/4/console-commands/delayed) – Show domains with delayed queue size bigger than threshold | 4.0 |   | queue admin |
| [dig](/momentum/4/console-commands/dig) – Submit a domain for dns MX query | 4.0 |   | dns |
| [dk_sign:instance_name flush keycache](/momentum/4/modules/domainkeys#modules.domainkeys.console) – Flush all entries from the keycache | 4.0 | domainkeys | module |
| [dk_sign:instance_name stats](/momentum/4/modules/domainkeys#modules.domainkeys.console) – Display statistics relating to domain key signing | 4.0 | domainkeys | module |
| [dns_cache lookup](/momentum/4/console-commands/dns-cache) – Look up a query in the DNS cache | 4.0 |   | dns |
| [dns_cache refcnts](/momentum/4/console-commands/dns-cache) – Show the references in the DNS cache | 4.0 |   | dns |
| [dns_cache stats](/momentum/4/console-commands/dns-cache) – Show summary stats for the DNS cache | 4.0 |   | dns |
| [dns_cache submit](/momentum/4/console-commands/dns-cache) – Submit a DNS query | 4.0 |   | dns |
| [dnsbuf interval](/momentum/4/modules/dnsbuf#modules.dnsbuf.console) – Change how often setsockopt() operations are performed | 4.2 | dnsbuf | module |
| [dnsbuf rcvbuf_size](/momentum/4/modules/dnsbuf#modules.dnsbuf.console) – Change the rcvbuf_size value on the fly | 4.2 | dnsbuf | module |
| [dnsbuf sndbuf_size](/momentum/4/modules/dnsbuf#modules.dnsbuf.console) – Change the sndbuf_size value on the fly | 4.2 | dnsbuf | module |
| [dnsbuf verify](/momentum/4/modules/dnsbuf#modules.dnsbuf.console) – Query active sockets for current buffer sizes and report the results | 4.2 | dnsbuf | module |
| [domain all](/momentum/4/console-commands/domain-all) – Show statistics for all domains | 4.0 |   | stats |
| [domain](/momentum/4/console-commands/domain) – Show domain statistics | 4.0 |   | stats |
| [ds_core flush cache_name](/momentum/4/modules/ds-core#modules.ds_core.console) – Flush a specific cache | 4.0 | ds_core | module |
| [ds_core stats](/momentum/4/modules/ds-core#modules.ds_core.console) – Print stats for each cache | 4.0 | ds_core | module |
| [ds_ldap flush connection cache](/momentum/4/modules/ds-core#modules.ds_ldap.console) – Remove all entries from the connection cache | 4.0 | ds_ldap | module |
| [ds_ldap show connection cache stats](/momentum/4/modules/ds-core#modules.ds_ldap.console) – Output statistics relating to the connection cache | 4.0 | ds_ldap | module |
| [ec_logger:instance_name help](/momentum/4/modules/ec-logger#modules.ec_logger.console) – Display the available commands | 4.0 | ec_logger | module |
| [ec_logger:instance_name reopen logs](/momentum/4/modules/ec-logger#modules.ec_logger.console) – Close and reopen the logs | 4.0 | ec_logger | module |
| [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet) – Fail messages for a domain without generating bounces | 4.0 |   | misc |
| [fail domain](/momentum/4/console-commands/fail-domain) – Fail messages for a domain with a bounce message | 4.0 |   | misc |
| [fingerprint cache summary](/momentum/4/console-commands/fingerprint-cache-summary) – Display the current cache size | 4.0 | fingerprint | policy |
| [fingerprint rejection summary](/momentum/4/console-commands/fingerprint-rejection-summary) – Display details related to the current inbound connection | 4.0 | fingerprint | policy |
| [flush domain](/momentum/4/console-commands/flush-domain) – Perform delivery attempt on delayed queue of a domain | 4.0 |   | queue admin |
| [help](/momentum/4/console-commands/help) – Show help information for console commands | 4.0 |   | misc |
| [inbound_audit add](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Add a value to a CIDR in a named series | 4.0 | inbound_audit | module |
| [inbound_audit count_cidr](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Count a CIDR in a named series | 4.0 | inbound_audit | module |
| [inbound_audit delete_ip](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Delete an IP from a defined named series | 4.0 | inbound_audit | module |
| [inbound_audit help](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Display the available commands | 4.0 | inbound_audit | module |
| [inbound_audit load](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Load a series from a file | 4.0 | inbound_audit | module |
| [inbound_audit show all](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Display verbose statistics for all domains as a CSV list | 4.0 | inbound_audit | module |
| [inbound_audit show ip](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) --> – Dump all collected time-series data for the specified IP/netblock | 4.0 | inbound_audit | module |
| [inbound_audit subtract](/momentum/4/modules/inbound-audit#modules.inbound_audit.console) – Subtract a value from a CIDR in a named series | 4.0 | inbound_audit | module |
| [mailq](/momentum/4/console-commands/4-mailq) – Show the status of the mail queues | 4.0 |   | stats |
| [memory](/momentum/4/console-commands/4-memory) – Report detailed memory usage | 4.0 |   | stats |
| [message details](/momentum/4/console-commands/message-details) – Show detailed message information | 4.0 |   | message |
| [message fail quiet](/momentum/4/console-commands/message-fail-quiet) – Fail a message and do not create a non-delivery receipt (NDR) | 4.0 |   | message |
| [message fail](/momentum/4/console-commands/message-fail) – Fail a message | 4.0 |   | message |
| [message retry](/momentum/4/console-commands/message-retry) – Perform an immediate delivery attempt on a message | 4.0 |   | message |
| [module hooks](/momentum/4/console-commands/4-module) – Manage loaded module hooks | 4.0 |   | module |
| [module list](/momentum/4/console-commands/4-module) – Show loaded modules | 4.0 |   | module |
| [outbound_audit:instance_name clear all](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Zero-out all statistics | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name clear domain](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Zero-out a domain's statistics | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name domain_list](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Runtime addition/deletion of a domain in the monitoring list | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show all](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Dump all collected time-series data for all collected domains | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show domain](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Dump all collected time-series data for the specified domain | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show domains](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – List the names of all domains which have collected data | 4.0 | outbound_audit | module |
| [outbound_audit:instance_name show global](/momentum/4/modules/outbound-audit#modules.outbound_audit.console) – Show the global (aggregated) time-series data | 4.0 | outbound_audit | module |
| [paniclog](/momentum/4/console-commands/paniclog) – Show last several entries written to paniclog | 4.0 |   | logs |
| [pid](/momentum/4/console-commands/pid) – Show process id of Momentum | 4.0 |   | misc |
| [rebind](/momentum/4/console-commands/rebind) – Rebind the messages in a binding or domain | 4.0 |   | queue admin |
| [refresh domain](/momentum/4/console-commands/refresh-domain) – Refresh the DNS information for a domain | 4.0 |   | dns |
| [reopen logs](/momentum/4/console-commands/reopen-logs) – Close and open log files | 4.0 |   | logs |
| [reroute queue](/momentum/4/console-commands/reroute-queue) – Move messages from queues of one domain to queues of the other | 4.0 |   | queue admin |
| [sched at](/momentum/4/modules/sched#modules.sched.console) – Create a recurrent command that repeats at the specified interval | 4.0 | sched | module |
| [sched delete](/momentum/4/modules/sched#modules.sched.console) – Delete a scheduled job | 4.0 | sched | module |
| [sched every](/momentum/4/modules/sched#modules.sched.console) – Create a recurrent command that repeats at the specified interval | 4.0 | sched | module |
| [sched in](/momentum/4/modules/sched#modules.sched.console) – Run a command at the specified number of seconds from the current time | 4.0 | sched | module |
| [sched list](/momentum/4/modules/sched#modules.sched.console) – List any scheduled tasks | 4.0 | sched | module |
| [show inbound](/momentum/4/console-commands/show-inbound) – Show all inbound connections | 4.0 |   | connections |
| [show outbound](/momentum/4/console-commands/show-outbound) – Show all outbound connections | 4.0 |   | connections |
| [showqueue](/momentum/4/console-commands/showqueue) – Show queue information | 4.0 |   | queue admin |
| [shutdown](/momentum/4/console-commands/shutdown) – Shutdown Momentum | 4.0 |   | misc |
| [signing_stats reset](/momentum/4/console-commands/signing-stats-reset) – Reset signing stats | 4.0 | domainkeys or opendkim | stats |
| [signing_stats](/momentum/4/console-commands/signing-stats) – Show DK/DKIM signing stats | 4.0 | domainkeys or opendkim | stats |
| [sp_async](/momentum/4/console-commands/sp-async) – Access the asynchronous I/O subsystem | 4.0 |   | misc |
| [spool import_poll](/momentum/4/console-commands/spool-import-poll) – Check the status of a spool that is being imported | 4.0 |   | misc |
| [spool import](/momentum/4/console-commands/spool-import) – Import an alternative spool | 4.0 |   | resource |
| [spool_in](/momentum/4/console-commands/spool-in) – Read a message from the spool to the mail queue | 4.0 |   | message |
| [summary reset](/momentum/4/console-commands/summary-reset) – Reset summary statistics | 4.0 |   | stats |
| [summary](/momentum/4/console-commands/summary) – Show global metrics | 4.0 |   | stats |
| [sysinfo](/momentum/4/console-commands/sysinfo) – Show system information | 4.0 |   | misc |
| [threads cpu queue](/momentum/4/console-commands/threads) – Display summary statistics for the CPU thread pools | 4.0 |   | stats |
| [threads io queue](/momentum/4/console-commands/threads) – Display summary statistics for the IO thread pools | 4.0 |   | stats |
| [threads stats](/momentum/4/console-commands/threads) – Display summary statistics for thread pools | 4.0 |   | stats |
| [tls flush cache](/momentum/4/console-commands/tls) – Flush the TLS cache | 4.0 |   | tls |
| [tls rekey](/momentum/4/console-commands/tls) – Remove the temporary RSA key | 4.0 |   | tls |
| [tls show cache](/momentum/4/console-commands/tls) – Show the TLS cache | 4.0 |   | tls |
| [trace smtp add](/momentum/4/console-commands/trace-smtp) – Add an SMTP trace | 4.0 |   | misc |
| [trace smtp list](/momentum/4/console-commands/trace-smtp) – List smtp traces | 4.0 |   | misc |
| [trace smtp remove](/momentum/4/console-commands/trace-smtp) – Remove an SMTP trace | 4.0 |   | misc |
| [unlink stats](/momentum/4/console-commands/unlink-stats) – Show statistics of removing messages from the disk | 4.0 |   | stats |
| [version](/momentum/4/console-commands/version) – Show version information of Momentum | 4.0 |   | misc |
| [write config](/momentum/4/console-commands/write-config) – Display current running configuration | 4.0 |   | config |