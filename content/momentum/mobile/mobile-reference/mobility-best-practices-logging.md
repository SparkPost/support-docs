---
lastUpdated: "03/26/2020"
title: "SMPP Logging"
description: "The SMPP Logger records SMPP events in a compact format Log records are useful for report generation and problem analysis Configuration options in Section 2 5 smpp logger Module Configuration determine which events are recorded Mobile Momentum records the following event types in the SMPP log Table 5 1 SMPP..."
---

The SMPP Logger records SMPP events in a compact format. Log records are useful for report generation and problem analysis. Configuration options in [“smpp_logger Module Configuration”](/momentum/mobile/mobile-reference/mobility-configuration-smpp) determine which events are recorded. Mobile Momentum records the following event types in the SMPP log:

<a name="mobility.best.practices.smpp.event.types"></a> 


| Log Event | Configuration Parameter | Description |
| --- | --- | --- |
| Receptions | log_reception | SMS messages successfully received from the SMSC |
| Deliveries | log_delivery | SMS messages successfully delivered to the SMSC |
| Status | log_status | Status, as indicated in delivery receipts, of previously sent SMS messages |
| Temporary Failures | log_tempfail | Failure while sending an SMS message, but eligible for retry |
| Permanent Failures | log_permfail | Failure while sending an SMS message, not eligible for retry |

Logging of each event type may be enabled or disabled by setting the corresponding configuration parameter to either 'true' or 'false'. An additional configuration parameter for each event type specifies the format and content of log entries. These parameters are named with the suffix `_format` added to each of the event type parameters; for example, `log_reception_format` specifies the format and content of SMS reception log entries when `log_reception` = `true`. The [“Log Format Macros”](/momentum/mobile/mobile-reference/mobility-configuration-smpp#mobility.log.format.macros) section describes the options associated with the content/format configuration parameters.