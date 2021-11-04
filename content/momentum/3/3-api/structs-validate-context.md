---
lastUpdated: "03/26/2020"
title: "validate_context"
description: "This struct is defined as follows To use this struct include the file validate module h Chapter 18 Dictionary Functions..."
---

This struct is defined as follows:

```
struct _validate_context {
  Event *session;       /* The event that is driving the session */
  ECDict env[2];        /* The environment... use validate_{get,set} */
  ec_bag *bag;          /* pointers to arbitrary bits */
  void *module_data;    /* This module data, see validate_local_alloc */

  int code;             /* The SMTP response code: 250, 551, 452, etc. */
  char *note;           /* The response string, if custom */
  struct timeval tcost; /* The cost (in time) the sender must pay */

  /* internal state, do not touch */
  ec_config_header *transaction;
  ec_ptr_array *modules;
  void *ec_internal_visses;
  unsigned char *calls;
  int last_module;

  unsigned last_state:8;  /* one of the VALIDATE_ states */
  unsigned disconnect:1;  /* 1 or 0, meaning to disconnect, respectively */
  unsigned deschedule:1;  /* 1 or 0, to deschedule session on not, respectively.
                           This can only be used with esmtp.  If used with
                           ecstream it will cause an immediate shutdown */
  unsigned old_phase:1;  /* Used to track rentry and new phases, do not touch */
  unsigned needs_auth_results:1; /* Used to conditionally add Auth-Results: */
  unsigned body_has_changed:1; /* set to 1 if the message body has changed
                           This only applies to validate_data_spool_each_rcpt */
  unsigned transparency:1; /* Skip message modifying validation */
}
```

To use this struct, include the file `validate_module.h`.

### <a name="idp34281728"></a> See Also

[*Dictionary Functions*](/momentum/3/3-api/dict)