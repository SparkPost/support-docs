---
lastUpdated: "03/26/2020"
title: "audit_series_get_items"
description: "audit series get items Return the item of the named series audit series item audit series get items series start end const char series int start int end This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.audit_series_get_items"></a> 
## Name

audit_series_get_items — Return the item of the named series

## Synopsis

`#include "modules/validate/audit_series.h"`

| `audit_series_item * **audit_series_get_items** (` | <var class="pdparam">series</var>, |   |
|   | <var class="pdparam">start</var>, |   |
|   | <var class="pdparam">end</var>`)`; |   |

`const char * <var class="pdparam">series</var>`;
`int <var class="pdparam">start</var>`;
`int <var class="pdparam">end</var>`;<a name="idp47202048"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return the item of the named series.

The series must be of type "string".

**<a name="idp47205392"></a> Parameters**

<dl class="variablelist">

<dt>series</dt>

<dd>

- the name of the series.

</dd>

<dt>start</dt>

<dd>

- The start window to compute the count (inclusive).

</dd>

<dt>end</dt>

<dd>

- The end window to compute the count (inclusive).

</dd>

</dl>

**<a name="idp47212144"></a> Return Values**

linked list of audit_series_item which should be released by audit_series_item_delref.

**Configuration Change. ** This feature is available starting from Momentum 3.2.