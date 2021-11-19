---
lastUpdated: "03/26/2020"
title: "swap_out_multi"
description: "swap out multi Override or augment the internal call to swap out multi int core swap out multi closure head success void closure sp async message head int success The swap out multi hook allows modules to override or augment the internal call to swap out multi This hook is..."
---

<a name="hooks.core.swap_out_multi"></a> 
## Name

swap_out_multi — Override or augment the internal call to swap_out_multi

## Synopsis

`#include "hooks/core/swap_out_multi.h"`

| `int **core_swap_out_multi** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">head</var>, |   |
|   | <var class="pdparam">success</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`sp_async_message * <var class="pdparam">head</var>`;
`int * <var class="pdparam">success</var>`;<a name="idp37099664"></a> 
## Description

The `swap_out_multi` hook allows modules to override or augment the internal call to swap_out_multi. This hook is useful for having simultaneous access to all messages in a potentially multi-recipient setting, after reception has been confirmed, but before delivery takes place.

**<a name="idp37101568"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure.

</dd>

<dt>head</dt>

<dd>

An sp_async_message. See [“sp_async_message”](/momentum/3/3-api/structs-sp-async-message).

</dd>

<dt>success</dt>

<dd>

This parameter is an output parameter for the provider. Set this parameter to `1` for success or `0` for failure.

</dd>

</dl>

**<a name="idp33689104"></a> Return Values**

If this hook returns non-zero, then the core swap-out-multi hook will not be run, and the `success` parameter passed by reference as the third argument will be returned to the system.

**<a name="idp33690608"></a> Threading**

This hook will be invoked in any thread.