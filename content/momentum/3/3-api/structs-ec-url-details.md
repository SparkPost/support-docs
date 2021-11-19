---
lastUpdated: "03/26/2020"
title: "ec_url_details"
description: "This struct is defined as follows To use this struct include the file misc ec url parse h ec httpsrv request url get..."
---

This struct is defined as follows:

```
typedef struct _ec_url_details {
  char *url;
  char *scheme;
  struct _ec_url_details_userinfo {
    char *user;
    char *pass;
  } userinfo;
  char *host;
  int port;
  char *path;
  char *raw_query;
  char *query;
  char *fragment;
  ECDict attrs;
} ec_url_details;
```

To use this struct, include the file `misc/ec_url_parse.h`.

### <a name="idp46448016"></a> See Also

[ec_httpsrv_request_url_get](/momentum/3/3-api/apis-ec-httpsrv-request-url-get)