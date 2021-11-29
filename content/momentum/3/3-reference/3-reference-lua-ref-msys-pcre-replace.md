---
lastUpdated: "03/26/2020"
title: "msys.pcre.replace"
description: "msys pcre replace Perform a PCRE replace operation msys pcre replace subject pattern replacement Perform a PCRE replace operation Enable this function with the statement require msys pcre msys pcre match msys pcre split..."
---

<a name="lua.ref.msys.pcre.replace"></a> 
## Name

msys.pcre.replace — Perform a PCRE replace operation

<a name="idp26798560"></a> 
## Synopsis

`msys.pcre.replace(subject, pattern, replacement);`

```
subject: string
pattern: string
replacement: string
```
<a name="idp26801312"></a> 
## Description

Perform a PCRE replace operation.

```
...
  local orig = self:text();
  if orig == nil then
    return false
  end
  local rep = msys.pcre.replace(orig, pattern, replacement);
  if rep ~= orig then
    self:text(rep, ct.mimetype, ct.charset);
    return true;
  end
```

Enable this function with the statement `require('msys.pcre')`.

<a name="idp26804720"></a> 
## See Also

[msys.pcre.match](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-match), [msys.pcre.split](/momentum/3/3-reference/3-reference-lua-ref-msys-pcre-split)