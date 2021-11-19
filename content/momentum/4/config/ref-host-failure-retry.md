---
lastUpdated: "03/26/2020"
title: "host_failure_retry"
description: "host failure retry time to wait before attempting a retry Host Failure Retry 120 The amount of time in seconds to wait after a connect or protocol failure on a connection to a specific IP address before attempting deliveries to that IP address again The default value is 120 host..."
---

<a name="conf.ref.host_failure_retry"></a> 
## Name

host_failure_retry — time to wait before attempting a retry

## Synopsis

`Host_Failure_Retry = 120`

<a name="idp24781328"></a> 
## Description

The amount of time in seconds to wait after a connect or protocol failure on a connection to a specific IP address before attempting deliveries to that IP address again. The default value is `120`.

<a name="idp24783776"></a> 
## Scope

host_failure_retry is valid in the domain and global scopes.