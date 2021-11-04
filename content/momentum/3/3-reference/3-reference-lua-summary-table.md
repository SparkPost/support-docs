---
lastUpdated: "03/26/2020"
title: "Lua Functions List"
description: "This section contains tables of Lua functions The first table contains all Lua functions and the following tables show functions by type All tables are sorted alphabetically by function name and give a brief description Click the function name for details The Mobile specific Lua functions are listed here but..."
---

This section contains tables of Lua functions. The first table contains all Lua functions and the following tables show functions by type. All tables are sorted alphabetically by function name and give a brief description. Click the function name for details.

### Note

The Mobile-specific Lua functions are listed here but link to external documents.

<a name="lua_functions-all"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [ac:esmtp_capability_add](/momentum/3/3-reference/3-reference-lua-ref-ac-esmtp-capability-add) – Add a capability to the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:esmtp_capability_remove](/momentum/3/3-reference/3-reference-lua-ref-ac-esmtp-capability-remove) – Removes a capability string from the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:inbound_session_count](/momentum/3/3-reference/3-reference-lua-ref-ac-inbound-session-count) – If called with no arguments, returns the current inbound session count to this listener for the connecting IP | [cidr], [service_type] | msys.extended.ac | 3.1 | any |
| [client:do_request](/momentum/3/3-reference/3-reference-lua-ref-client-do-request) – Perform an HTTP request | type, url, [data] | msys.http.client | 3.5 | any |
| [client:get_body](/momentum/3/3-reference/3-reference-lua-ref-client-get-body) – Get the body of a web page |   | msys.http.client | 3.5 | any |
| [client:get_headers](/momentum/3/3-reference/3-reference-lua-ref-client-get-headers) – Get a client's headers |   | msys.http.client | 3.5 | any |
| [client:get_status](/momentum/3/3-reference/3-reference-lua-ref-client-get-status) – Return the status of an HTTP request |   | msys.http.client | 3.5 | any |
| [client:parse_headers](/momentum/3/3-reference/3-reference-lua-ref-client-parse-headers) – Parse the headers of an HTTP response | headers | msys.http.client | 3.5 | any |
| [client:set_header](/momentum/3/3-reference/3-reference-lua-ref-client-set-header) – Set a client's header | [header] | msys.http.client | 3.5 | any |
| [client:set_timeout](/momentum/3/3-reference/3-reference-lua-ref-client-set-timeout) – Set the timeout for an HTTP client | [number] | msys.http.client | 3.5 | any |
| [json.decode](/momentum/3/3-reference/3-reference-lua-ref-json-decode) – Create a JSON object from a JSON string | str | json | 3.1 | any |
| [json.encode](/momentum/3/3-reference/3-reference-lua-ref-json-encode) – Convert a Lua variable or expression so that it can be added to a JSON object | obj | json | 3.1 | any |
| [json.new](/momentum/3/3-reference/3-reference-lua-ref-json-new) – Create an empty JSON object |   | json | 3.1 | any |
| [json.strerror](/momentum/3/3-reference/3-reference-lua-ref-json-strerror) – Return the description of a JSON error code | code | json | 3.1 | any |
| [msg.batch_id](/momentum/3/3-reference/3-reference-lua-ref-msg-batch-id) – Returns the human-readable ec_message.batch_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.conn_id](/momentum/3/3-reference/3-reference-lua-ref-msg-conn-id) – Returns the human-readable ec_message.conn_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.id](/momentum/3/3-reference/3-reference-lua-ref-msg-id) – Returns the human-readable ec_message.id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:binding](/momentum/3/3-reference/3-reference-lua-ref-msg-binding) – Sets the binding to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:binding_group](/momentum/3/3-reference/3-reference-lua-ref-msg-binding-group) – Sets the binding_group to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:body](/momentum/3/3-reference/3-reference-lua-ref-msg-body) – Set or get the message body (minus headers) | [...] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_match](/momentum/3/3-reference/3-reference-lua-ref-msg-body-match) – Streaming interface to a PCRE search of a message body (minus headers) | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-body-replace) – Streaming interface to a PCRE replacement of a message body (minus headers) | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:build](/momentum/3/3-reference/3-reference-lua-ref-msg-build) – Create a message | headers, parts, attachments | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:code](/momentum/3/3-reference/3-reference-lua-ref-msg-code) – Get or set the message code | [number], [string] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:context_delete](/momentum/3/3-reference/3-reference-lua-ref-msg-context-delete) – Delete a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists) – Check if a context variable exists | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists_and_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists-and-get) – Check if a context variable exists and get it | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get) – Get a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set) – Set a context variable | type, key, value | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:discard](/momentum/3/3-reference/3-reference-lua-ref-msg-discard) – Silently discard a message | [reason] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:forward](/momentum/3/3-reference/3-reference-lua-ref-msg-forward) – Forward current message to recipients other than the original recipients. A new message is created and the original message is attached to it | sender, rcptto, text, [subject], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:get_delivery_method](/momentum/3/3-reference/3-reference-lua-ref-msg-get-delivery-method) – Return the delivery method for a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:get_envelope2](/momentum/3/3-reference/3-reference-lua-ref-msg-get-envelope-2) – Get envelope values | flags, localpart_str, domain_str | msys.extended.message | 3.0.9 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:get_message_size](/momentum/3/3-reference/3-reference-lua-ref-msg-get-message-size) – Get the size of a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:header](/momentum/3/3-reference/3-reference-lua-ref-header) – Manipulate message headers | hdr, [value], [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:inject](/momentum/3/3-reference/3-reference-lua-ref-msg-inject) – Use this function to send mail | mailfrom, rcptto | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:listener_addr](/momentum/3/3-reference/3-reference-lua-ref-msg-listener-addr) – Gets the recv_via IP and/or PORT | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:mailfrom](/momentum/3/3-reference/3-reference-lua-ref-msg-mailfrom) – Sets the 'MAIL FROM' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:makeBoundary](/momentum/3/3-reference/3-reference-lua-ref-msg-make-boundary) – Generates a unique boundary string | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makeContainer](/momentum/3/3-reference/3-reference-lua-ref-msg-make-container) – Creates a new, unlinked, container message part | mimetype, [boundary], [add_terminator] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makePart](/momentum/3/3-reference/3-reference-lua-ref-msg-make-part) – Creates a new, unlinked, singleton (or leaf) message part | mimetype, [body], [encoding] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:mime](/momentum/3/3-reference/3-reference-lua-ref-msg-mime) – Returns the top of the MIME tree for the message, a message part | [readonly] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw](/momentum/3/3-reference/3-reference-lua-ref-msg-raw) – Sets the message content if value is provided | [value] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_match](/momentum/3/3-reference/3-reference-lua-ref-msg-raw-match) – Streaming interface to PCRE search message content | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-raw-replace) – Streaming interface to a PCRE replacement of message content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:rcptto](/momentum/3/3-reference/3-reference-lua-ref-msg-rcptto) – Sets the 'RCPT TO' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:reception_peer](/momentum/3/3-reference/3-reference-lua-ref-msg-reception-peer) – Returns the IP and/or PORT of the remote injection source | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:routing_domain](/momentum/3/3-reference/3-reference-lua-ref-msg-routing-domain) – Returns the routing domain for the message | [...] | msys.extended.message_routing | 3.0 | data_spool_each_rcpt, rcptto |
| [msg:text](/momentum/3/3-reference/3-reference-lua-ref-msg-text) – Returns the transfer decoded text for the body | ... | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text](/momentum/3/3-reference/3-reference-lua-ref-msg-text-1) – The entire message body is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text_match](/momentum/3/3-reference/3-reference-lua-ref-msg-text-match) – Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:text_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-text-replace) – Streaming interface to PCRE replacement of textual content from the message body | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addFirstChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-first-child) – Adds a child as the first child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addLastChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-last-child) – Adds a child as the last child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:address_header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-address-header) – Parse each instance of the named header for RFC2822 addresses | headername, [component] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-body-match) – Streaming interface to PCRE search a message body part (minus headers) | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-body-replace) – Streaming interface to a PCRE replacement of a message body part (minus headers) | pattern, replacement | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:content_type](/momentum/3/3-reference/3-reference-lua-ref-msgpart-content-type) – Returns a table of content type related information |   | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – Returns an array of headers values for the given name | name | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – Unset the header name of the current message part | name, nil | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers | name, value, [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertAfter](/momentum/3/3-reference/3-reference-lua-ref-msgpart-insert-after) – Insert this part into the MIME tree after the given parameter | after | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertBefore](/momentum/3/3-reference/3-reference-lua-ref-msgpart-insert-before) – Insert this part into the MIME tree before the given parameter | before | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-raw-match) – Streaming interface to PCRE search of the current message part | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-raw-replace) – Streaming interface to PCRE replacement of message part content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text) – Returns the transfer decoded text for the message part, in UTF-8 | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text) – The entire message body part is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text-match) – Streaming PCRE search across the transfer-decoded UTF-8 text version of the message body part | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text-replace) – Streaming interface to a PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:unlink](/momentum/3/3-reference/3-reference-lua-ref-msgpart-unlink) – Removes the part (and its children) from the MIME tree |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.adaptive.registerRules](/momentum/3/3-ad/ad-custom-rules) – Register adaptive rules | rules, [type] | msys.adaptive | 3.2 | adaptive |
| [msys.apn.apn_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-apn-apn-status-classifier) – Determine whether the status code indicates a permanent or temporary failure | status | msys.apn | 3.5.5 | apn_response_eval, msg_dispose |
| [msys.asyncOk](/momentum/3/3-reference/3-reference-lua-ref-msys-async-ok) – Returns true if the current execution environment is suitable for suspend/resume operation |   | msys | 3.1 | any |
| [msys.audit.connections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-connections) – Returns the number of connections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.inbound_session_count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-inbound-session-count) – Counts connections currently established from the specified cidr to the specified service | cidr, servicename | msys.audit | 3.1 | any |
| [msys.audit.receptions](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-receptions) – Returns the number of receptions that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.rejections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-rejections) – Returns the number of rejections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit_series.add](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-add) – Adjusts the counter for the current time window of a named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-count) – Returns the total associated with the named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.define](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-define) – Define an audit series | name, type, interval, num_windows, [options] | msys.audit_series | 3.1 | init |
| [msys.audit_series.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-remove-item) – Removes a counter from a named series | name, [key] | msys.audit_series | 3.1 | any |
| [msys.av.engines](/momentum/3/3-reference/3-reference-lua-ref-msys-av-engines) – Returns a list of configured engine names in a table |   | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-av-scan) – This function performs a virus scan | [av_engine_name], [msg], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan_part](/momentum/3/3-reference/3-reference-lua-ref-msys-av-scan-part) – This function takes an optional msg (msys.core:_ec_message), an optional engine name and performs a virus scan on a specific part | msg_part, [av_engine_name], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.base64.decode](/momentum/3/3-reference/3-reference-lua-ref-msys-base-64-decode) – Decode a base64 encoded string | encoded_text, [charset] | msys.base64 | 3.1 | any |
| [msys.base64.encode](/momentum/3/3-reference/3-reference-lua-ref-msys-base-64-encode) – Base64-encode a string | original, [fold], [charset] | msys.base64 | 3.1 | any |
| [msys.bounce.classify](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify) – Create a bounce classification for a message | msg | msys.bounce | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.bounce.classify_smtp_response](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify-smtp-response) – Create a bounce classification from SMTP response text and domain name | response_text, domain | msys.bounce | 3.1 | any |
| [msys.brightmail.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-brightmail-scan) – Use Brightmail to scan messages | msg, accept, vctx | msys.brightmail | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cast](/momentum/3/3-reference/3-reference-lua-ref-msys-cast) – Cast an object to the specified class | object, classnamestring | msys | 3.1 | any |
| [msys.cidr.define](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-define) – Define a named CIDR object | name, options | msys.cidr | 3.1 | init |
| [msys.cidr.query](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-query) – Look up address against the named CIDR | name, [address] | msys.cidr | 3.1 | any |
| [msys.cidr.reload](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-reload) – Refreshes CIDRs of type 'datasource' and 'rbldnsd' | name | msys.cidr | 3.0 | any |
| [msys.cloudmark.analyze](/momentum/3/3-reference/3-reference-lua-ref-msys-cloudmark-analyze) – Analyze a message using Cloudmark | hdr, [msg], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.score](/momentum/3/3-reference/3-reference-lua-ref-msys-cloudmark-score) – Scan messages using Cloudmark | [msg], [accept], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.commtouch.diagnose](/momentum/3/3-reference/3-reference-lua-ref-msys-commtouch-diagnose) – Scan message using Commtouch | [msg], [accept], [vctx] | msys.commtouch | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.config](/momentum/3/3-reference/3-reference-lua-ref-msys-config) – Set or get configuration values | action, parameters | msys | 3.1 | any |
| [msys.core.dns_get_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-dns-get-domain) – Get a domain record | domain | msys.core | 3.1 | any |
| [msys.core.get_now_ts](/momentum/3/3-reference/3-reference-lua-ref-msys-core-get-now-ts) – Get the current time |   | msys.core | 3.1 | any |
| [msys.core.io_wrapper_open](/momentum/3/3-reference/3-reference-lua-ref-msys-core-io-wrapper-open) – Open a handle to a resource | filename, [options], [mode] | msys.core | 3.3 | any |
| [msys.core.mail_queue_delay_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-mail-queue-delay-domain) – Add a domain record to the delayed queue | dr, note | msys.core | 3.1 | any |
| [msys.core.string_new](/momentum/3/3-reference/3-reference-lua-ref-msys-core-string-new) – Create an ec_string data type |   | msys.core | 3.0 | any |
| [msys.counter.add](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-add) – Add to the current value of the specified counter | object_or_path, delta | msys.counter | 3.1 | any |
| [msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc) – Increment a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.open](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-open) – Create a counter object | counter_path, [semantics] | msys.counter | 3.1 | any |
| [msys.counter.read](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-read) – Read the specified counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.reset](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-reset) – Reset a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.unlink](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-unlink) – Unlink a counter | counter_path | msys.counter | 3.1 | any |
| [msys.db.execute](/momentum/3/3-reference/3-reference-lua-ref-msys-db-execute) – Executes a query that is not expected to return data (such as an insert or an update query) | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.fetch_row](/momentum/3/3-reference/3-reference-lua-ref-msys-db-fetch-row) – If successful, return the first row of the query result as a table | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.query](/momentum/3/3-reference/3-reference-lua-ref-msys-db-query) – Query a datasource | cachename, query, [queryparams], [options] | msys.db | 3.0 | any |
| [msys.delivery.ob_get_current_message](/momentum/3/3-reference/3-reference-lua-ref-msys-delivery-ob-get-current-message) – Get the current message from the session context | sess | msys.delivery | 3.5.5 | http_response_eval |
| [msys.dnsLookup](/momentum/3/3-reference/3-reference-lua-ref-msys-dnslookup) – Perform a DNS lookup | name, [recordtype], [options] | msys | 3.0 | any |
| [msys.dumper.Dumper](/momentum/3/3-reference/3-reference-lua-ref-msys-dumper-dumper) – Dump information about an object | res | msys.dumper | 3.0 | any |
| [msys.expandMacro](/momentum/3/3-reference/3-reference-lua-ref-msys-expand-macro) – Expand macros (such as sieve, spf and custom_logger macros) | string | msys | 3.0 | any |
| [msys.expurgate.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-expurgate-scan) – Scan using the Eleven antivirus engine | msg, accept, vctx | msys.expurgate | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.gauge_cache.dec](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-dec) – Decrements the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.define](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-define) – Create a cache that can be used to maintain a set of counters | name, maxelems, ttl, [replicated] | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.get](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-get) – Looks up the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-inc) – Increments the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-remove-item) – Removes the value associated with keystring from the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gcm.gcm_classify_error](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-classify-error) – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.gcm.gcm_get_result_error_code](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-get-result-error-code) – Get the error code from the response results error | error | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.getClassMetaTable](/momentum/3/3-reference/3-reference-lua-ref-msys-get-class-meta-table) – Returns the metatable for the named class | classnamestring | msys | 3.1 | any |
| [msys.http.client.new](/momentum/3/3-reference/3-reference-lua-ref-msys-http-client-new) – Create an HTTP client |   | msys.http.client | 3.5 | any |
| [msys.httpclnt.http_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-httpclnt-http-status-classifier) – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.httpclnt | 3.6 | http_response_eval |
| [msys.idn.to_idn](/momentum/3/3-reference/3-reference-lua-ref-msys-idn) – Attempts to convert the domain to the IDN format | name | msys.idn | 3.6.12 | any |
| [msys.idn.to_utf8](/momentum/3/3-reference/3-reference-lua-ref-msys-idn-utf-8) – Converts an IDN formatted string to unicode | name | msys.idn | 3.6.12 | any |
| [msys.lock](/momentum/3/3-reference/3-reference-lua-ref-msys-lock) – The current running OS level thread obtains a lock on the named mutex | mutexname | msys | 3.1 | any |
| [msys.mstore.load](/momentum/mobile/mobile-reference/mobility-message-retry) – Retrieve a message from Riak data storage | bucket_id, msgid | msys.mstore | 3.3 | SMPP |
| [msys.os.statvfs_read](/momentum/3/3-reference/3-reference-lua-ref-msys-os-statvfs-read) – Request a snapshot of the stream | path | msys.os | 3.2 | any |
| [msys.os.statvfs_subscribe](/momentum/3/3-reference/3-reference-lua-ref-msys-os-statvfs-subscribe) – Provide a "stream" for statvfs updates | path, interval | msys.os | 3.2 | any |
| [msys.parseRFC2822Addresses](/momentum/3/3-reference/3-reference-lua-ref-msys-parse-rfc-2822-addresses) – Parse the address string per the address parsing rules defined in RFC2822 | addressstring, component | msys | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.pcre.match](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-match) – Perform a PCRE regex match operation | str, pattern | msys.pcre | 3.0 | any |
| [msys.pcre.replace](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-replace) – Perform a PCRE replace operation | subject, pattern, replacement | msys.pcre | 3.0 | any |
| [msys.pcre.split](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-split) – Perform a PCRE split operation | subject, pattern | msys.pcre | 3.0 | any |
| [msys.policyeditor.del_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-del-header) *(deprecated)* – Removes a header from the message | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_binding_domain_failure_rate](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-binding-domain-failure-rate) *(deprecated)* – Get the failure rate for a particular domain and binding combination | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.get_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-header) *(deprecated)* – Returns the value of a header field | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mailfrom](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mailfrom) *(deprecated)* – Returns the envelope sender | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_mess_recv_from](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-from) *(deprecated)* – Returns the IP:port combination from which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mess_recv_via](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-via) *(deprecated)* – Returns the IP:port combination on which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_rcptto](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-rcptto) *(deprecated)* – Returns the recipient | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-variable) *(deprecated)* – Return the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.pcre_match](/momentum/3/3-reference/lua-ref-msys-policyeditor-pcre-match) *(deprecated)* – Perform a PCRE regex match operation | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_email](/momentum/3/3-reference/lua-ref-msys-policyeditor-send-email) *(deprecated)* – Sends a simple email message | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_trap](/momentum/3/3-reference/lua-ref-msys-policyeditor-send-trap) *(deprecated)* – Send an SNMP trap | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.set_binding](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding) *(deprecated)* – Assign the message to a named binding | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_binding_group](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding-group) *(deprecated)* – Assign the message to a named binding group | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-variable) *(deprecated)* – Set the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.vctx_conn_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-get) *(deprecated)* – Returns a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_conn_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-set) *(deprecated)* – Set a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-get) *(deprecated)* – Returns a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-set) *(deprecated)* – Sets a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.qp.decode](/momentum/3/3-reference/3-reference-lua-ref-msys-qp-decode) – Decode a quoted-printable message | encoded_txt, [charset] | msys.qp | 3.1 | any |
| [msys.qp.encode](/momentum/3/3-reference/3-reference-lua-ref-msys-qp-encode) – Quoted-printable encode a string | original, [charset] | msys.qp | 3.1 | any |
| [msys.readfile](/momentum/3/3-reference/3-reference-lua-ref-msys-readfile) – Read the entire contents of the specified file or URI | filename_or_uri | msys | 3.1 | any |
| [msys.registerAuth](/momentum/3/3-reference/3-reference-lua-ref-msys-register-auth) – Register an authentication/authorization scheme that can be used for SMTP or control channel authentication | schemename, authtable | msys | 3.1 | init |
| [msys.registerControl](/momentum/3/3-reference/3-reference-lua-ref-msys-register-control) – Register a command with the control channel subsystem | prefix, closure | msys | 3.1 | init |
| [msys.registerModule](/momentum/3/3-reference/3-reference-lua-ref-msys-register-module) – Registers a Lua module with the system | name, functable | msys | 3.0 | any |
| [msys.rfc3464.compute_delivery_status](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status) – Generate RFC3464 compliant delivery status headers | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.compute_delivery_status_string](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status-string) – Generate RFC3464 compliant delivery status headers | response_text | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.create_mdn](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-create-mdn) – Generate an MDN from a message | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.extract_delivery_status](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-extract-delivery-status) – Return a table of parsed email headers | msg | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.send_mdn](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-send-mdn) – Generate and enqueue an MDN | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool) – Run a function in a separate threadpool | pool, closure, [...] | msys | 3.2 | any |
| [msys.runSieveScript](/momentum/3/3-reference/lua-ref-msys-run-sieve-script) – Run the Sieve script in the specified phase | scriptfilename, phase, capabilities | msys | 3.1 | any |
| [msys.shareGet](/momentum/3/3-reference/lua-ref-msys-share-get) *(deprecated)* – Retrieve the value associated with keystring set by an earlier call to msys.shareSet | keystring | msys | 3.1 | any |
| [msys.shareSet](/momentum/3/3-reference/lua-ref-msys-share-set) *(deprecated)* – Associate a value with a keystring in the global share space | keystring, value | msys | 3.1 | any |
| [msys.shareUnset](/momentum/3/3-reference/lua-ref-msys-share-unset) *(deprecated)* – Remove the association with keystring from the global share space | keystring | msys | 3.1 | any |
| [msys.sleep](/momentum/3/3-reference/3-reference-lua-ref-msys-sleep) – When called in the scheduler thread, suspend the current session for the specified duration | duration_in_seconds | msys | 3.1 | any |
| [msys.snmpTrap](/momentum/3/3-reference/3-reference-lua-ref-msys-snmp-trap) – Issue an SNMP trap | traptable | msys | 3.1 | any |
| [msys.symantec_beik.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-symantec-beik-scan) – Scan using BEIK | msg, vctx | msys.symantec_beik | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.threadpool.count](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-count) – Returns the current number of thread pools |   | msys.threadpool | 3.2 | any |
| [msys.threadpool.find](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-find) – Finds a thread pool name from a job class ID or a job class ID from a thread pool name | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.threadpool.stat](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-stat) – Return stats regarding a threadpool | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.timer.after](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-after) – Execute closure after a given length of time | delta, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.at](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-at) – Execute closure at a given time | number, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.every](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-every) – Execute closure every interval | interval, closure, [name] | msys.timer | 3.3 | any |
| [msys.type](/momentum/3/3-reference/3-reference-lua-ref-msys-type) – Return the type name of the supplied parameter | parameter | msys | 3.1 | any |
| [msys.unlock](/momentum/3/3-reference/3-reference-lua-ref-msys-unlock) – Releases a lock obtained via msys.lock | mutexname | msys | 3.1 | any |
| [msys.validate.dk.get_responsible_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-get-responsible-domain) – This function requires module "dk_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dk | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dk.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-sign) – Sign a message using a Domain Key | msg, ctx, options | msys.validate.dk | 3.1 | core_data_validation |
| [msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains) – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns a list of valid signing domains | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_responsible_domain](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-responsible-domain) – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.reflect](/momentum/3/3-reference/lua-ref-msys-validate-dkim-reflect) – Should be used before data_validate phase to instruct system to send an email to "receiver_addrs" regarding the validation result of the current message | msg, ctx, sender_addrs, receiver_addrs, [subj], [note] | msys.validate.dkim | 3.1 | before data_validate |
| [msys.validate.dkim.sign](/momentum/3/3-reference/lua-ref-msys-validate-dkim-sign) – Sign a message using a DKIM signature | msg, vctx, [options] | msys.validate.dkim | 3.1 | core_final_validation |
| [msys.validate.dkim.verify_results_get_count](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-count) – Return a count of DKIM verification results | results | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_results_get_item](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-item) – Return the DKIM signature result at the specified index | results, index_value | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_status_to_string](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-status-to-string) – Return a status string of DKIM verification | status | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_verify_results](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results) – Return the number of DKIM signature results | [vctx] | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_num_sigs](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-num-sigs) – Return the number of DKIM signatures | dkim | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig) – Get a signature from a DKIM object | dkim, [num] | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons) – Fetch the canonicalizers used for a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-domain) – Fetch the signing domain from a DKIM_SIGINFO object | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_errorstr](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-errorstr) – Fetch the error associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_flags](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-flags) – Fetch the flags associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_hdrsigned](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-hdrsigned) – Determine whether a given header was signed | dkim_sig, header_name | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_identity](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-identity) – Fetch the identity associated with a DKIM signature | dkim, dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_keysize](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-keysize) – Fetch the size of the key used to generate a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_selector](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-selector) – Fetch the selector associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_signalg](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-signalg) – Return the signing algorithm as a string | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-sign) – Sign a message using OpenDKIM | msg, vctx, [options] | msys.validate.opendkim | 3.6 | core_final_validation |
| [msys.validate.opendkim.verify](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-verify) – Verify an DKIM signature | m | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [sess:request_add_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-add-header) – Set the header of an HTTP session | header, value, replace | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_delete_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-delete-header) – Delete a header from an HTTP session | header | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize) – Finalize changes to an HTTP request | update | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_set_body](/momentum/3/3-reference/3-reference-lua-ref-sess-request-set-body) – Set the body of an HTTP session | request | msys.httpclnt | 3.6 | http_request_eval |
| [thread.mutex](/momentum/3/3-reference/3-reference-lua-ref-thread-mutex) – Create a new mutex | [type] | thread | 3.2 | any |
| [vctx:add_recipient](/momentum/3/3-reference/3-reference-lua-ref-vctx-add-recipient) – Adds address (which may be a table representing multiple addresses) to the recipient list for the inbound session | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto |
| [vctx:disconnect](/momentum/3/3-reference/3-reference-lua-ref-vctx-disconnect) – Disconnect the current session | [code], [message] | msys.core | 3.1 | any |
| [vctx:get](/momentum/3/3-reference/3-reference-lua-ref-vctx-get) – Get the value of a context variable | type, key | msys.core | 3.5 | any |
| [vctx:recipient_list](/momentum/3/3-reference/3-reference-lua-ref-vctx-recipient-list) – Return or set the current recipient list | [addresses] | msys.extended.vctx | 3.1 |   |
| [vctx:remove_recipient](/momentum/3/3-reference/3-reference-lua-ref-vctx-remove-recipient) – Removes an address (which may be a table representing multiple addresses) from the recipient list | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, mailfrom, rcptto |
| [vctx:set](/momentum/3/3-reference/3-reference-lua-ref-vctx-set) – Set the value of a context variable | type, key, value | msys.core | 3.5 | any |
| [vctx:set_code](/momentum/3/3-reference/3-reference-lua-ref-vctx-set-code) – Sets the inbound disposition and response message | codenum, message | msys.core | 3.1 | any |
| [vctx:tarpit](/momentum/3/3-reference/3-reference-lua-ref-vctx-tarpit) – Issues a time cost on the inbound session, if supported by the listener (currently only SMTP supports this) | interval | msys.extended.vctx | 3.1 | connect |

