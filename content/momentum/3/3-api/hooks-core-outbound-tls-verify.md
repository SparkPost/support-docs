---
lastUpdated: "03/26/2020"
title: "outbound_tls_verify"
description: "outbound tls verify int outbound tls verify closure message void closure email message message int has core outbound tls verify hook void register core outbound tls verify hook first hook closure ec hook core outbound tls verify func t hook void closure void register core outbound tls verify hook last..."
---

<a name="hooks.core.outbound_tls_verify"></a> 
## Name

outbound_tls_verify

## Synopsis

`#include "hooks/core/outbound_tls_verify.h"`

| `int **outbound_tls_verify** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_outbound_tls_verify_hook** (` | `)`; |   |

| `void **register_core_outbound_tls_verify_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_verify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_outbound_tls_verify_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_verify_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_outbound_tls_verify_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp39974208"></a> 
## Description

`outbound_tls_verify` is called from within the SMTP delivery state machine to ascertain how the TLS certificate should be verified for the given *`message`*:

<dl class="variablelist">

<dt>EC_SSL_VERIFY_VALIDCA</dt>

<dd>

the certificate must only be signed by a valid certificate authority.

</dd>

<dt>EC_SSL_VERIFY_HOSTNAME</dt>

<dd>

the certificate must be signed by a valid certificate authority and the hostname presented must match the host to which we connected.

</dd>

<dt>EC_SSL_VERIFY_NONE</dt>

<dd>

No verification will be performed.

</dd>

</dl>