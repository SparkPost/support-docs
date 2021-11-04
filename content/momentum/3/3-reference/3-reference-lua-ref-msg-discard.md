---
lastUpdated: "03/26/2020"
title: "msg:discard"
description: "msg discard Silently discard a message msg discard reason Silently discard a message The message will appear to the sender to have been accepted and delivered no error status or out of band delivery notification will occur but the message will be logged as a rejection Unlike its Sieve counterpart..."
---

<a name="lua.ref.msg_discard"></a> 
## Name

msg:discard — Silently discard a message

<a name="idp25429632"></a> 
## Synopsis

`msg:discard(reason);`

`reason: string, optional`<a name="idp25432320"></a> 
## Description

Silently discard a message. The message will appear to the sender to have been accepted and delivered; no error status or out-of-band delivery notification will occur, but the message will be logged as a rejection. Unlike its Sieve counterpart, execution will continue after this function is called.

### Warning

Do not call this function from `validate_set_binding`.

If no `reason` is supplied, the reason defaults to `550 5.7.0 discarded by policy`. If you add your own reason, use the same format as the default message, indicating a bounce number first, for example, `550 Bounce message processed`.

### Warning

When a reason is passed to this function, it must begin with an SMTP code, for example, "550 My reason". If the reason isn't in this format, it is overwritten with the reason "550 5.7.1 [internal] discarded by policy".

Enable this function with the statement `require('msys.extended.message');`.