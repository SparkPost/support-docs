---
lastUpdated: "03/26/2020"
title: "cidrnode_ipv4"
description: "This struct is a typedef of cidrnode ipv 4 It is defined as follows To use this struct include the file cidrtree h Chapter 10 CIDR Functions..."
---

This struct is a typedef of `_cidrnode_ipv4`. It is defined as follows:

```
struct _cidrnode_ipv4 {
  int threadsafe;
  ck_spinlock_t lock;
  u_int8_t type;
  u_int32_t mask;
  u_int32_t base; /* IP address _NOT_ struct in_addr as it is in host format */
  u_int32_t size;
  struct _cidrnode_ipv4 *low;
  struct _cidrnode_ipv4 *high;
};
```

To use this struct, include the file `cidrtree.h`.

### <a name="idp37260336"></a> See Also

[*CIDR Functions*](/momentum/3/3-api/cidr)