---
lastUpdated: "03/26/2020"
title: "ec_get_message_id"
description: "ec get message id Returns the message's unique ID ec get message id ec get message id returns the unique on this Momentum instance ID of this message This is the same value that is returned in the 250 OK response when a message is accepted by Momentum and is..."
---

<a name="sieve.ref.ec_get_message_id"></a> 
## Name

ec_get_message_id — Returns the message's unique ID.

## Synopsis

`ec_get_message_id`

<a name="idp29640624"></a> 
## Description

`ec_get_message_id` returns the unique (on this Momentum instance) ID of this message. This is the same value that is returned in the 250 OK response when a message is accepted by Momentum, and is related to the spool name of the message. This value also appears in the second (numbered 1) field of main and bounce log entries pertaining to this message. For more information see [“The `mainlog.ec` Format”](/momentum/3/3-reference/log-formats-version-3#log_formats.mainlog3) and [“The bounce_logger”](/momentum/3/3-reference/log-formats-version-3#log_formats.bouncelog3).