---
lastUpdated: "09/13/2021"
title: "How Do I Test Using the Sink Server on SparkPost?"
description: "Sink testing allows you to send messages through Spark Post for integration testing without the messages being attempted for delivery to actual email addresses Any messages using the sink server email address format will automatically fail as intended To use the sink server you will need to append the email..."
---

Sink testing allows you to send messages through SparkPost for integration testing without the messages being attempted for delivery to actual email addresses. Any messages using the sink server email address format will automatically fail as intended.

To use the sink server, you will need to
1. append the email addresses you are injecting into our system with `*.sink.sparkpostmail.com`. Please note, the asterisk (`*`) is a wildcard, where you will place the domain portion of your injected email address.

2. For high capacity performance testing, we recommend to disable populating your account Events reporting (API and UI) with the sink delivery events. Prefix the campaign_id you are injecting into our system with `sparkpost-performance-test-*`. Please note, the asterisk (`*`) is a wildcard, where you will place anything as part of the campaign_id.

    Webhooks event reporting will still occur. The Metrics API and Signals Analytics dashboard will continue to report on your sink traffic.

> Please note, any messages injected into our service, including those to the sink server, count against your plan's message allowance.

**Example**:

*Email Address* - john.doe@example.com

*Campaign ID* - 1234

*To test with sink server* - john.doe@example.com.sink.sparkpostmail.com and set the campaign_id with sparkpost-performance-test-1234
