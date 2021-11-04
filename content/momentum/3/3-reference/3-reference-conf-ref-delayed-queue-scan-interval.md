---
lastUpdated: "03/26/2020"
title: "delayed_queue_scan_interval"
description: "delayed queue scan interval how often to call the maintainer for a domain delayed queue scan interval 15 The primary function of the delayed queue scan interval option is to determine how often to call the maintainer for a domain if there are messages on the active queue then it..."
---

<a name="conf.ref.delayed_queue_scan_interval"></a> 
## Name

delayed_queue_scan_interval — how often to call the maintainer for a domain

## Synopsis

`delayed_queue_scan_interval = 15`

<a name="idp8829520"></a> 
## Description

The primary function of the `delayed_queue_scan_interval` option is to determine how often to call the maintainer for a domain; if there are messages on the active queue, then it is called at least every delayed_queue_scan_interval; if all the messages are on the delayed queue, then the maintainer is scheduled for when the next attempt on the first delayed message is.

Additionally, when the maintainer is called, it will sweep any delayed messages that are ready to go onto the active queue, so if there are constantly active messages then `delayed_queue_scan_interval` controls how often delayed messages will get swept onto the active queue; this is how the option got its name, but it is not its most important function. This can be confusing because when the entire queue is delayed this option has no effect.

The default value for this option is `15`.

<a name="idp8834128"></a> 
## Scope

delayed_queue_scan_interval is valid in the global scope.