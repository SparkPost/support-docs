---
lastUpdated: "03/26/2020"
title: "post_swap_in_meta"
description: "post swap in meta Allows modules to perform actions immediately after the metadata file has been read from the spool This hook is called even when the metadata fetch fails int core post swap in meta closure msg flags serror rv void closure ec message msg int flags int serror..."
---

<a name="hooks.core.post_swap_in_meta"></a> 
## Name

post_swap_in_meta — Allows modules to perform actions immediately after the metadata file has been read from the spool. This hook is called even when the metadata fetch fails.

## Synopsis

`#include "hooks/core/swap_in_meta.h"`

| `int **core_post_swap_in_meta** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">serror</var>, |   |
|   | <var class="pdparam">rv</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`int <var class="pdparam">flags</var>`;
`int <var class="pdparam">serror</var>`;
`int * <var class="pdparam">rv</var>`;<a name="idp31348032"></a> 
## Description

Allows modules to perform actions immediately after the metadata file has been read from the spool. This hook is called even when the metadata fetch fails.

**<a name="idp31349376"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An `ec_message` whose metadata has been swapped in. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message).

</dd>

<dt>flags</dt>

<dd>

One of `METAF_MSG` or `METAF_DICT`.

</dd>

<dt>serror</dt>

<dd>

On failure, this parameter will contain the `errno` value.

</dd>

<dt>rv</dt>

<dd>

Indicates that the metadata fetch succeeded if `*rv` is `IO_DONE`) or failed if `*rv` is `IO_TRANS_FAIL` or `IO_FAIL`.

</dd>

</dl>

**<a name="idp31364144"></a> Return Values**

If this hook returns `1`, then any further processing for the metadata swap-in will be skipped. The hook should only return `1` if it fails and, in this case, it should set *`*rv`* to `IO_FAIL`.

**<a name="idp31366912"></a> Threading**

This hook will be called in the `Scheduler` thread.