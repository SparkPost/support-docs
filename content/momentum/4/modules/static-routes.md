---
lastUpdated: "03/26/2020"
title: "static-routes - Static Routes"
description: "Configuration Change This feature is available in Momentum 4 2 and later The static routes module routes all traffic to a given server by IP address and port It supports both I Pv 4 and I Pv 6 This module performs much better than the routes option which is known..."
---

<a name="idp23088592"></a> 

**Configuration Change. ** This feature is available in Momentum 4.2 and later.

The `static_routes` module routes all traffic to a given server by IP address and port. It supports both IPv4 and IPv6.

This module performs much better than the [routes](/momentum/4/config/ref-routes) option, which is known to cause performance issues because it makes every domain in the system share connections. When domains share an MX, the system will try to find idle connections in other domain containers. When many domains share an MX, there are a lot of domains searching for idle connections, which slows the system down considerably.

<a name="modules.static_routes.example"></a> 


`static_routes {}`

and

```
static_routes
{
  target = "1.2.3.4:1234"
}
```