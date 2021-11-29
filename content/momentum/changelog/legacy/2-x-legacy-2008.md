---
lastUpdated: "04/08/2020"
title: "Momentum 2.x Legacy Changelog for 2008"
description: "Changelogs for legacy versions of Momentum 2.x"
---

## Ecelerity version 2.2.2.37 released on 2008-12-12
* Fixed ticket #3916: clustered data replication could try to send too much data at once
* Fixed ticket #3929: potential fault with goodmail, dk, dkim modules when processing headers that have non-standard whitespace around the field name.
* Feature ticket #3930: custom_logger: Add %d, %S and %T{N} formats to enable custom logs closer to mainlog format
* Fixed ticket #3940: Control listener does not support asynchronous authentication methods
* Fixed ticket #3943: ds_ldap module could crash on first use if it fails to initialize the connection cache
* Fixed ticket #3947: registering the core_config_get_message_routing_domain hook or core_config_get_message_gateway_into_buffer hook from perl would lead to using uninitialized memory in the perl interpreter
* Fixed ticket #3950: memory leak in Perl interpreter
* Fixed ticket #3952: disallow ec_header_add, ec_header_delete, ec_header_prefix, and ec_header_postfix sieve actions during set_binding phase
* Fixed ticket #3958: memory corruption when duravip_follow is specified
* Fixed ticket #3959: wrong port number passed to log_client_connection_failure and log_client_connection_success hooks
* Fixed ticket #3964: poor eclogmove throughput on high latency links
* Fixed ticket #3965: fix intermittent stack overflow in DuraVIP
* Fixed ticket #3971: SNMP mtaStoredMessages counter may skew over time
* Fixed ticket #3985: spool import can lose large message bodies
* Fixed ticket #3988: Spool in threads are not shutdown gracefully
* Fixed ticket #3989: potential fault when using ec_double_list API
* Fixed ticket #3990: sieve_parse_args flags `*` token as always being optional
* Fixed ticket #3994: SNMP reporting incorrect/missing data
* Feature ticket #4002: make config system cache size and lifetime configurable via the Match_Cache_Size and Match_Cache_Life options
* Feature ticket #4004: Upgrade to latest Cloudmark cartridge
* Fixed ticket #4005: cluster console loses sync if bindings are added or removed
* Fixed ticket #4015: treat zero-length metadata files in the spool as permenent errors
* Fixed ticket #4028: webconsole_debuginfo.txt filling file systems
* Fixed ticket #4035: version panel doesn't show tabs in clusterconsole
* Fixed ticket #4045: some internal domain resolution error codes were missing an [internal] prefix
* Fixed ticket #4051: inbound sessions could stall if the message size tickled a combination of MTU and growbuf boundaries

## Ecelerity version 2.2.2.36 released on 2008-10-28
* Feature ticket #1342: Create cluster aware version of the Queues page
* Fixed ticket #3736: fixed regression with legacy gateway hook
* Fixed ticket #3801: Relay_Hosts option would not render correctly in webconsole
* Fixed ticket #3819: Cluster console gets a SQL error when no nodes are up
* Fixed ticket #3840: missing spool metadata file will cause spool reader to spin on startup
* Feature ticket #3841: Support LOGIN authentication in control listener & ec_console
* Feature ticket #3834: Add the ability for AV modules to include extra 'help' lines on console.
* Fixed ticket #3845: `message retry` did not refresh a domain pointer and could fault
* Feature ticket #3852: ec_bounce_classify now factors message/delivery-status mime parts into its classification
* Fixed ticket #3855: `reroute queue example.com example.com` would cause CPU to spin and the process to watchdog
* Fixed ticket #3859: rejection counters could race when using threaded accept
* Fixed ticket #3874: Orphaned L files when inbound connection is snipped
* Fixed ticket #3884: clusterconsole domain page actions non-functional
* Feature ticket #3890: refactor domains/message.php in cluster UI to contain more metadata
* Fixed ticket #3891: add NODENAME directive to eccluster-client.conf to allow manual override of automatica hostname determination in mbusd_monitor
* Feature ticket #3905: change API for log_client_connection_(success|failure) hooks to take sockaddr
* Fixed ticket #3910: ec_rrdd pidfile handling issue
* Fixed ticket #3911: eccmgr race with command broadcasts could cause fault
* Fixed ticket #3918: sieve `ec_header_get` could cause the message to be marked dirty, triggered a bad interaction with sending large messages with certain debugging flags enabled.

