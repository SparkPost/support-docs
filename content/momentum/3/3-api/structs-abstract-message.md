---
lastUpdated: "03/26/2020"
title: "abstract_message"
description: "This struct is defined as follows To use this struct include the file message compat h get msg expiration params..."
---

This struct is defined as follows:

```
struct _abstract_message
{
  message_id id;                    /* Unique identifier for this message */
  u_int8_t type:4;                  /* EM_SHORT_MESSAGE, EM_EMAIL_MESSAGE */
  u_int8_t version:4;
  /* This stuff changes on ever delivery attempt */
  u_int32_t num_retries;            /* The number of delivery retries */
  struct timeval creation_time;     /* Time when the message entered ec */
  struct timeval next_attempt;      /* Transient... time of next attempt */
  struct timeval final_time;        /* Time of delivery */
  u_int16_t code_len;               /* number of bytes in the "code" */
  u_int8_t swapped:3;               /* SPOOL_MEM, SPOOL_SWAP, SPOOL_DISK */
  u_int8_t body_type:5;             /* BT_MMAP */
  u_int8_t stage:4;
  u_int8_t reserved:3;
  u_int8_t priority:1;
  u_int8_t delivered:2;             /* EM_TRYING, EM_SUCCEEDED, EM_FAILED */
  u_int8_t delivered_class:6;       /* see delivery_types.h */
};
```

To use this struct, include the file `message_compat.h`.

### <a name="idp46475696"></a> See Also

[get_msg_expiration_params](/momentum/3/3-api/hooks-core-get-msg-expiration-params)