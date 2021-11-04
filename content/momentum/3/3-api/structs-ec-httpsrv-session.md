---
lastUpdated: "03/26/2020"
title: "ec_httpsrv_session"
description: "This struct is defined as follows To use this struct include the file modules listeners httpsrv h Chapter 28 httpsrv Functions..."
---

This struct is defined as follows:

```
struct _ec_httpsrv_session {
  ec_atomic_t ref_cnt;
  int64_t drainage;
  int max_write;
  httpsrv_connection conn;
  httpsrv_request req;
  httpsrv_response res;
  ec_httpsrv_handler_func handler;
  ec_blobject *service_ctx;
  ec_blobject *sess_ctx;
  int job_class;
  accept_construct *ac;
  Event *idle;
  int idle_time;
  uint32_t cmd;
  char *remote_cn;
  char *auth_user;
  int wants_shutdown;
  char peer_address[INET6_ADDRSTRLEN];
  struct ec_auth_info ai;
};
```

To use this struct, include the file `modules/listeners/httpsrv.h`.

### <a name="idp39846576"></a> See Also

[*httpsrv Functions*](/momentum/3/3-api/3-api-httpsrv)