## Ecelerity version 2.2.2.35 released on 2008-09-19
* Fixed ticket #3674: changed goodmail multiplexer default configuration for more optimal performance. Note that the multiplexer.log can now be found in /var/log/Ecelerity/gmsmultiplexer.log
* Fixed ticket #3722: ec_gauge_cache_inc causes segfault if passed a zero-length key
* Feature ticket #3727: break out brightmail and commtouch modules into their own solaris packages
* Fixed ticket #3728: solaris fault when registering hooks from java and MOD INFO debugging is enabled
* Fixed ticket #3731: ec_rrdd sometimes fails to reconnect to spread
* Fixed ticket #3753: dml_log replication regression
* Fixed ticket #3761: possible crash under load in delay_dsn module
* Fixed ticket #3768: potential fault when making a reference to a message
* Feature ticket #3769: Improve debugging output in cidrdb
* Fixed ticket #3775: ec_security.h was missing from -devel packages
* Fixed ticket #3778: ec_show crashes if you pass it an invalid command-line option
* Fixed ticket #3779: potential race when sending an outbound batch to a remote MTA, and that MTA indicates that the batch limit was exceeded
* Feature ticket #3781: Improve Linux packaging to better handle configuration files during upgrade
* Fixed ticket #3802: solaris /var/run files can be improperly created for setuid systems
* Fixed ticket #3803: cidrdb's could be unqueryable during reload
* Fixed ticket #3804: ec_rt_stats may fail to escape certain MDN data
* Fixed ticket #3812: Ecelerity::Injector::new docs are incorrect
* Fixed ticket #3814: unlinkinfo memory leak
* Fixed ticket #3820: mass mailing to large number of unresolvable domains results in watchdog timeouts
* Fixed ticket #3822: rejection reasons sort backwards in cluster console
* Fixed ticket #3824: Alignment-related crash on sparc when DuraVIP is enabled
* Fixed ticket #3825: Messages on domains with MX records that report SERVFAIL never expire
* Fixed ticket #3826: The custom_logger module's xfer_log_mode option did not default to a reasonable value and had to be explicitly configured

## Ecelerity version 2.2.2.34 released on 2008-08-20
* Feature ticket #3687: support querying alternate DNS servers with the ec_dns_lookup sieve action
* Fixed ticket #3700: potential mime parser crash under heavy load
* Fixed ticket #3702: make tls_verify = no ignore all types of certificate errors (not just self-signed certs)
* Feature ticket #3707: expose thread pool queue size in 'threads stats' on the console and via the new ec_thread_pool_get_queue_size action in sieve.
* Fixed ticket #3713: sieve ec_throttle_check would never return true in some use cases
* Feature ticket #3732: expanded bounce classifier to add another variation of `not our customer`
* Fixed ticket #3734: improved handling of batched and large messages if the outbound session times out during data
* Fixed ticket #3736: messages would become broken if a module registers the legacy core_config_get_message_gateway_into_buffer hook
* Fixed ticket #3739: ds_sqlite driver did not set a default busy timeout, resulting in sporadic query failures when the target database is under contention
* Fixed ticket #3746: Ecelerity loggers may format timestamp incorrectly
* Fixed ticket #3748: fixed potential overflow in mailfrom and rcptto
* Fixed ticket #3750: dig console command would let you create mixed-case domain containers which would never get used, but would be visible (with all stats 0) in the webconsole
* Fixed ticket #3751: fixed Brightmail message body memory leak
* Fixed ticket #3763: ec_itoa C function would not render the most negative integer correctly

