---
lastUpdated: "03/26/2020"
title: "fetch_script"
description: "fetch script int fetch script closure uri optional args script seng error log void closure const char uri SIEVEARGS optional args string script SENG seng string error log int has sieve fetch script hook void register sieve fetch script hook first hook closure ec hook sieve fetch script func t..."
---

<a name="hooks.sieve.fetch_script"></a> 
## Name

fetch_script

## Synopsis

`#include "hooks/sieve/fetch_script.h"`

| `int **fetch_script** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">uri</var>, |   |
|   | <var class="pdparam">optional_args</var>, |   |
|   | <var class="pdparam">script</var>, |   |
|   | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">uri</var>`;
`SIEVEARGS * <var class="pdparam">optional_args</var>`;
`string * <var class="pdparam">script</var>`;
`SENG * <var class="pdparam">seng</var>`;
`string * <var class="pdparam">error_log</var>`;

| `int **has_sieve_fetch_script_hook** (` | `)`; |   |

| `void **register_sieve_fetch_script_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_fetch_script_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_sieve_fetch_script_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_fetch_script_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_sieve_fetch_script_hook** (` | <var class="pdparam">uri</var>, |   |
|   | <var class="pdparam">optional_args</var>, |   |
|   | <var class="pdparam">script</var>, |   |
|   | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`const char * <var class="pdparam">uri</var>`;
`SIEVEARGS * <var class="pdparam">optional_args</var>`;
`string * <var class="pdparam">script</var>`;
`SENG * <var class="pdparam">seng</var>`;
`string * <var class="pdparam">error_log</var>`;<a name="idp38006752"></a> 
## Description

This hook allows modules to plug in their own custom Sieve script storage and retrieval mechanism when processing runtime included scripts. The Momentum core doesn't provide this facility by itself; the Sieve validation module registers a compile_script hook of its own to implement this feature, which in turns calls out to the fetch_script hooks. If you need to add a storage mechanism that isn't supported via the Sieve validation module, you can do so by implementing this hook.

*`uri`* is the URI from the `ec_include` statement in the calling Sieve script, and *`optional_args`* will be either `NULL` or a valid `SIEVEARGS` specifying some kind of optional parameters for the *`uri`*. It is up to your hook implementation to interpret these.

When called, the hook is responsible for resolving the supplied *`uri`* and *`optional_args`* into a UTF-8 encoded Sieve script. On success, it should populate *`script`* with the text for the script, and then return `SIV_DONE`. The hook implementation must only add content to *`script`* once it has fully retrieved the script text; it MUST NOT cache the string pointer for later use; it is a transient resource that will become invalidated as soon as the hook function returns. *`script`* is supplied uninitialized; the hook implementation is responsible for allocating the string buffer, by calling the `STRING_INIT` macro or through some other means.

If an error occurred, the hook should log the reason for the error and return SIV_DONE.

If the retrieval process is going to block the caller, the hook implementation may arrange for it to complete asynchronously, stashing *`seng`* in an appropriate location and returning `SIV_AGAIN`. When the retrieval completes, the implementation may call `sieve_resume` to restart the Sieve engine processing and retry the include. If *`seng`* is `NULL`, or if `sieve_seng_get_can_go_async` returns `0` you **MUST NOT**     run asynchronously.

If the *`uri`* is not understood by the hook implementation, it should return `SIV_CONT` to allow additional hooks the opportunity to handle the compilation.