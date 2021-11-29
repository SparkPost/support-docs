---
lastUpdated: "03/26/2020"
title: "ec_adaptive_log_config"
description: "ec adaptive log config Log function for AD system to log config change to jlog void ec adaptive log config binding domain optname value const char binding const char domain const char optname const char value This reference page was automatically generated from functions found in the header files in..."
---

<a name="apis.ec_adaptive_log_config"></a> 
## Name

ec_adaptive_log_config — Log function for AD system to log config change to jlog

## Synopsis

`#include "modules/generic/adaptive.h"`

| `void **ec_adaptive_log_config** (` | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">optname</var>, |   |
|   | <var class="pdparam">value</var>`)`; |   |

`const char * <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">optname</var>`;
`const char * <var class="pdparam">value</var>`;<a name="idp46693376"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Log function for AD system to log config change to jlog.

**<a name="idp46696064"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

- binding name

</dd>

<dt>domain</dt>

<dd>

- domain name

</dd>

<dt>optname</dt>

<dd>

- the optval name

</dd>

<dt>value</dt>

<dd>

- the new value to be set

</dd>

</dl>

enable_jlog = true

**<a name="idp28950576"></a> Return Values**

This function returns `void`.

**Configuration Change. ** This feature is available starting from Momentum 3.3.