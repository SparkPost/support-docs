---
lastUpdated: "03/26/2020"
title: "Throttling"
description: "Outbound throttles for SMS submissions may be set in the SMPP domain stanza using the same parameter as for email throttles Additionally the SMSC may set the command status code ESME ETHROTTLED to indicate messages are arriving too quickly The Mobile Momentum SMPP ESME Throttled Timeout option may be set..."
---

Outbound throttles for SMS submissions may be set in the SMPP domain stanza using the same parameter as for email throttles.

Additionally, the SMSC may set the command status code `ESME_ETHROTTLED` to indicate messages are arriving too quickly. The Mobile Momentum `SMPP_ESME_Throttled_Timeout` option may be set in order to temporarily delay new message submissions. Set the value to the number of seconds to suspend SMS submissions. In the example below, Mobile Momentum stops submitting new message requests for one second upon receiving the `ESME_ETHROTTLED` indication from the SMSC:

```
Domain "somewhere.com" {
  SMPP_SMSC_Server = "10.0.0.1"
  ...
  SMPP_ESME_Throttled_Timeout = 1
  ...
}
```

Refer to the [Momentum V3 Reference](/momentum/3/3-reference) for additional information and for examples of using outbound throttles.