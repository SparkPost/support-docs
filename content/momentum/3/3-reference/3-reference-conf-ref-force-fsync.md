---
lastUpdated: "03/26/2020"
title: "force_fsync"
description: "force fsync ensure that data is synced to disk on reception Force Fsync false Force Fsync true Upon receiving a message but before a 250 response is sent to the client confirming receipt of that message Momentum must write the message to the spool If the system does not invoke..."
---

<a name="conf.ref.force_fsync"></a> 
## Name

force_fsync — ensure that data is synced to disk on reception

## Synopsis

`Force_Fsync = false`

`Force_Fsync = true`

<a name="idp9568976"></a> 
## Description

Upon receiving a message, but before a 250 response is sent to the client confirming receipt of that message, Momentum must write the message to the spool. If the system does not invoke the `fsync` call, it cannot guarantee that the message has been completely journalled to permanent storage.

If this option is set to true, `fsync` (or `fdatasync` if available) will be called prior to returning a confirmation to the SMTP client. If it is false, the system will not.

Mail systems concerned about losing messages during a system crash should set this option to `true`

The default is `false`.

<a name="idp9574560"></a> 
## Scope

force_fsync is valid in the global scope.