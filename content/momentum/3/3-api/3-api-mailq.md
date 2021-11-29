---
lastUpdated: "03/26/2020"
title: "Mail Queue Functions"
description: "Table of Contents mail queue maintain mail queue maintain is the default implementation if the mail queue maintain hook mailq get next active mailq get next active is an internal function called by the default implementation if the mailq get next active hook mail queue maintain domain mail queue maintain..."
---


| Name                                                                                                                                    | Description                                                                                                            |
|-----------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| [__mail_queue_maintain](/momentum/3/3-api/apis-mail-queue-maintain)                               | __mail_queue_maintain is the default implementation if the __mail_queue_maintain hook                                  |
| [__mailq_get_next_active](/momentum/3/3-api/apis-mailq-get-next-active)                           | __mailq_get_next_active is an internal function called by the default implementation if the mailq_get_next_active hook |
| [_mail_queue_maintain_domain](/momentum/3/3-api/apis-mail-queue-maintain-domain)                   | _mail_queue_maintain_domain is an internal function that is called if no mail_queue_maintain_domain hook is registered |
| [ec_mailq_dequeue_live_message](/momentum/3/3-api/apis-ec-mailq-dequeue-live-message)               | Removes a message from the mail queues and returns it if found                                                         |
| [ec_mailq_enqueue_sam](/momentum/3/3-api/apis-ec-mailq-enqueue-sam)                                 | Enqueue multiple messages in a batch "atomically", prior to running mail queue maintainers                             |
| [ec_mailq_find_live_message](/momentum/3/3-api/apis-ec-mailq-find-live-message)                     | Finds a message in the message queues and returns it                                                                   |
| [ec_mailq_first_delayed](/momentum/3/3-api/apis-ec-mailq-first-delayed)                             | returns the first delayed message in the supplied mail queue                                                           |
| [ec_mailq_get_mid](/momentum/3/3-api/apis-ec-mailq-get-mid)                                         | Returns a message by message_id                                                                                        |
| [ec_mailq_get_pending_enqueues](/momentum/3/3-api/apis-ec-mailq-get-pending-enqueues)               | Fetch the number of pending enqueue requests                                                                           |
| [ec_mailq_insert_active](/momentum/3/3-api/apis-ec-mailq-insert-active)                             | Insert a message into the active queue                                                                                 |
| [ec_mailq_message_requeue](/momentum/3/3-api/apis-ec-mailq-message-requeue)                         | Re-enqueues a message after a delivery attempt                                                                         |
| [ec_mailq_set_next_attempt_prep_quick](/momentum/3/3-api/apis-ec-mailq-set-next-attempt-prep-quick) | pre-calculates next attempt times                                                                                      |
| [__get_global_mail_queue](/momentum/3/3-api/apis-get-global-mail-queue)                             | Allocates memory and initializes the global mail queue                                                                 |
| [mail_queue_active_queue_for_binding](/momentum/3/3-api/apis-mail-queue-active-queue-for-binding)   | Returns the active queue for a binding                                                                                 |
| [mail_queue_delay_domain](/momentum/3/3-api/apis-mail-queue-delay-domain)                           | Add the specified domain record to the delayed queue                                                                   |
| [mail_queue_delayed_size](/momentum/3/3-api/apis-mail-queue-delayed-size)                           | Get the size of a delayed queue                                                                                        |
| [mail_queue_purge_domain_binding](/momentum/3/3-api/apis-mail-queue-purge-domain-binding)           | Fail all messages for a binding/domain with a given status code                                                        |
| [mail_queue_size](/momentum/3/3-api/apis-mail-queue-size)                                           | Get the size of a mail queue                                                                                           |
