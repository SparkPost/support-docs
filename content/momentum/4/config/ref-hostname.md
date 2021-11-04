---
lastUpdated: "03/26/2020"
title: "hostname"
description: "hostname override the system configured hostname hostname my alternate host name This configuration directive is used to override the default hostname as determined by the gethostname system call If this value is unset Momentum will use the system's hostname as the default hostname is valid in the global scope..."
---

<a name="conf.ref.hostname"></a> 
## Name

hostname — override the system configured hostname

## Synopsis

`hostname = "my.alternate.host.name"`

<a name="idp24769120"></a> 
## Description

This configuration directive is used to override the default hostname as determined by the `gethostname` system call. If this value is unset, Momentum will use the system's hostname as the default.

<a name="idp24771552"></a> 
## Scope

hostname is valid in the global scope.