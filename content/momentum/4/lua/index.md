---
lastUpdated: "10/05/2021"
title: "Category File"
type: "custom"
name: "Lua Functions Reference"
description: "This section details all Lua functions Functions are ordered alphabetically by name Many Lua functions act as wrappers for C code which means that the calling code needs to take steps to ensure safety When calling a C API make sure that all the arguments are valid as an unexpected..."
---


| Name | Description |
| ---- | ----------- | 
| [msys.db.execute](/momentum/4/lua/ref-msys-db-execute) | Execute a query that is not expected to return data |
| [ac:esmtp_capability_add](/momentum/4/lua/ref-ac-esmtp-capability-add) | Add a capability to the EHLO response |
| [ac:esmtp_capability_remove](/momentum/4/lua/ref-ac-esmtp-capability-remove) | Remove a capability string from the EHLO response |
| [ac:inbound_session_count](/momentum/4/lua/ref-ac-inbound-session-count) | Return the current inbound session count to this listener for the connecting IP |
| [msys.cloudmark.analyze](/momentum/4/lua/ref-msys-cloudmark-analyze) | Analyze a message using Cloudmark |
| [msys.cloudmark.add_af_data](/momentum/4/lua/ref-msys-cloudmark-add-af-data) | Pass data for use with the Cloudmark ActiveFilter. |
| [msys.cloudmark.score](/momentum/4/lua/ref-msys-cloudmark-score) | Scan messages using Cloudmark |
| [msys.cloudmark.score_af](/momentum/4/lua/ref-msys-cloudmark-score-af) | Set the Cloudmark ActiveFilter score threshold |
| [msys.cloudmark.set_af_mode_discard](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-discard) | Set the Cloudmark ActiveFilter mode to DISCARD. |
| [msys.cloudmark.set_af_mode_keep](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-keep) | Set the Cloudmark ActiveFilter mode to KEEP. |
| [msys.cloudmark.set_af_mode_movemsg](/momentum/4/lua/ref-msys-cloudmark-set-af-mode-movemsg) | Set the Cloudmark ActiveFilter mode to MOVEMSG. |
| [msys.cloudmark.set_af_msi_address](/momentum/4/lua/ref-msys-cloudmark-set-af-msi-address) | Set the address for the Cloudmark ActiveFilter MSI Messages. |
| [msys.apn.apn_status_classifier](/momentum/4/lua/ref-msys-apn-apn-status-classifier) | Determine whether the delivery status code represents a permanent or temporary failure |
| [client:do_request](/momentum/4/lua/ref-client-do-request) | Perform an HTTP request |
| [client:get_body](/momentum/4/lua/ref-client-get-body) | Get the body of an HTTP response |
| [client:get_headers](/momentum/4/lua/ref-client-get-headers) | Get HTTP headers |
| [client:get_status](/momentum/4/lua/ref-client-get-status) | Return the status of an HTTP request |
| [sess:request_add_header](/momentum/4/lua/ref-sess-request-add-header) | Add a header to an HTTP session |
| [sess:request_delete_header](/momentum/4/lua/ref-sess-request-delete-header) | Delete a header from an HTTP session |
| [sess:request_finalize](/momentum/4/lua/ref-sess-request-finalize) | Finalize changes to an HTTP request |
| [sess:request_set_body](/momentum/4/lua/ref-sess-request-set-body) | Set the body of an HTTP session |
| [msys.httpclnt.http_status_classifier](/momentum/4/lua/ref-msys-httpclnt-http-status-classifier) | Determine the delivery status of the "DLV_Response_Status" variable |
| [msys.http.client.new](/momentum/4/lua/ref-msys-http-client-new) | Create an HTTP client |
| [client:parse_headers](/momentum/4/lua/ref-client-parse-headers) | Parse the headers of an HTTP response |
| [client:set_header](/momentum/4/lua/ref-client-set-header) | Set an HTTP header |
| [client:set_timeout](/momentum/4/lua/ref-client-set-timeout) | Set the timeout for an HTTP client |
| [c:close](/momentum/4/lua/ref-curl-c-close) | Close a curl object |
| [c:perform](/momentum/4/lua/ref-curl-c-perform) | Perform the file transfer |
| [c:setopt](/momentum/4/lua/ref-curl-c-setopt) | Set the option value of a curl object |
| [curl.escape](/momentum/4/lua/ref-curl-escape) | URL encode a string |
| [curl.new](/momentum/4/lua/ref-curl-new) | Create a cURL object |
| [curl.unescape](/momentum/4/lua/ref-curl-unescape) | Unescape URL encoding in strings |
| [msys.core.dns_get_domain](/momentum/4/lua/ref-msys-core-dns-get-domain) | Get a domain record |
| [msys.core.get_now_ts](/momentum/4/lua/ref-msys-core-get-now-ts) | Get the current time |
| [msys.core.mail_queue_delay_domain](/momentum/4/lua/ref-msys-core-mail-queue-delay-domain) | Add a domain record to the delayed queue |
| [msys.core.string_new](/momentum/4/lua/ref-msys-core-string-new) | Create an ec_string |
| [msg:code](/momentum/4/lua/ref-msg-code) | Get or set the message code |
| [msg:get_envelope2](/momentum/4/lua/ref-msg-get-envelope-2) | Get envelope values |
| [msg:header](/momentum/4/lua/ref-header) | Manipulate message headers |
| [msg:listener_addr](/momentum/4/lua/ref-msg-listener-addr) | Get the `recv_via` IP and/or PORT. |
| [msg:reception_peer](/momentum/4/lua/ref-msg-reception-peer) | Get the `recv_from` IP and/or PORT. |
| [msg:context_delete](/momentum/4/lua/ref-msg-context-delete) | Delete a context variable |
| [msg:context_exists](/momentum/4/lua/ref-msg-context-exists) | Check if a context variable exists |
| [msg:context_exists_and_get](/momentum/4/lua/ref-msg-context-exists-and-get) | Check if a context variable exists and get it |
| [msg:context_get](/momentum/4/lua/ref-msg-context-get) | Get a context variable |
| [msg:context_set](/momentum/4/lua/ref-msg-context-set) | Sets a context variable |
| [msgpart:unlink](/momentum/4/lua/ref-msgpart-unlink) | Remove the part (and its children) from the MIME tree |
| [msys.core.io_wrapper_open](/momentum/4/lua/ref-msys-core-io-wrapper-open) | Open a handle to a resource |
| [msys.cast](/momentum/4/lua/ref-msys-cast) | Cast an object to the specified class |
| [msys.config](/momentum/4/lua/ref-msys-config) | Set or get configuration values |
| [msys.dnsLookup](/momentum/4/lua/ref-msys-dnslookup) | Perform a DNS lookup |
| [msys.expandMacro](/momentum/4/lua/ref-msys-expand-macro) | Expand macros (such as sieve, spf and custom_logger macros) |
| [msys.getClassMetaTable](/momentum/4/lua/ref-msys-get-class-meta-table) | Return the metatable for the named class |
| [msys.httpsrv.register](/momentum/4/lua/ref-msys-httpsrv-register) | Register a Lua function as an HTTP endpoint |
| [msys.idn.to_idn](/momentum/4/lua/ref-msys-idn) | Attempts to convert the domain to the IDN format |
| [msys.idn.to_utf8](/momentum/4/lua/ref-msys-idn-utf-8) | Converts an IDN formatted string to unicode |
| [msys.lock](/momentum/4/lua/ref-msys-lock) | The current running OS level thread obtains a lock on the named mutex |
| [msys.parseRFC2822Addresses](/momentum/4/lua/ref-msys-parse-rfc-2822-addresses) | Parse the address string per the address parsing rules defined in RFC2822 |
| [msys.readfile](/momentum/4/lua/ref-msys-readfile) | Read the entire contents of the specified file or URI |
| [msys.registerAuth](/momentum/4/lua/ref-msys-register-auth) | Register an authentication/authorization scheme that can be used for SMTP or control channel authentication |
| [msys.registerControl](/momentum/4/lua/ref-msys-register-control) | Register a command with the control channel subsystem |
| [msys.registerModule](/momentum/4/lua/ref-msys-register-module) | Register a Lua module with the system. |
| [msys.runInInst](/momentum/4/lua/ref-msys-runininst) | Run a function in a specific event loop |
| [msys.runInPool](/momentum/4/lua/ref-msys-runinpool) | Run a function in a separate threadpool |
| [msys.sleep](/momentum/4/lua/ref-msys-sleep) | When called in the scheduler thread, suspend the current session for the specified duration |
| [msys.snmpTrap](/momentum/4/lua/ref-msys-snmp-trap) | Issue an SNMP trap |
| [msys.type](/momentum/4/lua/ref-msys-type) | Return the type name of the supplied parameter |
| [msys.unlock](/momentum/4/lua/ref-msys-unlock) | Release a lock obtained via msys.lock |
| [session:request_url_get](/momentum/4/lua/ref-session-request-url-get) | Get the request URL |
| [session:response_status_set_std](/momentum/4/lua/ref-session-response-status-set-std) | Set the HTTP status for the session response |
| [json.decode](/momentum/4/lua/ref-json-decode) | Create a JSON object from a JSON string |
| [json.encode](/momentum/4/lua/ref-json-encode) | Convert a Lua variable or an expression for use with a JSON object |
| [json.new](/momentum/4/lua/ref-json-new) | Create an empty JSON object |
| [json.strerror](/momentum/4/lua/ref-json-strerror) | Return the description of a JSON error code |
| [msg.batch_id](/momentum/4/lua/ref-msg-batch-id) | Return the human-readable ec_message.batch_id |
| [msg.conn_id](/momentum/4/lua/ref-msg-conn-id) | Return the human-readable ec_message.conn_id |
| [msg.id](/momentum/4/lua/ref-msg-id) | Return the human-readable ec_message.id |
| [msg:address_header](/momentum/4/lua/ref-msg-address-header) | Returns address components as an array |
| [msg:binding](/momentum/4/lua/ref-msg-binding) | Set or get the message binding |
| [msg:binding_group](/momentum/4/lua/ref-msg-binding-group) | Sets the binding_group to the named binding, if one is provided. |
| [msg:body](/momentum/4/lua/ref-msg-body) | Set the message body (minus headers) if provided |
| [msg:body_match](/momentum/4/lua/ref-msg-body-match) | Streaming interface to a PCRE search of a message body (minus headers) |
| [msg:body_replace](/momentum/4/lua/ref-msg-body-replace) | Streaming interface to a PCRE replacement of a message body (minus headers) |
| [msg:build](/momentum/4/lua/ref-msg-build) | Create a message |
| [msg:discard](/momentum/4/lua/ref-msg-discard) | Silently discard a message |
| [msg:forward](/momentum/4/lua/ref-msg-forward) | Forward the current message to recipients other than the original recipients |
| [msg:get_delivery_method](/momentum/4/lua/ref-msg-get-delivery-method) | Return the delivery method for a message |
| [msg:get_message_size](/momentum/4/lua/ref-msg-get-message-size) | Return the size of a message |
| [msg:inject](/momentum/4/lua/ref-msg-inject) | Use this function to send mail |
| [msg:is_mcmt](/momentum/4/lua/ref-msg-is-mcmt) | Determine whether a message is a MCMT message |
| [msg:mailfrom](/momentum/4/lua/ref-msg-mailfrom) | Sets the 'MAIL FROM' email address if one is provided |
| [msg:makeBoundary](/momentum/4/lua/ref-msg-make-boundary) | Generates a unique boundary string |
| [msg:makeContainer](/momentum/4/lua/ref-msg-make-container) | Creates a new, unlinked, container message part |
| [msg:makePart](/momentum/4/lua/ref-msg-make-part) | Creates a new, unlinked, singleton (or leaf) message part |
| [msg:mime](/momentum/4/lua/ref-msg-mime) | Returns the top of the MIME tree for the message, a message part |
| [msg:raw](/momentum/4/lua/ref-msg-raw) | Set or returns the message content and the message length |
| [msg:raw_match](/momentum/4/lua/ref-msg-raw-match) | Streaming interface to a PCRE search of the message content |
| [msg:raw_replace](/momentum/4/lua/ref-msg-raw-replace) | Streaming interface to a PCRE replacement of message content |
| [msg:rcptto](/momentum/4/lua/ref-msg-rcptto) | Sets the 'RCPT TO' email address if one is provided |
| [msg:routing_domain](/momentum/4/lua/ref-msg-routing-domain) | Set or return the routing domain for a message |
| [msg:text](/momentum/4/lua/ref-msg-text) | Return the transfer decoded text for the body |
| [msg:text](/momentum/4/lua/ref-msg-text-1) | Replace the entire message body |
| [msg:text_match](/momentum/4/lua/ref-msg-text-match) | Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body |
| [msg:text_replace](/momentum/4/lua/ref-msg-text-replace) | Streaming interface to a PCRE replacement of textual content from the message body |
| [msgpart:addFirstChild](/momentum/4/lua/ref-msgpart-add-first-child) | Adds a child as the first child on this part |
| [msgpart:addLastChild](/momentum/4/lua/ref-msgpart-add-last-child) | Adds a child as the last child on this part |
| [msgpart:address_header](/momentum/4/lua/ref-msgpart-address-header) | Parse each instance of the named header for RFC2822 addresses |
| [msgpart:body_match](/momentum/4/lua/ref-msgpart-body-match) | Streaming interface to a PCRE search of a message body part (minus headers) |
| [msgpart:body_replace](/momentum/4/lua/ref-msgpart-body-replace) | Streaming interface to a PCRE replacement of a message body part (minus headers) |
| [msgpart:content_type](/momentum/4/lua/ref-msgpart-content-type) | Returns a table of content type related information |
| [msgpart:header](/momentum/4/lua/ref-msgpart-header) | Return an array of header values for the given name |
| [msgpart:header](/momentum/4/lua/ref-msgpart-header-2) | Unset the header name of the current message part |
| [msgpart:header](/momentum/4/lua/ref-msgpart-header-3) | If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers |
| [msgpart:insertAfter](/momentum/4/lua/ref-msgpart-insert-after) | Insert this part into the MIME tree after the given parameter |
| [msgpart:insertBefore](/momentum/4/lua/ref-msgpart-insert-before) | Insert this part into the MIME tree before the given parameter |
| [msgpart:raw_match](/momentum/4/lua/ref-msgpart-raw-match) | Streaming interface to a PCRE search of the current message part |
| [msgpart:raw_replace](/momentum/4/lua/ref-msgpart-raw-replace) | Streaming interface to a PCRE replacement message part content |
| [msgpart:text](/momentum/4/lua/ref-msgpart-text-2) | The entire message body part is replaced by the supplied text |
| [msgpart:text](/momentum/4/lua/ref-msgpart-text) | Returns the transfer decoded text for the message part, in UTF-8 |
| [msgpart:text_match](/momentum/4/lua/ref-msgpart-text-match) | Streaming a PCRE search across the transfer decoded UTF-8 text version of the message body part |
| [msgpart:text_replace](/momentum/4/lua/ref-msgpart-text-replace) | Streaming interface to a PCRE replacement of textual content from the message body parts |
| [msys.asyncOk](/momentum/4/lua/ref-msys-async-ok) | Check if the current execution environment is suitable for suspend/resume operations |
| [msys.audit.connections](/momentum/4/lua/ref-msys-audit-connections) | Return the number of connections that have occurred for a CIDR block within a configured time window |
| [msys.audit.inbound_session_count](/momentum/4/lua/ref-msys-audit-inbound-session-count) | Count connections currently established from the specified cidr to the specified service |
| [msys.audit.receptions](/momentum/4/lua/ref-msys-audit-receptions) | Return the number of receptions that have occurred for a CIDR block within a configured time window |
| [msys.audit.rejections](/momentum/4/lua/ref-msys-audit-rejections) | Return the number of rejections that have occurred for a CIDR block within a configured time window |
| [msys.audit_series.add](/momentum/4/lua/ref-msys-audit-series-add) | Adjust the counter for the current time window of a named series |
| [msys.audit_series.count](/momentum/4/lua/ref-msys-audit-series-count) | Return the total associated with the named series |
| [msys.audit_series.define](/momentum/4/lua/ref-msys-audit-series-define) | Define an audit series |
| [msys.audit_series.remove_item](/momentum/4/lua/ref-msys-audit-series-remove-item) | Remove a counter from a named series |
| [msys.av.engines](/momentum/4/lua/ref-msys-av-engines) | Return a list of configured engine names in a table |
| [msys.av.scan](/momentum/4/lua/ref-msys-av-scan) | Perform a virus scan using the named engine |
| [msys.av.scan_part](/momentum/4/lua/ref-msys-av-scan-part) | Perform a virus scan on a specific message part using the named engine |
| [msys.base64.decode](/momentum/4/lua/ref-msys-base-64-decode) | Decode a base64 encoded string |
| [msys.base64.encode](/momentum/4/lua/ref-msys-base-64-encode) | Base64-encode a string |
| [msys.bounce.classify](/momentum/4/lua/ref-msys-bounce-classify) | Create a bounce classification for a message |
| [msys.bounce.classify_smtp_response](/momentum/4/lua/ref-msys-bounce-classify-smtp-response) | Create a bounce classification from SMTP response text and the domain name |
| [msys.brightmail.scan](/momentum/4/lua/ref-msys-brightmail-scan) | Use Brightmail to scan messages |
| [msys.cidr.define](/momentum/4/lua/ref-msys-cidr-define) | Define a named CIDR object |
| [msys.cidr.query](/momentum/4/lua/ref-msys-cidr-query) | Look up address against the named CIDR |
| [msys.cidr.reload](/momentum/4/lua/ref-msys-cidr-reload) | Refresh CIDRs of type `datasource` and `rbldnsd` |
| [msys.commtouch.diagnose](/momentum/4/lua/ref-msys-commtouch-diagnose) | Scan messages using Commtouch |
| [msys.counter.add](/momentum/4/lua/ref-msys-counter-add) | Add to the current value of the specified counter |
| [msys.counter.inc](/momentum/4/lua/ref-msys-counter-inc) | Increment a counter |
| [msys.counter.open](/momentum/4/lua/ref-msys-counter-open) | Create a counter object |
| [msys.counter.read](/momentum/4/lua/ref-msys-counter-read) | Read the specified counter |
| [msys.counter.reset](/momentum/4/lua/ref-msys-counter-reset) | Reset a counter |
| [msys.counter.unlink](/momentum/4/lua/ref-msys-counter-unlink) | Unlink a counter |
| [msys.db.fetch_row](/momentum/4/lua/ref-msys-db-fetch-row) | If successful, return the first row of the query result as a table |
| [msys.db.query](/momentum/4/lua/ref-msys-db-query) | Query a datasource |
| [msys.delivery.ob_get_current_message](/momentum/4/lua/ref-msys-delivery-ob-get-current-message) | Get the current message from the session context |
| [msys.dumper.Dumper](/momentum/4/lua/ref-msys-dumper-dumper) | Dump information about an object |
| [msys.expurgate.scan](/momentum/4/lua/ref-msys-expurgate-scan) | Scan using the Eleven antivirus engine |
| [msys.gauge_cache.dec](/momentum/4/lua/ref-msys-gauge-cache-dec) | Decrement the value associated with keystring in the named cache |
| [msys.gauge_cache.define](/momentum/4/lua/ref-msys-gauge-cache-define) | Create a cache that can be used to maintain a set of counters |
| [msys.gauge_cache.get](/momentum/4/lua/ref-msys-gauge-cache-get) | Look up the value associated with keystring in the named cache |
| [msys.gauge_cache.inc](/momentum/4/lua/ref-msys-gauge-cache-inc) | Increment the value associated with `keystring` in the named cache |
| [msys.gauge_cache.remove_item](/momentum/4/lua/ref-msys-gauge-cache-remove-item) | Remove the value associated with `keystring` from the named cache |
| [msys.gcm.gcm_classify_error](/momentum/4/lua/ref-msys-gcm-gcm-classify-error) | Determine the delivery status of the "DLV_Response_Status" variable |
| [msys.gcm.gcm_get_result_error_code](/momentum/4/lua/ref-msys-gcm-gcm-get-result-error-code) | Get the error code from the response results error |
| [msys.pcre.match](/momentum/4/lua/ref-msys-pcre-match) | Perform a PCRE regex match operation |
| [msys.pcre.replace](/momentum/4/lua/ref-msys-pcre-replace) | Perform a PCRE replace operation |
| [msys.pcre.split](/momentum/4/lua/ref-msys-pcre-split) | Perform a PCRE split operation |
| [msys.os.statvfs_read](/momentum/4/lua/ref-msys-os-statvfs-read) | Request a snapshot of the stream |
| [msys.os.statvfs_subscribe](/momentum/4/lua/ref-msys-os-statvfs-subscribe) | Provide a "stream" for file system statistics (statvfs) updates |
| [msys.qp.decode](/momentum/4/lua/ref-msys-qp-decode) | Decode a quoted-printable message |
| [msys.qp.encode](/momentum/4/lua/ref-msys-qp-encode) | Quoted-printable encode a string |
| [msys.rfc3464.compute_delivery_status](/momentum/4/lua/ref-msys-rfc-3464-compute-delivery-status) | Generate RFC3464 compliant delivery status headers |
| [msys.rfc3464.compute_delivery_status_string](/momentum/4/lua/ref-msys-rfc-3464-compute-delivery-status-string) | Generate RFC3464 compliant delivery status headers |
| [msys.rfc3464.create_mdn](/momentum/4/lua/ref-msys-rfc-3464-create-mdn) | Generate an MDN from a message |
| [msys.rfc3464.extract_delivery_status](/momentum/4/lua/ref-msys-rfc-3464-extract-delivery-status) | Return a table of parsed email headers |
| [msys.rfc3464.send_mdn](/momentum/4/lua/ref-msys-rfc-3464-send-mdn) | Generate and enqueue an MDN |
| [msys.symantec_beik.scan](/momentum/4/lua/ref-msys-symantec-beik-scan) | Scan using BEIK |
| [msys.threadpool.count](/momentum/4/lua/ref-msys-threadpool-count) | Return the current number of thread pools |
| [msys.threadpool.find](/momentum/4/lua/ref-msys-threadpool-find) | Find a thread pool name from a job class ID or a job class ID from a thread pool name |
| [msys.threadpool.stat](/momentum/4/lua/ref-msys-threadpool-stat) | Return stats regarding a threadpool |
| [msys.timer.after](/momentum/4/lua/ref-msys-timer-after) | execute closure after a given time |
| [msys.timer.at](/momentum/4/lua/ref-msys-timer-at) | execute closure at a given time |
| [msys.timer.every](/momentum/4/lua/ref-msys-timer-every) | execute closure every interval |
| [msys.tls_params.set](/momentum/4/lua/ref-msys-tls-params-set) | Set a tls parameter string on a per connection basis |
| [msys.validate.dk.get_responsible_domain](/momentum/4/lua/ref-msys-validate-dk-get-responsible-domain) | Return the domain responsible for the current message |
| [msys.validate.dk.sign](/momentum/4/lua/ref-msys-validate-dk-sign) | Sign a message using a Domain Key |
| [msys.validate.opendkim.get_num_sigs](/momentum/4/lua/ref-msys-validate-opendkim-get-num-sigs) | Return the number of DKIM signatures |
| [msys.validate.opendkim.get_sig](/momentum/4/lua/ref-msys-validate-opendkim-get-sig) | Get a signature from a DKIM object |
| [msys.validate.opendkim.get_sig_canons](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-canons) | Fetch the canonicalizers used for a signature |
| [msys.validate.opendkim.get_sig_domain](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-domain) | Fetch the signing domain from a DKIM_SIGINFO object |
| [msys.validate.opendkim.get_sig_errorstr](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-errorstr) | Fetch the error associated with a DKIM signature |
| [msys.validate.opendkim.get_sig_flags](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-flags) | Fetch the flags associated with a DKIM signature |
| [msys.validate.opendkim.get_sig_hdrsigned](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-hdrsigned) | Determine whether a given header was signed |
| [msys.validate.opendkim.get_sig_identity](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-identity) | Fetch the identity associated with a DKIM signature |
| [msys.validate.opendkim.get_sig_keysize](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-keysize) | Fetch the size of the key used to generate a signature |
| [msys.validate.opendkim.get_sig_selector](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-selector) | Fetch the selector associated with a DKIM signature |
| [msys.validate.opendkim.get_sig_signalg](/momentum/4/lua/ref-msys-validate-opendkim-get-sig-signalg) | Return the signing algorithm as a string |
| [msys.validate.opendkim.sign](/momentum/4/lua/ref-msys-validate-opendkim-sign) | Sign a message using OpenDKIM |
| [msys.validate.opendkim.verify](/momentum/4/lua/ref-msys-validate-opendkim-verify) | Verify a DKIM signature |
| [thread.mutex](/momentum/4/lua/ref-thread-mutex) | create a new mutex |
| [vctx:add_recipient](/momentum/4/lua/ref-vctx-add-recipient) | Add an address to the recipient list for the inbound session |
| [vctx:disconnect](/momentum/4/lua/ref-vctx-disconnect) | Disconnect the session associated with the current validation context |
| [vctx:get](/momentum/4/lua/ref-vctx-get) | Get the value of a context variable |
| [vctx:recipient_list](/momentum/4/lua/ref-vctx-recipient-list) | Return or set the current recipient list |
| [vctx:remove_recipient](/momentum/4/lua/ref-vctx-remove-recipient) | Remove an address from the recipient list |
| [vctx:set](/momentum/4/lua/ref-vctx-set) | Set the value of a context variable |
| [vctx:set_code](/momentum/4/lua/ref-vctx-set-code) | Set the inbound disposition and response message |
| [vctx:tarpit](/momentum/4/lua/ref-vctx-tarpit) | Issue a time cost on the inbound session |
| [doc:root](/momentum/4/lua/ref-xml-doc-root) | Return the root node of an XML document |
| [doc:tostring](/momentum/4/lua/ref-xml-doc-tostring) | Output a DOM document as a string |
| [doc:xpath](/momentum/4/lua/ref-xml-doc-xpath) | Perform an XPath query |
| [node:addchild](/momentum/4/lua/ref-xml-node-addchild) | Add a child node |
| [node:attribute](/momentum/4/lua/ref-xml-node-attribute) | Set or get the attribute of a node |
| [node:children](/momentum/4/lua/ref-xml-node-children) | Return an iterator of all child nodes |
| [node:contents](/momentum/4/lua/ref-xml-node-contents) | Get or set a text node |
| [node:doc](/momentum/4/lua/ref-xml-node-doc) | Return the document object that contains the specified node |
| [node:name](/momentum/4/lua/ref-xml-node-name) | Return the name of a node |
| [node:tostring](/momentum/4/lua/ref-xml-node-tostring) | Output a node as a string |
| [node:unlink](/momentum/4/lua/ref-xml-node-unlink) | Unlink an XML node from its DOM container |
| [xml.parsexml](/momentum/4/lua/ref-xml-parsexml) | Create an XML document object |


This section details all Lua functions. Functions are ordered alphabetically by name.

### Warning

Many Lua functions act as wrappers for C code which means that the calling code needs to take steps to ensure safety. When calling a C API, make sure that all the arguments are valid as an unexpected `nil` may crash the system or have other undesirable results. Additionally, the data structures returned from C APIs are often shared between C and Lua. The most important consequence of this is that arrays coming from C APIs must only be accessed with existing indices, as opposed to Lua which simply returns `nil` on out-of-bounds access. Failure to do this on a Lua table connected to a C array will cause the system to fail.
