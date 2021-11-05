---
lastUpdated: "03/26/2020"
title: "remote_smtp_port"
description: "remote smtp port set the port to be used for SMTP deliveries Remote SMTP Port 25 This will set the port to which outbound SMTP connections are attempted It can be set globally and overridden at the domain level The default value for this option is 25 remote smtp port..."
---

<a name="conf.ref.remote_smtp_port"></a> 
## Name

remote_smtp_port — set the port to be used for SMTP deliveries

## Synopsis

`Remote_SMTP_Port = "25"`

<a name="idp25891008"></a> 
## Description

This will set the port to which outbound SMTP connections are attempted. It can be set globally and overridden at the domain level. The default value for this option is `25`.

<a name="idp25893424"></a> 
## Scope

remote_smtp_port is valid in the binding, binding_group, domain and global scopes.