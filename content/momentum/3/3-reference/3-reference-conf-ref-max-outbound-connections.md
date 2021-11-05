---
lastUpdated: "03/26/2020"
title: "max_outbound_connections"
description: "max outbound connections set the maximum number of outbound connections for a domain Max Outbound Connections 32 This will limit the number of outbound connections to an individual domain to the specified value It can be set at a global level which enforces the limit on every domain in the..."
---

<a name="conf.ref.max_outbound_connections"></a> 
## Name

max_outbound_connections — set the maximum number of outbound connections for a domain

## Synopsis

`Max_Outbound_Connections = 32`

<a name="idp10162720"></a> 
## Description

This will limit the number of outbound connections to an individual domain to the specified value. It can be set at a global level, which enforces the limit on every domain in the system, or at a binding, binding_group or domain level. When this option is set in the domain, binding or binding_group scope the global value is overridden and the usual fallback semantics apply. The default value for this option is `32`. *Note*: When used in the Host scope, `Max_Outbound_Connections` limits the number of connections to the specified IP address.

<a name="idp10166176"></a> 
## Usage Example

Find below an example of how this configuration option might be used:

```
Max_Outbound_Connections = 30

Domain "example.com" {
  dkim = "enabled"
}

Binding_Group "group1" {

  Max_Outbound_Connections = 5

  Binding "example" {

    Bind_Address = "10.10.10.10"
    Max_Outbound_Connections = 15

    Domain "example.com" {
      #some other options
      ...
    }
  }

}
```

When connecting to `example.com` from the `example` binding, `Max_Outbound_Connections` will be `15`, when connecting from another binding in the `group1` group it will be `5` and when connecting from a binding that is not in the `group1` group it will be 30.

In some circumstances it may make sense to declare a domain within a binding and also declare it globally—when you want interaction with that domain to be different globally versus in a particular binding. For example, with the following configuration customers on the `yahoofriends` binding are allowed to use 30 connections to yahoo.com, customers on other bindings are allowed to use only 10 connections per binding to yahoo.com, and connections to domains other than yahoo.com are unrestricted.

```
Binding "yahoofriends" {
  Domain "yahoo.com" {
    Max_Outbound_Connections = 30
  }
}

Domain "yahoo.com" {
  Max_Outbound_Connections = 10
}
```
<a name="idp10174720"></a> 
### `Max_Outbound_Connections` in the `host` Scope

Note that the usual semantics do not apply with this option in the `host` scope. If you declare a `host` scope and do not define `Max_Outbound_Connections`, its value will be `-1` and not the fallback value of `Max_Outbound_Connections` in an encompassing scope.

Given the following configuration file:

```
Max_Outbound_Connections = 32
host "example.com" {}
```

You will see the following results from the system console:

```
09:45:58 /tmp/2025> config eval max_outbound_connections
Max_Outbound_Connections = 32
09:46:29 /tmp/2025> config eval host example.com max_outbound_connections
Max_Outbound_Connections = -1
```

A setting of `-1` means that unlimited connections are allowed.

<a name="idp10182128"></a> 
## Scope

max_outbound_connections is valid in the binding, binding_group, domain, global and host scopes.

<a name="idp10183824"></a> 
## See Also

[host](/momentum/3/3-reference/3-reference-conf-ref-host), [“MultiVIP© Interfaces”](/momentum/3/3-reference/operations-multivip), [server_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-server-max-outbound-connections), [“Configuration Scopes and Fallback”](/momentum/3/3-reference/3-reference-ecelerity-conf-fallback), [scope_max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-scope-max-outbound-connections)