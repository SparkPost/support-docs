---
lastUpdated: "03/26/2020"
title: "Load Balancing"
description: "The nginx proxy server embedded in Momentum 4 provides load balancing out of the box however it does not provide zero downtime for API injection if the analytics node you use to inject goes dark Therefore in a multi node environment we recommend adding a load balancer in front of..."
---

The nginx proxy server embedded in Momentum 4 provides load balancing out of the box; however, it does not provide zero downtime for API injection if the analytics node you use to inject goes dark. Therefore, in a multi-node environment, we recommend adding a load balancer in front of the analytics node to provide load balancing and failover (as REST injection is done on analytics nodes). Also, a load balancer that is able to do TCP load balancing (not just http) can also be used for SMTP load balancing.