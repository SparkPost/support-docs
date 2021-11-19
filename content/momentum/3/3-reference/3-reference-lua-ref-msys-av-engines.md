---
lastUpdated: "03/26/2020"
title: "msys.av.engines"
description: "msys av engines Return a list of configured engine names in a table msys av engines Returns a list of configured engine names in a table Access the individual names using names 1 names 2 etc Enable this function with the statement require msys av Section 14 5 antivirus Antivirus..."
---

<a name="lua.ref.msys.av.engines"></a> 
## Name

msys.av.engines — Return a list of configured engine names in a table

<a name="idp26088368"></a> 
## Synopsis

`msys.av.engines();`

<a name="idp26090352"></a> 
## Description

Returns a list of configured engine names in a table. Access the individual names using `names[1]`, `names[2]`, etc.

Enable this function with the statement `require('msys.av');`.

<a name="idp26093856"></a> 
## See Also

[“antivirus – Antivirus Modules”](/momentum/3/3-reference/3-reference-modules-antivirus)