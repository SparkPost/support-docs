---
lastUpdated: "03/26/2020"
title: "tls_verified_peer_is_authorized"
description: "tls verified peer is authorized Marks requests that use a verified SSL Client certificate as being authorized TLS Verified Peer Is Authorized true false This option marks requests that use a verified SSL Client certificate as being authorized The default value is false tls verified peer is authorized is valid..."
---

<a name="config.tls_verified_peer_is_authorized"></a> 
## Name

tls_verified_peer_is_authorized — Marks requests that use a verified SSL Client certificate as being authorized

## Synopsis

`TLS_Verified_Peer_Is_Authorized = "true|false"`

<a name="idp27009728"></a> 
## Description

This option marks requests that use a verified SSL Client certificate as being authorized.

The default value is `false`.

<a name="idp27012528"></a> 
## Scope

`tls_verified_peer_is_authorized` is valid in the http_listener, listen, pathway, and peer scopes.