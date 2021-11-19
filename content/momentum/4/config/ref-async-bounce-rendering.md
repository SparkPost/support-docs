---
lastUpdated: "03/26/2020"
title: "async_bounce_rendering"
description: "async bounce rendering which thread pool to use for bounce rendering async bounce rendering true When a message fails to be delivered due to a timeout or a 5 XX error from the remote MTA Momentum generates and injects a bounce message If async bounce rendering is true this job..."
---

<a name="conf.ref.async_bounce_rendering"></a> 
## Name

async_bounce_rendering — which thread pool to use for bounce rendering

## Synopsis

`async_bounce_rendering = true`

<a name="idp23442048"></a> 
## Description

When a message fails to be delivered due to a timeout or a 5XX error from the remote MTA, Momentum generates and injects a bounce message. If `async_bounce_rendering` is true, this job is done in the IO thread pool, otherwise it gets done in the scheduler before returning control to the code that noted the bounce, namely the outbound SMTP or the mail queue maintainer.

The default value is `true`.

<a name="idp23445552"></a> 
## Scope

async_bounce_rendering is valid in the global scope.