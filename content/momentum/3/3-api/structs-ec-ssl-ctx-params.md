---
lastUpdated: "03/26/2020"
title: "ec_ssl_ctx_params"
description: "This struct is defined as follows To use this struct include the file ec ssl h ec ssl set ctx param..."
---

This struct is defined as follows:

```
/* this struct is passed to core_get_outbound_tls_parameters_hook() */
struct _ec_ssl_ctx_params {
  int use_tls;
  int tls_verify;
  /* these strings are either NULL pointers or are
   * allocated using MEMTYPE_STRING.
   * use ec_ssl_set_ctx_param() to set them; it will
   * correctly manage the memory for you. */
  char *certfile;
  char *keyfile;
  char *ca;
  char *cipherlist;
};
```

To use this struct, include the file `ec_ssl.h`.

### <a name="idp45148064"></a> See Also

[ec_ssl_set_ctx_param](/momentum/3/3-api/apis-ec-ssl-set-ctx-param)