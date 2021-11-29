---
lastUpdated: "03/26/2020"
title: "msys.expandMacro"
description: "msys expand Macro Expand macros such as sieve spf and custom logger macros msys expand Macro Expands macros such as sieve spf and custom logger macros present in the supplied input string and returns the expanded result The parameter passed to msys expand Macro expands the built in validation context..."
---

<a name="lua.ref.msys.expandMacro"></a> 
## Name

msys.expandMacro — Expand macros (such as sieve, spf and custom_logger macros)

<a name="idp16084208"></a> 
## Synopsis

`msys.expandMacro();`

<a name="idp16086448"></a> 
## Description

Expands macros (such as sieve, spf and custom_logger macros) present in the supplied input string and returns the expanded result.

```
require("msys.core")

local mod = {};

function mod:validate_ehlo(str, accept, vctx)
  print("ehlo string is:", msys.expandMacro("%{vctx_conn:ehlo_string}"));
  return msys.core.VALIDATE_CONT;
end

msys.registerModule("ehlo_phase", mod);
```

The parameter passed to `msys.expandMacro` expands the built-in validation context variable, `ehlo_string`. For a list of these variables, see [“Connection Context Variables”](/momentum/4/4-policy-context-variables#policy.predefined-context-conn). *Note*: Not all variables are available in all callouts.

Because this function is in the `msys` namespace, an explicit `require` is not necessary.