---
lastUpdated: "03/26/2020"
title: "async_bounce_rendering"
description: "async bounce rendering which thread pool to use for bounce rendering Async Bounce Rendering true When a message fails to be delivered due to a timeout a 5 XX error from the remote MTA or a reject or ec reject in a Sieve script Momentum generates and injects a bounce..."
---

<a name="conf.ref.async_bounce_rendering"></a> 
## Name

async_bounce_rendering — which thread pool to use for bounce rendering

## Synopsis

`Async_Bounce_Rendering = true`

<a name="idp7499360"></a> 
## Description

When a message fails to be delivered due to a timeout, a 5XX error from the remote MTA or a `reject` or `ec_reject` in a Sieve script, Momentum generates and injects a bounce message. If async_bounce_rendering is true, this job is done in the IO thread pool, otherwise it gets done in the scheduler before returning control to the code that noted the bounce, namely the outbound SMTP, the Sieve script or the mail queue maintainer.

The default value for this option is `true`.

<a name="idp7503184"></a> 
## Scope

Async_Bounce_Rendering is valid in the global scope.

<a name="idp7504832"></a> 
## See Also

[reject](/momentum/3/3-reference/sieve-ref-reject)