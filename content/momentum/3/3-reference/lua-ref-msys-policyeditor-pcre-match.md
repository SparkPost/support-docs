---
lastUpdated: "03/26/2020"
title: "msys.policyeditor.pcre_match"
description: "msys policyeditor pcre match Perform a PCRE regex match operation msys policyeditor pcre match ctx vars params Configuration Change This function is deprecated Use local str msys pcre match string pattern to perform a PCRE match For more information see msys pcre match Perform a PCRE regex match operation A..."
---

<a name="lua.ref.msys.policyeditor.pcre_match"></a> 
## Name

msys.policyeditor.pcre_match — Perform a PCRE regex match operation

<a name="idp24961792"></a> 
## Synopsis

`msys.policyeditor.pcre_match(ctx, vars, params);`

```
ctx: table
vars: table
params: table
```

**Configuration Change. ** This function is deprecated. Use `local str = msys.pcre.match("string", "pattern")` to perform a PCRE match. For more information see [msys.pcre.match](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-match).

<a name="idp24967136"></a> 
## Description

Perform a PCRE regex match operation.

A side effect of operation is that the variable `$0` is set to the subject string, `$1` is set to the first capturing subexpression, `$2` the second and so on. Additionally, if you use one of the various forms of named subexpression captures, such as `(?P<name>\d+)`, then the name of each captured item will be prefixed with a dollar sign and set as a script variable (so you'd have `$name` if you used `(?P<name>\d+)`).

The `ctx` parameter is the context containing objects from the callout, `vars` is a table containing script variables and `params` is a table containing parameters to be passed to this routine.

Defined parameters for `params` are:

*   `subject` the string to be matched

*   `pattern` the PCRE regex pattern to match against

<a name="idp24977760"></a> 
## See Also

[“Using Regular Expressions with the Policy Editor”](/momentum/3/3-reference/web-3-policy-editor#web3.policy.editor.regex)