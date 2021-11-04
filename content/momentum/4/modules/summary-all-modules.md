---
lastUpdated: "03/26/2020"
title: "Modules Summary"
description: "All modules are listed alphabetically with a brief description Singleton modules are also identified The Version column indicates when the module was introduced into the system Note all modules listed as 4 0 modules were actually introduced in prior versions of Momentum The Auto column indicates whether a module is..."
---

All modules are listed alphabetically with a brief description. Singleton modules are also identified. The `Version` column indicates when the module was introduced into the system. Note: all modules listed as 4.0 modules were actually introduced in prior versions of Momentum. The `Auto` column indicates whether a module is loaded automatically as required. The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA. The `Cluster` column indicates whether a module is cluster-specific. The `Valid` column indicates whether a module is a validation module.

<a name="table-all"></a> 


| Name | Version | Description | Auto | Cluster | Valid | See Also |
| --- | --- | --- | --- | --- | --- | --- |
| [“ac_auth – Authentication Handler”](/momentum/4/modules/ac-auth) | 4.2 | Enable a Lua module to hook into the authentication mechanism |   |   |   |   |
| [“adaptive – Adaptive Delivery”](/momentum/4/modules/4-adaptive) (*singleton*) | 4.0 | Dynamically tune delivery options |   |   |   |   |
| [“alerting – Send Alerting Emails”](/momentum/4/modules/alerting) (*singleton*) | 4.0 | Enable Lua policy scripts and alerts |   |   |   | [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet) |
| [“alias – Alias Expansion”](/momentum/4/modules/alias) | 4.0 | Rewrite recipient addresses |   |   |  ✓ | [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core) |
| [“antivirus – Antivirus”](/momentum/4/modules/4-antivirus) | 4.0 | The antivirus framework |  ✓ |   |  ✓ | [“clamav – ClamAV”](/momentum/4/modules/clamav), [“csapi – Symantec CSAPI Antivirus Support”](/momentum/4/modules/csapi) |
| [apn](/momentum/3/3-push/apns-modules) (*singleton*) | 4.0 | Use this module to configure the Apple Push Notification service |   |   |   |   |
| [apn_logger](/momentum/3/3-push/apns-modules-apn-logger) | 4.0 | Use this module to log Apple Push notifications |   |   |   |   |
| [“as_logger – Audit Series Logger”](/momentum/4/modules/as-logger) (*singleton*) | 4.0 | Replicate audit series to disk |   |  ✓ |   |   |
| [“auth_ds – Datasource based SMTP Authentication”](/momentum/4/modules/auth-ds) (*singleton*) | 4.0 | Use a data source to authenticate an SMTP session |  ✓ |   |   | [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core) |
| [“auth_radius – RADIUS based SMTP Authentication”](/momentum/4/modules/auth-radius) (*singleton*) | 4.0 | Authenticate SMTP sessions via SMTP AUTH using RADIUS servers |   |   |   |   |
| [“beik – Symantec Brightmail™ Engine Integration Kit”](/momentum/4/modules/beik) (*singleton*) | 4.0 | This module provides an in-process version of the brightmail module |   |   |  ✓ | [“brightmail – Symantec Brightmail™ Content Scanning Support”](/momentum/4/modules/brightmail) |
| [“bind_address_secondary – Dual-stack IPv4/IPv6 Support”](/momentum/4/modules/bind-address-secondary) | 4.2 | This module allows a binding to attach itself to an ipv6 address |   |   |   |   |
| [“bounce_classifier_override – Override/Augment Bounce Classifications”](/momentum/4/modules/bounce-classifier-override) (*singleton*) | 4.0 | Override the built-in bounce classification |   |   |   |   |
| [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/4/modules/bounce-logger) | 4.0 | Log bounced messages |   |   |   |   |
| [“brightmail – Symantec Brightmail™ Content Scanning Support”](/momentum/4/modules/brightmail) | 4.0 | Check inbound mail against a Brightmail server |   |   |  ✓ |   |
| [bzip2io](/momentum/4/modules/compress-spool) (*singleton*) | 4.0 | bzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/4/modules/compress-spool) |
| [“chunk_logger Module”](/momentum/4/modules/chunk-logger) | 4.2 | Provide an interface for logging asynchronously from Lua, C, and C++ |   |   |   |   |
| [“cidrdb – CIDRDB”](/momentum/4/modules/cidrdb) (*singleton*) | 4.0 | Expose scripting functions for checking IP addresses |  ✓ |   |  ✓ |   |
| [“clamav – ClamAV”](/momentum/4/modules/clamav) | 4.0 | Support for Clam AV |   |   |  ✓ | [“antivirus – Antivirus”](/momentum/4/modules/4-antivirus) |
| [“cloudmark – Cloudmark Authority® Content Scanning”](/momentum/4/modules/cloudmark) (*singleton*) | 4.0 | Support for the Cloudmark spam technology |   |   |  ✓ |   |
| [“cluster – Cluster”](/momentum/4/modules/4-modules-cluster) (*singleton*) | 4.0 | Cluster configuration module |   |  ✓ |   | [*Cluster-specific Configuration*](/momentum/4/4-cluster)  |
| [“commtouch_ctasd – Commtouch Spam Protection”](/momentum/4/modules/commtouch) | 4.0 | Spam protection technology |   |   |  ✓ |   |
| [“compress_spool – Dynamic Spool Compression”](/momentum/4/modules/compress-spool) (*singleton*) | 4.0 | Compress large messages before writing them to disk |  ✓ |   |   |   |
| [“conntrol – Fine-Grained Connection Control”](/momentum/4/modules/conntrol) | 4.0 | Control how inbound connections are established |   |   |  ✓ |   |
| [“csapi – Symantec CSAPI Antivirus Support”](/momentum/4/modules/csapi) | 4.0 | Integration for Symantec content scanners |   |   |  ✓ |   |
| [“custom_bounce_logger – Custom Bounce Logging”](/momentum/4/modules/custom-bounce-logger) | 4.2 | Append a "User_String" to the end of each bounce record |  ✓ |   |   | [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/4/modules/bounce-logger) |
| [“custom_logger – User-defined Logging”](/momentum/4/modules/custom-logger) | 4.0 | Create custom logs |   |   |   |   |
| [“delay_dsn – Delay DSN Generation”](/momentum/4/modules/delay-dsn) | 4.0 | Configure and send delay DSNs |   |   |   |   |
| [dk_sign](/momentum/4/modules/domainkeys) | 4.0 | Attach domain keys signatures to outbound mail |   |   |  ✓ |   |
| [dk_validate](/momentum/4/modules/domainkeys) | 4.0 | Validate inbound mail checking domain keys signatures |   |   |  ✓ |   |
| [dkim_sign](/momentum/4/modules/opendkim) | 4.0 | Attach DKIM signatures to outbound mail |   |   |  ✓ |   |
| [dkim_validate](/momentum/4/modules/opendkim) | 4.0 | Validate inbound mail checking DKIM signatures |   |   |  ✓ |   |
| [“dnsbuf – Dynamically Set the DNS UDP Buffer Size”](/momentum/4/modules/dnsbuf) | 4.2 | Manipulate DNS buffer sizes on demand |   |   |   |   |
| [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core) (*singleton*) | 4.0 | Provide modular data access and caching for use by other modules |  ✓ |   |   |   |
| [“EC_logger – Momentum-Style Logging”](/momentum/4/modules/ec-logger) | 4.0 | Log the status of messages |   |   |   |   |
| [“eleven – Eleven eXpurgate Content Scanning”](/momentum/4/modules/eleven) (*singleton*) | 4.0 | This module implements the eleven spam filter and categorization service |   |   |  ✓ |   |
| [“exim_logger – Exim Logging”](/momentum/4/modules/exim-logger) | 4.0 | Support for Exim style logs |   |   |   |   |
| [“fbl - Feedback Loop”](/momentum/4/modules/fbl) (*singleton*) | 4.0 | Manage feedback loop services |   |   |   |   |
| [“fingerprint – Host Fingerprinting”](/momentum/4/modules/host-fingerprint) | 4.0 | Perform passive OS fingerprinting |   |   |  ✓ |   |
| [gcm](/momentum/3/3-push/push-gcm-modules#push.modules.gcm) (*singleton*) | 4.0 | Use this module to configure Google Cloud messaging |   |   |   |   |
| [gcm_logger](/momentum/3/3-push/push-modules-gcm-logger) | 4.0 | Use this module to log Google Cloud messages |   |   |   |   |
| [gzipio](/momentum/4/modules/compress-spool) (*singleton*) | 4.0 | gzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/4/modules/compress-spool) |
| [httpsrv](/momentum/3/3-rest/rest-configuring) (*singleton*) | 4.0 | The HTTP server required for using the REST injection API |   |   |   |   |
| [“icu – ICU”](/momentum/4/modules/icu) (*singleton*) | 4.0 | Unicode support |  ✓ |   |   |   |
| [“ilf_logger – Incremental License Fee Logging”](/momentum/4/modules/ilf-logger) (*singleton*) | 4.0 | Use this module if you have usage-based licenses |   |   |   |   |
| [“inbound_audit – Inbound traffic analytics”](/momentum/4/modules/inbound-audit) (*singleton*) | 4.0 | Provide analytics on sending IPs |   |  ✓ |  ✓ | [“outbound_audit – Outbound traffic analytics”](/momentum/4/modules/outbound-audit) |
| [“ipv6_lookup – Multi-address-family MX Records”](/momentum/4/modules/ipv-6-lookup) | 4.2 | This module supports multi-address-family MX records, enabling A record lookups for IPv6 addresses |   |   |   |   |
| [“jlog – jlog-Formatted Logging”](/momentum/4/modules/jlog) (*singleton*) | 4.0 | Create jlog formatted logs |  ✓ |   |   |   |
| [“Live Bounce Updates – Live Bounce Updates Service”](/momentum/4/modules/live-bounce-updates) | 4.0 | Canonicalizes bounce messages into a number of categories |   |   |   |   |
| [“mail_loop – Mail Loop Detection”](/momentum/4/modules/mail-loop) | 4.0 | Automatic suppression of potential mail loops |   |   |  ✓ |   |
| [“maildir – Maildir Delivery Support”](/momentum/4/modules/maildir) | 4.0 | Store messages in maildir format as specified by qmail |   |   |   |   |
| [mm7](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger) (*singleton*) | 4.0 | Enable MM7 |  ✓ |   |   |   |
| [mm7_serv](/momentum/mobile/mobile-reference/mobility-mm-7) (*singleton*) | 4.0 | Enable the MM7 Value Added Service Provider |   |   |   |   |
| [mms_bounce_logger](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger) | 4.0 | Enable MMS bounce logging |   |   |   |   |
| [mms_logger](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger) | 4.0 | Enable MMS logging |   |   |   |   |
| [msgc_client](/momentum/4/modules/msgc) (*singleton*) | 4.0 | The client component of MSGC |   |  ✓ |   |   |
| [msgc_server](/momentum/4/modules/msgc) (*singleton*) | 4.0 | The server component of MSGC |   |  ✓ |   |   |
| [“mxip - IP Addresses In MX Records”](/momentum/4/modules/mxip) | 4.2 | Enable Momentum to deliver to domains with a textual IP address |   |   |   |   |
| [“opendkim – Open Source DKIM”](/momentum/4/modules/opendkim) | 4.0 | Validate/sign mail using DKIM signatures |   |   |  ✓ |   |
| [“outbound_audit – Outbound traffic analytics”](/momentum/4/modules/outbound-audit) | 4.0 | Provides time-series analytics on the behavior of receiving domains |   |  ✓ |   |   |
| [“outbound_smtp_auth”](/momentum/4/modules/outbound-smtp-auth) | 4.2 | Enables users to specify authentication parameters for a given set of messages |   |   |   |   |
| [“persist_io – Persistent IO Wrapper”](/momentum/4/modules/persistio) (*singleton*) | 4.0 | Provides a non-volatile cache wrapper for any other IO wrapper |  ✓ |   |   |   |
| [“pipe_io – Pipe IO Wrapper”](/momentum/4/modules/pipeio) (*singleton*) | 4.0 | Provides ability to writing content via an arbitrary program |  ✓ |   |   |   |
| [“pipe_transport – Module”](/momentum/4/modules/pipe-transport) | 4.0 | Pipe messages to a local program |   |   |   |   |
| [“postfix_logger – Postfix Logging”](/momentum/4/modules/postfix-logger) | 4.0 | Log in Postfix format |   |   |   |   |
| [“reception_timing - Reception Timing Modules”](/momentum/4/modules/reception-timing) | 4.2 | Track how long it takes to receive or reject messages over SMTP |   |   |  ✓ | [“chunk_logger Module”](/momentum/4/modules/chunk-logger) |
| [“response_transcode – Module”](/momentum/4/modules/response-transcode) (*singleton*) | 4.0 | Work around broken remote servers |  ✓ |   |   |   |
| [restinjector](/momentum/3/3-rest/rest-configuring) (*singleton*) | 4.0 | Activate the REST injection API |   |   |   |   |
| [“sched – The Schedule Module”](/momentum/4/modules/sched) (*singleton*) | 4.0 | Schedule tasks to be run from the console |   |   |   | [“ds_core - Datasource Query Core”](/momentum/4/modules/ds-core) |
| [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet) | 4.0 | Enable scriptlets for enforcing policy |   |   |   | [“alerting – Send Alerting Emails”](/momentum/4/modules/alerting) |
| [“securecreds – Password Encryption/Credential Retrieval”](/momentum/4/modules/securecreds) (*singleton*) | 4.0 | Use encrypted credentials throughout Momentum |   |   |   | [credmgr](/momentum/4/executable/credmgr) |
| [“seedlist – Seedlist Integration”](/momentum/4/modules/seedlist) | 4.0 | Deliverability monitoring service |   |   |  ✓ |   |
| [senderid](/momentum/4/modules/spf) | 4.0 | Use Sender Policy Framework (spf_v2) |   |   |  ✓ | [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet) |
| [“sendmail_logger – Sendmail Logging”](/momentum/4/modules/sendmail-logger) | 4.0 | Create Sendmail formatted logs |   |   |   |   |
| [smpp](/momentum/mobile/mobile-reference/momentum-mobility#modules.mobility.smpp_logger) (*singleton*) | 4.0 | Enable SMPP |   |   |   |   |
| [smpp_bounce_logger](/momentum/mobile/mobile-reference/modules-mobility-smpp-bounce-logger) | 4.0 | Enable SMPP bounce logging |   |   |   |   |
| [smpp_logger](/momentum/mobile/mobile-reference/mobility-configuration-smpp) | 4.0 | Log SMPP events |   |   |   |   |
| [“smtp_auth_proxy - SMTP Authentication Proxy”](/momentum/4/modules/smtp-auth-proxy) | 4.2 | Allow edge SMTP servers to forward SMTP AUTH requests to SMTP servers |  ✓ |   |   |   |
| [“smtp_cbv – SMTP Callback Verification”](/momentum/4/modules/smtp-cbv) | 4.0 | Perform SMTP Callback Verification |   |   |  ✓ |   |
| [“smtp_rcptto_proxy - SMTP Recipient-To Proxy”](/momentum/4/modules/smtp-rcptto-proxy) | 4.2 | Validate a Lua recipient by doing an SMTP call-forward |   |   |   |   |
| [spf_macros](/momentum/4/modules/spf) (*singleton*) | 4.0 | Generic macro service for SPF |  ✓ |   |   |   |
| [spf_v1](/momentum/4/modules/spf) | 4.0 | Use Sender Policy Framework |   |   |   | [“scriptlet - Lua Policy Scripts”](/momentum/4/modules/scriptlet) |
| [“static-routes - Static Routes”](/momentum/4/modules/static-routes) | 4.2 | Route traffic to a given server by IP address and port |  ✓ |   |   |   |
| [“suppress_spool – Deferred Message Spooling”](/momentum/4/modules/suppress-spool) | 4.0 | Defer spool attempts |   |   |   |   |
| [“syslog_io – The syslog_io Module”](/momentum/4/modules/syslog-io) (*singleton*) | 4.0 | Use the syslog wrapper to write entries to the log |  ✓ |   |   |   |
| [“tls_macros – TLS-related Logging”](/momentum/4/4-tls-macros) | 4.0 | Provide several macros supporting custom logging of TLS-related data |   |   |   |   |
| [“url_ripper – URL Extraction”](/momentum/4/modules/url-ripper) | 4.0 | A toolkit for DNS-based content correlation |   |   |  ✓ |   |