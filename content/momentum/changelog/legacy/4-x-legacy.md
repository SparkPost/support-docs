---
lastUpdated: "04/08/2020"
title: "Momentum 4.x Legacy Changelog"
description: "Changelogs for legacy versions of Momentum 4.x"
---

## Momentum 4.2 Hotfix 14 released on 2016-09-27
* Fix: MO-5555: Prevent invalid `content-type` header longer than 256 bytes from causing Momentum to crash.
* Fix: MO-5681: Provide support for 64 bit integers in Lua for Bloom filter calculation for suppression list.
* Fix: MO-5673: Prevent static_routes host refresh from incurring undue memory consumption leading to OOM.
* Fix: MO-5634: Change the 'No valid from' message in `_spf_validate` from an ERROR level message to DEBUG.
* Fix: MO-5532: Prevent dkim_validate on an invalid domain name from causing Momentum abort.
* Fix: MO-5466: Fix hook system to prevent trace files generated during 4.2.1.x regression test.
* Fix: MO-5417: Re-order Sieve's and maildir's post-init runs to fix Sieve++ function ec_maildir.
* Fix: MO-5341: Fix DKIM signing failure on transmission API injections which require dot stuffing.
* Fix: MO-4259: Gracefully close the TCP connection following sending the `QUIT` command.
* Fix: MO-4240: Fix transmission failure when stored recipient list has only 1 recipient.
* Feature: MO-5636: Provide TLS Support for SMPP outbound connections.
* Feature: MO-4890: Enable queuing of small REST transmissions into SQS, with no validation.
* Improvement: MO-4553: Enable synchronous transmissions by default.
* Improvement: MO-3986: Provide immortal Lua variables that survive config reload.

## Momentum 4.2 Hotfix 12 released on 2016-06-01
* Fix: MO-5459: Change default APNS message expiration from 60 seconds to 7 days
* Fix: MO-5145: Add %vctx_mess{x} macro support for apn_logger
* Fix: MO-5130: Prevent crash due to connection closed during TLS handshake
* Fix: MO-4982: Drop adaptive_sweep_rule bounce on bc:24; only action on code 10
* Fix: MO-4847: Prevent crash seen in testing due to use-after-free on connection handle
* Fix: MO-4845: Prevent crash seen in testing when changing adaptive_cache_size from zero
* Fix: MO-4653: Fixed watchdog tracing during BEIK scanning
* Fix: MR-1482: Skip DNAME records when resolving DNS lookups
* Fix: MR-1470: Fixes issue in cert verification when hostname's first part and the common name differ
* Fix: MR-1467: Fix issue of recipient count not being passed to cloudmark
* Fix: MR-1366: Fix the `bursty` nature of SMPP throttles
* Fix: MR-888: Limit number of NOOPs processed per message to prevent connection buildup
* Fix: MO-5487: Reduce DB tables' gc_grace_seconds from 10 days to 2 days
* Fix: MO-5457: Provide missing alternate text attribute on open-tracking pixel
* Fix: MO-5452: Correct the error code returned for unsupported methods in Engagement Tracking
* Feature: MO-5437: Update the mobility packages versioning to facilitate upgrading across major versions
* Fix: MO-5413: Prevent crash when hook for Lua module validate_dealloc returns an error
* Feature: MO-5113: Update GCM module to extract the `To` field to get the device ID
* Fix: MO-5340: Fix race condition when aggressive AD rules update same optval in two threads at once
* Fix: MO-5319: Fix crash-inducing freed memory usage attempts in APN Push
* Fix: MO-5175: Update specfile package dependencies for the changed msys-app-webhooks packages
* Fix: MO-5161: Fix uninitialized memory access in converter.c (valgrind debug reported)
* Fix: MO-5156: Make alerting module run on own threadpool to avoid contention in the CPU threadpool
* Fix: MO-5137: Remove global variables in Lua code, some of which were not thread-safe
* Feature: MO-5109: BETA: Include auth_pamd as part of the msys-ecelerity-beta module
* Fix: MO-5019: Implement proper event hose logging of messages moved to a DuraVIP
* Fix: MO-4980: Make alerting module run on own threadpool to avoid contention in the CPU threadpool
* Fix: MO-4975: Fix double event hose logging of FBLs injected as OOBs, log only as FBL.
* Fix: MO-4881: Ignore substitution curly braces in SMTP injected message bodies
* Feature: MO-4567: Improve DB method for inline Template Insertion, to improve performance.
* Fix: MR-1476: Fix issue where using leveldb with adaptive could cause DuraVIP loop
* Fix: MR-1472: Fix outbound Xclient's peer server return code expectation
* Fix: MR-1469: Fix TLS fall back behavior when sending to Microsoft domains
* Fix: MO-5461: Include internal-use-only script for 4x uninstall in its own RPM in the repo
* Feature: MO-5451: Improved logging from the httpcnt and generic_delivery modules
* Fix: MO-5361: Fix potential inbound_audit deadlock cases
* Feature: MO-5347: Upgrade gnutls to 3.3.22 to support Application-Layer Protocol Negotiation (ALPN)
* Feature: MO-5131: include canonical_ids returned from call to GCM in webhooks
* Fix: MO-5146: Fix failure to free json object when APN delivery fails
* Feature: MO-5155: Do not set default optional `sound` in APN payload
* Fix: MO-5158: Fix invalid memory write upon Push disconnect (valgrind debug reported)
* Feature: MO-5104: Increase maximum APN Push payload size from 256 to 2048 bytes
* Feature: MO-5167: Enhance static route module to work for Mobile Push
* Feature: MO-5093: Add support for XSETCONTEXT2 ESMTP extension
* Fix: MR-1453: Fix SMPP in receiver mode to send deliver_sm_resp
* Feature: MO-4800: Update console and UI copyright
* Fix: MR-1389: Make SMPP protocol ID configurable; confirm proper default value
* Fix: MO-4989: Correct the error code returned for unsupported PUT on Transmissions API
* Fix: MO-4892: Add NULL usage checks in adaptive_backstore_riak
* Fix: MO-4102: Fix High Impact Issues flagged by Coverity debug tool in 4.x: Round 4
* Feature: MO-3502: Make LevelDB the default backing store for AD, instead of Riak
* Fix: MR-1484: Fix memory leak in TLS Diffie-Hellman parameter association with TLS sessions
* Feature: MR-1218: Implement roll-up of domains with common MXs
* Feature: PKG-260: Bump jemalloc version

