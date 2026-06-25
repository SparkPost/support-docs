---
lastUpdated: "06/03/2026"
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

> **NOTE: OpenSSL compatibility (Momentum 5.3.0 and later).** This hook is unchanged — the signature and the passphrase callbacks above remain valid. The items below were already inert on the OpenSSL build Momentum actually links against (1.1.1, as on RHEL 8), so 5.3.0 makes their status explicit rather than withdrawing a working capability. The supported range is 1.1.1 through the 3.5.x series. Points to be aware of if your module alters the context here:
>
> *   The context is created with `TLS_method()`. This is a rename, not a behavior change: `SSLv23_*_method()` has been a `#define` alias for `TLS_method()` since OpenSSL 1.1.0. `SSLv2`/`SSLv3` were already never negotiated, and `TLSv1.0`/`TLSv1.1` are typically blocked by the system crypto policy (for example, the RHEL 8 DEFAULT policy permits only TLS 1.2 and TLS 1.3). See [tls_protocols](/momentum/4/config/tls-protocols).
> *   The temporary-RSA mechanism (`SSL_CTX_set_tmp_rsa_callback()`) is retired. It was already a no-op on 1.1.1 — export-grade cipher suites, the only thing it served, do not exist in TLS 1.1 and later — so a fixup that set such a callback was already having no effect.
> *   `ENGINE`-based manipulation is the one genuine version dependency, not an "already ignored" case: it **still works on OpenSSL 1.1.1 builds (such as RHEL 8)** and only stops working if your deployment moves to an OpenSSL 3.x build, where the `ENGINE` API gives way to the provider model. On OpenSSL 3.x, configure the appropriate provider at the library level instead. See [crypto_engine](/momentum/4/config/ref-crypto-engine).
>
> So when upgrading to 5.3.0 on the same OpenSSL 1.1.1 platform, an existing fixup module behaves as before. The case that warrants review is moving to an OpenSSL 3.x build, where `ENGINE`-based context manipulation done here will silently have no effect (no build or runtime error).

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
