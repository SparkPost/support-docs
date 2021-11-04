---
lastUpdated: "03/26/2020"
title: "Use Cases"
description: "The following table describes the configuration options in the sample dp config lua file and indicates whether or not the policy is enabled in the default configuration If an option is dependent upon a configuration module that module is identified The enabled column in this table indicates the status of..."
---


The following table describes the configuration options in the sample `dp_config.lua` file and indicates whether or not the policy is enabled in the default configuration. If an option is dependent upon a configuration module, that module is identified.

### Note

The `enabled` column in this table indicates the status of a configuration option *after* performing the steps described in [*Enabling the Policy Scripts*](/momentum/3/3-policy/policy-enabling) .

<a name="policy-table"></a> 


| Name | Enabled | Action | Module |
| --- | --- | --- | --- |
| whitelist |   | Add any suitable whitelists | ds_core (datasource) |
| rbls |   | Define RBLs |   |
| early_talker | ✓ | Configure behavior for early talkers | conntrol |
| fcdns | ✓ | Perform a FCDNS check |   |
| concurrent_connection_limits | ✓ | Set the number of concurrent connections |   |
| mail_from_domain_validate | ✓ | Validate the MAIL FROM |   |
| recipient_validation |   | Validate recipients. On 'outbound' systems disable this option | ds_core (datasource) |
| relay_authorization |   | Allow SMTP-authenticated users to relay | auth_ds |
| audit_series | ✓ | A requirement for using any of the audit_series options | inbound_audit |
| audit_series.invalid_smtp_auth |   | Failed SMTP AUTH limiting | inbound_audit |
| audit_series.connections | ✓ | Limit the connection rate | inbound_audit |
| audit_series.mailfrom |   | MAIL FROM rate limiting | inbound_audit |
| audit_series.auth_user | ✓ | SMTP AUTH user rate limiting | inbound_audit |
| audit_series.invalid_recipients | ✓ | Set DHA parameters | inbound_audit |
| audit_series.messages | ✓ | Limit the rate of messages | inbound_audit |
| audit_series.spam_mailfrom |   | Spam MAIL FROM rate limiting | inbound_audit |
| audit_series.spam | ✓ | Spam rate limiting | inbound_audit |
| audit_series.virus | ✓ | Virus rate limiting | antivirus, inbound_audit |
| audit_series.virus_mailfrom |   | Virus MAIL FROM rate limiting | antivirus, inbound_audit |
| message_size_limits | ✓ | Set message size limits |   |
| beik |   | Enable if you use this scanner | beik |
| commtouch |   | Enable if you use this scanner | commtouch |
| cloudmark |   | Enable if you use this scanner | cloudmark |
| antivirus |   | Enable for virus scanners such as CSAPI | antivirus |
| keyword_filter |   | Perform a keyword search | ds_core (datasource) |

All policies can be disabled by being commented out in the Lua code. Some policies can also be enabled or disabled using a `check` option.

### Warning

By default `msys.dp_config.relay_authorization` is disabled—the `check` element is set to `false`. If you do not enable this policy and you are using the `default_policy.conf` file be sure to change the value of [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts). If you leave `check` as `false` and you use the `default_policy.conf` file (where `relay_hosts` is set to `( "0.0.0.0/0" )`) your MTA is effectively an open relay.

## <a name="policy.inbound"></a> Policy Categories

