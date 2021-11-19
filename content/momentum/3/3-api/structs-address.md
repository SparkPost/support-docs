---
lastUpdated: "03/26/2020"
title: "address"
description: "This struct is defined as follows To use this struct include the file dns ds h connection address and Section 68 4 address metrics..."
---

This struct is defined as follows:

```
struct _address
{
  u_int8_t family;              /* AF_INET or AF_INET6 */
  union _address_inaddr {
    struct in_addr inaddr;      /* IPv4 address */
    struct in6_addr inaddr6;    /* IPv6 address */
  } inaddr;
};
```

To use this struct, include the file `dns_ds.h`.

### <a name="idp46120336"></a> See Also

[connection_address](/momentum/3/3-api/apis-connection-address) and [“address_metrics”](/momentum/3/3-api/structs-address-metrics)