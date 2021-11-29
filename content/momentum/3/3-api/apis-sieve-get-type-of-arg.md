---
lastUpdated: "03/26/2020"
title: "sieve_get_type_of_arg"
description: "sieve get type of arg Return the type of a Sieve argument enum sieve arg type sieve get type of arg arg SIEVEARGS arg Return the type of a Sieve argument The type of a Sieve argument may not be known at compile time Use this function to find out..."
---

<a name="apis.sieve_get_type_of_arg"></a> 
## Name

sieve_get_type_of_arg — Return the type of a Sieve argument

## Synopsis

`#include "sieve/ecsieve.h"`

| `enum sieve_arg_type **sieve_get_type_of_arg** (` | <var class="pdparam">arg</var>`)`; |   |

`SIEVEARGS * <var class="pdparam">arg</var>`;<a name="idp60194032"></a> 
## Description

Return the type of a Sieve argument.

The type of a Sieve argument may not be known at compile time. Use this function to find out the type of argument returned by `sieve_parse_args` and its "%", "@" or "*" placeholders. Use this function with caution during compile callbacks in extensions.

**<a name="idp60196384"></a> Parameters**

<dl class="variablelist">

<dt>arg</dt>

<dd>

The argument list.

</dd>

</dl>

**<a name="idp60199104"></a> Return Values**

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
**<a name="idp60201408"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60202832"></a> 
## See Also

[Section 68.76, “SIEVEARGS (sieve_ast)”](structs.sieve_ast "68.76. SIEVEARGS (sieve_ast)") and [sieve_get_arg_type](/momentum/3/3-api/apis-sieve-get-arg-type)