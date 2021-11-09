---
lastUpdated: "03/26/2020"
title: "delay_dsn – Delay DSN Generation"
description: "The delay dsn module allows delivery status notifications DS Ns to be sent to the purported sender of a message when that message has not yet been delivered By default no delay DS Ns are sent When enabled delay DS Ns are sent based on an exponential back off schedule..."
---

<a name="idp21119488"></a> 

The delay_dsn module allows delivery status notifications (DSNs) to be sent to the purported sender of a message, when that message has not yet been delivered.

By default, no delay DSNs are sent. When enabled, delay DSNs are sent based on an exponential back-off schedule. The schedule is independent of the schedule used for delivery attempts. Delay DSNs are sent as RFC 3464-compliant messages.

### <a name="idp21122576"></a> Configuration

Sending of delay DSNs and the schedules can be configured in various scopes. If further customization is required, there are a number of hooks available. These hooks can be used to achieve: different types of schedules, such as every N hours instead of exponential back-off; customization of the message content; and finer-grained control over to who delay DSNs are sent.

The following is an example configuration:

<a name="example.delay_dsn.3"></a> 


```
delay_dsn "delay_dsn1" { }

generate_delay_dsn = "true"

# don't generate delay dsns for mail from foo.com
domain "foo.com" {
  generate_delay_dsn = "false"
}

domain "bar.com" {
  # custom delay dsn schedule. send a delay dsn on 3 hours, then 9 hours
  # (6 hours after 3 hours), 21 hours (12 hours after 9 hours),
  # 45 hours (24 hours after 21 hours), then every 24 hours
  # (maximum interval).
  delay_dsn_retry_interval = 10800
  delay_dsn_max_retry_interval = 86400
}
```

### <a name="modules.delay_dsn.console"></a> Console Commands

The delay_dsn module can be controlled through the `ec_console`. The following command is available:

<dl class="variablelist">

<dt>delay_dsn:*`delay_dsn1`* show pending events</dt>

<dd>

This command lists all pending events.

</dd>

</dl>