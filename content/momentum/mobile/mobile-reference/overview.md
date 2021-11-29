---
lastUpdated: "03/26/2020"
title: "Overview of Mobile Momentum"
description: "Mobile Momentum is a set of additional features for the Momentum core enabling interoperability of Internet email and Short Message Service SMS text messaging In the most basic use case email senders may address an email to an SMS capable telephone as 4445551234 somewhere com In this case somewhere com..."
---


Mobile Momentum is a set of additional features for the Momentum core enabling interoperability of Internet email and Short Message Service (SMS) text messaging. In the most basic use case, email senders may address an email to an SMS capable telephone as:

`4445551234@somewhere.com`

In this case, `somewhere.com` is an appropriately configured Mobile Momentum domain. An example configuration is given in [“SMSC Bind Parameters”](/momentum/mobile/mobile-reference/mobility-best-practices#mobility.best.practices.bind.params).

Mobile Momentum can also convert mobile phone SMS text messages *to* email. An SMS text messages sent to a telephone number can be converted to email by supplying the destination email address and an optional subject header (in parenthesis) at the beginning of the text message. This case is shown below:

```
user@example.com(subject text) This is an SMS message text to be sent
as email to user@example.com.
```

## <a name="overview-architecture"></a> Architecture

This section describes the Mobile Momentum architecture and how it fits in with the Momentum core architecture. Mobile Momentum builds upon the Momentum core, preserving all existing Momentum core capabilities. The Mobile Momentum architecture consists of three primary architectural components extending the Momentum core:

*   The mobility modules discussed in [*Mobile Momentum SMPP*](/momentum/mobile/mobile-reference/momentum-mobility) 

*   The multi-message module discussed in and in [*Mobile Momentum MM7*](/momentum/mobile/mobile-reference/mobility-mm-7) .

*   [Section 1.2, “The Short Message Peer-to-Peer Protocol (SMPP) ESME Module”](overview.smppesme "1.2. The Short Message Peer-to-Peer Protocol (SMPP) ESME Module")

The Short Message Peer-to-Peer Protocol/External Short Messaging Entity (SMPP/ESME) module implements the ESME, or client side of the SMPP protocol and also connection management functions. Email/SMS conversion functions include address mappings, and message content transformations such as encodings and the interworking format. (See [“Email/SMS Interworking Format”](/momentum/mobile/mobile-reference/overview-smpp-email-sms#overview-SMPPInterworkingFormat) for more details.)

### <a name="overview-SMPPDomainsandBindings"></a> SMPP Domains and Bindings

Mobile Momentum SMS messaging configuration parameters are specified within the existing Momentum `domain` and `binding` stanzas. Domain and binding stanzas within the configuration file contain the operational parameters for controlling and messaging on SMTP and SMPP connections. A domain stanza supporting SMS messaging is called an `SMPP domain`. An SMPP domain within the Momentum configuration file activates the SMPP/ESME module and Email/SMS conversion functions.

An SMPP domain is defined by including the `SMPP_SMSC_Server` configuration parameter within the scope of the domain stanza. Just as in SMTP, Momentum binding stanzas may refer to SMPP domain stanzas to refine or specialize parameter specifications provided by the SMPP domain stanza. The main difference between SMPP and SMTP domains is that SMTP domains handle only message transmission, while SMPP domains provide for both transmitting and receiving. This is because an SMTP client may only transmit messages, while an SMPP client may both transmit and receive messages on the same connection. An SMTP server is necessary for receiving messages with SMTP. The SMTP listener stanza contains the parameters defining the SMTP server operations for receiving messages over SMTP. Mobile Momentum does not provide an SMPP server implementation, so there is no listener stanza for SMPP.