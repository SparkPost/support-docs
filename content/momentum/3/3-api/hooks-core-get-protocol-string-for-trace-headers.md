---
lastUpdated: "03/26/2020"
title: "get_protocol_string_for_trace_headers"
description: "get protocol string for trace headers const char get protocol string for trace headers closure ac ctx mess void closure accept construct ac validate context ctx email message mess int has core get protocol string for trace headers hook void register core get protocol string for trace headers hook first..."
---

<a name="hooks.core.get_protocol_string_for_trace_headers"></a> 
## Name

get_protocol_string_for_trace_headers

## Synopsis

`#include "hooks/core/get_protocol_string_for_trace_headers.h"`

| `const char* **get_protocol_string_for_trace_headers** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mess</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`email_message * <var class="pdparam">mess</var>`;

| `int **has_core_get_protocol_string_for_trace_headers_hook** (` | `)`; |   |

| `void **register_core_get_protocol_string_for_trace_headers_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_get_protocol_string_for_trace_headers_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_get_protocol_string_for_trace_headers_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_get_protocol_string_for_trace_headers_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `const char* **call_core_get_protocol_string_for_trace_headers_hook** (` | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">mess</var>`)`; |   |

`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`email_message * <var class="pdparam">mess</var>`;<a name="idp37349792"></a> 
## Description

The `get_protocol_string_for_trace_headers` hook allows modules to customize the transmission type string that is used when Momentum builds the Received: header. The default behavior is to observe RFC 2821 and RFC 3848\. If your hook wants to override the default, then it should return the desired string. If it wants to take no action, return NULL; the default will then be used. The string that you return is assumed to be in static storage; the caller of this hook will not attempt to free it.