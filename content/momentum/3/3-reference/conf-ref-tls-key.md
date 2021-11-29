---
lastUpdated: "03/26/2020"
title: "tls_key"
description: "tls key TLS key to use for outbound or inbound mail TLS Key path to key TLS Key specifies the location of the PEM encoded key associated with the certificate if the key is not contained within the certificate file Both TLS Certificate and TLS Key are optional and the..."
---

<a name="conf.ref.tls_key"></a> 
## Name

tls_key — TLS key to use for outbound or inbound mail

## Synopsis

`TLS_Key = "/path/to/key"`

<a name="idp12139200"></a> 
## Description

TLS_Key specifies the location of the PEM encoded key associated with the certificate if the key is not contained within the certificate file. Both TLS_Certificate and TLS_Key are optional and the default behavior is to not present a client certificate to the remote mail exchange at all.

<a name="idp12141104"></a> 
## Scope

`tls_key` is valid in the ecstream_listener, esmtp_listener, global, http_listener, listen, pathway, pathway_group and peer scopes.