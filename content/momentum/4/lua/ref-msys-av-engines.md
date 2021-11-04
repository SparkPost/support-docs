---
lastUpdated: "03/26/2020"
title: "msys.av.engines"
description: "msys av engines Return a list of configured engine names in a table msys av engines Returns a list of configured engine names in a table Access the individual names using names 1 names 2 etc Enable this function with the statement require msys av Section 71 6 antivirus Antivirus..."
---

<a name="lua.ref.msys.av.engines"></a> 
## Name

msys.av.engines — Return a list of configured engine names in a table

<a name="idp17432592"></a> 
## Synopsis

`msys.av.engines();`

<a name="idp17434832"></a> 
## Description

Returns a list of configured engine names in a table. Access the individual names using `names[1]`, `names[2]`, etc.

Enable this function with the statement `require('msys.av');`.

<a name="idp17438560"></a> 
## See Also

[“antivirus – Antivirus”](/momentum/4/modules/4-antivirus)