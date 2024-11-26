---
lastUpdated: "11/26/2024"
title: "post_final_validation"
description: "hook invoked after the normal final validation"
---

<a name="hooks.core.post_final_validation"></a>
## Name

post_final_validation — This hook is invoked after the normal
[final_validation](/momentum/3/3-api/hooks-core-final-validation) hook

## Synopsis

`#include "hooks/core/final_validation.h"`

| `int **core_post_final_validation** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;<a name="idp19138336"></a>
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;<a name="idp45851968"></a>


## Description

This hook is invoked right after the
[final_validation](/momentum/3/3-api/hooks-core-final-validation) hook is called. Its return value
does not have significance for now.
This hook is added as the absolute last point before writing the message into spool.
It guarantees that operations implemented in this hook will happen after the operations done in
`final_validtion`.
No any message modification expected after this stage.
To avoid undefined race between multiple implementations of the same hook, you shall only have up
to one implementation for this hook.
It's the recommended hook point for ARC signing/sealing.


**Parameters**

The parameters from this hook are the same as the ones for `final_validation` hook.

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

**Return Values**

This hook returns `int`, but for now has no significance, i.e. the return value is not checked in
the caller.

**Threading**

This hook will be called in any thread.


<a name="idp45866720"></a>
