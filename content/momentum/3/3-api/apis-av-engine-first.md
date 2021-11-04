---
lastUpdated: "03/26/2020"
title: "av_engine_first"
description: "av engine first Set position to the first AV engine and return the name of that engine const char av engine first closure struct lua av closure closure This reference page was automatically generated from functions found in the header files in the development branch The function described here may..."
---

<a name="apis.av_engine_first"></a> 
## Name

av_engine_first — Set position to the first AV engine and return the name of that engine

## Synopsis

`#include "modules/validate/ec_avengine_api.h"`

| `const char * **av_engine_first** (` | <var class="pdparam">closure</var>`)`; |   |

`struct lua_av_closure * <var class="pdparam">closure</var>`;<a name="idp46911744"></a> 
## Description

### Note

This reference page was automatically generated from functions found in the header files in the development branch. The function described here may not exist in generally available versions of Momentum, and may change in behavior when it is generally available. Consult your vendor for definitive advice on the use of this function.

Set position to the first AV engine and return the name of that engine.

If there is no engine configured, returns NULL.

**<a name="idp46915152"></a> Parameters**

<dl class="variablelist">

<dt>closure</dt>

<dd>

- closure->iter and ave_conf points to the first engine afterward.

</dd>

</dl>

**<a name="idp46918224"></a> Return Values**

name of the first engine.

**Configuration Change. ** This feature is available starting from Momentum 3.1.