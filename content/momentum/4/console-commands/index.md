---
lastUpdated: "02/09/2021"
title: "Category File"
type: "custom"
name: "Non-Module-Specific Console Commands"
description: "This section documents all the non module specific console commands Module specific console commands are documented with their module See Chapter 71 Modules Reference Preceding a command with xml will output the results in XML format..."
---


| Name                                                                                | Description                                                                       |
|-------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| [active](/momentum/4/console-commands/active)                                               | show domains with active queue size bigger than threshold                         |
| [authz id](/momentum/4/console-commands/authz-id)                                           | display the id of the current user                                                |
| [authz roles list](/momentum/4/console-commands/authz-roles-list)                           | display the currently defined roles                                               |
| [binding active](/momentum/4/console-commands/binding-active)                               | show domains with active queue size bigger than threshold on a specified binding  |
| [binding delayed](/momentum/4/console-commands/binding-delayed)                             | show domains with delayed queue size bigger than threshold on a specified binding |
| [binding fail domain](/momentum/4/console-commands/binding-fail-domain)                     | fail messages for a domain on a binding with a bounce message                     |
| [binding fail domain quiet](/momentum/4/console-commands/binding-fail-domain-quiet)         | fail messages for a domain on a binding without generating bounces                |
| [binding flush domain](/momentum/4/console-commands/binding-flush-domain)                   | perform delivery attempt on delayed queue of a domain on a binding                |
| [binding summary](/momentum/4/console-commands/binding-summary)                             | show binding statistics                                                           |
| [cache list](/momentum/4/console-commands/cache-list)                                       | list all caches along with their associated attributes                            |
| [cache stat](/momentum/4/console-commands/cache-stat)                                       | show detailed cache statistics for the specified cache                            |
| [cache stats](/momentum/4/console-commands/cache-stats)                                     | show cache statistics                                                             |
| [config](/momentum/4/console-commands/config)                                               | online configuration tuning for Momentum                                          |
| [count](/momentum/4/console-commands/count)                                                 | count open connections                                                            |
| [counter](/momentum/4/console-commands/counter)                                             | manage counters                                                                   |
| [delayed](/momentum/4/console-commands/delayed)                                             | show domains with delayed queue size bigger than threshold                        |
| [dig](/momentum/4/console-commands/dig)                                                     | submit a domain for DNS MX query                                                  |
| [dns_cache](/momentum/4/console-commands/dns-cache)                                         | manage Momentum's DNS cache                                                       |
| [domain](/momentum/4/console-commands/domain)                                               | show domain statistics                                                            |
| [domain all](/momentum/4/console-commands/domain-all)                                       | show statistics for all domains                                                   |
| [fail domain](/momentum/4/console-commands/fail-domain)                                     | fail messages for a domain with a bounce message                                  |
| [fail domain quiet](/momentum/4/console-commands/fail-domain-quiet)                         | fail messages for a domain without generating bounces                             |
| [fingerprint cache summary](/momentum/4/console-commands/fingerprint-cache-summary)         | display the current cache size                                                    |
| [fingerprint rejection summary](/momentum/4/console-commands/fingerprint-rejection-summary) | display details related to the current inbound connection                         |
| [flush domain](/momentum/4/console-commands/flush-domain)                                   | perform delivery attempt on delayed queue of a domain                             |
| [help](/momentum/4/console-commands/help)                                                   | show help information for console commands                                        |
| [hot_domains list](/momentum/4/console-commands/hot-domains-list)                                        | show how hot domains are spread across maintainer threads                                        |
| [hot_domains list json](/momentum/4/console-commands/hot-domains-list-json)                                   | show how hot domains are spread across maintainer threads (JSON format)                                        |
| [mailq](/momentum/4/console-commands/4-mailq)                                                 | show the status of the mail queues                                                |
| [memory](/momentum/4/console-commands/4-memory)                                               | report detailed memory usage                                                      |
| [message details](/momentum/4/console-commands/message-details)                             | show detailed message information                                                 |
| [message fail](/momentum/4/console-commands/message-fail)                                   | fail a message                                                                    |
| [message fail quiet](/momentum/4/console-commands/message-fail-quiet)                       | fail a message and do not create a non-delivery receipt (NDR)                     |
| [message retry](/momentum/4/console-commands/message-retry)                                 | perform an immediate delivery attempt on a message                                |
| [module](/momentum/4/console-commands/4-module)                                               | manage loaded modules online                                                      |
| [\pager](/momentum/4/console-commands/pager)                                                | Page output of long console commands in the console.                              |
| [paniclog](/momentum/4/console-commands/paniclog)                                           | show last several entries written to paniclog                                     |
| [pid](/momentum/4/console-commands/pid)                                                     | show process id of Momentum                                                       |
| [rebind](/momentum/4/console-commands/rebind)                                               | rebind the messages in a binding or domain                                        |
| [refresh domain](/momentum/4/console-commands/refresh-domain)                               | refresh the DNS information for a domain                                          |
| [reopen logs](/momentum/4/console-commands/reopen-logs)                                     | close and open log files                                                          |
| [reroute queue](/momentum/4/console-commands/reroute-queue)                                 | move messages from queues of one domain to queues of the other                    |
| [show inbound](/momentum/4/console-commands/show-inbound)                                   | show all inbound connections                                                      |
| [show outbound](/momentum/4/console-commands/show-outbound)                                 | show all outbound connections                                                     |
| [showqueue](/momentum/4/console-commands/showqueue)                                         | show queue information                                                            |
| [shutdown](/momentum/4/console-commands/shutdown)                                           | shutdown Momentum                                                                 |
| [signing_stats](/momentum/4/console-commands/signing-stats)                                 | show DK/DKIM signing stats                                                        |
| [signing_stats reset](/momentum/4/console-commands/signing-stats-reset)                     | reset signing stats                                                               |
| [sp_async](/momentum/4/console-commands/sp-async)                                           | Access the asynchronous I/O subsystem                                             |
| [spool import](/momentum/4/console-commands/spool-import)                                   | import an alternative spool                                                       |
| [spool import_poll](/momentum/4/console-commands/spool-import-poll)                         | check the status of a spool that is being imported                                |
| [spool_in](/momentum/4/console-commands/spool-in)                                           | read a message from the spool to the mail queue                                   |
| [summary](/momentum/4/console-commands/summary)                                             | show global metrics                                                               |
| [summary reset](/momentum/4/console-commands/summary-reset)                                 | reset summary statistics                                                          |
| [sysinfo](/momentum/4/console-commands/sysinfo)                                             | show system information                                                           |
| [threads](/momentum/4/console-commands/threads)                                             | Display summary statistics for thread pools                                       |
| [tls](/momentum/4/console-commands/tls)                                                     | manage TLS cache used by Momentum                                                 |
| [trace smtp](/momentum/4/console-commands/trace-smtp)                                       | trace smtp transactions                                                           |
| [unlink stats](/momentum/4/console-commands/unlink-stats)                                   | show statistics of removing messages from the disk                                |
| [version](/momentum/4/console-commands/version)                                             | show version information of Momentum                                              |
| [write config](/momentum/4/console-commands/write-config)                                   | display current running configuration                                             |

This section documents all the non-module-specific console commands. Module-specific console commands are documented with their module. See [*Modules Reference*](/momentum/4/modules/) .

Preceding a command with `xml` will output the results in XML format.
