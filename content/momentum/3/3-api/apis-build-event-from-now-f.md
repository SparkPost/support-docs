---
lastUpdated: "03/26/2020"
title: "build_event_from_now_f"
description: "build event from now f Create a timed event Event build event from now f offset fd callback closure float offset int fd Eventfunc callback void closure Create a timed event It's a common requirement to need to schedule some work to occur either at a particular time or at..."
---

<a name="apis.build_event_from_now_f"></a> 
## Name

build_event_from_now_f — Create a timed event

## Synopsis

`#include "event.h"`

| `(Event *) **build_event_from_now_f** (` | <var class="pdparam">offset</var>, |   |
|   | <var class="pdparam">fd</var>, |   |
|   | <var class="pdparam">callback</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`float <var class="pdparam">offset</var>`;
`int <var class="pdparam">fd</var>`;
`Eventfunc <var class="pdparam">callback</var>`;
`void <var class="pdparam">closure</var>`;<a name="idp51471392"></a> 
## Description

Create a timed event. It's a common requirement to need to schedule some work to occur either at a particular time, or at a certain time interval from the current time. The event system in Momentum tracks both IO and time-based events.

You can create a timed event using `build_event_from_now_f` which specifies a time interval from the current time plus the specified offset.

Once you have created an event, you will need to schedule the event for it to be picked up by the scheduler. Use `schedule_event` for this purpose.

The *`callback`* and *`closure`* parameters define what will happen when the event is due to run; the callback function will be invoked and passes an *`eventype`* (set to `E_TIMEOUT`) to the event, the *`closure`* that you used to create the timed event and a timeval representing the current time.

The timed event callback function is called from the scheduler thread; you should avoid blocking or lengthy operations.

### Note

You must return `0` from your timed event callback routine.

If you are using a timed event to implement, for example, a timeout for network IO, you will need to cancel the timer when the socket is closed, and reset it when your IO operation completes. You cancel timed events using the [clear_timed_event](/momentum/3/3-api/apis-clear-timed-event) function, which will implicitly free the event if it is found in the system. Otherwise it will return `0` and the caller is responsible for freeing the event.

<a name="apis.build_event_from_now_f.example"></a> 


```
#include "ec_config.h"
#include "event.h"
#include "scheduler.h"

static int my_func(Event *event, int eventtype, void *closure,
  struct timeval *now)
{
  log1_printf(DDEBUG, "my_func was triggered, closure is %s\n",
    (char*)closure);
  return 0;
}

...

  Event *t = build_event_from_now_f(30, -1, my_func, "hello");
  schedule_event(t);
...
```

**<a name="idp51484144"></a> Parameters**

<dl class="variablelist">

<dt>offset</dt>

<dd>

When to build the event.

</dd>

<dt>fd</dt>

<dd>

This value is always `-1`.

</dd>

<dt>callback</dt>

<dd>

The callback function.

</dd>

<dt>closure</dt>

<dd>

The closure used to create the Event.

</dd>

</dl>

**<a name="idp51492832"></a> Return Values**

This function returns an Event.

**<a name="idp51493760"></a> Threading**
### Warning

The build_event functions can only be called from the `Scheduler` thread.

<a name="idp51496080"></a> 
## See Also

[“Event”](/momentum/3/3-api/structs-event) and [event_free](/momentum/3/3-api/apis-event-free)