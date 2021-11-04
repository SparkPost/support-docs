---
lastUpdated: "03/26/2020"
title: "minimal_tryread_construct_free"
description: "minimal tryread construct free Release the resources of a minimal tryread construct void minimal tryread construct free mtc minimal tryread construct mtc Release the resources of a Section 68 61 minimal tryread construct struct mtc The address of the Section 68 61 minimal tryread construct struct that you wish to..."
---

<a name="apis.minimal_tryread_construct_free"></a> 
## Name

minimal_tryread_construct_free — Release the resources of a `minimal_tryread_construct`

## Synopsis

`#include "ec_growbuf.h"`

| `void **minimal_tryread_construct_free** (` | <var class="pdparam">mtc</var>`)`; |   |

`minimal_tryread_construct * <var class="pdparam">mtc</var>`;<a name="idp48071296"></a> 
## Description

Release the resources of a [“minimal_tryread_construct”](/momentum/3/3-api/structs-minimal-tryread-construct) struct.

**<a name="idp48073088"></a> Parameters**

<dl class="variablelist">

<dt>mtc</dt>

<dd>

The address of the [“minimal_tryread_construct”](/momentum/3/3-api/structs-minimal-tryread-construct) struct that you wish to free.

</dd>

</dl>

**<a name="idp48076416"></a> Return Values**

This function returns `void`.

**<a name="idp48077776"></a> Threading**

It is legal to call this function in any thread.

<a name="idp48078880"></a> 
## See Also

[trywrite](/momentum/3/3-api/apis-trywrite), [trywritef](/momentum/3/3-api/apis-trywritef), and [tryread_until](/momentum/3/3-api/apis-tryread-until)