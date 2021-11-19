---
lastUpdated: "03/26/2020"
title: "audit_series_get_type"
description: "audit series get type Return the type of the named series const char audit series get type series const char series This reference page was automatically generated from functions found in the header files in the development branch The function described here may not exist in generally available versions of..."
---

<a name="apis.audit_series_get_type"></a> 
## Name

audit_series_get_type — Return the type of the named series

## Synopsis

`#include "modules/validate/audit_series.h"`

| `const char * **audit_series_get_type** (` | <var class="pdparam">series</var>`)`; |   |

`const char * <var class="pdparam">series</var>`;<a name="idp47223808"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return the type of the named series.

Possible values are "cidr" or "string".

**<a name="idp47227152"></a> Parameters**

<dl class="variablelist">

<dt>series</dt>

<dd>

- the name of the series.

</dd>

</dl>

**<a name="idp47230176"></a> Return Values**

"cidr" or "string".

**Configuration Change. ** This feature is available starting from Momentum 3.1.