---
lastUpdated: "03/26/2020"
title: "pathway"
description: "pathway a grouping of inbound configuration options Configuration Change This feature is available starting from Momentum 3 0 24 The Pathway scope is used to group inbound configuration options that you wish to apply to a specific ESMTP Listener A Pathway scope may be defined in the global scope or..."
---

<a name="conf.ref.pathway"></a> 
## Name

pathway — a grouping of inbound configuration options

<a name="idp10559888"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.0.24.

The `Pathway` *scope* is used to group inbound configuration options that you wish to apply to a specific ESMTP_Listener. A Pathway scope may be defined in the global scope or within a Pathway_Group scope.

```
Pathway "example1" {
  allow_null_envelope_sender = true
}

Pathway_Group "group1" {

  Pathway "example2" {
    idle_time = 400
  }
}
```

The usual fallback semantics apply to options valid in the Pathway scope. The value that an option assumes, in order of decreasing precedence, is as follows:

1.  Pathway_Group::Pathway

2.  Pathway

3.  Pathway_Group

4.  Global

A Pathway is associated with a specific ESMTP_Listener or a Listen or Peer scope within an ESMTP_Listener by setting the `Pathway` *option* within that scope. For example:

```
Pathway "example1" {
  allow_null_envelope_sender = true
}

ESMTP_Listener {
  Listen ":25" {
    ...
    **Pathway = "example1"** 
  }
}
```

Pathway_groups are used for logical groupings only and cannot be associated with ESMTP_Listeners.

Unlike bindings, Pathways can be set by Sieve actions; since a Pathway is just a message context variable, you can set it in the following way:

`vctx_mess_set "pathway" "example1"`<a name="idp10574560"></a> 
## Scope

The Pathway scope is valid in the global scope and within a Pathway group scope.

The Pathway *option* references a Pathway scope and is valid within an ESMTP_Listener or within a Listen or Peer scope within an ESMTP_Listener.

Options valid within the Pathway scope are listed in the following section.

