---
lastUpdated: "03/26/2020"
title: "ec_adaptive_logf"
description: "ec adaptive logf Log function for AD system to log operational logs void ec adaptive logf level binding domain msgfmt int level const char binding const char domain const char msgfmt This reference page was automatically generated from functions found in the header files in the development branch The function..."
---

<a name="apis.ec_adaptive_logf"></a> 
## Name

ec_adaptive_logf — Log function for AD system to log operational logs

## Synopsis

`#include "modules/generic/adaptive.h"`

| `void **ec_adaptive_logf** (` | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">msgfmt</var>, |   |
|   | `)`; |   |

`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">msgfmt</var>`;
`...`;<a name="idp28906528"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Log function for AD system to log operational logs.

**<a name="idp28909264"></a> Parameters**

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

<dt>msgfmt</dt>

<dd>

- the format for the log

</dd>

</dl>

**<a name="idp27881664"></a> Return Values**

- none

**Configuration Change. ** This feature is available starting from Momentum 3.2.