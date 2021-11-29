---
lastUpdated: "03/26/2020"
title: "audit_series_remove_item"
description: "audit series remove item Remove the item identified by key in a named series int audit series remove item name key ac const char name char key accept construct ac This reference page was automatically generated from functions found in the header files in the development branch The function described..."
---

<a name="apis.audit_series_remove_item"></a> 
## Name

audit_series_remove_item — Remove the item identified by key in a named series

## Synopsis

`#include "modules/validate/audit_series.h"`

| `int **audit_series_remove_item** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`char * <var class="pdparam">key</var>`;
`accept_construct * <var class="pdparam">ac</var>`;<a name="idp47256464"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Remove the item identified by key in a named series.

**<a name="idp47259344"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

- name of the series.

</dd>

<dt>key</dt>

<dd>

- the key for which the counts is desired. For series of type "cidr", key is of the form "ip/mask". to use the remote IP of current session, caller can pass in "ac" instead.

</dd>

<dt>ac</dt>

<dd>

- accept construct. This is the alternative for passing in an IP for cidr series.

</dd>

</dl>

**<a name="idp47265984"></a> Return Values**

0 if successful, -1 if error.

**Configuration Change. ** This feature is available starting from Momentum 3.1.