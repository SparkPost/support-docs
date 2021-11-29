---
lastUpdated: "03/26/2020"
title: "ec_thread_pool_get_queue_size"
description: "ec thread pool get queue size get the number of jobs queued against a jobclass ec thread pool get queue size jobclass This action returns the number of jobs currently queued against the named jobclass It can be run in any phase One suggested use case is turning away incoming..."
---

<a name="sieve.ref.ec_thread_pool_get_queue_size"></a> 
## Name

ec_thread_pool_get_queue_size — get the number of jobs queued against a jobclass

## Synopsis

`ec_thread_pool_get_queue_size` { *`jobclass`* }

<a name="idp30645504"></a> 
## Description

This action returns the number of jobs currently queued against the named jobclass. It can be run in any phase. One suggested use case is turning away incoming mail with a 4XX code when an antivirus module's queue of messages to scan grows beyond some maximum size.