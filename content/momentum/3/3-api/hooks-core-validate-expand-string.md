---
lastUpdated: "03/26/2020"
title: "validate_expand_string"
description: "validate expand string int validate expand string closure result s local part domain current domain ac ctx need void closure char result char s char local part char domain char current domain accept construct ac validate context ctx dns cache query need int has core validate expand string hook void..."
---

<a name="hooks.core.validate_expand_string"></a> 
## Name

validate_expand_string

## Synopsis

`#include "hooks/core/validate_expand_string.h"`

| `int **validate_expand_string** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">result</var>, |   |
|   | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">local_part</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">current_domain</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">need</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`char ** <var class="pdparam">result</var>`;
`char * <var class="pdparam">s</var>`;
`char * <var class="pdparam">local_part</var>`;
`char * <var class="pdparam">domain</var>`;
`char * <var class="pdparam">current_domain</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`dns_cache_query * <var class="pdparam">need</var>`;

| `int **has_core_validate_expand_string_hook** (` | `)`; |   |

| `void **register_core_validate_expand_string_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_expand_string_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_core_validate_expand_string_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_core_validate_expand_string_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_core_validate_expand_string_hook** (` | <var class="pdparam">result</var>, |   |
|   | <var class="pdparam">s</var>, |   |
|   | <var class="pdparam">local_part</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">current_domain</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">need</var>`)`; |   |

`char ** <var class="pdparam">result</var>`;
`char * <var class="pdparam">s</var>`;
`char * <var class="pdparam">local_part</var>`;
`char * <var class="pdparam">domain</var>`;
`char * <var class="pdparam">current_domain</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`dns_cache_query * <var class="pdparam">need</var>`;<a name="idp36691328"></a> 
## Description

Note that this hook point is deprecated in Momentum 2.2 in favor of the new macro expansion API, ec_interpolate_string().

In sieve and elsewhere in the validation system, strings are interpolated with values regarding the current SMTP session. This hook allows custom macro expanders to be registered to handle new macro tokens.

`**result` is the resulting string subsequent to successful macro expansion. *`s`* is the input string. *`local_part`*, *`domain`*, *`current_domain`* are aspect only available after `MAIL FROM` has been issued (they are particularly useful for SPF macro expansion. *`ac`* and *`ctx`* are provided for introspection during the expansion process.

By returning `MACRO_EAGAIN` and populating the *`need`* argument, you instruct Momentum to satisfy a DNS query and reattempt macro expansion. Otherwise, `MACRO_PASS` can be returned to indicate that the interpolation has been completed.