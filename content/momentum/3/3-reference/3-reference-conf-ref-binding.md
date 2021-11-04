---
lastUpdated: "03/26/2020"
title: "binding"
description: "binding configure binding specific options Use the binding stanza to define per binding configuration options You can nest domain and host stanzas inside binding stanzas to create per binding per domain or per binding per host configurations Apart from the domain and host options the following options are commonly specified..."
---

<a name="conf.ref.binding"></a> 
## Name

binding — configure binding specific options

<a name="idp103072"></a> 
## Description

```
binding "example" {
  # binding-specific settings
}
```

Use the `binding` stanza to define per-binding configuration options. You can nest `domain` and `host` stanzas inside `binding` stanzas to create per-binding per-domain, or per-binding per-host configurations.

Apart from the `domain` and `host` options, the following options are commonly specified in a `binding` stanza:

*   [bind_address](/momentum/3/3-reference/3-reference-conf-ref-bind-address)

*   [connect_timeout](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout)

*   [ehlo_hostname](/momentum/3/3-reference/3-reference-conf-ref-ehlo-hostname)

*   [generate_bounces](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces)

*   [message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration)

See [Table 9.26, “binding options”](/momentum/3/3-reference/3-reference-conf-ref-binding#binding-options-table) to determine whether an option is valid in the binding scope. An example of a binding stanza follows.

<a name="example.binding"></a> 


```
binding "my_binding" {
  bind_address = "208.77.188.166"
  generate_bounces = true
  ehlo_hostname = "my_name.com"
}
```

### Warning

Binding names are case-sensitive. Spaces and colons are not allowed in binding names.

<a name="conf.ref.binding.default"></a> 
## The "default" Binding

The `default` binding is a special case of a binding scope. This binding exists without being explicitly defined. You can confirm its existence by issuing the ec_console command [binding summary](/momentum/3/3-reference/3-reference-console-commands-binding-summary). Along with any other bindings that you have defined, you should also see `Summary Statistics For Binding default`.

However, if you wish, you can explicitly create the default binding scope and set options in that scope. Do this in the following way:

```
binding "default" {
  ehlo_hostname = "example.com"
}
```

Defining and using the "default" binding is required any time you want to change the behavior for any message that isn't assigned to some other binding. Do this in your configuration file as indicated above or set it at runtime using Lua (or Sieve). Setting the default binding from a script is done in exactly the same way as setting any other binding. For an example of setting a binding see [msg:binding](/momentum/3/3-reference/3-reference-lua-ref-msg-binding).

Even if you **never** assign messages to bindings the "default" binding can still be used to alter default behavior. This is done by setting the values of options in the default binding scope.

More importantly, if you do assign messages to bindings, ensure that *all* messages are assigned to bindings, or make sure that the fallback binding (otherwise known as "default") does what you want. Good scripting practice ensures that there is always an `else` clause or some other way of ensuring that all messages are always dealt with in some way. For example, you could create a variable at the top of your script with the most general binding, then `if` blocks to assign a message to a more specific binding if it matches. At the end of the script, assuming no `if` condition applies, the `else` clause would assign the message to the most general binding.

In a cluster configuration, if you wish to set an option to different values within the default binding scope you can do this by explicitly defining the default binding in the node-specific configuration file and then defining options within that scope. You can create a node-specific configuration file using the web UI or by manually creating it as described in [“Best Practices for Adding Configuration Files”](/momentum/3/3-reference/conf-adding-configuration-files).

<a name="conf.ref.binding.removal"></a> 
## Removing a Binding

When you are removing a binding that is in use take the following steps:

1.  Examine the binding assignment to determine if there are any policy settings associated with the binding.

2.  If there are none, then suspend the binding and apply the configuration changes. For information about suspending a binding see [suspend_delivery](/momentum/3/3-reference/3-reference-conf-ref-suspend-delivery).

3.  Examine the mail queue. If there is mail for the suspended binding, reassign it to another binding. If the queued messages are not reassigned to another binding, they will go to the default binding. For more information see [showqueue](/momentum/3/3-reference/3-reference-console-commands-showqueue) and [reroute queue](/momentum/3/3-reference/3-reference-console-commands-reroute-queue).

4.  Once all of reassigned messages are out of the queue, restart ecelerity to fully remove the binding from the configuration.

<a name="idp7574096"></a> 
## Scope and Valid Options

`binding` is valid in the global scope and in the binding_group scope.

<a name="idp7576176"></a> 
## Options Valid in the Binding Scope

The options valid in the binding scope are as follows:

<a name="binding-options-table"></a> 


| Option/Description | Default | Scopes |
| --- | --- | --- |
| **[adaptive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_adjustment_interval)** – Throttle the adaptive adjustment interval | 60 | binding, binding_group, domain, global |
| **[adaptive_alert_email_destination](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_destination)** – The address where adaptive alerts should be sent |   | binding, binding_group, domain, global |
| **[adaptive_alert_email_sender](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_alert_email_sender)** – Set the sender address of the alert email | NULL | binding, binding_group, domain, global |
| **[adaptive_attempt_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_attempt_threshold)** – The minimum delivery attempts over a period during which bounce stats are collected and suspensions attempted | 2000 | binding, binding_group, domain, global |
| **[adaptive_body_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_default_suspension](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension)** – The amount of time to suspend a domain | 4 hours | binding, binding_group, domain, global |
| **[adaptive_default_suspension_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_default_suspension_enabled)** – Enables and disables adaptive_rejection_rate_suspension_percentage | false | binding, binding_group, domain, global |
| **[adaptive_ehlo_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_enabled](/momentum/3/3-reference/3-reference-conf-ref-adaptive-enabled)** – Whether to enable the adaptive module for a specific scope | false | binding, binding_group, domain, global |
| **[adaptive_fbl_volume_threshold](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_fbl_volume_threshold)** – The minimum total delivered mail count over a period during which FBL stats are collected | 20000 | binding, binding_group, domain, global |
| **[adaptive_idle_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_mailfrom_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_deliveries_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_outbound_connections](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_batch](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_recipients_per_connection](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_resident_active_queue](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retries](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_max_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_notification_events](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_events)** – Configure the events that will trigger an email notification | throttle suspension blackhole | binding, binding_group, domain, global |
| **[adaptive_notification_events](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_events)** – Configure the events that will trigger an email notification | throttle suspension blackhole | binding, binding_group, domain, global |
| **[adaptive_notification_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_notification_interval)** – The throttle for adaptive alert notification emails | 3600 | binding, binding_group, domain, global |
| **[adaptive_outbound_throttle_messages](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_positive_adjustment_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_positive_adjustment_interval)** – Throttle positive adjustments to adaptive changes | 3600 | binding, binding_group, domain, global |
| **[adaptive_rcptto_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rejection_rate_suspension_percentage](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_rejection_rate_suspension_percentage)** – The rate at which messages are rejected | 20 | binding, binding_group, domain, global |
| **[adaptive_retry_fuzz](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_retry_fuzz)** – Allow greater control over bulk message retries in cases where all messages for a domain have to be retried | 4096 | binding, binding_group, domain, global |
| **[adaptive_retry_interval](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_rset_timeout](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.options)** – Set the bounds for the adaptive option |   | binding, binding_group, domain, global |
| **[adaptive_scope](/momentum/3/3-reference/3-reference-conf-ref-adaptive-scope)** – Define the scope applicable to adaptive delivery | auto | binding, binding_group, domain, global |
| **[adaptive_sweep_rule](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule)** *(scope)* – Set the thresholds and actions for adaptive fbl and bounce rules |   | binding, binding_group, domain, global |
| **[adaptive_sweep_rule_enabled](/momentum/3/3-reference/3-reference-modules-adaptive#modules.adaptive.adaptive_sweep_rule_enabled)** – Enable or disable adaptive_sweep_rule in a specified scope | 1 | binding, binding_group, domain, global |
| **[apn_expiry](/momentum/3/3-push/apns-apn-expiry)** – Define the number of seconds after which an APNs notification is no longer valid | yes | binding, binding_group, domain, global |
| **[bind_address](/momentum/3/3-reference/3-reference-conf-ref-bind-address)** – Source address for outbound connections |   | binding, binding_group, global |
| **[blackhole](/momentum/3/3-reference/3-reference-conf-ref-blackhole)** – Blackhole mail | false | binding, binding_group, domain, global |
| **[body_timeout](/momentum/3/3-reference/3-reference-conf-ref-body-timeout)** – Network timeout once the DATA phase is complete | 600 | binding, binding_group, domain, global |
| **[bounces_inline_original](/momentum/3/3-reference/3-reference-conf-ref-bounces-inline-original)** – How much of the original message to include in MDNs | headers | binding, binding_group, domain, global |
| **[cluster_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-max-outbound-connections)** – Set the maximum number of outbound connections for a domain | -1 | binding, domain, global, host |
| **[cluster_scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-scope-max-outbound-connections)** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global, host |
| **[cluster_server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-cluster-server-max-outbound-connections)** – Set the maximum number of outbound connections |   | binding, binding_group, global |
| **[connect_timeout](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout)** – Set the connection timeout | 300 | binding, binding_group, domain, global |
| **[connect_timeout_to_delay](/momentum/3/3-reference/3-reference-conf-ref-connect-timeout-to-delay)** – Time interval before moving mail into the delayed queue | 900 | binding, binding_group, domain, global |
| **[connection_allocation_aggressiveness](/momentum/3/3-reference/3-reference-conf-ref-connection-allocation-aggressiveness)** – Tune the aggressiveness for establishing new connections to domains | normal | binding, binding_group, domain, global |
| **[delay_dsn_max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-max-retry-interval)** – Maximum interval for sending DSNs to the sender of a message that has not yet been delivered | 43200 | binding, binding_group, domain, global |
| **[delay_dsn_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-delay-dsn-retry-interval)** – Base interval for sending DSNs to the sender of a message that has not yet been delivered | 3600 | binding, binding_group, domain, global |
| **[delayed_binding_domain_fuzz](/momentum/3/3-reference/3-reference-conf-ref-delayed-binding-domain-fuzz)** – The time period to spread scheduled messages over when a bulk requeue is necessary | 0 | binding, binding_group, global |
| **[delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method)** – Set the delivery method | ESMTP, SMTP | binding, binding_group, domain, global |
| **[delivery_response_timeout](/momentum/3/3-reference/3-reference-conf-ref-delivery-response-timeout)** – Time to wait for a response to an outbound request | 5000 | binding, domain, global |
| **[dkim](/momentum/3/3-reference/conf-ref-dkim)** – Enable or disable signing messages |   | binding, binding_group, domain, global |
| **[domain](/momentum/3/3-reference/3-reference-conf-ref-domain)** *(scope)* – Configure domain-specific options |   | binding, binding_group, global |
| **[domainkeys](/momentum/3/3-reference/3-reference-conf-ref-domainkeys)** – Enable or disable domainkeys signing |   | binding, binding_group, domain, global |
| **[drop_body_after_trans_fail](/momentum/3/3-reference/3-reference-conf-ref-drop-body-after-trans-fail)** – Number of retry attempts before freeing message memory | 3 | binding, binding_group, domain, global |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)** – Specify a DuraVIP™ preference |   | binding, listen |
| **[ecstream_port](/momentum/3/3-reference/3-reference-conf-ref-ecstream-port)** – Configure the port for ecstream deliveries | 1825 | binding, binding_group, domain, global |
| **[ecstream_timeout](/momentum/3/3-reference/3-reference-conf-ref-ecstream-timeout)** – The amount of time to wait for an ecstream connection to be established | 600 | binding, binding_group, domain, global |
| **[ehlo_hostname](/momentum/3/3-reference/3-reference-conf-ref-ehlo-hostname)** – Set the hostname used for EHLO in outbound mail | __hostname__ | binding, binding_group, domain, global |
| **[ehlo_timeout](/momentum/3/3-reference/3-reference-conf-ref-ehlo-timeout)** – Network timeout for EHLO | 300 | binding, binding_group, domain, global |
| **[“DuraVIP™: IP Fail over”](/momentum/3/3-reference/3-reference-cluster-config-duravip)** – Whether to enable Durable MultiVIP© bindings |   | binding, listen |
| **[enable_fbl_header_insertion](/momentum/3/3-reference/3-reference-conf-ref-enable-fbl-header-insertion)** – Enable or disable fbl header insertion |   | binding, binding_group, domain, global |
| **[exclude_vctx](/momentum/3/3-reference/conf-ref-exclude-vctx)** – Exclude validation connection context keys from being journaled in the spool metadata |   | binding, binding_group, domain, global |
| **[exclude_vctx](/momentum/3/3-reference/conf-ref-exclude-vctx)** – Exclude validation message context keys from being journaled in the spool metadata |   | binding, binding_group, domain, global |
| **[fully_resolve_before_smtp](/momentum/3/3-reference/3-reference-conf-ref-fully-resolve-before-smtp)** – Resolve all MX and A records before attempting delivery | true | binding, binding_group, domain, global |
| **[gateway](/momentum/3/3-reference/3-reference-conf-ref-gateway)** – Configure a static SMTP route for mail |   | binding, binding_group, domain, global |
| **[gcm_application_id](/momentum/3/3-push/push-gcm-gcm-application-id)** – Define the package name of the Android application allowed to received notifications |   | binding, binding_group, domain, global |
| **[gcm_authorization_token_id](/momentum/3/3-push/push-gcm-gcm-authorization-token-id)** – The authorization token that permits sending Google push notifications |   | binding, binding_group, domain, global |
| **[gcm_delay_while_idle](/momentum/3/3-push/push-gcm-gcm-delay-while-idle)** – Whether or not to send the notification immediately if a device is idle | false | binding, binding_group, domain, global |
| **[gcm_dry_run](/momentum/3/3-push/push-gcm-gcm-dry-run)** – Test a request without actually sending a message | false | binding, binding_group, domain, global |
| **[gcm_ttl](/momentum/3/3-push/push-gcm-ttl)** – Default Time To Live for notifications | -1 | binding, binding_group, domain, global |
| **[generate_bounces](/momentum/3/3-reference/3-reference-conf-ref-generate-bounces)** – Generate MDNs if mail is failed after reception | true | binding, binding_group, domain, global |
| **[generate_delay_dsn](/momentum/3/3-reference/3-reference-conf-ref-generate-delay-dsn)** – Generate DSNs if mail is delayed | false | binding, binding_group, domain, global |
| **[host](/momentum/3/3-reference/3-reference-conf-ref-host)** *(scope)* – Configure host-specific options |   | binding, binding_group, global |
| **[http_basic_auth](/momentum/3/3-reference/3-reference-conf-ref-http-basic-auth)** – Define the user credentials when using basic HTTP authentication |   | binding, binding_group, domain, global |
| **[http_host](/momentum/3/3-reference/3-reference-conf-ref-http-host)** – Define the HTTP host |   | binding, binding_group, domain, global |
| **[http_method](/momentum/3/3-reference/3-reference-conf-ref-http-method)** – Define the HTTP method to use | POST | binding, binding_group, domain, global |
| **[http_uri](/momentum/3/3-reference/3-reference-conf-ref-http-uri)** – Define the HTTP URI that you wish to connect to |   | binding, binding_group, domain, global |
| **[http_version](/momentum/3/3-reference/3-reference-conf-ref-http-version)** – Define the HTTP version to use | 1.1 | binding, binding_group, domain, global |
| **[idle_timeout](/momentum/3/3-reference/3-reference-conf-ref-idle-timeout)** – Time to maintain idle outbound connections | 5 | binding, binding_group, domain, global |
| **[lmtp_port](/momentum/3/3-reference/3-reference-conf-ref-lmtp-port)** – Configure the port for LMTP deliveries | 2003 | binding, binding_group, domain, global |
| **[mailerdaemon](/momentum/3/3-reference/3-reference-conf-ref-mailerdaemon)** – Set the From: address for MDNs |   | binding, binding_group, domain, global |
| **[mailfrom_timeout](/momentum/3/3-reference/3-reference-conf-ref-mailfrom-timeout)** – Timeout after MAIL FROM | 300 | binding, binding_group, domain, global |
| **[max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection)** – Maximum number of messages to deliver before closing a connection | 0 | binding, binding_group, domain, global |
| **[max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections)** – Set the maximum number of outbound connections | 32 | binding, binding_group, domain, global, host |
| **[max_recipients_per_batch](/momentum/3/3-reference/3-reference-conf-ref-max-recipients-per-batch)** – The maximum number of recipients to send in a single outbound message transaction | 100 | binding, binding_group, domain, global |
| **[max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection)** – The maximum number of recipients to send on a connection | 0 | binding, binding_group, domain, esmtp_listener, global, listen, peer |
| **[max_resident_active_queue](/momentum/3/3-reference/3-reference-conf-ref-max-resident-active-queue)** – Threshold above which messages are not held in memory | 250 | binding, binding_group, domain, global |
| **[max_resident_messages](/momentum/3/3-reference/3-reference-conf-ref-max-resident-messages)** – Threshold above which messages are not held in memory | 32768 | binding, binding_group, global |
| **[max_retries](/momentum/3/3-reference/3-reference-conf-ref-max-retries)** – Override the system configured max_retries |   | binding, binding_group, domain, global |
| **[max_retry_interval](/momentum/3/3-reference/3-reference-conf-ref-max-retry-interval)** – Maximum retry interval | 43200 | binding, binding_group, domain, global |
| **[mdn_failures_notify](/momentum/3/3-reference/3-reference-conf-ref-mdn-failures-notify)** – Mailbox to which to send null recipient MDNs |   | binding, binding_group, domain, global |
| **[message_expiration](/momentum/3/3-reference/3-reference-conf-ref-message-expiration)** – Time to live for messages | 86400 | binding, binding_group, domain, global |
| **[never_attempt_expired_messages](/momentum/3/3-reference/3-reference-conf-ref-never-attempt-expired-messages)** – Never attempt delivery of expired messages | false | binding, binding_group, domain, global |
| **[never_retry](/momentum/3/3-reference/3-reference-conf-ref-never-retry)** – Whether or not to retry delivery of failed messages | false | binding, binding_group, domain, global |
| **[opendkim_sign](/momentum/3/3-reference/3-reference-conf-ref-opendkim-sign)** – Whether or not to enable OpenDKIM signing | true | binding, binding_group, domain, global |
| **[outbound_throttle_connections](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-connections)** – Limit the rate at which connections are established |   | binding, binding_group, domain, global |
| **[outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-messages)** – Limit the rate at which messages are delivered |   | binding, binding_group, domain, global |
| **[rcptto_timeout](/momentum/3/3-reference/3-reference-conf-ref-rcptto-timeout)** – Timeout after RCPT TO | 300 | binding, binding_group, domain, global |
| **[remote_smtp_port](/momentum/3/3-reference/3-reference-conf-ref-remote-smtp-port)** – Set the port to be used for SMTP deliveries | 25 | binding, binding_group, domain, global |
| **[response_transcode_pattern](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-pattern)** – The regex pattern for comparison to a server response |   | binding, binding_group, domain, global |
| **[response_transcode_replace](/momentum/3/3-reference/3-reference-conf-ref-response-transcode-replace)** – The replacement string for a server response |   | binding, binding_group, domain, global |
| **[retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval)** – Base retry interval | 1200 | binding, binding_group, domain, global |
| **[rset_timeout](/momentum/3/3-reference/3-reference-conf-ref-rset-timeout)** – Set the timeout after RSET | 30 | binding, binding_group, domain, global |
| **[scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-scope-max-outbound-connections)** – Provide traffic shaping for outbound connections |   | binding, binding_group, domain, global |
| **[send_8bitmime](/momentum/3/3-reference/3-reference-conf-ref-send-8-bitmime)** – Enable advertising of 8BITMIME when sending mail | no | binding, binding_group, domain, global |
| **[server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-max-outbound-connections)** – Sets the maximum number of outbound connections | 20000 | binding, binding_group, global |
| **[suspend_delivery](/momentum/3/3-reference/3-reference-conf-ref-suspend-delivery)** – Prevent outbound mail delivery | false | binding, binding_group, domain, global |
| **[tls](/momentum/3/3-reference/conf-ref-tls)** – Determine whether to use a TLS connection for outbound mail | no | binding, binding_group, domain, global |
| **[tls_ca](/momentum/3/3-reference/conf-ref-tls-ca)** – Certificate authority for outbound mail |   | binding, binding_group, domain, global |
| **[tls_certificate](/momentum/3/3-reference/conf-ref-tls-certificate)** – Certificate to use for inbound and outbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ciphers](/momentum/3/3-reference/conf-ref-tls-ciphers)** – Allowable ciphers for a TLS session |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_ifavailable_fallback](/momentum/3/3-reference/conf-ref-tls-ifavailable-fallback)** – Determine the behavior if TLS negotiation fails | true | binding, binding_group, domain, global |
| **[tls_key](/momentum/3/3-reference/conf-ref-tls-key)** – the TLS key to use for outbound mail or inbound mail |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer, xmpp_listener |
| **[tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols)** – Allowable ciphers for TLS inbound and outbound sessions |   | binding, binding_group, domain, ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group, peer |
| **[tls_verify](/momentum/3/3-reference/conf-ref-tls-verify)** – Specify how to handle the remote certificates | no | binding, binding_group, domain, global |
| **[transform_8bitmime_content](/momentum/3/3-reference/3-reference-conf-ref-transform-8-bitmime-content)** – Enable 8BITMIME downconversion when sending mail | ifneeded | binding, binding_group, domain, global |
| **[xclient](/momentum/3/3-reference/3-reference-conf-ref-xclient)** – Use the XCLIENT extension to SMTP for outbound mail | no | binding, binding_group, domain, global |

<a name="idp7908112"></a> 
## See Also

[binding_group](/momentum/3/3-reference/3-reference-conf-ref-binding-group) [domain](/momentum/3/3-reference/3-reference-conf-ref-domain), [host](/momentum/3/3-reference/3-reference-conf-ref-host), [“Configuration Scopes and Fallback”](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback), [ec_set_binding](/momentum/3/3-reference/sieve-ref-ec-set-binding), [“Set binding example”](/momentum/3/3-reference/3-reference-implementing-policy-scriptlets#policy.scriptlets.binding.example)