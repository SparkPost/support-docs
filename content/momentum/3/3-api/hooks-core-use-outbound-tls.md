---
lastUpdated: "03/26/2020"
title: "use_outbound_tls"
description: "use outbound tls int use outbound tls closure message void closure email message message int has core use outbound tls hook void register core use outbound tls hook first hook closure ec hook core use outbound tls func t hook void closure void register core use outbound tls hook last..."
---

<a name="hooks.core.use_outbound_tls"></a> 
## Name

use_outbound_tls

## Synopsis

`#include "hooks/core/use_outbound_tls.h"`

| `int **use_outbound_tls** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">message</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`email_message * <var class="pdparam">message</var>`;

| `int **has_core_use_outbound_tls_hook** (` | `)`; |   |

| `void **register_core_use_outbound_tls_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_use_outbound_tls_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_use_outbound_tls_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_use_outbound_tls_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_use_outbound_tls_hook** (` | <var class="pdparam">message</var>`)`; |   |

`email_message * <var class="pdparam">message</var>`;<a name="idp33730752"></a> 
## Description

`use_outbound_tls` is called from within the SMTP delivery state machine to ascertain if TLS should be used for this *`message`*:

<dl class="variablelist">

<dt>EC_USE_TLS_NO</dt>

<dd>

TLS must not be used for this message.

</dd>

<dt>EC_USE_TLS_IFAVAILABLE</dt>

<dd>

If TLS is available (offered by the remote server) then the state machine should upgrade the current SMTP session to use TLS.

</dd>

<dt>EC_USE_TLS_REQUIRED</dt>

<dd>

The message in question requires TLS to be used. If it is unavailable, the message should not be sent.

</dd>

</dl>