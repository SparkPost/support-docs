---
lastUpdated: "03/26/2020"
title: "mail_queue_check_vm_interval"
description: "mail queue check vm interval how often to apply memory management reduction on mail queues mail queue check vm interval 60 How often to apply memory management reduction on mail queues based on the configured memory utilization limits By default the system checks once a minute to see if too..."
---

<a name="conf.ref.mail_queue_check_vm_interval"></a> 
## Name

mail_queue_check_vm_interval — how often to apply memory management reduction on mail queues

## Synopsis

`mail_queue_check_vm_interval = 60`

<a name="idp25072976"></a> 
## Description

How often to apply memory management reduction on mail queues, based on the configured memory utilization limits.

By default, the system checks once a minute to see if too much memory is being used and attempts to swap out messages from the queues if usage is excessive.

The default value is `60`.

<a name="idp25076400"></a> 
## Scope

mail_queue_check_vm_interval is valid in the global scope.