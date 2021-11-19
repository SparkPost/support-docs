---
lastUpdated: "03/26/2020"
title: "compile_script"
description: "compile script int compile script closure uri optional args script ptr seng error log void closure const char uri SIEVEARGS optional args SIEVE script ptr SENG seng string error log int has sieve compile script hook void register sieve compile script hook first hook closure ec hook sieve compile script..."
---

<a name="hooks.sieve.compile_script"></a> 
## Name

compile_script

## Synopsis

`#include "hooks/sieve/compile_script.h"`

| `int **compile_script** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">uri</var>, |   |
|   | <var class="pdparam">optional_args</var>, |   |
|   | <var class="pdparam">script_ptr</var>, |   |
|   | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">uri</var>`;
`SIEVEARGS * <var class="pdparam">optional_args</var>`;
`SIEVE ** <var class="pdparam">script_ptr</var>`;
`SENG * <var class="pdparam">seng</var>`;
`string * <var class="pdparam">error_log</var>`;

| `int **has_sieve_compile_script_hook** (` | `)`; |   |

| `void **register_sieve_compile_script_hook_first** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_compile_script_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `void **register_sieve_compile_script_hook_last** (` | <var class="pdparam">hook</var>, |   |
|   | <var class="pdparam">closure</var>`)`; |   |

`ec_hook_sieve_compile_script_func_t <var class="pdparam">hook</var>`;
`void *<var class="pdparam">closure</var>`;

| `int **call_sieve_compile_script_hook** (` | <var class="pdparam">uri</var>, |   |
|   | <var class="pdparam">optional_args</var>, |   |
|   | <var class="pdparam">script_ptr</var>, |   |
|   | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">error_log</var>`)`; |   |

`const char * <var class="pdparam">uri</var>`;
`SIEVEARGS * <var class="pdparam">optional_args</var>`;
`SIEVE ** <var class="pdparam">script_ptr</var>`;
`SENG * <var class="pdparam">seng</var>`;
`string * <var class="pdparam">error_log</var>`;<a name="idp45064112"></a> 
## Description

This hook allows modules to plug in their own custom Sieve script storage, retrieval and caching mechanism when processing runtime included scripts. The Momentum core doesn't provide this facility by itself; the Sieve validation module registers a compile_script hook of its own to implement this feature. If you need replace storage/caching mechanism provided by Sieve, you can do so by implementing this hook. If you just need to add a new retrieval layer, you should look at the sieve_fetch_script hook instead.

*`uri`* is the URI from the `ec_include` statement in the calling Sieve script, and *`optional_args`* will be either `NULL` or a valid `SIEVEARGS` specifying some kind of optional parameters for the *`uri`*. It is up to your hook implementation to interpret these.

When called, the hook is responsible for resolving the supplied *`uri`* and *`optional_args`* into a compiled Sieve script. On success, it should set *`script_ptr`* to point at a valid `SIEVE*` representing the compiled script, and return `SIV_DONE`.

If an error occurred, the hook should log the reason for the error, set *`script_ptr`* to `NULL` and return SIV_DONE.

If the compilation process is going to block the caller, the hook implementation may arrange for it to complete asynchronously, stashing *`seng`* in an appropriate location and returning `SIV_AGAIN`. When the compilation completes, the implementation may call `sieve_resume` to restart the Sieve engine processing and retry the include. If *`seng`* is `NULL`, or if `sieve_seng_get_can_go_async` returns `0` you **MUST NOT**     run asynchronously.

If the *`uri`* is not understood by the hook implementation, it should return `SIV_CONT` to allow additional hooks the opportunity to handle the compilation.