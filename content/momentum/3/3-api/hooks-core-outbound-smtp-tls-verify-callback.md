---
lastUpdated: "03/26/2020"
title: "outbound_smtp_tls_verify_callback"
description: "outbound smtp tls verify callback This hook allows you to augment the built in TLS verification process for outbound SMTP sessions int core outbound smtp tls verify callback closure dc sslctx preverify ok subject issuer x 509 ctx void closure delivery construct dc ec ssl ctx sslctx int preverify ok..."
---

<a name="hooks.core.outbound_smtp_tls_verify_callback"></a> 
## Name

outbound_smtp_tls_verify_callback — This hook allows you to augment the built-in TLS verification process for outbound SMTP sessions.

## Synopsis

`#include "hooks/core/outbound_smtp_tls_verify_callback.h"`

| `int **core_outbound_smtp_tls_verify_callback** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">dc</var>, |   |
|   | <var class="pdparam">sslctx</var>, |   |
|   | <var class="pdparam">preverify_ok</var>, |   |
|   | <var class="pdparam">subject</var>, |   |
|   | <var class="pdparam">issuer</var>, |   |
|   | <var class="pdparam">x509ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`delivery_construct * <var class="pdparam">dc</var>`;
`ec_ssl_ctx * <var class="pdparam">sslctx</var>`;
`int <var class="pdparam">preverify_ok</var>`;
`const char * <var class="pdparam">subject</var>`;
`const char * <var class="pdparam">issuer</var>`;
`struct ssl_x509_store_ctx_st * <var class="pdparam">x509ctx</var>`;<a name="idp36674880"></a> 
## Description

This hook allows you to augment the built-in TLS verification process for outbound SMTP sessions. The parameters are the same as the `ec_ssl_verify_callback_func` defined in `ec_ssl.h`, with the addition of the `delivery_construct` for the current session.

This hook is not called when server certificate verification is disabled, that is, when `TLS_verify` is set to `no`.

**<a name="idp36679024"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>dc</dt>

<dd>

The delivery_construct struct. See [“delivery_construct”](/momentum/3/3-api/structs-delivery-construct).

</dd>

<dt>sslctx</dt>

<dd>

An `ec_ssl_ctx` struct passed through from the OpenSSL verify callback. For documentation of this data structure see [“ec_ssl_ctx”](/momentum/3/3-api/structs-ec-ssl-ctx)

</dd>

<dt>preverify_ok</dt>

<dd>

Passed through from the OpenSSL verify callback. Indicates whether the verification of the certificate in question passed (`preverify_ok=1`) or not (`preverify_ok=0`).

</dd>

<dt>subject</dt>

<dd>

Subject of the peer in the X509 certificate.

</dd>

<dt>issuer</dt>

<dd>

The issuer of the peer in the X509 certificate.

</dd>

<dt>x509ctx</dt>

<dd>

An `ssl_x509_store_ctx_st` structure.

</dd>

</dl>

**<a name="idp40461104"></a> Return Values**

Returns `1` for "verification successful" and `0` for "verification UNsuccessful".

**<a name="idp40462944"></a> Threading**

This hook will be called in the `Scheduler` thread.