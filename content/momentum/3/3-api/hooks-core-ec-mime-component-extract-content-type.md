---
lastUpdated: "03/26/2020"
title: "ec_mime_component_extract_content_type"
description: "ec mime component extract content type int ec mime component extract content type closure part content type buf ct len charset buf charset len void closure ec mime component part char content type buf int ct len char charset buf int charset len int has core ec mime component extract..."
---

<a name="hooks.core.ec_mime_component_extract_content_type"></a> 
## Name

ec_mime_component_extract_content_type

## Synopsis

`#include "hooks/core/ec_mime_component_extract_content_type.h"`

| `int **ec_mime_component_extract_content_type** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">content_type_buf</var>, |   |
|   | <var class="pdparam">ct_len</var>, |   |
|   | <var class="pdparam">charset_buf</var>, |   |
|   | <var class="pdparam">charset_len</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_mime_component * <var class="pdparam">part</var>`;
`char * <var class="pdparam">content_type_buf</var>`;
`int <var class="pdparam">ct_len</var>`;
`char * <var class="pdparam">charset_buf</var>`;
`int <var class="pdparam">charset_len</var>`;

| `int **has_core_ec_mime_component_extract_content_type_hook** (` | `)`; |   |

| `void **register_core_ec_mime_component_extract_content_type_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_mime_component_extract_content_type_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_ec_mime_component_extract_content_type_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_ec_mime_component_extract_content_type_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_ec_mime_component_extract_content_type_hook** (` | <var class="pdparam">part</var>, |   |
|   | <var class="pdparam">content_type_buf</var>, |   |
|   | <var class="pdparam">ct_len</var>, |   |
|   | <var class="pdparam">charset_buf</var>, |   |
|   | <var class="pdparam">charset_len</var>`)`; |   |

`ec_mime_component * <var class="pdparam">part</var>`;
`char * <var class="pdparam">content_type_buf</var>`;
`int <var class="pdparam">ct_len</var>`;
`char * <var class="pdparam">charset_buf</var>`;
`int <var class="pdparam">charset_len</var>`;<a name="idp28224752"></a> 
## Description

This is probably not the hook you're looking for.

This hook is called by the built-in MIME parser used in the sieve macro system to ascertain a message's content-type and charset. It provides you the opportunity to override the default verdict it would otherwise reach.

If you return EC_MIME_COMPONENT_EXTRACT_CONTENT_TYPE_HOOK_CONT, then the next hook in the chain is called. If EC_MIME_COMPONENT_EXTRACT_CONTENT_TYPE_HOOK_CONT is the return value of the last hook in the chain, then the default message_part_get_content_type decision is rendered.

If you return EC_MIME_COMPONENT_EXTRACT_CONTENT_TYPE_HOOK_OK, then subsequent hooks and the default core behavior are skipped, and ec_message_part_get_content_type will return to its caller with `content_type_buf` and `charset_buf` set by your hook.