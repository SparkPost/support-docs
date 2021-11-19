---
lastUpdated: "03/26/2020"
title: "ec_ssl_SSL_CTX_fixup"
description: "ec ssl SSL CTX fixup This hook provides an opportunity for modules to alter the context and add passphrase callbacks via Open SSL functions void core ec ssl SSL CTX fixup closure sslctx type domain certfile keyfile clientca cipher list void closure struct ssl ctx st sslctx int type const..."
---

<a name="hooks.core.ec_ssl_SSL_CTX_fixup"></a> 
## Name

ec_ssl_SSL_CTX_fixup — This hook provides an opportunity for modules to alter the context and add passphrase callbacks via OpenSSL functions

## Synopsis

`#include "hooks/core/ec_ssl_SSL_CTX_fixup.h"`

| `void **core_ec_ssl_SSL_CTX_fixup** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">sslctx</var>, |   |
|   | <var class="pdparam">type</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">certfile</var>, |   |
|   | <var class="pdparam">keyfile</var>, |   |
|   | <var class="pdparam">clientca</var>, |   |
|   | <var class="pdparam">cipher_list</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`struct ssl_ctx_st * <var class="pdparam">sslctx</var>`;
`int <var class="pdparam">type</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">certfile</var>`;
`const char * <var class="pdparam">keyfile</var>`;
`const char * <var class="pdparam">clientca</var>`;
`const char * <var class="pdparam">cipher_list</var>`;<a name="idp42798880"></a> 
## Description

This hook is called after the SSL_CTX (struct ssl_ctx_st) context has been allocated, but before the private key has been loaded.

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

An `ec_ssl_ctx` struct. For documentation of this data structure see [“ec_ssl_ctx”](/momentum/3/3-api/structs-ec-ssl-ctx).

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