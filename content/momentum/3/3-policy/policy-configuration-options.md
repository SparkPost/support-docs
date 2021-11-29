---
lastUpdated: "03/26/2020"
title: "Configuration Items"
description: "The configuration options in the dp config lua file affect how the default policy script default policy lua behaves You can configure the following items msys dp config whitelist define IP addresses that are exempt from scripts msys dp config rbls configure both DNS and RBLDNSD RB Ls msys dp..."
---

The configuration options in the `dp_config.lua` file affect how the default policy script (`default_policy.lua`) behaves.

You can configure the following items:

*   `msys.dp_config.whitelist` – define IP addresses that are exempt from scripts

*   `msys.dp_config.rbls` – configure both DNS and RBLDNSD RBLs

*   `msys.dp_config.early_talker` – set early talker options

*   `msys.dp_config.fcdns` – define Full Circle DNS (FCDNS)

*   `msys.dp_config.concurrent_connection_limits` – set concurrent connection limits

*   `msys.dp_config.mail_from_domain_validate` – configure MAIL FROM domain validation

*   `msys.dp_config.recipient_validation` – Whether or not to perform recipient validation

*   `msys.dp_config.relay_authorization` – perform per-recipient or per-domain recipient validation

*   `msys.dp_config.audit_series` – this table is required to enable other audit series options

*   `msys.dp_config.audit_series.invalid_smtp_auth` – limit failed SMTP AUTH

*   `msys.dp_config.audit_series.connections` – limit the connection rate

*   `msys.dp_config.audit_series.mailfrom` – limit the MAIL FROM rate

*   `msys.dp_config.audit_series.auth_user` – limit the user SMTP AUTH rate.

*   `msys.dp_config.audit_series.invalid_recipients` – set the Directory Harvest Attack (DHA) parameters

*   `msys.dp_config.audit_series.messages` – set the message rate

*   `msys.dp_config.audit_series.spam_mailfrom` – set the SPAM MAIL FROM rate

*   `msys.dp_config.audit_series.spam` – set the spam rate

*   `msys.dp_config.audit_series.virus` – set virus thresholds

*   `msys.dp_config.audit_series.virus_mailfrom` – set the MAIL FROM virus thresholds

*   `msys.dp_config.message_size_limits` – set message size limits

*   `msys.dp_config.beik` – set the BEIK scanner parameters

*   `msys.dp_config.commtouch` – set the Commtouch parameters

*   `msys.dp_config.cloudmark` – set the Cloudmark parameters

*   `msys.dp_config.antivirus` – set the parameters for an anti-virus engine

*   `msys.dp_config.keyword_filter` – set the keyword filter parameters