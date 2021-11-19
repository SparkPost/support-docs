---
lastUpdated: "03/26/2020"
title: "Scheduler Functions"
description: "Table of Contents is scheduler thread Determines whether or not the thread that calls this function is a scheduler thread ping scheduler Pings the master scheduler thread scheduler active queue reinsert Reinsert a delivery construct's messages into the active queue for re processing scheduler close connection Have the scheduler clean..."
---


| Name                                                                                                                          | Description                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [is_scheduler_thread](/momentum/3/3-api/apis-is-scheduler-thread)                         | Determines whether or not the thread that calls this function is a scheduler thread |
| [ping_scheduler](/momentum/3/3-api/apis-ping-scheduler)                                   | Pings the master scheduler thread                                                   |
| [scheduler_active_queue_reinsert](/momentum/3/3-api/apis-scheduler-active-queue-reinsert) | Reinsert a delivery construct's messages into the active queue, for re-processing   |
| [scheduler_close_connection](/momentum/3/3-api/apis-scheduler-close-connection)           | Have the scheduler clean up a connection                                            |
| [scheduler_recurrent_func_add](/momentum/3/3-api/apis-scheduler-recurrent-func-add)       | Registers a recurrent function and a closure for the master scheduler thread        |
| [scheduler_register](/momentum/3/3-api/apis-scheduler-register)                           | Registers a scheduler with the system                                               |
| [scheduler_reuse_connection](/momentum/3/3-api/apis-scheduler-reuse-connection)           | Have the scheduler re-use the connection                                            |
