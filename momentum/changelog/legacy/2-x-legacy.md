---
title: "Momentum 2.x Legacy Changelog"
description: "Changelogs for legacy versions of Momentum 2.x"
---

# Momentum 2.x Changelogs

## Ecelerity version 2.2.3.51 released on 2013-05-17
* Fixed ticket MO-414: Fixed parsing error with nested multipart messages
* Fixed ticket MT-10093: Fixed issue causing null pointer exception in TLS handler

## Ecelerity version 2.2.3.50 released on 2011-12-19
* Fixed ticket BZ4865: Replaced third party component used in bounce classification with improved Momentum Bounce Classifier. Beginning with version 2.2.3.50, the bounce_classifier module must be explicitly loaded in ecelerity.conf.

## Ecelerity version 2.2.3.49 released on 2011-05-24
* Feature ticket BZ2464: Added a new esmtp listener option, starttls_injection_policy, to resolve a recently identified industry-wide security issue for SMTP implementations whereby commands could be injected before the SSL negotiation completed (CVE-2011-0411). The default value, ``reject``, will disconnect SMTP sessions if commands are sent after the STARTTLS command but before SSL negotiations are completed.
* Feature ticket BZ1917: Installation of a Momentum upgrade will halt and provide an error message if prior Momentum version cannot be completely uninstalled. This prevents issues resulting from a partial uninstall.
* Fixed ticket BZ3049: A message exceeding the 'large_message_threshold' value not forced to disk when force_fsync is configured.
* Fixed ticket BZ2047: The disclaimer module no longer adds dots/periods to the ends of linesFixed ticket BZ: causing double-dots in the email messageFixed ticket BZ: when sending plain-text messages.
* Fixed ticket BZ1924: Resolved situation with adding a new jlog subscriber whereby any subsequent jlog call from the new subscriber incorrectly indicated the subscriber didn't exist.
* Fixed ticket BZ1856: Changed error code send when `protocol deviation` is detected from a 550 to a 421.
* Fixed ticket BZ1761: Resolved subaddress parsing issue for sieve comparison match.
* Fixed ticket BZ2928: Updated bounce classifications for Momentum

## Ecelerity version 2.2.3.48 released on 2011-04-19
* Feature Ticket BZ2647: Momentum 2.x now compatible with Message Scope
* Fixed ticket BZ2513: Resolved issue with configuration setting to convert lone linefeeds into a CRLF sequence (Lone_LF_in_Body = ``fix``) which caused Momentum to crash under heavy message loads.
* Fixed ticket BZ2264: New maximum length limit of 4K for MAIL FROM and RCPT TO commands. Note that other MTAs enforce smaller limits.
* Fixed ticket BZ2026: Resolved an issue were a crash may occur when SMTP debugging or tracing is enabled and certain DNS MX conditions exist.

## Ecelerity version 2.2.3.47 released on 2011-02-02
* Fixed ticket #4562: The mbusd_monitor script now uses the correct group ID when checking permissions.
* Feature ticket #5280: Added `lifetime` option to the sieve ec_dkim_sign action.
* Fixed ticket #6990: Injecting over 2GB of messages on same connection will no longer trigger `message size limit exceeded` error.
* Fixed ticket #7051: Resolved a possible fault on Solaris when using the cluster module and initiating a connection to a host with a long name
* Fixed ticket #7264: Async DSN generation with Sieve could cause illegal memory accesses
* Fixed ticket #7325: Memory leaks were possible when an action resulted in a message being tempfailed in the each_rcpt phase.
* Fixed ticket #7722: Fixed a memory leak in the SMTP handler.
* Fixed ticket #7773: Forwarding large volumes of mail requiring conversion from 8- to 7-bit character sets could result in crashes.
* Fixed ticket #7878: Fixed issue preventing the SMTP callback verification module from supporting customizable callback verification domain mapping for the `mail from` phase.
* Fixed ticket #7915: Malformed RFC2822 addresses could cause a crash when passed to the `address` sieve function.
* Fixed ticket #7927: Momentum would incorrectly determine that a 251 response (user not local) received while delivering to a remote MTA was an error condition
* Feature ticket #8070: Updated bounce classification rules.
* Feature ticket #8072: The bounce classifier module leaked memory.
* Fixed ticket #8074: The `address` sieve function would only match the first address in the requested header.
* Feature ticket #8076: The SMTP and control listeners no longer have a restricted backlog.
* Fixed ticket #8080: The disclaimer module could erroneously insert quoted-printable encoded newlines.
* Fixed ticket #8081: A faulty ClamAV configuration could cause false positives on non-infected mail.
* Feature ticket #8085: ec_dkim_domain will now correctly return the value of the d= tag when the i= tag is missing.
* Feature ticket #8096: Resolved a crash when a domain record expires during TLS downgrade.
* Fixed ticket #8097: The disclaimer module now removes any dot-stuffed dots from the message.
* Feature ticket #8105: The smtp_should_session_shutdown hook may now be used to shut down an SMTP session after a failed delivery attempt.

## Ecelerity version 2.2.3.46 released on 2010-08-03
* Fixed ticket #2177: Improve diagnostics for statp errors.
* Feature ticket #3688: host_fingerprint Passive OS fingerprinting support re-enabled.
* Fixed ticket #4061: Recycled connections could cause hanging connections in rare cases.
* Feature ticket #4299: Audit series now support a serialized flag that can be set when they are created. Serialized audit series are written to disk periodically.
* Fixed ticket #5157: Certain broken domains could leave email in active queue which would not expire.
* Fixed ticket #5190: The CSAPI module could leave behind temporary directories in /var/tmp when the server was shut down.
* Fixed ticket #5216: Possible fault if a DNS record expired just as a message that had failed during the initial banner response was being requeued.
* Fixed ticket #5246: Long DKIM identity could cause malformed DKIM signature due to improper wrapping.
* Fixed ticket #5270: Antivirus modules would not properly set the xyz_status_info variable in the message vctx for infected files when the av action was set to `pass` where xyz is the name of the antivirus module.
* Fixed ticket #5283: Fixed C++ compilation issues when building Momentum modules.
* Fixed ticket #5286: The sieve :contains operator could assert when operating on a search string longer than 128 characters.
* Feature ticket #5318: Audit series data is now persistent. The data is serialized to disk on shutdown and read in on start up.
* Fixed ticket #5340: Header names longer than 997 characters could cause crash during spool-out.
* Fixed ticket #5354: Disallow headers without values; correctly handle excessive whitespace in wrapped header values.
* Feature ticket #5361: Allow Trace_Headers to be set in the Pathway scope.
* Feature ticket #5380: The brightmail module has a new sieve action, brightmail_tracker, which formats the rules data in a format suitable for use as an X-Brightmail-Tracker header. The ec_header_add sieve function has been enhanced to add a :folded tag which, when set, will fold long header lines at 78.
* Fixed ticket #5427: Allow setting more CSAPI scanner options.
* Fixed ticket #5428: Use of SMTP authentication could cause a small memory leak
* Fixed ticket #5444: The sched module could fault on startup if its database contained persistent jobs.
* Fixed ticket #5445: The sched module stored jobs in the database with the user and command arguments reversed which would prevent jobs from running when Momentum was restarted.
* Fixed ticket #5473: The CSAPI module could hang Momentum if the `reopen logs` console command was issued.
* Fixed ticket #5642: Improved MX Fallback logic by trying other MXs immediately if there is a connection error.
* Feature ticket #5650: Expose DKIM verification results as C API.
* Fixed ticket #6019: Eliminate a small memory leak when using AUTH PLAIN.
* Fixed ticket #6033: The Brightmail module would incorrectly report an error when handling messages with mixed case domains.
* Fixed ticket #6237: Implemented Allow_Whitespace_In_Envelope and Allow_Whitespace_In_Command options that handle the trailing white spaces in the SMTP command and white spaces in between `<>` and the recipient address in the RCPT TO or MAIL FROM commands.
* Fixed ticket #6256: RFC2822 { Max_Line_Length } is checked earlier during reception processing, to avoid increased CPU utilization in the face of extremely long headers.
* Fixed ticket #6342: Quoted-printable decoder would not handle SMTP-transparency (aka dot-stuffing) correctly in some quoted-printable logical line extension cases.
* Fixed ticket #6410: Reset the internal DNS query failure (domain MX or host query) count when querying for a domain's MX returns result to prevent mails being wrongly purged due to intermittent domain MX lookup failures.
* Fixed ticket #6508: Use of Suppress_spool could cause a hang in certain circumstances with large max_resident_messages.
* Fixed ticket #6783: Defer connecting to the Goodmail multiplexor until we have determined whether or not the message needs to be imprinted. In previous releases, the connection to the multiplexor was made before determining whether or not the messaged needed to be imprinted.
* Fixed ticket #6784: Fix a memory leak in the sieve header comparator when the header being tested is made up of multiple lines.
* Fixed ticket #6785: Using the ec_set_routing_gateway sieve action could result in messages being stuck in the lookuptable and never being delivered.
* Fixed ticket #6786: The maximum allowed length of MAIL FROM and RCPT TO commands is now limited to 4k to avoid increased CPU utilization in the face of extremely long command lines.
* Feature ticket #6787: Added RFC2822 { Lone_LF_in_Body='fix'} option to canonicalize newlines in the message body.
* Feature ticket #6855: Added DNS resolution hooks to C API (core_pre_dns_handle_a_hook, core_post_dns_handle_a_hook, core_pre_dns_handle_mx_hook, core_post_dns_handle_mx_hook).
* Feature ticket #6901: We now support Symantec CSAPI Antivirus engine.
* Feature ticket #6902: We now support the Symantec Brightmail Engine Integration Kit (BEIK) as an in-process alternative to our existing (and still supported) bm_driver module.

## Ecelerity version 2.2.2.45 released on 2009-11-06
* Fixed ticket #4476: Large config would hit memory limit in webui. Temporary workaround - create file /opt/ecapache/etc/largeconfig - which will keep graphs working, but prevent editing the config.
* Feature ticket #4989: Added replication of audit series and the ability to alter and inspect audit series counters.
* Feature ticket #4990: Implemented console commands to add, subtract, delete and view gauge cache counters.
* Fixed ticket #5064: Java bindings would not correctly handle messages larger than the Legacy_Message_Threshold and Large_Message_Threshold.
* Fixed ticket #5099: ec_log_file sieve action was not threadsafe.
* Fixed ticket #5108: Disclaimer module would corrupt certain messages with multiple rcptto's. Only happened with MIME singleton messages with each_rcpt hook.
* Fixed ticket #5132: Using asynchronous actions (such as ec_dns_lookup) in the undocumented sieve auth hook would prevent the server from processing mail.
* Fixed ticket #5133: Don't advertise the STARTTLS ESMTP extension in EHLO, after TLS has been established with STARTTLS.
* Fixed ticket #5146: Large numbers of DuraVIP bindings could fail to replicate in cluster due to Spread buffer limit.
* Fixed ticket #5157: Sending email to domains that had broken DNS (for example, a CNAME resolving to a CNAME) could result in an active queue which would not expire.
* Fixed ticket #5174: The postfix logger could truncate the queueid, and fault if it processed a message that had been EM_FAILED_QUIET.
* Fixed ticket #5175: ODBC datasource driver reconnection issues could cause the server to crash.
* Fixed ticket #5192: auth_ds module had unterminated loop when using non-interpolated characters after an interpolation placeholder.
* Fixed ticket #5207: ec_lic would hang forever (or segfaults) if clamav enabled in Ecelerity.conf.
* Fixed ticket #5216: Messages failing during the initial banner with a DNS record that timed out while being added to the active queue could cause a crash.
* Fixed ticket #5225: The MTA will now send a QUIT command when closing an SMTP delivery connection when the Max_Deliveries_Per_Connection limit is reached, or due to an smtp_should_session_shutdown hook.
* Fixed ticket #5229: Sieve `address :detail` would actually return `:all` instead.
* Fixed ticket #5248: Clamav module caused crashes with clamd 0.95 under load.

## Ecelerity version 2.2.2.44 released on 2009-10-14
* Feature tocket #3304: A new sieve action (ec_gmsi_sign) has been added, allowing scripts to trigger Goodmail signing of a message.
* Fixed ticket #4498: Outbound connections could fail to retry secondary MX if initial connection failed during banner.
* Fixed ticket #4614: Legacy modules could be invoked on messages larger than legacy_message_threshold if the message was swapped out to disk.
* Feature ticket #4615: Add Scope_Max_Outbound_Connections, which acts like a scoped version of Server_Max_Outbound_Connections or Max_Outbound_Connections
* Fixed ticket #4687: Header modification prior to a MIME parse on a malformed MIME message resulted in a length mismatch when rendering the message, causing it to be rejected. For example, calling ec_header_add before a call to ec_mime_parts would trigger the problem.
* Fixed ticket #4689: Avoid compiler warnings when building modules with pure C++ hooks.
* Fixed ticket #4760: A syntax error in a dynamically loaded sieve script could result in a memory leak.
* Fixed ticket #4762: Include modules/validate/dkim.h file in public API
* Feature ticket #4773: The sieve_inc_counter function is now a public API.
* Fixed ticket #4804: Modules that use the avengine framework would unilaterally overwrite the smtp response, even when their mode is set to pass.
* Fixed ticket #4805: The Vade Retro integration now supports setting the optional analysis profile (as provide by Vade Retro).
* Fixed ticket #4820: The VadeRetro daemon did not honor the updates_dir setting in vaderetrod.conf, it always used /opt/Ecelerity/3rdParty/vaderetro/updates.
* Fixed ticket #4828: STARTTLS could leak memory allocated for X509 peer certificate.
* Fixed ticket #4829: Change gmsi_imprinter 'optional_headers' and 'strip_sender ' default to 'True'
* Fixed ticket #4876: Disclaimer module could add disclaimer to certain non-text attachments due to improper headers generated by Apple Mail.
* Fixed ticket #4895: Added a Signing_Stats option that can be set to one of `all` (the default), `global` or `off` to control whether signing stats are recorded per binding, as a global summary summary only, or to disable signing stats metrics. You might consider enabling this option if you have a very large number of bindings and don't need to track message signing statistics (such as Domain Keys or DKIM) per binding (or even at all).
* Fixed ticket #4904: ds_fetch from LDAP datasource could crash if ldap_get_values() returned null
* Fixed ticket #4906: Sieve++ action ec_rfc3464_delivery_status did not work correctly in hash mode
* Fixed ticket #4921: Disabling inline_transfail_processing could result in a message that received a transient failure being retried earlier than the retry parameters in the configuration file indicate.
* Fixed ticket #4947: The Vade Retro integration could cause a crash when run from a spool phase sieve action.
* Fixed ticket #4951: Added the ability to disable the memory counters entirely or to use a mutex or spinlock in place of the atomic operations normally used to update the counters.
* Fixed ticket #4991: The Ecelerity Vade Retro integration has been reworked to provide significantly better performance and improved concurrency.
* Feature ticket #4992: A hook has been added to allow modules to make changes to the message body before delivery.
* Fixed ticket #5006: Update to latest 5.2 PHP release for bundles
* Fixed ticket #5009: Add support clamav 0.95.x or later
* Fixed ticket #5013: Fixed an undefined function error that could be triggered from the `bounces` tab of the webconsole.
* Fixed ticket #5014: Improved memory counter lock performance on non-NUMA systems.
* Fixed ticket #5036: ec_logger and custom_logger would always log the Pathway_Group as `default`
* Fixed ticket #5059: hash_get and hash_set sieve functions now return an error when passed an argument that is uninitialized or not a hash.
* Fixed ticket #5067: The dkim_sign and dk_sign modules would disable message batching when they were loaded but disabled.
* Fixed ticket #5082: Potential use of memory after it was freed in the spf module that could result in a failure to expand spf macros under heavy load.
* Fixed ticket #5083: Goodmail imprinting would invalidate the DKIM or DomainKeys signature. Note that the gmsi_imprinter module must still be loaded before DKIM or DomainKeys since it adds headers to the message.

