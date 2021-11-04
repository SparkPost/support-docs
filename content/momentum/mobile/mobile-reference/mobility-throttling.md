---
lastUpdated: "03/26/2020"
title: "Throttling"
description: "Outbound throttles for SMS submissions may be set in the SMPP domain stanza using the same parameter as for email throttles Additionally the SMSC may set the command status code to ESME ETHROTTLED to indicate messages are arriving too quickly The SMPP ESME Throttled Timeout parameter may also be set..."
---

Outbound throttles for SMS submissions may be set in the SMPP domain stanza using the same parameter as for email throttles.

Additionally, the SMSC may set the command status code to `ESME_ETHROTTLED` to indicate messages are arriving too quickly. The `SMPP_ESME_Throttled_Timeout` parameter may also be set in order to temporarily delay new message submissions. Set the value to the number of seconds to suspend SMS submissions.