<a name="pathway-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[alias_schemes](/momentum/3/3-reference/3-reference-conf-ref-alias-schemes)** – Enable named alias expansion schemes |   | domain, global, pathway, pathway_group |
| **[allow_ip_literal](/momentum/3/3-reference/3-reference-conf-ref-allow-ip-literal)** – Allow IP addresses in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_null_envelope_sender](/momentum/3/3-reference/3-reference-conf-ref-allow-null-envelope-sender)** – Allow the null envelope sender in email addresses | true | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[allow_trailing_whitespace_in_commands](/momentum/3/3-reference/3-reference-conf-ref-allow-trailing-whitespace-in-commands)** – Allow trailing white space at the end of an SMTP command | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[always_allow](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – When set to true, authentication is considered to have succeeded, unless always_deny is set | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[always_deny](/momentum/3/3-reference/conf-aaa#conf.control_authen.overriding)** – If set to true, authentication is considered to have failed | false | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[authcrammd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.cram-md5)** – Configure CRAM-MD5 authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authdigestmd5parameters](/momentum/3/3-reference/conf-aaa#conf.inbound-authdigest-md5)** – Configure DIGEST-MD5 authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[authloginparameters](/momentum/3/3-reference/conf-aaa#conf.control_authen.clear.text)** – Configure clear text login authentication |   | control_listener, esmtp_listener, listen, pathway, pathway_group |
| **[authplainparameters](/momentum/3/3-reference/conf-aaa#conf.inbound-auth.plain.text)** – Configure plain text login authentication |   | esmtp_listener, http_listener, listen, pathway, pathway_group, xmpp_listener |
| **[banner_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.banner_hostname)** – Specifies the banner hostname that will be displayed to the remote client upon connecting |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[bounce_domains](/momentum/3/3-reference/3-reference-conf-ref-bounce-domains)** – Configure the list of domains eligible for bounce processing |   | global, pathway, pathway_group |
| **[context](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.context)** – Use to set arbitrary connection context key value pairs |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[default_charset](/momentum/3/3-reference/3-reference-conf-ref-default-charset)** – Control the character set | us-ascii | global, pathway, pathway_group |
| **[disable_chunked](/momentum/mobile/mobile-reference/mobility-mm-7-listener)** – An option used with aggregators who do not support chunked transfer-coding (Mobile Momentum) | false | http_listener, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_recipient_addresses](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-recipient-addresses)** – Configure a domain which will be used to resolve delivery for unqualified addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[domain_for_unqualified_sender_address](/momentum/3/3-reference/3-reference-conf-ref-domain-for-unqualified-sender-address)** – Configure a domain which will be used to substitute for unqualified sender addresses |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[ecstream_idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The number of seconds of inactivity before a client is disconnected (ECStream only) | 300 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[ecstream_max_batch_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf.ecstream_listener)** – The maximum number of ECStream messages to accept before dropping back into the scheduler (ECStream only) | 10000 | ecstream_listener, listen, pathway, pathway_group, peer |
| **[enable_authentication](/momentum/3/3-reference/conf-ecelerity-conf#conf.inbound-mail)** – Whether or not to enable authentication |   | control_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |
| **[generate_bounces_for_multi_recipient_policy_rejections](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces-for-multi-recipient-policy-rejections)** – Generate MDNs after reception for policy rejections | true | global, pathway, pathway_group |
| **[idle_time](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.idle_time)** – The number of seconds of inactivity before a client is disconnected | 0 | esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[inbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-inbound-throttle-messages)** – Rate limit inbound mail |   | global, pathway, pathway_group |
| **[listener_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.listener_sessions)** – Specifies the maximum number of concurrent sessions that can be established to a listener | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[log_requests_to_paniclog](/momentum/3/3-rest/rest-http-listener)** – Whether to log REST injection requests | false | http_listener, listen, pathway, pathway_group, peer |
| **[max_message_size](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_message_size)** – The maximum number of bytes allowed in a single message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_receptions_per_connection](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_receptions_per_connection)** – The maximum number of messages allowed in a single session | 0 | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[max_recipients_per_message](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.max_recipients_per_message)** – The maximum number of recipients allowed in a message | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[max_request_size](/momentum/3/3-rest/rest-http-listener)** – Limit the size of an HTTP request |   | http_listener, listen, pathway, pathway_group, peer |
| **[mcmt_reception](/momentum/mobile/mobile-reference/mm-7-mcmt-reception)** – Configure a listener to accept the Multi-Channel Message Type (Mobile Momentum) | passthru | esmtp_listener, listen, pathway, pathway_group, peer |
| **[open_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.open_relay)** – Whether the MTA is an open relay or not | false | esmtp_listener, listen, pathway, pathway_group, peer |
| **[received_hostname](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.received_hostname)** – The hostname that is placed in the received headers |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_domains](/momentum/3/3-reference/3-reference-conf-ref-relay-domains)** – Configure the list of domains for which Momentum relays mail |   | global, pathway, pathway_group |
| **[relay_for_sending_domains](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.relay_for_sending_domains)** – Domains that may use the MTA as a relay |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts)** – Configure the list of hosts for which Momentum relays mail |   | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[require_ehlo](/momentum/3/3-reference/3-reference-conf-ref-require-ehlo)** – Reject mail from clients that do not say HELO | false | esmtp_listener, global, listen, pathway, pathway_group, peer |
| **[rfc2821_allow_whitespace_in_envelope](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-allow-whitespace-in-envelope)** – Permit trailing white space before the final CRLF | false | global, pathway, pathway_group |
| **[rfc2821_pedantic_address_rules](/momentum/3/3-reference/3-reference-conf-ref-rfc-2821-pedantic-address-rules)** – Allow relaxation of enforcement of the rfc2821 address rules | true | global, pathway, pathway_group |
| **[rfc2822_date_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-date-header)** – Allow relaxation of enforcement of the rfc2822 address rules | ifneeded | global, pathway, pathway_group |
| **[rfc2822_lone_lf_in_body](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-body)** – Allow relaxation of enforcement of the rfc2822 address rules | ignore | global, pathway, pathway_group |
| **[rfc2822_lone_lf_in_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-lone-lf-in-headers)** – Allow relaxation of enforcement of the rfc2822 address rules | pedantic | global, pathway, pathway_group |
| **[rfc2822_max_line_length](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length)** – Allow relaxation of enforcement of the rfc2822 address rules | ignore | global, pathway, pathway_group |
| **[rfc2822_max_line_length_policy](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-max-line-length-policy)** – Determine how non-RFC-compliant line lengths are handled | none | global, pathway, pathway_group |
| **[rfc2822_messageid_header](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-messageid-header)** – Allow relaxation of enforcement of the rfc2822 address rules | ifneeded | global, pathway, pathway_group |
| **[rfc2822_missing_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-missing-headers)** – Allow relaxation of enforcement of the rfc2822 address rules | reject | global, pathway, pathway_group |
| **[rfc2822_trace_headers](/momentum/3/3-reference/3-reference-conf-ref-rfc-2822-trace-headers)** – Allow relaxation of enforcement of the rfc2822 address rules | true | global, pathway, pathway_group |
| **[service_sessions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.service_sessions)** – The maximum number of concurrent sessions that can be established to all listeners | 0 | esmtp_listener, listen, pathway, pathway_group, peer |
| **[smtp_extensions](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.extensions)** – Array of SMTP extensions |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[starttls_injection_policy](/momentum/3/3-reference/conf-ref-starttls-injection-policy)** – Protect against SMTP injections prior to TLS | reject | esmtp_listener, listen, pathway, pathway_group, peer |
| **[static_banner](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.static_banner)** – The banner that is displayed to the remote client |   | esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_allow_renegotiation](/momentum/3/3-reference/conf-ref-tls-allow-renegotiation)** – Whether to enable OpenSSL TLS renegotiation | true | ecstream_listener, esmtp_listener, http_listener, listen, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_client_ca](/momentum/3/3-reference/conf-ref-tls-client-ca)** – Certificate authority for inbound mail |   | ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols)** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_can_relay](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options)** – Verification that peer can relay | false | ecstream_listener, esmtp_listener, listen, pathway, pathway_group, peer |
| **[tls_verified_peer_is_authorized](/momentum/3/3-rest/rest-http-listener)** – Mark requests that use a verified SSL Client certificate as being authorized | false | http_listener, listen, pathway, peer |
| **[tls_verify_mode](/momentum/3/3-reference/conf-ref-tls-verify-mode)** – Determine whether a TLS certificates is required |   | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[use_ssl](/momentum/3/3-reference/ecelerity-conf#ecelerity.conf3.listener.options.use_ssl)** – Whether to use SSL verification | false | ecstream_listener, esmtp_listener, http_listener, listen, pathway, pathway_group, peer |

<a name="idp10761424"></a> 
## See Also

[pathway_group](/momentum/3/3-reference/3-reference-conf-ref-pathway-group)