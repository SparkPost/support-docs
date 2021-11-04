---
lastUpdated: "03/26/2020"
title: "ec_alerting_inc_count"
description: "ec alerting inc count Increment a counter for an arbitrary key for a given binding domain uint 64 t ec alerting inc count binding domain key int binding const char domain const char key Increment a counter for an arbitrary key for a given binding domain binding The binding of..."
---

<a name="apis.ec_alerting_inc_count"></a> 
## Name

ec_alerting_inc_count — Increment a counter for an arbitrary key for a given binding/domain

## Synopsis

`#include "modules/generic/alerting.h"`

| `uint64_t **ec_alerting_inc_count** (` | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">key</var>`)`; |   |

`int <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">key</var>`;<a name="idp58964096"></a> 
## Description

Increment a counter for an arbitrary key for a given binding/domain.

**<a name="idp58965344"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

The binding of interest.

</dd>

<dt>domain</dt>

<dd>

The domain of interest

</dd>

<dt>key</dt>

<dd>

The key to increment.

</dd>

</dl>

Returns the newly incremented value.

**<a name="idp58972224"></a> Threading**

It is legal to call this function in any thread.

<a name="idp58973328"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")