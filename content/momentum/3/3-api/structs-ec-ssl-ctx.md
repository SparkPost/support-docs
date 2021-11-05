---
lastUpdated: "03/26/2020"
title: "ec_ssl_ctx"
description: "This struct is defined as follows To use this struct include the file ec ssl h ec ssl set verify errmsg..."
---

This struct is defined as follows:

```
/* This callback allows message transports to augment the basic
 * TLS verification process.  You are passed the ec_ssl_ctx,
 * your own closure, the subject and issuer of the peer.
 * preverify_ok and x509ctx are passed through from the OpenSSL
 * verify callback */
typedef int (*ec_ssl_verify_callback_func)(ec_ssl_ctx *ctx,
  void *closure,
  int preverify_ok, const char *subject,
  const char *issuer,
  struct ssl_x509_store_ctx_st *x509ctx);

struct _ec_ssl_ctx {
  struct ssl_ctx_st *ssl_ctx;
  struct ssl_st *ssl;
  int error_code;
  char *error_string;
  ec_ssl_verify_callback_func verify_cb;
  void *verify_closure;
};
```

To use this struct, include the file `ec_ssl.h`.

### <a name="idp41243280"></a> See Also

[ec_ssl_set_verify_errmsg](/momentum/3/3-api/apis-ec-ssl-set-verify-errmsg)