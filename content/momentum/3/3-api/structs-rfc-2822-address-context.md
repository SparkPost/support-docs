---
lastUpdated: "03/26/2020"
title: "rfc2822_address_context"
description: "This struct is defined as follows To use this struct include the file address h rfc 2822 address parse..."
---

This struct is defined as follows:

```
struct rfc2822_address {
  struct rfc2822_address *next;

  char *complete; /* the entire address */
  int len;

  /* pointers/lengths of various parts of the address */
  struct rfc2822_address_part_string {
    char *s;
    int l;
  }
  localpart,  /* localpart@domain */
  domain,   /* localpart@domain */
  user,     /* user+detail@domain */
  detail,   /* user+detail@domain */
  desc;     /* "John Smith" */

  unsigned is_group_addr:1; /* true if this address was expanded from a group */
};

struct rfc2822_address_context {
  struct rfc2822_address *addr; /* first address */
  int naddr;  /* number of addresses */
  char *freeme;
};
```

To use this struct, include the file `address.h`.

### <a name="idp34301104"></a> See Also

[rfc2822_address_parse](/momentum/3/3-api/apis-rfc-2822-address-parse)