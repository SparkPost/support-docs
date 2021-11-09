---
lastUpdated: "03/26/2020"
title: "suppress_spool – Deferred Message Spooling"
description: "The primary bottleneck for most MT As is spooling messages to disk To be fully RFC compliant an MTA must complete writing a message to disk before they communicate to the sender that it has been received The purpose of this is so that in the event of crash or..."
---

<a name="idp21532784"></a> 

The primary bottleneck for most MTAs is spooling messages to disk. To be fully RFC compliant, an MTA must complete writing a message to disk before they communicate to the sender that it has been received. The purpose of this is so that in the event of crash or power failure, the MTA will not lose any messages.

For many outbound-oriented mailers and ESPs, this safety can be pushed back up into their application. If messages can be regenerated dynamically, then in the event of a crash it may be sufficent simply to know which messages have been delivered, so that the queue can be emptied and messages regenerated.

In this case, an administrator can gain considerable performance benefit from deferring spool attempts with the `suppress_spool` module. The `suppress_spool` module works by completely avoiding writing a message to disk until one of two things happens:

*   The configured threshold of retries in the `suppress_spool` module is reached.

*   A memory based policy decision (notably [max_resident_active_queue](/momentum/3/3-reference/3-reference-conf-ref-max-resident-active-queue)) causes a forced spool write.

### <a name="idp21540512"></a> Configuration

<a name="example.suppress_spool3"></a> 


```
_unsafe_spool = true
suppress_spool "suppress_spool" {
  num_retries = 2
}
```

**Configuration Change. ** In version 3.0, this module is loaded automatically as required and does not need to be explicitly included.

The `_unsafe_spool` line disables Momentum's internal protections to guarantee that a message is actually written to disk before acceptance. The module stanza loads the `suppress_spool` module and instructs it to only spool messages which have had three unsuccessful delivery attempts, namely, those that have been retried twice.

### Warning

This module is dangerous and can result in data loss if you experience a crash.