<a name="lua_functions-accept"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [ac:esmtp_capability_add](/momentum/3/3-reference/3-reference-lua-ref-ac-esmtp-capability-add) – Add a capability to the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:esmtp_capability_remove](/momentum/3/3-reference/3-reference-lua-ref-ac-esmtp-capability-remove) – Removes a capability string from the EHLO response | name | msys.extended.ac | 3.1 | connect, ehlo |
| [ac:inbound_session_count](/momentum/3/3-reference/3-reference-lua-ref-ac-inbound-session-count) – If called with no arguments, returns the current inbound session count to this listener for the connecting IP | [cidr], [service_type] | msys.extended.ac | 3.1 | any |

<a name="lua_functions-adaptive"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.adaptive.registerRules](/momentum/3/3-ad/ad-custom-rules) – Register adaptive rules | rules, [type] | msys.adaptive | 3.2 | adaptive |

<a name="lua_functions-antivirus"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.av.engines](/momentum/3/3-reference/3-reference-lua-ref-msys-av-engines) – Returns a list of configured engine names in a table |   | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-av-scan) – This function performs a virus scan | [av_engine_name], [msg], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.av.scan_part](/momentum/3/3-reference/3-reference-lua-ref-msys-av-scan-part) – This function takes an optional msg (msys.core:_ec_message), an optional engine name and performs a virus scan on a specific part | msg_part, [av_engine_name], [validate_context] | msys.av | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.brightmail.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-brightmail-scan) – Use Brightmail to scan messages | msg, accept, vctx | msys.brightmail | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.analyze](/momentum/3/3-reference/3-reference-lua-ref-msys-cloudmark-analyze) – Analyze a message using Cloudmark | hdr, [msg], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.cloudmark.score](/momentum/3/3-reference/3-reference-lua-ref-msys-cloudmark-score) – Scan messages using Cloudmark | [msg], [accept], [vctx] | msys.cloudmark | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.commtouch.diagnose](/momentum/3/3-reference/3-reference-lua-ref-msys-commtouch-diagnose) – Scan message using Commtouch | [msg], [accept], [vctx] | msys.commtouch | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.expurgate.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-expurgate-scan) – Scan using the Eleven antivirus engine | msg, accept, vctx | msys.expurgate | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.symantec_beik.scan](/momentum/3/3-reference/3-reference-lua-ref-msys-symantec-beik-scan) – Scan using BEIK | msg, vctx | msys.symantec_beik | 3.1 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-apn"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.apn.apn_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-apn-apn-status-classifier) – Determine whether the status code indicates a permanent or temporary failure | status | msys.apn | 3.5.5 | apn_response_eval, msg_dispose |

