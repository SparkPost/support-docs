---
lastUpdated: "03/26/2020"
title: "sieve_hard_error"
description: "sieve hard error Report an error in a Sieve extension int sieve hard error seng msg SENG seng const char msg Report an error in a Sieve extension The purpose of this routine is to log error information such as invalid parameters to the panic log and return from a..."
---

<a name="apis.sieve_hard_error"></a> 
## Name

sieve_hard_error — Report an error in a Sieve extension

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_hard_error** (` | <var class="pdparam">seng</var>, |   |
|   | <var class="pdparam">msg</var>, |   |
|   | <var class="pdparam">...</var>`)`; |   |

`SENG * <var class="pdparam">seng</var>`;
`const char * <var class="pdparam">msg</var>`;
`<var class="pdparam">...</var>`;<a name="idp60231952"></a> 
## Description

Report an error in a Sieve extension.

The purpose of this routine is to log error information, such as invalid parameters, to the panic log and return from a Sieve extension routine.

If Sieve is configured to fail on a runtime error, this function will set the validation context to reply code 421 (Service not available, closing transmission channel) so that the inbound session will be retried by the sender at a later time.

If Sieve is configured to continue on a runtime error, this function will simply log an error and the script will continue running the next statement.

To set the Sieve error mode see [sieve_set_error_mode](/momentum/3/3-api/apis-sieve-set-error-mode).

**<a name="idp60236304"></a> Parameters**

<dl class="variablelist">

<dt>seng</dt>

<dd>

The Sieve engine.

</dd>

<dt>msg</dt>

<dd>

The message with format specifiers, if required.

</dd>

<dt>...</dt>

<dd>

The variable argument(s).

</dd>

</dl>

**<a name="idp60242720"></a> Return Values**

Returns `SIV_CONT` if Sieve should continue running the script, or `SIV_DONE` if the script should terminate. You must return one of these values from your routine.

**<a name="idp60244640"></a> Threading**

It is legal to call this function in any thread.

<a name="idp60245744"></a> 
## See Also

[Section 68.73, “SENG (sieve_engine)”](structs.seng "68.73. SENG (sieve_engine)")