## Ecelerity version 2.2.2.33 released on 2008-08-01
* Fixed ticket #3191: 'message too large' rejections for inbound mail are no longer transient failures
* Fixed ticket #3229: goodmail checker does not handle logging of discards
* Fixed ticket #3256: improve robustness of eccmgr sqlite handle closing
* Feature ticket #3342: Add `cidrdb list` command
* Fixed ticket #3348: cidrdb boolean mode doesn't sort input
* Feature ticket #3436: Add ERROR warning if cidrdb files do not exist
* Fixed ticket #3422: scheme string is not set correctly for radius module
* Feature ticket #3478: Ship test harness as part of SDK
* Fixed ticket #3560: ecxs uses incorrect compiler flags for C++ modules
* Fixed ticket #3563: replacing a sieve hash element with hash_set leaks the hash key of the old element
* Fixed ticket #3564: Unable to use custom thread pools in C++ moduels
* Fixed ticket #3585: Cloudmark module triggers unnecessary message parse
* Fixed ticket #3604: Use of uninitalized buffer when reporting a swap out error
* Fixed ticket #3607: Message sizes are wrong in the cluster webconsole
* Fixed ticket #3608: cidrdb_rbldnsd with large files leads to memory fragmentation
* Fixed ticket #3609: ec_rotate and ec_log_trace handle gzip and ec_rotate has a no compress option
* Fixed ticket #3614: ec_rrdd leaked file handles
* Fixed ticket #3616: Sieve tests that take no arguments segfault in sieve module
* Fixed ticket #3622: ecstream always re-assesses binding slot in the scheduler
* Fixed ticket #3651: Hash randomization causes identical datasource queries to have different keys
* Fixed ticket #3655: Transient failures issued during each_rcpt now result in the inbound SMTP session being transient failed. Previously, the result was dependent on the disposition of the first failed recipient.
* Fixed ticket #3668: ECMM module doesn't copy dictionaries along with message
* Fixed ticket #3678: Brightmail driver does not cope when recipients have different verdicts
* Fixed ticket #3680: Brightmail driver can get a bogus transaction mismatch
* Fixed ticket #3690: we now correctly support CNAME domains as per rfc2821 section 3.6
* Fixed ticket #3692: handle malformed license files without crashing
* Fixed ticket #3693: sieve includes that pull from a datasource that return 0 rows would terminate the sieve script but not the inbound SMTP session
* Fixed ticket #3697: ds_ldap would leak the hostname portion of an LDAP URI
* Fixed ticket #3698: Brightmail driver does not apply timeout correctly when sending recipient data
* Fixed ticket #3714: ec_logger deadlock when writing to jlog on full disk

