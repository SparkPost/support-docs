---
lastUpdated: "03/26/2020"
title: "ec_message_builder"
description: "ec message builder Convenience routine for building messages in a blocking fashion io object ec message builder mess size hint ec message mess size t size hint Convenience routine for building messages in a blocking fashion If you are constructing a message internally this API will return an IO object..."
---

<a name="apis.ec_message_builder"></a> 
## Name

ec_message_builder — Convenience routine for building messages in a blocking fashion

## Synopsis

`#include "ec_message.h"`

| `io_object * **ec_message_builder** (` | <var class="pdparam">mess</var>, |   |
|   | <var class="pdparam">size_hint</var>`)`; |   |

`ec_message * <var class="pdparam">mess</var>`;
`size_t <var class="pdparam">size_hint</var>`;<a name="idp55269760"></a> 
## Description

Convenience routine for building messages in a blocking fashion.

### Note

If you are constructing a message internally, this API will return an IO object that will hold the message as it is constructed. Each write to the object will incrementally parse that chunk into the message you have provided. If the message is larger than the large message threshold, it will internally be journalled to the spool in much the same way that large messages are received over SMTP. When the io_object is closed, it will finalize the parse and call ec_message_set_io_object() with the underlying storage for the message.

**<a name="idp55272496"></a> Parameters**

<dl class="variablelist">

<dt>mess</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>size_hint</dt>

<dd>

An integer indicating the approximate size of the final message (in bytes) if known in advance.

</dd>

</dl>

**<a name="idp55277776"></a> Return Values**

Returns the address of an io_object struct, which stores the current state of the message as it's being constructed. For documentation of this data structure see [“io_object”](/momentum/3/3-api/structs-io-object)

**<a name="idp55279408"></a> Threading**

It is legal to call this function in any thread but should not be called in the Scheduler thread.

### Note

This function may induce IO blocking or otherwise block the caller. Blocking in the scheduler thread will lead to degraded performance and should be avoided at all costs. If your code is running in the IO subsystem, the core will have already taken steps to ensure that blocking is acceptable. Otherwise, you should look at using the thread pool API to run a job in the IO pool.