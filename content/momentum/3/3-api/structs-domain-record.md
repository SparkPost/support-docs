---
lastUpdated: "03/26/2020"
title: "domain_record"
description: "The members of this struct are as follows To use this struct include the file dns ds h See also Chapter 20 DNS Functions..."
---

The members of this struct are as follows:

```
struct _domain_record
{
  /**
   * name and expiry must be the first two records
   * in this struct and cannot change types
   */
  char *domain;                  /* Domain name */
  u_int64_t expiry;              /* Expiry as an absolute time_t */
  mail_queue equeue;             /* Mail Queue */
  struct timeval last_delivery;  /* last delivery on this domain */
  mx_record **mxlist;            /* List of MXs */

  u_int32_t deliveries;          /* Number of deliveries */
  u_int32_t attempts;            /* Number of message attempts */
  u_int32_t transients;          /* Number of trans. failures */
  u_int32_t failures;            /* Number of failures */
  int mxcnt;                     /* Number of MX records */
  unsigned int recycled:1;       /* Is this domain recycled (in the drbhash) */
  ec_atomic_t referencecnt;      /* Is referenced by any outstandings */
  mxtype type;                   /* MX type () */
  u_int8_t dns_failures;         /* Number of sequential DNS failures */
};
```

To use this struct, include the file `dns_ds.h`.

### <a name="idp46565712"></a> See Also

See also [*DNS Functions*](/momentum/3/3-api/dns)