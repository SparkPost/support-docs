---
lastUpdated: "03/26/2020"
title: "ec_adaptive_log"
description: "ec adaptive log Log function for AD system to log operational logs void ec adaptive log level binding domain msg int level const char binding const char domain const char msg This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_adaptive_log"></a> 
## Name

ec_adaptive_log — Log function for AD system to log operational logs

## Synopsis

`#include "modules/generic/adaptive.h"`

| `void **ec_adaptive_log** (` | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">msg</var>`)`; |   |

`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">msg</var>`;<a name="idp46670144"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Log function for AD system to log operational logs.

**<a name="idp46672832"></a> Parameters**

<dl class="variablelist">

<dt>level</dt>

<dd>

- the log level. Possible values are from DCRITICAL to DDEBUG

</dd>

<dt>binding</dt>

<dd>

- binding name

</dd>

<dt>domain</dt>

<dd>

- domain name

</dd>

<dt>msg</dt>

<dd>

- the message to be logged

</dd>

</dl>

**<a name="idp46680784"></a> Return Values**

- none

**Configuration Change. ** This feature is available starting from Momentum 3.2.