<a name="lua_functions-bounce"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.bounce.classify](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify) – Create a bounce classification for a message | msg | msys.bounce | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.bounce.classify_smtp_response](/momentum/3/3-reference/3-reference-lua-ref-msys-bounce-classify-smtp-response) – Create a bounce classification from SMTP response text and domain name | response_text, domain | msys.bounce | 3.1 | any |

<a name="lua_functions-counter"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.counter.add](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-add) – Add to the current value of the specified counter | object_or_path, delta | msys.counter | 3.1 | any |
| [msys.counter.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-inc) – Increment a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.open](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-open) – Create a counter object | counter_path, [semantics] | msys.counter | 3.1 | any |
| [msys.counter.read](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-read) – Read the specified counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.reset](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-reset) – Reset a counter | object_or_path | msys.counter | 3.1 | any |
| [msys.counter.unlink](/momentum/3/3-reference/3-reference-lua-ref-msys-counter-unlink) – Unlink a counter | counter_path | msys.counter | 3.1 | any |

<a name="lua_functions-db"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.db.execute](/momentum/3/3-reference/3-reference-lua-ref-msys-db-execute) – Executes a query that is not expected to return data (such as an insert or an update query) | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.fetch_row](/momentum/3/3-reference/3-reference-lua-ref-msys-db-fetch-row) – If successful, return the first row of the query result as a table | cachename, query, [queryparams], [options] | msys.db | 3.1 | any |
| [msys.db.query](/momentum/3/3-reference/3-reference-lua-ref-msys-db-query) – Query a datasource | cachename, query, [queryparams], [options] | msys.db | 3.0 | any |