## Ecelerity version 2.2.2.43 released on 2009-06-22
* Fixed ticket #4824: Fixed message move in a clustered configuration. The change in 2.2.2.42 to binding group selection logic resulted in messages being assigned to the default binding group when there were no local, unsuspended bindings when the message should have moved to another cluster node. Versions prior to 2.2.2.42 are not affected.

## Ecelerity version 2.2.2.42 released on 2009-06-11
* Fixed ticket #3957: Replication of outbound_domains metrics was only respected for bindings defined within a binding_group stanza
* Fixed ticket #4034: Possible memory leak when attempting to query a non-existant SQLite database file.
* Fixed ticket #4576: When using the auth_ds module and a datasource query fails, a 535 Sorry message was returned to the sender instead of a 550 Unexpected auth error.
* Fixed ticket #4578: Rolling deployment of new IP addresses can cause DuraVIP fault
* Fixed ticket #4580: Removing a non-existant SMTP tracer via ec_console would lead to a crash
* Feature ticket #4607: Added `xml memory` to the available console commands, for consumption by machine.
* Fixed ticket #4608: Possible watchdog when the system is under IO load when using custom_logger with a format string that pulls in message content or context variables
* Fixed ticket #4610: The csapi module could hang the MTA when the version command was issued under heavy load.
* Feature ticket #4615: Add new Scope_Max_Outbound_Connections and Cluster_Scope_Max_Outbound_Connections config options
* Fixed ticket #4616: Adjusted the binding group selection logic distribute messages evenly amongst the bindings in a group. The selection logic had favored bindings defined towards the end of the binding group over those defined at the beginning.
* Fixed ticket #4620: cluster message moves would unconditionally rebind messages in the scheduler thread, which could lead to a watchdog kill. If you are experiencing this symptom, you may now set unconditional_rebinding = false in your cluster stanza.
* Fixed ticket #4645: Messages being moved internally between cluster nodes could end up being delayed beyond their expiration time with the message `451 4.4.1 [internal] No valid hosts (unable to make any connections)`
* Fixed ticket #4669: A race condition during spool import could prevent the import from completing.
* Fixed ticket #4670: Some networks experience difficulties with ARP traffic when using the DuraVIP clustering feature. If you are experiencing ARP related issues, you may now set arp_all_hosts = false in your cluster stanza to limit the scope of the ARP traffic generated by DuraVIP moves.
* Feature ticket #4683: Added core_validate_auth_hook
* Fixed ticket #4715: Added locks around swap-out to prevent race conditions for sites with custom modules that act on messages asynchronously and concurrently with swap-out.
* Fixed ticket #4739: Large messages with 8-bit transfer encoding could become corrupted on delivery when sending to a host that does not advertise support for the 8BITMIME SMTP extension. Setting Transform_8BITMIME = no is a partial workaround for this issue in prior releases, as is increasing your Large_Message_Threshold; the former will violate the RFC, and the latter will result in increased resource consumption while conforming to the RFC.
* Feature ticket #4741: The Goodmail Checker gmsc_set_status_code sieve action can now be used in any phase that we have a valid message, rather than just in the data phase.
* Feature ticket #4749: The product name has changed to Momentum, and this has been reflected throughout the web UI and installer with new styling and revised text.
* Fixed ticket #4752: The daily update of antivirus definitions was not occurring. A workaround for previous versions is to run the `csapi reload` ec_console command periodically via cron.
* Fixed Ticket #4785: The vade retro module will cause a crash unless the daemon option is specified in the vr_scan stanza. A workaround for earlier releases is to specify daemon=/var/vaderetro/daemon in the vr_scan stanza.

## Ecelerity version 2.2.2.41 released on 2009-04-10
* Feature ticket #3111: Custom SMTP response transcoding
* Fixed ticket #3851: DNS cache leaks the query name
* Fixed ticket #3984: SMTP listener does not fail TLS session when verify_mode = `require` and no client certificate was presented
* Fixed ticket #4044: Using ec_dns_lookup in a hook that runs on the scheduler thread or in the accept phase when threaded accept is not enabled could cause a fault; it will now log an error instead.
* Feature ticket #4066: Add disclaimer module
* Fixed ticket #4083: LDAP driver does not perform a bind when no user is specified
* Feature ticket #4168: ImageAnalyzer integration
* Fixed ticket #4285: Inbound TLS session with no client cert causes a segfault when there's an inbound TLS verify hook
* Fixed ticket #4303: outbound_smtp_tls_verify_callback does not allow certificate verification errors to be overridden when using TLS_verify = `ca`
* Feature ticket #4316: Add NS record caching to dns cache and support passing a stringlist to the cidrdb sieve actions
* Fixed ticket #4395: corrupt messages in spool could cause a crash
* Fixed ticket #4423: destination IP was not logged in temfails and permfails for messages after the first one in a batch delivery
* Feature ticket #4433: Add option to `spool import` command to suppress adding trace headers on import
* Fixed ticket #4439: Goodmail Checker was overly particular about the version of OpenSSL installed on the system
* Fixed ticket #4473: Convert 8 bit MIME parts to 7 bit QP encoded
* Feature ticket #4521: Add gmsc_set_status_code sieve action that allows overriding the Goodmail status of a message
* Feature ticket #4537: make gmsc_is_imprinter sieve action work in the accept phase
* Fixed ticket #4538: correctly log the sending IP address in the gmsc_checker log
* Fixed ticket #4587: in-band bounces that were in the `unknown` connection stage (e.g. messages to an invalid domain) were being logged with the wrong stage number, and counted as out-of-band bounces in the real-time stats as a result
* Fixed ticket #4613: Rejections by the antivirus module were sometimes logged as being rejected by another module.

## Ecelerity version 2.2.2.40 released on 2009-02-27
* Fixed ticket #3716: sieve reject sends MDN with subject `Delayed Mail (still being retried)`
* Fixed ticket #3867: Potential fault in ecstream on a busy cluster
* Feature ticket #4128: add hooks for batch annotation/assessment
* Feature ticket #4129: allow sieve hook scripts to specify async mode
* Fixed ticket #4172: legacy rfc2822_parse_message() leaks a dictionary
* Feature ticket #4188: added hash_get function to sieve
* Fixed ticket #4194: sieve ec_get_message_size could give wrong results for large messages
* Fixed ticket #4205: Brightmail driver busy waits on EAGAIN
* Fixed ticket #4263: binding summary command aggregates active queue size of binding groups incorrectly
* Fixed ticket #4297: sieve brightmail verdict can now be used in set_binding as well as each_rcpt
* Fixed ticket #4323: truncated spool file may prevent spool-in from completing

## Ecelerity version 2.2.2.39 released on 2009-02-06
* Fixed ticket #4052: valgrind warning when using ec_dns_lookup with an alternate DNS server
* Fixed ticket #4132: ec_rotate fails to clean up when retention > 9
* Feature ticket #4159: added ec_log_file sieve function to log to a specific log file
* Fixed ticket #4179: fault in outbound SMTP delivery if a 550 is received before the body is loaded

## Ecelerity version 2.2.2.38 released on 2009-01-23
* Fixed ticket #3606: Added auto-update of eXpurgate data
* Feature ticket #3904: Track number of AAAA DNS queries
* Feature ticket #3968: Added Control_Listener_Idle_Timeout option
* Fixed ticket #4053: ec_rt_stats dml replication may fault if the reason code contains a % character
* Fixed ticket #4059: memory leaks from initiate_connection() error conditions
* Fixed ticket #4065: Control channel authentication only works first time
* Fixed ticket #4074: bounce rendering could crash if connection is recycled
* Fixed ticket #4076: dns host refresh performs A lookups on literal IP addresses
* Fixed ticket #4126: cidr matching affected by ordering of cidr ranges
* Fixed ticket #4118: memory leak in cluster shared named throttles

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

## Ecelerity version 2.2.1.24 released on 2007-12-10
* Fixed ticket #2194: dns_cache refcnts console command crash
* Fixed ticket #2584: Cluster console dashboard statistics reset wouldn't always take effect
* Fixed ticket #2591: reserve binding and pathway groups named 'default'
* Fixed ticket #2593: DKIM missing c= tag was not properly supported
* Fixed ticket #2615: busy wait in SpoolIn pool when spool is empty on startup on some systems.
* Fixed ticket #2616: rejection logs not triggered if swap_out_multi() fails
* Fixed ticket #2629: DKIM s=tag was not validated
* Fixed ticket #2621: ec_header_get only returned the first line of a multi-line header
* Fixed ticket #2627: Cluster console mbus.conf parsing is now more robust
* Fixed ticket #2655: perform a graceful shutdown when detecting a SIGINT or SIGTERM
* Fixed ticket #2659: we documented max_line_length but implemented maximum_line_length; we now implement the former, and the latter is a deprecated alias for the former.
* Feature ticket #2687: added x-ldap-version extension option to ds_ldap to allow ldap protocol version selection
* Fixed ticket #2689: excessive memory usage during watchdog induced shutdown with suppress_spool loaded
* Fixed ticket #2692: misc as_logger fixes
* Fixed ticket #2693: mbusd_monitor synchronous start wouldn't always function correctly
* Fixed ticket #2697: memory mismatch error with datasource include under load
* Fixed ticket #2699: special characters in config stanza scope names were not escaped in all cases
* Fixed ticket #2701: ec_dump_config fault on solaris with perl interp loaded
* Fixed ticket #2702: memory leak in sieve body :text comparator
* Feature ticket #2703: Ecelerity::Control: Give backtrace on fatal error as well as die()'ing
* Fixed ticket #2705: some messages would not be hard linked in the spool, causing spool space usage to increase
* Feature ticket #2706: eccmgr start script: Allow environmental overrides by executing /opt/Ecelerity/etc/environment
* Fixed ticket #2715: eccmgr would not reopen standard descriptors to /dev/null when running in the background, causing occasional trash to show up in subsequently opened files and sockets
* Fixed ticket #2720: improve mbusd_monitor error reporting when mbus.conf is missing
* Fixed ticket #2721: Add AAA logging to example Ecelerity.conf
* Feature ticket #2722: custom_logger: Add formats %P and %PG for Pathway and Pathway_Group
* Fixed ticket #2729: SMTP listener would not reliably detect that a client had disconnected during validation and would enqueue mail; the client could subsequently reconnect and deliver a duplicate message.
* Fixed ticket #2739: inbound ssl sessions (and any inbound sessions on win32) may fault under tcp stack pressure
* Fixed ticket #2742: Negative delayed queue counters would sometimes be reported by the domain command and webconsole
* Fixed ticket #2743: Sieve++ crashes with too few arguments / misordered arguments
* Fixed ticket #2744: Crash in ec_shared_throttle_create
* Fixed ticket #2745: EC_MSG_SWAP_OUT_DROP_BODY didn't force a swap out
* Fixed ticket #2748: web console PHP error when adding binding rule
* Fixed ticket #2749: default_binding = suspend translates to global suspend_delivery = true
* Fixed ticket #2752: seedlist module could send multiple copies of messages to the seedlist
* Fixed ticket #2753: some spool read failures could lead to buffer overrun
* Fixed ticket #2756: sieve `address` test could fault if used on a header that did not contain an rfc2822 formatted address
* Fixed ticket #2758: Some Sieve++ error messages have no line-ending
* Fixed ticket #2760: Improved message mismatch error message
* Fixed ticket #2762: Improved fault tolerance when encountering spool related failures
* Fixed ticket #2763: re-spawning after a watchdog kill may cause child process to have incorrect standard descriptors
* Fixed ticket #2765: sieve string interpolations that result in empty strings would sometimes malfunction
* Fixed ticket #2766: message_size limit not being honored during reception
* Fixed ticket #2769: vctx_mess sieve macro could fault if message was missing validation context dictionaries
* Fixed ticket #2779: Inbound_Throttle_Messages could cause sessions to hang when used in combination with asynchronous validation modules
* Fixed ticket #2780: potential for duplicate message id assertions with multi-recipient mail
* Fixed ticket #2788: transient disk IO errors could cause messages to be deleted from the spool
* Fixed ticket #2789: async logger concurrency issue
* Fixed ticket #2790: Lone_LF_in_Headers = fix would not handle \r\r\n line endings correctly
* Fixed ticket #2793: messages imported from external spool lose their validation context dictionaries
* Fixed ticket #2802: cidrdb in rbldnsd mode doesn't support `$<digit>`
* Fixed ticket #2809: potential loss of sync for inbound pipelined SMTP sessions
* Fixed ticket #2813: Refresh cidrdbs every 30 minutes by default
* Fixed ticket #2815: physical memory size miscalculation on 32-bit linux systems
* Fixed ticket #2816: Log default binding group as `default` rather than an empty field
* Fixed ticket #2819: Improve low-memory condition handling
* Fixed ticket #2820: message accounting race with mult-recipient mail
* Fixed ticket #2822: dkim + seedlist swapout race
* Fixed ticket #2824: legacy message threshold not respected in some cases
* Fixed ticket #2829: default timeout for brightmail module was only 15 seconds; increased it to 60 seconds
* Fixed ticket #2830: sieve `body` test memory leak
* Fixed ticket #2839: control listener acl matches should terminate processing unless an explicit `continue` rule is present
* Fixed ticket #2844: querying RSS is expensive on multi-core Solaris

