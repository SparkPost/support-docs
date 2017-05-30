---
title: "How Do I Test Using the Sink Server on SparkPost?"
description: "Sink testing allows you to send messages through Spark Post for integration testing without the messages being attempted for delivery to actual email addresses Any messages using the sink server email address format will automatically fail as intended To use the sink server you will need to append the email..."
---

Sink testing allows you to send messages through SparkPost for integration testing without the messages being attempted for delivery to actual email addresses. Any messages using the sink server email address format will automatically fail as intended.

To use the sink server, you will need to append the email addresses you are injecting into our system with `*.sink.sparkpostmail.com`. Please note, the asterisk (`*`) is a wildcard, where you will place the domain portion of your injected email address.

***Please note, any messages injected into our service, including those to the sink server, count against your plan's message allowance.**                                                                                                                               

**Example**: 

*Email Address* - john.doe@email.com

*To test with sink server* - john.doe@email.com.sink.sparkpostmail.com
