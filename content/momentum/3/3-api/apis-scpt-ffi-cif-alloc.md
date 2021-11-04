---
lastUpdated: "03/26/2020"
title: "scpt_ffi_cif_alloc"
description: "scpt ffi cif alloc Allocate an ffi cif via the cache void scpt ffi cif alloc nargs key ret type args int nargs const char key void ret type void args This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.scpt_ffi_cif_alloc"></a> 
## Name

scpt_ffi_cif_alloc — Allocate an ffi_cif via the cache

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `void * **scpt_ffi_cif_alloc** (` | <var class="pdparam">nargs</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">ret_type</var>, |   |
|   | <var class="pdparam">args</var>`)`; |   |

`int <var class="pdparam">nargs</var>`;
`const char * <var class="pdparam">key</var>`;
`void * <var class="pdparam">ret_type</var>`;
`void ** <var class="pdparam">args</var>`;<a name="idp59076032"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Allocate an ffi_cif via the cache.

**<a name="idp59080800"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59082352"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")