---
lastUpdated: "03/26/2020"
title: "av_scan_job_create"
description: "av scan job create function used by Lua binding function to return a job ec async job av scan job create closure struct lua av closure closure This reference page was automatically generated from functions found in the header files in the development branch The function described here may not..."
---

<a name="apis.av_scan_job_create"></a> 
## Name

av_scan_job_create — function used by Lua binding function to return a job

## Synopsis

`#include "modules/validate/ec_avengine_api.h"`

| `ec_async_job * **av_scan_job_create** (` | <var class="pdparam">closure</var>`)`; |   |

`struct lua_av_closure * <var class="pdparam">closure</var>`;<a name="idp46947840"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

function used by Lua binding function to return a job

**<a name="idp46950720"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

- pointer to a closure.

</dd>

</dl>

**<a name="idp46953456"></a> Return Values**

a job object.

**Configuration Change. ** This feature is available starting from Momentum 3.1.