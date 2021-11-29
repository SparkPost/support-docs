---
lastUpdated: "03/26/2020"
title: "ec_adaptive_sweep_rules_by_binding_domain"
description: "ec adaptive sweep rules by binding domain Return a list of applicable sweep rules for given binding domain pair ec adaptive sweep rule ec adaptive sweep rules by binding domain slot domain ec binding slot slot const char domain This reference page was automatically generated from functions found in the..."
---

<a name="apis.ec_adaptive_sweep_rules_by_binding_domain"></a> 
## Name

ec_adaptive_sweep_rules_by_binding_domain — Return a list of applicable sweep rules for given binding/domain pair

## Synopsis

`#include "modules/generic/adaptive.h"`

| `ec_adaptive_sweep_rule * **ec_adaptive_sweep_rules_by_binding_domain** (` | <var class="pdparam">slot</var>, |   |
|   | <var class="pdparam">domain</var>`)`; |   |

`ec_binding_slot <var class="pdparam">slot</var>`;
`const char * <var class="pdparam">domain</var>`;<a name="idp46773200"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Return a list of applicable sweep rules for given binding/domain pair.

**<a name="idp46776112"></a> Parameters**

<dl class="variablelist">

<dt>binding</dt>

<dd>

- binding name

</dd>

<dt>slot</dt>

<dd>

- binding slot. If not known, pass in -1\. Only one of the binding/slot should be used.

</dd>

<dt>domain</dt>

<dd>

- domain name.

</dd>

</dl>

**<a name="idp46782576"></a> Return Values**

- linked list of ec_adaptive_sweep_rule. Must call ec_adaptive_delref_sweep_rule to release it.

**Configuration Change. ** This feature is available starting from Momentum 3.2.