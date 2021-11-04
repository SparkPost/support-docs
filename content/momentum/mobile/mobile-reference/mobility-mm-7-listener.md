---
lastUpdated: "03/26/2020"
title: "Listener Configuration for MCMT"
description: "A typical configuration Listener Configuration for MCMT follows The following options are unique to the listeners used with Mobile Momentum The disable chunked is a boolean option used within the listener scopes It is specific to Mobile Momentum and is used for aggregators that do not support chunked transfer coding..."
---

A typical configuration Listener Configuration for MCMT follows:

```
ESMTP_Listener {
  Listen ":25" {
    MCMT_Reception = "allow"
  }
}

mm7_serv {
  mm7_server_default_email_from_address = "test@messagesystems.com"
  mm7_server_default_email_from_domain = "messagesystems.com"
  mm7_server_default_email_to_address = "test@exampleto.com"
  mm7_server_default_email_to_domain = "exampleto.com"
}

mms_logger "mms_logger1" {
  logfile = "/var/log/ecelerity/mmslog.ec"
}

Domain "mm7.messagesystems.com" {
  MM7_MMSC_Server = "127.0.0.1"
}
```

The following options are unique to the listeners used with Mobile Momentum:

*   The `disable_chunked` is a boolean option used within the listener scopes. It is specific to Mobile Momentum and is used for aggregators that do not support chunked transfer-coding. The default value for this option is `false`.

*   Unlike the SMTP listener, there is no `mcmt_reception` option within the HTTP_Listener scope. *This listener is always MCMT enabled* .