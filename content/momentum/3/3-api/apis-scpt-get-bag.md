---
lastUpdated: "03/26/2020"
title: "scpt_get_bag"
description: "scpt get bag Returns the environmental bag associated with the current callout ec bag scpt get bag thr scpt thread thr Configuration Change This feature is available starting from Momentum 3 1 This function returns the environmental bag associated with the current callout This function is intended to be called..."
---

<a name="apis.scpt_get_bag"></a> 
## Name

scpt_get_bag — Returns the environmental "bag" associated with the current callout

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `ec_bag * **scpt_get_bag** (` | <var class="pdparam">thr</var>`)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;<a name="idp59106832"></a> 
## Description

**Configuration Change. ** This feature is available starting from Momentum 3.1.

This function returns the environmental "bag" associated with the current callout.

This function is intended to be called in the context of "thr" while it is executing. It does not add a reference to the bag.

**<a name="idp59110336"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

</dl>

**<a name="idp59113648"></a> Return Value**

This function returns an ec_bag. For a description of this data type see [“ec_bag”](/momentum/3/3-api/structs-ec-bag).

**<a name="idp59115168"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59116720"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")