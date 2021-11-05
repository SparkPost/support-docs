---
lastUpdated: "03/26/2020"
title: "postfix_logger – Postfix-Compatible Logging"
description: "Momentum supports logging in the same style as the Open Source MTA Postfix http www postfix org This is mainly of use to sites migrating from a Postfix installation or those that have log processing software that reads data in Postfix compliant format The postfix logger module writes to two..."
---

<a name="idp20874896"></a> 

Momentum supports logging in the same style as the Open Source MTA Postfix (http://www.postfix.org). This is mainly of use to sites migrating from a Postfix installation or those that have log-processing software that reads data in Postfix-compliant format.

### <a name="idp20877168"></a> Configuration

The postfix_logger module writes to two logfiles: a mainlog where receptions, deliveries, and delviery failures are logged, and a paniclog where errors are logged. These are configured as in the following examples:

<a name="example.postfix_logger.3"></a> 


```
postfix_logger "postfix_logger1" {
  mainlog  = "/var/log/postfix/mainlog"
  paniclog = "/var/log/postfix/paniclog"
  log_transient_failures = false
}
```

### Note

You must manually create the `postfix` directory and it must be writable by the user, `ecuser`. You must do this if you manually create the postfix module*or* if you create it through the web UI. You can change the ownership of the directory by issuing the shell command: **chown -R ecuser:ecuser /var/log/postfix** .

Additionally, you can toggle the logging of transient failures using the `log_transient_failures` option.