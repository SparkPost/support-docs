---
lastUpdated: "03/26/2020"
title: "events_per_iter"
description: "events per iter employ when using a concurrency greater than 1 events per iter 0 This option may be used when using a concurrency greater than 1 a threaded accept When running in this mode accept is called on a secondary thread specified by the pool name and the accepted..."
---

<a name="conf.ref.events_per_iter"></a> 
## Name

events_per_iter — employ when using a concurrency greater than 1.

## Synopsis

`events_per_iter = 0`

<a name="idp24533904"></a> 
## Description

This option may be used when using a concurrency greater than 1 (a threaded accept). When running in this mode, `accept()` is called on a secondary thread (specified by the `pool_name`) and the accepted connection put on a queue to be dispatched from the main thread. `events_per_iter` limits the number of items that can be dispatched in a single scheduler iteration. If unspecified, or less than 1, then `events_per_iter` will be treated as though it was set to 1.

The default value is `0`.

<a name="idp24539136"></a> 
## Scope

events_per_iter is valid in the control_listener, eccluster_listener, ecstream_listener, esmtp_listener, http_listener, listen, and xmpp_listener scopes.

<a name="idp24541088"></a> 
## See Also

[pool_name](/momentum/4/esmtp-listener#esmtp_listener.config)