## Ecelerity version 2.2.1.23 released on 2007-11-09
* Closed ticket #2479: Solaris x86 (32-bit) bug causes ports scheduler to fail. Workaround is to set Scheduler = `poll` in your Ecelerity or eccmgr configuration file.
* Feature ticket #2548: Add listener endpoint to rejectlog format
* Fixed ticket #2563: eccmgr start script 'restart' action does not work (linux)
* Feature ticket #2665: Include jlog headers in Ecelerity-devel
* Fixed ticket #2668: Discard/multi recipient rejection handling goodmail logic mismatch
* Fixed ticket #2641: Validate_data_spool being invoked once per recipient
* Fixed ticket #2634: Redirect not usable in data/spool/each_rcpt phases
* Feature ticket #2647: Improve robustness of rejectlog
* Fixed ticket #2639: Crash when logging headers of discarded large messages in custom_logger
* Feature ticket #1260: Implement native PostgreSQL datasource driver
* Feature ticket #1411: count option to ec_log_trace
* Fixed ticket #1449: ec_log_trace improvements
* Fixed ticket #2188: allow Security user option to work with clustering
* Feature ticket #2226: make throttles in a regex domain work the same when they're shared across a cluster
* Fixed ticket #2344: eccmgr valgrind error on rh5
* Fixed ticket #2434: added sieve accept hook point
* Fixed ticket #2534: Add replication to ec_gauge_cache
* Fixed ticket #2537: some expansions to ec_log_trace
* Fixed ticket #2543: ec_log_trace does not correctly track deliveries, perm and trans fail with --from* filters
* Fixed ticket #2560: Permissions Issues on Fresh Installs with the Web Console
* Fixed ticket #2562: broken rpath in spread perl modules on 64-bit linux
* Fixed ticket #2568: mbusd_monitor doesn't fail gracefully when config file isn't there
* Fixed ticket #2581: ec_lic_wrapper doesn't call prepare_ec_lic properly
* Fixed ticket #2582: Goodmail checker dynamic loading thread safety issue
* Fixed ticket #2583: Goodmail checker asynchronous processing issue
* Feature ticket #2587: ec_rt_stats now has an -e option to set the modules directory
* Fixed ticket #2588: ec_lic creates its license mode 0600
* Fixed ticket #2590: ec_rrdd memory exhaustion when used in cluster mode and ecspread is not installed
* Fixed ticket #2595: Goodmail checker doesn't support external recipient validation
* Feature ticket #2597: added %mx custom logger macro
* Fixed ticket #2604: fsav tests fail after server restart or package update due to wrong perms on the socket
* Fixed ticket #2605: Changing a domain's name doesn't work
* Fixed ticket #2625: race when custom_logger logs %h for some perm fails
* Feature ticket #2626: sieve `address` can now be used as an action that returns an address portion
* Fixed ticket #2632: DKIM: Missing v= signature tag reports bogus values
* Fixed ticket #2633: sieve ec_include would not perform requires checks
* Fixed ticket #2636: dkim: double free in clear_b_tag()
* Fixed ticket #2643: antivirus modules don't behave passively when loaded in passive mode
* Fixed ticket #2646: added sendfile support for Mac OSX 10.5
* Fixed ticket #2652: crash under load with clamav
* Fixed ticket #2656: `*_avscan` did not clean up sieve state correctly
* Feature ticket #2658: added max_retry_interval configuration option
* Fixed ticket #2672: possible fault when rejecting invalid messages if tcp stack is under pressure
* Fixed ticket #2673: SPOOL-02340 abort when using sieve discard with multi-recipient mail
* Feature ticket #2674: RFC 2307 password detection for auth_ds
* Fixed ticket #2675: cidrdb did not respect field length
* Feature ticket #2624: Natively integrate rbldnsd into cidrdb

## Ecelerity version 2.2.1.22 released on 2007-10-05
* Fixed ticket #2177: improved statp diagnostics when the rrdd socket is not writable
* Fixed ticket #2484: solaris package compile flags caused Intel Xeon 64 bit incompatibility
* Fixed ticket #2488: Goodmail SMF manifest/method mismatch (Solaris)
* Fixed ticket #2502: message parser performance problem for large messages with strange line endings
* Fixed ticket #2505: statp would not send domain data to rrdd
* Feature ticket #2508: make audit_series_add usable in spool/each_rcpt phase
* Fixed ticket #2510: binding.h and ec_growbuf.h missing from Ecelerity-devel package
* Fixed ticket #2512: sieve body binary test regression
* Fixed ticket #2523: DKIM RFC4871 does not require the q= tag, but our implementation did
* Fixed ticket #2526: AUTH PLAIN doesn't handle optional initial-response argument (RFC-2554 Section 4)
* Feature ticket #2529: Added x-return-dn extension to ds_ldap for retrieving the DN as a named column in the result set
* Fixed ticket #2530: ecmm io_object leak
* Fixed ticket #2531: eccmgr:// io wrapper buffer size had a fixed length that was sometimes too small for the data being fetched
* Fixed ticket #2533: RSS, Memory_Goal and Memory_HWM were not entirely accurate
* Feature ticket #2535: Added optional :ip argument to audit_series, audit_series_add and check_cidr
* Fixed ticket #2546: gmsi_imprinter crash on invalid recipient
* Fixed ticket #2567: header removal would skip consecutive headers of the same name
* Fixed ticket #2571: trywritef2 NULL dereference in some cases when a session times out
* Fixed ticket #2504: large message always subjected to a full parse on swap in
* Fixed ticket #2570: regression of :contains behavior in ec_test
* Fixed ticket #2574: ec_redirect would accept mail but fail to deliver it
* Feature ticket #2359: Added 'g' macro to custom_logger as a placeholder for the binding group
* Feature ticket #2358: when Pedantic_Address_Rules is turned off, we now allow multiple trailing spaces in MAIL FROM/RCPT TO
* Fixed ticket #2528: Failed AUTH followed by successful AUTH in same transaction leaks a small amount of memory
* Fixed ticket #2487: custom_logger triggers a message parse in scheduler thread when its format string requests headers
* Feature ticket #2573: added `message fail quiet` console command

## Ecelerity version 2.2.1.21 released on 2007-09-07
* Fixed ticket #1807: ehlo validation should check for a space
* Fixed ticket #1933: maildir and jlog mess with the umask()
* Fixed ticket #1974: make cidrdb grok rbldnsd formats
* Fixed ticket #2074: Thread local storage leaks when threads exit
* Feature ticket #2166: cidrrange arbitrary data storage
* Fixed ticket #2339: document Ecelerity's resolv.conf format
* Fixed ticket #2353: default_binding = suspended doesn't work
* Feature ticket #2365: seedlist can be loaded multiple times with alternate criteria
* Fixed ticket #2384: solaris linkage issue with Ecelerity::Embed
* Feature ticket #2389: cluster caches now support snapshots
* Fixed ticket #2397: thread unsafe use of inet_ntoa
* Fixed ticket #2404: cluster messages destined for another cluster node can get stuck
* Fixed ticket #2417: ldap crash in connection caching code
* Fixed ticket #2421: sieve script cache doesn't behave correctly for parameterized ec_include
* Fixed ticket #2423: printf expansion crash in trywritef2
* Fixed ticket #2425: solaris installer forgets to install some packages
* Fixed ticket #2429: Interface management list inefficiency
* Fixed ticket #2431: legacy email_messages unnecesarily allocated
* Fixed ticket #2432: assert when swapping out invalid mime messages
* Fixed ticket #2433: Domain's Gateway value not showing up in the webconsole.
* Fixed ticket #2436: Statistics section missing from cluster web console
* Fixed ticket #2437: wedge and/or memory corruption in smtp_callback_verify
* Fixed ticket #2438: deprecated ec_stats tool had multiple parse errors
* Feature ticket #2439: Added persist:// IO wrapper, which caches `remote` data locally
* Fixed ticket #2440: ecldap also links against system ldap on suse93
* Feature ticket #2443: add sieve ec_get_message_id and ec_get_message_spool_name actions
* Fixed ticket #2444: modifying a large message created with generate_mail_raw after it has been spooled may cause an assert
* Fixed ticket #2445: ecmm logs copious debug info at DCRITICAL
* Feature ticket #2446: added sieve add_recipient action that effecively adds Bcc's to the current message
* Fixed ticket #2448: Sieve extension tests don't properly support SIV_AGAIN
* Feature ticket #2449: ec_maildir action doesn't create directories for domains
* Fixed ticket #2453: ec_message_swap_in doesn't respect SWAP flags in all cases
* Fixed ticket #2456: segfault with jinterp and ec_dump_config
* Fixed ticket #2459: added /etc/hosts sanity checks when running as a cluster node
* Feature ticket #2460: Support the PLAIN auth method
* Fixed ticket #2461: integer compare in ec_test causes crash
* Fixed ticket #2466: cluster message move could cause duplicate message ID and crash
* Fixed ticket #2471: DNS query ID conflicts resulted in domains hanging in limbo
* Fixed ticket #2473: allow_null_envelope_sender does not work correctly
* Fixed ticket #2474: 'summary' command would count queues in the DRB twice for total queue size
* Fixed ticket #2475: Slow scheduler turnover
* Fixed ticket #2477: mime parser epilogue bug
* Fixed ticket #2478: potential message corruption when using the cloudmark module.

## Ecelerity version 2.2.1.20 released on 2007-08-16
* ticket #2419: stability issue when using sieve ec_include under load

## Ecelerity version 2.2.1.19 released on 2007-08-15
* NOTE: ABI changed in this release; if you have custom C/C++ modules you must recompile them in order for them to continue running correctly against this version.
* Feature ticket #247: RADIUS authentication
* Feature ticket #2401: Reduce ec_message memory footprint
* Fixed ticket #2403: Crash in connection_available()
* Fixed ticket #2406: v0 swap_in method doesn't perform v0->v1->v0 conversion
* Fixed ticket #2410: ds_ldap crash when using a cached bind-only connection that previously failed
* Fixed ticket #2412: leak when fixing line endings or line lengths in messages
* Fixed ticket #2414: message code memory leak when using legacy modules
* Fixed ticket #2416: mime boundary string memory leak

## Ecelerity version 2.2.0.18 released on 2007-08-10
* Fixed ticket #1691: Stale ARP entries on some firewalls
* Feature ticket #2218: sieve introspection into thread pool queue sizes
* Feature ticket #2330: maintain thread pool stats at job-type level
* Fixed ticket #2363: 550 Too many invalid recipients classified incorrectly
* Feature ticket #2379: auth_ds support for Openwave
* Fixed ticket #2381: h_to_c crash in ec_message_free() with async logger
* Fixed ticket #2386: ec_action 554 on connect did not observe RFC2821
* Fixed ticket #2388: dkim 'write config' incorrect
* Fixed ticket #2390: Solaris 11 port_dissociate behavior change doesn't play well with #2337
* Fixed ticket #2391: ec_double_list issues
* Fixed ticket #2392: sieve hash_set should have replace semantics
* Feature ticket #2393: support snmp trap notifications from sieve
* Fixed ticket #2395: custom logger can't log server response on delievry
* Fixed ticket #2398: cluster: Self delivery causes message ID conflicts
* Fixed ticket #2399: Incorrect use of ec_bswap64()

## Ecelerity version 2.2.0.17 released on 2007-08-06
* Changed alias module so that it is disabled by default; see the Alias_Schemes documentation for more details.
* Fixed ticket #1995: log watchdog restarts
* Fixed ticket #2187: trace headers show first rcpt in multi-recipient mail
* Fixed ticket #2252: ec_spp segfaults
* Feature ticket #2318: allow finer grained control of alias expansion
* Fixed ticket #2325: ec_parse_url needs tests, fixes
* Fixed ticket #2326: ec_dump_config and corpus features call reconfigure twice
* Fixed ticket #2327: make heartbeat_beat safe to call from non-Ecelerity process
* Fixed ticket #2331: alias improvements for LDAP
* Fixed ticket #2336: Adding return-path headers
* Fixed ticket #2337: Solaris ports scheduler issues
* Fixed ticket #2338: reject_log writes in the main thread
* Fixed ticket #2340: Don't require root unless you use DuraVIP
* Fixed ticket #2341: a closed jlog index that contains bogus offsets is never repaired
* Fixed ticket #2342: ec_action's first argument can only be an integer
* Fixed ticket #2343: Goodmail SHA1 implementation not happy on Solaris
* Fixed ticket #2345: remove read half from jlog and cluster IO wrappers
* Fixed ticket #2346: 0-length jlog message causes goodmail report client to skip the rest of the jlog segment
* Fixed ticket #2347: body_len is only set for reception logs in ec_logger
* Fixed ticket #2351: ecdict uses untyped memory
* Fixed ticket #2352: Don't spool in the dictionaries
* Fixed ticket #2355: routes option needs better config handling, docs and test fixes
* Fixed ticket #2357: unitialized access in reception custom_logger during soft bounce generation
* Fixed ticket #2361: Invalid read in custom_logger
* Fixed ticket #2370: ERROR: Cannot initialize privilege database
* Fixed ticket #2372: peer connection details not logged correctly in AAA for SMTP auth
* Fixed ticket #2373: multiple SMTP auth attempts on a connection get confused
* Fixed ticket #2378: migrate_logs memory leak

## Ecelerity version 2.2.0.16 released on 2007-07-18
* Fixed ticket #446: outbound_audit 'show global' did not act as documented
* Fixed ticket #1931: XCLIENT now respects and uses 'xtext' encoding where required
* Fixed ticket #2220: bounce_domains and relay_domains didn't lowercase values from the config file
* Fixed ticket #2301: ec_rrdd tries to start before mbusd_monitor on SuSE 10 and fails
* Fixed ticket #2303: potential DNS query crash
* Fixed ticket #2305: Upgrade Goodmail imprinter to use v1 APIs, improves performance
* Fixed ticket #2307: expose datasource errors to sieve via connection context variable `datasource_error`
* Fixed ticket #2311: guarantee correct line endings are used for static_banner listener option
* Fixed ticket #2312: hook headers were not shipped, making it impossible to implement hooks in third party modules
* Fixed ticket #2313: ds_ldap crash
* Fixed ticket #2314: OOB signing crash
* Fixed ticket #2315: potential crash if connection error occurs during outbound delivery
* Fixed ticket #2317: an unset bounce_pattern never matches
* Fixed ticket #2319: webconsole init script fails to start
* Fixed ticket #2320: ec_log_trace didn't understand the heartbeat 'M' records in mainlog

