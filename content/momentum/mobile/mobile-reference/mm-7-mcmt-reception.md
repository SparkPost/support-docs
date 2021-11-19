---
lastUpdated: "03/26/2020"
title: "The MCMT_Reception option"
description: "A Multi Channel Message Type MCMT message is a multi part MIME message A MCMT message has a required email attachment with the Content Type message rfc 2822 and optionally other parts with content suitable for delivery over non email channels such as SMPP and MM 7 You can configure..."
---

A Multi-Channel Message Type (MCMT) message is a multi-part MIME message. A MCMT message has a required email attachment with the Content-Type: `message/rfc2822` and optionally other parts with content suitable for delivery over non-email channels such as SMPP and MM7.

You can configure a Listener to accept the Multi-Channel Message Type using the `MCMT_Reception` option. This option defaults to `passthru` but can also be set to the values `allow` and `reject`. This option is valid in the Pathway, Pathway_Group, ESMTP_Listener, Peer, and Listen scopes. There is also a connection level validation context variable of the same name that, if set, overrides the value of the `MCMT_Reception` option. If this option is set to `allow`, then the MCMT content will be accepted. If it is set to `reject`, the message will be rejected. If it is set to `passthru` then the message will not be massaged and the MCMT message will be queued "as is" and delivered as though the system has no knowledge of MCMT messages.

### Note

Unlike the SMTP listener, there is no `mcmt_reception` option within the HTTP_Listener scope. *This listener is always MCMT enabled* .

Both SMS and MM7 typically incur a cost to send, so it is prudent to restrict `MCMT_Reception = allow` to a Listen or Peer stanza that enables it on a local or otherwise trusted system.

Since ECSTREAM is a trusted protocol, it is MCMT-enabled by default so does not have this configuration option.