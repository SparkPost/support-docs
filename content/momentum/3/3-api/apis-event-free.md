---
lastUpdated: "03/26/2020"
title: "event_free"
description: "event free Free an event void event free e Event e Free an event Example 24 2 event free example dst The Event This function returns void Only call this function from the Scheduler thread Section 68 49 Event and build event from now f..."
---

<a name="apis.event_free"></a> 
## Name

event_free — Free an event

## Synopsis

`#include "event.h"`

| `void **event_free** (` | <var class="pdparam">e</var>`)`; |   |

`Event * <var class="pdparam">e</var>`;<a name="idp51558480"></a> 
## Description

Free an event.

<a name="apis.event_free.example"></a> 


```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_func(Event *event, int eventtype, void *closure,
  struct timeval *now);
...

  Event *t = build_event_from_now_f(30, -1, my_func, "hello");
  schedule_event(t);
...
  if (!clear_timed_event(t)) {
    event_free(t);
  }
  /* t is no longer valid */
...
```

**<a name="idp51562432"></a> Parameters**

<dl class="variablelist">

<dt>dst</dt>

<dd>

The Event.

</dd>

</dl>

**<a name="idp51565136"></a> Return Values**

This function returns void.

**<a name="idp51566048"></a> Threading**
### Warning

Only call this function from the `Scheduler` thread.

<a name="idp51568352"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [build_event_from_now_f](/momentum/3/3-api/apis-build-event-from-now-f)