---
lastUpdated: "03/26/2020"
title: "disable_nagle_algorithm"
description: "disable nagle algorithm disable nagle algorithm on sockets disable nagle algorithm false Momentum can be configured to disable the Nagle algorithm on the TCP connections it manages The default for this option is false This is an advanced option Thorough testing is recommended before deployment in a production environment disable..."
---

<a name="conf.ref.disable_nagle_algorithm"></a> 
## Name

disable_nagle_algorithm — disable nagle algorithm on sockets

## Synopsis

`disable_nagle_algorithm = false`

<a name="idp24246976"></a> 
## Description

Momentum can be configured to disable the Nagle algorithm on the TCP connections it manages.

The default for this option is `false`.

### Warning

This is an advanced option. Thorough testing is recommended before deployment in a production environment.

<a name="idp24250784"></a> 
## Scope

`disable_nagle_algorithm` is valid in the eccluster_listener, ecstream_listener, esmtp_listener, global, http_listener and listen scopes.

`disable_nagle_algorithm` is valid in the ecstream_listener, esmtp_listener, global and listen scopes.