<a name="lua_functions-dk"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.validate.dk.get_responsible_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-get-responsible-domain) – This function requires module "dk_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dk | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dk.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-dk-sign) – Sign a message using a Domain Key | msg, ctx, options | msys.validate.dk | 3.1 | core_data_validation |

<a name="lua_functions-dkim"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.validate.dkim.get_domains](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-domains) – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns a list of valid signing domains | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_responsible_domain](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-responsible-domain) – This function requires module "dkim_validate". "msg" is a mail message. "ctx" is the validation context. It returns the responsible domain for the current message | msg, ctx | msys.validate.dkim | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.reflect](/momentum/3/3-reference/lua-ref-msys-validate-dkim-reflect) – Should be used before data_validate phase to instruct system to send an email to "receiver_addrs" regarding the validation result of the current message | msg, ctx, sender_addrs, receiver_addrs, [subj], [note] | msys.validate.dkim | 3.1 | before data_validate |
| [msys.validate.dkim.sign](/momentum/3/3-reference/lua-ref-msys-validate-dkim-sign) – Sign a message using a DKIM signature | msg, vctx, [options] | msys.validate.dkim | 3.1 | core_final_validation |
| [msys.validate.dkim.verify_results_get_count](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-count) – Return a count of DKIM verification results | results | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_results_get_item](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-results-get-item) – Return the DKIM signature result at the specified index | results, index_value | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.verify_status_to_string](/momentum/3/3-reference/lua-ref-msys-validate-dkim-verify-status-to-string) – Return a status string of DKIM verification | status | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.dkim.get_verify_results](/momentum/3/3-reference/lua-ref-msys-validate-dkim-get-verify-results) – Return the number of DKIM signature results | [vctx] | msys.validate.dkim | 3.5 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_num_sigs](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-num-sigs) – Return the number of DKIM signatures | dkim | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig) – Get a signature from a DKIM object | dkim, [num] | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_canons](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-canons) – Fetch the canonicalizers used for a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-domain) – Fetch the signing domain from a DKIM_SIGINFO object | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_errorstr](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-errorstr) – Fetch the error associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_flags](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-flags) – Fetch the flags associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_hdrsigned](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-hdrsigned) – Determine whether a given header was signed | dkim_sig, header_name | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_identity](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-identity) – Fetch the identity associated with a DKIM signature | dkim, dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_keysize](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-keysize) – Fetch the size of the key used to generate a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_selector](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-selector) – Fetch the selector associated with a DKIM signature | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.get_sig_signalg](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-get-sig-signalg) – Return the signing algorithm as a string | dkim_sig | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |
| [msys.validate.opendkim.sign](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-sign) – Sign a message using OpenDKIM | msg, vctx, [options] | msys.validate.opendkim | 3.6 | core_final_validation |
| [msys.validate.opendkim.verify](/momentum/3/3-reference/3-reference-lua-ref-msys-validate-opendkim-verify) – Verify an DKIM signature | m | msys.validate.opendkim | 3.6 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-gcm"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.gcm.gcm_classify_error](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-classify-error) – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |
| [msys.gcm.gcm_get_result_error_code](/momentum/3/3-reference/3-reference-lua-ref-msys-gcm-gcm-get-result-error-code) – Get the error code from the response results error | error | msys.gcm | 3.5.5 | gcm_response_eval, http_response_eval, msg_dispose |

