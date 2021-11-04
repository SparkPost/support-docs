---
lastUpdated: "03/26/2020"
title: "event_close"
description: "event close Close the specified event int event close e Event e Close the specified event Freeing the event structure does not close the descriptor the user must do this e The Event that you wish to close On success this function returns the value of the system function close..."
---

<a name="apis.event_close"></a> 
## Name

event_close — Close the specified event

## Synopsis

`#include "event.h"`

| `int **event_close** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp51539328"></a> 
## Description

Close the specified event.

### Note

Freeing the event structure does not close the descriptor; the user must do this.

**<a name="idp51541520"></a> Parameters**

<dl class="variablelist">

<dt>e</dt>

<dd>

The Event that you wish to close.

</dd>

</dl>

**<a name="idp51544256"></a> Return Values**

On success this function returns the value of the system function `close`; on failure, `0` is returned.

**<a name="idp51546128"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51548432"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event)