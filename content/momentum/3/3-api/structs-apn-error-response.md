---
lastUpdated: "03/26/2020"
title: "apn_error_response"
description: "Configuration Change This feature is available as of version 3 5 5 This struct is defined as follows For a list of valid values for the status field see response eval To use this struct include the file modules mobility apn apn h Momentum for Mobile Push Notifications and Chapter..."
---

**Configuration Change. ** This feature is available as of version 3.5.5.

This struct is defined as follows:

```
typedef struct _apn_error_response {
  uint8_t command;
  uint8_t status;
  uint32_t id;   /* host order */
} apn_error_response;
```

For a list of valid values for the `status` field see [response_eval](/momentum/3/3-api/hooks-apn-response-eval).

To use this struct, include the file `modules/mobility/apn/apn.h`.

### <a name="idp32614384"></a> See Also

[Momentum for Mobile Push Notifications](/momentum/3/3-push) and [*Hooks in the apn Scope*](/momentum/3/3-api/hooks-apn) .