## Ecelerity version 2.2.2.32 released on 2008-06-20
* Fixed ticket #1905: Functionality improvements for ds_odbc on Linux systems
* Feature ticket #2035: Added `spool import` command for migrating spools from offline machines. This command has shipped in the last few revisions as a preview feature, and is now considered complete. Starting from this release, the import will always generate a fresh message queue id for every imported message; previously we would only do so if we observed a conflict on import.
* Fixed ticket #3001: stats_producer statp_process_request method always prints 0 for the binding active queue size
* Reverted ticket #3212: The perl module dependencies in the rpms are once again called `perl(<module>)`.
* Fixed ticket #3317: brightmail module would report `body write failed` for mesages with empty bodies
* Fixed ticket #3186: Datasource load distribution doesn't ignore failed LDAP connections
* Fixed ticket #3323: cluster console failed to load config when inbound_audit module was loaded
* Fixed ticket #3331: fault if sieve scripts are misconfigured to call brightmail_verdict without first calling brightmail_scanner
* Fixed ticket #3388: Shared named throttle memory leak
* Fixed ticket #3404: Running ec_rrdd multiple times caused all instances to exit
* Fixed ticket #3405: deprecated config_x_control functions broken
* Fixed ticket #3406: cluster console time window selection critieria would skip the first second of data
* Fixed ticket #3409: Installer: Ask whether Ecelerity-devel should be installed
* Fixed ticket #3415: cluster replicated rejectlog NUL termination issue could lead to trailing junk data on the cluster manager rejectlogs, or in some cases, cause eccmgr to fault.
* Fixed ticket #3451: eccmgr performance problem with large command responses
* Fixed ticket #3452: ecxs -i flag didn't interpolate $prefix
* Feature ticket #3456: Add uninstall option to linux installer; can create response file for repetitive installs
* Fixed ticket #3459: Sort in the webconsole didn't work correctly in some cases
* Fixed ticket #3462: pipe_transport would not set message code correctly if the child process failed
* Fixed ticket #3463: datasource fault on startup if driver fails to connect
* Fixed ticket #3465: inbound batch limit exceeded is returned with enhanced status 4.4.5 (congestion) instead of 4.5.3 (too many recipients)
* Feature ticket #3491: Allow stat_producer to work locally on nodes with cluster module loaded
* Fixed ticket #3500: make the sieve snmp_trap action fall back to the configured SNMP_Trap Trap_Destinations as documented
* Fixed ticket #3501: improved handling of brightmail connections that were closed by the brightmail server
* Fixed ticket #3502: Upgrade PHP package to 5.2.6
* Fixed ticket #3504: MSYSclusterc package would not create /var/log/Ecelerity/web
* Fixed ticket #3505: ec_logger could deadlock on startup if it was unable to open the paniclog.
* Fixed ticket #3512: io_wrapper_copy_to_buffer() did not retry on EINTR
* Fixed ticket #3513: freshly injected messages could sometimes be queued to the delayed queue instead of the active queue
* Fixed ticket #3515: Spread perl bindings non-functional on 64 bit Solaris
* Fixed ticket #3516: brightmail running in sieve mode would not respect num_workers concurrency limit
* Fixed ticket #3517: xml version of domain command prints incorrect LastFailure value
* Fixed ticket #3520: Add SET_USER option to rt_stats_wrapper so that rt logs are created with correct user
* Fixed ticket #3522: sample cidr_maintain.conf was installed on cluster nodes instead of the cluster manager
* Fixed ticket #3527: harmless valgrind warning when duravip was not explicitly enabled on a cluster node
* Feature ticket #3530: supply simple pcre substitution patterns to add additional canonicalization stanzas to ec_rt_stats
* Fixed ticket #3540: rejections due to memory shortage or messages exceeding the configure size limit would not be logged in the rejectlog
* Fixed ticket #3541: connect_timeout_to_delay incorrectly triggered by slow DATA sessions
* Fixed ticket #3543: Resident Message count would sometimes turn negative
* Fixed ticket #3547: Exposed cloudmark_score_analysis via sieve
* Fixed ticket #3553: Total Queue Size in `binding summary` would sometimes turn negative
* Fixed ticket #3555: recipient string leaked if policy checks in the RCPT TO phase cause the inbound connection to be closed
* Fixed ticket #3559: triggering non-250 response for the inbound mailfrom phase could leak an ec_message
* Fixed ticket #3562: Threaded accept may cause replicated connection counters to skew
* Fixed ticket #3568: brightmail hash table leak
* Fixed ticket #3569: changed web UI to sort rejection reasons by count instead of reason
* Fixed ticket #3575: ds_fetch_hash could fault when using ldap and parameters were omitted from the hash
* Fixed ticket #3576: failed ec_include continues to run script before issuing a transient failure
* Feature ticket #3578: added mechanism for instrumenting allocs and frees
* Fixed ticket #3579: message corruption when spooling large messages with no valid headers
* Fixed ticket #3581: Units for summary Rejection Percentage were incorrect

## Ecelerity version 2.2.2.31 released on 2008-05-23
* Fixed ticket #3390: Incorrect interpretation of 452 RCPT TO response would lead to degraded performance until Ecelerity was restarted
* Fixed ticket #3397: potential edge case with recycled domain handling during outbound batching
* Fixed ticket #3401: Improved ability to detect identical messages for outbound batching purposes
* Fixed ticket #3402: Added mime_parse_large_messages_during_reception option (defaults to 1) which can be used to disable the streaming MIME parse that occurs for large message reception. Turning this option off means that the parse will be done just-in-time. Exercise caution when disabling this option; it may, depending on your policy and configuration, cause IO to occur in the scheduler thread and impact overall performance.
* Fixed ticket #3453: Fault when swapping out multi-recipient mail when one of the recipients had been quarantined.

