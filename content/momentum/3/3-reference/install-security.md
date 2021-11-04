---
lastUpdated: "03/26/2020"
title: "Security Considerations"
description: "As of version 3 2 during installation you can choose to enforce the following security measures Require SSL connections to the database Enables native Postgre SQL support for SSL connections When you choose this option a private key is written to var db msyspg server key and a self signed..."
---

As of version 3.2, during installation you can choose to enforce the following security measures:

*   Require SSL connections to the database – Enables native PostgreSQL support for SSL connections.

    When you choose this option a private key is written to `/var/db/msyspg/server.key` and a self-signed certificate is created at `/var/db/msyspg/server.crt`. If necessary, you can change these after installation. The self-signed certificate is valid for a year. To renew this certificate see [create_ssl_cert](/momentum/3/3-reference/executable-create-ssl-cert).

*   Require the use of SSL for accessing the web UI – Enables Apache support for SSL connections to the web console.

    When you choose this option an encryption key is written to `/opt/msys/ecwebui/config/site/server.key` and a certificate is created at `/opt/msys/ecwebui/config/site/server.crt`. If necessary, you can change these after installation. The self-signed certificate is valid for a year. To renew this certificate see [create_ssl_cert](/momentum/3/3-reference/executable-create-ssl-cert).

    Enabling SSL for the web UI can cause the web console to fail on startup. For more information see [“Solaris and the Web UI”](/momentum/3/3-reference/install-solaris#install.solaris.webui).

*   Enable encrypted password support – Enable the securecreds module for password encryption. See [“securecreds – Module”](/momentum/3/3-reference/3-reference-modules-securecreds) for more information.

    Be sure to choose this option on each node where you wish to use secure credentials.

### Warning

If you plan to authenticate Momentum users using Active Directory, please see [“Setting Up Active Directory Authentication With Momentum 3.2.2”](/momentum/3/3-reference/conf-ldaps).

### <a name="install.security.umask"></a> A Note About umask

A umask setting of `0027` in the shell startup file, typically `~/.bashrc` when using the bash shell, will cause installation to fail because directories created by root will be inaccessible to the user `ecuser`.

With a umask setting of `0027`, when the initial configuration is being created, ecconfigd is started, but the Apache instance will not start. You will see output such as the following:

```
shell> CFG-07961 failed to stat
'/opt/msys/etc/installer/ecelerity.d/': Permission denied
Reconfigure failed.
Global configuration error.
```

This is also true of any files that are created as the root user under the `/opt/msys/ecelerity/etc/conf` directory.

To resolve this use a more permissive mask, for example `umask 0022`.

Another option is to `chown ecuser:ecuser` all new configuration files, or make them world readable. Likewise for directories.

If you get the permissions wrong, then you will also not be able to log in to the web UI or use the **ecconfigd** command.

### <a name="install.poodle.fix"></a> POODLE Vulnerability Fix

POODLE is an attack on the TLS protocol that forces clients to downgrade to the SSLv3, which has no known secure cipher suites available. Another part of the POODLE attack is exploiting weaknesses in the CBC mode of operation.

To fix this vulnerability, upgrade to the most recent version of the Momentum major version you are currently running (e.g., Momentum 3.6.6) and set the [tls_protocols](/momentum/3/3-reference/conf-ref-tls-protocols) option to disable SSLv3 in your `ecelerity.conf` file:

`TLS_Protocols = "+ALL:-SSLv3"`

You can similarly disable (`-`) or enable (`+`) the protocols listed below; e.g., `-SSLv2:-SSLv3:-TLSv1.0:+TLSv1.1:-TLSv1.2`.

*   SSLv2

*   TLSv1.0

*   TLSv1.1 - Openssl >= 1 only

*   TLSv1.2 - Openssl >= 1 only

The following example shows SSLv2 and SSLv3 being disabled in the Binding scope:

```
binding "bindingTLS" {
    Remote_SMTP_Port = 587
    TLS = "required"
    TLS_Verify  = "ca"
    TLS_Certificate = "/opt/msys/ecelerity/etc/certs/server.crt"
    TLS_Key = "/opt/msys/ecelerity/etc/certs/server.key"
    TLS_CA = "/opt/msys/ecelerity/etc/certs/ca.pem"
    TLS_Protocols = "+ALL:-SSLv2:-SSLv3"
}
```

### <a name="install.dhe.ciphers"></a> Using DHE Ciphers with the SMTP Listener

If you are required to implement Perfect Forward Secrecy within the context of SMTPTLS, you can do so by forcing the use of the Diffie Hellman (DHE) ciphers using ephemeral key exchange. Momentum 3.6.6 has two options for enabling these ciphers: [tls_dhparams_file](/momentum/3/3-reference/3-reference-conf-ref-tls-dhparams-file) and [tls_enable_dhe_ciphers](/momentum/3/3-reference/3-reference-conf-ref-tls-enable-dhe-ciphers).