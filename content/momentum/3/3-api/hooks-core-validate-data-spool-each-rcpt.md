---
lastUpdated: "03/26/2020"
title: "validate_data_spool_each_rcpt"
description: "validate data spool each rcpt This hook is invoked after the normal validate data spool each rcpt module callback void core validate data spool each rcpt closure msg ac ctx void closure ec message msg accept construct ac validate context ctx This hook is invoked after the normal validate data..."
---

<a name="hooks.core.validate_data_spool_each_rcpt"></a> 
## Name

validate_data_spool_each_rcpt — This hook is invoked after the normal `validate_data_spool_each_rcpt` module callback.

## Synopsis

`#include "hooks/core/validate_data_spool_each_rcpt.h"`

| `void **core_validate_data_spool_each_rcpt** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;<a name="idp33819552"></a> 
## Description

This hook is invoked after the normal `validate_data_spool_each_rcpt` module callback. The only reason to use this hook point instead of a traditional module callback is that you can guarantee an invocation subsequent to all other modules' `validate_data_spool_each_rcpt` callbacks have been performed. The `mess` and `ctx` parameters are the same used in the `validate_data_spool_each_rcpt` traditional module callback.

**<a name="idp33823072"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

A pointer to the closure function.

</dd>

<dt>msg</dt>

<dd>

An ec_message. For documentation of this data structure see [“ec_message”](/momentum/3/3-api/structs-ec-message)

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

**<a name="idp33834000"></a> Return Values**

This hook returns `void`.

**<a name="idp33835360"></a> Threading**

This hook will be called in any thread.

<a name="idp33836384"></a> 
## See Also

[validate_accept](/momentum/3/3-api/hooks-core-validate-accept) and [validate_connect](/momentum/3/3-api/hooks-core-validate-connect)