---
lastUpdated: "03/26/2020"
title: "msys.cidr.query"
description: "msys cidr query Look up address against the named CIDR msys cidr query name address This function looks up addresses against the named CIDR When using the datasource or rbldnsd types the return value will always be a string and will either be the value of the value column or..."
---

<a name="lua.ref.msys.cidr.query"></a> 
## Name

msys.cidr.query — Look up address against the named CIDR

<a name="idp17676672"></a> 
## Synopsis

`msys.cidr.query(name, address);`

```
name: string
address: string, optional
```
<a name="idp17679680"></a> 
## Description

This function looks up addresses against the named CIDR. When using the `datasource` or `rbldnsd` types, the return value will always be a string, and will either be the value of the `value_column` or the `a` or `txt` entry. If an entry is not found, this function returns the default_value associated with the CIDR, which is typically `false`. If the address is unspecified, the IP address of the connected peer is assumed.

Enable this function with the statement `require('msys.cidr');`.

<a name="idp17686240"></a> 
## See Also

[“cidrdb – CIDRDB”](/momentum/4/modules/cidrdb), [msys.cidr.define](/momentum/4/lua/ref-msys-cidr-define), [msys.cidr.reload](/momentum/4/lua/ref-msys-cidr-reload)