---
lastUpdated: "03/26/2020"
title: "sieve_compare_compile"
description: "sieve compare compile pre compile matching state for a sieve comparator int sieve compare compile sieve comp right SIEVE sieve struct sieve compare info comp SIEVEARGS right This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.sieve_compare_compile"></a> 
## Name

sieve_compare_compile — pre-compile matching state for a sieve comparator

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_compare_compile** (` | <var class="pdparam">sieve</var>, |   |
|   | <var class="pdparam">comp</var>, |   |
|   | <var class="pdparam">right</var>`)`; |   |

`SIEVE * <var class="pdparam">sieve</var>`;
`struct sieve_compare_info * <var class="pdparam">comp</var>`;
`SIEVEARGS * <var class="pdparam">right</var>`;<a name="idp59812864"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

pre-compile matching state for a sieve comparator.

Intended to be used from an extension compilation callback, this function will compile a standard sieve matching operand for faster execution.

**<a name="idp59816336"></a> Return Values**

Returns 0 in the case of a fatal compilation error, 1 otherwise. A successful return does not imply that the match could be accelerated, just that everything is ok.