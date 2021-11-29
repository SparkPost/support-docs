---
lastUpdated: "03/26/2020"
title: "Event Functions"
description: "The event system in Momentum tracks both IO and time based events using the event structure For sample code and a detailed discussion of events see Section 1 3 3 The Event API..."
---


| Name                                                                                                                  | Description                                                                          |
|-----------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| [build_event](/momentum/3/3-api/apis-build-event)                                 | Create an event                                                                      |
| [build_event_from_now_f](/momentum/3/3-api/apis-build-event-from-now-f)           | Create a timed event                                                                 |
| [build_fd_event](/momentum/3/3-api/apis-build-fd-event)                           | Create an event event relating to an open file descriptor                            |
| [event_close](/momentum/3/3-api/apis-event-close)                                 | Close the specified event                                                            |
| [event_free](/momentum/3/3-api/apis-event-free)                                   | Free an event                                                                        |
| [event_io_printf](/momentum/3/3-api/apis-event-io-printf)                         | Initiate a formatted write to an event                                               |
| [event_io_read](/momentum/3/3-api/apis-event-io-read)                             | Initiate or continue a read operation for a fixed length                             |
| [event_io_retry](/momentum/3/3-api/apis-event-io-retry)                           | Continue a pending IO operation                                                      |
| [event_io_state_clean](/momentum/3/3-api/apis-event-io-state-clean)               | Release resources held in an event_io_state structure                                |
| [event_io_write](/momentum/3/3-api/apis-event-io-write)                           | initiate a write to an event                                                         |
| [event_io_write_string](/momentum/3/3-api/apis-event-io-write-string)             | Initiate a write of the contents of a string to an event                             |
| [event_post_dup](/momentum/3/3-api/apis-event-post-dup)                           | Duplicate an event                                                                   |
| [event_read](/momentum/3/3-api/apis-event-read)                                   | Read an event                                                                        |
| [float_event](/momentum/3/3-api/apis-float-event)                                 | Float an event                                                                       |
| [get_event_by_fd](/momentum/3/3-api/apis-get-event-by-fd)                         | Retrieve an event                                                                    |
| [get_fd_event_set](/momentum/3/3-api/apis-get-fd-event-set)                       | Retrieve an event set                                                                |
| [get_floating_event_set](/momentum/3/3-api/apis-get-floating-event-set)           | Retrieve a floating event set                                                        |
| [clear_event_by_fd](/momentum/3/3-api/apis-clear-event-by-fd)                     | Clear the event related to the file descriptor                                       |
| [clear_timed_event](/momentum/3/3-api/apis-clear-timed-event)                     | Clear the specified timed event                                                      |
| [schedule_event](/momentum/3/3-api/apis-schedule-event)                           | Schedule an event from any thread                                                    |
| [schedule_event_and_dispatch](/momentum/3/3-api/apis-schedule-event-and-dispatch) | Schedule an event from any thread, and optionally dispatch the callback              |
| [set_delayed_queue_event](/momentum/3/3-api/apis-set-delayed-queue-event)         | Schedule a mail queue maintainer for this mail_queue                                 |
| [sp_async_fail](/momentum/3/3-api/apis-sp-async-fail)                             | Fail a message (deprecated)                                                          |
| [sp_async_schedule_event](/momentum/3/3-api/apis-sp-async-schedule-event)         | Schedule an asynchronous event from any thread, and optionally dispatch the callback |
| [sp_make_swap_out_job](/momentum/3/3-api/apis-sp-make-swap-out-job)               | Create and return a job that will manage swap out processing                         |
| [sp_sync_close](/momentum/3/3-api/apis-sp-sync-close)                             | Close the specified file descriptor, and optionally dispatch the callback            |

The event system in Momentum tracks both IO and time-based events using the [event structure](/momentum/3/3-api/structs-event). For sample code and a detailed discussion of events see [“The Event API”](/momentum/3/3-api/arch-primary-apis#arch.event).