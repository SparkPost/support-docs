---
lastUpdated: "03/26/2020"
title: "max_recipients_per_connection"
description: "max recipients per connection maximum number of recipients to send on a connection Max Recipients Per Connection 0 If set to 0 the default then no maximum limit will be enforced otherwise it specifies the maximum number of RCPT TO commands that can be used on a given connection This..."
---

<a name="conf.ref.max_recipients_per_connection"></a> 
## Name

max_recipients_per_connection — maximum number of recipients to send on a connection

## Synopsis

`Max_Recipients_Per_Connection = 0`

<a name="idp10208144"></a> 
## Description

If set to `0` (the default), then no maximum limit will be enforced, otherwise, it specifies the maximum number of RCPT TO commands that can be used on a given connection. This is similar to `Max_Deliveries_Per_Connection` but takes into account multi-recipient outbound mail.

<a name="idp10211184"></a> 
## Scope

max_recipients_per_connection is valid in the binding, binding_group, domain, listener, listen and global scopes.

<a name="idp10213600"></a> 
## See Also

[max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection)