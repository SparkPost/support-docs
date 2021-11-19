---
lastUpdated: "03/26/2020"
title: "Event"
description: "This struct is defined as follows To use this struct include the file event h ec smtp closeconn esmtp message factory and Chapter 24 Event Functions..."
---

This struct is defined as follows:

```
...
#define E_READ         0x00000001
#define E_WRITE        0x00000002
#define E_EXCEPTION    0x00000004
#define E_TIMEOUT      0x00000008
#define E_ASYNC        0x00000010

#define E_AGGRESSIVE_NONE 0
#define E_AGGRESSIVE_LOW  1
#define E_AGGRESSIVE_MED  2
#define E_AGGRESSIVE_HIGH 3
...
typedef struct ec_event_io_opset
{
  AcceptFunc event_accept;
  ReadFunc event_read;
  WriteFunc event_write;
  CloseFunc event_close;
  SendFileFunc  event_sendfile;
} event_io_opset;

struct _Event
{
  struct timeval trigger;
  void *io_data;
  event_io_opset *io_opset;
  int aggressive:4;
  int trace:1;
  int unused:27;
  int mask;
  int fd;
  EventFunc callback;
  void *closure;
  pthread_t scheduled_thread;
};
```

To use this struct, include the file `event.h`.

### <a name="idp46128240"></a> See Also

[ec_smtp_closeconn](/momentum/3/3-api/apis-ec-smtp-closeconn), [esmtp_message_factory](/momentum/3/3-api/apis-esmtp-message-factory) and [*Event Functions*](/momentum/3/3-api/event)