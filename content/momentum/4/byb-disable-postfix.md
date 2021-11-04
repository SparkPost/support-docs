---
lastUpdated: "03/26/2020"
title: "Disable Postfix and QPIDD"
description: "Disable the Postfix software which would interfere with Ecelerity's SMTP functionality Disable qpidd which can interfere with Rabbit MQ Ignore any errors that appear here..."
---

Disable the Postfix software, which would interfere with Ecelerity's SMTP functionality. Disable qpidd, which can interfere with RabbitMQ. Ignore any errors that appear here.

```
service postfix stop
/sbin/chkconfig postfix off
service qpidd stop
/sbin/chkconfig qpidd off
```