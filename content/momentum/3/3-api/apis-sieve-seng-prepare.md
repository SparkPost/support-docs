---
lastUpdated: "03/26/2020"
title: "sieve_seng_prepare"
description: "sieve seng prepare prepare to execute a sieve script SENG sieve seng prepare sieve ctx m ac phase SIEVE sieve validate context ctx email message m accept construct ac const char phase Use sieve seng prepare 2 instead Prepare to execute a sieve script..."
---

<a name="apis.sieve_seng_prepare"></a> 
## Name

sieve_seng_prepare — prepare to execute a sieve script

## Synopsis

`#include "sieve/ecsieve.h"`

| `SENG * **sieve_seng_prepare** (` | <var class="pdparam">sieve</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ac</var>, |   |
|   | <var class="pdparam">phase</var>`)`; |   |

`SIEVE * <var class="pdparam">sieve</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`email_message * <var class="pdparam">m</var>`;
`accept_construct * <var class="pdparam">ac</var>`;
`const char * <var class="pdparam">phase</var>`;<a name="idp60704928"></a> 
## Description

### Deprecated

Use [sieve_seng_prepare2](/momentum/3/3-api/apis-sieve-seng-prepare-2) instead.

Prepare to execute a sieve script.