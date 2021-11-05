---
lastUpdated: "03/26/2020"
title: "sieve_register_extension"
description: "sieve register extension Register a Sieve extension int sieve register extension flags closure action reqd capability compile cb action cb int flags void closure const char action const char reqd capability sieve compile callback compile cb sieve action callback action cb Register a Sieve extension This function can be used..."
---

<a name="apis.sieve_register_extension"></a> 
## Name

sieve_register_extension — Register a Sieve extension

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_register_extension** (` | <var class="pdparam">flags</var>, |   |
|   | <var class="pdparam">closure</var>, |   |
|   | <var class="pdparam">action</var>, |   |
|   | <var class="pdparam">reqd_capability</var>, |   |
|   | <var class="pdparam">compile_cb</var>, |   |
|   | <var class="pdparam">action_cb</var>`)`; |   |

`int <var class="pdparam">flags</var>`;
`void * <var class="pdparam">closure</var>`;
`const char * <var class="pdparam">action</var>`;
`const char * <var class="pdparam">reqd_capability</var>`;
`sieve_compile_callback <var class="pdparam">compile_cb</var>`;
`sieve_action_callback <var class="pdparam">action_cb</var>`;<a name="idp60492048"></a> 
## Description

Register a Sieve extension.

This function can be used to register an extension, that is an action, a test, or both (depending on the context).

**<a name="idp60493808"></a> Parameters**

<dl class="variablelist">

<dt>flags</dt>

<dd>

A combination of `SIV_EXT_*` flags (if any). See [the section called “Sieve Extension Constants”](/momentum/3/3-api/apis-sieve-register-extension#apis.sieve_register_extension.constants).

</dd>

<dt>closure</dt>

<dd>

A pointer that's passed to callbacks.

</dd>

<dt>action</dt>

<dd>

The name of the extension in Sieve scripts.

</dd>

<dt>reqd_capability</dt>

<dd>

The name that the script needs to require; `NULL` means the same as `action`.

</dd>

<dt>compile_cb</dt>

<dd>

The callback for the compile phase. This data type is defined as follows:

```
typedef int (*sieve_compile_callback)(void *closure,
  SIEVE *sieve,
  SIEVEARGS *args,
  int *sievereq /* you set *sievereq to SIEVEREQ_XXX required to execute this action */
);
```
</dd>

<dt>action_cb</dt>

<dd>

The callback for the execution phase. This data type is defined as follows:

```
typedef sieve_action_return_t (*sieve_action_callback)
  (void *closure, SENG *seng, SIEVEARGS *args);
```
</dd>

</dl>

**<a name="idp60509568"></a> Return Values**

Returns `1` on success, `0` on failure.

**<a name="idp60511360"></a> Threading**

It is legal to call this function in the `Scheduler` thread.

<a name="apis.sieve_register_extension.constants"></a> 
### Sieve Extension Constants

These constants are defined in the `sieve/ecsieve.h` file as follows:

```
/**
 * extension supports validation API v0.
 * This is implied if you call sieve_register_action() or sieve_register_test() */
#define SIV_EXT_SUPPORTS_V0  1
/**
 * extension can only be run in a test context.  Implied by sieve_register_test().
 * If you register a non SUPPORTS_V0 extension with this flag, you are responsible
 * for calling sieve_set_test_return_value() before your action_cb returns with a
 * non AGAIN value. */
#define SIV_EXT_IS_ONLY_A_TEST 2
/**
 * extension knows how to run as a fully fledged test.
 * This informs the compiler that it should not rig up the extension
 * using the older ec_test style syntax, which would otherwise strip
 * the final parameter from the args passed to the extension.
 *
 * @since 2.2.1.21
 */
#define SIV_EXT_CAN_RUN_AS_TEST 4
```