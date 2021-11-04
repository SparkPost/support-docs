---
lastUpdated: "03/26/2020"
title: "sieve_execute"
description: "sieve execute Prepare and execute a sieve script int sieve execute sieve ctx m ac phase vseng SIEVE sieve validate context ctx email message m accept construct ac const char phase SENG vseng Use sieve seng prepare 3 and sieve seng execute instead Prepare and execute a sieve script..."
---

<a name="apis.sieve_execute"></a> 
## Name

sieve_execute — Prepare and execute a sieve script

## Synopsis

`#include "sieve/ecsieve.h"`

| `int **sieve_execute** (` | <var class="pdparam">sieve</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">phase</var>, |   |
|   | <var class="pdparam">vseng</var>`)`; |   |

`SIEVE * <var class="pdparam">sieve</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`email_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`const char * <var class="pdparam">phase</var>`;
`SENG ** <var class="pdparam">vseng</var>`;<a name="idp59945408"></a> 
## Description

### Deprecated

Use [sieve_seng_prepare3](/momentum/3/3-api/apis-sieve-seng-prepare-3) and [sieve_seng_execute](/momentum/3/3-api/apis-sieve-seng-execute) instead.

Prepare and execute a sieve script.