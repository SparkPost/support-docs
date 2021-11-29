---
lastUpdated: "03/26/2020"
title: "sieve_get_arg_type"
description: "sieve get arg type Return the type of the specified Sieve argument enum sieve arg type sieve get arg type args n SIEVEARGS args int n Return the type of the specified Sieve argument args The argument list n Which argument to examine indexed from 0 The type of a..."
---

<a name="apis.sieve_get_arg_type"></a> 
## Name

sieve_get_arg_type — Return the type of the specified Sieve argument

## Synopsis

`#include "sieve/ecsieve.h"`

| `enum sieve_arg_type **sieve_get_arg_type** (` | <var class="pdparam">args</var>, |   |
|   | <var class="pdparam">n</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">args</var>`;
`int <var class="pdparam">n</var>`;<a name="idp60075168"></a> 
## Description

Return the type of the specified Sieve argument.

**<a name="idp60076400"></a> Parameters**

<dl class="variablelist">

<dt>args</dt>

<dd>

The argument list.

</dd>

<dt>n</dt>

<dd>

Which argument to examine, indexed from 0.

</dd>

</dl>

The type of a Sieve argument may not be known at compile time. Use this with caution during compile callbacks in extensions.

If you want to find out the type of argument returned by `sieve_parse_args` and its "%", "@" or "*" placeholders, use [sieve_get_type_of_arg](/momentum/3/3-api/apis-sieve-get-type-of-arg) instead.

**<a name="idp60083264"></a> Return Values**

This function returns one of the `SIEVEARG_*` constants. These constants are:

```
/* accessors for sieve args */
enum sieve_arg_type {
  SIEVEARG_BOGUS = 0,
  SIEVEARG_IS_STRING,
  SIEVEARG_IS_NUMBER,
  SIEVEARG_IS_STRINGLIST,
  SIEVEARG_IS_HASH,
  SIEVEARG_IS_TAG
};
```
**<a name="idp60085568"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60086672"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)")