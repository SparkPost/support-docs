---
lastUpdated: "07/07/2026"
title: "final_validation / final_validation2"
description: "final validation This hook is invoked after the normal validation steps and is the recommended hook point to implement message signing prior to spooling. Two variants exist: core_final_validation (void) and core_final_validation2 (returns a status so a signer can fail or tempfail the message)."
---

<a name="hooks.core.final_validation"></a> 
## Name

final_validation, final_validation2 — This hook is invoked after the normal validation steps

## Synopsis

`#include "hooks/core/final_validation.h"`

| `void **core_final_validation** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

| `int **core_final_validation2** (` | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">ctx</var>`)`; |   |

`void * <var class="pdparam">closure</var>`;
`ec_message * <var class="pdparam">msg</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`validate_context * <var class="pdparam">ctx</var>`;<a name="idp45851968"></a>

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

`core_final_validation` returns `void`.

`core_final_validation2` returns an `int` status:

| Value | Constant | Meaning |
|---|---|---|
| `0` | `EC_HOOK_CONT` | Success — continue. Use this even after a *non-fatal* failure if you want the message delivered unsigned rather than rejected. |
| `1` | `EC_HOOK_DONE` | Error — reject the message (permanent failure). |
| `2` | `EC_HOOK_RETRY` | Temporary error — defer the message; delivery may be retried. |

## Description

This hook is invoked after the normal validation steps have completed and is the recommended hook point to implement message signing prior to spooling the message to disk and attempting delivery.

It fires on **every injection path** — the same point terminates both the SMTP/relay reception sequence and the HTTP/`msg_gen` (transmissions) generation sequence (see [Policy Phases](/momentum/4/4-policy)). This makes it the natural place for signing that must apply regardless of how a message entered Momentum, in contrast to the `validate_data_spool` / `validate_data_spool_each_rcpt` hooks, which are driven only by the SMTP swap-out engine and therefore never fire on the `msg_gen` path.

### final_validation vs. final_validation2

Two variants of this hook exist at the same point:

- **`core_final_validation`** — the original hook. Returns `void`; it cannot signal a result back to the caller, so a failure inside it cannot reject or defer the message.
- **`core_final_validation2`** — an extended variant that returns an `int` status (see *Return Values* below), letting a caller **fail (reject) or tempfail (retry)** the message when the validation fails.

*Both variants are invoked* at the same point; `core_final_validation2` is called **first**, and if it returns `EC_HOOK_DONE`/`EC_HOOK_RETRY` the message is rejected/deferred before `core_final_validation` runs. Existing `void` signers registered on `core_final_validation` continue to work unchanged. The [`post_final_validation`](/momentum/4/hooks/core-post-final-validation) hook runs after both.

## Synopsis (final_validation2)

`#include "hooks/core/final_validation.h"`

The parameters are identical to `core_final_validation` (documented below).

**<a name="idp45865632"></a> Threading**

This hook will be called in any thread.

<a name="idp45866720"></a> 
## See Also
