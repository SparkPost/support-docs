---
lastUpdated: "03/26/2020"
title: "connection"
description: "This struct is defined as follows To use this struct include the file dns ds h Section 68 10 connection handle..."
---

This struct is defined as follows:

```
struct _connection
{
  int fd;                       /* The file descriptor! */
  int in_use;                   /* 0 = no, <0 trying, >0 using */
  smtp_state *state;             /* Current SMTP state */
  void *state_closure;          /* State's closure */
  int local_state;              /* State's local state */
  struct timeval statetime;     /* The first point in time for this state */
  struct timeval startdelivery; /* The first point in time for this state */
  int deliveries;               /* Number of deliveries that have happened */
  int esmtp;                    /* This connection is ESMTP */
  int addr_offset;              /* offset into host->addrs */
  domain_record *domain;        /* The domain to which we a alleged */
  mx_record *mx;                /* The MX record to which we are connected */
  ec_message *curr_message;       /* Current email_message being delivered on */
  Event *idle_fdevent;          /* The fd event still registered when idle */
  Event *death;                 /* The event that will kill us */
  unsigned int tcp_buffer;      /* tcp buffer size */
  ECDict capabilities;          /* remote mta capabilities set */
  ec_ssl_ctx_params tls_params;
  int tls_renegotiate;          /* TLS params changed since last msg on conn */
  int recipients; /* since 2.2.1.29, the number of 'rcpt to's issued */
};
```

To use this struct, include the file `dns_ds.h`.

### <a name="idp46396208"></a> See Also

[“connection_handle”](/momentum/3/3-api/structs-connection-handle)