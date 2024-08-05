---
lastUpdated: "06/30/2024"
title: "ec_ssl_SSL_CTX_fixup"
description: "ec ssl SSL CTX fixup This hook provides an opportunity for modules to alter the context and add passphrase callbacks via Open SSL functions"
---

<a name="hooks.core.ec_ssl_SSL_CTX_fixup"></a> 
## Name

ec_ssl_SSL_CTX_fixup — This hook provides an opportunity for modules to alter the context and add passphrase callbacks via OpenSSL functions.

## Synopsis

`#include "hooks/core/ec_ssl_SSL_CTX_fixup.h"`

```
void core_ec_ssl_SSL_CTX_fixup (void *closure,
                                struct ssl_ctx_st *sslctx,
                                int type,
                                const char *domain,
                                const char *certfile,
                                const char *keyfile,
                                const char *clientca,
                                const char *cipher_list);
```
## Description

This hook is called after the SSL_CTX (`struct ssl_ctx_st`) context has been allocated, but before the private key has been loaded.

This hook provides an opportunity for modules to alter the context and add passphrase callbacks via these OpenSSL functions:

*   *`SSL_CTX_set_default_passwd_cb()`*
*   *`SSL_CTX_set_default_passwd_cb_userdata()`*

**<a name="idp42803952"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>sslctx</dt>

<dd>

This struct would be passed as-is to OpenSSL functions as the SSL_CTX parameter.

</dd>

<dt>type</dt>

<dd>

One of `EC_SSL_CLIENT` or `EC_SSL_SERVER`.

</dd>

<dt>domain</dt>

<dd>

The delivery domain.

</dd>

<dt>certfile</dt>

<dd>

SSL certificate.

</dd>

<dt>keyfile</dt>

<dd>

The private key.

</dd>

<dt>clientca</dt>

<dd>

List of client CAs.

</dd>

<dt>cipher_list</dt>

<dd>

The list of supported ciphers.

</dd>

</dl>

**<a name="idp42821472"></a> Return Values**

This hook returns `void`.

**<a name="idp42822832"></a> Threading**

This hook will be called in the `Scheduler` thread.
