---
lastUpdated: "03/26/2020"
title: "av_engine_next"
description: "av engine next Set position to the next AV engine and return the name of that engine const char av engine next closure struct lua av closure closure This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.av_engine_next"></a> 
## Name

av_engine_next — Set position to the next AV engine and return the name of that engine

## Synopsis

`#include "modules/validate/ec_avengine_api.h"`

| `const char * **av_engine_next** (` | <var class="pdparam">closure</var>`)`; |   |

`struct lua_av_closure * <var class="pdparam">closure</var>`;<a name="idp46929760"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set position to the next AV engine and return the name of that engine.

If end is reached, returns NULL.

**<a name="idp46933152"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

- closure->iter and ave_conf points to the next engine afterward.

</dd>

</dl>

**<a name="idp46936224"></a> Return Values**

name of the next engine.

**Configuration Change. ** This feature is available starting from Momentum 3.1.