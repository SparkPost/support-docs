---
lastUpdated: "03/26/2020"
title: "Summary Module Information"
description: "In this table all modules are listed alphabetically with a brief description Singleton and deprecated modules are identified If a singleton module is followed by a version number that number identifies when that module became a singleton The Auto column indicates whether a module is loaded automatically as required Note..."
---

### <a name="modules.summary.all.modules"></a> All Modules

In this table all modules are listed alphabetically with a brief description. Singleton and deprecated modules are identified. If a singleton module is followed by a version number, that number identifies when that module became a singleton. The `Auto` column indicates whether a module is loaded automatically as required. Note: this applies only to modules in version 3.x. The `Type` column indicates the MTA type of a given option. Options of type `na` do not directly apply to either a sending or receiving MTA. The `Cluster` column indicates whether a module is cluster-specific. The "valid" column indicates whether a module is a validation module.

<a name="table-all"></a> 


| Name | Version | Description | Auto | Cluster | Valid | See Also |
| --- | --- | --- | --- | --- | --- | --- |
| [“Live Bounce Updates – Module”](/momentum/3/3-reference/3-reference-modules-live-bounce-updates) | 3.0 | Canonicalizes bounce messages into a number of categories |   |   |   |   |
| [“ac_auth – Authentication Handler”](/momentum/3/3-reference/3-reference-modules-ac-auth) | 3.6.5 | Enable a Lua module to hook into the authentication mechanism |   |   |   |   |
| [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive) (*singleton*) | 3.0 | Dynamically tune delivery options |   |   |   |   |
| [“alerting – alerting”](/momentum/3/3-reference/3-reference-modules-alerting) (*singleton*) | 3.0 | Enable Lua policy scripts and alerts |   |   |   | [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) |
| [“alias – Alias Expansion Module”](/momentum/3/3-reference/3-reference-modules-alias) | 3.0 | Rewrite recipient addresses |   |   |  ✓ | [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus) | 3.0 | The antivirus framework |  ✓ |   |  ✓ | [“clamav – ClamAV”](/momentum/3/3-reference/3-reference-modules-clamav), [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi) |
| [apn](/momentum/3/3-push/apns-modules) (*singleton*) | 3.5.4 | Use this module to configure the Apple Push Notification service |   |   |   |   |
| [apn_logger](/momentum/3/3-push/apns-modules-apn-logger) | 3.5.4 | Use this module to log Apple Push notifications |   |   |   |   |
| [“as_logger – Audit series logger”](/momentum/3/3-reference/3-reference-modules-as-logger) (*singleton 3.1* ) | 3.0 | Replicate audit series to disk |   |  ✓ |   |   |
| [“auth_ds – Datasource based SMTP Authentication”](/momentum/3/3-reference/3-reference-modules-auth-ds) (*singleton*) | 3.0 | Use a data source to authenticate an SMTP session |  ✓ |   |   | [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| [“auth_radius – RADIUS based SMTP Authentication”](/momentum/3/3-reference/3-reference-modules-auth-radius) (*singleton*) | 3.0 | Authenticate SMTP sessions via SMTP AUTH using RADIUS servers |   |   |   |   |
| [“beik – BEIK Module”](/momentum/3/3-reference/3-reference-modules-beik) (*singleton*) | 3.0 | This module provides an in-process version of the brightmail module |   |   |  ✓ | [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail) |
| [“bind_address_secondary – Dual-stack IPv4/IPv6 Support”](/momentum/3/3-reference/3-reference-modules-bind-address-secondary) | 3.6.10 | Dual-stack IPv4/IPv6 Support |   |   |   |   |
| [“bounce_classifier – Bounce Classifier”](/momentum/3/3-reference/modules-bounce-classifier) *(deprecated)* | 3.0 | Override the built-in bounce classification |   |   |   |   |
| [“bounce_classifier_override – The Bounce Classifier Override Module”](/momentum/3/3-reference/3-reference-modules-bounce-classifier-override) (*singleton*) | 3.1 | Override the built-in bounce classification |   |   |   | [“bounce_classifier – Bounce Classifier”](/momentum/3/3-reference/modules-bounce-classifier) |
| [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger) | 3.0 | Log bounced messages |   |   |   |   |
| [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail) | 3.0 | Check inbound mail against a Brightmail server |   |   |  ✓ |   |
| [bzip2io](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | bzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) |
| [“chunk_logger – Asynchronous Logging”](/momentum/3/3-reference/3-reference-modules-chunk-logger) | 3.6.5 | Provide an interface for logging asynchronously from Lua, C, and C++ |   |   |   |   |
| [“cidrdb – CIDRDB”](/momentum/3/3-reference/3-reference-modules-cidrdb) (*singleton*) | 3.0 | Expose scripting functions for checking IP addresses |  ✓ |   |  ✓ |   |
| [“clamav – ClamAV”](/momentum/3/3-reference/3-reference-modules-clamav) | 3.0 | Support for Clam AV |   |   |  ✓ | [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus) |
| [“cloudmark – Cloudmark Authority Module”](/momentum/3/3-reference/3-reference-modules-cloudmark) (*singleton 3.4* ) | 3.0 | Support for the Cloudmark spam technology |   |   |  ✓ |   |
| [cluster](/momentum/3/3-reference/ecelerity-cluster-conf) (*singleton*) | 3.0 | The cluster configuration module |   |  ✓ |   | [*Clustering*](/momentum/3/3-reference/3-reference-cluster) |
| [“commtouch_ctasd – Commtouch_ctasd Module”](/momentum/3/3-reference/3-reference-modules-commtouch) | 3.0 | Spam protection technology |   |   |  ✓ |   |
| [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | Compress large messages before writing them to disk |  ✓ |   |   |   |
| [“conntrol – Fine-Grained Connection Control”](/momentum/3/3-reference/3-reference-modules-conntrol) | 3.0 | Control how inbound connections are established |   |   |  ✓ |   |
| [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi) | 3.0 | Integration for Symantec content scanners |   |   |  ✓ |   |
| [“custom_bounce_logger – Custom Bounce Logging”](/momentum/3/3-reference/3-reference-modules-custom-bounce-logger) | 3.6.5 | Append a "User_String" to the end of each bounce record |  ✓ |   |   | [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger) |
| [“custom_logger – Customizable Logging”](/momentum/3/3-reference/3-reference-modules-custom-logger) | 3.0 | Create custom logs |   |   |   |   |
| [“delay_dsn – Delay DSN Generation”](/momentum/3/3-reference/3-reference-modules-delay-dsn) | 3.0 | Configure and send delay DSNs |   |   |   |   |
| [dk_sign](/momentum/3/3-reference/3-reference-modules-domainkeys) | 3.0 | Attach domain keys signatures to outbound mail |   |   |  ✓ |   |
| [dk_validate](/momentum/3/3-reference/3-reference-modules-domainkeys) | 3.0 | Validate inbound mail checking domain keys signatures |   |   |  ✓ |   |
| [dkim_sign](/momentum/3/3-reference/modules-dkim) | 3.0 | Attach DKIM signatures to outbound mail |   |   |  ✓ |   |
| [dkim_validate](/momentum/3/3-reference/modules-dkim) | 3.0 | Validate inbound mail checking DKIM signatures |   |   |  ✓ |   |
| [“dnsbuf – Dynamically Set the DNS UDP Buffer Size”](/momentum/3/3-reference/3-reference-modules-dnsbuf) | 3.6.5 | Manipulate DNS buffer sizes on demand |   |   |   |   |
| [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) (*singleton*) | 3.0 | Provide modular data access and caching for use by other modules |  ✓ |   |   |   |
| [“ec_logger – Momentum-Style Logging”](/momentum/3/3-reference/3-reference-modules-ec-logger) | 3.0 | Log the status of messages |   |   |   |   |
| [“eleven – Module”](/momentum/3/3-reference/3-reference-modules-eleven) (*singleton*) | 3.1 | This module implements the eleven spam filter and categorization service |   |   |  ✓ |   |
| [“exim_logger – Exim-Compatible Logging”](/momentum/3/3-reference/3-reference-modules-exim-logger) | 3.0 | Support for Exim style logs |   |   |   |   |
| [“fbl – Feedback Loop Module”](/momentum/3/3-reference/3-reference-modules-fbl) (*singleton*) | 3.0 | Manage feedback loop services |   |   |   |   |
| [“fingerprint – Host Fingerprinting”](/momentum/3/3-reference/3-reference-modules-host-fingerprint) | 3.0 | Perform passive OS fingerprinting |   |   |  ✓ |   |
| [gcm](/momentum/3/3-push/push-gcm-modules#push.modules.gcm) (*singleton*) | 3.5.4 | Use this module to configure Google Cloud messaging |   |   |   |   |
| [gcm_logger](/momentum/3/3-push/push-modules-gcm-logger) | 3.5.4 | Use this module to log Google Cloud messages |   |   |   |   |
| [gzipio](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | gzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) |
| [“http_io – HTTP I/O Provider”](/momentum/3/3-reference/modules-httpio) (*singleton*) | 3.0 | Read content at a URI |  ✓ |   |   |   |
| [httpsrv](/momentum/3/3-rest/rest-configuring) (*singleton*) | 3.1 | The HTTP server required for using the REST injection API |   |   |   |   |
| [“icu – ICU”](/momentum/3/3-reference/3-reference-modules-icu) (*singleton*) | 3.0 | Unicode support |  ✓ |   |   |   |
| [“ilf_logger Module”](/momentum/3/3-reference/3-reference-modules-ilf-logger) (*singleton*) | 3.5.6 | Use this module if you have usage-based licenses |   |   |   |   |
| [“imageanalyzer – Module”](/momentum/3/3-reference/modules-imageanalyzer) | 3.0 | Support for the Image Analyzer engine |   |   |  ✓ |   |
| [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit) (*singleton 3.0.23* ) | 3.0 | Provide analytics on sending IPs |   |  ✓ |  ✓ | [“outbound_audit – Outbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-outbound-audit) |
| [“ipv6_lookup – Multi-address-family MX Records”](/momentum/3/3-reference/3-reference-modules-ipv-6-lookup) | 3.6.10 | Multi-address-family MX Records |   |   |   |   |
| [“jlog – The jlog Module”](/momentum/3/3-reference/3-reference-modules-jlog) (*singleton*) | 3.0 | Create jlog formatted logs |  ✓ |   |   |   |
| [“mail_loop – Mail Loop Detection”](/momentum/3/3-reference/3-reference-modules-mail-loop) | 3.0 | Automatic suppression of potential mail loops |   |   |  ✓ |   |
| [“maildir – Maildir Delivery Support”](/momentum/3/3-reference/3-reference-modules-maildir) | 3.0 | Store messages in maildir format as specified by qmail |   |   |   |   |
| [mm7](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger) (*singleton*) | 3.1 | Enable MM7 |  ✓ |   |   |   |
| [mm7_serv](/momentum/mobile/mobile-reference/mobility-mm-7) (*singleton*) | 3.1 | Enable the MM7 Value Added Service Provider |   |   |   |   |
| [mms_bounce_logger](/momentum/mobile/mobile-reference/mobility-mm-7-mms-bounce-logger) | 3.1 | Enable MMS bounce logging |   |   |   |   |
| [mms_logger](/momentum/mobile/mobile-reference/mobility-mm-7-mms-logger) | 3.1 | Enable MMS logging |   |   |   |   |
| [msgc_client](/momentum/3/3-reference/3-reference-modules-msgc) (*singleton*) | 3.4 | The client component of MSGC |   |  ✓ |   |   |
| [msgc_server](/momentum/3/3-reference/3-reference-modules-msgc) (*singleton*) | 3.4 | The server component of MSGC |   |  ✓ |   |   |
| [“mxip - IP Addresses In MX Records”](/momentum/3/3-reference/3-reference-modules-mxip) | 3.6.5 | Enable Momentum 3.0 to deliver to domains with a textual IP address |   |   |   |   |
| [opendkim](/momentum/3/3-reference/3-reference-modules-opendkim) | 3.6 | Validate/sign mail using DKIM signatures |   |   |  ✓ |   |
| [“outbound_audit – Outbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-outbound-audit) | 3.0 | Provides time-series analytics on the behavior of receiving domains |   |  ✓ |   |   |
| [“outbound_smtp_auth – Module”](/momentum/3/3-reference/3-reference-modules-outbound-smtp-auth) | 3.6.12 | Enables users to specify authentication parameters for a given set of messages |   |   |   |   |
| [“persist_io – Persistent IO Wrapper”](/momentum/3/3-reference/3-reference-modules-persistio) (*singleton*) | 3.0 | Provides a non-volatile cache wrapper for any other IO wrapper |  ✓ |   |   | [“http_io – HTTP I/O Provider”](/momentum/3/3-reference/modules-httpio) |
| [“pipe_io – Pipe IO Wrapper”](/momentum/3/3-reference/3-reference-modules-pipeio) (*singleton*) | 3.0 | Provides ability to writing content via an arbitrary program |  ✓ |   |   |   |
| [“pipe_transport – Module”](/momentum/3/3-reference/3-reference-modules-pipe-transport) | 3.0 | Pipe messages to a local program |   |   |   |   |
| [“postfix_logger – Postfix-Compatible Logging”](/momentum/3/3-reference/3-reference-modules-postfix-logger) | 3.0 | Log in Postfix format |   |   |   |   |
| [“reception_timing - Reception Timing Modules”](/momentum/3/3-reference/3-reference-modules-reception-timing) | 3.6.6 | Track how long it takes to receive or reject messages over SMTP |   |   |  ✓ | [“chunk_logger – Asynchronous Logging”](/momentum/3/3-reference/3-reference-modules-chunk-logger) |
| [“response_transcode – Module”](/momentum/3/3-reference/3-reference-modules-response-transcode) (*singleton*) | 3.0 | Work around broken remote servers |  ✓ |   |   |   |
| [restinjector](/momentum/3/3-rest/rest-configuring) (*singleton*) | 3.1 | Activate the REST injection API |   |   |   |   |
| [“sched – The Schedule Module”](/momentum/3/3-reference/3-reference-modules-sched) (*singleton*) | 3.0 | Schedule tasks to be run from the console |   |   |   | [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) | 3.0 | Enable scriptlets for enforcing policy |   |   |   | [“alerting – alerting”](/momentum/3/3-reference/3-reference-modules-alerting) |
| [“securecreds – Module”](/momentum/3/3-reference/3-reference-modules-securecreds) (*singleton*) | 3.2 | Use encrypted credentials throughout Momentum |   |   |   | [credmgr](/momentum/3/3-reference/executable-credmgr) |
| [“seedlist – Seedlist Integration”](/momentum/3/3-reference/3-reference-modules-seedlist) | 3.0 | Deliverability monitoring service |   |   |  ✓ |   |
| [senderid](/momentum/3/3-reference/3-reference-modules-spf) | 3.0 | Use Sender Policy Framework (spf_v2) |   |   |  ✓ | [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) |
| [“sendmail_logger – Sendmail-Compatible Logging”](/momentum/3/3-reference/3-reference-modules-sendmail-logger) | 3.0 | Create Sendmail formatted logs |   |   |   |   |
| [smpp](/momentum/mobile/mobile-reference/momentum-mobility#modules.mobility.smpp_logger) (*singleton*) | 3.0 | Enable SMPP |   |   |   |   |
| [smpp_bounce_logger](/momentum/mobile/mobile-reference/modules-mobility-smpp-bounce-logger) | 3.0 | Enable SMPP bounce logging |   |   |   |   |
| [smpp_logger](/momentum/mobile/mobile-reference/mobility-configuration-smpp) | 3.0 | Log SMPP events |   |   |   |   |
| [“smtp_auth_proxy - SMTP Authentication Proxy”](/momentum/3/3-reference/3-reference-modules-smtp-auth-proxy) | 3.6.5 | Allow edge SMTP servers to forward SMTP AUTH requests to SMTP servers |  ✓ |   |   |   |
| [“smtp_cbv – SMTP Callback Verification”](/momentum/3/3-reference/3-reference-modules-smtp-cbv) | 3.0 | Perform SMTP Callback Verification |   |   |  ✓ |   |
| [“smtp_rcptto_proxy - SMTP Recipient-To Proxy”](/momentum/3/3-reference/3-reference-modules-smtp-rcptto-proxy) | 3.6.5 | Validate a Lua recipient by doing an SMTP call-forward |   |   |   |   |
| [spf_macros](/momentum/3/3-reference/3-reference-modules-spf) (*singleton*) | 3.0 | Generic macro service for SPF |  ✓ |   |   |   |
| [spf_v1](/momentum/3/3-reference/3-reference-modules-spf) | 3.0 | Use Sender Policy Framework |   |   |   | [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) |
| [“static-routes - Static Routes”](/momentum/3/3-reference/3-reference-modules-static-routes) | 3.6.5 | Route traffic to a given server by IP address and port |  ✓ |   |   |   |
| [“suppress_spool – Deferred Message Spooling”](/momentum/3/3-reference/3-reference-modules-suppress-spool) | 3.0 | Defer spool attempts |   |   |   |   |
| [“syslog_io – The syslog_io Module”](/momentum/3/3-reference/3-reference-modules-syslog-io) (*singleton*) | 3.0 | Use the syslog wrapper to write entries to the log |  ✓ |   |   |   |
| [“tls_macros Module”](/momentum/3/3-reference/3-reference-tls-macros) | 3.6.5 | Provide several macros supporting custom logging of TLS-related data |   |   |   |   |
| [“url_ripper – URL Extraction”](/momentum/3/3-reference/3-reference-modules-url-ripper) | 3.0 | A toolkit for DNS-based content correlation |   |   |  ✓ |   |

### <a name="modules.summary.inbound"></a> Receiving Modules

This section shows inbound modules. Modules are listed alphabetically with a brief description and with singleton and deprecated modules identified. If a singleton module is followed by a version number, that number identifies when that module became a singleton. The `Auto` column indicates whether a module is loaded automatically as required. Note: this applies only to modules in version 3.x. The `Cluster` column indicates whether a module is cluster-specific.

<a name="table-receiving"></a> 


| Name | Version | Description | Auto | Cluster | Valid | See Also |
| --- | --- | --- | --- | --- | --- | --- |
| [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus) | 3.0 | The antivirus framework |  ✓ |   |  ✓ | [“clamav – ClamAV”](/momentum/3/3-reference/3-reference-modules-clamav), [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi) |
| [“auth_ds – Datasource based SMTP Authentication”](/momentum/3/3-reference/3-reference-modules-auth-ds) (*singleton*) | 3.0 | Use a data source to authenticate an SMTP session |  ✓ |   |   | [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| [“auth_radius – RADIUS based SMTP Authentication”](/momentum/3/3-reference/3-reference-modules-auth-radius) (*singleton*) | 3.0 | Authenticate SMTP sessions via SMTP AUTH using RADIUS servers |   |   |   |   |
| [“beik – BEIK Module”](/momentum/3/3-reference/3-reference-modules-beik) (*singleton*) | 3.0 | This module provides an in-process version of the brightmail module |   |   |  ✓ | [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail) |
| [“brightmail – Brightmail Module”](/momentum/3/3-reference/3-reference-modules-brightmail) | 3.0 | Check inbound mail against a Brightmail server |   |   |  ✓ |   |
| [bzip2io](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | bzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) |
| [“cidrdb – CIDRDB”](/momentum/3/3-reference/3-reference-modules-cidrdb) (*singleton*) | 3.0 | Expose scripting functions for checking IP addresses |  ✓ |   |  ✓ |   |
| [“clamav – ClamAV”](/momentum/3/3-reference/3-reference-modules-clamav) | 3.0 | Support for Clam AV |   |   |  ✓ | [“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus) |
| [“cloudmark – Cloudmark Authority Module”](/momentum/3/3-reference/3-reference-modules-cloudmark) (*singleton 3.4* ) | 3.0 | Support for the Cloudmark spam technology |   |   |  ✓ |   |
| [“commtouch_ctasd – Commtouch_ctasd Module”](/momentum/3/3-reference/3-reference-modules-commtouch) | 3.0 | Spam protection technology |   |   |  ✓ |   |
| [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | Compress large messages before writing them to disk |  ✓ |   |   |   |
| [“conntrol – Fine-Grained Connection Control”](/momentum/3/3-reference/3-reference-modules-conntrol) | 3.0 | Control how inbound connections are established |   |   |  ✓ |   |
| [“csapi – The Content Scanning API Module”](/momentum/3/3-reference/3-reference-modules-csapi) | 3.0 | Integration for Symantec content scanners |   |   |  ✓ |   |
| [“delay_dsn – Delay DSN Generation”](/momentum/3/3-reference/3-reference-modules-delay-dsn) | 3.0 | Configure and send delay DSNs |   |   |   |   |
| [dk_validate](/momentum/3/3-reference/3-reference-modules-domainkeys) | 3.0 | Validate inbound mail checking domain keys signatures |   |   |  ✓ |   |
| [dkim_validate](/momentum/3/3-reference/modules-dkim) | 3.0 | Validate inbound mail checking DKIM signatures |   |   |  ✓ |   |
| [“eleven – Module”](/momentum/3/3-reference/3-reference-modules-eleven) (*singleton*) | 3.1 | This module implements the eleven spam filter and categorization service |   |   |  ✓ |   |
| [“fingerprint – Host Fingerprinting”](/momentum/3/3-reference/3-reference-modules-host-fingerprint) | 3.0 | Perform passive OS fingerprinting |   |   |  ✓ |   |
| [gzipio](/momentum/3/3-reference/3-reference-modules-compress-spool) (*singleton*) | 3.0 | gzip compression algorithm |  ✓ |   |   | [“compress_spool – Dynamic Spool Compression”](/momentum/3/3-reference/3-reference-modules-compress-spool) |
| [“imageanalyzer – Module”](/momentum/3/3-reference/modules-imageanalyzer) | 3.0 | Support for the Image Analyzer engine |   |   |  ✓ |   |
| [“inbound_audit – Inbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-inbound-audit) (*singleton 3.0.23* ) | 3.0 | Provide analytics on sending IPs |   |  ✓ |  ✓ | [“outbound_audit – Outbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-outbound-audit) |
| [“maildir – Maildir Delivery Support”](/momentum/3/3-reference/3-reference-modules-maildir) | 3.0 | Store messages in maildir format as specified by qmail |   |   |   |   |
| [“pipe_transport – Module”](/momentum/3/3-reference/3-reference-modules-pipe-transport) | 3.0 | Pipe messages to a local program |   |   |   |   |
| [“reception_timing - Reception Timing Modules”](/momentum/3/3-reference/3-reference-modules-reception-timing) | 3.6.6 | Track how long it takes to receive or reject messages over SMTP |   |   |  ✓ | [“chunk_logger – Asynchronous Logging”](/momentum/3/3-reference/3-reference-modules-chunk-logger) |
| [senderid](/momentum/3/3-reference/3-reference-modules-spf) | 3.0 | Use Sender Policy Framework (spf_v2) |   |   |  ✓ | [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) |
| [“smtp_cbv – SMTP Callback Verification”](/momentum/3/3-reference/3-reference-modules-smtp-cbv) | 3.0 | Perform SMTP Callback Verification |   |   |  ✓ |   |
| [spf_macros](/momentum/3/3-reference/3-reference-modules-spf) (*singleton*) | 3.0 | Generic macro service for SPF |  ✓ |   |   |   |
| [spf_v1](/momentum/3/3-reference/3-reference-modules-spf) | 3.0 | Use Sender Policy Framework |   |   |   | [“scriptlet – Module”](/momentum/3/3-reference/3-reference-modules-scriptlet) |
| [“suppress_spool – Deferred Message Spooling”](/momentum/3/3-reference/3-reference-modules-suppress-spool) | 3.0 | Defer spool attempts |   |   |   |   |

### <a name="modules.summary.outbound"></a> Sending Modules

This section shows outbound modules. Modules are listed alphabetically with a brief description and with singleton and deprecated modules identified. If a singleton module is followed by a version number, that number identifies when that module became a singleton. The `Auto` column indicates whether a module is loaded automatically as required. Note: this applies only to modules in version 3.x. The `Cluster` column indicates whether a module is cluster-specific.

<a name="table-sending"></a> 


| Name | Version | Description | Auto | Cluster | Valid | See Also |
| --- | --- | --- | --- | --- | --- | --- |
| [“adaptive – Adaptive Delivery”](/momentum/3/3-reference/3-reference-modules-adaptive) (*singleton*) | 3.0 | Dynamically tune delivery options |   |   |   |   |
| [“alias – Alias Expansion Module”](/momentum/3/3-reference/3-reference-modules-alias) | 3.0 | Rewrite recipient addresses |   |   |  ✓ | [“ds_core – Datasource Query Core”](/momentum/3/3-reference/3-reference-modules-ds-core) |
| [apn](/momentum/3/3-push/apns-modules) (*singleton*) | 3.5.4 | Use this module to configure the Apple Push Notification service |   |   |   |   |
| [apn_logger](/momentum/3/3-push/apns-modules-apn-logger) | 3.5.4 | Use this module to log Apple Push notifications |   |   |   |   |
| [“bounce_logger – Momentum-Style Bounce Logging”](/momentum/3/3-reference/3-reference-modules-bounce-logger) | 3.0 | Log bounced messages |   |   |   |   |
| [dk_sign](/momentum/3/3-reference/3-reference-modules-domainkeys) | 3.0 | Attach domain keys signatures to outbound mail |   |   |  ✓ |   |
| [dkim_sign](/momentum/3/3-reference/modules-dkim) | 3.0 | Attach DKIM signatures to outbound mail |   |   |  ✓ |   |
| [“fbl – Feedback Loop Module”](/momentum/3/3-reference/3-reference-modules-fbl) (*singleton*) | 3.0 | Manage feedback loop services |   |   |   |   |
| [gcm](/momentum/3/3-push/push-gcm-modules#push.modules.gcm) (*singleton*) | 3.5.4 | Use this module to configure Google Cloud messaging |   |   |   |   |
| [gcm_logger](/momentum/3/3-push/push-modules-gcm-logger) | 3.5.4 | Use this module to log Google Cloud messages |   |   |   |   |
| [httpsrv](/momentum/3/3-rest/rest-configuring) (*singleton*) | 3.1 | The HTTP server required for using the REST injection API |   |   |   |   |
| [“mail_loop – Mail Loop Detection”](/momentum/3/3-reference/3-reference-modules-mail-loop) | 3.0 | Automatic suppression of potential mail loops |   |   |  ✓ |   |
| [“outbound_audit – Outbound traffic analytics”](/momentum/3/3-reference/3-reference-modules-outbound-audit) | 3.0 | Provides time-series analytics on the behavior of receiving domains |   |  ✓ |   |   |
| [“outbound_smtp_auth – Module”](/momentum/3/3-reference/3-reference-modules-outbound-smtp-auth) | 3.6.12 | Enables users to specify authentication parameters for a given set of messages |   |   |   |   |
| [“response_transcode – Module”](/momentum/3/3-reference/3-reference-modules-response-transcode) (*singleton*) | 3.0 | Work around broken remote servers |  ✓ |   |   |   |
| [restinjector](/momentum/3/3-rest/rest-configuring) (*singleton*) | 3.1 | Activate the REST injection API |   |   |   |   |
| [“seedlist – Seedlist Integration”](/momentum/3/3-reference/3-reference-modules-seedlist) | 3.0 | Deliverability monitoring service |   |   |  ✓ |   |