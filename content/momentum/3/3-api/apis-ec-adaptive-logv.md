---
lastUpdated: "03/26/2020"
title: "ec_adaptive_logv"
description: "ec adaptive logv Log function for AD system to log operational logs void ec adaptive logv level binding domain msgfmt ap int level const char binding const char domain const char msgfmt va list ap This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.ec_adaptive_logv"></a> 
## Name

ec_adaptive_logv — Log function for AD system to log operational logs

## Synopsis

`#include "modules/generic/adaptive.h"`

| `void **ec_adaptive_logv** (` | <var class="pdparam">level</var>, |   |
|   | <var class="pdparam">binding</var>, |   |
|   | <var class="pdparam">domain</var>, |   |
|   | <var class="pdparam">msgfmt</var>, |   |
|   | <var class="pdparam">ap</var>`)`; |   |

`int <var class="pdparam">level</var>`;
`const char * <var class="pdparam">binding</var>`;
`const char * <var class="pdparam">domain</var>`;
`const char * <var class="pdparam">msgfmt</var>`;
`va_list <var class="pdparam">ap</var>`;<a name="idp28874992"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Log function for AD system to log operational logs.

**<a name="idp28155808"></a> Parameters**

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

<dt>ap</dt>

<dd>

- variable list of parameters consistent of the log

</dd>

</dl>

**<a name="idp28165840"></a> Return Values**

- none

**Configuration Change. ** This feature is available starting from Momentum 3.2.