## Ecelerity version 2.2.0.15 released on 2007-07-13
* Feature ticket #1822: sieve ec_rand can now also select a random string from a stringlist
* Fixed ticket #2286: Solaris installer issue
* Fixed ticket #2287: php.ini still broken for Solaris install
* Fixed ticket #2288: Ecelerity in cluster configuration fails to pull config from manager on Solaris on first run
* Fixed ticket #2289: ec_lic fault for some Ecelerity.conf files
* Fixed ticket #2291: webconsole fails to start on sparc Solaris
* Fixed ticket #2292: webconsole graphs broken on sparc Solaris
* Fixed ticket #2293: ds_ldap now treats `no-such-object` errors as `no rows` instead of query failure
* Fixed ticket #2294: errors during alias expansion would result in reporting a trans fail, but deliver mail anyway

## Ecelerity version 2.2.0.14 released on 2007-07-11
* Fixed ticket #1532: EHLO_Hostname now defaults to __hostname__
* Fixed ticket #2264: spool_in failure messages on startup for stranded large message reception files (a benign condition)
* Fixed ticket #2265: broken php.ini for Solaris install
* Fixed ticket #2266: /var/log/Ecelerity owned by root in Solaris packaging (should be ecuser)
* Fixed ticket #2267: garbled real-time logs on Solaris
* Fixed ticket #2268: webconsole pages may show up blank on Solaris
* Fixed ticket #2269: webconsole crypto broken on Solaris
* Fixed ticket #2273: eccmgr missing dependencies on pcre and sqlite packages
* Fixed ticket #2274: Solaris packages missing some 32-bit components
* Fixed ticket #2276: Solaris installer script is now more robust
* Fixed ticket #2281: some open(O_CREAT) calls were missing a mode
* Fixed ticket #2283: ec_ctl not cluster aware on Solaris
* Fixed ticket #2284: Regex Domain crash
* Fixed ticket #2285: eccmgr reports `Unknown command` after processing some commands in ec_console

## Ecelerity version 2.2.0.13 released on 2007-07-10
* Fixed ticket #2262: DuraVIPs flip-flop excessively

## Ecelerity version 2.2.0.12 released on 2007-07-09
* Fixed ticket #1602: eccmgr_ctl failed to restart eccmgr
* Fixed ticket #1702: bad behavior when running sieve scripts in hooks
* Fixed ticket #2246: logs don't appear on webconsole upgrade from 2.1.x
* Fixed ticket #2248: migrate old webconsole data to new format on upgrade
* Fixed ticket #2249: broken rpath for mbuscfg
* Fixed ticket #2251: broken rpath for icu module
* Fixed ticket #2253: failure to start service on system boot on SuSE
* Fixed ticket #2254: Regex Domain parser issue
* Fixed ticket #2255: Ecelerity::Control now ships with eccmgr again, re-enabling eccluster_pull_config
* Fixed ticket #2256: Regex Domain crash
* Fixed ticket #2257: bad interaction between antivirus and sieve raw tests

## Ecelerity version 2.2.0.11 released on 2007-07-06
* Fixed ticket #2232: macro processing order incorrect (regression introduced by #2132)
* Fixed ticket #2233: webconsole Domains page error
* Fixed ticket #2234: incorrect deps for eccmgr in linux installer script
* Fixed ticket #2236: incorrect instructions for eccmgr install in installer script
* Fixed ticket #2237: eccmgr install now creates directories and initializes subversion repository if they don't exist
* Fixed ticket #2238: incorrect deps for cluster module in linux installer script
* Fixed ticket #2239: removed references to ec_lic from eccmgr packaging
* Fixed ticket #2240: compiler optimization problem on Solaris i386
* Fixed ticket #2241: ec_rrd now creates the missing directories it needs
* Fixed ticket #2242: cluster console now uses the correct realm for eccmgr auth
* Fixed ticket #2243: cluster console no longer looks for Ecelerity.conf

## Ecelerity version 2.2.0.10 released on 2007-07-05
* Fixed ticket #1786: SMTP deviation if alias expansion results in an invalid recipient
* Feature ticket #1914: expanded sieve audit_series actions
* Feature ticket #1930: cluster integration for sieve audit_series actions
* Feature ticket #1945: Upgraded compress_spool module to new APIs
* Feature ticket #2007: Added sieve ec_config action for introspecting configuration
* Feature ticket #2129: ds_ldap now caches connections
* Feature ticket #2132: it is now possible to use sieve string macro expansions in custom logger
* Fixed ticket #2140: enabled DomainKeys and DK signing (if configured) for mail generated by the seedlist module
* Feature ticket #2146: added new ec_message_set_next_attempt_hook()
* Fixed ticket #2222: 64-bit webconsole installed php.ini to wrong location
* Fixed ticket #2225: messages too large for legacy modules could trigger a failed assertion
* Fixed ticket #2230: DomainKeys nofws canonicalizer was broken

## Ecelerity version 2.2.0.9 released on 2007-06-25
* Feature ticket #2145: added hook for swap_out_multi()
* Feature ticket #2158: added ec_message_get_size action to sieve
* Fixed ticket #2164: various jlog fixes and improvements
* Fixed ticket #2179: outbound smtp fault for domains under high load
* Fixed ticket #2199: potential denial-of-service with malformed messages
* Fixed ticket #2206: fault in soft-bounce generation with use_mmap enabled, or with large messages.
* Fixed ticket #2207: shutdown should not wait for spool-in
* Fixed ticket #2209: fault when timing out due to outbound throttling
* Fixed ticket #2210: deadlock for domains with large queues and max_deliveries_per_connection set
* Fixed ticket #2217: Ecelerity::Control failure on SuSE linux

## Ecelerity version 2.2.0.8 released on 2007-06-14
* Feature ticket #1990: improved console summary performance for large numbers of bindings
* Feature ticket #2043: relay_for_sending_domains in the listener stanza now supports left globbing
* Fixed ticket #2152: cloudmark micro_updates had root ownership instead of ecuser
* Fixed ticket #2170: spool failures on RHEL 3 under high load on quad-core
* Fixed ticket #2179: outbound smtp malfunction under high load
* Fixed ticket #2180: random icu conversion failure
* Fixed ticket #2182: dns-cache invalid free when multiple policy modules resolve the same record concurrently
* Fixed ticket #2183: multi-recipient mail referencing issue
* Fixed ticket #2191: sieve fault when using ec_include and ds_fetch
* Fixed ticket #2192: assertion failure for some complex mime messages

## Ecelerity version 2.2.0.7 released on 2007-06-08
* NOTE: the `antivirus` module must now be loaded as a Validate module. It will indicate if your configuration needs to be changed when you start the instance.
* Feature ticket #1920: added Java class for connecting to the Ecelerity control channel.
* Fixed ticket #1942: Performance and reliability improvements for f-secure AV.
* Feature ticket #1962: added ability to set complex configuration types online via the console.
* Feature ticket #1973: Improved diagnostics for mbus_monitor
* Fixed ticket #2020: Possible data loss when multiple writers write to the same jlog.
* Fixed ticket #2096: Quarantine meta-data locking issue
* Fixed ticket #2098: Possible crash in jlog
* Feature ticket #2144: Improved diagnostics when `trace smtp` could not act as requested.
* Fixed ticket #2153: Possible Sender-ID crash
* Fixed ticket #2154: MIME parser issue that could result in an assertion on spool-in with messages that have two levels of nesting.
* Feature ticket #2158: added ec_get_message_size sieve action to return the size of the current message
* Feature ticket #2162: added support for unix style crypt() in authentication storage layer.
* Feature ticket #2165: improved flexibility of auth_ds when used in conjunction with ldap when using `returns_password` = `true`

## Ecelerity version 2.2.0.6 released on 2007-05-24
* Fixed ticket #1783: make datasource config output conform to new format
* Fixed ticket #1960: regex domain matching halting too soon
* Fixed ticket #1964: config system performance improvement
* Fixed ticket #1965: disambiguate bindings from binding groups in `binding summary` console command
* Fixed ticket #1971: per-message outbound tls hook not always respected
* Fixed ticket #1977: Add AAA support to eccmgr
* Fixed ticket #2077: improve logging before assertion induced shutdown
* Fixed ticket #2097: DK public keys don't always form properly
* Fixed ticket #2115: spurious jlog error on startup
* Fixed ticket #2118: cluster: shared updates may fail to announce
* Fixed ticket #2119: use_mmap = true would sometimes cause crashes
* Fixed ticket #2120: crash in alias module
* Fixed ticket #2121: spf crash
* Fixed ticket #2122: sieve/charset memtype mismatch
* Fixed ticket #2123: EHLO trailing space on capabilities with no parameters
* Fixed ticket #2125: false positive matching with sieve body :content match
* Fixed ticket #2134: Empty Content-Transfer-Encoding header causes Ecelerity to spin
* Fixed ticket #2135: spf macro crash
* Fixed ticket #2136: assertion fail with legacy io module
* Fixed ticket #2137: multi recipient mail shares header references too long

## Ecelerity version 2.2.0.5 released on 2007-05-11
* Fixed ticket #1878: ec_lic now understands uri based includes in the Ecelerity.conf
* Feature ticket #1902: CIDR block functions in sieve
* Fixed ticket #1944: Upgraded outbound audit to use new APIs
* Fixed ticket #1983: Calculate next_attempt and num_retries from creation_time
* Feature ticket #1996: showqueue command improvements
* Fixed ticket #2010: Renamed omniti_tools to policy_tools
* Fixed ticket #2089: spf %{p} macro crashes string interpolation in sieve
* Fixed ticket #2090: spurious warning on webconsole summary page on fresh install.
* Fixed ticket #2093: crash when using :raw to test a large message that has a part with no headers
* Fixed ticket #2094: sieve_get_email_message() abort
* Fixed ticket #2095: ec_trace_context output fixed
* Fixed ticket #2099: validation context not reset correctly after message reception
* Fixed ticket #2100: SPF macros crash outside of SMTP transaction
* Fixed ticket #2103: mbus manifest not imported for solaris Ecelerity install
* Fixed ticket #2104: ecstream_factory doesn't export the can_relay context var
* Fixed ticket #2105: ecxs permissions
* Fixed ticket #2106: ecxs doesn't know where pcre and sqlite are
* Fixed ticket #2111: smtp_cbv crash at startup when cbv cache configured
* Fixed ticket #2112: Perl hooks that return char* leak memory and return null

## Ecelerity version 2.2.0.4 released on 2007-05-04
* Feature ticket #1451: added ThreadPool stanza for configuring arbitrary thread pools. Deprecated: Async_Spool_In Worker_CPU_Concurrency Worker_IO_Concurrency Async_Close_Concurrency Async_Unlink_Concurrency Async_Unlink_Backlog Batch_Unlink_Concurrency Async_Swap_Out Async_Swap_In in favor of the ThreadPool stanza.
* Fixed ticket #1515: rpm upgrade would force chown to ecuser
* Feature ticket #1242: add cache introspection console commands `ds_core stats`
* Feature ticket #1594: added ec_spool_space and ec_mem_usage sieve actions for making policy decisions based on free memory and disk space.
* Feature ticket #1643: ec_rotate now uses its config file by default.
* Feature ticket #1754: add `rebind` console command for rebinding messages
* Fixed ticket #1873: java interpreter dynamic link exception in some cases
* Fixed ticket #1899: resolved inconsistencies between the sieve envelope and validation context values.
* Feature ticket #1914: expanded inbound_audit sieve actions.
* Feature ticket #1917: ec_rewrite_mailfrom with an invalid address now throws a sieve error.
* Feature ticket #1934: added RFC2822 Maximum_Line_Length option to accept, reject or fix messages with lines that exceed the maximum described in RFC2821.
* Feature ticket #1947: added bind-only operation to the ds_ldap driver. If the filter portion of the query is omitted, the lookup will return a single `bind` column with a value of 1 for a successful bind.
* Feature ticket #1993: added `diable_nagle` option to disable the nagle algorithm for all TCP sockets created by Ecelerity.
* Fixed ticket #2020: jlog issues under high concurrency
* Fixed ticket #2052: Brightmail driver returns error for large messages.
* Fixed ticket #2054: perl interpreter recursion problem when using Ecelerity::Message::Long->new, or for legacy modules calling the old email_message_allocate_anonymous() API if there is a v0 IO module loaded.
* Fixed ticket #2055: Brightmail driver fails if RCPT TO has _ in it.
* Fixed ticket #2057: java interpreter run path for the JRE on Linux is now /opt/Ecelerity/3rdParty/jre, which is created as a symlink to your JRE when installed using the installer script.
* Fixed ticket #2059: crash when shrinking a thread pool online.
* Fixed ticket #2061: plugged leak in Routes configuration handling
* Fixed ticket #2062: log an error (instead of crashing) when using the vctx if it is not available
* Fixed ticket #2063: configuration errors no longer say that the impossible has happened.
* Fixed ticket #2064: race driven crash in smtp_delivery_handler in some cases when generate_bounces is enabled.
* Fixed ticket #2065: Body length not set correctly when multi-recipient messages have headers added in each_rcpt sieve phase
* Fixed ticket #2066: Brightmail driver double-free
* Fixed ticket #2068: accelerated matches in sieve would ignore interpolated variables
* Fixed ticket #2069: sieve envelope test results could `stick` in complex logic.
* Fixed ticket #2081: Config includes with relative paths cause segfault.
* Fixed ticket #2086: crash if legacy TLS hook points are registered
* Feature ticket #1977: Add AAA support to eccmgr
* Fixed ticket #2085: Binding summary counters incorrect