<a name="lua_functions-http"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [client:do_request](/momentum/3/3-reference/3-reference-lua-ref-client-do-request) – Perform an HTTP request | type, url, [data] | msys.http.client | 3.5 | any |
| [client:get_body](/momentum/3/3-reference/3-reference-lua-ref-client-get-body) – Get the body of a web page |   | msys.http.client | 3.5 | any |
| [client:get_headers](/momentum/3/3-reference/3-reference-lua-ref-client-get-headers) – Get a client's headers |   | msys.http.client | 3.5 | any |
| [client:get_status](/momentum/3/3-reference/3-reference-lua-ref-client-get-status) – Return the status of an HTTP request |   | msys.http.client | 3.5 | any |
| [client:parse_headers](/momentum/3/3-reference/3-reference-lua-ref-client-parse-headers) – Parse the headers of an HTTP response | headers | msys.http.client | 3.5 | any |
| [client:set_header](/momentum/3/3-reference/3-reference-lua-ref-client-set-header) – Set a client's header | [header] | msys.http.client | 3.5 | any |
| [client:set_timeout](/momentum/3/3-reference/3-reference-lua-ref-client-set-timeout) – Set the timeout for an HTTP client | [number] | msys.http.client | 3.5 | any |
| [msys.http.client.new](/momentum/3/3-reference/3-reference-lua-ref-msys-http-client-new) – Create an HTTP client |   | msys.http.client | 3.5 | any |

<a name="lua_functions-HTTP_client"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.httpclnt.http_status_classifier](/momentum/3/3-reference/3-reference-lua-ref-msys-httpclnt-http-status-classifier) – Determine the delivery status of the "DLV_Response_Status" variable | status | msys.httpclnt | 3.6 | http_response_eval |
| [sess:request_add_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-add-header) – Set the header of an HTTP session | header, value, replace | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_delete_header](/momentum/3/3-reference/3-reference-lua-ref-sess-request-delete-header) – Delete a header from an HTTP session | header | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_finalize](/momentum/3/3-reference/3-reference-lua-ref-sess-request-finalize) – Finalize changes to an HTTP request | update | msys.httpclnt | 3.6 | http_request_eval |
| [sess:request_set_body](/momentum/3/3-reference/3-reference-lua-ref-sess-request-set-body) – Set the body of an HTTP session | request | msys.httpclnt | 3.6 | http_request_eval |

<a name="lua_functions-idn"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.idn.to_idn](/momentum/3/3-reference/3-reference-lua-ref-msys-idn) – Attempts to convert the domain to the IDN format | name | msys.idn | 3.6.12 | any |
| [msys.idn.to_utf8](/momentum/3/3-reference/3-reference-lua-ref-msys-idn-utf-8) – Converts an IDN formatted string to unicode | name | msys.idn | 3.6.12 | any |

