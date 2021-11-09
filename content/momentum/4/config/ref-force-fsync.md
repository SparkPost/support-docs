---
lastUpdated: "03/26/2020"
title: "force_fsync"
description: "force fsync ensure that data is synced to disk on reception force fsync false force fsync true Upon receiving a message but before a 250 response is sent to the client confirming receipt of that message Momentum must write the message to the spool If the system does not invoke..."
---

<a name="conf.ref.force_fsync"></a> 
## Name

force_fsync — ensure that data is synced to disk on reception

## Synopsis

`force_fsync = false`

`force_fsync = true`

<a name="idp24601440"></a> 
## Description

Upon receiving a message, but before a 250 response is sent to the client confirming receipt of that message, Momentum must write the message to the spool. If the system does not invoke the `fsync` call, it cannot guarantee that the message has been completely journalled to permanent storage.

If this option is set to true, `fsync` (or `fdatasync` if available) will be called prior to returning a confirmation to the SMTP client. If it is false, the system will not.

Mail systems concerned about losing messages during a system crash should set this option to `true`

The default is `false`.

<a name="idp24607344"></a> 
## Scope

force_fsync is valid in the global scope.