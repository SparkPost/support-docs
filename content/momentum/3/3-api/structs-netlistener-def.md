---
lastUpdated: "03/26/2020"
title: "netlistener_def"
description: "This struct is defined as follows The following typedef applies to this data type typedef int Event Func struct Event event int eventtype void closure struct timeval now To use this struct include the file netlistener h netlistener register 4..."
---

This struct is defined as follows:

```
struct _netlistener_def {
  const char *prefix;
  const char *hashkey;
  EventFunc servercode;
  void *closure;
  unsigned skip:1;
  unsigned _spare:31;
  EventFunc accepthook;

  int opt_enable;
  int opt_file_mode;
  int opt_backlog;
  int opt_concurrency;
  int opt_accept_queue_backlog;
  int opt_events_per_iter;
  int opt_pool_name;
  int opt_recvbuf;
  int opt_sendbuf;
  int opt_disable_nagle;
  int opt_event_loop;
};
```

The following typedef applies to this data type:

`typedef int (*EventFunc) (struct _Event * event, int eventtype, void *closure, struct timeval * now);`

To use this struct, include the file `netlistener.h`.

### <a name="idp37488048"></a> See Also

[netlistener_register4](/momentum/3/3-api/apis-netlistener-register-4)