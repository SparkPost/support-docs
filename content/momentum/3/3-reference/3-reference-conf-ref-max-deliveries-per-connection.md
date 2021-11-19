---
lastUpdated: "03/26/2020"
title: "max_deliveries_per_connection"
description: "max deliveries per connection maximum number of messages to deliver before closing a connection Max Deliveries Per Connection 0 The maximum number of messages that will be sent over a single SMTP connection This option limits successful deliveries only If you wish to limit the number of attempted RCPT TO..."
---

<a name="conf.ref.max_deliveries_per_connection"></a> 
## Name

max_deliveries_per_connection — maximum number of messages to deliver before closing a connection

## Synopsis

`Max_Deliveries_Per_Connection = 0`

<a name="idp10133616"></a> 
## Description

The maximum number of messages that will be sent over a single SMTP connection. This option limits *successful* deliveries only. If you wish to limit the number of attempted RCPT TO commands that are sent, use `max_recipients_per_connection`. `Max_Deliveries_Per_Connection` is configurable globally, in the binding scope and on a per-domain basis. If set to `0` (the default), then no maximum limit will be enforced.

<a name="idp10137328"></a> 
## Scope

max_deliveries_per_connection is valid in the binding, binding_group, domain and global scopes.

<a name="idp10139024"></a> 
## See Also

[max_recipients_per_connection](/momentum/3/3-reference/conf-ref-max-recipients-per-connection)