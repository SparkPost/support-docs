---
lastUpdated: "03/26/2020"
title: "sendmail_logger – Sendmail-Compatible Logging"
description: "Momentum supports logging in the same style as the Open Source MTA Sendmail http www sendmail org This is mainly of use to sites which are moving from a Sendmail install or otherwise have log processing software that reads data in Sendmail compliant format The sendmail logger module writes to..."
---

<a name="idp21194080"></a> 

Momentum supports logging in the same style as the Open Source MTA Sendmail (http://www.sendmail.org). This is mainly of use to sites which are moving from a Sendmail install or otherwise have log-processing software that reads data in Sendmail-compliant format.

### <a name="idp21196368"></a> Configuration

The sendmail_logger module writes to two logfiles: a mainlog where receptions, deliveries, and delivery failures are logged, and a paniclog where errors are logged. These are configured as in the following stanza:

<a name="example.sendmail_logger.3"></a> 


```
sendmail_logger "sendmail_logger1" {
  mainlog  = "/var/log/sendmail/mainlog"
  paniclog = "/var/log/sendmail/paniclog"
}
```