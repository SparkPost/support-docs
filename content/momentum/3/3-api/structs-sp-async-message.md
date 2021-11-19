---
lastUpdated: "03/26/2020"
title: "sp_async_message"
description: "This struct is defined as follows To use this struct include the file sp async h swap out multi..."
---

This struct is defined as follows:

```
struct _sp_async_message {
  ec_message *mess;
  struct _sp_async_message *next;
  ec_message *backref;
  unsigned shared :1;
  unsigned rejected :1;
};
```

To use this struct, include the file `sp_async.h`.

### <a name="idp33229712"></a> See Also

[swap_out_multi](/momentum/3/3-api/apis-swap-out-multi)