## Ecelerity version 2.2.0.3 released on 2007-04-17
* Removed deprecated lazy_backing_store option
* Removed deprecated ndbm_cache module
* Removed deprecated Relay_Domain option from the domain stanza
* Feature ticket #128: accelerate sieve :is matches against large stringlists
* Feature ticket #253: added RFC2822 Maximum_Line_Length option to enforce line length limitations as specified in RFC2822 section 3.5
* Feature ticket #294: added a variety of math functions to sieve
* Feature ticket #272: allow dns expansion in non-scheduler threads
* Fixed ticket #309: outbound throttle leaves sessions open past idle timeout
* Feature ticket #372: added sieve action smtp_callback_verify to smtp_cbv module
* Feature ticket #429: implemented binding aware showqueue
* Feature ticket #460: Ecelerity now generates RFC3464 conformant DSNs
* Fixed ticket #471: Extra sanity checks when loading a module as the wrong type
* Feature ticket #491: improved outbound smtp extensibility APIs
* Feature ticket #584: Greatly improved the ability to handle very large messages.
* Feature ticket #611: Duravip release binding group
* Fixed ticket #649: stack smash when implementing dynamic hooks points on 64-bit architectures
* Fixed ticket #788: display correct domain summary when gateway configured
* Feature ticket #961: added `config unset host hostname` console command
* Feature ticket #1001: enhanced if_list_ips API
* Fixed ticket #1057: spurious svn error on initial mbuscfg check in
* Feature ticket #1126: enhanced interpolation APIs
* Feature ticket #1137: sieve test extensions can now run async
* Feature ticket #1157: Added ability to define domain stanza using regular expressions.
* Fixed ticket #1163: support utilities no longer validate the license.
* Fix ticket #1169: Goodmail memory leak
* Fix ticket #1171: Make the response code returned on goodmail signing error configurable.
* Fixed ticket #1176: rfc2822_field leak with multi-recipient messages and DomainKeys and DKIM
* Feature ticket #1237: datasource based aliasing module
* Feature ticket #1241: datasource caches can now be shared across a cluster
* Feature ticket #1277: add actions ec_set_binding and ec_set_binding_group
* Feature ticket #1295: `paniclog` console command output is now ordered by timestamp
* Feature ticket #1305: added sched module for `at`-style console command scheduling
* Feature ticket #1316: added sieve action hash_keys and hash_values
* Feature ticket #1323: made binding group available in xml log summaries (per binding)
* Feature ticket #1347: Custom message indexing module
* Fixed ticket #1350: fixed a crash in the SPF module
* Fixed ticket #1353: ec_lic requires Ecelerity.conf
* Fixed ticket #1361: Invalid relay domains were ignored silently
* Fixed ticket #1365: stronger validation of DK/DKIM configuration on start up
* Fixed ticket #1382: would fail to startup when spoolbase option was not defined
* Feature ticket #1412: Goodmail sign_condition
* Fixed ticket #1427: num_retries was not updated correctly in all cases
* Fixed ticket #1430: Get rid of the Domainkey-Status header when signing
* Fixed ticket #1441: better handling of swap in error conditions
* Feature ticket #1434: System-wide memory limits
* Fixed ticket #1460: binding groups data incorrect in xml log summaries
* Fixed ticket #1470: fixed Goodmail packaging
* Fixed ticket #1486: DK/DKIM require domain config for each signing domain
* Feature ticket #1496: Checklist maintenance control commands
* Fixed ticket #1497: config unset for runtime-extended config options had no output
* Feature ticket #1507: dns_get_MXs and dns_get_As hooks should register last, not first
* Feature ticket #1508: Seedlist module license check
* Feature ticket #1509: Checklist module license check
* Feature ticket #1510: Sieve module license check
* Feature ticket #1516: SSL sessions by supplying an SSL directive
* Feature ticket #1520: added ec_test_binding and ec_test_binding_group sieve actions
* Feature ticket #1537: added a result cache for smtp_cbv
* Feature ticket #1546: added is_valid_IP and is_rfc821_IP sieve tests
* Feature ticket #1542: enhanced message parser
* Fixed ticket #1547: invalid queue times recorded in ec_logger
* Feature ticket #1555: added throttling functions to sieve
* Fixed ticket #1560: make changes to esmtp_factory dictionaries localized to the session.
* Feature ticket #1593: enhanced custom routing configuration options
* Fixed ticket #1598: regex_binding2 crash on parse failure
* Feature ticket #1610: added envelope sender to trace headers
* Fixed ticket #1631: cluster jobs never timeout
* Feature ticket #1633: decoupled DuraVIPs from bindings
* Fixed ticket #1636: config set relay_domains doesn't work
* Fixed ticket #1637: eccmgr now posts data direct to stats daemon
* Feature ticket #1642: per item TTL in ec_cache
* Feature ticket #1646: added macros for accessing message body parts from sieve
* Feature ticket #1647: added generate_mail action to sieve
* Feature ticket #1648: upgraded Goodmail imprinter to version 1.2
* Fixed ticket #1650: Goodmail header-controlled logic issues
* Fixed ticket #1657: cluster_membership_update hook triggered from the wrong location.
* Fixed ticket #1658: Cluster message move doesn't consider bindings equally.
* Fixed ticket #1659: cluster membership information wouldn't always come through.
* Feature ticket #1660: added sieve action for generating a mime part boundary.
* Feature ticket #1661: added SDK routine for canonicalizing line endings
* Feature ticket #1662: added sieve action for rfc2047 header encoding
* Fixed ticket #1663: crash when setting binding_group
* Feature ticket #1670: config system enhancements
* Fixed ticket #1672: added ec_rfc3464_delivery_status sieve action
* Feature ticket #1674: Allow Relay_Hosts to be set on a listener acl basis
* Fixed ticket #1679: invalid read in sieve
* Fixed ticket #1688: TLS_Certificate = `none` now works as advertised
* Feature ticket #1689: Added Authentication, Authorization and Accounting subsystem.
* Fixed ticket #1706: ec_forward now canonicalizes line endings when assembling a message.
* Fixed ticket #1712: Naming error for regex_binding2
* Feature ticket #1716: added error handling pragma to sieve
* Fixed ticket #1721: cluster: conflict state not cleared when a conflict was resolved.
* Fixed ticket #1734: Destroy the Goodmail session on error
* Fixed ticket #1736: can now check DKIM validation status from sieve
* Fixed ticket #1742: connection_abort delays too many messages
* Fixed ticket #1745: Cluster doesn't disconnect completely on shutdown
* Feature ticket #1747: added `bag of holding` to SDK
* Feature ticket #1749: added pager functionality to ec_console
* Fixed ticket #1751: ecmm memory type mismatch
* Fixed ticket #1752: DKIM signing domain validation
* Feature ticket #1758: cluster wide named throttles
* Fixed ticket #1757: some events were not cleaned up correctly
* Feature ticket #1761: added static_banner option to listener to override the default banner for inbound connections.
* Feature ticket #1762: raised default Server_Max_Outbound_Connections to 75000
* Fixed ticket #1762: fixed a bug in the pipe_transport when writing headers
* Fixed ticket #1769: rejectlog.ec error code error
* Feature ticket #1775: changed logger modules to use the thread pool facility rather than their own ad-hoc thread creation.
* Feature ticket #1778: improved performance of regex_binding2
* Fixed ticket #1780: log an error when an invalid recipient is detected during enqueue.
* Feature ticket #1781: added ec_spp utility to validate sieve scripts
* Feature ticket #1782: memory based io objects
* Feature ticket #1788: made binding group assignment extensible
* Fixed ticket #1794: eccmgr packaging for Solaris
* Fixed ticket #1798: Fully_Resolve_Before_SMTP is now the default behavior
* Fixed ticket #1801: Return characters were not converted to entity references in the custom logger module.
* Fixed ticket #1802: improve ARP usage for DuraVIP
* Fixed ticket #1808: sieve scripts using ec_header_get before the data phase will now error out during compilation.
* Feature ticket #1823: expose reception protocol through sieve
* Feature ticket #1825: validation context is now spooled along with meta data.
* Feature ticket #1836: added remote ip in delivery and failure logs in ec_logger
* Fixed ticket #1839: made messaging bus more robust
* Fixed ticket #1841: ec_header_(post|pre)fix unconditionally add headers
* Feature ticket #1847: cluster message movement is now handled by SMTP state machine
* Fixed ticket #1856: remove 64-bit messaging bus daemon component
* Feature ticket #1859: make outbound throttles cluster aware
* Fixed ticket #1860: XREMOTEIP doesn't re-apply listener ACLs
* Fixed ticket #1861: Standardize SPF status codes
* Feature ticket #1865: added `binding fail domain example.com all` console command
* Fixed ticket #1867: Small TTLs ignored by dns cache
* Fixed ticket #1868: dns cache issues
* Feature ticket #1885: added option to allow reception of messages with no headers
* Feature ticket #1896: added `cache clear all` console command to flush caches
* Feature ticket #1897: Added watchdog_timeout configuration option
* Fixed ticket #1912: ec_discard crash when used in rcptto_phase
* Feature ticket #1925: update sieve body tests to draft 6
* Feature ticket #1927: ecmm templatization now occurs in a thread pool
* Fixed ticket #1935: added ec_gauge_cache functions to sieve
* Feature ticket #1941: update DKIM to draft 10
* Fixed ticket #1968: unlink could occur before soft bounce generation for custom IO modules.
* Fixed ticket #1984: auth_ds now supports CRAM-MD5 and DIGEST-MD5 authentication.
* Fixed ticket #1987: allow thread pools to drain fully on shutdown
* Fixed ticket #1988: `xml showqueue domain` output was invalid XML
* Fixed ticket #2012: custom_logger %c code not always working correctly
* Feature ticket #2013: Add bounce classification code to custom_logger set
* Fixed ticket #2030: Move config.h to ec_config.h
* Fixed ticket #2033: scheduler could sleep for longer than watchdog timeout.

## Ecelerity version 2.1.1.25 released on 2008-07-22
* Fixed ticket #3702: make tls_verify = no mean no certificate verification at all

## Ecelerity version 2.1.1.24 released on 2007-09-26
* Fixed ticket #2357: Error in reception custom_logger during NDR generation
* Fixed ticket #2148: Update Goodmail Imprinter Library
* Fixed ticket #2337: Solaris ports scheduler issues
* Fixed ticket #2338: reject_log actions moved to threadpool
* Fixed ticket #2343: Goodmail SHA1 implementation flawed on Solaris
* Fixed ticket #2346: 0-length jlog message causes goodmail report client to skip the rest of the jlog segment
* Fixed ticket #2388: dkim 'write config' can return inaccurate data
* Fixed ticket #2423: printf expansion crash in trywritef2
* Fixed ticket #2538: allow pedantic address rules to allow multiple trailing spaces on MAIL FROM/RCPT TO

## Ecelerity version 2.1.1.23 released on 2007-07-15
* Fixed ticket #2217: Ecelerity::Control failure on SuSE linux
* Fixed ticket #2290: ec_ctl reports tail error on Solaris
* Fixed ticket #2303: ares query crash

## Ecelerity version 2.1.1.22 released on 2007-06-22
* Feature ticket #2148: Package new Goodmail Imprinter
* Fixed ticket #2020: multiple jlog writes cause data loss
* Feature ticket #1902: Introduce cidrdb module
* Fixed ticket #2191: Stale module state in 'ec_include' sieve action
* Fixed ticket #2193: sockpacket interface list buffer limits number of DuraVIPs
* Fixed ticket #2195: 64 bit linux links against incorrect ldap libraries
* Fixed ticket #2198: 'binding fail domain quiet' does not work
* Feature ticket #2016: add slice aggregation to audit_series functions
* Feature ticket #2162: support crypt encryption is auth_ds
* Feature ticket #1957: Referencing a stringlist as a string should return the first element, not an empty string.
* Fixed ticket #2212: Sendfile usage on Solaris can cause duplicate buffer sends.
* Feature ticket #2067: Install 32 and 64 bit Cloudmark support on Solaris.

## Ecelerity version 2.1.1.21 released on 2007-05-23
* Feature ticket #431: Relay_Hosts = (foo.com) now generates an error
* Fixed ticket #1921: garbage text output for some config syntax errors
* Feature ticket #2102: Added Pedantic_Address_Rules option to allow relaxing strict RFC2821 local addressing rules.
* Fixed ticket #2128: config_get_domain_ hooks can be ignored
* Fixed ticket #2130: Folded headers don't work properly in gmsi_imprinter
* Fixed ticket #2133: Cluster message move queue mismanagement

## Ecelerity version 2.1.1.20 released on 2007-05-16
* Fixed ticket #2123: Trailing space on some SMTP capabilities
* Fixed ticket #1341: Negative delayed queue counter in binding stats

## Ecelerity version 2.1.1.19 released on 2007-05-14
* Fixed ticket #2103: mbus manifest not importing on solaris install
* Fixed ticket #2088: port configurable watchdog timeout from 2.2
* Fixed ticket #2099: message vctx not cleaned correctly in RSET
* Fixed ticket #2108: LDAP escaper does not quote ?s
* Fixed ticket #2101: eccmgr won't pull its own license

## Ecelerity version 2.1.1.18 released on 2007-05-02
* Fixed ticket #2062: crash instead of error when misusing vctx in sieve.
* Fixed ticket #2042: Selector omission crash in DK and DKIM signers
* Fixed ticket #2070: ec_redirect could cause smtp session to perm fail.
* Fixed ticket #2079: Sieve hash dimension access memory leak
* Fixed ticket #2081: Config includes with relative paths cause segfault.
* Fixed ticket #2084: eccmd.exe didn't init config system fully.

## Ecelerity version 2.1.1.17 released on 2007-04-25
* Fixed ticket #2065: Body length not set correctly when multi-recipient messages have headers added in each_rcpt sieve phase
* Fixed ticket #2066: Brightmail driver double-free

## Ecelerity version 2.1.1.16 released on 2007-04-11
* Fixed ticket #2021: Incorrect pointer passed to sieve_arg_as_string in ds_sieve
* Fixed ticket #2023: Sporadic crash in Cloudmark extension
* Fixed ticket #2034: Set file mode when opening 'trace smtp' files
* Fixed ticket #2018: 'config set relay_domains' and 'config set bounce_domains' error from CLI.
* Fixed ticket #2025: LDAP referrals fail against Active Directory from Solaris
* Fixed ticket #2034: Set file mode when opening 'trace smtp' files.
* Fixed ticket #2044: custom_logger mis-detects prereqs for certain macro combinations,
* Fixed ticket #2045: icu module now links against system icu libraries on Solaris.
* Fixed ticket #2046: regex_binding2 multi-line header parsing issues

