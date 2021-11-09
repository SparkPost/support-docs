---
lastUpdated: "03/26/2020"
title: "Parameters Adjusted by the Rules"
description: "The default adaptive rules lua file adjusts parameters in real time based on individual rule sets for each of the ES Ps listed in Section 3 1 Receivers Managed by Adaptive Rules and takes actions based on the specific responses of receivers The following parameters are automatically adjusted in adaptive..."
---

The default `adaptive_rules.lua` file adjusts parameters in real time based on individual rule sets for each of the ESPs listed in [“Receivers Managed by Adaptive Rules”](/momentum/3/3-ad/ad-adaptive-rules#ad.adaptive.rules.receivers) and takes actions based on the specific responses of receivers.

The following parameters are automatically adjusted in `adaptive_rules.lua`:

*   `adaptive_max_outbound_connections` – The maximum number of outbound connections. This option is described in [max_outbound_connections](/momentum/3/3-reference/3-reference-conf-ref-max-outbound-connections)

    This parameter is adjusted by the `reduce_connections` action.

*   `adaptive_max_deliveries_per_connection` – The maximum number of messages to deliver before closing a connection. This option is described in [max_deliveries_per_connection](/momentum/3/3-reference/3-reference-conf-ref-max-deliveries-per-connection)

    This parameter is adjusted by the `reduce_deliveries` action.

*   `adaptive_outbound_throttle_messages` – Limit the rate at which messages are delivered. This option is described in [outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-messages). If this option is not set or if is set to `0`, there is no limit on the number of messages sent.

    This parameter is adjusted by the `throttle "down"` action.

*   `retry_interval` – The interval to wait before retrying a message. This option is described in [retry_interval](/momentum/3/3-reference/3-reference-conf-ref-retry-interval).

    This parameter is adjusted by the `greylisted` action.

### Note

You can use adaptive options to override the limits set by adaptive rules. For example, suppose that you set `adaptive_max_deliveries_per_connection` as follows:

```
domain "example.com" {
  adaptive_max_deliveries_per_connection = ( 20 80 )
}
```

The preceding example sets the lower boundary to `20` and the upper boundary to `80`, meaning that if the AD rules think that the value should be lower, it will be clipped to `20`, or if the rules decide that the value should be higher, it will be clipped to `80`.

The `warmup` action does *not* set a configuration option; it sets the age of a binding. This is equivalent to issuing the **adaptive warmup**        command from the system console. Actions are described in [“Rule Actions”](/momentum/3/3-ad/ad-adaptive-rules-actions).