---
lastUpdated: "03/26/2020"
title: "ecstream_port"
description: "ecstream port configure the port for ecstream deliveries ecstream port 1825 Configuration Change This feature is available as of version 3 2 When Momentum is set to perform delivery via ecstream this option sets the destination port that will be used The default value for this option is 1825 Example..."
---

<a name="conf.ref.ecstream_port"></a> 
## Name

ecstream_port — configure the port for ecstream deliveries

## Synopsis

`ecstream_port = 1825`

<a name="idp9439008"></a> 
## Description

**Configuration Change. ** This feature is available as of version 3.2.

When Momentum is set to [perform delivery via ecstream](/momentum/3/3-reference/3-reference-conf-ref-delivery-method), this option sets the *destination* port that will be used. The default value for this option is `1825`.

<a name="conf.ref.ecstream_port.example"></a> 


```
domain “gold.example.com” {
  delivery_method = "ECSTREAM"
  ecstream_port = 31337
}
```

<a name="idp9447792"></a> 
## Scope

ecstream_port is valid in the binding, binding_group, domain and global scopes.

<a name="idp9449472"></a> 
## See Also

[delivery_method](/momentum/3/3-reference/3-reference-conf-ref-delivery-method)