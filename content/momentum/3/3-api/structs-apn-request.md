---
lastUpdated: "03/26/2020"
title: "apn_request"
description: "Configuration Change This feature is available as of version 3 5 5 This struct is defined as follows To use this struct include the file modules mobility apn apn h Momentum for Mobile Push Notifications and Chapter 58 Hooks in the apn Scope..."
---

**Configuration Change. ** This feature is available as of version 3.5.5.

This struct is defined as follows:

```
typedef struct _apn_request {
  uint8_t command;
  uint32_t id;
  uint32_t expiry;
  char token[APN_DeviceTokenHex_Size];  /* device token in hex format */
  struct json_object *json;  /* payload json object */
} apn_request;
```

To use this struct, include the file `modules/mobility/apn/apn.h`.

### <a name="idp45754608"></a> See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn) .