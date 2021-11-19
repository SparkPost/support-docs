---
lastUpdated: "03/26/2020"
title: "event_io_state"
description: "This struct is defined as follows To use this struct include the file event h Chapter 24 Event Functions..."
---

This struct is defined as follows:

```
struct _event_io_state {
  char *buf;
  int optype;
  int buflen;
  int bufsize;
  int offset;
  /** mask needed for scheduler */
  int needmask;
};
```

To use this struct, include the file `event.h`.

### <a name="idp46471248"></a> See Also

[*Event Functions*](/momentum/3/3-api/event)