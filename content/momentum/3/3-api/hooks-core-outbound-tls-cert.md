---
lastUpdated: "03/26/2020"
title: "outbound_tls_cert"
description: "outbound tls cert char outbound tls cert closure message void closure email message message int has core outbound tls cert hook void register core outbound tls cert hook first hook closure ec hook core outbound tls cert func t hook void closure void register core outbound tls cert hook last..."
---

<a name="hooks.core.outbound_tls_cert"></a> 
## Name

outbound_tls_cert

## Synopsis

`#include "hooks/core/outbound_tls_cert.h"`

| `char * **outbound_tls_cert** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_outbound_tls_cert_hook** (` | `)`; |   |

| `void **register_core_outbound_tls_cert_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_cert_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_outbound_tls_cert_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_outbound_tls_cert_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `char * **call_core_outbound_tls_cert_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp40504336"></a> 
## Description

This hook allows a client certificate file to be specified for a given email message.