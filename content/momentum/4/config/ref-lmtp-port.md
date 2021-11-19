---
lastUpdated: "03/26/2020"
title: "lmtp_port"
description: "lmtp port configure the port for LMTP deliveries LMTP Port 2003 If Momentum is set to perform local delivery via LMTP this directive allows the remote port for LMTP delivery to be specified The default value for this option is 2003 lmtp port is valid in the binding binding group..."
---

<a name="conf.ref.lmtp_port"></a> 
## Name

lmtp_port — configure the port for LMTP deliveries

## Synopsis

`LMTP_Port = 2003`

<a name="idp25021232"></a> 
## Description

If Momentum is set to [perform local delivery via LMTP](/momentum/4/config/ref-delivery-method), this directive allows the remote port for LMTP delivery to be specified. The default value for this option is `2003`.

<a name="idp25024352"></a> 
## Scope

lmtp_port is valid in the binding, binding_group, domain and global scopes.

<a name="idp25026224"></a> 
## See Also

[delivery_method](/momentum/4/config/ref-delivery-method)