## Ecelerity version 2.1.1.15 released on 2007-03-12
* Fixed ticket #1950: Incorrect echash iterator use in shared lazy
* Fixed ticket #1952: ec_shared_lazy_gauge_table buffer overrun
* Fixed ticket #1972: self signed are now allowed when using no verify
* Fixed ticket #1991: crash in out of band bounce processing
* Fixed ticket #1994: regex_binding2 crash with certain rand() values
* Fixed ticket #2001: sieve failed to match variable stringlists
* Fixed ticket #2005: System does not error out with conflicting DuraVIP names
* Fixed ticket #2006: uncategorized bounces sometimes classified as aggregate
* Fixed ticket #1891: eccmgr log jobs not always killed when mbusd disconnects
* Fixed ticket #1926: Implement greedy read of LIVE_CLOSURE in cluster module
* Fixed ticket #1927: ECMM templatization now performed in the CPU thread pool
* Fixed ticket #1998: Optimize mail queue maintenance strategy
* Fixed ticket #1898: Preserve the esmtp server state machine progress in situations involving blocking write operations

## Ecelerity version 2.1.1.14 released on 2007-02-15
* Feature ticket #1918: Add username_localpart and username_domain tokens to auth_ds maps.
* Fixed ticket #1919: memory leak when performing auth queries
* Feature ticket #1914: Track arbitrary time windows data in inbound_audit
* Fixed ticket #1932: FD leak and failure loop in cluster message move
* Feature ticket #1935: Make named gauge tables accessible via sieve
* Fixed ticket #1948: Special handling for hotmail bounces incorrect

## Ecelerity version 2.1.1.13 released on 2007-01-30
* Fixed ticket #1871: inbound_audit mess not fetched properly
* Fixed ticket #1881: Sieve sometimes initializes the RFC2822 context multiple times unnecessarily.
* Fixed ticket #1880: datasource memory leaks
* Fixed ticket #1874: ds_mysql issues
* Fixed ticket #1883: url_ripper backtracking unnecessarily
* Fixed ticket #1756: Cluster getting messages that are too big
* Fixed ticket #1795: Don't ever execute 64 bit spread
* Fixed ticket #1884: sieve returned VALIDATE_AGAIN incorrectly under ecstream.
* Fixed ticket #1887: buf_storage and message_construct memory leak if inbound smtp session times out
* Fixed ticket #1893: kav/clamav per-thread fd persistence problem
* Fixed ticket #1894: ec_dns_lookup missing delref on resume
* Fixed ticket #1892: Events incorrectly freed due to an incorrect mask returned after a would-block situation under high load
* Fixed ticket #1872: Sieve memory accounting error and leak
* Feature ticket #1886: Sieve accessor for all conn type metrics. Also use a conn type metric cidr tree for the cluster inbound_cidr tree

## Ecelerity version 2.1.1.12 released on 2007-01-08
* Fixed ticket #1737: port maps in regex_binding2 use network order
* Fixed ticket #1739: Bounce processing does not correctly identify unsubs
* Fixed ticket #1732: sieve ds_fetch column order could be randomized if a query returned only a single row
* Feature ticket #1603: Deprecate 'Processor' checks in license
* Fixed ticket #1753: missing group: prefix in regex_binding2 xml output
* Fixed ticket #1616: eccmgr memory leaks
* Fixed ticket #1795: Force execution of 32 bit spread on Solaris
* Fixed ticket #1691: Spoof DuraVIP ARPs more often when something changes.
* Fixed ticket #1814: ecmm passes esmtp_session_abort wrong closure
* Fixed ticket #1527: Cluster module does not support bindings with no bind_address statement
* Fixed ticket #1681: Sieve: Invalid read in macro expansion without a validation context
* Fixed ticket #1850: 'int' hook arguments not cast properly to JNI
* Fixed ticket #1855: Java module exposes process_disk_queue hook incorrectly and does not check the swap status in LongMessage.body()
* Fixed ticket #1864: incorrect retry calculation

## Ecelerity version 2.1.1.11 released on 2006-10-16
* Fixed ticket #1702: Special characters cause problems for ec_stats2
* Fixed ticket #1501: email_message_enqueue() doesn't free bodies as they are placed on the delayed queue.
* Fixed ticket #1719: DuraVIP disowns sometimes were not properly detected by the whole cluster.
* Fixed ticket #1722: static buffer incorrectly used in regex_binding2:extract_fixed_field
* Fixed ticket #1724: Large configs are not handled properly by eccmgr
* Fixed ticket #1717: eclogmove_factory makes too much noise when no logs are configured.
* Fixed ticket #1098: win32 timezone was cached across DST boundaries
* Fixed ticket #1718: win32 eccmd fault with throttled licenses
* Fixed ticket #1730: sieve discard crash instead of compile failure when used in the mailfrom phase.
* Fixed ticket #1700: umem initialization issue on BSDish systems
* Fixed ticket #1731: store rcptto string before syntax validation

## Ecelerity version 2.1.1.10 released on 2006-09-27
* Fixed ticket #1696: Binding into groups results in messages going into default binding.

## Ecelerity version 2.1.1.9 released on 2006-09-25
* Fixed ticket #1540: segfaults in clustering module (printf related)
* Fixed ticket #1564: tighter rfc2821 address validation
* Fixed ticket #1583: ec_keep failed to compile in sieve scripts
* Fixed ticket #1588: crash when a sieve action written in perl returns no values
* Fixed ticket #1589: fault in dns_expire_domains
* Fixed ticket #1590: off-by-one and use-after-free issues with pinterp and generated mail.
* Fixed ticket #1592: cloudmark API can use uinitialized memory
* Fixed ticket #1617: smtp cbv rcptto phase validation broken
* Fixed ticket #1619: Under-allocation in DKIM header creation
* Fixed ticket #1622: IPMM bad failure mode when no valid messages are generated.
* Fixed ticket #1627: OOB DNS response behavior fix
* Fixed ticket #1649: Goodmail X-TokenInfo-TokenType header name change
* Fixed ticket #1459: Cluster drops DuraVIPs
* Fixed ticket #1656: Spread calls close the mbox inappropriately
* Fixed ticket #1402: race condition breaks per-domain message expiration during spool-in.
* Fixed ticket #1629: win32 gettimeofday implementation
* Fixed ticket #1536: Error message incorrect in ec_cluster_duravip.c
* Fixed ticket #1463: DuraVIP goal calc needs to account for expunged VIPs
* Fixed ticket #1618: DKIM validation memory leaks
* Fixed ticket #1640: allow fragmentation of console responses for excessively large responses on the cluster.
* Fixed ticket #1004: eccmgr: sqlite_open fails silently
* Fixed ticket #1455: Memory leak in ec_stats
* Fixed ticket #1663: config unset binding foo binding_group crash
* Fixed ticket #1665: permit regex_binding2 to incorporate binding group changes on the fly
* Fixed ticket #1667: Resolve livelock issue with hook initialization.
* Fixed ticket #1668: use system allocators by default on OSX
* Fixed ticket #1621: segfault on cluster node when injecting messages
* Fixed ticket #1673: bounce report in xml_summery dependent on log_permanent_failures
* Fixed ticket #1676: Early free in ife-bpf.c, if_down
* Fixed ticket #1677: Fix up Darwin packaging
* Fixed ticket #1684: Disk image for Darwin package
* Fixed ticket #1063: Fix custom_logger's ability to print headers with : in their body.

## Ecelerity version 2.1.1.8 released on 2006-08-05
* Fixed ticket #1545: support rfc821 dotted address routing

## Ecelerity version 2.1.1.7 released on 2006-08-04
* Fixed ticket #1512: umem realloc memory leak
* Fixed ticket #1526: win32 fault when disconnects complete immediately
* Fixed ticket #1523: mtamark returns bogus multi-line response when rejecting mail.
* Fixed ticket #1524: xslt reports hang on sparc
* Fixed ticket #1393: print selector value during write config
* Fixed ticket #1522: fault when using multiple body tests in sieve
* Fixed ticket #1541: regex_binding2 header match is not anchored at beginning of line

## Ecelerity version 2.1.1.6 released on 2006-07-21
* Fixed ticket #1452: brightmail module hangs if num_workers > 0
* Fixed ticket #1450: sieve memory leak with variable assignments and argument iteration.
* Fixed ticket #1469: domainkeys race condition causes session hangs on win32
* Fixed ticket #1480: file and digest auth password files with CRLF line endings were not handled correctly.
* Fixed ticket #1481: pcre linkage issue caused crash with ec_pcre_match sieve action.
* Fixed ticket #1489: refcounting issue with ec_include
* Fixed ticket #1492: race condition in dns_expire_domains
* Fixed ticket #1491: dns hooks don't get called during refresh
* Fixed ticket #1490: socket cache leak on win32
* Fixed ticket #1478, #1479: improved online configuration for DK, DKIM and goodmail.
* Fixed ticket #1495: perl Net::ECStream fails when talking to win32 relays
* Fixed ticket #1414: RFC2821 Deviation with recieved header
* Fixed ticket #1499: memory leak in domainkeys
* Fixed ticket #1500: memory leaks in ds_ldap
* Fixed ticket #1506: cluster_message_maintain_jobs does not break out of loop
* Fixed ticket #1388: Messages sitting in queue far beyond Message_Expiration

## Ecelerity version 2.1.1.4 released on 2006-07-03
* Fixed ticket #1390: Memory leak in seedlist.c
* Feature ticket #1394: Seedlist module no-seed condition
* Fixed ticket #1397: ec_log_trace not installed
* Fixed ticket #1398: capabilities support broken
* Fixed ticket #1423: memory leak in regex_binding2 header rules
* Fixed ticket #1437: win32 lseek call failing
* Fixed ticket #1392: ds_ldap lookup failures
* Fixed ticket #1439: rfc2822_parse_message() leaks memory on some failures
* Feature ticket #1235: Allow setting supplemental groups in the Security section of the configuration file.
* Feature ticket #1288: Added hooks pre and post drop privileges
* Feature ticket #1262: Added hooks to facilitate per-message expiration times

## Ecelerity version 2.1.1.3 released on 2006-06-15
* Fixed ticket #1368: ecwebconsole fails to package on rhel3
* Fixed ticket #1374: ec_stats fails to validate license
* Fixed ticket #1296: ec_console history issues on Solaris

## Ecelerity version 2.1.1.2 released on 2006-06-13
* Fixed ticket #338: allow ec_include via iowrapper and the datasource layer.
* Feature ticket #382: track and limit the number of recipients per message or per connection.
* Feature ticket #424: provide a generic/http_io module that will enable reading files over http:// and https://
* Feature ticket #577: use ec_atoi instead of atoi for conf and control
* Feature ticket #732: Move the validate_set_binding callout prior to the core_finalize_validation_hook.
* Feature ticket #786: Support for DuraVIP IP dependencies via the duravip_follow listener and binding attribute.
* Fixed ticket #864: mysql_spool module would fail if ecspool dir was missing.
* Fixed ticket #944: ecrrdd depends on Ecelerity-perl
* Fixed ticket #960: implement DKIM signature z tag
* Fixed ticket #962: Call dk signing from finalize_validation hook
* Fixed ticket #987: libedit crash using ec_console when $TERM is invalid
* Feature ticket #990: Implement Goodmail Signing
* Feature ticket #994: Per-binding signing for Goodmail (implemented in #1040)
* Feature ticket #995: Unify DK/DKIM/Goodmail signing statistics.
* Fixed ticket #1006: Fixed crash in license fetching.
* Fixed ticket #1012: Fixed crash in license fetching.
* Feature ticket #1038: ClamAV virus scanning without a license
* Feature ticket #1040: Update domainkeys, dkim and goodmail to support global, per-domain, and per-binding activation.
* Fixed ticket #1052: mbuscfg now create config repository on demand.
* Fixed ticket #1055: installer failure on CentOS 4
* Fixed ticket #1056: eccmgr, ecspread RPMs fail to create users/groups
* Fixed ticket #1060: eccmgr crash in eccmgr_log_feedmgr()
* Fixed ticket #1063: print multiline header in custom_logger
* Feature ticket #1064: Support auto-conversion of transient failure to permanent failure
* Fixed ticket #1066: fixed segfault with custom_logger header if the header is omitted or a single character (%h{} or %h{X}).
* Fixed ticket #1072: cloudmark config updates for 1.5 SDK
* Fixed ticket #1078: fixed the problem that else block always gets executed when if block is empty
* Feature ticket #1079: implement ec_rand() sieve action
* Fixed ticket #1080: track metrics for IP addresses per binding. This fixes issues where deliverability on one binding can cause a failling binding to not actually fail and vice versa.
* Fixed ticket #1101: fixed segfault in regex_binding2 related to applying sender_ip and received_via IP matching to message received over non IP channels.
* Fixed ticket #1102: `cluster membership` control can SEGV if called while a node is joining the cluster.
* Fixed ticket #1104: Added Permastore_Interval to the config system with a default of 300 seconds instead of the original hard-coded 60 seconds.
* Fixed ticket #1105: Fixed issue where decreasing the thread pool size could cause too many threads to stop.
* Fixed ticket #1106: Fixed lagging issues for certain modules that perform asynchronous work in the validate_data_spool and validate_data_spool_each_rcpt. This fixes a performance problem with the cloudmark authority module.
* Fixed ticket #1108: Fixed install name for libEcelerity on Darwin
* Fixed ticket #1110: make ec_header_add, ec_header_prefix, ec_header_postfix multi-charset safe.
* Feature ticket #1113: allow cloudmark to be invoked from sieve
* Fixed ticket #1114: Fixed intermittent failures with XCLIENT
* Feature ticket #1116: provide a binding statistics on the binding group.
* Feature ticket #1119: xml log summary reports now have the start/end date in the filename (instead of date of summarization).
* Fixed ticket #1128: fixed segfault when using binding flush domain
* Fixed ticket #1130: under allocation in regex_binding2 could cause crash.
* Feature ticket #1136: Internally supported means for OEMs to rebrand Ecelerity.
* Fixes ticket #1147: fixed inbound SMTP sessions disconnects when anti-virus subsystem was in use.
* Feature ticket #1170: Implement signing statistics reset function.
* Feature ticket #1177: Add option never_attempt_expired_messages
* Fixed ticket #1184: fixed denial of service bug when AUTH is enabled.
* Fix ticket #1186: sieve parser stack too small for complex scripts.
* Fixed ticket #1195: extended the pluggable auth API to embrace asynchronous operation.
* Fixed ticket #1201: addressed memory leak in regex_binding2 module
* Fixed ticket #1202: mailfrom sometimes not null terminated, caused abberant behavior.
* Feature ticket #1206: We now ship DBD::ODBC with our perl SDK
* Fixed ticket #1239: fix quarantine to work with new spool (v2) format.
* Fixed ticket #1261: regex_binding2 header match returns key as well
* Feature ticket #1266: Should be able to avoid smtp_cbv by context var
* Fixed ticket #1278: bounce code can mutilate original recipient address
* Fixed ticket #1281: Windows pickup module crash
* Fixed ticket #1280: Incorrect echash_delete free argument.
* Fixed ticket #1287: Crash when mmap()ing 0 byte message bodies
* Fixed ticket #1309: problem with qsort for Ecelerity.conf includes
* Fixed ticket #1327: DuraVIP balancing sometimes resulted in a ping-pong

