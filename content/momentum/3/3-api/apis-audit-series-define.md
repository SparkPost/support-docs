---
lastUpdated: "03/26/2020"
title: "audit_series_define"
description: "audit series define Define an named audit series int audit series define name type interval num windows serialize replicate persisted const char name const char type int interval int num windows int serialize char replicate int persisted This reference page was automatically generated from functions found in the header files..."
---

<a name="apis.audit_series_define"></a> 
## Name

audit_series_define — Define an named audit series

## Synopsis

`#include "modules/validate/audit_series.h"`

| `int **audit_series_define** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">type</var>, |   |
|   | <var class="pdparam">interval</var>, |   |
|   | <var class="pdparam">num_windows</var>, |   |
|   | <var class="pdparam">serialize</var>, |   |
|   | <var class="pdparam">replicate</var>, |   |
|   | <var class="pdparam">persisted</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`const char * <var class="pdparam">type</var>`;
`int <var class="pdparam">interval</var>`;
`int <var class="pdparam">num_windows</var>`;
`int <var class="pdparam">serialize</var>`;
`char * <var class="pdparam">replicate</var>`;
`int <var class="pdparam">persisted</var>`;<a name="idp47171184"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Define an named audit series.

It should be called only once for a named series.

**<a name="idp47174544"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

- name of the series.

</dd>

<dt>type</dt>

<dd>

- type of the series. It should be "cidr", "cidr_ipv6", or "string".

</dd>

<dt>interval</dt>

<dd>

- the time window size in seconds.

</dd>

<dt>num_windows</dt>

<dd>

- the number of windows in the series.

</dd>

<dt>serialize</dt>

<dd>

- if != 0, the series will be written to log.

</dd>

<dt>replicate</dt>

<dd>

- if = "cluster", the series will be replicated across cluster. if = "manager", the series will be replicated to manager only.

</dd>

<dt>persisted</dt>

<dd>

- if != 0, the series will will be persisted and survive the restart.

</dd>

</dl>

**<a name="idp47188912"></a> Return Values**

one of the audit_series_return_code.

**Configuration Change. ** This feature is available starting from Momentum 3.1.