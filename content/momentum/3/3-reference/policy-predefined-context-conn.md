---
lastUpdated: "03/26/2020"
title: "Connection Context Variables"
description: "Connection context variables are set upon the creation of a successful connection and contain information regarding the remote client Connection context variables are predefined either in a global context or within a module The global variables are discussed in the next section and the module specific variables follow The following..."
---

<a name="idp3421200"></a> 

Connection context variables are set upon the creation of a successful connection and contain information regarding the remote client. Connection context variables are predefined, either in a global context or within a module. The global variables are discussed in the next section and the module-specific variables follow.

### <a name="policy.predefined-context-conn-global"></a> Global Predefined Connection Context Variables

The following connection context variables are predefined globally by Momentum:

<dl class="variablelist">

<dt>auth_status</dt>

<dd>

The authentication status. When an SMTP client performs an SMTP AUTH action, the auth_status context key will be set to one of "pass", "fail", or "error". For more information about authentication see [“Authentication, Authorization and Accounting”](/momentum/3/3-reference/conf-aaa).

</dd>

<dt>auth_user</dt>

<dd>

The authenticated username. When an SMTP client performs an SMTP AUTH action, the auth_user context key will be set to the username used during authorization. For more information about authentication see [“Authentication, Authorization and Accounting”](/momentum/3/3-reference/conf-aaa).

</dd>

<dt>can_relay</dt>

<dd>

Whether relaying is allowed. When an SMTP client is allowed to relay through Momentum because of an entry in `relay_hosts` or a relaying declaration in an ESMTP_Listener IP access control list, the `can_relay` connection context variable is set to "true." See also [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts) and [“Authentication, Authorization and Accounting”](/momentum/3/3-reference/conf-aaa).

</dd>

<dt>connection_message_count</dt>

<dd>

The number of messages on the connection.

</dd>

<dt>connection_rcpt_count</dt>

<dd>

The number of recipients on the connection. This variable counts the *total* number of RCPT TOs on this open connection while `message_rcpt_count` counts the number of RCPT TOs since the last MAIL FROM.

</dd>

<dt>datasource_error</dt>

<dd>

This context variable is accessible after execution of a Sieve function. If a scripting data source query cannot be completed due to an error, this variable will be set to the error message. See [ds_fetch](/momentum/3/3-reference/sieve-ref-ds-fetch) and following.

</dd>

<dt>dns_status</dt>

<dd>

If the last Sieve `ec_dns_lookup` function call returned an error, this variable will contain the description of that error. See [ec_dns_lookup](/momentum/3/3-reference/sieve-ref-ec-dns-lookup). For the Lua function, [msys.dnsLookup](/momentum/3/3-reference/3-reference-lua-ref-msys-dnslookup), you can look at the function return value for an error description.

</dd>

<dt>ehlo_domain</dt>

<dd>

The domain from the EHLO phase.

This variable is accessible as of the EHLO phase.

</dd>

<dt>ehlo_string</dt>

<dd>

The complete EHLO string.

</dd>

<dt>message_rcpt_count</dt>

<dd>

The number of recipients for the current message. Since a given message "object" can only have one recipient, multiple recipients are a property of the current session and are tracked at the connection level not the message level. This variable counts the number of RCPT TOs since the last MAIL FROM while `connection_rcpt_count` counts the *total* number of RCPT TOs on this open connection.

</dd>

<dt>tls</dt>

<dd>

Whether TLS is in use.

</dd>

<dt>tls_cipher</dt>

<dd>

Identifies the cipher in use for a TLS enabled session

This variable is accessible from the [outbound_tls_ciphers](/momentum/3/3-api/hooks-core-outbound-tls-ciphers) hook.

</dd>

<dt>tls_cipher_algbits</dt>

<dd>

The number of bits the algorithm is based on, for example 128

</dd>

<dt>tls_cipher_usebits</dt>

<dd>

The number of bits used, for example 40

</dd>

<dt>tls_client_cert_subject</dt>

<dd>

Holds the subject of the peer certificate for a TLS enabled session.

</dd>

<dt>tls_client_cert_subject_cn</dt>

<dd>

The common name of the subject of the peer certificate.

</dd>

<dt>tls_client_cert_issuer</dt>

<dd>

Holds the issuer of the peer certificate for a TLS enabled session.

</dd>

<dt>tls_client_cert_issuer_cn</dt>

<dd>

The common name of the issuer of the peer certificate.

</dd>

<dt>tls_client_verified</dt>

<dd>

Will be set to the string `yes` if the peer certificate was verified against the configured Certificate Authorities.

</dd>

</dl>

### <a name="policy.predefined-context-conn-module"></a> Predefined Module-Specific Connection Context Variables

The following sections show modules that support predefined module-specific connection context variables.

**<a name="policy.predefined-context-conn-conntrol"></a> 6.1.2.1. The conntrol Module**

The variables are as follows:

*   `conntrol_unrecognized_commands` – The number of unrecognized commands.

*   `conntrol_bad_commands` – The number of valid SMTP commands with syntax errors

*   `early_talker` – Whether the peer started issuing commands before Momentum sent the initial SMTP banner.

For more information see [“Conntrol Runtime Usage”](/momentum/3/3-reference/3-reference-modules-conntrol#modules.conntrol.runtime.usage)

**<a name="idp3479344"></a> 6.1.2.2. The mail_loop Module**

The variables are as follows:

*   `mail_loop_header_count` – The number of received headers detected.

*   `mail_loop_ip` – Set to 'match', if a self-connect was detected

For more information see [“mail_loop Runtime Usage”](/momentum/3/3-reference/3-reference-modules-mail-loop#modules.mail_loop.runtime.usage)