## Ecelerity version 2.1.0.3 released on 2006-03-27
* Fixed ticket #1026: improved canonicalization in ec_stats2
* Feature ticket #1061: bounce classification improvement

## Ecelerity version 2.1.0.2 released on 2006-03-23
* Fixed various issued with license fetching on Windows.

## Ecelerity version 2.1.0.1 released on 2006-03-21
* Fixed ticket #989: mailerdaemon, if left blank, no longer causes crash
* Fixed ticket #999: mbuscfg crashes on startup with error: `MEMORY-00487 66`
* Fixed ticket #1000: crash in regex_binding2

## Ecelerity version 2.1.0.0 released on 2006-06-06
* Fixed ticket #534: automatic Message-ID: header generation on Windows platforms was not rfc2822 compliant.
* Fixed ticket #535: Possible to wrap message id's in ecmm
* Fixed ticket #539: %{d} and %{s} failed to expand for domainkeys key file paths on FreeBSD.
* Fixed ticket #54: upgrade PCRE to 6.5
* Fixed ticket #518: `Esmtp_Listener=(*.25)` causes segv. Changed IPv6 address format in config file and console from `<hex>:<hex>::<hex>.<port>` to `[<hex>:<hex>::<hex>]:port`. Brackets are now required.
* Fixed ticket #185: DNS server outage causes segv.
* Fixed ticket #554: Fixed crash bug with parsing trash config files (such as specifying the Ecelerity binary as the config file).
* Fixed ticket #567: Fixed erroneous compilation of sieve scripts with nested anyof and allof clauses.
* Fixed ticket #91: Notice when duravip IPs are dropped or an unowned duravip occurs. Add duravip `release all` command. Add duravip `announce view` command.
* Fixed ticket #542: sieve scripts loaded via the console didn't report compilation errors to the console (but did log them to the paniclog).
* Feature ticket #394: Add ec_forward action in sieve++.
* Fixed ticket #580: Fixed crash in MDN generation.
* Feature ticket #541: augment default queue layout to reduce I/O pressure on standard UNIX/Linux filesystems.
* Feature ticket #71: Add ec_rewrite_mailfrom action in sieve++.
* Feature ticket #586: implement pulling from eccmgr for sieve scripts.
* Feature ticket #561: Negative offsets into stringlists.
* Feature ticket #592: allow config includes to use the eccmgr:// io wrapper.
* Fixed ticket #593: Fixed crash reading a configuration file lacking a trailing newline.
* Feature ticket #599: Allow domains to exempt themselves from particular multivip bindings
* Fixed ticket #612: Enhance rfc2822 parser/reconstructer to respect the exact whitespace preceding header lines (instead of replacing them with a single hard tab). This allows modules like domainkeys and DKIM to perform `simple` canonicalizations successfully.
* Fixed ticket #410: (bad deps for ec_rrdd)
* Fixed ticket #504: (spread user does not exist)
* Fixed ticket #637: write conf should return set values even when they match defaults.
* Fixed ticket #638: global inbound and EClogmove inbound connection counters were not decremented on a cluster logger disconnect.
* Feature ticket #560: Add ec_pcre_match action in sieve++. (modules/generic/sievelib.c)
* Fixed ticket #749: config parser crashes on empty Domain stanza
* Fixed ticket #744: header corruption when using dk + dkim side by side
* Fixed ticket #767: assertion failure under Solaris
* Fixed ticket #761: ecmm can fault if you disconnect while waiting on xprt
* Fixed tickets #350 and #636: fixed DK instablities and add simple canon support
* Feature ticket #171: implement DKIM
* Feature ticket #377: Add support for configuratable SNMP Traps
* Fixed ticket #814: c macro missing from SPF macro set
* Fixed ticket #869: ec_logto_xml does not update xml log file
* Feature ticket #550: Improve bounce handling
* Fixed ticket #896: SNMP causes Ecelerity to segfault add OmniTI MIB
* Fixed ticket #941: static buffer usage in ec_forward
* Fixed ticket #619: sieve mis-compilation problem when assigning a single element stringlist to a variable
* Fixed ticket #469: SEGV when passing the sieve NUMBER type to built-in actions that expect strings
* Feature ticket #1061: bounce classification improvement

## Ecelerity version 2.0.5.2 released on 2006-02-02
* Fixed ticket #516: throttling causes a seemingly infinite delay under certain circumstances
* Fixed ticket #522: custom logger %m/%M tokens ocacsionally break on multi-recipient mails
* Incremental ticket #519: demonstrate a 200 connection listen queue on the ESMTP listener in the provided configuration file. A 200 connection backlog will prevent throughput testing anamolies that arise when testing with smtpstone (smtp-source) and high concurrency.
* Fixed ticket #498: strtok_r() skips delims until it gets a token or goes to the end. This caused reception lines with `@@@` to be ignored in `_ec_log_parse_reception()`, which resulted no reception counted in ec_stats. Replace `strtok_r()` in GET_NEXT with `next_at_field()` in ec_log_parse.c
* Fixed ticket #521: ec_console line editing would crash on Solaris 64-bit

## Ecelerity version 2.0.5.1 released on 2006-01-29
* Fixed ticket #513: improperly configured interfaces could lead to the complete downing of an interface by DuraVIP during start-up.
* Incremental ticket #511: improved the speed of message enqueueing and maintaining the mailqueue by avoiding complicated cluster-based threshold assessments if no thresholds have been configured globally or for the domain/binding/binding group in question.

## Ecelerity version 2.0.5 released on 2006-01-27
* Fixed ticket #453: perl hooks not converting C stack correctly
* Fixed ticket #463: custom_logger not respecting reopen command
* Fixed ticket #464: custom logger can generate non-reparsable 'write config'
* Fixed ticket #472: case sensitivity issue in rcpt domains
* Fixed ticket #154: message corruption in perl API
* Fixed ticket #484: ec_ctl doesn't pass CONFFILE option to Ecelerity
* Fixed ticket #487: TLS bug workarounds: misconfigured exchange servers
* Fixed ticket #490: connection metrics skewed causing no adequate servers
* Fixed ticket #499: spool bodies are being stranded and never handled

## Ecelerity version 2.0.4.3 released on 2006-01-04
* Fixed ticket #433: Ecelerity Statistics Collector on Windows did not

## Ecelerity version 2.0.4.2 released on 2005-12-23
* Fixed ticket #416: crash in win32 under high network load when initiating

## Ecelerity version 2.0.4.1 released on 2005-12-22
* Fixes ticket #406: eccmgr segafults on 'show cluster configuration'
* Fixed ticket #407: eccmgr sqlite db crash
* Fixed ticket #408: ec_cluster logging auto-timestamping backfires

## Ecelerity version 2.0.4 released on 2005-12-21
* Fixed ticket #352: Fixed memory leaks in message failure when Generate_Bounces=false
* Fixed ticket #354: Fixed writing of initialized data in ec_logger.
* Fixed ticket #355: Fixed occasional crash bug.
* Feature ticket #360: Added proto={ipv4,ipv6} as a listener attribute to limit `*:<port>` listener specifications to a single address family.
* Fixed ticket #361: Allow / as a regex delimiter for the regex_binding2 module.
* Fixed ticket #363: Fixed delivery to maildir when rcpt to lists are expanded to meet maildir and non-maildir targets.
* Feature ticket #365: Integrated inbound batch limit size support.
* Fixed ticket #368: Included smtp_cbv in the distribution.
* Fixed ticket #369: custom_logger header expansion in the delivery phase when the header is the last header in the RFC2822 message block clipped the last letter of the header value off. Fixed.
* Fixed ticket #376: Solaris startups not working
* Fixed ticket #383: ehlo_string should be a VCTX_CONN and not VCXT_MESS
* Fix EHLO repsonse for IPV6

## Ecelerity version 1.2.13 released on 2005-11-25
* Fixed ticket #215: Header field length off by one.
* Fixed ticket #263: Multiple headers with the same name when interleaved with other headers causes segfault.
* Fixed ticket #350: Fixed intermitted invalid domainkey signatures.

## Ecelerity version 2.0.3 released on 2005-10-31
* Feature ticket #217: Allow gateway determination on domain, binding and now recipient local part as well. Hookable.
* Fixed ticket #218: ds_mysql module removed from Ecelerity core RPM to Ecelerity-mysql RPM on Linux.
* Feature ticket #236: Modules may hoook core configuration parsing to extend core Ecelerity.conf configuration syntax.
* Fixed ticket #244: win32 now allows non-system disk installation.
* Feature ticket #261: ec_console tab completion for config set/get
* Fixed ticket #266: Checklist module should operate on email/domain matches case-insensitively.
* Fixed ticket #275: some configuration hooks were not registered with the hook system prior to the post_conf phase. Fixed.
* Fixed ticket #276: 64-bit perl interpreter how handles Ecelerity::register_hook correctly.
* Fixed ticket #277: Extension_Dir not respected. Fixed.
* Fixed ticket #278: On startup, if reading the spool directory entries alone exceeded 60 seconds, the monitor would terminate and restart the instance. Fixed.
* Fixed ticket #284: fixed pinterp crash bug related to incorrect perl stack manipulation.
* Fixed ticket #286: `config_get_binding_domain_outbound_{conn,mess}_throttle` hooks were not firing. Fixed.
* Fixed ticket #288: Separated antivirus modules into Ecelerity-antivirus RPM on Linux.
* Fixed ticket #289: Augmented Ecelerity headers for safe C++ inclusion.
* Fixed ticket #292: Document how to access the message_construct structure from the accept_construct in esmtp_factory.h
* Feature ticket #296: Expose the negotiated TLS cipher via the context as `tls_cipher.`
* Feature ticket #297: Allow SSL keys to be encrypted. A pre_console_release hook was added and a SSL_CTX_fixup hook was added. A simple tls_passphrase module was introduced that will collect a single passphrase (at startup) to unlock TLS keys found to be encrypted.
* Feature ticket #299: Allow the configuration `include` directive to be passed a directory from which all non-hidden files on the top level will be processed in lexicongraphical order.
* Feature ticket #300: config_get_localpart_domain_binding_gateway_into_buffer removed for a simpler and more functional config_get_message_gateway_into_buffer.
* Feature ticket #305: Make ecxs friendly to C++ module authors.

## Ecelerity version 2.0.1 released on 2005-09-13
* Feature ticket #199: Antivirus support on Win32
* Feature ticket #209: module hooks accessible across all threads.
* Feature ticket #183: Connection establishment throttling.
* Feature ticket #212: More featureful SMTP tracing.
* Fixed ticket #213: SPF states and initialization bugs. Fixed.
* Fixed ticket #216: CPU wait during idle console connections. Fixed.
* Fixed ticket #220: Make include configuration directive case insensitive.
* Feature ticket #222: Match_Domain reimplemented. Performance increase.
* Fixed ticket #225: disabling trash-on-crash broke console debugging. Fixed.
* Fixed ticket #224: EHLO banner line continuations not working for AUTH.
* Feature ticket #226: separate unlink into batch and time-bounded queues for more sensible service of unlink requests.
* Feature ticket #229: Support MX lookups via ec_dns_lookup.
* Fixed ticket #237: PID files locked by Ecelerity at startup to prevent clobbering.
* Fixed ticket #238: Abort in custom logger. Fixed.
* Fixed ticket #211: Allow inplace file rotation on Win32.
* Feature ticket #241: Online perl interpreter leak inspection.
* Fixed ticket #243: ec_md5passwd now preserves file ownership and permissions.
* Feature ticket #251: ec_md5passwd now prompt for password reconfirmation.
* Fixed ticket #249: monitor process now responds immediately to an instance's clean exit. Solved ec_ctl restart hanging problems.
* Fixed ticket #250: a long shutdown (typical to suppress_spool) could be aborted by the monitor process due to a lost heartbeat. Fixed.
* Fixed ticket #252: ec_dns_lookup crash. Fixed.
* Fixed ticket #263: domainkeys crash when same named headers were found not contiguous in an email. Fixed.
* Fixed ticket #207: Fixed spf loop on broken include directive.
* Feature ticket #17: SNMP access to per-domain and per-binding stats.
* Fixed ticket #230: IO module APIs executed on more reliably.
* Fixed ticket #208: Remove off all STREAMs usages.
* Fixed ticket #205: Fixed crash in message retry.
* Feature pinerp: More thorough perl embedding. Allow for full hooks integration as well as sieve registration of tests and actions.
* Feature clustering: Replicated connection and resource utilization metrics across clustered nodes. Cluster-wide rate limiting and throttling. Cluster-wide caching of data. Durable MultiVIP bindings (DuraVIP) allowing for automatic failover of a binding from one node to another. Cluster-wide aggregating logging facilities. On-demand queue migration from node to node.

## Ecelerity version 1.2.12.4 released on 2005-09-06
* Fixed ticket #176: ec_injector bundling and PHP 4/5 support.
* Fixed ticket #218: modules depending on mysql are now completely in their own packages.
* Fixed ticket #228: MDNs generated with zeroed message IDs.

## Ecelerity version 1.2.12.3 released on 2005-08-15
* Fixed ticket #186: EHLO hostname not working on the default binding.
* Fixed ticket #223: Match_Domain not correctly setting the outbound binding.

