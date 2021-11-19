---
lastUpdated: "03/26/2020"
title: "smtp_state"
description: "The members of the smtp state struct are as follows To use this struct include the file dns ds h smtp next state and Chapter 47 SMTP related Functions..."
---

The members of the smtp_state struct are as follows:

```
struct _smtp_state {
  unsigned int sizeof_smtp_state;
  char *name;
  int id;
  int init_local_state;
  SMTPStateSetup setup;
  SMTPStateCallback callback;
  SMTPStateFree free;
  SMTPStateToStage tostage;
  SMTPStageToString tostring;
  struct _smtp_state *next;
  void *closure;
};
```

To use this struct, include the file `dns_ds.h`.

### <a name="idp33222720"></a> See Also

[smtp_next_state](/momentum/3/3-api/apis-smtp-next-state) and [*SMTP-related Functions*](/momentum/3/3-api/smtp) .