This section classifies the policies enumerated in [Table 3.1, “Default policy script status”](/momentum/3/3-policy/policy-use-cases#policy-table).

### <a name="idp1046352"></a> Outbound Sender Authentication Policy

**<a name="idp1047504"></a> 3.1.1.1. SMTP Authentication**

This policy requires customer/senders to authenticate before they are permitted to relay outbound mail. Authentication may be performed against LDAP or a database.

Implemented using `msys.dp_config.relay_authorization`.

### <a name="idp1050464"></a> Inbound IP Reputation Policy

**<a name="idp1051664"></a> 3.1.2.1. Realtime Blacklist (RBL)**

Use of Realtime Blacklists (RBLs) are an efficient way to detect and eliminate spam before the system performs more "expensive" policy like content filtering. Any combination of internally maintained or externally maintained RBLs, such as Spamhaus, can be implemented. This policy loads an RBL, looks up sender and takes appropriate action.

Implemented using `msys.dp_config.rbls`.

### <a name="idp1036832"></a> Inbound Session Management Policies

**<a name="idp1038320"></a> 3.1.3.1. Concurrent Connection Limits**

This policy limits how many concurrent connections a given *Classless Inter-Domain Routing*                      (CIDR) range may have open. You can apply different maximum concurrent connection limits based on defined CIDR blocks.

Specific trusted, high volume, senders should be whitelisted.

Implemented using `msys.dp_config.concurrent_connection_limits`, `msys.dp_config.audit_series.connections` and `msys.dp_config.whitelist`.

**<a name="idp1042976"></a> 3.1.3.2. MAIL FROM Rate Limiting**

This policy limits The MAIL FROM rate by CIDR block. Applicable in a cluster configuration.

Specific trusted, high volume, senders should be whitelisted.

Implemented using `msys.dp_config.audit_series.mailfrom`.

**<a name="idp590640"></a> 3.1.3.3. Failed SMTP Auth Rate**

Set a threshold by CIDR block for rejection after failed SMTP AUTH. Applicable in a cluster configuration.

Implemented using `msys.dp_config.audit_series.auth_user`.

**<a name="idp593472"></a> 3.1.3.4. Concurrent Connection Limits Based on Full Circle DNS Check**

Perform a Full Circle DNS Check. Exempt whitelists from this policy.

Implemented using `msys.dp_config.fcdns`.

**<a name="idp596304"></a> 3.1.3.5. Early Talker Detection**

This policy rejects a client that sends data before the server sends a greeting message (banner). Sloppily written spamware often sends the HELO immediately without waiting for the greeting.

Implemented using `msys.dp_config.early_talker`.

**<a name="idp599232"></a> 3.1.3.6. Message Rate Limiting**

This policy enforces the maximum number of messages per given time period (i.e. rolling one hour) that will be accepted from a given CIDR range. Specific trusted, high volume, senders can be whitelisted. Applicable in a cluster configuration.

Implemented using `msys.dp_config.audit_series.messages`.

### <a name="idp602384"></a> Inbound Sender Reputation Policy

**<a name="idp603872"></a> 3.1.4.1. Inbound Envelope Validation Policy****<a name="idp605072"></a> 3.1.4.1.1. Sending Domain DNS Validation.**

Email must be sent from a valid domain. This policy verifies that the domain exists and will permanently fail the message if the domain does not exist.

Implemented using `msys.dp_config.mail_from_domain_validate`.

**<a name="idp1146896"></a> 3.1.4.1.2. Recipient/Domain Validation**

This policy performs a lookup in LDAP or another relevant data source to determine if the message is addressed to a valid recipient. If the recipient does not exist, permanently fail the message.

Implemented using `msys.dp_config.recipient_validation`.

**<a name="idp1149856"></a> 3.1.4.1.3. Directory Harvesting Detection**

Recipient validation is a very useful way to not only limit the messages you receive but also provide feedback to senders about recipients that are not valid. Unfortunately, this functionality can be used to traverse a directory and create a list of valid recipients to attack. This policy will transiently fail messages from a given sender for a given length of time if the sender exceeds a specified number of invalid recipients for a given time period. This policy also looks at the percentage of messages with invalid recipients over a specified time frame. Messages from senders that have exceeded a specified threshold will be temporarily failed for a specified duration. For example, if 50% or more of the recipients from a given sender in are invalid, then temporarily fail the sender for the next 24 hours. Because this threshold is percent-based, a specified minimum number of messages must be received from a given sender to ensure the counts are statistically significant before the policy will apply.

Implemented using `msys.dp_config.audit_series.invalid_recipients` and `msys.dp_config.audit_series.invalid_smtp_auth`.

**<a name="idp1154736"></a> 3.1.4.2. Inbound Content Policy****<a name="idp1156208"></a> 3.1.4.2.1. Maximum Message Size**

This policy enforces a specified maximum message size and permanently fails the message when this size is exceeded.

Implemented using `msys.dp_config.message_size_limits`.

**<a name="idp1159344"></a> 3.1.4.2.2. Anti-spam Content Scanning**

Momentum does not have any intrinsic content scanning capabilities, but instead customers may choose a third-party partner best suited to their needs. The Momentum content scanning model uses all content scanners as engines which are fed the message and its metadata, returning a verdict about the message. The mechanisms used and results returned vary from partner to partner. Policy can set whether to silently discard the message or reject it.

Implemented using `msys.dp_config.audit_series.spam_mailfrom` and `msys.dp_config.audit_series.spam`.

**<a name="idp1163088"></a> 3.1.4.2.3. Anti-Virus Content Scanning**

Similar to Anti-spam content, but message disposition is typically to silently discard the message. Applicable in a cluster configuration.

Implemented using `msys.dp_config.antivirus` and the various partner options.

**<a name="idp1166016"></a> 3.1.4.2.4. Anti-Virus Content Rate**

Suspend delivery when the threshold for anti-virus content is met. Applicable in a cluster configuration.

Implemented using `msys.dp_config.audit_series.virus`.

**<a name="idp1168848"></a> 3.1.4.2.5. Anti-Virus MAIL FROM Rate**

Suspend delivery when the threshold for anti-virus MAIL FROM Rate is met. Applicable in a cluster configuration.

Implemented using `msys.dp_config.audit_series.virus_mailfrom`.

**<a name="idp1171728"></a> 3.1.4.2.6. Keyword Filtering**

Questionable content using specific keywords can be rejected using content filtering. Each MIME part is scanned separately.

Implemented using `msys.dp_config.keyword_filter`.