## Momentum 4.2 Hotfix 11 released on 2016-01-06
* MR-1376: adds a 'skip_hosts' conf option to allows skipping MX servers
* MO-4531: JSON decode errors will no longer return a DB 500 error
* MR-1446: Engagement tracker will now understand tracked links that are URI encoded
* MR-1443: Makes RabbitMQ reconnect on restart
* MO-4608: Removes lua globals
* MR-1442: Enables UTF-8 characters in REST API
* MO-4574: Adds SMS to event hose
* MR-1456: Fixes address_parse_cache memory leak
* MR-1457: Backports thrlua and json-c packaging changes
* MO-4613: Adds cassandra auth
* MO-4627: Adds attachments via transmissions API
* MR-1463: Fixes memory corruption in scope logger
* MR-1462: Fixes buffer overflow in IDN module
* MR-1428: Enhances adaptive cache performance
* MR-1433: Optionally enables aggressive adaptive throttling

## Momentum 4.2 Hotfix 5 released on 2015-10-07
* Fix: double free in dns cache

## Momentum 4.2 Hotfix 4 released on 2015-10-02
* Feature: IPv6 RBLDNSD support
* Feature: SMTP server to server authentication
* Feature: Lua module to support UTF8/IDN conversions
* Feature: IPv6 dns support is no longer beta
* Fix: DKIM will no longer break under supercharger
* Fix: Lua crash when using curl
* Fix: race condition in custom logger
* Fix: Event hose is now feeding adaptive events to the web UI
* Fix: DNS cache will now NULL pointers to freed cache node memory
* Fix: Edge case in cluster throttles causes divide by zero error
* Fix: Opportunistic TLS will now work with the outbound_tls_parameters hook
* Fix: 'nodata' responses to MX lookups are now handled properly by the built in unbound resolver
* Fix: Several memory leaks in the cluster config system and dns cache
* Fix: Domain specific bounce classifications now work in supercharger
* Fix: dns_cache_lookup_wait will no longer cause memory leaks
* Fix: bundled ICU is now version 55_1

## Momentum 4.2 released on 2015-08-03
* Feature: Scheduled Generation - create and delete scheduled transmissions.
* Feature: Recipient List Atomic Replacement - replace existing recipient lists by specifying the existing list's list_id
* Feature: CC, BCC, and Archive capability added to SMTP API
* Feature: Configurable preference to send over IPv6
* Feature: Ability to view, sort and filter details for bounces, rejection, and delay reasons by domain (ISP)
* Feature: SMTP Authentication module via API key
* Feature: Push (APNS, GCN) notification in webhooks
* Feature: Message Generation – per node generation
* BETA: Inbound Relay Webhooks - set up an inbound domain that allows inbound replies or email messages coming into that domain via SMTP to be transformed into JSON and relayed to an HTTP endpoint
* Fix: Added line number, part, and description to template REST API substitution errors to help aid in debugging templating logic.
* Fix: Added support in the REST API for click tracking of URLs (http and https schemes) that exist entirely in recipient substitution data.
* Fix: Added support in the REST API for disabling URL encoding of substitution values by using triple curly brace syntax in templates.
* Fix: The FBL format has changed in 4.2. Messages generated with an X-MSFBL header now encode an HMAC (hash style message authentication code) as part of the outbound X-MSFBL header.
* Fix: Provide a JSON key `ip_address` to click and open events indicating the source IP of the click/open.
* Fix: We now include a non-canonicalized bounce reason in events in a JSON key called `raw_reason`.
* Fix: APNS and GCM message events have been added to the event hose.
* Fix: Template rendering gen_fail events now include the template rendering error string in the JSON key called `reason`.
* Fix: For the inbound relay processing that is included as a Beta Feature, we now have relay_events in the event hose.