## Ecelerity version 2.2.2.30 released on 2008-05-09
* Moved Kaspersky and Clamav modules into their own subpackages on Linux; if you're not using the installer to upgrade, and were using one of these AV engines, make sure you manually install it.
* When upgrading a cluster: if you are using dml_log replication with the cluster web console, you must upgrade the manager node first, or the manager may lose dmllog information.
* Fixed ticket #1464: removed undocumented unifile spool module
* Fixed ticket #2606: Allow TCP fallback in DNS resolution
* Fixed ticket #2653: ec_logger: Lines can be lost when logging large volumes of data to the paniclog
* Feature ticket #2719: DNS subsystem improvements. Among other things, adds the Only_Use_Best_MX_For_Relay_Domains option which (if set to true, the default in 2.2.2.30 and the only behavior available in earlier releases) only uses the set of lowest numerical priority MXs when sending to domains listed in Bounce_Domains or Relay_Domains; if set to false, all MXs will be used. We suggest setting this to false if you use the Routes option.
* Fixed ticket #2747: Remove dependency on the Solaris SUNWxcu4 package
* Fixed ticket #2916: resident message count would often count double for messages that had both a MIME parse tree and were in-memory
* Fixed ticket #2955: solaris upgrade would overwrite ec_rotate.conf
* Fixed ticket #2967: ec_bounce_classify now handles Base64 decoding of bounce messages
* Fixed ticket #2993: Ecelerity-devel is missing a dependency on libcap-devel; you will need to install both libcap and libcap-devel on Linux systems prior to running the Ecelerity installer.
* Fixed ticket #3057: clusterwide_host_connection_limiter may fault on start up if Cluster_Max_Outbound_Connections is not configured
* Feature ticket #3119: accept unqualified senders and receivers without angle brackets
* Fixed ticket #3171: improved spool import console command
* Fixed ticket #3175: handle undocumented port_getn error condition on Solaris 11
* Fixed ticket #3247: `sieve testfile` on invalid UTF-8 content on Solaris could lead to a fault
* Fixed ticket #3255: watchdog during swapout in low memory conditions
* Fixed ticket #3262: Include ares_dns.h in Ecelerity-devel rpm
* Fixed ticket #3263: Sieve: Crashes with ec_config `eval`
* Fixed ticket #3267: only the first interfaces of a Solaris multi-port network interface is registered
* Fixed ticket #3268: corrupt metadata file on spool could lead to a fault
* Fixed ticket #3269: ecstream would always record 127.0.0.1 in the Received headers
* Fixed ticket #3270: failed assertion in ec_message_part_extract when using quarantine module
* Fixed ticket #3296: cidrdb does not handle data with mask '0'
* Fixed ticket #3305: cidr_server would not start on system startup on Solaris
* Fixed ticket #3306: problem swapping out domainkeys signed messages when trace_headers are disabled
* Fixed ticket #3315: ec_cluster: Connection failure message doesn't include reason
* Fixed ticket #3318: Cluster DML log writes get backed up
* Fixed ticket #3320: getopt replacement
* Fixed ticket #3322: sieve envelope action and test inspect the validation context before looking at the message meta data
* Fixed ticket #3327: avoid accidental IO induced on the scheduler thread
* Fixed ticket #3332: bounce generation may induce IO on the scheduler; added async_bounce_rendering configuration option to control this; it defaults to true
* Fixed ticket #3333: large cluster commmand broadcast/retrieve could fail to send
* Fixed ticket #3334: sieve add_recipient may not sign additional recipients when used in certain phases, performance improvement with large messages
* Fixed ticket #3335: upgrade ecapache to latest 1.3.x sources
* Feature ticket #3336: add keep_message_dicts_in_memory option to trade memory against IO operations. Added Exclude_VCTX_MESS and Exclude_VCTX_CONN options to filter unwanted dictionary data and reduce the memory impact of running with this setting.
* Fixed ticket #3337: `xml showqueue` could induce IO on the scheduler (this would be triggered by the webconsole). We now only render the dictionaries in the XML output if they are already in-memory.
* Fixed ticket #3345: message referencing error when Generate_Delay_DSN = 'false'
* Fixed ticket #3346: seedlist module performance issue when legacy modules are loaded
* Fixed ticket #3347: reduce per scheduler-iteration impact of soft_bounce_sweep by adding soft_bounce_drain_rate tunable.
* Feature ticket #3351: expand SMTP client connection auditing hooks
* Fixed ticket #3353: de-bundle host_fingerprint module
* Fixed ticket #3356: message render failure for body-less messages when OMIT_DOT flag is used
* Fixed ticket #3357: improve connection failure accounting logic
* Fixed ticket #3363: sieve vctx_conn test would not inspect the per-connection dictionary in some cases
* Fixed ticket #3364: x-return-dn doesn't work with connection caching
* Fixed ticket #3366: sieve compile memory leak
* Feature ticket #3367: batch smtp improvements
* Fixed ticket #3368: cluster shared message bus double init
* Fixed ticket #3376: goodmail multiplexer pid file location mismatch
* Fixed ticket #3377: slow leak when handling large strings in maildir, ds_cdb and on the console
* Fixed ticket #3378: Wire up SSL_Lock_Method option to allow selection of mutexes instead of spinlocks for OpenSSL locking.
* Fixed ticket #3380: webconsole fails to start on 32-bit sparc systems

