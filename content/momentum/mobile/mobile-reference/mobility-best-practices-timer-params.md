---
lastUpdated: "03/26/2020"
title: "SMPP Timer Parameters"
description: "There are three main timers in SMPP 3 4 These are configurable using the following options smpp response timer smpp enquire link timer smpp inactivity timer The response timer sets the amount of time allowed following an SMPP request before considering the requested operation lost The response timer is set..."
---

There are three main timers in SMPP 3.4\. These are configurable using the following options:

*   [smpp_response_timer](/momentum/mobile/mobile-reference/mobility-conf-smpp-response-timer)

*   [smpp_enquire_link_timer](/momentum/mobile/mobile-reference/mobility-conf-smpp-enquire-link-timer)

*   [smpp_inactivity_timer](/momentum/mobile/mobile-reference/mobility-conf-smpp-inactivity-timer)

The response timer sets the amount of time allowed following an SMPP request before considering the requested operation lost. The response timer is set for each SMPP request sent by Mobile Momentum. Following expiration of the response timer, other operations continue, unless it is an enquire_link request. In this case, the connection is closed.

The enquire link timer specifies the amount of idle time allowed to elapse before sending an enquire_link request. Any pending enquire link timer is reset whenever another SMPP request of reply is sent or received. The enquire_link mechanism is intended to identify connection failures in the absence of other SMPP activity.

The inactivity timer is the amount of idle time allowed on a connection before shutting down the connection. Any SMPP activity aside from enquire_link requests and responses resets the inactivity timer.

The default timer values should work in most situations. However, if changing timer values, it is advisable that the inactivity timer be greater than the enquire link timer and that the enquire link timer be greater than the response timer. Some request-specific timers are available as well, see the configuration parameter reference.