## Momentum 4.1-HF4 released on 2015-1-20
* Feature ticket MO-3300 : All message events include recipient detail.
* Feature ticket MO-3267 : The recipient address is included in click and open URLs and, subsequently, will be included in all click/open events.
* Feature ticket MO-2957 : Metadata is included, by default, as part of click-tracking (already existed in open tracking). This may be turned off in configuration.
* Feature ticket MO-3559 : The jemalloc package was upgraded to version 3.6.
* BETA Feature ticket MO-3159 : Tags, metadata and campaign IDs may be included in SMTP injections via special headers and, subsequently, available in message events.
* BETA Feature ticket MO-3147 : Engagement tracking is available for SMTP injections.
* Fix MR-1117 : Fixed a defect associated with substitution data that is contained in a JSON array.
* Fix MR-1098 : Fixed a defect associated with invalid recipient data as part of substitution data.
* Fix MO-3430 : Fixed Substitution Engine failure when keywords are returned from macros.
* Fix MO-3266 : Allow the header_to and name fields of a recipient to have different values (for purposes of a BCC).
* Fix MO-3496 : Dates in generate_start_time and generate_end_time now have padded zeros in their values. For example, 'generation_start_time' => '2014-12-21 1:59:11+0000' now appears as 'generation_start_time' => '2014-12-21 01:59:11+0000'.
* Fix: Due to a known conflict with duravips, auto-replumber is now off by default* 

* Momentum 4.1 Hotfix2 released on 2014-11-07
* Feature ticket MO-3186 : Add option to disable SSLv3 in OpenSSL to prevent POODLE attack for HTTP and SMTP
* Feature ticket MO-3186 : Add DHE ciphers for SMTP TLS
* Fix MO-3191: Fixed tracking of opens and clicks that are older than one day. Now support up to one year.
* Fix MO-3219: Fixed buffer overflow of links longer than 2083 bytes. Issue warning about long URLs.
* Fix MO-3247: Fixed problem with the HTTP Generic Client that caused failure of messages over HTTP in certain circumstances.

## Momentum 4.1.0 released on 2014-10-03
* Feature ticket MO-2724 : Submit Transmissions with Stored Recipient Lists
* Feature ticket MA-548: Webhooks
* Feature ticket MO-2747 : Template API supporting transmissions using templates specifying text/plain and text/html MIME parts
* Feature ticket MO-2850 : TLS encryption for inbound and outbound SMTP using the GNUTLS library.
* Feature ticket MO-2900 : The ability to choose TLS encryption `opportunistically` with fallback to plaintext SMTP on TLS failure.
* Feature ticket MA-831 : FBL events for webhooks and reporting
* Feature: The Metrics API
* Feature ticket MO-2789 : A refactored REST API that includes authentication.
* Fix MO-3177 : Fixed postgres config file pg_hba.conf so that it supports wildcard IPv6 connections.
* Fix MO-3148 : Set the appropriate hostnames for analytics and platform nodes in a configuration file to run certain cronjobs.
* Fix MO-3140 : Fixed installer so that only a log aggregator node will be labeled `Manager`.
* Fix MO-3129 : Amend installer to support independent vertica and application roles.
* Fix MA-1041 : Fixed the permissions for the webhooks_batch_status cronjob.
* Fix MA-1030 : Fixed the version in the webui to reflect 4.1 rather than 4.0.

## Momentum 4.0.0 released on 2014-04-30
* Feature ticket MO-1551: Message Generation in Momentum. Generate messages from a Inline/Stored Template with support for substitutions
* Feature ticket MO-1327: A new RESTful API allowing for template creation, updating, viewing and listing
* Feature ticket MO-1770: A new RESTful injection API allowing for transmission submission
* Feature ticket MO-2106: Engagement Measurement. Track and report Opens and Clicks.
* Feature ticket MO-1325: Event Hose with enhanced reporting data
* Feature ticket MA: Reporting