<a name="lua_functions-json"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [json.decode](/momentum/3/3-reference/3-reference-lua-ref-json-decode) – Create a JSON object from a JSON string | str | json | 3.1 | any |
| [json.encode](/momentum/3/3-reference/3-reference-lua-ref-json-encode) – Convert a Lua variable or expression so that it can be added to a JSON object | obj | json | 3.1 | any |
| [json.new](/momentum/3/3-reference/3-reference-lua-ref-json-new) – Create an empty JSON object |   | json | 3.1 | any |
| [json.strerror](/momentum/3/3-reference/3-reference-lua-ref-json-strerror) – Return the description of a JSON error code | code | json | 3.1 | any |

<a name="lua_functions-message"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msg.batch_id](/momentum/3/3-reference/3-reference-lua-ref-msg-batch-id) – Returns the human-readable ec_message.batch_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.conn_id](/momentum/3/3-reference/3-reference-lua-ref-msg-conn-id) – Returns the human-readable ec_message.conn_id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg.id](/momentum/3/3-reference/3-reference-lua-ref-msg-id) – Returns the human-readable ec_message.id |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:binding](/momentum/3/3-reference/3-reference-lua-ref-msg-binding) – Sets the binding to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:binding_group](/momentum/3/3-reference/3-reference-lua-ref-msg-binding-group) – Sets the binding_group to the named binding, if one is provided | [value] | msys.extended.message | 3.0 | set_binding |
| [msg:body](/momentum/3/3-reference/3-reference-lua-ref-msg-body) – Set or get the message body (minus headers) | [...] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_match](/momentum/3/3-reference/3-reference-lua-ref-msg-body-match) – Streaming interface to a PCRE search of a message body (minus headers) | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:body_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-body-replace) – Streaming interface to a PCRE replacement of a message body (minus headers) | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:build](/momentum/3/3-reference/3-reference-lua-ref-msg-build) – Create a message | headers, parts, attachments | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:code](/momentum/3/3-reference/3-reference-lua-ref-msg-code) – Get or set the message code | [number], [string] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:context_delete](/momentum/3/3-reference/3-reference-lua-ref-msg-context-delete) – Delete a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists) – Check if a context variable exists | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_exists_and_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-exists-and-get) – Check if a context variable exists and get it | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_get](/momentum/3/3-reference/3-reference-lua-ref-msg-context-get) – Get a context variable | type, key | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:context_set](/momentum/3/3-reference/3-reference-lua-ref-msg-context-set) – Set a context variable | type, key, value | msys.core | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:discard](/momentum/3/3-reference/3-reference-lua-ref-msg-discard) – Silently discard a message | [reason] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:forward](/momentum/3/3-reference/3-reference-lua-ref-msg-forward) – Forward current message to recipients other than the original recipients. A new message is created and the original message is attached to it | sender, rcptto, text, [subject], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:get_delivery_method](/momentum/3/3-reference/3-reference-lua-ref-msg-get-delivery-method) – Return the delivery method for a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:get_envelope2](/momentum/3/3-reference/3-reference-lua-ref-msg-get-envelope-2) – Get envelope values | flags, localpart_str, domain_str | msys.extended.message | 3.0.9 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:get_message_size](/momentum/3/3-reference/3-reference-lua-ref-msg-get-message-size) – Get the size of a message |   | msys.core | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:header](/momentum/3/3-reference/3-reference-lua-ref-header) – Manipulate message headers | hdr, [value], [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:inject](/momentum/3/3-reference/3-reference-lua-ref-msg-inject) – Use this function to send mail | mailfrom, rcptto | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msg:listener_addr](/momentum/3/3-reference/3-reference-lua-ref-msg-listener-addr) – Gets the recv_via IP and/or PORT | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:mailfrom](/momentum/3/3-reference/3-reference-lua-ref-msg-mailfrom) – Sets the 'MAIL FROM' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:makeBoundary](/momentum/3/3-reference/3-reference-lua-ref-msg-make-boundary) – Generates a unique boundary string | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makeContainer](/momentum/3/3-reference/3-reference-lua-ref-msg-make-container) – Creates a new, unlinked, container message part | mimetype, [boundary], [add_terminator] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:makePart](/momentum/3/3-reference/3-reference-lua-ref-msg-make-part) – Creates a new, unlinked, singleton (or leaf) message part | mimetype, [body], [encoding] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:mime](/momentum/3/3-reference/3-reference-lua-ref-msg-mime) – Returns the top of the MIME tree for the message, a message part | [readonly] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw](/momentum/3/3-reference/3-reference-lua-ref-msg-raw) – Sets the message content if value is provided | [value] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_match](/momentum/3/3-reference/3-reference-lua-ref-msg-raw-match) – Streaming interface to PCRE search message content | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:raw_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-raw-replace) – Streaming interface to a PCRE replacement of message content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:rcptto](/momentum/3/3-reference/3-reference-lua-ref-msg-rcptto) – Sets the 'RCPT TO' email address if one is provided. Returns the current/new value | [value] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msg:reception_peer](/momentum/3/3-reference/3-reference-lua-ref-msg-reception-peer) – Returns the IP and/or PORT of the remote injection source | [flag] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:routing_domain](/momentum/3/3-reference/3-reference-lua-ref-msg-routing-domain) – Returns the routing domain for the message | [...] | msys.extended.message_routing | 3.0 | data_spool_each_rcpt, rcptto |
| [msg:text](/momentum/3/3-reference/3-reference-lua-ref-msg-text) – Returns the transfer decoded text for the body | ... | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text](/momentum/3/3-reference/3-reference-lua-ref-msg-text-1) – The entire message body is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msg:text_match](/momentum/3/3-reference/3-reference-lua-ref-msg-text-match) – Streaming PCRE search across the transfer-decoded, UTF-8 text version of the message body | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msg:text_replace](/momentum/3/3-reference/3-reference-lua-ref-msg-text-replace) – Streaming interface to PCRE replacement of textual content from the message body | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.delivery.ob_get_current_message](/momentum/3/3-reference/3-reference-lua-ref-msys-delivery-ob-get-current-message) – Get the current message from the session context | sess | msys.delivery | 3.5.5 | http_response_eval |

<a name="lua_functions-message_part"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msgpart:addFirstChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-first-child) – Adds a child as the first child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:addLastChild](/momentum/3/3-reference/3-reference-lua-ref-msgpart-add-last-child) – Adds a child as the last child on this part | child | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:address_header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-address-header) – Parse each instance of the named header for RFC2822 addresses | headername, [component] | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-body-match) – Streaming interface to PCRE search a message body part (minus headers) | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:body_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-body-replace) – Streaming interface to a PCRE replacement of a message body part (minus headers) | pattern, replacement | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:content_type](/momentum/3/3-reference/3-reference-lua-ref-msgpart-content-type) – Returns a table of content type related information |   | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – Returns an array of headers values for the given name | name | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – Unset the header name of the current message part | name, nil | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:header](/momentum/3/3-reference/3-reference-lua-ref-msgpart-header) – If mode is replace (or unspecified): first deletes all other headers of that name before appending the new value to the message headers | name, value, [mode] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertAfter](/momentum/3/3-reference/3-reference-lua-ref-msgpart-insert-after) – Insert this part into the MIME tree after the given parameter | after | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:insertBefore](/momentum/3/3-reference/3-reference-lua-ref-msgpart-insert-before) – Insert this part into the MIME tree before the given parameter | before | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-raw-match) – Streaming interface to PCRE search of the current message part | pattern | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:raw_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-raw-replace) – Streaming interface to PCRE replacement of message part content | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text) – Returns the transfer decoded text for the message part, in UTF-8 | ... | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text) – The entire message body part is replaced by the supplied text | value, [type], [charset] | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_match](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text-match) – Streaming PCRE search across the transfer-decoded UTF-8 text version of the message body part | pattern | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:text_replace](/momentum/3/3-reference/3-reference-lua-ref-msgpart-text-replace) – Streaming interface to a PCRE replacement of textual content from the message body parts. Only parts that have a 'text' mime type will be included in the search | pattern, replacement | msys.extended.message | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msgpart:unlink](/momentum/3/3-reference/3-reference-lua-ref-msgpart-unlink) – Removes the part (and its children) from the MIME tree |   | msys.extended.message | 3.1 | data, data_spool, data_spool_each_rcpt |