## Ecelerity version 2.2.2.29 released on 2008-03-28
* Feature ticket #2651: Additional SMTP server and client hooks
* Feature ticket #2746: Make ds_ldap connection caching disable-able
* Fixed ticket #2805: Deprecate ds_rbldnsd in favour of cidrdb's rbldnsd support
* Fixed ticket #2846: statp module erroneously reports rrdd errors when running in a clustered configuration
* Fixed ticket #2876: dmllog.rt created with wrong permissions
* Feature ticket #2904: Hook to support setting TLS parameters for SMTP reception
* Fixed ticket #2929: Setting 'max_resident_messages' to 0 does not disable feature
* Fixed ticket #2936: ec_tarpit does not work with numbers containing strings
* Fixed ticket #2989: Message-ID header in bounces contained wrong, incorrectly formatted message id
* Feature ticket #3079: Increased default Disk_Queue_Drain_Rate to 100
* Fixed ticket #3085: custom_logger and sendmail_logger can back up too many jobs
* Fixed ticket #3104: Soft bounce hooks are all email_message; no ec_message versions
* Feature ticket #3109: Delay DSNs
* Feature ticket #3110: Syslog IO wrapper
* Feature ticket #3118: Ecelerity can now send multi-recipient mail (previously it would split multi-recipient mail into single recipient mail). Added Max_Recipients_Per_Batch and Max_Recipients_Per_Connection options.
* Feature ticket #3119: New config option permits setting domain for unqualified sender addresses
* Fixed ticket #3123: Return value set with sieve_return_value_number cannot be interpolated
* Feature ticket #3127: jobs can now indicate that they should be skipped during shutdown; improves shutdown times.
* Fixed ticket #3133: ec_rrdd on Solaris might run 64-bit when the webconsole expects 32-bit.
* Fixed ticket #3140: Watchdog reliability issues on Solaris
* Fixed ticket #3149: shared gauge cache keys containing '@' signs would not replicate correctly
* Fixed ticket #3156: 'max_recipients_per_message' behavior not RFC 2821 compliant
* Fixed ticket #3158: 'listener_sessions' limit not correctly respected
* Feature ticket #3165: add post_initiate_connection_smtp and log_client_connection_failure hooks
* Fixed ticket #3168: Loggers: When logging a custom note from ec_log_*(), note is truncated by one character
* Fixed ticket #3179: clarify 'no adequate servers' message
* Fixed ticket #3180: crash in dkim if signer does not sign the From header
* Fixed ticket #3183: sieve header test had inconsistent results for multi-line headers
* Fixed ticket #3187: ds_ldap: Cached connection mistakenly used for URI with extra parameter (but URI otherwise identical)
* Feature ticket #3196: Support toggling requesting client cert in TLS server mode
* Fixed ticket #3197: rpms should not have Provides/Requires dependencies for libraries in /opt/Ecelerity
* Feature ticket #3198: Expose additional TLS connection parameters
* Feature ticket #3204: spool ctx code has no unlock function
* Feature ticket #3206: support bytes limitation for rfc2822 sieve macros
* Fixed ticket #3209: cidrdb can cause corruption if given a bogus source query
* Fixed ticket #3211: improved performance and reliability of `spool import` command
* Fixed ticket #3212: Rename Ecelerity rpm `perl(<module>)` dependencies to `ecperl(<module>)`, to avoid clashes with system perl
* Fixed ticket #3218: 64-bit compile issue may cause cluster module initialization to fail
* Fixed ticket #3202: inbound_cidr replication could not be used in conjunction with threaded accepts
* Fixed ticket #3221: added `importlog` option to ec_logger to record `spool import` events
* Fixed ticket #3222: ec_stats can misparse rejectlog reason
* Fixed ticket #3224: potential double free if authing with unknown encryption type multiple times in one session.
* Fixed ticket #3227: sieve policy builder db is not created until policy UI is visited, causes error messages to appear in the paniclog
* Fixed ticket #3230: smtp_cbv would not parse remote capabilities, results in mis-negotiation of 8BITMIME and other SMTP protocol extensions
* Fixed ticket #3231: Minor typos in the bounce classification descriptions
* Fixed ticket #3233: Enhanced 2.1 to 2.2 upgrade experience

