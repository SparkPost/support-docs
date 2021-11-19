---
lastUpdated: "03/26/2020"
title: "Sieve Function Summary"
description: "This table lists all Sieve functions alphabetically giving a brief description Click the function name to see detailed information Table 16 1 Sieve functions Name Description Class Type Phases add recipient Add a new envelope recipient to the mail misc receiving data mailfrom rcptto spool address Return the address from..."
---

This table lists all Sieve functions alphabetically giving a brief description. Click the function name to see detailed information.

<a name="table-sieve-functions"></a> 


| Name | Description | Class | Type | Phases |
| --- | --- | --- | --- | --- |
| **[add_recipient](/momentum/3/3-reference/sieve-ref-add-recipient)**  | Add a new envelope recipient to the mail | misc | receiving | data, mailfrom, rcptto, spool |
| **[address](/momentum/3/3-reference/sieve-ref-address)**  | Return the address from a header | misc | both | data, each_rcpt, mailfrom, rcptto, set_binding |
| **[advertize_esmtp_capability](/momentum/3/3-reference/sieve-ref-advertize-esmtp-capability)**  | Add a string to the EHLO response | misc | receiving | connect, ehlo |
| **[audit_connections_on_listener](/momentum/3/3-reference/sieve-ref-audit-connections-on-listener)**  | Return the number of connections currently established from a CIDR block | cidr | receiving | any |
| **[audit_connections_on_service](/momentum/3/3-reference/sieve-ref-audit-connections-on-service)**  | Return the number of connections currently established from a CIDR block | cidr | receiving | any |
| **[audit_series](/momentum/3/3-reference/sieve-ref-audit-series)**  | Return the audit series count associated with an IP address or CIDR block over a window range | cidr | receiving | any |
| **[audit_series_add](/momentum/3/3-reference/sieve-ref-audit-series-add)**  | Add to a named audit series | cidr | receiving | any |
| **[audit_service](/momentum/3/3-reference/sieve-ref-audit-service)**  | Return how many connections currently are established from a CIDR block to an arbitrary service | cidr | receiving | any |
| **[beik_scan](/momentum/3/3-reference/3-reference-modules-beik#modules.beik.runtime)**  | Analyze a message using BEIK | av | receiving | data |
| **[brightmail](/momentum/3/3-reference/sieve-ref-brightmail)**  | Scan using Brightmail | av | receiving | data |
| **[cidrdb](/momentum/3/3-reference/sieve-ref-cidrdb)**  | Check the CIDR information pathway specified by the first argument | cidr | receiving | any |
| **[antivirus](/momentum/3/3-reference/sieve-ref-antivirus)**  | Scan with Clamav | av | receiving | data |
| **[cloudmark_score](/momentum/3/3-reference/sieve-ref-cloudmark-score)**  | Analyze a message with Cloudmark Authority | av | both | data |
| **[commtouch_scan](/momentum/3/3-reference/sieve-ref-commtouch-scan)**  | Scan using the commtouch module | av | receiving | data |
| **[antivirus](/momentum/3/3-reference/sieve-ref-antivirus)**  | Scan with the csapi antivirus engine | av | receiving | data |
| **[cidrdb](/momentum/3/3-reference/sieve-ref-cidrdb)**  | Create the pathway for CIDR information | cidr | receiving | each_rcpt |
| **[disable_esmtp_capability](/momentum/3/3-reference/sieve-ref-disable-esmtp-capability)**  | Remove a string from the EHLO response | misc | receiving | connect, ehlo |
| **[discard](/momentum/3/3-reference/sieve-ref-discard)**  | Silently throw away a message | misc | receiving | data, each_rcpt, rcptto, spool |
| **[disclaimer_add](/momentum/3/3-reference/sieve-ref-disclaimer-add)**  | Add a disclaimer to an email | misc | receiving | data, each_rcpt, spool |
| **[ds_execute](/momentum/3/3-reference/sieve-ref-ds-execute)**  | Execute a query on a datasource | ds | na | any |
| **[ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch)**  | Query and fetch a row from a datasource | ds | na | any |
| **[ds_fetch_flat](/momentum/3/3-reference/sieve-ref-ds-fetch-flat)**  | Query and fetch all rows from a datasource | ds | na | any |
| **[ds_fetch_hash](/momentum/3/3-reference/sieve-ref-ds-fetch-hash)**  | Query and fetch a row from a datasource | ds | na | any |
| **[ec_action](/momentum/3/3-reference/sieve-ref-ec-action)**  | Set SMTP status code | misc | receiving | any |
| **[ec_add](/momentum/3/3-reference/sieve-ref-ec-add)**  | Add two numbers | math | na | any |
| **[ec_base64_decode](/momentum/3/3-reference/sieve-ref-ec-base-64-decode)**  | Decode base64 encoded text | misc | na | any |
| **[ec_base64_encode](/momentum/3/3-reference/sieve-ref-ec-base-64-encode)**  | Encode text as base64 | misc | na | any |
| **[ec_bounce_classify](/momentum/3/3-reference/sieve-ref-ec-bounce-classify)**  | Perform bounce classification on the message | bounce | receiving | data, each_rcpt, set_binding, spool |
| **[ec_ceil](/momentum/3/3-reference/sieve-ref-ec-ceil)**  | Round up to the nearest integer | math | na | any |
| **[ec_cluster_cache_get](/momentum/3/3-reference/sieve-ref-ec-cluster-cache-get)**  | Retrieve a value from a cluster-wide replicated cache | cidr | both | accept, connect, data, ehlo, mailfrom, rcptto |
| **[ec_cluster_cache_set](/momentum/3/3-reference/sieve-ref-ec-cluster-cache-set)**  | Set a value in a cluster-wide replicated cache | cidr | both | accept, connect, data, ehlo, mailfrom, rcptto |
| **[ec_config](/momentum/3/3-reference/sieve-ref-ec-config)**  | Get Momentum configuration from Sieve | misc | na | any |
| **[discard](/momentum/3/3-reference/sieve-ref-discard)**  | Silently throw away a message (alias for discard) | misc | receiving | data, each_rcpt, rcptto, spool |
| **[ec_disconnect](/momentum/3/3-reference/sieve-ref-ec-disconnect)**  | Set SMTP status and close the SMTP connection | misc | receiving | any |
| **[ec_div](/momentum/3/3-reference/sieve-ref-ec-div)**  | Divide two numbers | math | na | any |
| **[ec_dk_responsible_domain](/momentum/3/3-reference/sieve-ref-ec-dk-responsible-domain)**  | Return the domain responsible for the current message | dk | sending | data, each_rcpt, set_binding, spool |
| **[ec_dk_sign](/momentum/3/3-reference/sieve-ref-ec-dk-sign)**  | Sign a message with the DomainKeys protocol | dk | sending | core_final_validation |
| **[ec_dkim_domains](/momentum/3/3-reference/sieve-ref-ec-dkim-domains)**  | Return a list of valid signing domains | dkim | sending | data, each_rcpt, set_binding, spool |
| **[ec_dkim_responsible_domain](/momentum/3/3-reference/sieve-ref-ec-dkim-responsible-domain)**  | Return the domain responsible for the current message | dkim | sending | data, each_rcpt, set_binding, spool |
| **[ec_dkim_sign](/momentum/3/3-reference/sieve-ref-ec-dkim-sign)**  | Sign a message with the DKIM protocol | dkim | sending | core_final_validation |
| **[ec_dns_lookup](/momentum/3/3-reference/sieve-ref-ec-dns-lookup)**  | Perform a DNS record lookup | misc | both | any |
| **[ec_error_mode](/momentum/3/3-reference/sieve-ref-ec-error-mode)**  | Set the error mode to "fail" or "continue" | misc | na | any |
| **[split](/momentum/3/3-reference/sieve-ref-split)**  | Explode a string into a stringlist, a synonym for split | string | na | any |
| **[ec_floor](/momentum/3/3-reference/sieve-ref-ec-floor)**  | Round down to the nearest integer | math | na | any |
| **[ec_forward](/momentum/3/3-reference/sieve-ref-ec-forward)**  | Forward a message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache)**  | Create the given key in a given cache and decrement it | misc | na | any |
| **[ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache)**  | Return the value of the specified key | misc | na | any |
| **[ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache)**  | Create the given key in a given cache and increment it | misc | na | any |
| **[ec_gauge_cache](/momentum/3/3-reference/sieve-ref-ec-gauge-cache)**  | Create a cache with the given max number of elements | misc | na | any |
| **[ec_get_message_code](/momentum/3/3-reference/sieve-ref-ec-get-message-code)**  | Return the current SMTP status code for a message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_creation_time](/momentum/3/3-reference/sieve-ref-ec-get-message-creation-time)**  | Return the creation_time of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_id](/momentum/3/3-reference/sieve-ref-ec-get-message-id)**  | Return the message's unique ID | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_mailfrom](/momentum/3/3-reference/sieve-ref-ec-get-message-mailfrom)**  | Return the mailfrom of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_num_retries](/momentum/3/3-reference/sieve-ref-ec-get-message-num-retries)**  | Return the num_retries of the current message | misc | sending | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_protocol](/momentum/3/3-reference/sieve-ref-ec-get-message-protocol)**  | Return the protocol of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_rcptto](/momentum/3/3-reference/sieve-ref-ec-get-message-rcptto)**  | Return the rcptto of the current message | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_from](/momentum/3/3-reference/sieve-ref-ec-get-message-received-from)**  | Return the IP address that the message was received from | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_from_port](/momentum/3/3-reference/sieve-ref-ec-get-message-received-from-port)**  | Return the port that the message was received from | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_via](/momentum/3/3-reference/sieve-ref-ec-get-message-received-via)**  | Return the IP address that the message was received via | misc | receiving | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_received_via_port](/momentum/3/3-reference/sieve-ref-ec-get-message-received-via-port)**  | Return the local port that the message was received on | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_size](/momentum/3/3-reference/sieve-ref-ec-get-message-size)**  | Return the size of the current message in bytes | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_get_message_spool_name](/momentum/3/3-reference/sieve-ref-ec-get-message-spool-name)**  | Return the filename of the message spool | misc | both | data, each_rcpt, rcptto, set_binding, spool |
| **[ec_header_add](/momentum/3/3-reference/sieve-ref-ec-header-add)**  | Prepend a header to the current message | misc | both | data, each_rcpt, spool |
| **[ec_header_delete](/momentum/3/3-reference/sieve-ref-ec-header-delete)**  | Remove a header from the current message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_header_get](/momentum/3/3-reference/sieve-ref-ec-header-get)**  | Obtain the values for a particular header | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_header_postfix](/momentum/3/3-reference/sieve-ref-ec-header-postfix)**  | Append to a header of the current message | misc | both | data, each_rcpt, spool |
| **[ec_header_prefix](/momentum/3/3-reference/sieve-ref-ec-header-prefix)**  | Prepend to a header of the current message | misc | both | data, each_rcpt, spool |
| **[ec_host_fingerprint](/momentum/3/3-reference/sieve-ref-ec-host-fingerprint)**  | Return genre and detail of the passive host fingerprinting operation | misc | receiving | any |
| **[ec_inc_counter](/momentum/3/3-reference/sieve-ref-ec-inc-counter)**  | Increment a Sieve counter | misc | na | any |
| **[ec_include](/momentum/3/3-reference/sieve-ref-ec-include)**  | Include and run a Sieve script | meta | na | any |
| **[ec_interfaces](/momentum/3/3-reference/sieve-ref-ec-interfaces)**  | Obtain a list of network interfaces | resource | na | any |
| **[ec_ip_connections](/momentum/3/3-reference/sieve-ref-ec-ip-connections)**  | Audit how many connections an IP address has made | audit | receiving | any |
| **[ec_ip_connections_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-connections-cluster)**  | Audit how many connections an IP address has made cluster-wide | audit | receiving | any |
| **[ec_ip_receptions](/momentum/3/3-reference/sieve-ref-ec-ip-receptions)**  | Audit how many receivings an IP address has made | audit | receiving | any |
| **[ec_ip_receptions_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-receptions-cluster)**  | Audit how many receivings an IP address has made cluster-wide | audit | receiving | any |
| **[ec_ip_rejections](/momentum/3/3-reference/sieve-ref-ec-ip-rejections)**  | Audit how many rejections an IP address has made | audit | receiving | any |
| **[ec_ip_rejections_cluster](/momentum/3/3-reference/sieve-ref-ec-ip-rejections-cluster)**  | Audit how many rejections an IP address has made cluster-wide | audit | receiving | any |
| **[keep](/momentum/3/3-reference/sieve-ref-keep)**  | Keep the current message, a synonym for keep | misc | receiving | any |
| **[ec_log](/momentum/3/3-reference/sieve-ref-ec-log)**  | Log to the paniclog | misc | na | any |
| **[ec_log_file](/momentum/3/3-reference/sieve-ref-ec-log-file)**  | Log to a file/io wrapper | log | na | each_rcpt, set_binding, spool |
| **[ec_maildir](/momentum/3/3-reference/sieve-ref-ec-maildir)**  | Write the current message into a maildir mailbox | misc | receiving | each_rcpt |
| **[ec_mem_usage](/momentum/3/3-reference/sieve-ref-ec-mem-usage)**  | Return the amount of memory used by Momentum | resource | na | any |
| **[ec_mime_boundary_create](/momentum/3/3-reference/sieve-ref-ec-mime-boundary-create)**  | Return a string to be used as a boundary when creating a MIME message | string | sending | any |
| **[ec_mime_parts](/momentum/3/3-reference/sieve-ref-ec-mime-parts)**  | Test against metadata for each MIME part in a message | misc | both | data, each_rcpt, set_binding, spool |
| **[ec_mod](/momentum/3/3-reference/sieve-ref-ec-mod)**  | Calculate the modulus of two numbers | math | na | any |
| **[ec_mul](/momentum/3/3-reference/sieve-ref-ec-mul)**  | Perform multiplication of two numbers | math | na | any |
| **[ec_nearbyint](/momentum/3/3-reference/sieve-ref-ec-nearbyint)**  | Round to the nearest integer based on rounding direction | math | na | any |
| **[ec_pcre_match](/momentum/3/3-reference/sieve-ref-ec-pcre-match)**  | Perform a regular expression match | pcre | na | any |
| **[ec_rand](/momentum/3/3-reference/sieve-ref-ec-rand)**  | Generate a random number no larger than max or a random string from a list | math | na | any |
| **[redirect](/momentum/3/3-reference/sieve-ref-redirect)**  | Change the envelope recipient, a synonym for redirect | misc | both | data, each_rcpt, rcptto, spool |
| **[reject](/momentum/3/3-reference/sieve-ref-reject)**  | Reject the message, returning an MDN to the sender, a synonym for reject | misc | receiving | any |
| **[ec_rewrite_mailfrom](/momentum/3/3-reference/sieve-ref-ec-rewrite-mailfrom)**  | Change the envelope sender | misc | both | data, each_rcpt, rcptto, spool |
| **[ec_rfc2047_encode_addresses](/momentum/3/3-reference/sieve-ref-ec-rfc-2047-encode-addresses)**  | Create an RFC2047-compliant address | rfc | sending | data, each_rcpt, spool |
| **[ec_rfc2047_encode_header](/momentum/3/3-reference/sieve-ref-ec-rfc-2047-encode-header)**  | Encode a string for use in a RFC2047-compliant header | rfc | sending | any |
| **[ec_rfc3464_delivery_status](/momentum/3/3-reference/sieve-ref-ec-rfc-3464-delivery-status)**  | Return a string containing fields for a RFC3464 DSN | rfc | sending | data, each_rcpt, set_binding, spool |
| **[ec_round](/momentum/3/3-reference/sieve-ref-ec-round)**  | Round away from zero | math | na | any |
| **[ec_set_binding](/momentum/3/3-reference/sieve-ref-ec-set-binding)**  | Assign a message to a MultiVIP© binding | virtual | both | set_binding |
| **[ec_set_binding](/momentum/3/3-reference/sieve-ref-ec-set-binding)**  | Assign a message to a MultiVIP© binding group | virtual | both | set_binding |
| **[ec_set_routing_gateway](/momentum/3/3-reference/sieve-ref-ec-set-routing-gateway)**  | Dynamically change the gateway based on recipient | misc | sending | each_rcpt |
| **[ec_shared_throttle](/momentum/3/3-reference/sieve-ref-ec-shared-throttle)**  | Check to see if the specified throttle currently exceeds its quota | shaping | both | any |
| **[ec_shared_throttle](/momentum/3/3-reference/sieve-ref-ec-shared-throttle)**  | Create a shared throttle | shaping | both | any |
| **[ec_shared_throttle](/momentum/3/3-reference/sieve-ref-ec-shared-throttle)**  | Indicate to the specified throttle that it has received a message to be counted | shaping | both | any |
| **[ec_shared_throttle](/momentum/3/3-reference/sieve-ref-ec-shared-throttle)**  | Increment the named throttle, and tarpit for a length of time | shaping | both | any |
| **[ec_spool_space](/momentum/3/3-reference/sieve-ref-ec-spool-space)**  | Return information about the free space on the spool partition | resource | na | any |
| **[ec_sub](/momentum/3/3-reference/sieve-ref-ec-sub)**  | Perform subtraction of two numbers | math | na | any |
| **[ec_tarpit](/momentum/3/3-reference/sieve-ref-ec-tarpit)**  | Impose a time penalty | shaping | receiving | any |
| **[ec_test](/momentum/3/3-reference/sieve-ref-ec-test)**  | Function for using comparators | misc | na | any |
| **[ec_thread_pool_get_queue_size](/momentum/3/3-reference/sieve-ref-ec-thread-pool-get-queue-size)**  | Get the number of jobs queued against a job class | resource | both | any |
| **[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle)**  | Indicate to the specified throttle that it should remove a message from being counted | shaping | both | any |
| **[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle)**  | Create a throttle of the specified name | shaping | both | any |
| **[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle)**  | Indicate to the specified throttle that it should remove a message from being counted | shaping | both | any |
| **[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle)**  | Indicate to the specified throttle that it has received a message to be counted | shaping | both | any |
| **[ec_throttle](/momentum/3/3-reference/sieve-ref-ec-throttle)**  | Wait for the specified length of time | shaping | both | any |
| **[ec_tolower](/momentum/3/3-reference/sieve-ref-ec-tolower)**  | Change all characters to lower case | string | na | any |
| **[ec_trace_context](/momentum/3/3-reference/sieve-ref-ec-trace-context)**  | Add X-Trace-Context header to the current message | misc | both | data, each_rcpt, spool |
| **[ec_trunc](/momentum/3/3-reference/sieve-ref-ec-trunc)**  | Round toward zero | math | na | any |
| **[ec_url_ripper](/momentum/3/3-reference/sieve-ref-ec-url-ripper)**  | Extract domains and urls for lookup in DNSBL | misc | receiving | data |
| **[ec_valid_binding](/momentum/3/3-reference/sieve-ref-ec-valid-binding)**  | Check whether a named MultiVIP© binding exists | virtual | both | any |
| **[ec_valid_binding](/momentum/3/3-reference/sieve-ref-ec-valid-binding)**  | Check whether a named MultiVIP© binding group exists | virtual | both | any |
| **[ec_valid_mime](/momentum/3/3-reference/sieve-ref-ec-valid-mime)**  | Determine if the message is valid MIME | misc | both | data, each_rcpt, set_binding, spool |
| **[eleven_scan](/momentum/3/3-reference/sieve-ref-eleven-scan)**  | Scan with eleven | av | receiving | data |
| **[envelope](/momentum/3/3-reference/sieve-ref-envelope)**  | Return the envelope sender or recipient | misc | both | any |
| **[antivirus](/momentum/3/3-reference/sieve-ref-antivirus)**  | Scan with F-Secure | av | receiving | data |
| **[generate_mail_raw](/momentum/3/3-reference/sieve-ref-generate-mail-raw)**  | Generate and send out a message | misc | sending | any |
| **[hash_create](/momentum/3/3-reference/sieve-ref-hash-create)**  | Create a hash | hash | na | any |
| **[hash_dump](/momentum/3/3-reference/sieve-ref-hash-dump)**  | Dump the contents of a hash to the panic log | hash | na | any |
| **[hash_get](/momentum/3/3-reference/sieve-ref-hash-get)**  | Get the value associated with the specified key | hash | na | any |
| **[hash_keys](/momentum/3/3-reference/sieve-ref-hash-keys)**  | Return all the keys of a hash as a string list | hash | na | any |
| **[hash_set](/momentum/3/3-reference/sieve-ref-hash-set)**  | Set an element in a hash | hash | na | any |
| **[hash_values](/momentum/3/3-reference/sieve-ref-hash-values)**  | Return all the string values of a hash as a string list | hash | na | any |
| **[is_true](/momentum/3/3-reference/sieve-ref-is-true)**  | Provides a simple logical test on the value of a variable | misc | na | any |
| **[join](/momentum/3/3-reference/sieve-ref-join)**  | Join stringlist elements into a single string | string | na | any |
| **[keep](/momentum/3/3-reference/sieve-ref-keep)**  | Keep the current message | misc | receiving | any |
| **[pe2_mark_bounced](/momentum/3/3-reference/sieve-ref-pe-2-mark-bounced)**  | Log bounce events when the pe2_logger module is loaded passively | log | receiving | data |
| **[pe2_mark_unsubscribed](/momentum/3/3-reference/sieve-ref-pe-2-mark-unsubscribed)**  | Log unsubscribe events when the pe2_logger module is loaded passively | log | receiving | data |
| **[qp_encode](/momentum/3/3-reference/sieve-ref-qp-encode)**  | Quoted-printable encode a string | string | both | any |
| **[cidrdb](/momentum/3/3-reference/sieve-ref-cidrdb)**  | Obtain data associated with the CIDR information pathway | cidr | receiving | any |
| **[redirect](/momentum/3/3-reference/sieve-ref-redirect)**  | Change the envelope recipient | misc | both | data, each_rcpt, rcptto, spool |
| **[reject](/momentum/3/3-reference/sieve-ref-reject)**  | Reject the message, returning an MDN to the sender | bounce | receiving | any |
| **[cidrdb](/momentum/3/3-reference/sieve-ref-cidrdb)**  | Reload the information from the pathway specified by the argument | cidr | receiving | any |
| **[reverse](/momentum/3/3-reference/sieve-ref-reverse)**  | Reverse a string or a stringlist | string | na | any |
| **[reverse_delim](/momentum/3/3-reference/sieve-ref-reverse-delim)**  | Reverse a string based on a delimiter | string | na | any |
| **[smtp_callback_verify](/momentum/3/3-reference/sieve-ref-smtp-callback-verify)**  | Perform SMTP callback on an email address | misc | receiving | mailfrom, rcptto |
| **[snmp_trap](/momentum/3/3-reference/sieve-ref-snmp-trap)**  | Send SNMP traps from a Sieve script | snmp | na | any |
| **[split](/momentum/3/3-reference/sieve-ref-split)**  | Split a string into a stringlist | string | na | any |
| **[stop](/momentum/3/3-reference/sieve-ref-stop)**  | Stop processing the current script | control | na | any |
| **[thread_pool_stats](/momentum/3/3-reference/sieve-ref-thread-pool-stats)**  | Obtain information about thread pools | resource | na | any |
| **[type](/momentum/3/3-reference/sieve-ref-type)**  | Test the type of the value in a Sieve variable | misc | na | any |
| **[vctx_conn_delete](/momentum/3/3-reference/sieve-ref-vctx-conn-delete)**  | Delete a key from the connection context | vctx | both | any |
| **[vctx_conn_get](/momentum/3/3-reference/sieve-ref-vctx-conn-get)**  | Obtain the value of a connection context key | vctx | both | any |
| **[vctx_conn_set](/momentum/3/3-reference/sieve-ref-vctx-conn-set)**  | Set a value in the connection context | vctx | both | any |
| **[vctx_mess_delete](/momentum/3/3-reference/sieve-ref-vctx-mess-delete)**  | Delete a key from the message context | vctx | both | any |
| **[vctx_mess_get](/momentum/3/3-reference/sieve-ref-vctx-mess-get)**  | Obtain the value of a message context key | vctx | both | any |
| **[vctx_mess_set](/momentum/3/3-reference/sieve-ref-vctx-mess-set)**  | Set a value in the message context | vctx | both | any |