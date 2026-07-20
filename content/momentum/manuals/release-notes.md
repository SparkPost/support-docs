---
title: "Release Notes"
subtitle: "Momentum"
version: "5.3"
date: "July 2026"
description: "Release notes for Momentum 5.3 — summary, new features, defects fixed, installation and upgrade pointers, and known issues for Red Hat Enterprise Linux (RHEL) 8, 9, and 10."
lastUpdated: "07/20/2026"
---

# 1. Summary

The Momentum 5.3 release in July 2026 is available for Red Hat Enterprise Linux (RHEL) 8, 9, and 10. If you still need to run Momentum on RHEL 7 (and its CentOS equivalent), which reached its EOL in 2024, the latest release for that was Momentum 4.6.

The Momentum 5.3 [changelog](https://support.sparkpost.com/momentum/changelog/5/5-3-0) provides details of all changes since the previous major release, organized in the list by "Feature", "Fix", or "Security Fix".

# 2. New Features

- A new **spamassassin** client module (SPAMC protocol over **spamd**), replacing the legacy Sieve-based **spamc** module.
- A new **curfew** module for scheduling recurring quiet hours during which delivery is suspended for selected bindings, binding groups, or domains.
- A new, ***experimental*** support for DKIM2 signing and verification through a **dkim2** module.
- Optional **limit** query parameter to the **/stats/queues/mailq** HTTP API.
- Enhancements in the **fail** family of **ec_console** commands:
  - New "**fail all**" and "**fail all quiet**" commands.
  - Optional **--meta** and **--header** filtering to selectively fail messages.
  - **--dry-run** preview option to list the messages that would fail.
- Optional **--meta** and **--header** filtering to selectively reroute messages using the "**reroute queue**" **ec_console** command, together with a **--dry-run** preview option to list the messages that would be moved.
- New **delay** **ec_console** command to move messages from the active queue into the delayed queue.
- **tls_ec_curve_names** now accepts a list of curves/groups in preference order.
- New **ec_spool_check** utility, for a read-only scan of a spool directory.
- The **outbound_throttle_messages** and **outbound_throttle_connections** can now be declared in a host stanza for per-MX-host rate-limiting.
- The supported range of OpenSSL now covers 1.1.1 (RHEL 8) through the 3.x series.
- Support for license signatures using ECDSA P-256, for enhanced FIPS compliance.
- New DNS family of configuration options to rate-limit MX lookups, preventing query bursts.
- Added the **log_hires_timestamp** option to emit microsecond-resolution timestamps in the log files.
- Removed the **msys-nodejs** package from the webhooks bundle, to be replaced with a 3rd-party Node.js 24 LTS package.
- Other changes and improvements.

# 3. Defects Fixed

The following defects were fixed in Momentum 5.3:

- Fixed an issue with **ha_proxy_client** not re-resolving a hostname when the remote server changed the IP address.
- Fixed **custom_logger** log lines being dropped when the format includes the **%H** (remote IP) macro and the message is injected with no IP (e.g., over a UNIX domain socket).

# 4. Installation & Upgrade

## 4.1. Installation

1.  Instructions for new installations of Momentum 5.3 MTA bundles are available in a PDF document under the entry for this release on our support site: [Product Downloads page](https://support.messagesystems.com/).

2.  Following the initial installation and configuration of Momentum 5.3, the 5.3 Webhooks, REST Transmissions API, and Inline Message Generation functions can be added with separate procedures. Instructions for these operations are available from our Customer Support. Please contact them before upgrading if the additional functionality is desired.

## 4.2. Upgrade

Instructions for upgrading from previous releases to the Momentum 5.3 MTA release configuration are located in a PDF document under the entry for this release on the Support site's [Product Downloads page](https://support.messagesystems.com/).

# 5. Known Issues and Changed Behaviors

There are none for this release.

# 6. Final Note

If you are still using the Momentum cluster configuration server (**ecconfigd_ctl**) and its client (**eccfg**), *which have been deprecated since version 4.3.1*, you must manually install some dependencies:

```bash
cd /var/tmp/momentum-mta-5.3.x.yyyyy
sudo dnf install -y msys-ecelerity-config-server-5.3*.rpm
sudo dnf install -y msys-ecelerity-config-client-5.3*.rpm
sudo dnf install -y gcc
sudo cpan install Params::Validate YAML::XS Expect

# create the private key and a self-signed certificate,
# or specify your own at /opt/msys/ecelerity/etc/ecconfigd.conf
sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout /var/ecconfigd/apache/server.key \
  -out /var/ecconfigd/apache/server.crt

# use ecconfigd_ctl and eccfg as earlier
sudo /opt/msys/ecelerity/bin/ecconfigd_ctl start
/opt/msys/ecelerity/bin/eccfg  # shows usage
```