<a name="lua_functions-misc"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.asyncOk](/momentum/3/3-reference/3-reference-lua-ref-msys-async-ok) – Returns true if the current execution environment is suitable for suspend/resume operation |   | msys | 3.1 | any |
| [msys.cast](/momentum/3/3-reference/3-reference-lua-ref-msys-cast) – Cast an object to the specified class | object, classnamestring | msys | 3.1 | any |
| [msys.config](/momentum/3/3-reference/3-reference-lua-ref-msys-config) – Set or get configuration values | action, parameters | msys | 3.1 | any |
| [msys.core.dns_get_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-dns-get-domain) – Get a domain record | domain | msys.core | 3.1 | any |
| [msys.core.mail_queue_delay_domain](/momentum/3/3-reference/3-reference-lua-ref-msys-core-mail-queue-delay-domain) – Add a domain record to the delayed queue | dr, note | msys.core | 3.1 | any |
| [msys.dnsLookup](/momentum/3/3-reference/3-reference-lua-ref-msys-dnslookup) – Perform a DNS lookup | name, [recordtype], [options] | msys | 3.0 | any |
| [msys.dumper.Dumper](/momentum/3/3-reference/3-reference-lua-ref-msys-dumper-dumper) – Dump information about an object | res | msys.dumper | 3.0 | any |
| [msys.expandMacro](/momentum/3/3-reference/3-reference-lua-ref-msys-expand-macro) – Expand macros (such as sieve, spf and custom_logger macros) | string | msys | 3.0 | any |
| [msys.getClassMetaTable](/momentum/3/3-reference/3-reference-lua-ref-msys-get-class-meta-table) – Returns the metatable for the named class | classnamestring | msys | 3.1 | any |
| [msys.parseRFC2822Addresses](/momentum/3/3-reference/3-reference-lua-ref-msys-parse-rfc-2822-addresses) – Parse the address string per the address parsing rules defined in RFC2822 | addressstring, component | msys | 3.0 | data, data_spool, data_spool_each_rcpt |
| [msys.readfile](/momentum/3/3-reference/3-reference-lua-ref-msys-readfile) – Read the entire contents of the specified file or URI | filename_or_uri | msys | 3.1 | any |
| [msys.registerAuth](/momentum/3/3-reference/3-reference-lua-ref-msys-register-auth) – Register an authentication/authorization scheme that can be used for SMTP or control channel authentication | schemename, authtable | msys | 3.1 | init |
| [msys.registerControl](/momentum/3/3-reference/3-reference-lua-ref-msys-register-control) – Register a command with the control channel subsystem | prefix, closure | msys | 3.1 | init |
| [msys.registerModule](/momentum/3/3-reference/3-reference-lua-ref-msys-register-module) – Registers a Lua module with the system | name, functable | msys | 3.0 | any |
| [msys.runSieveScript](/momentum/3/3-reference/lua-ref-msys-run-sieve-script) – Run the Sieve script in the specified phase | scriptfilename, phase, capabilities | msys | 3.1 | any |
| [msys.shareGet](/momentum/3/3-reference/lua-ref-msys-share-get) *(deprecated)* – Retrieve the value associated with keystring set by an earlier call to msys.shareSet | keystring | msys | 3.1 | any |
| [msys.shareSet](/momentum/3/3-reference/lua-ref-msys-share-set) *(deprecated)* – Associate a value with a keystring in the global share space | keystring, value | msys | 3.1 | any |
| [msys.shareUnset](/momentum/3/3-reference/lua-ref-msys-share-unset) *(deprecated)* – Remove the association with keystring from the global share space | keystring | msys | 3.1 | any |
| [msys.snmpTrap](/momentum/3/3-reference/3-reference-lua-ref-msys-snmp-trap) – Issue an SNMP trap | traptable | msys | 3.1 | any |
| [msys.type](/momentum/3/3-reference/3-reference-lua-ref-msys-type) – Return the type name of the supplied parameter | parameter | msys | 3.1 | any |

<a name="lua_functions-mobility"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.mstore.load](/momentum/mobile/mobile-reference/mobility-message-retry) – Retrieve a message from Riak data storage | bucket_id, msgid | msys.mstore | 3.3 | SMPP |

<a name="lua_functions-os"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.os.statvfs_read](/momentum/3/3-reference/3-reference-lua-ref-msys-os-statvfs-read) – Request a snapshot of the stream | path | msys.os | 3.2 | any |
| [msys.os.statvfs_subscribe](/momentum/3/3-reference/3-reference-lua-ref-msys-os-statvfs-subscribe) – Provide a "stream" for statvfs updates | path, interval | msys.os | 3.2 | any |

<a name="lua_functions-policy"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.policyeditor.del_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-del-header) *(deprecated)* – Removes a header from the message | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_binding_domain_failure_rate](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-binding-domain-failure-rate) *(deprecated)* – Get the failure rate for a particular domain and binding combination | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.get_header](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-header) *(deprecated)* – Returns the value of a header field | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mailfrom](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mailfrom) *(deprecated)* – Returns the envelope sender | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_mess_recv_from](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-from) *(deprecated)* – Returns the IP:port combination from which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_mess_recv_via](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-mess-recv-via) *(deprecated)* – Returns the IP:port combination on which the message was received | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, set_binding |
| [msys.policyeditor.get_rcptto](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-rcptto) *(deprecated)* – Returns the recipient | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.get_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-get-variable) *(deprecated)* – Return the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.pcre_match](/momentum/3/3-reference/lua-ref-msys-policyeditor-pcre-match) *(deprecated)* – Perform a PCRE regex match operation | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_email](/momentum/3/3-reference/lua-ref-msys-policyeditor-send-email) *(deprecated)* – Sends a simple email message | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.send_trap](/momentum/3/3-reference/lua-ref-msys-policyeditor-send-trap) *(deprecated)* – Send an SNMP trap | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.set_binding](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding) *(deprecated)* – Assign the message to a named binding | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_binding_group](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-binding-group) *(deprecated)* – Assign the message to a named binding group | ctx, vars, params | msys.policyeditor | 3.0 | set_binding |
| [msys.policyeditor.set_variable](/momentum/3/3-reference/lua-ref-msys-policyeditor-set-variable) *(deprecated)* – Set the value of a script variable | ctx, vars, params | msys.policyeditor | 3.0 | any |
| [msys.policyeditor.vctx_conn_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-get) *(deprecated)* – Returns a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_conn_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-conn-set) *(deprecated)* – Set a connection validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_get](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-get) *(deprecated)* – Returns a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |
| [msys.policyeditor.vctx_mess_set](/momentum/3/3-reference/lua-ref-msys-policyeditor-vctx-mess-set) *(deprecated)* – Sets a message validation context value | ctx, vars, params | msys.policyeditor | 3.0 | data, data_spool, data_spool_each_rcpt, rcptto, set_binding |

<a name="lua_functions-resource"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.core.get_now_ts](/momentum/3/3-reference/3-reference-lua-ref-msys-core-get-now-ts) – Get the current time |   | msys.core | 3.1 | any |
| [msys.core.io_wrapper_open](/momentum/3/3-reference/3-reference-lua-ref-msys-core-io-wrapper-open) – Open a handle to a resource | filename, [options], [mode] | msys.core | 3.3 | any |

