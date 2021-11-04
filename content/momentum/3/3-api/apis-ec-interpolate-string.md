---
lastUpdated: "03/26/2020"
title: "ec_interpolate_string"
description: "ec interpolate string Performs string interpolation int ec interpolate string input output mode bag job default namespace flags const char input string output int mode ec bag bag ec async job job const char default namespace int flags This reference page was automatically generated from functions found in the header..."
---

<a name="apis.ec_interpolate_string"></a> 
## Name

ec_interpolate_string — Performs string interpolation

## Synopsis

`#include "misc/expand_string.h"`

| `int **ec_interpolate_string** (` | <var class="pdparam">input</var>, |   |
|   | <var class="pdparam">output</var>, |   |
|   | <var class="pdparam">mode</var>, |   |
|   | <var class="pdparam">bag</var>, |   |
|   | <var class="pdparam">job</var>, |   |
|   | <var class="pdparam">default_namespace</var>, |   |
|   | <var class="pdparam">flags</var>`)`; |   |

`const char * <var class="pdparam">input</var>`;
`string * <var class="pdparam">output</var>`;
`int <var class="pdparam">mode</var>`;
`ec_bag * <var class="pdparam">bag</var>`;
`ec_async_job ** <var class="pdparam">job</var>`;
`const char * <var class="pdparam">default_namespace</var>`;
`int <var class="pdparam">flags</var>`;<a name="idp53453952"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Performs string interpolation.

Given a utf-8 encoded input string, will perform interpolation and expansion of % style macros. Some macros may require DNS or other non-trivial work to expand; if that is the case the behavior of this function will depend on the mode parameter.

If mode is EC_INTERPOLATE_BLOCKING then the expansion work should be carried out in a blocking fashion; the ec_expand_string will not return until the work is complete.

If mode is EC_INTERPOLATE_QUICK then the non-trivial portions of the expansion will be treated as though those macros expanded to empty strings.

If mode is EC_INTERPOLATE_NON_BLOCKING then the expansion may return EC_INTERPOLATE_EXPN_ASYNC to indicate that calling it again at a later time will have better results.

If mode is EC_INTERPOLATE_ASYNC then the non-trivial portions of the expansion should occur asynchronously.

If mode is EC_INTERPOLATE_NON_BLOCKING or EC_INTERPOLATE_ASYNC, then the job parameter must not be NULL; it will be populated with a job that will continue the expansion process. The caller may then set the appropriate completion options for the job and queue the job using ec_queue_async_job(). Note that the caller is responsible for queueing the job, otherwise it will never execute.

If mode is EC_INTERPOLATE_ASYNC, the caller is reponsible for making sure that the input, output and bag parameters remain valid for the duration of that asynchronous work--this usually means that they must not be stack variables or otherwise live in transient storage that is freed as the call stack unwinds back up to the scheduler.

The actual macros and their expansions are controlled by modules registering macro expansion hooks. The bag parameter provides generic storage for contextual information that may be used by those hooks; the caller is responsible for passing in a bag populated with the contextual information, otherwise the macro hooks may be missing information.

The default_namespace parameter is usually NULL. If it is non-NULL, then macros of the form %{foo} will be considered equal to %{default_namespace:foo} if there is no exact match for %{foo}.

**<a name="idp53463072"></a> Parameters**

<dl class="variablelist">

<dt>input</dt>

<dd>

the utf-8 encoded string to be interpolated.

</dd>

<dt>output</dt>

<dd>

a string to hold the resulting interpolated string.

</dd>

<dt>mode</dt>

<dd>

to affect the operation of the expansion.

</dd>

<dt>bag</dt>

<dd>

holds context for the interpolation.

</dd>

<dt>job</dt>

<dd>

a pointer that will hold the job that should be queued to complete the interpolation.

</dd>

<dt>default_namespace</dt>

<dd>

a prefix to imply if none is present.

</dd>

<dt>flags</dt>

<dd>

flags to control string interpolation style

</dd>

</dl>

**<a name="idp53477008"></a> Return Values**

Returns EC_INTERPOLATE_NO_EXPN if no expansion was required. In this case, the output string will not be modified, avoiding memory allocation. Returns EC_INTERPOLATE_EXPN_ASYNC if additional work is required and job is not NULL. Returns EC_INTERPOLATE_EXPANDED if the string was expanded. The resultant string will be written to the provided output string.