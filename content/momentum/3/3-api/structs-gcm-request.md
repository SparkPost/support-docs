---
lastUpdated: "03/26/2020"
title: "gcm_request"
description: "Configuration Change This feature is available as of version 3 5 5 This struct is defined as follows To use this struct include the file modules mobility gcm gcm h Momentum for Mobile Push Notifications and Chapter 62 Hooks in the gcm Scope..."
---

**Configuration Change. ** This feature is available as of version 3.5.5.

This struct is defined as follows:

```
/* gcm request */
typedef struct _gcm_request {
 struct json_object *json; /* GCM json payload (control and message payload) */
} gcm_request;
```

To use this struct, include the file `modules/mobility/gcm/gcm.h`.

### <a name="idp43202336"></a> See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the gcm Scope*](/momentum/3/3-api/hooks-gcm) .