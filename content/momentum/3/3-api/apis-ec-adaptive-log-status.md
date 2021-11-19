---
lastUpdated: "03/26/2020"
title: "ec_adaptive_log_status"
description: "ec adaptive log status Log function for AD system to log status change to jlog void ec adaptive log status binding domain status const char binding const char domain int status This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_adaptive_log_status"></a> 
## Name

ec_adaptive_log_status — Log function for AD system to log status change to jlog

## Synopsis

`#include "modules/generic/adaptive.h"`

| `void **ec_adaptive_log_status** (` | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">status</var>`)`; |   |

`const char * <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`int <var class="pdparam">status</var>`;<a name="idp28943712"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Log function for AD system to log status change to jlog.

**<a name="idp28892400"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

- binding name

</dd>

<dt>domain</dt>

<dd>

- domain name

</dd>

<dt>status</dt>

<dd>

- 0: clear; 1: suspended; 2: blackholed

</dd>

</dl>

enable_jlog = true

**<a name="idp27719936"></a> Return Values**

- none

**Configuration Change. ** This feature is available starting from Momentum 3.3.