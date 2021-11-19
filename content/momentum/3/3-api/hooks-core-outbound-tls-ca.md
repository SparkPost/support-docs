---
lastUpdated: "03/26/2020"
title: "outbound_tls_ca"
description: "outbound tls ca char outbound tls ca closure message void closure email message message int has core outbound tls ca hook void register core outbound tls ca hook first hook closure ec hook core outbound tls ca func t hook void closure void register core outbound tls ca hook last..."
---

<a name="hooks.core.outbound_tls_ca"></a> 
## Name

outbound_tls_ca

## Synopsis

`#include "hooks/core/outbound_tls_ca.h"`

| `char * **outbound_tls_ca** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_outbound_tls_ca_hook** (` | `)`; |   |

| `void **register_core_outbound_tls_ca_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_ca_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_outbound_tls_ca_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_ca_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `char * **call_core_outbound_tls_ca_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp40483472"></a> 
## Description

Functions registered here can provide Momentum with a certificate authority certificate chain to be used to validate the remote system's TLS credentials based of the *`message`*.