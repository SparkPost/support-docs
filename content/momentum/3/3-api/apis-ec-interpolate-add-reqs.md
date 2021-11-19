---
lastUpdated: "03/26/2020"
title: "ec_interpolate_add_reqs"
description: "ec interpolate add reqs Add a set of requirements to an interpolation context void ec interpolate add reqs ctx reqs ec interpolate context ctx int reqs Add a set of requirements to an interpolation context A macro implementation would use this to hint at the kind of environment needed for..."
---

<a name="apis.ec_interpolate_add_reqs"></a> 
## Name

ec_interpolate_add_reqs — Add a set of requirements to an interpolation context

## Synopsis

`#include "misc/expand_string.h"`

| `void **ec_interpolate_add_reqs** (` | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">reqs</var>`)`; |   |

`ec_interpolate_context * <var class="pdparam">ctx</var>`;
`int <var class="pdparam">reqs</var>`;<a name="idp53328768"></a> 
## Description

Add a set of requirements to an interpolation context.

A macro implementation would use this to hint at the kind of environment needed for expansion of the string at runtime.

The potential requirements can be discovered using [ec_interpolate_calc_deps](/momentum/3/3-api/apis-ec-interpolate-calc-deps). The requirements are as follows:

```
#define EC_INTERPOLATE_REQ_MSG      1  /* an ec_message */
#define EC_INTERPOLATE_REQ_MSG_BODY 2  /* body content */
#define EC_INTERPOLATE_REQ_MSG_HDRS 4  /* rfc2822_context */
#define EC_INTERPOLATE_REQ_VCTX     8  /* validate_context */
#define EC_INTERPOLATE_REQ_AC       16 /* accept_construct */
```
**<a name="idp53332864"></a> Parameters**

<dl class="variablelist">

<dt>ctx</dt>

<dd>

The interpolation context. For a description of this data type see [ec_interpolate_context](/momentum/3/3-api/structs-ec-interpolate-context).

</dd>

<dt>reqs</dt>

<dd>

This parameter can be any combination of the following:

```
#define EC_INTERPOLATE_REQ_MSG      1  /* an ec_message */
#define EC_INTERPOLATE_REQ_MSG_BODY 2  /* body content */
#define EC_INTERPOLATE_REQ_MSG_HDRS 4  /* rfc2822_context */
#define EC_INTERPOLATE_REQ_VCTX     8  /* validate_context */
#define EC_INTERPOLATE_REQ_AC       16 /* accept_construct */
```
</dd>

</dl>

**<a name="idp53339264"></a> Return Values**

This function returns void.

**<a name="idp53340176"></a> Threading**

It is legal to call this function in any thread.

<a name="idp53341280"></a> 
## See Also

[ec_interpolate_string](/momentum/3/3-api/apis-ec-interpolate-string)