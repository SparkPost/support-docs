---
lastUpdated: "03/26/2020"
title: "audit_series_count"
description: "audit series count Get the accumulated counts from a named series for a given key int audit series count name start end key ac const char name int start int end char key accept construct ac This reference page was automatically generated from functions found in the header files in..."
---

<a name="apis.audit_series_count"></a> 
## Name

audit_series_count — Get the accumulated counts from a named series for a given key

## Synopsis

`#include "modules/validate/audit_series.h"`

| `int **audit_series_count** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">start</var>, |   |
|   | <var class="pdparam">end</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">ac</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">start</var>`;
`int <var class="pdparam">end</var>`;
`char * <var class="pdparam">key</var>`;
`accept_construct * <var class="pdparam">ac</var>`;<a name="idp47142512"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Get the accumulated counts from a named series for a given key.

**<a name="idp47145408"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

- name of the series.

</dd>

<dt>start</dt>

<dd>

- the starting time window.

</dd>

<dt>end</dt>

<dd>

- the ending time window (inclusive).

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

**<a name="idp47155728"></a> Return Values**

counts summed over the given time windows. -1 in case of error.

**Configuration Change. ** This feature is available starting from Momentum 3.1.