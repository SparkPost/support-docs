---
lastUpdated: "03/26/2020"
title: "final_validation"
description: "final validation This hook is invoked after the normal validation steps void core final validation closure msg ac ctx void closure ec message msg accept construct ac validate context ctx This hook is invoked after the normal validation steps have completed and is the recommended hook point to implement message..."
---

<a name="hooks.core.final_validation"></a> 
## Name

final_validation — This hook is invoked after the normal validation steps

## Synopsis

`#include "hooks/core/final_validation.h"`

| `void **core_final_validation** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;<a name="idp45851968"></a> 
## Description

This hook is invoked after the normal validation steps have completed and is the recommended hook point to implement message signing prior to spooling the message to disk and attempting delivery.

**<a name="idp45853360"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

A pointer to an ec_message struct. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

</dd>

<dt>ac</dt>

<dd>

The `accept_construct` struct. For documentation of this data structure see [“accept_construct”](/momentum/3/3-api/structs-accept-construct)

</dd>

<dt>ctx</dt>

<dd>

The `validate_context` struct. For documentation of this data structure see [“validate_context”](/momentum/3/3-api/structs-validate-context)

</dd>

</dl>

**<a name="idp45864272"></a> Return Values**

This hook returns `void`.

**<a name="idp45865632"></a> Threading**

This hook will be called in any thread.

<a name="idp45866720"></a> 
## See Also