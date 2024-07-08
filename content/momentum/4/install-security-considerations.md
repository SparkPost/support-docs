---
lastUpdated: "05/21/2024"
title: "Security Considerations"
description: "This section will document security issues and fixes for those issues"
---

This section will document security issues and fixes for those issues.

### <a name="install.security.umask"></a> A Note About umask

A umask setting of `0027` in the shell startup file, typically `~/.bashrc` when using the bash shell, will cause installation to fail because directories created by root will be inaccessible to the user `ecuser`.

This is also true of any files that are created as the root user under the `/opt/msys/ecelerity/etc/conf` directory.

To resolve this use a more permissive mask, for example `umask 0022`.

Another option is to `chown ecuser:ecuser` all new configuration files, or make them world readable. Likewise for directories.

### <a name="install.security.poodle"></a> POODLE Vulnerability Fix

The POODLE (Padding Oracle On Downgraded Legacy Encryption) vulnerability attacks the TLS protocol and forces clients to downgrade to the SSLv3, which has no known secure cipher suites available. This allows an attacker to read information encrypted with this version of the protocol in plain text. Another part of the POODLE attack is exploiting weaknesses in the CBC mode of operation.

**<a name="idp1726512"></a> Disable SSLv3 (GNUTLS)**

If you access the REST APIs via NGINX, enable GNUTLS in the TLS_Engine and disable SSLv3 to protect SMTP traffic. To do this, set the [tls_ciphers](/momentum/4/config/tls-ciphers) configuration option to disable SSLv3 in your `ecelerity.conf` file:

`TLS_Ciphers = "NORMAL:-VERS-SSL3.0"`

For more information, see the [GNUTLS website](http://www.gnutls.org/security.html#GNUTLS-SA-2014-4).

**<a name="idp1730608"></a> Disable SSLv3 (OpenSSL)**

To fix this vulnerability in OpenSSL, make sure you are running Momentum 4.1.0.2 or later and set the [tls_protocols](/momentum/4/config/tls-protocols) configuration option to disable SSLv3 in your `ecelerity.conf` file:

`TLS_Protocols = "+ALL:-SSLv3"`
