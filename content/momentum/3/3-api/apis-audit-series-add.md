---
lastUpdated: "03/26/2020"
title: "audit_series_add"
description: "audit series add Add a value to the counter associated with a key in a named series int audit series add name count key ac prefix len const char name int count char key accept construct ac int prefix len This reference page was automatically generated from functions found in..."
---

<a name="apis.audit_series_add"></a> 
## Name

audit_series_add — Add a value to the counter associated with a key in a named series

## Synopsis

`#include "modules/validate/audit_series.h"`

| `int **audit_series_add** (` | <var class="pdparam">name</var>, |   |
|   | <var class="pdparam">count</var>, |   |
|   | <var class="pdparam">key</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">prefix_len</var>`)`; |   |

`const char * <var class="pdparam">name</var>`;
`int <var class="pdparam">count</var>`;
`char * <var class="pdparam">key</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`int <var class="pdparam">prefix_len</var>`;<a name="idp47113824"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Add a value to the counter associated with a key in a named series.

Only the current window is affected.

**<a name="idp47117200"></a> Parameters**

<dl class="variablelist">

<dt>name</dt>

<dd>

- name of the series.

</dd>

<dt>count</dt>

<dd>

- the value to be added. It can be positive or negative.

</dd>

<dt>key</dt>

<dd>

- the key for which the counts is desired. For series of type "cidr", key is of the form "ip/mask". to use the remote IP of current session, caller can pass in "ac" instead.

</dd>

<dt>ac</dt>

<dd>

- accept construct. This is the alternative for passing in an IP for cidr series.

</dd>

<dt>prefix_len</dt>

<dd>

- if the type is cidr_ipv6, this determines the prefix to match. Useful for mitigating DoS attacks from a single system cycling addresses.

</dd>

</dl>

**<a name="idp47127984"></a> Return Values**

0 if successful, -1 if error.

**Configuration Change. ** This feature is available starting from Momentum 3.1.