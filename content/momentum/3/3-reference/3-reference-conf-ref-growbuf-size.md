---
lastUpdated: "03/26/2020"
title: "growbuf_size"
description: "growbuf size The size of an element in a growbuf chain growbuf size 16384 Momentum uses a growbuf chain to hold message contents as they are received The chain allows reception of messages into memory without first having to know how much memory to allocate By default each element in..."
---

<a name="conf.ref.growbuf_size"></a> 
## Name

growbuf_size — The size of an element in a growbuf chain

## Synopsis

`growbuf_size = 16384`

<a name="idp9673440"></a> 
## Description

Momentum uses a growbuf chain to hold message contents as they are received. The chain allows reception of messages into memory without first having to know how much memory to allocate. By default, each element in the chain is 16k in size, meaning that the first 16k of a message will occupy one growbuf, the next will occupy the second in the chain and so forth. When the memory usage for a growbuf chain exceeds the `large_message_threshold`, the growbuf chain is swapped to disk and reception continues.

For better performance, you should ensure that the growbuf_size is large enough to accomodate the typical message size you see entering your system. This will cause the majority of your messages to fit in a single growbuf and reduce the amount of work required to receive those messages.

Raising growbuf_size too high will be a waste of memory, so you should not set this value based on the maximum message size you expect to transit; Momentum will still continue to function well even if the message size greatly exceeds the growbuf_size.

If the majority of your messages are larger than the default growbuf_size of 16384 bytes, then you could consider adjusting the growbuf_size upwards so that the system will run more efficiently.

The default for this option is 16384 bytes.

<a name="idp9678816"></a> 
## Scope

growbuf_size is valid in the global scope.

<a name="idp9680448"></a> 
## See Also

[large_message_threshold](/momentum/3/3-reference/3-reference-conf-ref-large-message-threshold)