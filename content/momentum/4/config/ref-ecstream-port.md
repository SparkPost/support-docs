---
lastUpdated: "03/26/2020"
title: "ecstream_port"
description: "ecstream port configure the port for ecstream deliveries ecstream port 1825 When Momentum is set to perform delivery via ecstream this option sets the destination port that will be used The default value is 1825 Example 72 6 ecstream port example ecstream port is valid in the binding binding group..."
---

<a name="conf.ref.ecstream_port"></a> 
## Name

ecstream_port — configure the port for ecstream deliveries

## Synopsis

`ecstream_port = 1825`

<a name="idp24417632"></a> 
## Description

When Momentum is set to [perform delivery via ecstream](/momentum/4/config/ref-delivery-method), this option sets the *destination* port that will be used. The default value is `1825`.

<a name="conf.ref.ecstream_port.example"></a> 


```
domain “gold.example.com” {
  delivery_method = "ECSTREAM"
  ecstream_port = 31337
}
```

<a name="idp24423456"></a> 
## Scope

ecstream_port is valid in the binding, binding_group, domain, and global scopes.

<a name="idp24425328"></a> 
## See Also

[delivery_method](/momentum/4/config/ref-delivery-method)