---
lastUpdated: "03/26/2020"
title: "inbound_smtp_tls_verify_callback"
description: "inbound smtp tls verify callback int inbound smtp tls verify callback closure mc ctx preverify ok subject issuer x 509 ctx void closure message construct mc ec ssl ctx ctx int preverify ok const char subject const char issuer struct ssl x 509 store ctx st x 509 ctx int..."
---

<a name="hooks.core.inbound_smtp_tls_verify_callback"></a> 
## Name

inbound_smtp_tls_verify_callback

## Synopsis

`#include "hooks/core/inbound_smtp_tls_verify_callback.h"`

| `int **inbound_smtp_tls_verify_callback** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">preverify_ok</var>, |   |
|   | <var class="pdparam">subject</var>, |   |
|   | <var class="pdparam">issuer</var>, |   |
|   | <var class="pdparam">x509ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`message_construct * <var class="pdparam">mc</var>`;
`ec_ssl_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">preverify_ok</var>`;
`const char * <var class="pdparam">subject</var>`;
`const char * <var class="pdparam">issuer</var>`;
`struct ssl_x509_store_ctx_st * <var class="pdparam">x509ctx</var>`;

| `int **has_core_inbound_smtp_tls_verify_callback_hook** (` | `)`; |   |

| `void **register_core_inbound_smtp_tls_verify_callback_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inbound_smtp_tls_verify_callback_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_inbound_smtp_tls_verify_callback_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_inbound_smtp_tls_verify_callback_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_inbound_smtp_tls_verify_callback_hook** (` | <var class="pdparam">mc</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">preverify_ok</var>, |   |
|   | <var class="pdparam">subject</var>, |   |
|   | <var class="pdparam">issuer</var>, |   |
|   | <var class="pdparam">x509ctx</var>`)`; |   |

`message_construct * <var class="pdparam">mc</var>`;
`ec_ssl_ctx * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">preverify_ok</var>`;
`const char * <var class="pdparam">subject</var>`;
`const char * <var class="pdparam">issuer</var>`;
`struct ssl_x509_store_ctx_st * <var class="pdparam">x509ctx</var>`;<a name="idp45711920"></a> 
## Description

This hook allows you to augment the built-in TLS verification process for inbound SMTP sessions. The parameters are the same as the ec_ssl_verify_callback_func defined in ec_ssl.h, with the addition of the message_construct for the current session.

The *`subject`*, *`issuer`* and *`x509ctx`* parameters may be NULL in certain circumstances -- when client certificate verification fails or no client certificate was presented. This hook is called even when the listener is not configured to verify client certificates (`verify_mode` set to `none`).