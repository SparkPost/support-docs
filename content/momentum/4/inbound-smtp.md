---
lastUpdated: "03/26/2020"
title: "ESMTP_Listener Authentication"
description: "Momentum can be configured to perform authentication on SMTP connections It provides out of the box support for authenticating remote users against a flat file using CRAM MD 5 DIGEST MD 5 and LOGIN authentication extensions to SMTP Additional authentication back ends can be plugged into Momentum in the form..."
---

Momentum can be configured to perform authentication on SMTP connections. It provides out-of-the-box support for authenticating remote users against a flat-file using CRAM-MD5, DIGEST-MD5, and LOGIN authentication extensions to SMTP. Additional authentication back-ends can be plugged into Momentum in the form of authentication modules; Momentum ships with authentication modules for a number of standard datasources, and third-party vendors may provide others. For more details on datasource based authentication modules, see [“auth_ds – Datasource based SMTP Authentication”](/momentum/4/modules/auth-ds).

Upon successful authentication, the following are stored in the connection validation context:

*   [auth_name](/momentum/4/4-policy-context-variables#predefined-context-conn-global) – Type of authentication

*   [auth_status](/momentum/4/4-policy-context-variables#predefined-context-conn-global) – Authenticated status

*   [auth_user](/momentum/4/4-policy-context-variables#predefined-context-conn-global) – Authenticated username

In addition, the SMTP session will be marked as relayable, setting the connection context variable [can_relay](/momentum/4/4-policy-context-variables#predefined-context-conn-global) to "true".

These results of the authentication attempt will be used to generate an `Authentication-Results:` header in the mail before it is delivered from Momentum.

### Note

Hosts are not subject to any SMTP authentication that you may have implemented when specified by the [`relay_hosts`](/momentum/4/config/ref-relay-hosts) option or when [`open_relay`](/momentum/4/config/ref-open-relay) is set to "true".

### <a name="inbound_smtp.digest-md5"></a> DIGEST-MD5 Authentication

Implements the DIGEST-MD5 authentication mechanism specified in RFC 2831\. A "uri" parameter is required specifying which uri to use for authentication. DIGEST-MD5 supports secure pre-computed values, so the passwords may be stored "hashed" or in clear text. By default, passwords returned from the provided uri should be hashed. If the parameter "stored_cleartext" is set to "true", the passwords will be expected in clear text and the hash will be computed internally before matching.

DIGEST-MD5 authenticates users within a given realm. This realm can be specified by adding a "realm" parameter valued as needed. If left unspecified, the server hostname will be used.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = DIGEST-MD5" must be specified.

To configure DIGEST-MD5 authentication, configure your ESMTP_Listener as shown below. This configures SMTP service on port 25 with a ruleset that matches all clients connecting from any IP address. Inside that ruleset, the AUTH SMTP extension is configured for DIGEST-MD5, using the digest file `/opt/msys/ecelerity/etc/smtp_passwd` as the authentication source. The authentication realm is configured using the optional `realm` parameter (if left unspecified, the hostname of the server is used instead (see [hostname](/momentum/4/config/ref-hostname))).

```
ESMTP_Listener {
  Listen ":25" {
    AuthDigestMD5Parameters = [
      uri = "digest:///opt/msys/ecelerity/etc/smtp_passwd"
      realm = "my choice of realm"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH DIGEST-MD5" )
  }
}
```

The digest file referenced by the `uri` parameter can be created and updated using the [ec_md5passwd](/momentum/4/executable/ec-md-5-passwd) tool.

### <a name="inbound_smtp.cram-md5"></a> CRAM-MD5 Authentication

Implements the CRAM-MD5 authentication mechanism specified in RFC 2195\. A "uri" parameter is required specifying which uri to use for authentication. As the CRAM-MD5 protocol does not make use of any secure precalculated values, the passwords stored in the file (if it is a `file://` uri) must be stored in clear text.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = CRAM-MD5" must be specified.

CRAM-MD5 authentication is configured in a similar way to DIGEST-MD5, except that the password file stores passwords in clear text.

```
ESMTP_Listener {
  Listen ":25" {
    AuthCramMD5Parameters = [
      uri = "file:///opt/msys/ecelerity/etc/cram_md5_passwd"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH CRAM-MD5" )
  }
}
```

### <a name="inbound_smtp.clear.text"></a> Clear Text LOGIN Authentication

Implements the LOGIN authentication mechanism specified in RFC 2222\. A "uri" parameter is required specifying which uri to use for authentication. As the LOGIN protocol does not make use of any secure precalculated values, the passwords stored in the file (if it is a file:// uri) must be stored in clear text.

To advertise this auth mechanism over SMTP, the "extension = AUTH" and "extension_argument = LOGIN" must be specified.

### Warning

Note that the LOGIN mechanism both stores passwords in clear text locally and transmits the username and password credentials in clear text over the network. This authentication mechanism (as defined by standards) is in no way "secure." It should be avoided unless absolutely necessary; if you must use it, use it in conjunction with TLS.

Configuration is similar to CRAM-MD5:

```
ESMTP_Listener {
  Listen ":25" {
    AuthLoginParameters = [
      uri = "file:///opt/msys/ecelerity/etc/unsafe_passwd"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH LOGIN" )
  }
}
```

### <a name="inbound_smtp.plain.text"></a> Plain Text Authentication

Plain text authentication is handled in the same way as clear text:

```
ESMTP_Listener {
  Listen ":25" {
    SMTP_Extensions = ("AUTH PLAIN")
    AuthPlainParameters = [
      log_authentication = "true"
      uri = "file:///opt/msys/ecelerity/etc/plain_password"
    ]
  }
}
```

The `file://` authentication storage scheme references the path to a plain text password file. Within this file, lines starting with a ‘`#` are treated as comments and are ignored. The lines are divided into two fields separated by a ‘`:`' character where the first field is the username and the second is the plain text password.

### <a name="inbound_smtp.logging.auth"></a> Logging SMTP Authentication Events

You can enable logging of SMTP authentication events by setting the `log_authentication` to `true` in your SMTP authentication configuration block.

```
ESMTP_Listener {
  Listen ":25" {
    AuthCramMD5Parameters = [
      uri = "file:///opt/msys/ecelerity/etc/cram_md5_passwd"
      log_authentication = "true"
    ]
    SMTP_Extensions = ( "ENHANCEDSTATUSCODES" "AUTH CRAM-MD5" )
  }
}
```

However, you still need to configure an account log logging module in order to record the accounting information. Set the `acctlog` option in an [ec_logger](/momentum/4/modules/ec-logger) module in your configuration. When log authentication is enabled, a line will be written to the `acctlog` file for every authorization event. Each command and its authorization status will be logged to the `acctlog`. If a command is allowed, the role that matched will be included in the log entry. For `acctlog` format, see [“`acctlog`”](/momentum/4/4-log-formats#log_formats.acctlog).