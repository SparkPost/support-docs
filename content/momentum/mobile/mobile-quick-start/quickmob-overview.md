---
lastUpdated: "03/26/2020"
title: "Overview"
description: "Mobile Momentum is a set of additional features for Momentum that enables interoperability of Internet email Short Message Service SMS text messaging and Multimedia Messaging Service MMS rich media messaging From a user's point of view Mobile Momentum is implemented using the same module listener domain and binding infrastructure used..."
---

Mobile Momentum is a set of additional features for Momentum that enables interoperability of Internet email, Short Message Service(SMS) text messaging, and Multimedia Messaging Service (MMS) rich media messaging.

From a user's point of view Mobile Momentum is implemented using the same module, listener, domain, and binding infrastructure used by the Momentum core. The difference is that these constructs will be configured to use mobile protocols (as opposed to SMTP) to transport messages to and from devices in mobile networks. The Short Message Peer to Peer (SMPP) Protocol will be used for the transport of SMS text messages between Mobile Momentum and the Short Message Service Center (SMSC) within the mobile network. The Mobile Message Service MM7 (MMS MM7) protocol will be used for the transport of multimedia messages between Mobile Momentum and the mobile network's Multimedia Messaging Service Center (MMSC).

If you wish you can configure the SMPP capabilities of Mobile Momentum to convert email to SMS and the reverse by configuring a Momentum domain to be an SMPP domain. An SMPP domain is characterized by the presence of the `SMPP_SMSC_Address` configuration parameter within the domain stanza.

If you wish to configure the *MM7* capabilities of Mobile Momentum, you will need to specify MM7 domains for submission of messages to the MMSC. In order to receive MMS messages, you will need to configure the MM7 server module and an HTTP listener.

This guide shows how to define the configuration parameters for SMPP domains, MM7 domains, the MM7 server module, and the HTTP listener. The chapters are as follows:

*   Installation – Adding the Mobile capability to Momentum

*   Configuration of loggers – Skip this section if you don't wish to create a separate log of SMPP or MM7 messages *Note:* The mobility modules don't log to `mainlog.ec`. A message received on smpp and transmitted on smtp will have the receptions logged in smpp log and the delivery in the main log though.

*   Configuring options in the global, domain or binding scopes. This also includes other required modules such as the HTTP_Listener.

*   "Bare Bones" configurations – different basic configurations. This provides an easy overview of the different configurations.