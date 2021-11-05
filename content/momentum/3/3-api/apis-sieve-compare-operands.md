---
lastUpdated: "03/26/2020"
title: "sieve_compare_operands"
description: "sieve compare operands execute a sieve comparator match int sieve compare operands seng comp left right SENG seng struct sieve compare info comp SIEVEARGS left SIEVEARGS right This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.sieve_compare_operands"></a> 
## Name

sieve_compare_operands — execute a sieve comparator match

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_compare_operands** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">comp</var>, |   |
|   | <var class="pdparam">left</var>, |   |
|   | <var class="pdparam">right</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`struct sieve_compare_info * <var class="pdparam">comp</var>`;
`SIEVEARGS * <var class="pdparam">left</var>`;
`SIEVEARGS * <var class="pdparam">right</var>`;<a name="idp59828064"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

execute a sieve comparator match.

Performs a standard sieve matching operation, based on the comparison information provided.

If the right operand was previously compiled, that compiled state will be re-used.

**<a name="idp59832000"></a> Return Values**

Returns a boolean to indicate a successful match according to the criteria provided.