---
lastUpdated: "03/26/2020"
title: "Rule Actions"
description: "Actions are taken in response to temporary or permanent failure codes issued by receivers The actions implemented by the adaptive rules lua script are as follows suspend Suspend sending for a specified period This action results in an email alert to the address defined by adaptive alert email destination The..."
---

Actions are taken in response to temporary or permanent failure codes issued by receivers. The actions implemented by the `adaptive_rules.lua` script are as follows:

*   `suspend` – Suspend sending for a specified period. This action results in an email alert to the address defined by `adaptive_alert_email_destination`.

    The parameter associated with this action defines the applicable length of time. Use a time unit indicator and a numeral separated by a space, for example `15 minutes`. The unit can be one of seconds, minutes, hours or days.

*   `blackhole` – "Blackhole" email for a specified period. This action results in an email alert to the address defined by `adaptive_alert_email_destination`.

    The parameter associated with this action defines the applicable length of time. Use a time unit indicator separated from a numeral by a space, for example `4 hours`. The unit can be one of seconds, minutes, hours or days.

*   `throttle` – Limit the rate at which Momentum will attempt to deliver mail. (Adjust the `outbound_throttle_messages` option.) This action results in an email alert to the address defined by `adaptive_alert_email_destination`.

    The `outbound_throttle_messages` option is described in [outbound_throttle_messages](/momentum/3/3-reference/3-reference-conf-ref-outbound-throttle-messages). If this option is not set or if is set to `0`, there is no limit on the number of messages sent.

    The parameter associated with this action defines the throttle indicator. This can only be `down`.

*   `greylisted` – Create a greylist period that must expire before retrying mail.

    The parameter associated with this action defines the applicable length of time. Use a time unit indicator separated from a numeral by a space, for example `15 minutes`. The unit can be one of seconds, minutes, hours or days. The affected AD parameters are: `retry_interval` and `max_retry_interval`.

*   `warmup` – Set a warmup period for a new IP. The parameter associated with this action sets the age of the binding in seconds.

*   `reduce_connections` – Reduce the number of outbound connections to a specific receiver. The affected AD parameter is: `adaptive_max_outbound_connections`.

*   `reduce_deliveries` – Reduce the number of deliveries to a specific receiver. The affected AD parameters: `adaptive_max_deliveries_per_connection`.

*   `transcode` — This action implements the response_transcode module options and rewrites permanent errors as temporary errors. **This action is only available for disposition rules.**                                                 Use this action carefully. For more information see [response_transcode](/momentum/3/3-reference/3-reference-modules-response-transcode). For an example of how this action is used see [*The `adaptive_rules.lua` File*](/momentum/3/3-ad/ad-appendix-adaptive-rules) .

The throttle, blackhole or suspend actions will generate an email to the address associated with the `adaptive_alert_email_destination` option.

You can augment or replace the rules found in the `adaptive_rules.lua` file. To do this see [*Custom Rules*](/momentum/3/3-ad/ad-custom-rules) .

You can confirm that actions have been taken by using the system console. To do this see [“Using the System Console”](/momentum/3/3-ad/ad-troubleshooting-console).