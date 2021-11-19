---
lastUpdated: "03/26/2020"
title: "message_id"
description: "This struct is defined as follows To use this struct include the file message message id h ec mailq dequeue live message and ec spool ctx remove mid..."
---

This struct is defined as follows:

```
struct _message_id
{
  u_int32_t slot;            /* 32 LSB of the time in seconds */
  u_int16_t pid;             /* PID of this process */
  u_int16_t counter;         /* globally incremented counter */
};
```

To use this struct, include the file `message/message_id.h`.

### <a name="idp41883280"></a> See Also

[ec_mailq_dequeue_live_message](/momentum/3/3-api/apis-ec-mailq-dequeue-live-message) and [ec_spool_ctx_remove_mid](/momentum/3/3-api/apis-ec-spool-ctx-remove-mid)