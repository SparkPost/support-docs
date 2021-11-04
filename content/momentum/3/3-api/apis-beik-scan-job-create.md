---
lastUpdated: "03/26/2020"
title: "beik_scan_job_create"
description: "beik scan job create function used by Lua binding function to return a job ec async job beik scan job create m ctx stage ec message m validate context ctx struct lua beik closure stage This reference page was automatically generated from functions found in the header files in the..."
---

<a name="apis.beik_scan_job_create"></a> 
## Name

beik_scan_job_create — function used by Lua binding function to return a job

## Synopsis

`#include "modules/validate/ec_beik_api.h"`

| `ec_async_job * **beik_scan_job_create** (` | <var class="pdparam">m</var>, |   |
|   | <var class="pdparam">ctx</var>, |   |
|   | <var class="pdparam">stage</var>`)`; |   |

`ec_message * <var class="pdparam">m</var>`;
`validate_context * <var class="pdparam">ctx</var>`;
`struct lua_beik_closure * <var class="pdparam">stage</var>`;<a name="idp46966000"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

function used by Lua binding function to return a job

**<a name="idp46968880"></a> Parameters**

<dl class="variablelist">

<dt>m</dt>

<dd>

mail message to be scanned.

</dd>

<dt>ctx</dt>

<dd>

validation context.

</dd>

<dt>stage</dt>

<dd>

the stage closure

</dd>

</dl>

**<a name="idp46975264"></a> Return Values**

a job object.

**Configuration Change. ** This feature is available starting from Momentum 3.1.