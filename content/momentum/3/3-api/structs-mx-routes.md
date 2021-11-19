---
lastUpdated: "03/26/2020"
title: "mx_routes"
description: "The members of this struct are as follows To use this struct include the file dns h ec config free mx routes..."
---

The members of this struct are as follows:

```
struct _mx_route_info
{
  int type;
  u_int8_t family;
  struct in6_addr address;
  char *delivery_method;
  char *name;
  int pref;
  int ttl;
  int port;
  ECDict params; /* deprecated, unused */
};

struct _mx_routes {
  int has_lookup;
  int cnt;
  mx_route_info *routes;
  char *name;
  int expires;
};
```

To use this struct, include the file `dns.h`.

### <a name="idp46375168"></a> See Also

[ec_config_free_mx_routes](/momentum/3/3-api/apis-ec-config-free-mx-routes)