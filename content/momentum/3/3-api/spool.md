---
lastUpdated: "03/26/2020"
title: "Spool-related Functions"
description: "Table of Contents ec spool ctx construct filename Create a file name for the specified message ec spool ctx create Create a spool context for a location on disk ec spool ctx enum messages Enumerate messages in a spool ec spool ctx filter open Access the spool in the specified..."
---


| Name                                                                                                                                                        | Description                                                                         |
|-------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| [ec_spool_ctx_construct_filename](/momentum/3/3-api/apis-ec-spool-ctx-construct-filename)                               | Create a file name for the specified message                                        |
| [ec_spool_ctx_create](/momentum/3/3-api/apis-ec-spool-ctx-create)                                                       | Create a spool context for a location on disk                                       |
| [ec_spool_ctx_enum_messages](/momentum/3/3-api/apis-ec-spool-ctx-enum-messages)                                         | Enumerate messages in a spool                                                       |
| [ec_spool_ctx_filter_open](/momentum/3/3-api/apis-ec-spool-ctx-filter-open)                                             | Access the spool in the specified way                                               |
| [ec_spool_ctx_get_spool_base](/momentum/3/3-api/apis-ec-spool-ctx-get-spool-base)                                       | Returns the spool base for a given spool context                                    |
| [ec_spool_ctx_import_message](/momentum/3/3-api/apis-ec-spool-ctx-import-message)                                       | import a message from a spool context into the system spool                         |
| [ec_spool_ctx_lock](/momentum/3/3-api/apis-ec-spool-ctx-lock)                                                           | Lock a spool context                                                                |
| [ec_spool_ctx_remove_mid](/momentum/3/3-api/apis-ec-spool-ctx-remove-mid)                                               | Remove the specified message part                                                   |
| [ec_spool_ctx_set_always_regenerate_message_ids](/momentum/3/3-api/apis-ec-spool-ctx-set-always-regenerate-message-ids) | Determine whether a spool context regenerates message ids on import                 |
| [ec_spool_ctx_set_max_retention](/momentum/3/3-api/apis-ec-spool-ctx-set-max-retention)                                 | set the maximum retention time for a spool context                                  |
| [ec_spool_ctx_set_suppress_trace_headers](/momentum/3/3-api/apis-ec-spool-ctx-set-suppress-trace-headers)               | Sets a spool context to disable the addition of trace headers                       |
| [ec_spool_ctx_spool_in](/momentum/3/3-api/apis-ec-spool-ctx-spool-in)                                                   | spool in a message with a given id, from a spool context                            |
| [ec_spool_ctx_swap_out_met](/momentum/3/3-api/apis-ec-spool-ctx-swap-out-met)                                           | Swap out everything about the message except for the body                           |
| [ec_spool_ctx_unlock](/momentum/3/3-api/apis-ec-spool-ctx-unlock)                                                       | Unlock a spool context. Note that it is not safe to unlock the global spool context |
| [ec_spool_in](/momentum/3/3-api/apis-ec-spool-in)                                                                       | Spool in message meta data from disk (deprecated)                                   |
| [ec_spool_in2](/momentum/3/3-api/apis-ec-spool-in-2)                                                                     | spool in message meta data from disk                                                |
| [ec_spool_in_depfd](/momentum/3/3-api/apis-ec-spool-in-depfd)                                                           | Spool in message meta data from disk (deprecated)                                   |
| [ec_swap_remove](/momentum/3/3-api/apis-ec-swap-remove)                                                                 | removes the message from the spool                                                  |
| [ec_swap_remove_meta](/momentum/3/3-api/apis-ec-swap-remove-meta)                                                       | removes meta data for the message from the IO layer                                 |
| [get_disk_queue_size](/momentum/3/3-api/apis-get-disk-queue-size)                                                       | Gets the number of messages on the disk queue                                       |
| [get_spool_name](/momentum/3/3-api/apis-get-spool-name-xml)                                                             | Get the spool name from the message ID                                              |
| [mid_to_spool_name](/momentum/3/3-api/apis-mid-to-spool-name-xml)                                                       | Get the spool name from the message ID                                              |
| [spool_disk_queue_state](/momentum/3/3-api/apis-spool-disk-queue-state)                                                 | Show the state of the queue on disk                                                 |
| [spool_in](/momentum/3/3-api/apis-spool-in)                                                                             | Spool in message meta data from disk (deprecated)                                   |
| [spool_in_depfd](/momentum/3/3-api/apis-spool-in-depfd)                                                                 | Spool in message meta data from disk (deprecated)                                   |
| [spool_name_to_mid](/momentum/3/3-api/apis-spool-name-to-mid)                                                           | Create a message ID                                                                 |
| [swap_out_multi](/momentum/3/3-api/apis-swap-out-multi)                                                                 | Swap out multiple messages                                                          |
