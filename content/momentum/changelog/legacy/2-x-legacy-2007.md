---
lastUpdated: "04/08/2020"
title: "Momentum 2.x Legacy Changelog for 2007"
description: "Changelogs for legacy versions of Momentum 2.x"
---

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