## Ecelerity version 2.0.0 released on 2005-08-05
* Feature ticket #31: Revamped configuration system to allow for nested configuration directives. Specifically allowing all domain-relevant configuration options to be nested under a Binding so that behaviour towards domains can differ between bindings. Depricated: Relay_Domain option for a global Relay_Domains list.
* Feature ticket #68: Support for the Authentication-Results header.
* Feature ticket #133: speed validate context dictionary implementation.
* Fixed ticket #141: Permastore can't access DB with drop-privs
* Feature ticket #142: Native Sun Studio compiler compiles removing dependencies on libgcc_s.so
* Fixed ticket #153: certain uses of relaying in listener ACLs could cause open relays.
* Feature ticket #158: Complete sample config and sieve scripts to demonstrate policy arbitration.
* Feature ticket #165: Implement SenderID and SPF using Authentication-Results header for reporting outcome.
* Feature ticket #168: Make Generate_Bounces (et. al.) configurable on a per-binding basis.
* Feature ticket #179: Allow fail domain to happen without tiggerring permanent failures via 'binding fail domain quiet' and 'fail domain quiet'
* Feature ticket #180: Allow customized hostname in prepended trace headers.
* Fixed ticket #181: Fixed a variety of binding->global configuration fallback issues.
* Feature ticket #182: Implement XCLIENT
* Fixed ticket #186: EHLO_Hostname not respected in global scope
* Fixed ticket #193: Remove the sudo dependency of edgerunning (add ec_running)
* Fixed ticket #208: On highly concurrent instances, licnese checks could fail.

## Ecelerity version 1.2.12.2 released on 2005-06-09
* Fixed ticket #148: EHLO_Hostname not respected in bindings
* Fixed ticket #147: Allow file modes to be set on ec_logger and custom_logger targets

## Ecelerity version 1.2.12 released on 2005-05-09
* Upgraded to sqlite3, you will need to run db_upgrade on your metadata files. web console users will also need to upgrade to the latest version of the web console.
* You may now use C style `/* */` comments in your Ecelerity.conf
* Added a human readable alternative syntax for setting Debug_Flags. The traditional style is still supported, and the 'write config' console command will emit an out-commented old style Debug_Flags configuration, followed by the new style. Consult the manual for more information on this change.
* Fully_Resolve_Before_SMTP = true|false to force Ecelerity to complete resolve all pertinent DNS records before it commences SMTP delivery [5436].
* Support for Linux capabilities [5416].
* Improved pipe_transport module. Other modules (including interpreters) may set message recipient(s) to `|/path/to/command` to facilitate dynamic mapping of recipients to pipe processes. Added error_file and output_file configuration options to control the destination of stderr and stdout, respectively.
* Improved handling of low memory conditions.
* Added ec_trace_context action to sieve, which adds an X-Trace-Context header to the message. This can be useful when debugging your mail policy.
* Fixed a segfault with the inbound_audit module, when no configuration is provided.
* Add core_control_shutdown_hook() that modules may use to gracefully handle shutdown.
* Feature ticket #5: Reimplementation of ec_stats in C for memory efficiency and speed. It now directly produces XML and is transformed into plan text via XSLT.
* Fixed ticket #13: errors that occur prior to loading a logging module are now logged to stderr.
* Feature ticket #53: Reimplementation of memory allocators in assembly for improved performance.
* Feature ticket #59: Improved async responsiveness for SMTP AUTH
* Feature ticket #64: Rename the mailfrom_cbv module to smtp_cbv, to reflect that it can now validate based on RCPT TO as well as MAIL FROM.
* Feature ticket #67: Allow configurable time windowing in throttles. You may specify `n/y` for throttle settings, which will allow n messages in y seconds. y defaults to 1 if not specified.
* Fixed ticket #89: force bulk failure operations to run async
* Fixed ticket #90: when sending mail to domains that have invalid MX records.
* Feature ticket #97: NULL MX support. http://www.rfc-editor.org/internet-drafts/draft-delany-nullmx-00.txt.
* Feature ticket #98: Support for Solaris 10, including a ports-based scheduler.
* Fixed ticket #99: url_ripper missing name to A host extractions that matched previous named RHSBL lookups.
* Feature ticket #100: expose inbound connections in an aribtrary CIDR mask in sieve for decision making.
* Fixed ticket #102: pauses on SMTP connections after 55x failures.
* Fixed ticket #103: Linux on Opteron no uses epoll when available.
* Feature ticket #104: Allow sieve extensions to add simple and complex tests in addition to functions.
* Fixed ticket #108: segfaults in regex binding module when performing regex matches on body or headers.
* Fixed ticket #114: fixed segfault bug in SPFv1 state machine.
* Fixed ticket #115: SQLite corruption.

## Ecelerity version 1.2.10.1 released on 2005-02-04
* Fixed race in async unlinks that could cuase spool bodies to not be deleted. Work around for 1.2.10 is `Async_Unlink_Concurrency = 1`. Ecelerity will remove headers with no bodies (an uncommitted message reception), however bodies without headers will be ignored and must be deleted manually.

## Ecelerity version 1.2.10 released on 2005-02-03
* Add Connect_Timeout_To_Delay, for sweeping of domains 'stuck' in the active queue.
* A large number of per-binding statistics enhancements. Run 'domain yahoo.com' for an example.
* new binding-aware console commands binding active $BINDINGNAME $THRESHOLD binding delayed $BINDINGNAME $THRESHOLD binding fail domain $BINDINGNAME $DOMAIN binding flush domain $BINDINGNAME $DOMAIN
* Augment the delivery system to use sendfile(), allows fully asynchronous swapping in of messages not in memory, and incorporates some other related performance enahncements.
* Additional toggleables for even more aggressive memory management in the event of large queue back pressure. Specifically Drop_Body_After_Trans_Fail = X which allows you to drop out the message bodies (from memory) after X transient failures (setting this to 0 is good for domains that experience a high number of transient failures).
* Fix for a moderately critical connection allocation algorithm issue that causes very unaggressive connection allocation in some situations.
* Message_Expiration and Max_Retries as Binding stanza paramters.
* Provides binding visibility for messages through the showqueue and message details commands.
* Adds history and tab completion to ec_console
* Allows greater management of the memory subsystem by the end user via Malloc2MMAP_Threshold = X Which toggles use of anon mmaps over system mallocs past X bytes. This is aimed to reduce heap fragmentation. A suggested value is 4096.
* Supports a configurable backlog and pool for the message unlinker thread via Async_Unlink_Concurrency = X Async_Unlink_Backlog = Y During some testing under XFS (which appears to perform very poorly), we saw very large amounts of backpressure in the unlink queue. This is not good, so this toggleable will cap that.
* Outbound_Throttle now support granularity up to 1 message per minute. (Previously was 1 message per second). Still is expressed as a float (messages/second).

## Ecelerity version 1.2.8 released on 2005-01-14
* Win 2k3, 2k and XP performance enhancements and fixes.
* DomainKeys updates and fixes.
* Sieve enhancements, memory leak fixes.
* SPF memory leak fixed.
* Passive OS fingerprinting
* LIstener/ACL contexts
* Perl sieve extensions and hooking support.
* Environment EC_TRACE_ON_CRASH=off disables segfault handler.
* bug fixes in resolver.
* config set resolver allow use of a new resolv.conf file and re-initializes the internal resolver.
* Fix MX list reference counting for domains that have the same MX listed multiple times.
* Add Outbound_Throttle on per-domain basis
* Add received_via IP address to email_message data type
* Statistical managed time series support.
* Revamped and bundled inbound and outbound oriented delivery auditing
* Fixed Max_Outbound_Connections in Binding context stanzas
* Added Server_Max_Outbound_Connections in a per-Binding context.
* Allow for match of incoming ip in regex module via [recv_via] tags

## Ecelerity version 1.2.6 released on 2004-12-11
* Fixed a crash bug when logging into the console with md5 digest

## Ecelerity version 1.2.5 released on 2004-11-09
* Phantom release, never made available for non-windows download.

## Ecelerity version 1.2.4 released on 2004-11-02
* PET 44 was missing configuration support. It exists in this release.
* Stack trace support on FreeBSD.
* [BI] Insertion of Message-ID if needed. RFC2822 { MessageID_Header = ignore }

## Ecelerity version 1.2.3 released on 2004-10.05
* Fix a sqlite mispackaging on Linux

## Ecelerity version 1.2.2 released on 2004-09-25
* BUG FIX: [PET 41] Further ensures that messages with connection errors are handed into the logging system with 45x errors.
* BUG FIX: [PET 42] MX-00304 bug, race on expired domains with no queue but some in-progress deliveries (messages are not 'in queue' when they are in the SMTP delivery engine).
* Addition of the MDN_Failures_Notify global option to allow delvery of errors on message with null envelope senders to an alternate email address.
* BUG FIX: [PET 43] Fixes crash bug related to a given MXs being used by more than 20479 domains.
* Increased connection reuse aggression across domains sharing MXs.
* FEATURE REQUEST: [PET 44] Individual MXs can have max_outbound_connections set via: Host mail-in.freeserve.com { Max_Outbound_Connections = 5 }
* Fixes for Sparcv9 (and sparcv8plus)
* Fixes for Opteron x86_64
* Expose configuration APIs though Java.

## Ecelerity version 1.2.1 released on 2004-08-24
* Various sieve stability fixes. Implemented ec_reject sieve command.
* Added built-in `standard` context variables that can be requested by modules at init time.
* SPF stablity improvements.
* Expose bad SMTP command count to sieve.
* Checklist stability improvments.
* SMTP AUTH over MySQL.
* On-the-fly module enabling and disabling.
* console message_retry fixes.
* Improve ec_stats interpretation of sieve results.
* Expose configuration APIs through perl.

## Ecelerity version 1.2.0 released on 2004-08-17
* Improved Mac OS X and Win32 support.
* Updated extension APIs -- C, Perl, and Java
* Extensible hooking system.
* Updated to perl 5.8.5
* Relay_Domain domains now require complete DNS resolution before delivery is attempted.
* Outbound TLS support (default off) with variable CAs, client certs and verification policies (per-domain configurable).
* Sieve implementation -- extended for in-line SMTP use.
* checklist module (whitelist/blacklist) based on senders and/or IPs.
* Inbound TLS support with vairable CAs, server certs (per listener, or IP ACL).
* Configurable global and netblock-based inbound concurrency limits.
* Early talker detection
* Distributed Checksum Clearinghouse (DCC) support.
* BUG FIX: [PET 40] Maximum retries can be configured manually instead of automatically by the system.
* Automatic scheduler fallback and start-time configurable scheduler selection.
* Anti-virus support: Kaspersky, F-secure, Panda, ClamAV
* MySQL and LDAP based validation modules.
* SNMPv2 enterprise and MTA-MIB support.
* LMTP delivery
* XML output from the command console.

## Ecelerity version 1.1.8 released on 2004-09-20
* Fixed race condition that can leave messages in the lookuptable
* BUG FIX: [PET 42] MX-00304 bug, race on expired domains with no queue but some in-progress deliveries (messages are not 'in queue' when they are in the SMTP delivery engine).

## Ecelerity version 1.1.7 released on 2004-09-01
* ec_console includes connected instance name in prompt.
* Bug fixes in embedded perl interpreter.
* Fix error reporting and termination via Ecelerity::Injector
* Corrected debugging level for mailfrom allocation/deallocation events in ecstream.
* BUG FIX: [PET 41] Further ensures that messages with connection errors are handed into the logging system with 45x errors.

## Ecelerity version 1.1.6 released on 2004-03-16
* BUG FIX: [PET 35] hangs on input from some ratware senders.
* BUG FIX: [PET 36] rejection of messages with headers and body separated with LF CR LF. pedantic still rejects this.

## Ecelerity version 1.1.5b released on 2004-03-12
* ECStream injection fix.

## Ecelerity version 1.1.5 released on 2004-03-10
* BUG FIX: [PET 34] buffer underrun on messages with 0 length bodies needing rfc2822 reconstruction for the addition of a date header.

## Ecelerity version 1.1.4 released on 2004-03-02
* TLS Supprt
* BUG FIX: [PET 30] flush domain binding fixes.
* BUG FIX: [PET 31] fixed triggering permanent failures on fstat failures.
* BUG FIX: [PET 32] log rotation fix for non-standard log locations.
* BUG FIX: [PET 33] fixed auto crash-recovery ignoring certain spooled messages.
* Full exposure of validation contexts into Ecelerity-perl.
* Beta support for Windows 32bit architectures (Windows 2000 and 2003).
* Parallelized accept()s on any listener for rapid connect()/disconnect() patterns.

## Ecelerity version 1.1.3 released on 2004-02-27
* binding suspension fixes.

## Ecelerity version 1.1.2 released on 2004-02-17
* SPFv1 validation module.
* module API versioning (effects custom C modules)

## Ecelerity version 1.1.1 released on 2004-01-16
* SPFv1 validation module.

## Ecelerity version 1.1.0 released on 2004-01-11
* All permanent delivery failures except for SMTP rejections happen asynchronously now.
* Connection `reserves` to handle domains. This prevents active queue wedging when server_max_outbound_connections is hit.
* XML output over console.
* Tracking of inbound concurrency as well as outbounc concurrency.
* Integrated service monitor to detect unexpected failures and recover gracefully.
* console access to recent paniclog entries.
* rfc2822 compliance checking during reception with optional CR LF fixing.
* Automatically add Date: header if it is missing on received messages.
* digest-md5 authentication support over the control channel
* Validation uses contexts now. Simple code, disconnection, time-cost assignment, and session descheduling are supported.
* Validation contexts have environments that can be seen over both the scope of the message reception and the inbound SMTP session.
* access control policies apply to esmtp_listener now. This allows relay control based on IP, destination and IP+sender domain.
* Inbound SMTP session timeouts configurable in the applied access lists.
* DNS realtime block list module.
* CRAM-MD5, DIGEST-MD5, and LOGIN AUTH available over Esmtp_Listener. Activated through the IP ACL syntax attached to each listener.

## Ecelerity version 1.0.4 released on 2003.11.20
* Fixed string termination bug in logger which caused binary data to the paniclog.
* ec_stats: added hourly deliveries histograms.

## Ecelerity version 1.0.3 released on 2003.11.14
* Revamped memory allocation system to have a tighter long-term footprint.
* Fixed memory leak in binding code.
* Performance enhancements in debugging code.
* Custom logging module.

## Ecelerity version 1.0.2 released on 2003.11.04
* Fixed rlimit/pthread bug on Linux (causing rlimit nofiles to be the default shell limit in all but the main thread)
* Lowered error level to informational on memory shortage rectification.

## Ecelerity version 1.0.1 released on 2003.11.03
* Fixed memory leaks in the message enqueue mechanism. Specifically effecting the `backhole = internal` mechanism.
* Fixed memory corruption during RSS reduction phases. (PET #26)
* Various low-level performance enhancements (code optimization)
* Fixed rlimit setting when server_max_outbound_connections is very low.

## Ecelerity version 1.0 released on 2003.10.31
* Released