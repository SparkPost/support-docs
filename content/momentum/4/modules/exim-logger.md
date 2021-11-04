---
lastUpdated: "03/26/2020"
title: "exim_logger – Exim Logging"
description: "Momentum supports logging in the same style as the Open Source MTA Exim http www exim org This is mainly of use to sites which are moving from an Exim install or otherwise have log processing software that reads data in Exim compliant format The exim logger module writes to..."
---

<a name="idp21719792"></a> 

Momentum supports logging in the same style as the Open Source MTA Exim (http://www.exim.org). This is mainly of use to sites which are moving from an Exim install or otherwise have log-processing software that reads data in Exim-compliant format.

The exim_logger module writes to two log files: a `mainlog` where receptions, deliveries, and delivery failures are logged, and a `paniclog` where errors are logged.

### <a name="idp21723760"></a> Configuration

The exim_logger is configured through a configuration file using a stanza such as:

<a name="example.exim_logger.3"></a> 


```
exim_logger "exim_logger1" {
  mainlog  = "/var/log/exim/mainlog"
  paniclog = "/var/log/exim/paniclog"
  log_transient_failures = false
}
```

You can toggle the logging of transient failures using the `log_transient_failures` option.