---
lastUpdated: "03/26/2020"
title: "sieve_arg_delref"
description: "sieve arg delref Remove a reference to a Sieve argument void sieve arg delref arg SIEVEARGS arg Remove a Sieve argument Use this function with the values returned by sieve hash first item sieve hash next item and sieve get hash item arg The argument you wish to remove This..."
---

<a name="apis.sieve_arg_delref"></a> 
## Name

sieve_arg_delref — Remove a reference to a Sieve argument

## Synopsis

`#include "sieve/ecsieve.h"`

| `void **sieve_arg_delref** (` | <var class="pdparam">arg</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">arg</var>`;<a name="idp59724144"></a> 
## Description

Remove a Sieve argument. Use this function with the values returned by [sieve_hash_first_item](/momentum/3/3-api/apis-sieve-hash-first-item), [sieve_hash_next_item](/momentum/3/3-api/apis-sieve-hash-next-item) and [sieve_get_hash_item](/momentum/3/3-api/apis-sieve-get-hash-item).

**<a name="idp59727616"></a> Parameters**

<dl class="variablelist">

<dt>arg</dt>

<dd>

The argument you wish to remove.

</dd>

</dl>

**<a name="idp59730352"></a> Return Values**

This function returns void.

**<a name="idp59731264"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59732688"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")