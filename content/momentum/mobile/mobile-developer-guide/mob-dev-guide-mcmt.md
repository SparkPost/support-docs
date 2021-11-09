---
lastUpdated: "03/26/2020"
title: "The Multi-Channel Message Type (MCMT)"
description: "A MCMT message is a multi part MIME message A required part of a MCMT message is an email attachment Content Type message rfc 2822 There are other optional parts with content suitable for delivery over non email channels such as SMPP and or MM 7 When an MCMT message..."
---

## <a name="mob.dev.guide.mcmt"></a> The Multi-Channel Message Type (MCMT)


## <a name="mobility.mcmt"></a> The Multi-Channel Message Type (MCMT)

A MCMT message is a multi-part MIME message. A required part of a MCMT message is an email attachment (Content-Type: message/rfc2822). There are other optional parts with content suitable for delivery over non-email channels such as SMPP and/or MM7\. When an MCMT message is received, the core engine will only process the message/rfc2822 and, in fact removes all parts of the message that are are not message/rfc2822.

When the data payload is received, Momentum will recognize that a message is MCMT and adjust its internal representation. The `MCMT_Reception` option has three possible settings (see [The MCMT_Reception option](/momentum/mobile/mobile-reference/mm-7-mcmt-reception)). The value of this option determines how a MCMT message is handled. The following flow chart shows the different options.

<a name="figure.mcmt"></a> 


![MCMT message flow](images/mcmt.png)

A description of the format of a MCMT message follows.