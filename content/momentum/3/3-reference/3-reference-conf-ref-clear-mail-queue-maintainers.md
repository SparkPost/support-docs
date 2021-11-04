---
lastUpdated: "03/26/2020"
title: "clear_mail_queue_maintainers"
description: "clear mail queue maintainers reschedule the mail queue maintainer clear mail queue maintainers false Reschedule the mail queue maintainer The default value for this option is false Configuration Change As of version 3 6 the default value for this option is true In some circumstances you may wish to set..."
---

<a name="conf.ref.clear_mail_queue_maintainers"></a> 
## Name

clear_mail_queue_maintainers — reschedule the mail queue maintainer

## Synopsis

`clear_mail_queue_maintainers = false`

<a name="idp8501952"></a> 
## Description

Reschedule the mail queue maintainer. The default value for this option is `false`.

**Configuration Change. ** As of version 3.6, the default value for this option is `true`.

In some circumstances you may wish to set this option to `true`. Suppose that you have mail in the delayed queue that's been there for a while, and the retry schedule is such that the next maintenance run will be in two hours time. Subsequently, you have a new message delivery attempt that fails transiently, and that message goes to the delayed queue and is set, for example, to be retried in 1200 seconds time. The system will need to reschedule the maintainer so that it runs in 1200 seconds. The default behavior is to schedule a new event for 1200 seconds, and to leave the existing one that will occur in two hours time. The `clear_mail_queue_maintainers` option will remove the existing two hour event and just schedule the 1200 second event. This prevents you from ending up with a lot of redundant maintainer events scheduled for a given domain, which could potentially cause abnormally high memory usage.

<a name="idp8508336"></a> 
## Scope

This option is valid in the global scope.