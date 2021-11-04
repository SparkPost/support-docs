---
lastUpdated: "03/26/2020"
title: "address_metrics"
description: "This struct is defined as follows To use this struct include the file binding h ec smtp closeconn..."
---

This struct is defined as follows:

```
typedef struct _ec_address_metrics {
  /* these 5 are internal, do not poke them directly */
  union _address_metrics_address {
    struct in_addr address4;
    struct in6_addr address6;
  } address;
  u_int8_t family;
  ec_binding_slot binding_slot;
  ec_cache_elt *elt;
  ec_atomic_t expires;

  /* XXX these probably need atomic protection XXX */
  struct timeval failure;
  float avg_connecttime;
  float avg_deliverytime;
} address_metrics;
```

To use this struct, include the file `binding.h`.

### <a name="idp39853664"></a> See Also

[ec_smtp_closeconn](/momentum/3/3-api/apis-ec-smtp-closeconn)