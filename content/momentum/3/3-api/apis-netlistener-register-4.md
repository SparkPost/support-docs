---
lastUpdated: "03/26/2020"
title: "netlistener_register4"
description: "netlistener register 4 Register a listener overriding the default TCP receive and send buffers that are set by the netlistener layer netlistener def netlistener register 4 listener prefix servercode closure accepthook recvbuf sendbuf const char listener prefix Event Func servercode void closure Event Func accepthook const char recvbuf const char..."
---

<a name="apis.netlistener_register4"></a> 
## Name

netlistener_register4 — Register a listener, overriding the default TCP receive and send buffers that are set by the netlistener layer

## Synopsis

`#include "netlistener.h"`

| `netlistener_def * **netlistener_register4** (` | <var class="pdparam">listener_prefix</var>, |   |
|   | <var class="pdparam">servercode</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">accepthook</var>, |   |
|   | <var class="pdparam">recvbuf</var>, |   |
|   | <var class="pdparam">sendbuf</var>`)`; |   |

`const char * <var class="pdparam">listener_prefix</var>`;
`EventFunc <var class="pdparam">servercode</var>`;
`void * <var class="pdparam">closure</var>`;
`EventFunc <var class="pdparam">accepthook</var>`;
`const char * <var class="pdparam">recvbuf</var>`;
`const char * <var class="pdparam">sendbuf</var>`;<a name="idp58158256"></a> 
## Description

Register a listener, overriding the default TCP receive and send buffers that are set by the netlistener layer.

**<a name="idp58159552"></a> Parameters**

<dl class="variablelist">

<dt>listener_prefix</dt>

<dd>

Prefix for the listener in the configuration, e.g. "HTTP".

</dd>

<dt>servercode</dt>

<dd>

Event callback for the connection. The following typedef applies to this data type:

`typedef int (*EventFunc) (struct _Event * event, int eventtype, void *closure, struct timeval * now);`

</dd>

<dt>closure</dt>

<dd>

Closure to pass in to the `accept_construct.accept_construct_closure.vptr` field to the `servercode` callback. This can be `NULL`.

</dd>

<dt>accepthook</dt>

<dd>

Callback after the connection has been accepted, NULL if not needed. The following typedef applies to this data type:

`typedef int (*EventFunc) (struct _Event * event, int eventtype, void *closure, struct timeval * now);`

</dd>

<dt>recvbuf</dt>

<dd>

TCP receive buffer size, NULL to use default of 4 KB.

</dd>

<dt>sendbuf</dt>

<dd>

TCP send buffer size, NULL to use default of 4 KB.

</dd>

</dl>

**<a name="idp58175152"></a> Return Values**

Returns the address of a `netlistener_def` instance. For documentation of this data structure see [“netlistener_def”](/momentum/3/3-api/structs-netlistener-def). You are responsible for releasing the memory in the structure.

**<a name="idp58177184"></a> Threading**

It is legal to call this function in the any thread.

<a name="idp58178288"></a> 
## See Also

[“netlistener_def”](/momentum/3/3-api/structs-netlistener-def)