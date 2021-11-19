---
lastUpdated: "03/26/2020"
title: "msys.audit_series.count"
description: "msys audit series count Return the total associated with the named series msys audit series count name options This function returns the total associated with the named series that is passed in as the first argument options may be a table that provides additional query parameters For all series types..."
---

<a name="lua.ref.msys.audit_series.count"></a> 
## Name

msys.audit_series.count — Return the total associated with the named series

<a name="idp17337904"></a> 
## Synopsis

`msys.audit_series.count(name, options);`

```
name: string
options: table, optional
```
<a name="idp17340848"></a> 
## Description

This function returns the total associated with the named series that is passed in as the first argument.

`options` may be a table that provides additional query parameters. For all series types, the following query parameters can be used:

*   `startv` the starting window (default 0) to query across

*   `endv` the ending window (default 0) to query across

*   `key` interpretation depends on the series type

    For a CIDR series, the key is interpreted as an IP/mask specifying the address of interest. If accept_construct is passed in, the remote IP of the accept construct is used. If the type is not specified or only "/mask" is specified, the current connected IP is assumed. For a string series, the key is the string key to look up. If it is not specified, an error is thrown.

When specifying a window range, the aggregate sum over the specified range will be returned instead of the value from the current time window.

**This feature supports IPv6.**

IPv6 addresses are much more flexible than IPv4 addresses in terms of their formatting options. They also use a different delimiter character than IPv4 addresses (a colon instead of a period). This means that in certain contexts, an IPv6 address can create parsing ambiguities.

The accepted convention is to require that, in circumstances where a configuration parameter can also contain something other than an IP address, that an IPv6 address must be enclosed in square brackets. In practical terms, this means that things like the `gateway`, `routes` and `listen` options must have IPv6 addresses enclosed in brackets. Others, such as `peer`, `relay_hosts` and `prohibited_hosts` do not require the IPv6 address in brackets.

If `options` is not a table, then it is assumed to be the value for the key parameter.

Enable this function with the statement `require('msys.audit_series');`.

<a name="idp17357072"></a> 
## See Also

[msys.audit_series.define](/momentum/4/lua/ref-msys-audit-series-define), [msys.audit_series.add](/momentum/4/lua/ref-msys-audit-series-add), [msys.audit_series.remove_item](/momentum/4/lua/ref-msys-audit-series-remove-item), [use_ipv6](/momentum/4/config/ref-use-ipv-6), [“inbound_audit – Inbound traffic analytics”](/momentum/4/modules/inbound-audit)