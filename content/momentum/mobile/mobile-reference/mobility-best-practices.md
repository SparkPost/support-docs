---
lastUpdated: "03/26/2020"
title: "SMPP Configuration Best Practices"
description: "This chapter describes best practices for Mobile Momentum including configurations for various usage scenarios SMSC bind parameters also called bind credentials specify the values needed to enter a bound state on an SMPP connection The SMPP connection must be in a bound state before SMS messages may be sent or..."
---


This chapter describes best practices for Mobile Momentum including configurations for various usage scenarios.

## <a name="mobility.best.practices.bind.params"></a> SMSC Bind Parameters

SMSC bind parameters (also called bind credentials), specify the values needed to enter a bound state on an SMPP connection. The SMPP connection must be in a bound state before SMS messages may be sent or received on the SMPP connection. Bind parameter values will be supplied by your SMS network operator.

1.  `SMPP_SMSC_Server` – host name or IP address of the SMSC

2.  `SMPP_SMSC_Port` – port number for the SMPP TCP connection

3.  `SMPP_SMSC_System_ID` – Subscriber ESME User ID

4.  `SMPP_SMSC_Password` – Password

5.  `SMPP_SMSC_System_Type` – System type

6.  `SMPP_ESME_Address` – ESME telephone number or short code

7.  `SMPP_Bind_Type` – Specify if the SMPP connection is transmitter only, receiver only, or transceiver (default transceiver)

Below is an example of the bind credential specification in the domain stanza. Mobile Momentum connects to the SMSC at `10.0.0.1` port `2776` and supplies the system id of `GSMSGW`, password `secret`, and system type `CMT` in the default SMPP bind_transceiver request. SMS messages sent to the short code `67890` will be routed to this SMPP connection by the carrier and/or aggregator networks. `67890` will be the sending telephone number of Mobile Momentum SMS transmissions on this connection.

```
domain "somewhere.com" {
  SMPP_SMSC_Server  = "10.0.0.1"
  SMPP_SMSC_Port = "2776"
  SMPP_SMSC_System_ID = "GSMSGW"
  SMPP_SMSC_Password = "secret"
  SMPP_SMSC_System_Type = "CMT"
  SMPP_ESME_Address = "67890"
  ...
}
```