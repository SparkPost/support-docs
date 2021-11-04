---
lastUpdated: "03/26/2020"
title: "smtp_auth_proxy - SMTP Authentication Proxy"
description: "Configuration Change This feature is available as beta in Momentum 3 6 5 The smtp auth proxy module allows your edge SMTP servers to forward SMTP AUTH requests onto one or more SMTP servers with optional lookup of the authentication host for a particular user Example 14 96 Example Configuration..."
---

<a name="idp21346336"></a> 

**Configuration Change. ** This feature is available as beta in Momentum 3.6.5.

The `smtp_auth_proxy` module allows your edge SMTP servers to forward SMTP AUTH requests onto one or more SMTP servers, with optional lookup of the authentication host for a particular user.

<a name="modules.smtp_auth_proxy.example"></a> 


```
smtp_auth_proxy {
  # Host for forwarding the SMTP AUTH request.
  host = some.smtp.server
  port = 25
  timeout = 60

  # Optionally query a database to look up the SMTP server
  # for auth for a particular user.
  ds_cache = smtp_auth_proxy
  query = "SELECT host FROM auth_servers WHERE username = :username, localpart = :localpart, domain = :domain;"
}

Esmtp_Listener {
  SMTP_Extensions = ("AUTH LOGIN" XREMOTEIP XDUMPCONTEXT XCLIENT XSETCONTEXT)

  AuthLoginParameters = [
      log_authentication = "true"
      uri = "smtp_auth_proxy://"
  ]

  Listen ":25" {}
}
```

### Note

Any hosts specified by the `relay_hosts` option are not subject to any SMTP authentication that you may have implemented. Likewise when `open_relay` is set to `true`. For more information see [relay_hosts](/momentum/3/3-reference/3-reference-conf-ref-relay-hosts).