---
lastUpdated: "03/26/2020"
title: "scpt_raise_error"
description: "scpt raise error triggers an exception in the scriptlet runtime int scpt raise error thr fmt scpt thread thr const char fmt This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions..."
---

<a name="apis.scpt_raise_error"></a> 
## Name

scpt_raise_error — triggers an "exception" in the scriptlet runtime

## Synopsis

`#include "modules/scriptlets/ec_scriptlet.h"`

| `int **scpt_raise_error** (` | <var class="pdparam">thr</var>, |   |
|   | <var class="pdparam">fmt</var>, |   |
|   | `)`; |   |

`scpt_thread * <var class="pdparam">thr</var>`;
`const char * <var class="pdparam">fmt</var>`;
`...`;<a name="idp59433600"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

triggers an "exception" in the scriptlet runtime

**<a name="idp59436480"></a> Parameters**

<dl class="variablelist">

<dt>thr</dt>

<dd>

The script thread. For a description of this data type see [“scpt_thread”](/momentum/3/3-api/structs-scpt-thread).

</dd>

<dt>value</dt>

<dd>

The double that you wish to push.

</dd>

</dl>

**<a name="idp59441648"></a> Return Value**

This function returns void.

**<a name="idp59442560"></a> Threading**

It is legal to call this function in any thread.

<a name="idp59444112"></a> 
## See Also

[Chapter 42, *Scriptlet (and Alerting) Functions*](script "Chapter 42. Scriptlet (and Alerting) Functions")