<a name="lua_functions-rfc3464"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.rfc3464.compute_delivery_status](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status) – Generate RFC3464 compliant delivery status headers | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.compute_delivery_status_string](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-compute-delivery-status-string) – Generate RFC3464 compliant delivery status headers | response_text | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.create_mdn](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-create-mdn) – Generate an MDN from a message | msg, action | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.extract_delivery_status](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-extract-delivery-status) – Return a table of parsed email headers | msg | msys.rfc3464 | 3.1 | any |
| [msys.rfc3464.send_mdn](/momentum/3/3-reference/3-reference-lua-ref-msys-rfc-3464-send-mdn) – Generate and enqueue an MDN | msg, action | msys.rfc3464 | 3.1 | any |

<a name="lua_functions-shaping"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.audit.connections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-connections) – Returns the number of connections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.inbound_session_count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-inbound-session-count) – Counts connections currently established from the specified cidr to the specified service | cidr, servicename | msys.audit | 3.1 | any |
| [msys.audit.receptions](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-receptions) – Returns the number of receptions that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit.rejections](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-rejections) – Returns the number of rejections that have occurred for a CIDR block within a configured time window | monitor, [options] | msys.audit | 3.1 | any |
| [msys.audit_series.add](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-add) – Adjusts the counter for the current time window of a named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.count](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-count) – Returns the total associated with the named series | name, [options] | msys.audit_series | 3.1 | any |
| [msys.audit_series.define](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-define) – Define an audit series | name, type, interval, num_windows, [options] | msys.audit_series | 3.1 | init |
| [msys.audit_series.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-audit-series-remove-item) – Removes a counter from a named series | name, [key] | msys.audit_series | 3.1 | any |
| [msys.cidr.define](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-define) – Define a named CIDR object | name, options | msys.cidr | 3.1 | init |
| [msys.cidr.query](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-query) – Look up address against the named CIDR | name, [address] | msys.cidr | 3.1 | any |
| [msys.cidr.reload](/momentum/3/3-reference/3-reference-lua-ref-msys-cidr-reload) – Refreshes CIDRs of type 'datasource' and 'rbldnsd' | name | msys.cidr | 3.0 | any |
| [msys.gauge_cache.dec](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-dec) – Decrements the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.define](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-define) – Create a cache that can be used to maintain a set of counters | name, maxelems, ttl, [replicated] | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.get](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-get) – Looks up the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.inc](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-inc) – Increments the value associated with keystring in the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |
| [msys.gauge_cache.remove_item](/momentum/3/3-reference/3-reference-lua-ref-msys-gauge-cache-remove-item) – Removes the value associated with keystring from the named cache | cachename, keystring | msys.gauge_cache | 3.1 | any |

<a name="lua_functions-string"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.base64.decode](/momentum/3/3-reference/3-reference-lua-ref-msys-base-64-decode) – Decode a base64 encoded string | encoded_text, [charset] | msys.base64 | 3.1 | any |
| [msys.base64.encode](/momentum/3/3-reference/3-reference-lua-ref-msys-base-64-encode) – Base64-encode a string | original, [fold], [charset] | msys.base64 | 3.1 | any |
| [msys.core.string_new](/momentum/3/3-reference/3-reference-lua-ref-msys-core-string-new) – Create an ec_string data type |   | msys.core | 3.0 | any |
| [msys.pcre.match](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-match) – Perform a PCRE regex match operation | str, pattern | msys.pcre | 3.0 | any |
| [msys.pcre.replace](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-replace) – Perform a PCRE replace operation | subject, pattern, replacement | msys.pcre | 3.0 | any |
| [msys.pcre.split](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-split) – Perform a PCRE split operation | subject, pattern | msys.pcre | 3.0 | any |
| [msys.qp.decode](/momentum/3/3-reference/3-reference-lua-ref-msys-qp-decode) – Decode a quoted-printable message | encoded_txt, [charset] | msys.qp | 3.1 | any |
| [msys.qp.encode](/momentum/3/3-reference/3-reference-lua-ref-msys-qp-encode) – Quoted-printable encode a string | original, [charset] | msys.qp | 3.1 | any |

<a name="lua_functions-thread"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.lock](/momentum/3/3-reference/3-reference-lua-ref-msys-lock) – The current running OS level thread obtains a lock on the named mutex | mutexname | msys | 3.1 | any |
| [msys.runInPool](/momentum/3/3-reference/3-reference-lua-ref-msys-runinpool) – Run a function in a separate threadpool | pool, closure, [...] | msys | 3.2 | any |
| [msys.sleep](/momentum/3/3-reference/3-reference-lua-ref-msys-sleep) – When called in the scheduler thread, suspend the current session for the specified duration | duration_in_seconds | msys | 3.1 | any |
| [msys.threadpool.count](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-count) – Returns the current number of thread pools |   | msys.threadpool | 3.2 | any |
| [msys.threadpool.find](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-find) – Finds a thread pool name from a job class ID or a job class ID from a thread pool name | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.threadpool.stat](/momentum/3/3-reference/3-reference-lua-ref-msys-threadpool-stat) – Return stats regarding a threadpool | [threadpoolname], [jobclassID] | msys.threadpool | 3.2 | any |
| [msys.unlock](/momentum/3/3-reference/3-reference-lua-ref-msys-unlock) – Releases a lock obtained via msys.lock | mutexname | msys | 3.1 | any |
| [thread.mutex](/momentum/3/3-reference/3-reference-lua-ref-thread-mutex) – Create a new mutex | [type] | thread | 3.2 | any |

<a name="lua_functions-timer"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [msys.timer.after](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-after) – Execute closure after a given length of time | delta, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.at](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-at) – Execute closure at a given time | number, closure, [name] | msys.timer | 3.3 | any |
| [msys.timer.every](/momentum/3/3-reference/3-reference-lua-ref-msys-timer-every) – Execute closure every interval | interval, closure, [name] | msys.timer | 3.3 | any |

<a name="lua_functions-validation"></a> 


| Function/Description | Params | Package | Version | Phases |
| --- | --- | --- | --- | --- |
| [vctx:add_recipient](/momentum/3/3-reference/3-reference-lua-ref-vctx-add-recipient) – Adds address (which may be a table representing multiple addresses) to the recipient list for the inbound session | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, rcptto |
| [vctx:disconnect](/momentum/3/3-reference/3-reference-lua-ref-vctx-disconnect) – Disconnect the current session | [code], [message] | msys.core | 3.1 | any |
| [vctx:get](/momentum/3/3-reference/3-reference-lua-ref-vctx-get) – Get the value of a context variable | type, key | msys.core | 3.5 | any |
| [vctx:recipient_list](/momentum/3/3-reference/3-reference-lua-ref-vctx-recipient-list) – Return or set the current recipient list | [addresses] | msys.extended.vctx | 3.1 |   |
| [vctx:remove_recipient](/momentum/3/3-reference/3-reference-lua-ref-vctx-remove-recipient) – Removes an address (which may be a table representing multiple addresses) from the recipient list | address | msys.extended.vctx | 3.1 | data, data_spool, data_spool_each_rcpt, mailfrom, rcptto |
| [vctx:set](/momentum/3/3-reference/3-reference-lua-ref-vctx-set) – Set the value of a context variable | type, key, value | msys.core | 3.5 | any |
| [vctx:set_code](/momentum/3/3-reference/3-reference-lua-ref-vctx-set-code) – Sets the inbound disposition and response message | codenum, message | msys.core | 3.1 | any |
| [vctx:tarpit](/momentum/3/3-reference/3-reference-lua-ref-vctx-tarpit) – Issues a time cost on the inbound session, if supported by the listener (currently only SMTP supports this) | interval | msys.extended.vctx | 3.1 | connect |