---
lastUpdated: "03/26/2020"
title: "Control_Listener Accounting"
description: "Momentum contains an extensible authorization and accounting subsystem that can be configured to restrict access to console commands based on role while recording an audit trail Accounting is enabled by default for Unix socket connections However if you are connecting via TCP IP then accounting for the Control Listener will..."
---

Momentum contains an extensible authorization and accounting subsystem that can be configured to restrict access to console commands based on role while recording an audit trail. Accounting is enabled by default for Unix socket connections. However, if you are connecting via TCP/IP then accounting for the Control_Listener will not be enabled unless you explicitly turn it on. To employ an authentication scheme such as `DIGEST-MD5` and to log authentication events use the following syntax:

```
Control_Listener {
  Listen "/tmp/2025" {
    File_Mode = 0666
  }
  Listen ":2025" {
    AuthDigestMD5Parameters = [
      uri = digest:///opt/msys/ecelerity/etc/console_passwd
      log_authentication = "true"
    ]
  }
}
```

Logging of authentication events is enabled by turning on `log_authentication` in the Control_Listener configuration *and* configuring an accounting log in the [“EC_logger – Momentum-Style Logging”](/momentum/4/modules/ec-logger) module. You may also develop your own accounting modules by implementing a hook.

More information about authentication modules can be found at [“auth_ds – Datasource based SMTP Authentication”](/momentum/4/modules/auth-ds).