## Ecelerity version 2.2.1.28 released on 2008-02-29
* Fixed ticket #2842: a failed sieve ec_include will now trigger a transient failure, unless you explicitly indicate that failure is allowed using ec_error_mode `continue`
* Fixed ticket #3080: Added use_ipv6 option to control the use of outbound ipv6 connections.
* Fixed ticket #3131: 8bitmime support could trigger IO on the scheduler thread, leading to performance degradation. Made pre-#2214 behavior the default.
* Fixed ticket #3134: a particular combination of multi-recipient mail, policy, mime message structure and custom logging configuration could lead to a fault.
* Fixed ticket #3139: remote SMTP capabilities keywords were not treated as case-insensitive
* Fixed ticket #3144: eccmgrio:// wrapper connect timeout was too high. Added control_client_timeout option to make this tunable; it defaults to 60 seconds.
* Fixed ticket #3146: sieve audit_series action would not replicate data when passing in the IP address explicitly

## Ecelerity version 2.2.1.27 released on 2008-02-20
* Fixed ticket #3084: custom_logger does not write all of its configuration options back out
* Fixed ticket #3087: modifying the vctx of spooled messages with no journalled vctx on spool-in can cause a fault

## Ecelerity version 2.2.1.26 released on 2008-02-19
* Setting the Binding_Group option in a Binding stanza is deprecated; the Binding stanza should be placed in an enclosing Binding_Group stanza instead
* Feature ticket #1042: User bounce classification overides
* Fixed ticket #1704: Now support unqualified addresses (e.g. `<postmaster>`) via optional configuration setting
* Fixed ticket #2212: sendfile on Solaris could duplicate buffers
* Fixed ticket #2214: Improve 8BITMIME handling; added Send_8BitMime and Transform_8BitMime configuration options. Use_SendFile is now respected on all platforms that implement sendfile().
* Feature ticket #2308: Support simplistic load balancing in datasources
* Fixed ticket #2427: smtp_cbv crashes due to race conditions in connection handling
* Fixed ticket #2644: Intermittent crashes when logging via pipe_io on Linux
* Fixed ticket #2649: We now accept and transit mail that consists of headers only (no bodies)
* Fixed ticket #2661: Correct issue where AV code would sometimes log `increase your growbuf_size` and tempfail certain messages
* Fixed ticket #2663: suppress_spool module should take no action for large messages
* Fixed ticket #2691: Seedlist module is now tolerant of leading/trailing whitespace in the list file
* Feature ticket #2736: Expose DNS errors from ec_dns_lookup into sieve
* Feature ticket #2751: Control alias expansion on a per-pathway basis
* Fixed ticket #2759: smtp_cbv crash in ports scheduler
* Fixed ticket #2768: Ecelerity::Control perl class should use confess to throw exceptions on all IO errors
* Fixed ticket #2796: De-couple server_max_outbound_connections and os file descriptor limits
* Fixed ticket #2827: cidrdb_rbldnsd: don't error on no default value; support changing default
* Fixed ticket #2843: Threaded accept can overwhelm the scheduler
* Fixed ticket #2848: Fix possible memory leak in sieve cache
* Fixed ticket #2855: out-of-space errors on the spool partition during message reception are now correctly reported as transient rejections
* Fixed ticket #2857: Make DomainKeys, DKIM and Goodmail options valid in a Binding also valid in a Binding_Group
* Feature ticket #2866: Allow ec_rotate.conf to set retention level
* Fixed ticket #2868: ship already documented sendmail_logger module
* Fixed ticket #2877: crash when doing message rebind with legacy modules loaded
* Fixed ticket #2883: IO modules that return with failure or invalid status codes may not have had their state fully cleaned up.
* Fixed ticket #2884: suppress_spool module logs each discard twice when configured to discard messages on unclean shutdown
* Fixed ticket #2885: Maildir module now accepts localparts with spaces and forward slashes
* Fixed ticket #2890: Crash when Cluster_Max_Outbound_Connections used in default binding group
* Feature ticket #2895: Set routing gateway on per recipient basis from sieve
* Feature ticket #2902: We now support Cluster_Max_Outbound_Connections in the Host scope
* Fixed ticket #2905: Improve performance when using Perl and Java interpreters
* Feature ticket #2910: ds_ldap: Support connection timeout, search time limit
* Fixed ticket #2914: Crash in cluster shared gauge hashes
* Fixed ticket #2918: Can't build a C++ validate module
* Fixed ticket #2947: ec_message_select_binding_by_group ignores routing domain
* Fixed ticket #2948: Message with missing mime boundary were losing closing terminator
* Fixed ticket #2952: Upgrade Cloudmark SpamDNA to 3046.3
* Fixed ticket #2957: Bounce processing special casing for international hotmail domains
* Fixed ticket #2962: fetching message headers for modification after message bifurcation changes header FWS for all but one recipient
* Fixed ticket #2964: Some public headers (e.g.: debug_tools.h) were not packaged
* Fixed ticket #2968: pipe_io does not support `write config`
* Feature ticket #2969: ec_sendmail: Accept -oem option, handle -oi as -i
* Fixed ticket #2973: Trace file does not include timed events
* Fixed ticket #2958: Complex, invalid MIME messages could trigger `Assertion write_to > seek_to failed`. Improved tolerance for bad MIME and transiently reject messages that would otherwise have caused that assert.
* Fixed ticket #2981: Support OpenLDAP's {CLEARTEXT} password scheme
* Fixed ticket #2986: We now return the first rejection note for multi-recipient messages rejected in the data phase, rather than a generic 553
* Fixed ticket #2994: SNMP community setting didn't work
* Fixed ticket #3003: Missing_Headers = allow did not accept messages with partial headers
* Fixed ticket #3006: ec_log_trace --to-domain shows other domains
* Fixed ticket #3011: webconsole runs everything as 32-bit, fails on 64-bit solaris with cloudmark configured
* Fixed ticket #3018: inbound_audit and outbound_audit modules mislabeled in the `show inbound` command output
* Fixed ticket #3021: installer on Solaris: advise that ec_stat needs to be started, when using the webconsole
* Fixed ticket #3022: webconsole: Config page doesn't work reliably on Solaris
* Fixed ticket #3023: stats producer uses ehlo_hostname instead of cluster nodename when sending stats to the manager
* Fixed ticket #3071: L files stranded in spool if a large message exceeds the message_size limit configured in the esmtp_listener

## Ecelerity version 2.2.1.25 released on 2008-01-14
* Fixed ticket #2614: async swap out tunable not handled correctly, could erroneously report spool failures
* Fixed ticket #2892: thread safety issue in OpenLDAP
